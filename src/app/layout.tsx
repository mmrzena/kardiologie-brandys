import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import QueryProvider from '@/providers/QueryProvider'

const inter = Inter({ subsets: ['latin'] })
const siteUrl = new URL('https://kardiologiebrandys.cz')
const siteTitle = 'Kardiologie Brandýs nad Labem | MEDICUS SERVICES s.r.o.'
const siteDescription =
  'MEDICUS SERVICES s.r.o. – kardiologická ambulance v Brandýse nad Labem. Moderní vyšetření, diagnostika a specializovaná arytmologická péče pro dospělé i sportovce.'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteTitle,
    template: `%s | Kardiologie Brandýs`,
  },
  description: siteDescription,
  applicationName: 'Kardiologie Brandýs',
  keywords: [
    'kardiologie Brandýs nad Labem',
    'MEDICUS SERVICES s.r.o.',
    'kardiologická ambulance',
    'arytmologie',
    'echokardiografie',
    'sportovní prohlídky',
    'kardiologie Praha východ',
  ],
  authors: [{ name: 'MEDICUS SERVICES s.r.o.' }],
  creator: 'MEDICUS SERVICES s.r.o.',
  publisher: 'MEDICUS SERVICES s.r.o.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: 'Kardiologie Brandýs',
    images: [
      {
        url: '/images/ambulance/KARDIO_AMBULANCE-04.jpg',
        width: 2048,
        height: 1195,
        alt: 'Kardiologická ambulance Brandýs nad Labem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/images/ambulance/KARDIO_AMBULANCE-04.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'MEDICUS SERVICES s.r.o. - Kardiologická ambulance Brandýs nad Labem',
    image: 'https://kardiologiebrandys.cz/images/ambulance/KARDIO_AMBULANCE-04.jpg',
    '@id': 'https://kardiologiebrandys.cz',
    url: 'https://kardiologiebrandys.cz',
    telephone: '+420326396790',
    email: 'kardiologie.brandys@seznam.cz',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Nádražní 1317/5',
      addressLocality: 'Brandýs nad Labem',
      postalCode: '250 01',
      addressCountry: 'CZ',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 50.1871,
      longitude: 14.6634,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Monday',
        opens: '07:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Tuesday',
        opens: '07:00',
        closes: '16:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Wednesday',
        opens: '08:00',
        closes: '16:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Thursday',
        opens: '08:00',
        closes: '15:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '07:30',
        closes: '15:00',
      },
    ],
    priceRange: '$$',
    medicalSpecialty: 'Cardiology',
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'Kardiologické vyšetření',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Echokardiografie',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'EKG',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Arytmologie',
      },
    ],
  }

  return (
    <html lang="cs">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <QueryProvider>
          <Navigation />
          {children}
          <Footer />
        </QueryProvider>
        <Analytics />
      </body>
    </html>
  )
}
