import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { services } from '@/data/services'
import { BackLink } from '@/components/BackLink'

// Helper function to auto-link emails and phone numbers in text
function linkifyText(text: string) {
  const parts: Array<{ type: 'text' | 'email' | 'phone'; content: string }> = []

  // Regex patterns
  const emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g
  const phonePattern = /(\d{3}\s?\d{3}\s?\d{3})/g

  let lastIndex = 0
  const matches: Array<{ type: 'email' | 'phone'; index: number; content: string }> = []

  // Find all email matches
  let match
  while ((match = emailPattern.exec(text)) !== null) {
    matches.push({ type: 'email', index: match.index, content: match[0] })
  }

  // Find all phone matches
  while ((match = phonePattern.exec(text)) !== null) {
    matches.push({ type: 'phone', index: match.index, content: match[0] })
  }

  // Sort matches by index
  matches.sort((a, b) => a.index - b.index)

  // Build parts array
  matches.forEach((match) => {
    if (match.index > lastIndex) {
      parts.push({ type: 'text', content: text.slice(lastIndex, match.index) })
    }
    parts.push({ type: match.type, content: match.content })
    lastIndex = match.index + match.content.length
  })

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push({ type: 'text', content: text.slice(lastIndex) })
  }

  return parts.length === 0 ? [{ type: 'text' as const, content: text }] : parts
}

type ServiceDetailProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: ServiceDetailProps): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)
  if (!service) {
    return {
      title: 'Služba',
    }
  }
  return {
    title: `${service.title} | Kardiologie Brandýs`,
    description: service.description,
  }
}

export default async function ServiceDetailPage({ params }: ServiceDetailProps) {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <BackLink href="/sluzby" className="mb-6">
            Zpět na všechny služby
          </BackLink>

          <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">
            {service.categories.join(' • ')}
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-brand-navy">{service.title}</h1>
          <p className="mt-4 text-base text-brand-slate max-w-3xl">{service.description}</p>

          <div className="mt-10 space-y-10">
            {service.detail.map((section, index) => (
              <section
                key={`${service.slug}-${index}`}
                className="rounded-3xl border border-brand-gray bg-white p-6 shadow-lg shadow-brand-gray/60"
              >
                {section.title && (
                  <h2 className="text-2xl font-semibold text-brand-navy">{section.title}</h2>
                )}
                {section.paragraphs?.map((paragraph, paragraphIndex) => {
                  const parts = linkifyText(paragraph)
                  return (
                    <p
                      key={`${service.slug}-${index}-paragraph-${paragraphIndex}`}
                      className={`text-sm leading-relaxed text-brand-slate ${
                        paragraphIndex === 0 && !section.title ? 'text-base text-brand-navy' : 'mt-4'
                      }`}
                    >
                      {parts.map((part, partIndex) => {
                        if (part.type === 'email') {
                          return (
                            <a
                              key={partIndex}
                              href={`mailto:${part.content}`}
                              className="font-semibold text-brand-red hover:underline"
                            >
                              {part.content}
                            </a>
                          )
                        }
                        if (part.type === 'phone') {
                          return (
                            <a
                              key={partIndex}
                              href={`tel:+420${part.content.replace(/\s/g, '')}`}
                              className="font-semibold text-brand-red hover:underline"
                            >
                              {part.content}
                            </a>
                          )
                        }
                        return <span key={partIndex}>{part.content}</span>
                      })}
                    </p>
                  )
                })}
                {section.list && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-brand-slate">
                    {section.list.map((item, itemIndex) => (
                      <li key={`${service.slug}-${index}-item-${itemIndex}`}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
