export type Insurer = {
  name: string
  code: string
  logo: string
  description: string
  link?: string
}

export const insurers: Insurer[] = [
  {
    name: 'VZP',
    code: '111',
    logo: '/logos/vzp.jpg',
    description: 'Všeobecná zdravotní pojišťovna',
    link: 'https://www.vzp.cz/pojistenci/vyhody-a-prispevky',
  },
  {
    name: 'VOZP',
    code: '201',
    logo: '/logos/vozp.jpg',
    description: 'Vojenská zdravotní pojišťovna',
    link: 'https://www.vozp.cz/prispevky-na-prevenci',
  },
  {
    name: 'ČPZP',
    code: '205',
    logo: '/logos/cpzp.png',
    description: 'Česká průmyslová zdrav. pojišťovna',
    link: 'https://www.cpzp.cz/programy/index.php?deti',
  },
  {
    name: 'OZP',
    code: '207',
    logo: '/logos/ozp.jpg',
    description: 'Oborová zdravotní pojišťovna',
    link: 'https://www.ozp.cz/benefity/benefityozp',
  },
  {
    name: 'ZPŠ',
    code: '209',
    logo: '/logos/zps.jpg',
    description: 'Zdravotní pojišťovna Škoda',
    link: 'https://www.zpskoda.cz/pro-pojistence/zdravotni-programy-2019/balicky-pro-deti-darce-krve-a-seniory',
  },
  {
    name: 'ZPMV',
    code: '211',
    logo: '/logos/zpmv.jpg',
    description: 'Zdravotní pojišťovna MV ČR',
    link: 'https://www.zpmvcr.cz/pojistenci/vyhody-pro-pojistence/fond-prevence-2019/prevence-civilizacnich-onemocneni/',
  },
]
