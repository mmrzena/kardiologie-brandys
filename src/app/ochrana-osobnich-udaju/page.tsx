import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ochrana osobních údajů',
  description: 'Jak nakládáme s údaji z webu a kontaktního formuláře Kardiologie Brandýs.',
}

export default function PrivacyPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <article className="mx-auto max-w-3xl rounded-3xl border border-brand-gray bg-white/95 p-6 shadow-lg md:p-10">
          <h1 className="text-3xl font-semibold text-brand-navy">Ochrana osobních údajů</h1>
          <div className="mt-6 space-y-6 text-sm leading-relaxed text-brand-slate [&_a]:underline [&_h2]:mb-2 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-brand-navy">
            <section>
              <h2>Kdo údaje spravuje</h2>
              <p>
                MEDICUS SERVICES s.r.o., IČO 47547898, se sídlem Na Vyhlídce 332, 281 63 Vyžlovka,
                zapsaná u Městského soudu v Praze, oddíl C, vložka 20327. Ordinace sídlí na adrese
                Nádražní 1317/5, Brandýs nad Labem. S dotazy nebo žádostmi se obraťte na{' '}
                <a href="mailto:kardiologie.brandys@seznam.cz">kardiologie.brandys@seznam.cz</a>.
              </p>
            </section>

            <section>
              <h2>Údaje z formuláře</h2>
              <p>
                Jméno, kontakty, případný rok narození, zprávu a přílohy používáme k vyřízení vašeho
                požadavku. Právním základem jsou kroky k poskytnutí péče a zákonné povinnosti (čl. 6
                odst. 1 písm. b, c GDPR), u zdravotních údajů poskytování zdravotní péče (čl. 9
                odst. 2 písm. h GDPR). U obecných dotazů jde o oprávněný zájem odpovědět vám (čl. 6
                odst. 1 písm. f GDPR).
              </p>
              <p className="mt-2">
                Formulář je dobrovolný; pole s hvězdičkou jsou nutná k odeslání. Můžete nás
                kontaktovat i telefonicky. Posílejte jen údaje potřebné k vyřízení požadavku.
              </p>
            </section>

            <section>
              <h2>Uchování a příjemci</h2>
              <p>
                Dobu uchování zpráv určuje vyřízení požadavku, navazující komunikace a případná
                potřeba doložení péče či řešení sporu. Údaje zařazené do zdravotnické dokumentace
                podléhají zákonným lhůtám podle vyhlášky č. 444/2024 Sb.
              </p>
              <p className="mt-2">
                Údaje zpracovávají pověření pracovníci ordinace a poskytovatelé hostingu a
                e-mailových služeb se servery v EU.
              </p>
            </section>

            <section>
              <h2>Provoz webu</h2>
              <p>
                Hosting zpracovává technické údaje včetně IP adresy. IP adresu a e-mail používáme
                také k ochraně formuláře před spamem. Anonymní statistiky návštěvnosti (navštívené
                stránky, zařízení, přibližná poloha) sbíráme bez cookies; identifikátor návštěvy se
                resetuje po 24 hodinách. Právním základem je oprávněný zájem na bezpečném provozu a
                vyhodnocování návštěvnosti.
              </p>
            </section>

            <section>
              <h2>Vaše práva</h2>
              <p>
                Za podmínek GDPR můžete požadovat přístup, opravu, výmaz, omezení zpracování nebo
                přenositelnost údajů a vznést námitku proti zpracování na základě oprávněného zájmu.
                Žádosti vyřizujeme do jednoho měsíce; o případném zákonném prodloužení vás
                informujeme. Stížnost můžete podat u{' '}
                <a href="https://uoou.gov.cz">Úřadu pro ochranu osobních údajů</a>. Údaje z
                formuláře nepoužíváme k automatizovanému rozhodování ani profilování.
              </p>
            </section>

            <Link href="/kontakt" className="inline-block text-brand-navy hover:text-brand-red">
              Zpět na kontakt
            </Link>
          </div>
        </article>
      </div>
    </main>
  )
}
