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
  const topicLabel =
    TOPIC_OPTIONS.find((option) => option.value === validatedData.topic)?.label ||
    validatedData.topic

  console.log('\n=============== EMAIL TO CLINIC (DEV MODE) ===============')
  console.log('From:', process.env.EMAIL_USER || 'not-configured@example.com')
  console.log('To:', recipientEmail)
  console.log('Reply-To:', validatedData.email)
  console.log('Subject:', `(${topicLabel}) Nová zpráva z webu - ${validatedData.name}`)
  console.log('-----------------------------------------------------------')
  console.log('Jméno:', validatedData.name)
  console.log('Email:', validatedData.email)
  if (validatedData.phone) console.log('Telefon:', validatedData.phone)
  console.log('Téma:', topicLabel)
  console.log('\nZpráva:')
  console.log(validatedData.message)
  console.log('===========================================================\n')

  console.log('\n=========== CONFIRMATION EMAIL TO USER (DEV MODE) =========')
  console.log('From:', process.env.EMAIL_USER || 'not-configured@example.com')
  console.log('To:', validatedData.email)
  console.log('Subject: Potvrzení přijetí zprávy - Kardiologie Brandýs')
  console.log('-----------------------------------------------------------')
  console.log(`Dobrý den ${validatedData.name},`)
  console.log('děkujeme za odeslání zprávy.')
  console.log('\nShrnutí:')
  console.log('Téma:', topicLabel)
  console.log('Zpráva:', validatedData.message)
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

        // Send email to clinic
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

        // Send confirmation email to user
        await transporter.sendMail({
          from: recipientEmail,
          to: validatedData.email,
          replyTo: recipientEmail,
          subject: 'Potvrzení přijetí zprávy - Kardiologie Brandýs',
          html: `
            <h2>Děkujeme za vaši zprávu</h2>
            <p>Dobrý den ${validatedData.name},</p>
            <p>děkujeme za odeslání zprávy prostřednictvím našeho kontaktního formuláře. Vaši zprávu jsme přijali a co nejdříve se vám ozveme.</p>

            <h3>Shrnutí vaší zprávy:</h3>
            <p><strong>Téma:</strong> ${topicLabel}</p>
            <p><strong>Zpráva:</strong></p>
            <p>${validatedData.message.replace(/\n/g, '<br>')}</p>

            <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">

            <p style="font-size: 14px; color: #6b7280;">
              <strong>Kardiologická ambulance MEDICUS SERVICES s.r.o.</strong><br>
              Nádražní 1317/5, 250 01 Brandýs nad Labem<br>
              Telefon: <a href="tel:+420326396790">+420 326 396 790</a><br>
              Email: kardiologie.brandys@seznam.cz<br>
              Web: <a href="https://kardiologiebrandys.cz">kardiologiebrandys.cz</a>
            </p>
          `,
          text: `
Děkujeme za vaši zprávu

Dobrý den ${validatedData.name},

děkujeme za odeslání zprávy prostřednictvím našeho kontaktního formuláře. Vaši zprávu jsme přijali a co nejdříve se vám ozveme.

Shrnutí vaší zprávy:
Téma: ${topicLabel}
Zpráva:
${validatedData.message}

---

Kardiologická ambulance MEDICUS SERVICES s.r.o.
Nádražní 1317/5, 250 01 Brandýs nad Labem
Telefon: +420 326 396 790
Email: kardiologie.brandys@seznam.cz
Web: kardiologiebrandys.cz
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
