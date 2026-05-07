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
    title: 'V pondělí 11.5. a úterý 12.5. neordinujeme',
    message:
      'Ve dnech pondělí 11.5. a úterý 12.5. neordinujeme z důvodu účasti na Výročním sjezdu České kardiologické společnosti v Brně. Děkujeme za pochopení. Pro případné požadavky využijte náš kontaktní formulář.',
    startDate: '2026-05-07',
    endDate: '2026-05-12',
  },
  {
    title: 'Změna ordinační doby ve středu 1. 4. 2026',
    message:
      'Z důvodu přerušení dodávky elektrické energie ordinujeme výjimečně v čase 14:00 - 18:00.',
    startDate: '2026-03-24',
    endDate: '2026-04-01',
  },
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
