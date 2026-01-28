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
        let errorMessage = 'Nepodařilo se odeslat zprávu'
        const contentType = response.headers.get('content-type') || ''
        if (contentType.includes('application/json')) {
          try {
            const error = await response.json()
            errorMessage = error.error || errorMessage
          } catch {
            // fall through to generic message
          }
        } else {
          const text = await response.text()
          if (response.status === 413 || text.includes('Request Entity Too Large')) {
            errorMessage = 'Soubor je příliš velký. Maximální velikost je 5 MB na soubor.'
          } else if (text) {
            errorMessage = text
          }
        }
        throw new Error(errorMessage)
      }

      return response.json()
    },
  })
}
