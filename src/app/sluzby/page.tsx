'use client'

import Link from 'next/link'

import ArrowUpRightIcon from '@/components/icons/ArrowUpRight'
import { services } from '@/data/services'

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
              <div
                key={service.slug}
                className="flex h-full flex-col rounded-3xl border border-brand-gray bg-white p-6 shadow-lg shadow-brand-gray/60"
              >
                <div>
                  <h2 className="mt-3 text-2xl font-semibold text-brand-navy">{service.title}</h2>
                  <p className="mt-3 text-sm text-brand-slate leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="mt-auto flex flex-wrap gap-3 pt-4">
                  <Link
                    href={`/sluzby/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-brand-navy transition hover:text-brand-red"
                  >
                    Detail služby
                    <ArrowUpRightIcon className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </section>

          <section className="rounded-[32px] border border-brand-gray bg-gradient-to-r from-brand-blue to-brand-blue-dark p-10 text-white shadow-2xl">
            <h2 className="text-3xl font-semibold">Potřebujete poradit s výběrem vyšetření?</h2>
            <p className="mt-3 text-white/80">
              Zavolejte, nebo nám napište. Rádi vám pomůžeme vybrat vyšetření přesně pro vás.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/kontakt?topic=vyšetření"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-navy shadow-lg"
              >
                Kontaktujte nás
              </Link>
              <Link
                href="/cenik"
                className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white"
              >
                Zobrazit ceník
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
