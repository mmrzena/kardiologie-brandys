import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Kardiologická ambulance Brandýs nad Labem: Tel. +420 326 396 790, Nádražní 1317/5. Ordinační hodiny Po-Pá, bezbariérový přístup, parkování.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
