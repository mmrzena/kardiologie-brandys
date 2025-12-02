import Link from 'next/link'
import { insurers } from '@/lib/insurers'

const navigation = [
  { label: 'Domů', href: '/' },
  { label: 'O nás', href: '/o-nas' },
  { label: 'Služby', href: '/sluzby' },
  { label: 'Ceník', href: '/cenik' },
  { label: 'Kontakt', href: '/kontakt' },
]

export default function Footer() {
  return (
    <footer className="relative mt-16 bg-gradient-to-b from-brand-navy to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr,1fr,1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-brand-teal/80 mb-3">
              Kardiologická ambulance
            </p>
            <h3 className="text-2xl font-semibold mb-4">Kardiologie Brandýs</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              Precizní diagnostika, specializovaná arytmologická poradna a tým lékařů s praxí na
              špičkových klinikách. Vaše srdce sledujeme s kombinací moderních technologií a
              osobního přístupu.
            </p>
            <div className="mt-6 gap-3 text-sm text-gray-200 flex flex-wrap">
              {insurers.map((insurer) => (
                <a
                  key={insurer.code}
                  href={insurer.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-brand-teal/60 sm:w-auto"
                >
                  <span className="font-semibold text-white">{insurer.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <p>Nádražní 1317/5, 250 01 Brandýs nad Labem</p>
              <div>
                <p className="text-white font-medium">Objednávky</p>
                <a className="hover:text-brand-teal transition" href="tel:+420326396790">
                  +420 326 396 790
                </a>
              </div>
              <div>
                <p className="text-white font-medium">Mobil</p>
                <a className="hover:text-brand-teal transition" href="tel:+420604415479">
                  +420 604 415 479
                </a>
              </div>
              <div>
                <p className="text-white font-medium">Email</p>
                <a
                  className="hover:text-brand-teal transition"
                  href="mailto:kardiologie.brandys@seznam.cz"
                >
                  kardiologie.brandys@seznam.cz
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Ordinační hodiny</h4>
            <dl className="space-y-3 text-sm text-gray-300 text-right">
              <div className="flex justify-between gap-3">
                <dt className="text-white">Pondělí</dt>
                <dd>
                  7:00–17:00{' '}
                  <span className="text-xs text-gray-400 block">Arytmologie 17:00–19:30</span>
                </dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-white">Úterý</dt>
                <dd>7:00–16:00</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-white">Středa</dt>
                <dd>8:00–16:00</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-white">Čtvrtek</dt>
                <dd>
                  8:00–15:00 <span className="text-xs text-gray-400 block">Sportovci od 15:30</span>
                </dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-white">Pátek</dt>
                <dd>7:30–15:00</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-white/20 bg-white/5 p-6 backdrop-blur">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-brand-teal/80">
                Potřebujete termín?
              </p>
              <h4 className="text-xl font-semibold mt-2">
                Napište nám, odpovídáme do 1 pracovního dne
              </h4>
            </div>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-navy shadow-lg shadow-black/20"
            >
              Spojit se s ambulancí
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-gray-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Kardiologie Brandýs nad Labem</p>
          <p>
            MEDICUS SERVICES s.r.o. • IČO 47547898 • Městský soud v Praze, oddíl C, vložka 20327
          </p>
          <nav className="flex flex-wrap gap-4 text-gray-400">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-brand-teal transition">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
