import { createClient } from '@supabase/supabase-js'

// Use valid placeholder URLs to avoid build errors
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://example.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.placeholder'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper to check if we should use the mock database
export const useMockDatabase = () => {
  // Explicit override via environment variable
  if (process.env.USE_MOCK_DB === 'true') {
    return true
  }

  // In production, never use mock database
  if (process.env.NODE_ENV === 'production') {
    return false
  }

  // In development, use mock if Supabase is not configured
  return !isSupabaseConfigured()
}

// Helper to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // Check if variables exist and look valid
  const hasValidUrl = url && url.startsWith('https://') && url.includes('.supabase.co')
  const hasValidKey = key && key.length > 100 && key.startsWith('eyJ')

  return hasValidUrl && hasValidKey
}

// Type definitions for our database tables
export interface Staff {
  id: number
  name: string
  title: string
  specialization?: string
  bio?: string
  photo_url?: string
  email?: string
  phone?: string
  created_at?: string
}

export interface ContactMessage {
  id: number
  name: string
  email: string
  phone?: string
  message: string
  created_at: string
  status?: 'new' | 'read' | 'replied'
}
