import Link from 'next/link'
import type { Metadata } from 'next'

import ArrowUpRightIcon from '@/components/icons/ArrowUpRight'
import { services } from '@/data/services'
import { TOPIC } from '@/data/topics'

export const metadata: Metadata = {
  title: 'Naše služby',
  description:
    'Komplexní kardiologická péče v Brandýse nad Labem: EKG, echokardiografie, zátěžové testy, arytmologie, vyšetření sportovců a klinické studie.',
}

export default function ServicesPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl space-y-12">
          <section className="rounded-[32px] border border-brand-gray bg-white/95 p-10 shadow-2xl text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">Naše služby</p>
            <h1 className="mt-4 text-4xl font-semibold text-brand-navy">
              Komplexní kardiologická péče
            </h1>
            <p className="mt-4 text-base text-brand-slate">
              Kombinujeme vyšetření, konzultace a dlouhodobou péči podle standardů moderních
              kardiocenter.
            </p>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/sluzby/${service.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-brand-gray bg-white p-6 shadow-lg shadow-brand-gray/60 transition-all hover:shadow-xl hover:shadow-brand-gray/70 hover:border-brand-teal/40"
              >
                <div className="flex items-start justify-between">
                  <h2 className="mt-3 text-2xl font-semibold text-brand-navy group-hover:text-brand-teal transition-colors">
                    {service.title}
                  </h2>
                  <ArrowUpRightIcon className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity text-brand-teal" />
                </div>
                <p className="mt-3 text-sm text-brand-slate leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </section>
        </div>
      </div>
    </main>
  )
}
