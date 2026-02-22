import { notFound } from 'next/navigation'
import { getStaffMember } from '@/data/staff'
import { BackLink } from '@/components/BackLink'
import StaffAvatar from '@/components/StaffAvatar'

interface StaffDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function StaffDetailPage({ params }: StaffDetailPageProps) {
  const { id } = await params
  const staff = getStaffMember(id)

  if (!staff) {
    notFound()
  }

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <BackLink href="/ordinace#nas-tym" className="mb-6">
            Zpět na tým
          </BackLink>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              {staff.src ? (
                <div className="md:w-1/3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={staff.src} alt={staff.name} className="w-full h-full object-cover" />
                </div>
              ) : (
                <StaffAvatar
                  id={staff.id}
                  name={staff.name}
                  className="md:w-1/3 min-h-[300px]"
                  size="lg"
                />
              )}

              <div className="md:w-2/3 p-8">
                <h1 className="text-3xl font-bold mb-2">{staff.name}</h1>
                <p className="text-xl text-brand-red font-medium mb-4">{staff.title}</p>

                {staff.bio && <p className="text-gray-600 whitespace-pre-line mb-4">{staff.bio}</p>}

                <div className="border-t pt-4 mt-6">
                  {staff.email && (
                    <div className="mb-2">
                      <span className="font-semibold text-gray-700">Email: </span>
                      <a
                        href={`mailto:${staff.email}`}
                        className="text-brand-blue hover:text-brand-blue-dark transition"
                      >
                        {staff.email}
                      </a>
                    </div>
                  )}
                  {staff.phone && (
                    <div>
                      <span className="font-semibold text-gray-700">Telefon: </span>
                      <a
                        href={`tel:${staff.phone}`}
                        className="text-brand-blue hover:text-brand-blue-dark transition"
                      >
                        {staff.phone}
                      </a>
                    </div>
                  )}
                  {staff.type === 'research' && (
                    <div className="mt-2">
                      <span className="font-semibold text-gray-700">Mobil: </span>
                      <a
                        href="tel:+420604415479"
                        className="text-brand-blue hover:text-brand-blue-dark transition"
                      >
                        +420 604 415 479
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
