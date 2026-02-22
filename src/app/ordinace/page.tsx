import Link from 'next/link'
import type { Metadata } from 'next'
import AmbulanceSlideshow from '@/components/AmbulanceSlideshow'
import { StaffMember, doctors, nurses, researches } from '@/data/staff'
import ArrowUpRightIcon from '@/components/icons/ArrowUpRight'
import StaffAvatar from '@/components/StaffAvatar'

export const metadata: Metadata = {
  title: 'O ambulanci',
  description:
    'Kardiologická ambulance MUDr. Jiřího Krupičky v Brandýse nad Labem. Profesionální tým lékařů a sester, moderní vybavení a více než 30 let zkušeností.',
}

const renderStaffGrid = (members: StaffMember[], renderTitle: boolean = false) => (
  <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {members.map((member) => (
      <Link
        key={member.id}
        href={`/tym/${member.id}`}
        className="overflow-hidden rounded-3xl border border-brand-gray bg-white shadow-lg transition hover:border-brand-red/40 hover:shadow-xl"
      >
        {member.src ? (
          <div className="h-52 bg-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={member.src} alt={member.name} className="h-full w-full object-cover" />
          </div>
        ) : (
          <StaffAvatar id={member.id} name={member.name} className="h-52" />
        )}
        <div className="p-5 flex flex-col justify-between min-h-[100px]">
          <h2 className="text-lg font-semibold text-brand-navy">{member.name}</h2>
          {renderTitle && <p className="text-sm font-medium text-brand-red">{member.title}</p>}
        </div>
      </Link>
    ))}
  </div>
)

export default function OrdinacePage() {
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
            <p className="mt-6 text-base text-brand-slate">
              Soukromá ambulance MUDr. Jiřího Krupičky poskytuje komplexní kardiologický servis.
              Více než 30 let zkušeností, špičkové vybavení a moderní kardiologická péče.
            </p>
          </section>

          <section
            id="nas-tym"
            className="space-y-8 rounded-[32px] border border-brand-gray bg-white/95 p-10 shadow-2xl"
          >
            <div className="space-y-12">
              {doctors.length > 0 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">Lékaři</p>
                  </div>
                  {renderStaffGrid(doctors, true)}
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
                      Klinické studie
                    </p>
                  </div>
                  {renderStaffGrid(researches)}
                </div>
              )}
            </div>
          </section>

          <section className="rounded-[32px] border border-brand-gray bg-white/95 p-10 shadow-2xl">
            <div className="mx-auto max-w-6xl text-center">
              <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">Fotogalerie</p>
              <h2 className="mt-4 text-3xl font-semibold text-brand-navy">
                Prohlédněte si prostory ambulance
              </h2>
            </div>
            <div className="mt-8">
              <AmbulanceSlideshow />
            </div>
          </section>

          <section className="rounded-[32px] border border-brand-gray bg-gradient-to-r from-brand-blue/5 via-white to-brand-teal/5 p-10 shadow-2xl">
            <div className="grid gap-8 md:grid-cols-[1.2fr,0.8fr] md:items-center">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">Kariéra</p>
                <h2 className="text-3xl font-semibold text-brand-navy">Hledáme nové kolegy</h2>
                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    { title: 'Kardiolog', detail: 'Plný nebo zkrácený úvazek (od 8 h/týden)' },
                    { title: 'Internista', detail: 'Plný nebo zkrácený úvazek (od 8 h/týden)' },
                    { title: 'Diabetolog', detail: 'Zkrácený úvazek (od 4 h/týden)' },
                    {
                      title: 'Zdravotní sestra',
                      detail: 'Plný nebo zkrácený úvazek (od 8 h/týden)',
                    },
                  ].map((role) => (
                    <div
                      key={role.title}
                      className="rounded-2xl border border-brand-gray bg-white/80 p-4 shadow-sm"
                    >
                      <p className="text-base font-semibold text-brand-navy">{role.title}</p>
                      <p className="text-xs text-brand-slate">{role.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4 rounded-3xl border border-brand-gray bg-white/90 p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-brand-navy">Co nabízíme</h3>
                <ul className="list-disc space-y-2 pl-5 text-sm text-brand-slate">
                  <li>Nadstandardní platové ohodnocení a odměny</li>
                  <li>Zázemí stabilní ambulance s přátelským kolektivem</li>
                  <li>Flexibilní rozvrh při zkráceném úvazku</li>
                  <li>Možnost kombinovat práci s rodičovskou dovolenou či dalším úvazkem</li>
                  <li>Účast na klinických studiích a podpora vzdělávání</li>
                  <li>Účast na tuzemských i zahraničních kongresech</li>
                </ul>
                <p className="text-sm text-brand-slate">
                  Vhodné i pro lékaře před atestací. Ozvěte se, rádi se potkáme osobně.
                </p>
                <div className="rounded-2xl border border-brand-gray/80 bg-brand-gray/50 p-4 text-sm text-brand-navy">
                  <p>
                    <strong>Tel.:</strong>{' '}
                    <a href="tel:+420702195166" className="transition hover:text-brand-red">
                      +420 702 195 166
                    </a>
                  </p>
                  <p className="mt-1">
                    <strong>Email:</strong>{' '}
                    <a
                      href="mailto:karolina.krupickova@kardiologiebrandys.cz"
                      className="transition hover:text-brand-red"
                    >
                      karolina.krupickova@kardiologiebrandys.cz
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
