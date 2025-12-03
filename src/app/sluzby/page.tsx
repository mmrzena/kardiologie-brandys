'use client'

import Link from 'next/link'

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
              <Link
                key={service.slug}
                href={`/sluzby/${service.slug}`}
                className="flex h-full flex-col rounded-3xl border border-brand-gray bg-white p-6 shadow-lg shadow-brand-gray/60 hover:border-brand-navy/20"
              >
                <div className="flex-1">
                  <h2 className="mt-3 text-2xl font-semibold text-brand-navy">{service.title}</h2>
                  <p className="mt-3 text-sm text-brand-slate leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center text-sm font-semibold text-brand-navy">
                  Detail služby
                  <svg
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 3l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
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
