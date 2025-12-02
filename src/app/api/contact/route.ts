import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'
import { createClient } from '@supabase/supabase-js'
import { addContactMessage } from '@/lib/mockDb'

// Create admin client with service role key (bypasses RLS)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const supabaseAdmin = supabaseServiceKey
  ? createClient(supabaseUrl, supabaseServiceKey)
  : null

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Jméno musí mít alespoň 2 znaky'),
  email: z.string().email('Neplatná emailová adresa'),
  phone: z.string().optional().or(z.literal('')),
  message: z.string().min(10, 'Zpráva musí mít alespoň 10 znaků'),
})

export async function POST(request: NextRequest) {
  const useMockDb = process.env.NEXT_PUBLIC_USE_MOCK_DB === 'true' || !supabaseAdmin

  try {
    const body = await request.json()

    // Validate input
    const validatedData = contactSchema.parse(body)

    let data

    // Save to database (mock or Supabase)
    if (useMockDb) {
      // Use mock database for local development
      data = [addContactMessage({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || '',
        message: validatedData.message,
        status: 'new',
      })]
      console.log('[DEV MODE] Saved contact message to local JSON database')
    } else {
      // Use Supabase in production with admin client (bypasses RLS)
      const { data: supabaseData, error } = await supabaseAdmin
        .from('contact_messages')
        .insert([
          {
            name: validatedData.name,
            email: validatedData.email,
            phone: validatedData.phone || null,
            message: validatedData.message,
            status: 'new',
          },
        ])
        .select()

      if (error) {
        console.error('Supabase error:', error)
        return NextResponse.json(
          { error: 'Nepodařilo se uložit zprávu do databáze' },
          { status: 500 }
        )
      }
      data = supabaseData
    }

    // Handle email (log to console in dev mode)
    if (useMockDb) {
      // Log email to console in development mode
      console.log('\n==================== EMAIL (DEV MODE) ====================')
      console.log('From:', process.env.EMAIL_USER || 'not-configured@example.com')
      console.log('To:', process.env.EMAIL_TO || 'doctor@kardiologiebrandys.cz')
      console.log('Reply-To:', validatedData.email)
      console.log('Subject:', `Nová zpráva z webu - ${validatedData.name}`)
      console.log('-----------------------------------------------------------')
      console.log('Jméno:', validatedData.name)
      console.log('Email:', validatedData.email)
      if (validatedData.phone) console.log('Telefon:', validatedData.phone)
      console.log('\nZpráva:')
      console.log(validatedData.message)
      console.log('===========================================================\n')
    } else {
      // Send actual email in production
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
          subject: `Nová zpráva z webu - ${validatedData.name}`,
          html: `
            <h2>Nová zpráva z kontaktního formuláře</h2>
            <p><strong>Jméno:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            ${validatedData.phone ? `<p><strong>Telefon:</strong> ${validatedData.phone}</p>` : ''}
            <p><strong>Zpráva:</strong></p>
            <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
          `,
          text: `
Nová zpráva z kontaktního formuláře

Jméno: ${validatedData.name}
Email: ${validatedData.email}
${validatedData.phone ? `Telefon: ${validatedData.phone}` : ''}

Zpráva:
${validatedData.message}
          `,
        })
      } catch (emailError) {
        console.error('Email error:', emailError)
        // Continue even if email fails - we saved to database
      }
    }

    return NextResponse.json(
      { message: 'Zpráva byla úspěšně odeslána', data },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      const message = error.errors.map(err => err.message).join('; ')
      return NextResponse.json(
        { error: message, details: error.issues },
        { status: 400 }
      )
    }

    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Nastala chyba při zpracování požadavku' },
      { status: 500 }
    )
  }
}
