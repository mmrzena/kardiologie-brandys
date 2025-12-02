import { useQuery } from '@tanstack/react-query'
import { Staff } from '@/lib/supabase'

// Fetch all staff members
export function useStaff() {
  return useQuery({
    queryKey: ['staff'],
    queryFn: async (): Promise<Staff[]> => {
      const response = await fetch('/api/staff')
      if (!response.ok) {
        throw new Error('Failed to fetch staff')
      }
      const result = await response.json()
      return result.data || []
    },
  })
}

// Fetch single staff member by ID
export function useStaffById(id: string | number) {
  return useQuery({
    queryKey: ['staff', id],
    queryFn: async (): Promise<Staff> => {
      const response = await fetch(`/api/staff/${id}`)
      if (!response.ok) {
        throw new Error('Failed to fetch staff member')
      }
      const result = await response.json()
      return result.data
    },
    enabled: !!id, // Only run query if ID is provided
  })
}
