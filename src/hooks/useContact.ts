import { useMutation } from '@tanstack/react-query'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  topic: string
  message: string
}

interface ContactResponse {
  message: string
  data: unknown
}

export function useContactForm() {
  return useMutation({
    mutationFn: async (formData: ContactFormData): Promise<ContactResponse> => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to send message')
      }

      return response.json()
    },
  })
}
