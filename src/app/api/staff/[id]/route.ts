import { NextRequest, NextResponse } from 'next/server'
import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import { getStaffById } from '@/lib/mockDb'

export async function GET(
  request: NextRequest,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params
  const { id } = params

  // Use mock database if Supabase is not configured (local development)
  if (!isSupabaseConfigured()) {
    try {
      const data = getStaffById(parseInt(id))

      if (!data) {
        return NextResponse.json(
          { error: 'Zaměstnanec nenalezen' },
          { status: 404 }
        )
      }

      console.log('[DEV MODE] Using mock database, loaded staff member:', data.name)
      return NextResponse.json({ data }, { status: 200 })
    } catch (error) {
      console.error('Mock database error:', error)
      return NextResponse.json(
        { error: 'Nepodařilo se načíst data z lokální databáze' },
        { status: 500 }
      )
    }
  }

  // Use Supabase in production
  try {
    const { data, error } = await supabase
      .from('staff')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Nepodařilo se načíst údaje o zaměstnanci' },
        { status: 500 }
      )
    }

    if (!data) {
      return NextResponse.json(
        { error: 'Zaměstnanec nenalezen' },
        { status: 404 }
      )
    }

    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Nastala chyba při zpracování požadavku' },
      { status: 500 }
    )
  }
}
