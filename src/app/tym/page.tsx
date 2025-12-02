'use client'

import Link from 'next/link'
import { useStaff } from '@/hooks/useStaff'
import { SkeletonList } from '@/components/SkeletonLoader'
import Image from 'next/image'

export default function TeamPage() {
  const { data: staff = [], isLoading, error } = useStaff()

  if (isLoading) {
    return (
      <main className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Náš tým</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Náš tým tvoří 14 členů - 8 lékařů, 3 zdravotní sestry a 3 členové Clinical Research Department. Všichni jsou zkušení odborníci v oblasti kardiologie s mnohaletou praxí.
          </p>
          <SkeletonList />
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-600">
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
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
      {members.map((member) => (
        <Link
          key={member.id}
          href={`/tym/${member.id}`}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
        >
          {member.photo_url ? (
            <div className="h-48 bg-gray-200">
              <Image
                src={member.photo_url}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <div className="text-5xl text-blue-600">👤</div>
            </div>
          )}
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-1">{member.name}</h2>
            <p className="text-brand-red mb-1 font-medium text-sm">{member.title}</p>
            {member.specialization && (
              <p className="text-xs text-gray-600">{member.specialization}</p>
            )}
          </div>
        </Link>
      ))}
    </div>
  )

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Náš tým</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Náš tým tvoří 14 členů - 8 lékařů, 3 zdravotní sestry a 3 členové Clinical Research Department. Všichni jsou zkušení odborníci v oblasti kardiologie s mnohaletou praxí.
        </p>

        {staff.length === 0 ? (
          <div className="text-center text-gray-600">
            <p>Zatím nejsou k dispozici žádné informace o týmu.</p>
            <p className="mt-4 text-sm">
              Poznámka: Přidejte zaměstnance v Supabase databázi (tabulka &quot;staff&quot;)
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Doctors Section */}
            {doctors.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold mb-6 text-brand-red">Lékaři</h2>
                {renderStaffGrid(doctors)}
              </section>
            )}

            {/* Nurses Section */}
            {nurses.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold mb-6 text-brand-red">Zdravotní sestry</h2>
                {renderStaffGrid(nurses)}
              </section>
            )}

            {/* Clinical Research Section */}
            {research.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold mb-6 text-brand-red">Clinical Research Department</h2>
                {renderStaffGrid(research)}
              </section>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
