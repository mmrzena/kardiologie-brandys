export default function PricingPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">Ceník</h1>
          <p className="text-center text-gray-600 mb-8">
            Platný od 1. 1. 2025
          </p>

          {/* Note about insurance */}
          <div className="bg-brand-gray p-6 rounded-lg mb-8">
            <p className="text-gray-700">
              <strong>Pojišťovny:</strong> Některá vyšetření jsou hrazena pro pacienty následujících pojišťoven:
              VZP, VOZP, ČPZP, OZP, ZPŠ, ZPMV.
            </p>
          </div>

          <div className="space-y-8">
            {/* Basic services */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-brand-red">Základní služby</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700">Specializované vyšetření kardiologem (60 minut)</span>
                  <span className="font-semibold">1 000 Kč</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700">Konzultace s kardiologem (30 minut)</span>
                  <span className="font-semibold">600 Kč</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-gray-700">EKG + popis kardiologem</span>
                  <span className="font-semibold">200 Kč</span>
                </div>
              </div>
            </section>

            {/* Diagnostic services */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-brand-red">Vyšetření a diagnostika</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700">Echokardiografické vyšetření včetně velkých tepen</span>
                  <span className="font-semibold">1 800 Kč</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700">Zátěžová echokardiografie</span>
                  <span className="font-semibold">2 000 Kč</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700">Vyšetření kardiologem s echokardiografií</span>
                  <span className="font-semibold">2 000 Kč</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700">Sonografie karotid</span>
                  <span className="font-semibold">1 000 Kč</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700">DUS cév dolních končetin</span>
                  <span className="font-semibold">1 000 Kč</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-gray-700">Ergometrie (bicyklová, zátěžové EKG)</span>
                  <span className="font-semibold">900 Kč</span>
                </div>
              </div>
            </section>

            {/* Monitoring */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-brand-red">Monitorace</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700">Ambulantní monitorace krevního tlaku (24 hod.)</span>
                  <span className="font-semibold">600 Kč</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700">Holter EKG monitorace (24 hod.)</span>
                  <span className="font-semibold">1 000 Kč</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700">Holter EKG monitorace (&gt;24 hod.)</span>
                  <span className="font-semibold">1 500 Kč</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-gray-700">Screening spánkové apnoe</span>
                  <span className="font-semibold">800 Kč</span>
                </div>
              </div>
            </section>

            {/* Biochemical tests */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-brand-red">Biochemická vyšetření (POCT)</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700">INR z kapilární krve</span>
                  <span className="font-semibold">200 Kč</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700">Troponin I</span>
                  <span className="font-semibold">150 Kč</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700">D-Dimer</span>
                  <span className="font-semibold">150 Kč</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-gray-700">NT-proBNP</span>
                  <span className="font-semibold">300 Kč</span>
                </div>
              </div>
            </section>

            {/* Sports medicine */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-brand-red">Vyšetření sportovců</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700">Dotazník + echokardiografie + EKG</span>
                  <span className="font-semibold">1 200 Kč</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700">Komplet (dotazník + ECHO + EKG + ergometrie)</span>
                  <span className="font-semibold">2 000 Kč</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-gray-700">EKG + popis + dotazník</span>
                  <span className="font-semibold">300 Kč</span>
                </div>
              </div>
            </section>

            {/* Documentation */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-brand-red">Potvrzení a dokumentace</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700">Výpis ze zdravotní dokumentace</span>
                  <span className="font-semibold">300 Kč</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700">Vyjádření k řidičskému/zbrojnímu průkazu</span>
                  <span className="font-semibold">200 Kč</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700">Výpis pro pojišťovnu</span>
                  <span className="font-semibold">300 Kč</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-gray-700">Potvrzení o zdravotním stavu</span>
                  <span className="font-semibold">200 Kč</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-gray-700">Vyjádření k lázeňskému pobytu</span>
                  <span className="font-semibold">200 Kč</span>
                </div>
              </div>
            </section>

            {/* Online consultation */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-brand-red">On-line poradna</h2>
              <p className="text-gray-700">
                Obecné odpovědi jsou bezplatné; konzultace: <strong>500 Kč</strong> za každou započatou hodinu.
              </p>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-brand-gray rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-brand-red">Máte zájem o vyšetření?</h2>
            <p className="text-gray-700 mb-6">
              Kontaktujte nás pro objednání termínu na telefonu +420 326 396 790
            </p>
            <a
              href="/kontakt"
              className="inline-block bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-blue-dark transition"
            >
              Kontaktujte nás
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
