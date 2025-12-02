'use client'

import { useState } from 'react'
import { useContactForm } from '@/hooks/useContact'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const mutation = useContactForm()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    mutation.mutate(formData, {
      onSuccess: () => {
        // Reset form on success
        setFormData({ name: '', email: '', phone: '', message: '' })
      },
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Kontakt</h1>

          {/* Contact Info */}
          <div className="bg-brand-gray p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-brand-red">Kontaktní údaje</h2>
            <div className="space-y-3">
              <div>
                <span className="font-semibold">Adresa:</span>
                <p className="text-gray-600">Nádražní 1317/5, Brandýs nad Labem, 250 01</p>
              </div>
              <div>
                <span className="font-semibold">Telefon:</span>
                <p className="text-gray-600">+420 326 396 790 (objednávky)</p>
                <p className="text-gray-600">+420 604 415 479 (mobil)</p>
              </div>
              <div>
                <span className="font-semibold">Email:</span>
                <p className="text-gray-600">kardiologie.brandys@seznam.cz</p>
              </div>
              <div>
                <span className="font-semibold">Fax:</span>
                <p className="text-gray-600">+420 326 312 684</p>
              </div>
              <div>
                <span className="font-semibold">Ordinační hodiny:</span>
                <p className="text-gray-600">Pondělí: 7:00–17:00 (arytmologie 17:00–19:30)</p>
                <p className="text-gray-600">Úterý: 7:00–16:00</p>
                <p className="text-gray-600">Středa: 8:00–16:00</p>
                <p className="text-gray-600">Čtvrtek: 8:00–15:00 (sportovci na objednání od 15:30)</p>
                <p className="text-gray-600">Pátek: 7:30–15:00</p>
              </div>
              <div>
                <span className="font-semibold">IČO:</span>
                <p className="text-gray-600">47547898</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-brand-red">Napište nám</h2>

            {mutation.isSuccess && (
              <div className="bg-green-50 border-2 border-green-200 text-green-800 px-4 py-3 rounded mb-4">
                Vaše zpráva byla úspěšně odeslána. Odpovíme vám co nejdříve.
              </div>
            )}

            {mutation.error && (
              <div className="bg-red-50 border-2 border-brand-red text-red-800 px-4 py-3 rounded mb-4">
                {mutation.error instanceof Error ? mutation.error.message : 'Nastala chyba při odesílání zprávy'}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Jméno a příjmení *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Zpráva *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={mutation.isPending}
                className="w-full bg-brand-blue text-white py-3 rounded-lg font-semibold hover:bg-brand-blue-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {mutation.isPending ? 'Odesílání...' : 'Odeslat zprávu'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
