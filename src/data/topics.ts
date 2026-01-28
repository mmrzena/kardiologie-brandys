export const TOPIC = {
  OBJEDNANI: 'objednani',
  PORADNA: 'poradna',
  SPORTOVCI: 'sportovci',
  RECEPT: 'recept',
  OTHER: 'ostatni',
} as const

export const TOPIC_OPTIONS = [
  { value: TOPIC.OBJEDNANI, label: 'Objednání, změna nebo zrušení termínu' },
  { value: TOPIC.SPORTOVCI, label: 'Sportovci' },
  { value: TOPIC.RECEPT, label: 'Žádost o recept' },
  { value: TOPIC.OTHER, label: 'Ostatní' },
] as const
