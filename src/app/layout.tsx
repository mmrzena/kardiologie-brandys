import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import QueryProvider from '@/providers/QueryProvider'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Kardiologie Brandýs - Kardiologická ambulance',
  description:
    'Kardiologická ambulance v Brandýse nad Labem. Moderní kardiologická péče, vyšetření a diagnostika srdečních onemocnění.',
  keywords: 'kardiologie, Brandýs nad Labem, kardiolog, srdce, EKG, echokardiografie',
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
      </body>
    </html>
  )
}
