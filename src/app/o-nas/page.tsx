import Link from 'next/link'
import AmbulanceSlideshow from '@/components/AmbulanceSlideshow'
import { StaffMember, doctorArotmologists, doctors, nurses, researches } from '@/data/staff'

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
        <div className="mx-auto max-w-6xl space-y-12">
          <section className="rounded-[32px] border border-brand-gray bg-white/95 p-10 shadow-2xl text-center">
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
          </section>

          <section className="rounded-[32px] border border-brand-gray bg-white/95 p-10 shadow-2xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">
                Fotogalerie ordinace
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-brand-navy">Podívejte se dovnitř</h2>
            </div>
            <div className="mt-8">
              <AmbulanceSlideshow />
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
                        Kardiologie a interna
                      </h3>
                    </div>
                    {renderStaffGrid(doctors)}
                  </div>
                )}

                {doctorArotmologists.length > 0 && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">Lékaři</p>
                      <h3 className="text-2xl font-semibold text-brand-navy">Arytmologie</h3>
                    </div>
                    {renderStaffGrid(doctorArotmologists)}
                  </div>
                )}

                {nurses.length > 0 && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">
                        Zdravotní sestry
                      </p>
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
                      <h3 className="text-2xl font-semibold text-brand-navy">Klinické studie</h3>
                    </div>
                    {renderStaffGrid(researches)}
                  </div>
                )}
              </div>
            )}
          </section>

          <section className="rounded-[32px] border border-brand-gray bg-gradient-to-r from-brand-blue/5 via-white to-brand-teal/5 p-10 shadow-2xl">
            <div className="grid gap-6 md:grid-cols-[1.5fr,0.5fr] md:items-center">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">Naše služby</p>
                <h2 className="text-3xl font-semibold text-brand-navy">
                  Kompletní kardiologická péče na jednom místě
                </h2>
                <p className="text-sm text-brand-slate">
                  Od preventivních prohlídek přes specializované arytmologické programy až po
                  zapojení do klinických studií. Vyberte si službu, která nejlépe odpovídá vaší
                  aktuální potřebě.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <Link
                  href="/sluzby"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-red/30 transition hover:bg-brand-red-dark"
                >
                  Prohlédnout služby
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
