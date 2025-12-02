import { doctors, nurses, researches } from '@/data/staff'
import { insurers } from '@/lib/insurers'

export default function AboutPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl space-y-12">
          <section className="rounded-[32px] border border-brand-gray bg-white/95 p-10 shadow-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">O ambulanci</p>
            <h1 className="mt-4 text-4xl font-semibold text-brand-navy">
              Profesionální péče od roku 2009
            </h1>
            <p className="mt-6 text-lg text-brand-slate">
              Soukromá ambulance MUDr. Jiřího Krupičky poskytuje komplexní kardiologický servis od
              ambulantních diagnostických vyšetření až po specializovanou arytmologii. Sídlíme na
              adrese Nádražní 1317/5 v Brandýse nad Labem a dlouhodobě spolupracujeme s předními
              českými pracovišti.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                [doctors.length, 'lékařů'],
                [nurses.length, 'zdravotní sestry'],
                [researches.length, 'Clinical Research'],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-brand-gray bg-brand-gray/70 p-4 text-center"
                >
                  <p className="text-3xl font-semibold text-brand-navy">{value}</p>
                  <p className="text-sm text-brand-slate">{label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-8 rounded-3xl border border-brand-gray bg-white/95 p-8 shadow-xl md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-brand-navy">Náš tým</h2>
              <p className="mt-2 text-sm text-brand-slate">
                Tvoří jej {doctors.length + nurses.length + researches.length} odborníků: lékaři s
                praxí na fakultních klinikách, zkušené sestry a Clinical Research Department.
              </p>
              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-sm font-semibold text-brand-navy">Lékaři</p>
                  <ul className="mt-2 space-y-1 text-sm text-brand-slate">
                    {doctors.map(({ name, id }) => (
                      <li key={id}>• {name}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-navy">Zdravotní sestry</p>
                  <ul className="mt-2 space-y-1 text-sm text-brand-slate">
                    {nurses.map(({ name, id }) => (
                      <li key={id}>• {name}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-navy">
                    Clinical Research Department
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-brand-slate">
                    {researches.map(({ name, id }) => (
                      <li key={id}>• {name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-dashed border-brand-gray/80 p-6">
              <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">Specializace</p>
              <ul className="mt-4 space-y-3 text-sm text-brand-navy">
                {[
                  'Komplexní kardiologická péče – diagnostika a léčba kardiovaskulárních onemocnění',
                  'Arytmologie – kontroly stimulátorů a specializovaná poradna prof. MUDr. Pavla Osmančíka, Ph.D.',
                  'Sportovní kardiologie – prevence náhlé smrti u sportovců, čtvrteční program od 15:30',
                  'Vnitřní lékařství – interní vyšetření pro vybrané zdravotní pojišťovny',
                  'Klinické studie – možnost účasti na moderních léčebných postupech',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-brand-red">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-brand-gray bg-white/95 p-8 shadow-xl">
              <h2 className="text-2xl font-semibold text-brand-navy">Historie</h2>
              <p className="mt-4 text-sm text-brand-slate leading-relaxed">
                Ambulance vznikla v roce 2009. MUDr. Jiří Krupička, Ph.D. navázal na své zkušenosti
                z Fakultní nemocnice Královské Vinohrady a Nemocnice Na Homolce. Díky postupnému
                rozšiřování týmu poskytujeme nejen klasickou ambulantní péči, ale i specializované
                arytmologické programy a klinický výzkum.
              </p>
            </div>
            <div className="rounded-3xl border border-brand-gray bg-white/95 p-8 shadow-xl">
              <h2 className="text-2xl font-semibold text-brand-navy">Vybavení</h2>
              <ul className="mt-4 space-y-2 text-sm text-brand-slate">
                {[
                  'Echokardiografický přístroj (včetně jícnové sondy)',
                  'Zátěžové EKG (ergometrie a zátěžová echo)',
                  'Holter monitoring EKG a krevního tlaku',
                  'Point-of-care laboratorní vyšetření (POCT)',
                  'Spánkový screening',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-brand-red">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-brand-gray bg-white/95 p-8 shadow-xl">
              <h2 className="text-2xl font-semibold text-brand-navy">Pojišťovny</h2>
              <p className="mt-2 text-sm text-brand-slate">
                Vybraná vyšetření hradíme klientům těchto pojišťoven:
              </p>
              <div className="mt-4 flex flex-col gap-3">
                {insurers.map((insurer) => (
                  <a
                    key={insurer.code}
                    href={insurer.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-brand-gray/70 bg-brand-gray/40 px-4 py-3 text-sm transition hover:border-brand-red/50"
                  >
                    <div>
                      <p className="font-semibold text-brand-navy">{insurer.name}</p>
                      <p className="text-xs text-brand-slate">{insurer.description}</p>
                    </div>
                    <span className="text-xs font-semibold text-brand-slate">{insurer.code}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-brand-gray bg-white/95 p-8 shadow-xl">
              <h2 className="text-2xl font-semibold text-brand-navy">Identifikační údaje</h2>
              <dl className="mt-4 space-y-2 text-sm text-brand-slate">
                <div>
                  <dt className="font-semibold text-brand-navy">Provozovatel</dt>
                  <dd>MEDICUS SERVICES s.r.o.</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-navy">IČO</dt>
                  <dd>47547898</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-navy">Registrace</dt>
                  <dd>Městský soud v Praze, oddíl C, vložka 20327</dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
