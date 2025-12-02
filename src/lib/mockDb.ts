import fs from 'fs'
import path from 'path'
import { Staff, ContactMessage } from './supabase'

const DATA_DIR = path.join(process.cwd(), 'data')
const STAFF_FILE = path.join(DATA_DIR, 'staff.json')
const MESSAGES_FILE = path.join(DATA_DIR, 'contact_messages.json')

// Ensure data files exist
function ensureDataFiles() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
  if (!fs.existsSync(STAFF_FILE)) {
    fs.writeFileSync(STAFF_FILE, '[]')
  }
  if (!fs.existsSync(MESSAGES_FILE)) {
    fs.writeFileSync(MESSAGES_FILE, '[]')
  }
}

// Read staff data
export function getStaff(): Staff[] {
  ensureDataFiles()
  const data = fs.readFileSync(STAFF_FILE, 'utf8')
  return JSON.parse(data)
}

// Get single staff member
export function getStaffById(id: number): Staff | null {
  const staff = getStaff()
  return staff.find(s => s.id === id) || null
}

// Read contact messages
export function getContactMessages(): ContactMessage[] {
  ensureDataFiles()
  const data = fs.readFileSync(MESSAGES_FILE, 'utf8')
  return JSON.parse(data)
}

// Add contact message
export function addContactMessage(message: Omit<ContactMessage, 'id' | 'created_at'>): ContactMessage {
  ensureDataFiles()
  const messages = getContactMessages()

  const newMessage: ContactMessage = {
    ...message,
    id: messages.length > 0 ? Math.max(...messages.map(m => m.id)) + 1 : 1,
    created_at: new Date().toISOString(),
  }

  messages.push(newMessage)
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2))

  return newMessage
}

// Mock Supabase-like API
export const mockDb = {
  from: (table: string) => {
    return {
      select: (columns: string = '*') => {
        if (table === 'staff') {
          return {
            order: () => ({
              then: (resolve: any) => resolve({ data: getStaff(), error: null })
            }),
            eq: (column: string, value: any) => ({
              single: () => ({
                then: (resolve: any) => {
                  const staff = getStaffById(parseInt(value))
                  if (!staff) {
                    return resolve({ data: null, error: { message: 'Not found' } })
                  }
                  return resolve({ data: staff, error: null })
                }
              })
            })
          }
        }
        return { data: [], error: null }
      },
      insert: (rows: any[]) => {
        if (table === 'contact_messages') {
          return {
            select: () => ({
              then: (resolve: any) => {
                const newMessage = addContactMessage(rows[0])
                return resolve({ data: [newMessage], error: null })
              }
            })
          }
        }
        return { data: null, error: { message: 'Table not found' } }
      }
    }
  }
}
