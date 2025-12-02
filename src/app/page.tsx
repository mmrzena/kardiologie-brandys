import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-red to-brand-red-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kardiologická ambulance MUDr. Jiřího Krupičky
            </h1>
            <p className="text-xl mb-8">
              Komplexní kardiologický servis, od ambulantních diagnostických vyšetření, přes konzultační činnosti až po specializované služby v kardiologii a arytmologii
            </p>
            <div className="flex gap-4">
              <Link
                href="/kontakt"
                className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue-dark transition"
              >
                Kontaktujte nás
              </Link>
              <Link
                href="/sluzby"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-brand-red transition"
              >
                Naše služby
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-brand-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-red">Naše služby</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-brand-red text-4xl mb-4">🩺</div>
              <h3 className="text-xl font-semibold mb-2 text-brand-red">Kardiologická diagnostika</h3>
              <p className="text-gray-600">
                EKG, echokardiografie, zátěžové testy, Holter monitoring, 24hodinová monitorace tlaku
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-brand-red text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2 text-brand-red">Arytmologie</h3>
              <p className="text-gray-600">
                Specializovaná péče o pacienty s poruchami srdečního rytmu, kontroly stimulátorů
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-brand-red text-4xl mb-4">🏃</div>
              <h3 className="text-xl font-semibold mb-2 text-brand-red">Vyšetření sportovců</h3>
              <p className="text-gray-600">
                Prevence náhlé smrti u sportovců, specializované kardiologické vyšetření
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">O naší ambulanci</h2>
            <p className="text-gray-600 text-lg mb-6">
              Soukromá ambulance MUDr. Jiřího Krupičky v Brandýse nad Labem poskytuje komplexní
              kardiologický servis od roku 2009. Náš tým 8 zkušených lékařů, 3 zdravotních sester
              a 3 členů Clinical Research Department se zaměřuje na individuální péči v oblasti
              kardiologie, arytmologie, sportovní kardiologie a vnitřního lékařství. V našem týmu působí
              i prof. MUDr. Pavel Osmančík, Ph.D., přední český arytmolog a laureát ocenění Česká hlava.
            </p>
            <div className="bg-brand-gray p-4 rounded-lg mb-6">
              <p className="text-sm text-gray-700">
                <strong>Pojišťovny:</strong> VZP, VOZP, ČPZP, OZP, ZPŠ, ZPMV
              </p>
            </div>
            <Link
              href="/o-nas"
              className="text-brand-red font-semibold hover:text-brand-red-dark transition"
            >
              Zjistit více o nás →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Máte dotaz?</h2>
          <p className="text-xl mb-8">
            Neváhejte nás kontaktovat, rádi vám pomůžeme
          </p>
          <Link
            href="/kontakt"
            className="bg-white text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Napište nám
          </Link>
        </div>
      </section>
    </main>
  )
}
