export interface StaffMember {
  id: string
  name: string
  title: string
  type: 'doctor' | 'nurse' | 'research' | 'doctor-aritmologist'
  bio?: string
  src: string
  email?: string
  phone?: string
}

const staffMembers: StaffMember[] = [
  {
    id: 'jiri-krupicka',
    name: 'MUDr. Jiří Krupička, Ph.D.',
    title: 'Kardiologie, interna',
    bio: 'Zakladatel ordinace a vyhledávaný odborník specializující se na kardiovaskulární onemocnění a poradenství pro sportovce. Získal doktorát na Lékařské fakultě UK v Hradci Králové. Prošel odbornými praxemi na interním oddělení v Jablonci nad Nisou, Fakultní nemocnici Královské Vinohrady, kde byl vedoucím lékařem neinvazivní kardiologie, a kardiochirurgickém oddělení Nemocnice na Homolce. Od roku 2009 vede privátní kardiologickou ambulanci v Brandýse nad Labem.',
    src: '/images/staff/jikru-480x468.jpg',
    email: 'kardiologie.brandys@seznam.cz',
    phone: '+420 326 396 790',
    type: 'doctor',
  },
  {
    id: 'pavel-franc',
    name: 'MUDr. Pavel Franc',
    title: 'Kardiologie, interna',
    bio: 'Lékař se věnuje kardiologii a problematice interního lékařství. Je aktivním členem kardiologických pracovních skupin a Evropské kardiologické společnosti. Studoval na Lékařské fakultě UK v Hradci Králové. Během své kariéry působil jako přednosta interního oddělení Chrudimské nemocnice a vedoucí lékař neinvazivní kardiologie v Krajské nemocnici Pardubice. Od roku 2012 pracuje v privátní kardiologické ambulanci v Brandýse nad Labem.',
    src: '/images/staff/3T7A5089orezane-480x468.jpg',
    email: 'kardiologie.brandys@seznam.cz',
    phone: '+420 326 396 790',
    type: 'doctor',
  },
  {
    id: 'robin-kralik',
    name: 'MUDr. Robin Králík',
    title: 'Kardiologie, interna',
    bio: 'Lékař kardiologické ordinace, který přišel z FN Královské Vinohrady. Specializuje se na obor kardiologie a vnitřní lékařství.',
    src: '/images/staff/robkr-2-480x468.jpg',
    email: 'kardiologie.brandys@seznam.cz',
    phone: '+420 326 396 790',
    type: 'doctor',
  },
  {
    id: 'pavel-osmancik',
    name: 'prof. MUDr. Pavel Osmančík, Ph.D.',
    title: 'Arytmologie',
    bio: 'Přední český odborník na arytmologii. Bývalý vedoucí lékař arytmologického oddělení FN Královské Vinohrady v Praze. V současnosti zastává pozici zástupce přednosty pro specializační vzdělávání lékařů na Kardiologické klinice 3. LF UK a FN Královské Vinohrady, zároveň spolupracuje s Katedrou psychologie Filozofické fakulty UK. V roce 2021 získal ocenění Česká hlava. V ordinaci vede arytmologickou poradnu každé pondělí večer (17:00–19:30).',
    src: '/images/staff/3T7A5142orezane-480x468.jpg',
    email: 'kardiologie.brandys@seznam.cz',
    phone: '+420 326 396 790',
    type: 'doctor-aritmologist',
  },
  {
    id: 'petra-srbova',
    name: 'MUDr. Petra Srbová',
    title: 'Kardiologie, interna',
    bio: 'Lékařka specializující se na kardiologii a interní lékařství s komplexním přístupem k péči o pacienty.',
    src: '/images/staff/20241029_194752-480x468.jpg',
    email: 'kardiologie.brandys@seznam.cz',
    phone: '+420 326 396 790',
    type: 'doctor',
  },
  {
    id: 'marketa-hodbodova',
    name: 'MUDr. Markéta Hodboďová',
    title: 'Kardiologie, interna',
    bio: 'Členka kardiologického týmu věnující se moderní diagnostice a léčbě kardiovaskulárních onemocnění.',
    src: '/images/staff/mudr.-hodbodova-scaled-e1747919453208-480x468.jpg',
    email: 'kardiologie.brandys@seznam.cz',
    phone: '+420 326 396 790',
    type: 'doctor',
  },
  {
    id: 'tomas-budek',
    name: 'MUDr. Tomáš Budek',
    title: 'Klinické studie',
    src: '/images/staff/IMG_0367-480x468.jpg',
    email: 'tomas.budek@kardiologiebrandys.cz',
    phone: '+420 326 320 112',
    type: 'research',
  },
  {
    id: 'klara-bernardova',
    name: 'Klára Bernardová',
    title: 'Staniční sestra',
    src: '/images/staff/bernardova-480x468.jpg',
    email: 'kardiologie.brandys@seznam.cz',
    phone: '+420 326 396 790',
    type: 'nurse',
  },
  {
    id: 'petra-livorova',
    name: 'Petra Livorová',
    title: 'Zdravotní sestra',
    src: '/images/staff/petra-1-480x468.jpg',
    email: 'kardiologie.brandys@seznam.cz',
    phone: '+420 326 396 790',
    type: 'nurse',
  },
  {
    id: 'jana-budkova',
    name: 'Jana Budková',
    title: 'Klinické studie',
    src: '/images/staff/stredna-480x468.jpg',
    email: 'studie@kardiologiebrandys.cz',
    phone: '+420 326 320 112',
    type: 'research',
  },
  {
    id: 'tereza-rezna',
    name: 'Tereza Režná',
    title: 'Klinické studie',
    src: '/images/staff/IMG_0353-480x468.jpg',
    email: 'studie@kardiologiebrandys.cz',
    phone: '+420 326 320 112',
    type: 'research',
  },
  {
    id: 'stanislava-podzimkova',
    name: 'Stanislava Podzimková',
    title: 'Klinické studie',
    src: '/images/staff/podzimkova-480x468.jpg',
    email: 'studie@kardiologiebrandys.cz',
    phone: '+420 326 320 112',
    type: 'research',
  },
  {
    id: 'hedvika-tumova',
    name: 'Ing. Hedvika Tůmová',
    title: 'Klinické studie',
    src: '/images/staff/IMG_0361-480x468.jpg',
    email: 'studie@kardiologiebrandys.cz',
    phone: '+420 326 320 112',
    type: 'research',
  },
]
export const getStaffMember = (id: string) => {
  return staffMembers.find((member) => member.id === id)
}

export const doctors = staffMembers.filter(
  (member) => member.type === 'doctor' || member.type === 'doctor-aritmologist',
)

export const nurses = staffMembers.filter((member) => member.type === 'nurse')

export const researches = staffMembers.filter((member) => member.type === 'research')
