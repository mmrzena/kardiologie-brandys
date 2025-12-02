export interface StaffMember {
  id: number
  name: string
  title: string
  type: 'doctor' | 'nurse' | 'research' | 'doctor-aritmologist'
  bio?: string
  photo_url?: string
  email?: string
  phone?: string
}

export const staffMembers: StaffMember[] = [
  {
    id: 1,
    name: 'MUDr. Jiří Krupička, Ph.D.',
    title: 'Kardiolog, interna',
    bio: 'Zakladatel ordinace a vyhledávaný odborník specializující se na kardiovaskulární onemocnění a poradenství pro sportovce. Získal doktorát na Lékařské fakultě UK v Hradci Králové. Prošel odbornými praxemi na interním oddělení v Jablonci nad Nisou, Fakultní nemocnici Královské Vinohrady, kde byl vedoucím lékařem neinvazivní kardiologie, a kardiochirurgickém oddělení Nemocnice na Homolce. Od roku 2009 vede privátní kardiologickou ambulanci v Brandýse nad Labem.',
    photo_url: 'http://kardiologiebrandys.cz/wp-content/uploads/2016/03/jikru-480x468.jpg',
    email: 'kardiologie.brandys@seznam.cz',
    phone: '+420 326 396 790',
    type: 'doctor',
  },
  {
    id: 2,
    name: 'MUDr. Pavel Franc',
    title: 'Kardiolog, interna',
    bio: 'Lékař se věnuje kardiologii a problematice interního lékařství. Je aktivním členem kardiologických pracovních skupin a Evropské kardiologické společnosti. Studoval na Lékařské fakultě UK v Hradci Králové. Během své kariéry působil jako přednosta interního oddělení Chrudimské nemocnice a vedoucí lékař neinvazivní kardiologie v Krajské nemocnici Pardubice. Od roku 2012 pracuje v privátní kardiologické ambulanci v Brandýse nad Labem.',
    photo_url:
      'http://kardiologiebrandys.cz/wp-content/uploads/2016/03/3T7A5089orezane-480x468.jpg',
    email: 'kardiologie.brandys@seznam.cz',
    phone: '+420 326 396 790',
    type: 'doctor',
  },
  {
    id: 3,
    name: 'MUDr. Robin Králík',
    title: 'Kardiolog, interna',
    bio: 'Lékař kardiologické ordinace, který přišel z FN Královské Vinohrady. Specializuje se na obor kardiologie a vnitřní lékařství.',
    photo_url: 'http://kardiologiebrandys.cz/wp-content/uploads/2020/03/robkr-2-480x468.jpg',
    email: 'kardiologie.brandys@seznam.cz',
    phone: '+420 326 396 790',
    type: 'doctor',
  },
  {
    id: 4,
    name: 'prof. MUDr. Pavel Osmančík, Ph.D.',
    title: 'Specialista na arytmologii',
    bio: 'Přední český odborník na arytmologii. Bývalý vedoucí lékař arytmologického oddělení FN Královské Vinohrady v Praze. V současnosti zastává pozici zástupce přednosty pro specializační vzdělávání lékařů na Kardiologické klinice 3. LF UK a FN Královské Vinohrady, zároveň spolupracuje s Katedrou psychologie Filozofické fakulty UK. V roce 2021 získal ocenění Česká hlava. V ordinaci vede arytmologickou poradnu každé pondělí večer (17:00–19:30).',
    photo_url:
      'http://kardiologiebrandys.cz/wp-content/uploads/2016/03/3T7A5142orezane-480x468.jpg',
    email: 'kardiologie.brandys@seznam.cz',
    phone: '+420 326 396 790',
    type: 'doctor-aritmologist',
  },
  {
    id: 6,
    name: 'MUDr. Petra Srbová',
    title: 'Kardioložka, vnitřní lékařství',
    bio: 'Lékařka specializující se na kardiologii a interní lékařství s komplexním přístupem k péči o pacienty.',
    photo_url:
      'http://kardiologiebrandys.cz/wp-content/uploads/2024/06/20241029_194752-scaled-480x468.jpg',
    email: 'kardiologie.brandys@seznam.cz',
    phone: '+420 326 396 790',
    type: 'doctor',
  },
  {
    id: 7,
    name: 'MUDr. Markéta Hodboďová',
    title: 'Kardioložka',
    bio: 'Členka kardiologického týmu věnující se moderní diagnostice a léčbě kardiovaskulárních onemocnění.',
    photo_url:
      'http://kardiologiebrandys.cz/wp-content/uploads/2025/05/mudr.-hodbodova-scaled-e1747919453208-480x468.jpg',
    email: 'kardiologie.brandys@seznam.cz',
    phone: '+420 326 396 790',
    type: 'doctor',
  },
  {
    id: 8,
    name: 'MUDr. Tomáš Budek',
    title: 'Clinical Research Department',
    photo_url: 'http://kardiologiebrandys.cz/wp-content/uploads/2025/03/IMG_0367-480x468.jpg',
    email: 'studie@kardiologiebrandys.cz',
    phone: '+420 326 320 112',
    type: 'research',
  },
  {
    id: 9,
    name: 'Klára Bernardová',
    title: 'Staniční sestra',
    photo_url: 'http://kardiologiebrandys.cz/wp-content/uploads/2018/10/bernardova-480x468.jpg',
    email: 'kardiologie.brandys@seznam.cz',
    phone: '+420 326 396 790',
    type: 'nurse',
  },
  {
    id: 10,
    name: 'Petra Livorová',
    title: 'Zdravotní sestra',
    photo_url: 'http://kardiologiebrandys.cz/wp-content/uploads/2021/02/petra-1-480x468.jpg',
    email: 'kardiologie.brandys@seznam.cz',
    phone: '+420 326 396 790',
    type: 'nurse',
  },
  {
    id: 11,
    name: 'Jana Budková',
    title: 'Clinical Research Department',
    photo_url: 'http://kardiologiebrandys.cz/wp-content/uploads/2016/03/stredna-480x468.jpg',
    email: 'studie@kardiologiebrandys.cz',
    phone: '+420 326 320 112',
    type: 'research',
  },
  {
    id: 12,
    name: 'Tereza Režná',
    title: 'Clinical Research Department',
    photo_url: 'http://kardiologiebrandys.cz/wp-content/uploads/2025/03/IMG_0353-480x468.jpg',
    email: 'studie@kardiologiebrandys.cz',
    phone: '+420 326 320 112',
    type: 'research',
  },
  {
    id: 13,
    name: 'Stanislava Podzimková',
    title: 'Clinical Research Department',
    photo_url: 'http://kardiologiebrandys.cz/wp-content/uploads/2018/10/podzimkova-480x468.jpg',
    email: 'studie@kardiologiebrandys.cz',
    phone: '+420 326 320 112',
    type: 'research',
  },
  {
    id: 14,
    name: 'Ing. Hedvika Tůmová',
    title: 'Clinical Research Department',
    photo_url: 'http://kardiologiebrandys.cz/wp-content/uploads/2025/03/IMG_0361-480x468.jpg',
    email: 'studie@kardiologiebrandys.cz',
    phone: '+420 326 320 112',
    type: 'research',
  },
]

export const getStaffMember = (id: string | number) => {
  const numericId = typeof id === 'string' ? parseInt(id, 10) : id
  return staffMembers.find((member) => member.id === numericId)
}

export const doctors = staffMembers.filter((member) => member.type === 'doctor')
export const doctorArotmologists = staffMembers.filter(
  (member) => member.type === 'doctor-aritmologist',
)

export const nurses = staffMembers.filter((member) => member.type === 'nurse')

export const researches = staffMembers.filter((member) => member.type === 'research')
