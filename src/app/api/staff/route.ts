import { NextResponse } from 'next/server'
import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import { getStaff } from '@/lib/mockDb'

export async function GET() {
  // Use mock database if Supabase is not configured (local development)
  if (!isSupabaseConfigured()) {
    try {
      const data = getStaff()
      console.log('[DEV MODE] Using mock database, loaded', data.length, 'staff members')
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
      .order('id', { ascending: true })

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Nepodařilo se načíst seznam zaměstnanců' },
        { status: 500 }
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
