export const SPORTOVCI_SERVICES = [
  { value: 'ekg-popis-dotaznik', label: 'EKG s popisem + dotazník' },
  { value: 'ergometrie', label: 'Ergometrie (bicyklová, zátěžové EKG)' },
  { value: 'echo-ekg-dotaznik', label: 'Echokardiografie + EKG + dotazník', attachDotaznik: true },
  {
    value: 'komplet',
    label: 'Komplet (echokardiografie + ergometrie + dotazník)',
    attachDotaznik: true,
  },
] as const

export type SportovciServiceValue = (typeof SPORTOVCI_SERVICES)[number]['value']

export const SPORTOVCI_SERVICE_DISCLAIMER_VALUE = 'ekg-popis-dotaznik'

const findSportovciService = (value: string | undefined) =>
  SPORTOVCI_SERVICES.find((option) => option.value === value)

export const getSportovciServiceLabel = (value: string) =>
  findSportovciService(value)?.label ?? value

export const sportovciServiceNeedsDotaznik = (value: string | undefined) => {
  const option = findSportovciService(value)
  return !!option && 'attachDotaznik' in option && option.attachDotaznik
}
