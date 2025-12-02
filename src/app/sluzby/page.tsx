import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      title: 'Kardiologické vyšetření',
      description:
        'Komplexní vyšetření včetně EKG a echokardiografie, posouzení rizik a jasný plán terapie.',
      icon: '🩺',
    },
    {
      title: 'EKG',
      description:
        'Digitální záznam elektrické aktivity srdce s rychlým popisem lékaře, možnost sdílení dat.',
      icon: '📊',
    },
    {
      title: 'Echokardiografie',
      description: 'Ultrazvukové posouzení komor, chlopní a velkých tepen včetně jícnové varianty.',
      icon: '🫀',
    },
    {
      title: 'Zátěžové testy',
      description: 'Ergometrie a zátěžové echo pro odhalení ischemie a posouzení výkonnosti srdce.',
      icon: '🚴',
    },
    {
      title: 'EKG Holter',
      description:
        '24–96 hodin záznamu rytmu. V případě potřeby zapůjčení okamžitého EKG záznamníku domů.',
      icon: '⏱️',
    },
    {
      title: 'ABPM',
      description:
        '24hodinová monitorace krevního tlaku (ABPM) pro přesnou diagnostiku hypertenze.',
      icon: '📈',
    },
    {
      title: 'Arytmologie',
      description:
        'Poruchy rytmu řešíme s prof. MUDr. Pavlem Osmančíkem, Ph.D. Kontroly stimulátorů každé pondělí večer.',
      icon: '⚡',
    },
    {
      title: 'Vyšetření sportovců',
      description: 'Screening náhlé smrti, komplexní balíčky se zaměřením na výkon a regeneraci.',
      icon: '🏃',
    },
    {
      title: 'Spánkový screening',
      description:
        'Odhalujeme poruchy dýchání ve spánku a jejich dopad na kardiovaskulární systém.',
      icon: '😴',
    },
    {
      title: 'Vnitřní lékařství',
      description: 'Předoperační interní vyšetření a péče pro vybrané zdravotní pojišťovny.',
      icon: '💊',
    },
    {
      title: 'Dispenzarizace',
      description: 'Dlouhodobé sledování pacientů s kardiovaskulárními onemocněními.',
      icon: '📋',
    },
    {
      title: 'Klinické studie',
      description: 'Zapojení do studií s novými terapiemi a zdravotnickými technologiemi.',
      icon: '🔬',
    },
    {
      title: 'Sonografie karotid',
      description: 'Ultrazvuk krčních tepen pro diagnostiku aterosklerózy a rizika CMP.',
      icon: '🔍',
    },
    {
      title: 'DUS dolních končetin',
      description: 'Duplexní ultrasonografie žil i tepen dolních končetin.',
      icon: '🦵',
    },
    {
      title: 'Laboratoř (POCT)',
      description: 'INR, troponin, D-dimer, NT-proBNP – výsledky v řádu minut.',
      icon: '🧪',
    },
  ]

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
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs font-semibold text-brand-navy">
              <span className="rounded-full bg-brand-gray/80 px-4 py-1">Diagnostika</span>
              <span className="rounded-full bg-brand-gray/80 px-4 py-1">Arytmologie</span>
              <span className="rounded-full bg-brand-gray/80 px-4 py-1">Sport & prevence</span>
              <span className="rounded-full bg-brand-gray/80 px-4 py-1">Výzkum</span>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-brand-gray bg-white p-6 shadow-lg shadow-brand-gray/60 transition hover:-translate-y-1"
              >
                <div className="text-4xl">{service.icon}</div>
                <h2 className="mt-4 text-2xl font-semibold text-brand-navy">{service.title}</h2>
                <p className="mt-2 text-sm text-brand-slate leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </section>

          <section className="rounded-[32px] border border-brand-gray bg-gradient-to-r from-brand-blue to-brand-blue-dark p-10 text-white shadow-2xl">
            <h2 className="text-3xl font-semibold">Potřebujete poradit s výběrem vyšetření?</h2>
            <p className="mt-3 text-white/80">
              Zavolejte, nebo nám napište – připravíme balíček vyšetření během jednoho pracovního
              dne.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/kontakt"
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
