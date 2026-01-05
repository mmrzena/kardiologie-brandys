import Link from 'next/link'
import type { Metadata } from 'next'
import InsuranceLogos from '@/components/InsuranceLogos'
import { TOPIC } from '@/data/topics'

export const metadata: Metadata = {
  title: 'Ceník',
  description:
    'Ceník kardiologických služeb nehrazených pojišťovnou: echokardiografie, zátěžové testy, vyšetření sportovců, holter EKG, monitorace tlaku.',
}

type PricingItem = {
  name: string
  price: string
  note?: string
}

type PricingSection = {
  title: string
  description: string
  items: PricingItem[]
}

const pricingSections: PricingSection[] = [
  {
    title: 'Základní služby',
    description: 'První kontakt, konzultace a kontrolní návštěvy',
    items: [
      { name: 'Specializované vyšetření kardiologem (60 minut)', price: '1 000 Kč' },
      { name: 'Konzultace s kardiologem (30 minut)', price: '600 Kč' },
      { name: 'EKG + popis kardiologem', price: '200 Kč' },
    ],
  },
  {
    title: 'Vyšetření a diagnostika',
    description: 'Moderní zobrazovací a ultrazvukové metody',
    items: [
      { name: 'Echokardiografie včetně velkých tepen', price: '1 800 Kč' },
      { name: 'Zátěžová echokardiografie', price: '2 000 Kč' },
      { name: 'Vyšetření kardiologem s echokardiografií', price: '2 000 Kč' },
      { name: 'Sonografie karotid', price: '1 000 Kč' },
      { name: 'DUS cév dolních končetin', price: '1 000 Kč' },
      { name: 'Ergometrie (bicyklová, zátěžové EKG)', price: '900 Kč' },
    ],
  },
  {
    title: 'Monitorace',
    description: 'Dlouhodobé sledování srdeční aktivity a tlaku',
    items: [
      { name: 'Ambulantní monitorace krevního tlaku (24 hod.)', price: '600 Kč' },
      { name: 'Holter EKG monitorace (24 hod.)', price: '1 000 Kč' },
      { name: 'Holter EKG monitorace (>24 hod.)', price: '1 500 Kč' },
      { name: 'Screening spánkové apnoe', price: '800 Kč' },
    ],
  },
  {
    title: 'Biochemická vyšetření – POCT',
    description: 'Výsledky během několika minut',
    items: [
      { name: 'Stanovení hodnoty INR z kapilární krve', price: '200 Kč' },
      {
        name: 'Stanovení hodnoty Troponin I',
        price: '150 Kč',
        note: 'Pro pacienty ČPZP, OZP, ZP Škoda, VZP hrazeno pojišťovnou',
      },
      {
        name: 'Stanovení hodnoty D-Dimeru',
        price: '150 Kč',
        note: 'Pro pacienty ČPZP, OZP, ZP Škoda, VZP, ZPMV hrazeno pojišťovnou',
      },
      {
        name: 'Stanovení hodnoty NT-proBNP',
        price: '300 Kč',
        note: 'Pro pacienty ČPZP, OZP, ZP Škoda, VZP, ZPMV hrazeno pojišťovnou',
      },
    ],
  },
  {
    title: 'Vyšetření sportovců',
    description: 'Program prevence náhlé smrti a sledování výkonu',
    items: [
      { name: 'Dotazník + echokardiografie + EKG', price: '1 200 Kč' },
      { name: 'Komplet (dotazník + ECHO + EKG + ergometrie)', price: '2 000 Kč' },
      { name: 'EKG + popis + dotazník', price: '300 Kč' },
    ],
  },
  {
    title: 'Dokumentace a potvrzení',
    description: 'Oficiální dokumenty pro instituce a pojišťovny',
    items: [
      { name: 'Výpis ze zdravotní dokumentace', price: '300 Kč' },
      { name: 'Vyjádření k řidičskému / zbrojnímu průkazu', price: '200 Kč' },
      { name: 'Výpis pro pojišťovnu', price: '300 Kč' },
      { name: 'Potvrzení o zdravotním stavu', price: '200 Kč' },
      { name: 'Vyjádření k lázeňskému pobytu', price: '200 Kč' },
    ],
  },
]

export default function PricingPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl space-y-12">
          <section className="rounded-[32px] border border-brand-gray bg-white/95 p-10 text-center shadow-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">
              Platnost od 1. 1. 2025
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-brand-navy">Ceník</h1>
            <div className="mt-6 space-y-3 rounded-3xl border border-dashed border-brand-gray/70 bg-brand-gray/60 p-6 text-sm text-brand-navy">
              <p className="font-semibold">Pojišťovny</p>
              <p className="text-brand-slate">
                Máme smlouvy s uvedenými zdravotními pojišťovnami, které hradí péči pojištěným
                pacientům, kteří k nám přichází s žádankou či na doporučení jiného specialisty.
              </p>
              <p className="text-brand-slate">
                Vyšetření dle ceníku hradí pouze nepojištění pacienti, případně ti, kteří se chtějí
                nechat vyšetřit bez předchozí kardiologické indikace (bez žádanky či doporučení
                jiného specialisty).
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-brand-red">
                Vyšetření sportovců, výpisy z dokumentace a potvrzení pojišťovny nehradí.
              </p>
            </div>
            <InsuranceLogos className="mt-6" compact showLink />
          </section>

          <div className="space-y-6">
            {pricingSections.map((section) => (
              <section
                key={section.title}
                className="rounded-3xl border border-brand-gray bg-white/95 p-6 shadow-lg"
              >
                <div className="flex flex-col gap-2 border-b border-brand-gray/60 pb-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-brand-navy">{section.title}</h2>
                    <p className="text-sm text-brand-slate">{section.description}</p>
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-col gap-2 rounded-2xl border border-brand-gray/60 p-4"
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm font-medium text-brand-navy">{item.name}</p>
                        <p className="text-lg font-semibold text-brand-red">{item.price}</p>
                      </div>
                      {item.note && <p className="text-xs text-brand-slate italic">{item.note}</p>}
                    </div>
                  ))}
                </div>
              </section>
            ))}

            <section className="rounded-3xl border border-brand-gray bg-white/95 p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-brand-navy">On-line poradna</h2>
              <p className="mt-3 text-sm text-brand-slate">
                Obecné odpovědi jsou bezplatné. Podrobná konzultace:{' '}
                <span className="font-semibold text-brand-navy">1000 Kč</span> za každou započatou
                hodinu.
              </p>
            </section>
          </div>

          <section className="rounded-[32px] border border-brand-gray bg-gradient-to-r from-brand-red to-brand-red-dark p-10 text-white shadow-2xl">
            <h2 className="text-3xl font-semibold">Máte dotaz k ceníku?</h2>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href={`/kontakt?topic=${TOPIC.OTHER}`}
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-navy shadow-lg transition hover:bg-white/90"
              >
                Kontaktujte nás
              </Link>
              <a
                href="tel:+420326396790"
                className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                +420 326 396 790
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
