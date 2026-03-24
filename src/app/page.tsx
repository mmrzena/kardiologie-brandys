import Link from 'next/link'
import InsuranceLogos from '@/components/InsuranceLogos'
import ArrowUpRightIcon from '@/components/icons/ArrowUpRight'
import { announcements } from '@/data/announcements'
import { TOPIC } from '@/data/topics'

export const revalidate = 3600

const services = [
  {
    title: 'Komplexní diagnostika a péče',
    description:
      'Našim pacientům zajišťujeme kardiologickou péči od vstupního vyšetření po pravidelné dlouhodobé kontroly.',
    to: '/sluzby',
  },
  {
    title: 'Arytmologie',
    description:
      'Specializovaná poradna a kontroly kardiostimulátorů pod vedením prof. MUDr. Pavla Osmančíka, Ph.D.',
    to: '/sluzby/arytmologie',
  },
  {
    title: 'Vyšetření sportovců',
    description: 'Preventivní screeningové vyšetření pro profesionální i amatérské sportovce.',
    note: 'Dotazník ke stažení',
    to: '/sluzby/vysetreni-sportovcu',
  },
  {
    title: 'Klinické studie',
    description:
      'Možnost zapojení do klinických studií, které umožňují pacientům přístup k inovativní léčbě pod odborným dohledem.',
    to: '/sluzby/klinicke-studie',
  },
]

export default function Home() {
  const now = new Date()
  const parseStartDate = (value: string) => new Date(`${value}T00:00:00`)
  const parseEndDate = (value: string) => new Date(`${value}T23:59:59.999`)
  const activeAnnouncements = announcements.filter((announcement) => {
    const start = parseStartDate(announcement.startDate)
    const end = parseEndDate(announcement.endDate)
    return now >= start && now <= end
  })
  const [primaryAnnouncement, ...secondaryAnnouncements] = activeAnnouncements

  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-blue-dark to-brand-navy text-white">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-red blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-brand-teal blur-3xl" />
        </div>
        <div className="container relative mx-auto px-4 py-12 md:py-16">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="space-y-6 md:space-y-8">
              {primaryAnnouncement && (
                <div
                  aria-labelledby="homepage-announcements-heading"
                  className="max-w-2xl overflow-hidden rounded-[24px] border border-white/25 bg-gradient-to-r from-white/[0.16] to-white/[0.1] p-4 shadow-xl shadow-brand-navy/20 backdrop-blur-md sm:rounded-[28px] sm:p-5"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="mt-0.5 min-h-14 w-1 self-stretch rounded-full bg-gradient-to-b from-brand-red via-brand-red to-brand-teal sm:min-h-16 sm:w-1.5" />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span
                          id="homepage-announcements-heading"
                          className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-brand-navy shadow-md shadow-black/10 sm:text-[0.68rem] sm:tracking-[0.22em]"
                        >
                          <span className="h-2 w-2 rounded-full bg-brand-red" />
                          Aktuálně
                        </span>
                      </div>
                      <p className="mt-2.5 text-[0.98rem] font-semibold leading-snug text-white sm:text-base md:text-lg">
                        {primaryAnnouncement.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-white/85 sm:text-[0.95rem]">
                        {primaryAnnouncement.message}
                      </p>
                      <div className="mt-3 flex flex-col items-start gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                        {primaryAnnouncement.link ? (
                          <Link
                            href={primaryAnnouncement.link}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-navy shadow-md shadow-black/10 transition hover:bg-white/90 sm:w-auto"
                          >
                            {primaryAnnouncement.linkLabel ?? 'Více informací'}
                            <ArrowUpRightIcon />
                          </Link>
                        ) : null}
                        <Link
                          href="/kontakt"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
                        >
                          Kontakty
                          <ArrowUpRightIcon />
                        </Link>
                      </div>

                      {secondaryAnnouncements.length > 0 && (
                        <div className="mt-3 flex flex-col items-start gap-2 border-t border-white/15 pt-3 sm:flex-row sm:flex-wrap sm:items-center">
                          <p className="text-[0.65rem] uppercase tracking-[0.18em] text-white/60">
                            Další oznámení
                          </p>
                          {secondaryAnnouncements.map((announcement) => (
                            <div
                              key={`${announcement.title}-${announcement.startDate}`}
                              className="flex w-full max-w-full items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.08] px-3 py-2 text-xs text-white/75 sm:inline-flex sm:w-auto sm:rounded-full sm:py-1.5"
                            >
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" />
                              <span className="min-w-0 flex-1 truncate font-medium sm:max-w-[18rem]">
                                {announcement.title}
                              </span>
                              {announcement.link ? (
                                <Link
                                  href={announcement.link}
                                  className="shrink-0 font-semibold text-white/90 transition hover:text-white"
                                >
                                  Detail
                                </Link>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.4em] text-brand-teal/80">
                  Kardiologická ambulance
                </p>
                <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                  Komplexní kardiologická péče na jednom místě
                </h1>
              </div>
              <p className="text-lg text-white/80">
                Více než 30 let zkušeností, moderní vybavení a aktuální lékařské postupy
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/kontakt?topic=${TOPIC.OBJEDNANI}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-navy shadow-lg shadow-black/20 transition hover:bg-white/90"
                >
                  Objednat na vyšetření
                  <ArrowUpRightIcon />
                </Link>
                <Link
                  href={`/kontakt?topic=${TOPIC.RECEPT}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-navy shadow-lg shadow-black/20 transition hover:bg-white/90"
                >
                  Žádost o recept
                  <ArrowUpRightIcon />
                </Link>
                <Link
                  href="/sluzby"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Naše služby
                </Link>
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
                    <p className="mt-1 text-2xl font-semibold">Pondělí – Pátek</p>
                  </div>
                </div>
                <div className="mt-6 space-y-4 text-sm text-white/90">
                  {[
                    ['Pondělí', '7:00–17:00 • Arytmologie 17:00–19:30'],
                    ['Úterý', '7:00–16:00'],
                    ['Středa', '8:00–16:00'],
                    ['Čtvrtek', '8:00–15:00 • Sportovci od 15:30'],
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
                  <p className="mb-1 text-xs uppercase tracking-[0.4em] text-white/60">Objednání</p>
                  <a href="tel:+420326396790" className="text-2xl font-semibold">
                    +420 326 396 790
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold mt-3 text-brand-navy">Naše služby</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.to || '/sluzby'}
                className="group flex flex-col rounded-3xl border border-brand-gray bg-white p-6 shadow-lg shadow-brand-gray/50 transition-all hover:shadow-xl hover:shadow-brand-gray/60 hover:border-brand-teal/40"
              >
                <div className="flex items-start justify-between">
                  <h3 className="mt-4 text-xl font-semibold text-brand-navy group-hover:text-brand-teal transition-colors">
                    {service.title}
                  </h3>
                  <ArrowUpRightIcon className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity text-brand-teal" />
                </div>
                <p className="mt-2 text-sm text-brand-slate leading-relaxed">
                  {service.description}
                </p>
                {service.note && (
                  <p className="mt-3 text-xs font-semibold text-brand-slate">{service.note}</p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <div className="rounded-[32px] border border-brand-gray bg-white/95 p-10 shadow-2xl">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">
                  Potřebujete konzultaci?
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-brand-navy">
                  Kardiologická poradna
                </h2>
                <p className="mt-4 text-brand-slate">
                  Nejste naším pacientem a máte otázky nebo pochybnosti o svém zdravotním stavu,
                  léčbě či doporučených zákrocích? On-line poradna vám pomůže porozumět diagnóze,
                  lékům i možnostem další péče.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <Link
                  href="/poradna"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-red/30 transition hover:bg-brand-red-dark"
                >
                  Napište nám
                </Link>
              </div>
            </div>
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
                  Máme smlouvy se všemi významnými zdravotními pojišťovnami
                </h2>
              </div>
              <Link
                href="/cenik"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-gray px-5 py-2 text-sm font-semibold text-brand-navy transition hover:border-brand-navy hover:bg-brand-gray/60"
              >
                Ceník služeb nehrazených pojišťovnou
                <ArrowUpRightIcon />
              </Link>
            </div>
            <InsuranceLogos className="mt-8" compact showLink />
          </div>
        </div>
      </section>
    </main>
  )
}
