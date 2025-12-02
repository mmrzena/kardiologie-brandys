import Link from 'next/link'
import InsuranceLogos from '@/components/InsuranceLogos'

const services = [
  {
    title: 'Komplexní diagnostika',
    description: 'Echokardiografie, ergometrie, Holter EKG i 24h monitorace tlaku v jednom zázemí.',
    icon: '🩺',
  },
  {
    title: 'Arytmologie',
    description: 'Specializovaná poradna pod vedením prof. MUDr. Pavla Osmančíka, Ph.D.',
    icon: '⚡',
  },
  {
    title: 'Sportovní kardiologie',
    description:
      'Preventivní balíčky pro vrcholové i amatérské sportovce, screening náhlých příhod.',
    icon: '🏃‍♂️',
  },
  {
    title: 'Klinické studie',
    description: 'Možnost zapojení do klinických studií inovativních léčebných postupů.',
    icon: '🔬',
  },
]

const roadmap = [
  {
    title: 'Online objednávka',
    content: 'Během jednoho hovoru či zprávy zvolíme vhodný typ vyšetření.',
  },
  {
    title: 'Precizní diagnostika',
    content: 'Moderní přístrojové vybavení a lékaři s praxí z fakultních klinik.',
  },
  {
    title: 'Týmová konzultace',
    content: 'Nálezy sdílíme napříč týmem a navrhujeme finální doporučení.',
  },
  {
    title: 'Dlouhodobá péče',
    content: 'Dispenzarizace, kontroly stimulátorů a sledování efektu terapie.',
  },
]

const highlights = [
  {
    title: 'Spolupráce s pojišťovnami',
    detail: 'VZP, VOZP, ČPZP, OZP, ZPŠ, ZPMV',
  },
  {
    title: 'Specializované programy',
    detail: 'Arytmologická poradna • vyšetření sportovců',
  },
  {
    title: 'Multioborový tým',
    detail: '8 lékařů, 3 sestry, Clinical Research Department',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-blue-dark to-brand-navy text-white">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-red blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-brand-teal blur-3xl" />
        </div>
        <div className="container relative mx-auto grid items-center gap-16 px-4 py-24 md:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/30 px-4 py-1 text-sm font-semibold tracking-wide">
              <span className="text-brand-teal">Precizní péče</span>
              <span className="text-white/70">Brandýs nad Labem</span>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-brand-teal/80 mb-4">
                Kardiologická ambulance
              </p>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                Komplexní kardiologická diagnostika bez čekání
              </h1>
            </div>
            <p className="text-lg text-white/80">
              O ambulanci se stará tým MUDr. Jiřího Krupičky. Navazujeme na standardy fakultních
              nemocnic a přinášíme specializovanou arytmologickou poradnu, vyšetření sportovců i
              klinický výzkum.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-navy shadow-xl shadow-black/20 transition hover:-translate-y-0.5"
              >
                Objednat vyšetření
                <span aria-hidden>↗</span>
              </Link>
              <Link
                href="/sluzby"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Naše služby
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 text-left md:grid-cols-3">
              <div className="rounded-2xl border border-white/20 bg-white/5 p-4">
                <p className="text-3xl font-semibold">8</p>
                <p className="text-sm text-white/80">lékařů</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-4">
                <p className="text-3xl font-semibold">15+</p>
                <p className="text-sm text-white/80">let péče</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-4">
                <p className="text-3xl font-semibold">2000+</p>
                <p className="text-sm text-white/80">pacientů ročně</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-r from-brand-red/50 to-brand-teal/40 blur-3xl" />
            <div className="relative rounded-[32px] border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/15 pb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/70">
                    Ordinační hodiny
                  </p>
                  <p className="text-2xl font-semibold mt-1">Pondělí–Pátek</p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                  Bezpečné prostředí
                </span>
              </div>
              <div className="mt-6 space-y-4 text-sm text-white/90">
                {[
                  ['Pondělí', '7:00–17:00 • Arytmologie 17:00–19:30'],
                  ['Úterý', '7:00–16:00'],
                  ['Středa', '8:00–16:00'],
                  ['Čtvrtek', '8:00–15:00 • Sportovci 15:30'],
                  ['Pátek', '7:30–15:00'],
                ].map(([day, info]) => (
                  <div
                    key={day}
                    className="flex items-start justify-between gap-3 rounded-2xl bg-white/5 px-4 py-3"
                  >
                    <p className="font-semibold">{day}</p>
                    <p className="text-right text-white/80 s-">{info}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-white/20 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.4em] text-white/60 mb-1">Hotline</p>
                <a href="tel:+420604415479" className="text-2xl font-semibold">
                  +420 604 415 479
                </a>
                <p className="text-sm text-white/70">
                  Rychlé objednání, konzultace výsledků, koordinace klinických studií
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">Specializace</p>
            <h2 className="text-3xl font-semibold mt-3 text-brand-navy">Na co se zaměřujeme</h2>
            <p className="mt-3 text-base text-brand-slate max-w-2xl mx-auto">
              Vycházíme z trendů moderních kardiologických klinik: kombinujeme diagnostické centrum,
              edukaci pacientů i precizní navazující péči.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-3xl border border-brand-gray bg-white p-6 shadow-lg shadow-brand-gray/50 transition hover:-translate-y-1 hover:border-brand-red/30"
              >
                <div className="text-4xl">{service.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-brand-navy group-hover:text-brand-red transition">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-brand-slate leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl border border-brand-gray bg-white/95 p-8 shadow-xl">
            <div className="flex flex-col gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">Pojišťovny</p>
                <h2 className="mt-2 text-2xl font-semibold text-brand-navy">
                  Spolupracujeme s hlavními partnery
                </h2>
                <p className="text-sm text-brand-slate">
                  Vyšetření hradíme klientům šesti nejčastějších zdravotních pojišťoven.
                </p>
              </div>
              <Link
                href="/cenik"
                className="inline-flex items-center justify-center rounded-full border border-brand-gray px-5 py-2 text-sm font-semibold text-brand-navy"
              >
                Detailní ceník ↗
              </Link>
            </div>
            <InsuranceLogos className="mt-8" compact showLink />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-3xl border border-brand-gray bg-white/90 p-8 shadow-xl">
            <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">Jak pracujeme</p>
            <h2 className="mt-3 text-3xl font-semibold text-brand-navy">Cesta pacienta</h2>
            <p className="mt-4 text-brand-slate">
              Inspirujeme se moderními ambulancemi: místo jednotlivých vyšetření nabízíme orchestr
              péče s jasným plánem.
            </p>
            <div className="mt-8 space-y-6">
              {roadmap.map((step, index) => (
                <div key={step.title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gray text-sm font-semibold text-brand-navy">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-brand-navy">{step.title}</p>
                    <p className="text-sm text-brand-slate">{step.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-brand-gray bg-gradient-to-br from-white to-brand-gray/60 p-6 shadow-lg"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-brand-teal/80">
                  {item.title}
                </p>
                <p className="mt-3 text-xl font-semibold text-brand-navy">{item.detail}</p>
              </div>
            ))}
            <div className="rounded-3xl bg-gradient-to-r from-brand-red to-brand-red-dark p-6 text-white shadow-xl">
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">Prevence</p>
              <h3 className="mt-4 text-2xl font-semibold">Vyšetření sportovců</h3>
              <p className="mt-2 text-sm text-white/80">
                Čtvrtek od 15:30 pouze na objednání. Zahrnuje EKG, echokardiografii a konzultaci
                tréninku.
              </p>
              <Link
                href="/kontakt"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold"
              >
                Rezervovat termín
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid gap-10 px-4 md:grid-cols-2">
          <div className="rounded-3xl border border-brand-gray bg-white/90 p-8 shadow-xl">
            <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">Technologie</p>
            <h2 className="mt-3 text-3xl font-semibold text-brand-navy">Moderní vybavení</h2>
            <ul className="mt-6 space-y-4 text-sm text-brand-slate">
              {[
                'Echokardiografický přístroj včetně jícnové sondy',
                'Digitální ergometry pro vyšetření zátěže',
                'Holter monitorace EKG i krevního tlaku s okamžitým exportem',
                'POCT laboratorní diagnostika (troponin, D-dimer, NT-proBNP)',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-brand-red">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-brand-gray bg-white/90 p-8 shadow-xl">
            <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">Důvěra</p>
            <h2 className="mt-3 text-3xl font-semibold text-brand-navy">Proč pacienti volí nás</h2>
            <ul className="mt-6 space-y-4 text-sm text-brand-slate">
              {[
                'Transparentní komunikace výsledků včetně doporučení pro další péči',
                'Napojení na špičková kardiovaskulární centra v Praze',
                'Možnost zapojení do klinických studií nových terapií',
                'Koordinace péče pro sportovní kluby a firmy',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-brand-red">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="rounded-[32px] border border-brand-gray bg-white/95 p-10 shadow-2xl">
            <div className="grid gap-8 md:grid-cols-[1.3fr,0.7fr] md:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">Další krok</p>
                <h2 className="mt-3 text-3xl font-semibold text-brand-navy">
                  Potřebujete konzultaci?
                </h2>
                <p className="mt-4 text-brand-slate">
                  Připravíme pro vás plán vyšetření a navazující péči. Odpovídáme během jednoho
                  pracovního dne.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-red/30"
                  >
                    Napište nám
                  </Link>
                  <a
                    href="tel:+420326396790"
                    className="inline-flex items-center gap-2 rounded-full border border-brand-gray px-6 py-3 text-sm font-semibold text-brand-navy"
                  >
                    Zavolejte recepci
                  </a>
                </div>
              </div>
              <div className="rounded-3xl border border-brand-gray bg-brand-gray/70 p-6 text-brand-navy">
                <p className="text-sm font-semibold">Nádražní 1317/5, Brandýs nad Labem</p>
                <p className="mt-2 text-sm text-brand-slate">
                  Snadné parkování, bezbariérový vstup, čekárna s Wi-Fi.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand-red">
                    Bezpečí
                  </div>
                  <div className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand-teal">
                    Prevence
                  </div>
                  <div className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand-blue">
                    Výzkum
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
