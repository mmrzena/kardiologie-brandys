import { useMutation } from '@tanstack/react-query'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  topic: string
  message: string
  birthYear?: string
}

interface ContactResponse {
  message: string
  data: unknown
}

type ContactPayload = ContactFormData | FormData

const isFormData = (value: ContactPayload): value is FormData => value instanceof FormData

export function useContactForm() {
  return useMutation({
    mutationFn: async (formData: ContactPayload): Promise<ContactResponse> => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: isFormData(formData)
          ? undefined
          : {
              'Content-Type': 'application/json',
            },
        body: isFormData(formData) ? formData : JSON.stringify(formData),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to send message')
      }

      return response.json()
    },
  })
}
