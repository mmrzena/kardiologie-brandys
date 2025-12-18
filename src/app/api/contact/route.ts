import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

// Poradna - jikru@volny.cz
// Sportovi - karolina.krupickova@gmail.com
// ostatni veci - kardiologie.brandys@seznam.cz

const contactSchema = z.object({
  name: z.string().min(2, 'Jméno musí mít alespoň 2 znaky'),
  email: z.string().email('Neplatná emailová adresa'),
  phone: z.string().optional().or(z.literal('')),
  topic: z.string().min(2, 'Vyberte prosím typ požadavku'),
  message: z.string().min(10, 'Zpráva musí mít alespoň 10 znaků'),
})

function logEmail(validatedData: z.infer<typeof contactSchema>) {
  console.log('\n==================== EMAIL (DEV MODE) ====================')
  console.log('From:', process.env.EMAIL_USER || 'not-configured@example.com')
  console.log('To:', process.env.EMAIL_TO || 'doctor@kardiologiebrandys.cz')
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

    const useMockEmail =
      process.env.NEXT_PUBLIC_USE_MOCK_DB === 'true' ||
      !process.env.EMAIL_HOST ||
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASSWORD ||
      !process.env.EMAIL_TO

    if (useMockEmail) {
      logEmail(validatedData)
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

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_TO,
          replyTo: validatedData.email,
          subject: `(${validatedData.topic}) Nová zpráva z webu - ${validatedData.name}`,
          html: `
            <h2>Nová zpráva z kontaktního formuláře</h2>
            <p><strong>Jméno:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            ${validatedData.phone ? `<p><strong>Telefon:</strong> ${validatedData.phone}</p>` : ''}
            <p><strong>Téma:</strong> ${validatedData.topic}</p>
            <p><strong>Zpráva:</strong></p>
            <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
          `,
          text: `
Nová zpráva z kontaktního formuláře

Jméno: ${validatedData.name}
Email: ${validatedData.email}
${validatedData.phone ? `Telefon: ${validatedData.phone}` : ''}
Téma: ${validatedData.topic}
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
