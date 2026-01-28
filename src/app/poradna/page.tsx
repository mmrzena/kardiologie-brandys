'use client'

import { useState } from 'react'
import Link from 'next/link'

import { useContactForm } from '@/hooks/useContact'
import { TOPIC } from '@/data/topics'

export default function PoradnaPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: TOPIC.PORADNA,
    message: '',
  })
  const mutation = useContactForm()

  const validationMessages: Record<string, { missing: string; mismatch?: string }> = {
    name: { missing: 'Vyplňte prosím jméno a příjmení.' },
    email: {
      missing: 'Vyplňte prosím e-mail.',
      mismatch: 'Zadejte platný e-mail ve tvaru jmeno@example.com.',
    },
    message: { missing: 'Napište prosím zprávu.' },
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    mutation.mutate(formData, {
      onSuccess: () => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          topic: TOPIC.PORADNA,
          message: '',
        })
      },
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const applyValidityMessage = (target: HTMLInputElement | HTMLTextAreaElement) => {
    const config = validationMessages[target.name]
    if (!config) return
    target.setCustomValidity('')
    if (target.validity.valueMissing) {
      target.setCustomValidity(config.missing)
    } else if (target.validity.typeMismatch && config.mismatch) {
      target.setCustomValidity(config.mismatch)
    }
  }

  const handleInvalid = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    applyValidityMessage(e.currentTarget)
  }

  const handleValidityInput = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    applyValidityMessage(e.currentTarget)
  }

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl space-y-12">
          <section className="rounded-[32px] border border-brand-gray bg-white/95 p-10 text-center shadow-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">On-line poradna</p>
            <h1 className="mt-4 text-4xl font-semibold text-brand-navy">Kardiologická poradna</h1>
            <p className="mt-4 text-base text-brand-slate">
              Nejste naším pacientem a máte otázky nebo pochybnosti o svém zdravotním stavu, léčbě
              či doporučených zákrocích? On-line poradna vám pomůže porozumět diagnóze, lékům i
              možnostem další péče.
            </p>
          </section>

          <section className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
            <div className="space-y-6">
              <div className="rounded-3xl border border-brand-gray bg-white/95 p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-brand-navy">Jak poradna funguje</h2>
                <p className="mt-3 text-sm text-brand-slate">
                  Popište prosím co nejpřesněji svůj zdravotní problém, léky nebo výsledky, se
                  kterými potřebujete poradit. Čím více detailů uvedete, tím lépe vám můžeme
                  odpovědět.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-brand-slate">
                  <li>Dotazy vyřizujeme v pořadí, v jakém dorazí.</li>
                  <li>Odpověď posíláme e-mailem, případně doplňující otázky.</li>
                  <li>Akutní obtíže řešte vždy telefonicky nebo na pohotovosti.</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-brand-gray bg-white/95 p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-brand-navy">Kdy použít kontakt</h2>
                <p className="mt-3 text-sm text-brand-slate">
                  Objednání, změny termínů, recepty a administrativní požadavky vyřizujeme přes
                  standardní kontaktní formulář.
                </p>
              </div>

              <div className="rounded-3xl border border-brand-gray bg-white/95 p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-brand-navy">Ceník</h2>
                <p className="mt-3 text-sm text-brand-slate">
                  První dotaz je <span className="font-semibold text-brand-navy">zdarma</span>.
                  Další konzultace:{' '}
                  <span className="font-semibold text-brand-navy">
                    1000 Kč za každou započatou hodinu
                  </span>
                  .
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-brand-gray bg-white/95 p-8 shadow-xl">
              <h2 className="text-2xl font-semibold text-brand-navy">Napište dotaz</h2>
              <p className="mt-2 text-sm text-brand-slate">
                Odpovíme co nejdříve, zpravidla do několika pracovních dnů.
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

              <form onSubmit={handleSubmit} className="mt-6 space-y-4" lang="cs">
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
                    onInvalid={handleInvalid}
                    onInput={handleValidityInput}
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
                    onInvalid={handleInvalid}
                    onInput={handleValidityInput}
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
                    onInput={handleValidityInput}
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
                    rows={7}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    onInvalid={handleInvalid}
                    onInput={handleValidityInput}
                    className="mt-2 w-full rounded-2xl border border-brand-gray/80 px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full rounded-full bg-brand-red py-3 text-sm font-semibold text-white shadow-lg shadow-brand-red/30 transition hover:bg-brand-red-dark disabled:opacity-50"
                >
                  {mutation.isPending ? 'Odesílání…' : 'Odeslat dotaz'}
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
