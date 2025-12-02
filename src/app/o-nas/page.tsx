export default function AboutPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">O naší ambulanci</h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Soukromá ambulance MUDr. Jiřího Krupičky nabízí komplexní kardiologický servis,
                od ambulantních diagnostických vyšetření, přes konzultační činnosti až po
                specializované služby v kardiologii a arytmologii.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Naše ordinace se nachází na adrese Nádražní 1317/5 v Brandýse nad Labem a slouží
                pacientům z celého okolí. Jsme tým zkušených odborníků s mnohaletou praxí na
                předních českých pracovištích.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-red">Náš tým</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                V naší ambulanci působí zkušený tým 14 členů - 8 lékařů, 3 zdravotní sestry a 3 členy Clinical Research Department:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Lékaři:</h3>
                  <ul className="space-y-1 text-sm text-gray-700 ml-4">
                    <li>• <strong>MUDr. Jiří Krupička, Ph.D.</strong> - zakladatel</li>
                    <li>• <strong>MUDr. Pavel Franc</strong> - kardiolog, internista</li>
                    <li>• <strong>MUDr. Robin Králík</strong> - kardiolog, internista</li>
                    <li>• <strong>prof. MUDr. Pavel Osmančík, Ph.D.</strong> - arytmolog</li>
                    <li>• <strong>MUDr. Tereza Benešová</strong> - kardioložka</li>
                    <li>• <strong>MUDr. Petra Srbová</strong> - kardioložka, internistka</li>
                    <li>• <strong>MUDr. Markéta Hodboďová</strong> - kardioložka</li>
                    <li>• <strong>MUDr. Tomáš Budek</strong> - klinický výzkum</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Zdravotní sestry:</h3>
                  <ul className="space-y-1 text-sm text-gray-700 ml-4">
                    <li>• <strong>Klára Bernardová</strong> - staniční sestra</li>
                    <li>• <strong>Petra Livorová</strong></li>
                    <li>• <strong>Tereza Režná</strong></li>
                  </ul>
                  <h3 className="font-semibold text-gray-800 mb-2 mt-4">Clinical Research:</h3>
                  <ul className="space-y-1 text-sm text-gray-700 ml-4">
                    <li>• <strong>Jana Budková</strong></li>
                    <li>• <strong>Stanislava Podzimková</strong></li>
                    <li>• <strong>Ing. Hedvika Tůmová</strong></li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-red">Naše specializace</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-brand-red mr-2">✓</span>
                  <span><strong>Komplexní kardiologická péče</strong> - diagnostika a léčba všech srdečních onemocnění</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-2">✓</span>
                  <span><strong>Arytmologie</strong> - specializovaná péče o pacienty s poruchami srdečního rytmu, kontroly stimulátorů</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-2">✓</span>
                  <span><strong>Sportovní kardiologie</strong> - prevence náhlé smrti u sportovců, specializované vyšetření</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-2">✓</span>
                  <span><strong>Vnitřní lékařství</strong> - interní vyšetření pro vybrané pojišťovny</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-2">✓</span>
                  <span><strong>Klinické studie</strong> - možnost účasti v klinických studiích nových léčebných postupů</span>
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-red">Historie</h2>
              <p className="text-gray-700 leading-relaxed">
                Ambulance byla založena v roce 2009 MUDr. Jiřím Krupičkou, Ph.D., který přinesl
                bohaté zkušenosti z Fakultní nemocnice Královské Vinohrady a Nemocnice na Homolce.
                Od té doby naše ordinace poskytuje kvalitní kardiologickou péči pacientům v Brandýse
                nad Labem a širokém okolí. Postupně se náš tým rozrostl o další zkušené odborníky,
                což nám umožňuje nabídnout ještě širší spektrum služeb včetně specializované
                arytmologické péče.
              </p>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-red">Vybavení ordinace</h2>
              <p className="text-gray-700 mb-3">
                Ambulance disponuje moderním vybavením pro komplexní kardiologickou diagnostiku:
              </p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• Echokardiografický přístroj (ultrazvuk srdce)</li>
                <li>• Zátěžové EKG (ergometr)</li>
                <li>• Holter monitoring EKG a krevního tlaku</li>
                <li>• Základní laboratorní vybavení (POCT)</li>
                <li>• Spánkový screening</li>
              </ul>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-brand-red">Pojišťovny</h2>
              <p className="text-gray-700 mb-3">
                Spolupracujeme s následujícími zdravotními pojišťovnami:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
                <div className="flex items-center">
                  <span className="text-brand-red mr-2">✓</span>
                  <span>VZP (111)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-brand-red mr-2">✓</span>
                  <span>VOZP (201)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-brand-red mr-2">✓</span>
                  <span>ČPZP (205)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-brand-red mr-2">✓</span>
                  <span>OZP (207)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-brand-red mr-2">✓</span>
                  <span>ZPŠ (209)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-brand-red mr-2">✓</span>
                  <span>ZPMV (211)</span>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-brand-red">Identifikační údaje</h2>
              <p className="text-gray-700">
                <strong>Provozovatel:</strong> MEDICUS SERVICES s.r.o.<br />
                <strong>IČO:</strong> 47547898<br />
                <strong>Počet lékařů:</strong> 8 (včetně specialistů na arytmologii)<br />
                <strong>Zdravotní sestry:</strong> 3<br />
                <strong>Clinical Research Department:</strong> 3 členové
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
