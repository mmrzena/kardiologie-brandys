import Link from 'next/link'
import AmbulanceSlideshow from '@/components/AmbulanceSlideshow'
import { StaffMember, doctors, nurses, researches } from '@/data/staff'

const renderStaffGrid = (members: StaffMember[]) => (
  <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {members.map((member) => (
      <Link
        key={member.id}
        href={`/tym/${member.id}`}
        className="overflow-hidden rounded-3xl border border-brand-gray bg-white shadow-lg transition hover:-translate-y-1 hover:border-brand-red/40"
      >
        {member.photo_url ? (
          <div className="h-52 bg-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={member.photo_url} alt={member.name} className="h-full w-full object-cover" />
          </div>
        ) : (
          <div className="flex h-52 items-center justify-center bg-gradient-to-br from-brand-blue/20 to-brand-teal/20 text-5xl">
            👤
          </div>
        )}
        <div className="space-y-1 p-5">
          <h2 className="text-lg font-semibold text-brand-navy">{member.name}</h2>
          <p className="text-sm font-medium text-brand-red">{member.title}</p>
          {member.specialization && (
            <p className="text-xs text-brand-slate">{member.specialization}</p>
          )}
        </div>
      </Link>
    ))}
  </div>
)

export default function AboutPage() {
  const totalMembers = doctors.length + nurses.length + researches.length

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

          <section className="rounded-[32px] border border-brand-gray bg-white/95 p-10 shadow-2xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">
                Fotogalerie ordinace
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-brand-navy">Podívejte se dovnitř</h2>
              <p className="mt-3 text-sm text-brand-slate">
                Prohlédněte si prostory ambulance, diagnostické zázemí i specializovaná pracoviště,
                se kterými se při návštěvě setkáte.
              </p>
            </div>
            <div className="mt-8">
              <AmbulanceSlideshow />
            </div>
          </section>

          <section className="grid gap-8 rounded-3xl border border-brand-gray bg-white/95 p-8 shadow-xl md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-brand-navy">Náš tým</h2>
              <p className="mt-2 text-sm text-brand-slate">
                Tvoří jej {totalMembers} odborníků: lékaři s praxí na fakultních klinikách, zkušené
                sestry a Clinical Research Department.
              </p>
              <dl className="mt-6 space-y-4 text-sm text-brand-slate">
                <div className="flex items-center justify-between rounded-2xl border border-brand-gray/70 px-4 py-3">
                  <dt className="font-semibold text-brand-navy">Lékaři</dt>
                  <dd className="text-right">
                    {doctors.length} specialistů na kardiologii a arytmologii
                  </dd>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-brand-gray/70 px-4 py-3">
                  <dt className="font-semibold text-brand-navy">Zdravotní sestry</dt>
                  <dd className="text-right">{nurses.length} koordinátorek péče a edukace</dd>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-brand-gray/70 px-4 py-3">
                  <dt className="font-semibold text-brand-navy">Clinical Research Department</dt>
                  <dd className="text-right">
                    {researches.length} členů věnujících se klinickému výzkumu
                  </dd>
                </div>
              </dl>
              <a
                href="#nas-tym"
                className="mt-6 inline-flex items-center text-sm font-semibold text-brand-red transition hover:text-brand-red-dark"
              >
                Seznamte se s jednotlivými členy týmu
                <span aria-hidden className="ml-2">
                  ↓
                </span>
              </a>
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

          <section
            id="nas-tym"
            className="space-y-8 rounded-[32px] border border-brand-gray bg-white/95 p-10 shadow-2xl"
          >
            {totalMembers === 0 ? (
              <div className="rounded-3xl border border-dashed border-brand-gray bg-white/80 p-10 text-center text-sm text-brand-slate">
                <p>Zatím nejsou k dispozici žádné informace o týmu.</p>
              </div>
            ) : (
              <div className="space-y-12">
                {doctors.length > 0 && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">Lékaři</p>
                      <h3 className="text-2xl font-semibold text-brand-navy">
                        Kardiologie, arytmologie a výzkum
                      </h3>
                    </div>
                    {renderStaffGrid(doctors)}
                  </div>
                )}

                {nurses.length > 0 && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">
                        Zdravotní sestry
                      </p>
                      <h3 className="text-2xl font-semibold text-brand-navy">
                        Koordinace péče a edukace
                      </h3>
                    </div>
                    {renderStaffGrid(nurses)}
                  </div>
                )}

                {researches.length > 0 && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">
                        Clinical Research Department
                      </p>
                      <h3 className="text-2xl font-semibold text-brand-navy">
                        Klinické studie a inovace
                      </h3>
                    </div>
                    {renderStaffGrid(researches)}
                  </div>
                )}
              </div>
            )}
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
        </div>
      </div>
    </main>
  )
}
