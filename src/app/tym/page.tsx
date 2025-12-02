'use client'

import Link from 'next/link'
import { useStaff } from '@/hooks/useStaff'
import { SkeletonList } from '@/components/SkeletonLoader'

export default function TeamPage() {
  const { data: staff = [], isLoading, error } = useStaff()

  if (isLoading) {
    return (
      <main className="py-16">
        <div className="container mx-auto px-4">
          <header className="mx-auto max-w-4xl rounded-[32px] border border-brand-gray bg-white/95 p-10 text-center shadow-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">Náš tým</p>
            <h1 className="mt-4 text-4xl font-semibold text-brand-navy">14 odborníků připravených řešit váš případ</h1>
            <p className="mt-4 text-base text-brand-slate">
              8 lékařů, 3 zkušené sestry a 3 členové Clinical Research Department – všichni s praxí z předních kardiologických center.
            </p>
          </header>
          <div className="mt-12">
            <SkeletonList />
          </div>
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-xl rounded-3xl border border-red-200 bg-red-50 p-8 text-center text-sm text-red-700">
            {error instanceof Error ? error.message : 'Nastala chyba při načítání dat'}
          </div>
        </div>
      </main>
    )
  }

  // Categorize staff members
  const doctors = staff.filter(member =>
    member.title.toLowerCase().includes('kardiolog') ||
    member.title.toLowerCase().includes('arytmolog')
  )
  const nurses = staff.filter(member =>
    member.title.toLowerCase().includes('sestra')
  )
  const research = staff.filter(member =>
    member.title.includes('Clinical Research Department')
  )

  const renderStaffGrid = (members: typeof staff) => (
    <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {members.map((member) => (
        <Link
          key={member.id}
          href={`/tym/${member.id}`}
          className="overflow-hidden rounded-3xl border border-brand-gray bg-white shadow-lg transition hover:-translate-y-1 hover:border-brand-red/40"
        >
          {member.photo_url ? (
            <div className="h-52 bg-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={member.photo_url}
                alt={member.name}
                className="h-full w-full object-cover"
              />
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

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <header className="mx-auto max-w-4xl rounded-[32px] border border-brand-gray bg-white/95 p-10 text-center shadow-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">Náš tým</p>
          <h1 className="mt-4 text-4xl font-semibold text-brand-navy">14 odborníků připravených řešit váš případ</h1>
          <p className="mt-4 text-base text-brand-slate">
            8 lékařů, 3 zkušené sestry a 3 členové Clinical Research Department – všichni s praxí z předních kardiologických center.
          </p>
        </header>

        {staff.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-dashed border-brand-gray bg-white/80 p-10 text-center text-sm text-brand-slate">
            <p>Zatím nejsou k dispozici žádné informace o týmu.</p>
            <p className="mt-3 text-xs">
              Poznámka: Přidejte zaměstnance v Supabase databázi (tabulka &quot;staff&quot;).
            </p>
          </div>
        ) : (
          <div className="mt-12 space-y-12">
            {doctors.length > 0 && (
              <section className="space-y-6">
                <div className="flex flex-col gap-2 text-center">
                  <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">Lékaři</p>
                  <h2 className="text-2xl font-semibold text-brand-navy">Kardiologie, arytmologie a výzkum</h2>
                </div>
                {renderStaffGrid(doctors)}
              </section>
            )}

            {nurses.length > 0 && (
              <section className="space-y-6">
                <div className="flex flex-col gap-2 text-center">
                  <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">Zdravotní sestry</p>
                  <h2 className="text-2xl font-semibold text-brand-navy">Koordinace péče a edukace</h2>
                </div>
                {renderStaffGrid(nurses)}
              </section>
            )}

            {research.length > 0 && (
              <section className="space-y-6">
                <div className="flex flex-col gap-2 text-center">
                  <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">Clinical Research Department</p>
                  <h2 className="text-2xl font-semibold text-brand-navy">Klinické studie a inovace</h2>
                </div>
                {renderStaffGrid(research)}
              </section>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
