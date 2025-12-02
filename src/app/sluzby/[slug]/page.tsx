import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { services } from '@/data/services'

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
    <main className="py-16">
      <div className="container mx-auto px-4">
        <Link
          href="/sluzby"
          className="inline-flex items-center text-sm font-semibold text-brand-navy transition hover:translate-x-[-4px]"
        >
          <svg
            className="mr-2 h-4 w-4"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 13L5 8l5-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Zpět na všechny služby
        </Link>

        <p className="mt-6 text-xs uppercase tracking-[0.4em] text-brand-teal">
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
              {section.paragraphs?.map((paragraph, paragraphIndex) => (
                <p
                  key={`${service.slug}-${index}-paragraph-${paragraphIndex}`}
                  className={`text-sm leading-relaxed text-brand-slate ${
                    paragraphIndex === 0 && !section.title ? 'text-base text-brand-navy' : 'mt-4'
                  }`}
                >
                  {paragraph}
                </p>
              ))}
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
    </main>
  )
}
