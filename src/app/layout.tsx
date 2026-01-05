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
    images: ['/images/ambulance/KARDIO_AMBULANCE-04.jpg'],
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
  return (
    <html lang="cs">
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
