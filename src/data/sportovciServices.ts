export const SPORTOVCI_SERVICES = [
  { value: 'ekg-popis-dotaznik', label: 'EKG s popisem + dotazník' },
  { value: 'ergometrie', label: 'Ergometrie (bicyklová, zátěžové EKG)' },
  { value: 'echo-ekg-dotaznik', label: 'Echokardiografie + EKG + dotazník' },
  { value: 'komplet', label: 'Komplet (echokardiografie + ergometrie + dotazník)' },
] as const

export const SPORTOVCI_SERVICE_DISCLAIMER_VALUE = 'ekg-popis-dotaznik'

export const getSportovciServiceLabel = (value: string) =>
  SPORTOVCI_SERVICES.find((option) => option.value === value)?.label ?? value
