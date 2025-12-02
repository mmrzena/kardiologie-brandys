export default function ServicesPage() {
  const services = [
    {
      title: 'Kardiologické vyšetření',
      description:
        'Komplexní kardiologické vyšetření včetně EKG a echokardiografického vyšetření. Posouzení kardiovaskulárního rizika a konzultační činnost.',
      icon: '🩺',
    },
    {
      title: 'EKG',
      description:
        'Registrace elektrických potenciálů srdce pro diagnostiku patologií. Používáme moderní digitální přístroje.',
      icon: '📊',
    },
    {
      title: 'Echokardiografie',
      description:
        'Ultrazvukové vyšetření srdce včetně jícnové varianty. Umožňuje posouzení funkce srdečních komor, chlopní a dalších struktur.',
      icon: '🫀',
    },
    {
      title: 'Zátěžové testy',
      description:
        'Ergometrie a zátěžové echokardiografické vyšetření pro posouzení výkonnosti srdce a odhalení ischemické choroby srdeční.',
      icon: '🚴',
    },
    {
      title: 'EKG Holter',
      description:
        '24-96 hodinová monitorace EKG pro zachycení poruch srdečního rytmu a vedení vzruchu. Možnost zapůjčení okamžitého EKG záznamníku na týden domů.',
      icon: '⏱️',
    },
    {
      title: '24hodinová monitorace krevního tlaku (ABPM)',
      description:
        'Přesné měření krevního tlaku po celých 24 hodin pro diagnostiku hypertenze a kontrolu účinnosti léčby.',
      icon: '📈',
    },
    {
      title: 'Arytmologie',
      description:
        'Specializovaná péče o pacienty s poruchami srdečního rytmu. Kontroly stimulátorů pod vedením prof. MUDr. Pavla Osmančíka, Ph.D. Arytmologická poradna každé pondělí večer (17:00–19:30).',
      icon: '⚡',
    },
    {
      title: 'Vyšetření sportovců',
      description:
        'Prevence náhlé smrti u sportovců. Komplexní vyšetření zahrnující EKG a echokardiografii. Specializované vyšetření ve čtvrtek od 15:30 na objednání.',
      icon: '🏃',
    },
    {
      title: 'Spánkový screening',
      description:
        'Diagnostika poruch dýchání ve spánku a jejich vliv na kardiovaskulární systém.',
      icon: '😴',
    },
    {
      title: 'Vnitřní lékařství (interna)',
      description:
        'Komplexní interní vyšetření a péče pro vybrané pojišťovny. Interní předoperační vyšetření.',
      icon: '💊',
    },
    {
      title: 'Dispenzarizace pacientů',
      description:
        'Dlouhodobé sledování a léčba pacientů s kardiovaskulárními onemocněními. Pravidelné kontroly účinnosti léčby.',
      icon: '📋',
    },
    {
      title: 'Klinické studie',
      description:
        'Možnost účasti v klinických studiích nových léčebných postupů a medikamentů v kardiologii.',
      icon: '🔬',
    },
    {
      title: 'Sonografie karotid',
      description:
        'Ultrazvukové vyšetření krčních tepen pro diagnostiku aterosklerózy a posouzení rizika cévní mozkové příhody.',
      icon: '🔍',
    },
    {
      title: 'DUS cév dolních končetin',
      description:
        'Duplexní ultrasonografie cév dolních končetin pro diagnostiku žilní nedostatečnosti a tepenných onemocnění.',
      icon: '🦵',
    },
    {
      title: 'Laboratorní vyšetření (POCT)',
      description:
        'Point-of-care testování včetně INR, troponinu, D-dimeru a NT-proBNP pro okamžitou diagnostiku.',
      icon: '🧪',
    },
  ]

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">Naše služby</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Poskytujeme komplexní kardiologickou péči s využitím moderních diagnostických metod
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h2 className="text-xl font-semibold mb-3">{service.title}</h2>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-brand-gray rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-brand-red">Máte zájem o vyšetření?</h2>
            <p className="text-gray-700 mb-6">
              Kontaktujte nás pro objednání termínu nebo si prohlédněte náš ceník
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/contact"
                className="inline-block bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-blue-dark transition"
              >
                Kontaktujte nás
              </a>
              <a
                href="/pricing"
                className="inline-block bg-white text-brand-red border-2 border-brand-red px-8 py-3 rounded-lg font-semibold hover:bg-brand-red hover:text-white transition"
              >
                Zobrazit ceník
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
