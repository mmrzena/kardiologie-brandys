import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getStaffMember } from '@/data/staff'

interface StaffDetailPageProps {
  params: {
    id: string
  }
}

export default function StaffDetailPage({ params }: StaffDetailPageProps) {
  const staff = getStaffMember(params.id)

  if (!staff) {
    notFound()
  }

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/tym" className="text-brand-red hover:text-brand-red-dark transition mb-6 inline-block">
            ← Zpět na tým
          </Link>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              {staff.photo_url ? (
                <div className="md:w-1/3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={staff.photo_url}
                    alt={staff.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="md:w-1/3 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center min-h-[300px]">
                  <div className="text-8xl text-blue-600">👤</div>
                </div>
              )}

              <div className="md:w-2/3 p-8">
                <h1 className="text-3xl font-bold mb-2">{staff.name}</h1>
                <p className="text-xl text-brand-red font-medium mb-4">{staff.title}</p>

                {staff.specialization && (
                  <div className="mb-4">
                    <h2 className="font-semibold text-gray-700 mb-1">Specializace:</h2>
                    <p className="text-gray-600">{staff.specialization}</p>
                  </div>
                )}

                {staff.bio && (
                  <div className="mb-4">
                    <h2 className="font-semibold text-gray-700 mb-2">O mně:</h2>
                    <p className="text-gray-600 whitespace-pre-line">{staff.bio}</p>
                  </div>
                )}

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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
