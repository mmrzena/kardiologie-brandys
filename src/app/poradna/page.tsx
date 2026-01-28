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
  const [formKey, setFormKey] = useState(0)
  const [attachments, setAttachments] = useState<File[]>([])
  const [attachmentError, setAttachmentError] = useState<string | null>(null)
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

    const payload = new FormData()
    payload.append('name', formData.name)
    payload.append('email', formData.email)
    payload.append('phone', formData.phone)
    payload.append('topic', formData.topic)
    payload.append('message', formData.message)
    attachments.forEach((file) => payload.append('attachments', file))

    mutation.mutate(payload, {
      onSuccess: () => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          topic: TOPIC.PORADNA,
          message: '',
        })
        setAttachments([])
        setAttachmentError(null)
        setFormKey((prev) => prev + 1)
      },
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const MAX_FILE_SIZE = 5 * 1024 * 1024
  const allowedTypes = new Set(['application/pdf', 'image/png', 'image/jpeg'])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? [])
    if (files.length === 0) return

    const nextFiles: File[] = []
    let error: string | null = null

    for (const file of files) {
      if (!allowedTypes.has(file.type)) {
        error = 'Povoleny jsou pouze soubory PDF nebo obrázky PNG/JPG.'
        continue
      }
      if (file.size > MAX_FILE_SIZE) {
        error = 'Maximální velikost jednoho souboru je 5 MB.'
        continue
      }
      nextFiles.push(file)
    }

    setAttachments((prev) => [...prev, ...nextFiles])
    setAttachmentError(error)
    e.target.value = ''
  }

  const handleRemoveAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index))
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

              <form
                key={formKey}
                onSubmit={handleSubmit}
                className="mt-6 space-y-4"
                lang="cs"
              >
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
                <div>
                  <label htmlFor="attachment" className="text-sm font-semibold text-brand-navy">
                    Přílohy (PDF, PNG, JPG)
                  </label>
                  <input
                    id="attachment"
                    name="attachments"
                    type="file"
                    multiple
                    accept=".pdf,.png,.jpg,.jpeg,application/pdf,image/png,image/jpeg"
                    onChange={handleFileChange}
                    className="mt-2 w-full rounded-2xl border border-brand-gray/80 bg-white px-4 py-3 text-sm focus:border-brand-blue focus:outline-none"
                  />
                  <p className="mt-2 text-xs text-brand-slate">
                    Povoleny jsou pouze soubory PDF nebo obrázky PNG/JPG. Max. 5 MB na soubor.
                  </p>
                  {attachmentError && (
                    <p className="mt-2 text-xs text-brand-red">{attachmentError}</p>
                  )}
                  {attachments.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {attachments.map((file, index) => (
                        <div
                          key={`${file.name}-${file.lastModified}-${index}`}
                          className="flex items-center justify-between rounded-xl border border-brand-gray/60 bg-brand-gray/40 px-3 py-2 text-xs text-brand-navy"
                        >
                          <span className="truncate">{file.name}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveAttachment(index)}
                            className="text-brand-red hover:text-brand-red-dark transition"
                          >
                            Odebrat
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
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
