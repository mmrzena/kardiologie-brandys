'use client'

import { Suspense, useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useContactForm } from '@/hooks/useContact'

const TOPIC_OPTIONS = [
  { value: 'Vyšetření', label: 'Vyšetření' },
  { value: 'Poradna', label: 'Poradna' },
  { value: 'Sportovci', label: 'Sportovci' },
  { value: 'Recept', label: 'Žádost o recept' },
  { value: 'Ostatní', label: 'Ostatní' },
] as const

const normalizeTopicParam = (value: string | null) => {
  if (!value) return null
  const lowerValue = value.toLowerCase()
  const match = TOPIC_OPTIONS.find((option) => option.value.toLowerCase() === lowerValue)
  return match?.value ?? null
}

const openingHours = [
  { day: 'Pondělí', hours: '7:00–17:00', note: 'Arytmologie 17:00–19:30' },
  { day: 'Úterý', hours: '7:00–16:00' },
  { day: 'Středa', hours: '8:00–16:00' },
  { day: 'Čtvrtek', hours: '8:00–15:00', note: 'Sportovci od 15:30' },
  { day: 'Pátek', hours: '7:30–15:00' },
]

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="py-16" />}>
      <ContactPageContent />
    </Suspense>
  )
}

function ContactPageContent() {
  const searchParams = useSearchParams()
  const topicFromQuery = normalizeTopicParam(searchParams.get('topic'))
  const formCardRef = useRef<HTMLDivElement | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: topicFromQuery ?? TOPIC_OPTIONS[0].value,
    message: '',
  })
  const [appliedPrefill, setAppliedPrefill] = useState<string | null>(topicFromQuery ?? null)
  const [shouldHighlightForm, setShouldHighlightForm] = useState(false)

  const mutation = useContactForm()

  useEffect(() => {
    if (topicFromQuery && topicFromQuery !== appliedPrefill) {
      setFormData((prev) => ({ ...prev, topic: topicFromQuery }))
      setAppliedPrefill(topicFromQuery)
    }
  }, [topicFromQuery, appliedPrefill])

  useEffect(() => {
    if (!topicFromQuery) return
    if (formCardRef.current) {
      formCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setShouldHighlightForm(true)
    const timeout = setTimeout(() => setShouldHighlightForm(false), 900)
    return () => clearTimeout(timeout)
  }, [topicFromQuery])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    mutation.mutate(formData, {
      onSuccess: () => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          topic: topicFromQuery ?? TOPIC_OPTIONS[0].value,
          message: '',
        })
      },
    })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl space-y-12">
          <section className="rounded-[32px] border border-brand-gray bg-white/95 p-10 text-center shadow-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">Kontakt</p>
            <h1 className="mt-4 text-4xl font-semibold text-brand-navy">
              Jsme k dispozici každý pracovní den
            </h1>
            <p className="mt-4 text-base text-brand-slate">
              Zavolejte nám na +420 326 396 790 nebo +420 604 415 479. Odpovídáme na zprávy do 1
              pracovního dne.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs font-semibold text-brand-navy">
              <span className="rounded-full bg-brand-gray/80 px-4 py-1">Bezpečné prostředí</span>
              <span className="rounded-full bg-brand-gray/80 px-4 py-1">Bezbariérový přístup</span>
              <span className="rounded-full bg-brand-gray/80 px-4 py-1">Parkování u budovy</span>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
            <div className="space-y-6">
              <div className="rounded-3xl border border-brand-gray bg-white/95 p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-brand-navy">Kontaktní údaje</h2>
                <div className="mt-4 space-y-3 text-sm text-brand-slate">
                  <div>
                    <p className="font-semibold text-brand-navy">Adresa</p>
                    <p>Nádražní 1317/5, 250 01 Brandýs nad Labem</p>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy">Telefon – objednávky</p>
                    <a
                      href="tel:+420326396790"
                      className="text-brand-navy hover:text-brand-red transition"
                    >
                      +420 326 396 790
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy">Mobil</p>
                    <a
                      href="tel:+420604415479"
                      className="text-brand-navy hover:text-brand-red transition"
                    >
                      +420 604 415 479
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy">Email</p>
                    <a
                      href="mailto:kardiologie.brandys@seznam.cz"
                      className="text-brand-navy hover:text-brand-red transition"
                    >
                      kardiologie.brandys@seznam.cz
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy">Fax</p>
                    <p>+420 326 312 684</p>
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy">IČO</p>
                    <p>47547898</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-brand-gray bg-white/95 p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-brand-navy">Ordinační hodiny</h2>
                <div className="mt-4 space-y-3">
                  {openingHours.map((item) => (
                    <div
                      key={item.day}
                      className="rounded-2xl border border-brand-gray/60 px-4 py-3 text-sm"
                    >
                      <p className="font-semibold text-brand-navy">{item.day}</p>
                      <p className="text-brand-slate">{item.hours}</p>
                      {item.note && <p className="text-xs text-brand-slate">{item.note}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              ref={formCardRef}
              className={`rounded-3xl border border-brand-gray bg-white/95 p-8 shadow-xl transition duration-500 ${
                shouldHighlightForm ? 'animate-form-pop ring-2 ring-brand-teal/40' : ''
              }`}
            >
              <h2 className="text-2xl font-semibold text-brand-navy">Napište nám</h2>
              <p className="mt-2 text-sm text-brand-slate">
                Vyplňte formulář, ozveme se vám s potvrzením termínu nebo doplňujícími dotazy.
              </p>

              {mutation.isSuccess && (
                <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                  Vaše zpráva byla úspěšně odeslána. Odpovíme co nejdříve.
                </div>
              )}

              {mutation.error && (
                <div className="mt-6 rounded-2xl border border-brand-red bg-red-50 p-4 text-sm text-brand-red">
                  {mutation.error instanceof Error
                    ? mutation.error.message
                    : 'Nastala chyba při odesílání zprávy.'}
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="topic" className="text-sm font-semibold text-brand-navy">
                    Typ požadavku *
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    required
                    value={formData.topic}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-brand-gray/80 bg-white px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
                  >
                    {TOPIC_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="name" className="text-sm font-semibold text-brand-navy">
                    Jméno a příjmení *
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-brand-gray/80 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-semibold text-brand-navy">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-brand-gray/80 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-semibold text-brand-navy">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-brand-gray/80 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-semibold text-brand-navy">
                    Zpráva *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-brand-gray/80 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full rounded-full bg-brand-red py-3 text-sm font-semibold text-white shadow-lg shadow-brand-red/30 transition hover:bg-brand-red-dark disabled:opacity-50"
                >
                  {mutation.isPending ? 'Odesílání…' : 'Odeslat zprávu'}
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
