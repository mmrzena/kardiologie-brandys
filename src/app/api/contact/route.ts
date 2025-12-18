import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'
import { TOPIC_OPTIONS, TOPIC } from '@/data/topics'

// Email routing by topic (configured via environment variables):
// EMAIL_PORADNA - for poradna topic
// EMAIL_SPORTOVCI - for sportovci topic
// EMAIL_DEFAULT - for objednani, recept, ostatni topics (fallback)

function getRecipientEmail(topic: string): string {
  switch (topic) {
    case TOPIC.PORADNA:
      return (
        process.env.EMAIL_PORADNA || process.env.EMAIL_DEFAULT || 'kardiologie.brandys@seznam.cz'
      )
    case TOPIC.SPORTOVCI:
      return (
        process.env.EMAIL_SPORTOVCI || process.env.EMAIL_DEFAULT || 'kardiologie.brandys@seznam.cz'
      )
    case TOPIC.OBJEDNANI:
    case TOPIC.RECEPT:
    case TOPIC.OTHER:
    default:
      return process.env.EMAIL_DEFAULT || 'kardiologie.brandys@seznam.cz'
  }
}

const contactSchema = z.object({
  name: z.string().min(2, 'Jméno musí mít alespoň 2 znaky'),
  email: z.string().email('Neplatná emailová adresa'),
  phone: z.string().optional().or(z.literal('')),
  topic: z.string().min(2, 'Vyberte prosím typ požadavku'),
  message: z.string().min(10, 'Zpráva musí mít alespoň 10 znaků'),
})

function logEmail(validatedData: z.infer<typeof contactSchema>, recipientEmail: string) {
  console.log('\n==================== EMAIL (DEV MODE) ====================')
  console.log('From:', process.env.EMAIL_USER || 'not-configured@example.com')
  console.log('To:', recipientEmail)
  console.log('Reply-To:', validatedData.email)
  console.log('Subject:', `(${validatedData.topic}) Nová zpráva z webu - ${validatedData.name}`)
  console.log('-----------------------------------------------------------')
  console.log('Jméno:', validatedData.name)
  console.log('Email:', validatedData.email)
  if (validatedData.phone) console.log('Telefon:', validatedData.phone)
  console.log('Téma:', validatedData.topic)
  console.log('\nZpráva:')
  console.log(validatedData.message)
  console.log('===========================================================\n')
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validatedData = contactSchema.parse(body)

    // Get recipient email based on topic
    const recipientEmail = getRecipientEmail(validatedData.topic)

    const useMockEmail =
      process.env.NEXT_PUBLIC_USE_MOCK_DB === 'true' ||
      !process.env.EMAIL_HOST ||
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASSWORD

    if (useMockEmail) {
      logEmail(validatedData, recipientEmail)
    } else {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.EMAIL_HOST,
          port: Number(process.env.EMAIL_PORT),
          secure: false,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
          },
        })

        const topicLabel =
          TOPIC_OPTIONS.find((option) => option.value === validatedData.topic)?.label ||
          validatedData.topic

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: recipientEmail,
          replyTo: validatedData.email,
          subject: `(${topicLabel}) Nová zpráva z webu - ${validatedData.name}`,
          html: `
            <h2>Nová zpráva z kontaktního formuláře</h2>
            <p><strong>Jméno:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            ${validatedData.phone ? `<p><strong>Telefon:</strong> ${validatedData.phone}</p>` : ''}
            <p><strong>Téma:</strong> ${topicLabel}</p>
            <p><strong>Zpráva:</strong></p>
            <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
          `,
          text: `
Nová zpráva z kontaktního formuláře

Jméno: ${validatedData.name}
Email: ${validatedData.email}
${validatedData.phone ? `Telefon: ${validatedData.phone}` : ''}
Téma: ${topicLabel}
Zpráva:
${validatedData.message}
          `,
        })
      } catch (emailError) {
        console.error('Email error:', emailError)
        return NextResponse.json({ error: 'Nepodařilo se odeslat email' }, { status: 500 })
      }
    }

    return NextResponse.json({ message: 'Zpráva byla úspěšně odeslána' }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      const message = error.errors.map((err) => err.message).join('; ')
      return NextResponse.json({ error: message, details: error.issues }, { status: 400 })
    }

    console.error('Unexpected error:', error)
    return NextResponse.json({ error: 'Nastala chyba při zpracování požadavku' }, { status: 500 })
  }
}
