export type Announcement = {
  title: string
  message: string
  startDate: string
  endDate: string
  link?: string
  linkLabel?: string
}

export const announcements: Announcement[] = [
  {
    title: 'Ambulance uzavřena',
    message:
      'Ve středu 10. dubna bude ordinace z technických důvodů uzavřena. V urgentních případech využijte prosím cardiocentrum FN Motol.',
    startDate: '2024-04-08',
    endDate: '2025-04-11',
    link: '/kontakt',
    linkLabel: 'Zobrazit kontakty',
  },
  {
    title: 'Zástup mimo ordinační dobu',
    message:
      'Ve dnech 15.–17. dubna zajišťujeme pouze telefonické konzultace. Sestry vás nasměrují na nejbližší dostupný termín.',
    startDate: '2024-04-14',
    endDate: '2024-04-18',
  },
]
