export const serviceCategories = [
  'Diagnostika',
  'Arytmologie',
  'Sport & prevence',
  'Výzkum',
] as const

export type ServiceCategory = (typeof serviceCategories)[number]

export type ServiceDetailSection = {
  title?: string
  paragraphs?: string[]
  list?: string[]
}

export type Service = {
  slug: string
  title: string
  description: string
  categories: ServiceCategory[]
  detail: ServiceDetailSection[]
}

export const services: Service[] = [
  {
    slug: 'kardiologicke-vysetreni',
    title: 'Kardiologické vyšetření',
    description:
      'Komplexní vyšetření včetně EKG a echokardiografie, posouzení rizik a jasný plán terapie.',
    categories: ['Diagnostika'],
    detail: [
      {
        paragraphs: [
          'Komplexní kardiologické vyšetření včetně EKG a echokardiografického vyšetření. V rámci jedné návštěvy ověříme stav srdce, posoudíme přidružená rizika a nastavíme další postup.',
        ],
      },
    ],
  },
  {
    slug: 'ekg',
    title: 'EKG',
    description:
      'Digitální záznam elektrické aktivity srdce s rychlým popisem lékaře, možnost sdílení dat.',
    categories: ['Diagnostika'],
    detail: [
      {
        paragraphs: [
          'Registrace elektrických potenciálů přenesených ze srdce na povrch těla umožňuje diagnostikovat řadu patologií: ischemické změny, poruchy srdečního rytmu aj.',
          'EKG se provádí v rámci kardiologických vyšetření, případně v rámci prevencí, před operacemi a u těhotných žen.',
          'Pokud potřebujete pouze EKG s popisem, není nutné se objednávat. Přijďte kdykoli v ordinačních hodinách, maximálně však 30 minut před jejich koncem.',
        ],
      },
    ],
  },
  {
    slug: 'echokardiografie',
    title: 'Echokardiografie',
    description: 'Ultrazvukové posouzení komor, chlopní a velkých tepen včetně jícnové varianty.',
    categories: ['Diagnostika'],
    detail: [
      {
        paragraphs: [
          'Ultrazvukové vyšetření srdce přes hrudní stěnu (transthorakální echo) umožňuje neinvazivně změřit velikost srdečních oddílů, zhodnotit výkonnost, odhalit patologické útvary, diagnostikovat výpotek v perikardu či vyšetřit velké cévy. Bez něj si v současnosti není možné představit kvalitní kardiologické vyšetření.',
          'Jícnová echokardiografie, při které se zavádí vyšetřovací sonda do jícnu a žaludku, zpřesňuje transthorakální echo a používá se hlavně u srdečních vad a u pacientů po mozkových příhodách.',
        ],
      },
    ],
  },
  {
    slug: 'zatezove-testy',
    title: 'Zátěžové testy',
    description: 'Ergometrie a zátěžové echo pro odhalení ischemie a posouzení výkonnosti srdce.',
    categories: ['Diagnostika', 'Sport & prevence'],
    detail: [
      {
        paragraphs: [
          'Snímání EKG, měření krevního tlaku a sledování obtíží pacienta během zátěže na bicyklovém ergometru a poté v zotavovací fázi po přerušení námahy. Vyšetření se provádí hlavně v rámci diagnostiky ischemické choroby srdeční, při zjišťování poruch rytmu při zátěži a při objektivizaci potíží, které se objevují při námaze.',
          'Zátěžové echo rozšiřuje ergometrii o zobrazení hybnosti levé komory srdeční během zátěže, takže získáme přímý obraz reakce myokardu na námahu.',
        ],
      },
    ],
  },
  {
    slug: 'ekg-holter',
    title: 'EKG Holter',
    description:
      '24–96 hodin záznamu rytmu. V případě potřeby zapůjčení okamžitého EKG záznamníku domů.',
    categories: ['Diagnostika', 'Arytmologie'],
    detail: [
      {
        paragraphs: [
          'Ambulantní monitorování EKG ke zjištění dvacetičtyřhodinového profilu EKG křivky. Vyšetření se používá hlavně u pacientů s arytmiemi, krátkodobým bezvědomím (synkopa) či s ischemickou chorobou srdeční.',
        ],
      },
    ],
  },
  {
    slug: 'abpm',
    title: 'ABPM',
    description: '24hodinová monitorace krevního tlaku (ABPM) pro přesnou diagnostiku hypertenze.',
    categories: ['Diagnostika', 'Sport & prevence'],
    detail: [
      {
        paragraphs: [
          'Ambulantní monitorování krevního tlaku ke zjištění jeho dvacetičtyřhodinového profilu zlepšuje diagnostiku a léčbu hypertenze, umožňuje optimalizovat léčbu a spolehlivě odlišit syndrom bílého pláště.',
        ],
      },
    ],
  },
  {
    slug: 'arytmologie',
    title: 'Arytmologie',
    description:
      'Poruchy rytmu řešíme s prof. MUDr. Pavlem Osmančíkem, Ph.D. Kontroly stimulátorů každé pondělí večer.',
    categories: ['Arytmologie'],
    detail: [
      {
        paragraphs: [
          'Kontroly stimulátorů, které pro naše pacienty zajišťuje doc. MUDr. Pavel Osmančík, PhD., probíhají v naší ambulanci v pondělí od 17:00 do 19:30. Objednání je nutné.',
        ],
      },
    ],
  },
  {
    slug: 'vysetreni-sportovcu',
    title: 'Vyšetření sportovců',
    description: 'Screening náhlé smrti, komplexní balíčky se zaměřením na výkon a regeneraci.',
    categories: ['Sport & prevence'],
    detail: [
      {
        paragraphs: [
          'V rámci předcházení náhlé smrti sportovců provádíme EKG a echokardiografické vyšetření spolu s vyplněním specializovaného dotazníku zaměřeného na detekci rizik náhlé smrti. Možné je také absolvovat zátěžový test.',
          'Sportovcům se v ambulanci věnujeme každý čtvrtek od 15:30 a díky víkendovým termínům jsme schopni vyšetřit celé sportovní kluby přímo v jejich zázemí.',
          'Spolupracujeme také s řadou týmů, které využívají možností mobilního vyšetření – více o sportovních vyšetřeních najdete na www.srdcesportovce.cz.',
          'Preventivní kardiologické vyšetření sportovců není hrazeno zdravotní pojišťovnou, ale pojišťovny přispívají v rámci bonusových programů. Konkrétní příspěvky zjistíte v sekci Ceník.',
          'Pokud potřebujete pouze EKG s popisem, není nutné se objednávat. Přijďte kdykoli v ordinačních hodinách, maximálně však 30 minut před jejich koncem.',
        ],
      },
    ],
  },
  {
    slug: 'spankovy-screening',
    title: 'Spánkový screening',
    description: 'Odhalujeme poruchy dýchání ve spánku a jejich dopad na kardiovaskulární systém.',
    categories: ['Diagnostika', 'Sport & prevence'],
    detail: [
      {
        paragraphs: [
          'Screening poruch dýchání při spánku pomocí přístroje ApneaLink Air v pohodlí domova nahrazuje pacientovi noc ve spánkové laboratoři.',
          'Výkon je plně hrazen všemi zdravotními pojišťovnami.',
        ],
      },
    ],
  },
  {
    slug: 'vnitrni-lekarstvi',
    title: 'Vnitřní lékařství',
    description: 'Předoperační interní vyšetření a péče pro vybrané zdravotní pojišťovny.',
    categories: ['Diagnostika'],
    detail: [
      {
        paragraphs: [
          'Pro klienty pojišťoven 205, 209 a 207 jsme rozšířili služby o ambulanci vnitřního lékařství a zajišťujeme kompletní interní péči včetně předoperačních vyšetření.',
        ],
      },
    ],
  },
  {
    slug: 'dispenzarizace',
    title: 'Dispenzarizace',
    description: 'Dlouhodobé sledování pacientů s kardiovaskulárními onemocněními.',
    categories: ['Diagnostika', 'Arytmologie'],
    detail: [
      {
        paragraphs: [
          'Ambulance poskytuje běžný kardiologický servis ve vysokém standardu a dlouhodobě sleduje všechny kardiologické pacienty:',
        ],
        list: [
          'pacienti s vysokým krevním tlakem',
          'pacienti se srdečními vadami včetně přípravy k operaci',
          'pacienti po operaci srdečních vad včetně vrozených vad v dospělosti',
          'pacienti s ischemickou chorobou srdeční včetně stavů po revaskularizačních výkonech (CABG, PCI)',
          'pacienti s kardiomyopatiemi',
          'pacienti s implantovaným kardiostimulátorem',
          'pacienti s poruchami srdečního rytmu',
          'pacienti s poruchou metabolizmu tuků',
        ],
      },
    ],
  },
  {
    slug: 'klinicke-studie',
    title: 'Klinické studie',
    description: 'Zapojení do studií s novými terapiemi a zdravotnickými technologiemi.',
    categories: ['Výzkum'],
    detail: [
      {
        paragraphs: [
          'Kardiologická a interní ambulance MEDICUS SERVICES s.r.o. v Brandýse nad Labem je jedním z řady center, která se ve spolupráci s farmaceutickým průmyslem, technologickými společnostmi a vědeckými institucemi podílí na realizaci klinických studií.',
          'MUDr. Jiří Krupička, PhD. má jakožto hlavní zkoušející více než dvacetileté zkušenosti se studijními programy v oblasti kardiologie a vnitřního lékařství. Od roku 2010 se naše centrum podílelo na více než patnácti studiích.',
        ],
      },
      {
        title: 'Co jsou to klinické studie?',
        paragraphs: [
          'Klinické studie jsou nedílnou součástí moderní medicíny. Léčivé přípravky a technologie, které prošly předchozím vývojem a testováním, se pod dohledem lékařů začínají podávat prvním pacientům z řad veřejnosti.',
          'Pacienti jsou do studií vybíráni na základě přísných kritérií – věku, diagnózy, medikace či laboratorních výsledků. Účast nabízí lékař, který vyhodnotí, že studie pacientovi přinese přínos.',
        ],
      },
      {
        title: 'Jak probíhají?',
        paragraphs: [
          'Průběh studie je dán protokolem odpovídajícím typu projektu. Pacient je o všem informován při první návštěvě a podepisuje informovaný souhlas, jehož kopii si odnáší domů.',
          'O pacienta se stará lékař, studijní sestra i koordinátorka a jsou mu partnery po celou dobu projektu. Účast je dobrovolná a pacient ji může kdykoli ukončit.',
        ],
      },
      {
        title: 'Co pacientovi přinese účast?',
        paragraphs: [
          'Hlavním přínosem je přístup k nejmodernější léčbě hrazené sponzorem projektu. Léčba má hodnotu desítek až stovek tisíc korun a pacient se k ní dostane o několik let dříve než běžně.',
          'Součástí je nadstandardní lékařský dohled a proplácení cestovného. Pacient tak získá intenzivní péči bez dalších nákladů.',
        ],
      },
      {
        title: 'Naruší účast stávající léčbu?',
        paragraphs: [
          'Ne. Klinická studie znamená nadstavbu stávající léčby. Nejde o přerušení ani zásadní změnu terapie, ale o doplněk, který může zdravotní stav dále zlepšit.',
          'Pacient pokračuje v pravidelných kontrolách u všech svých lékařů a studie nenahrazuje péči jiných specialistů.',
        ],
      },
      {
        title: 'Existují nějaká rizika?',
        paragraphs: [
          'Bezpečnost a zdraví pacienta je vždy na prvním místě. Pacient je v pravidelném kontaktu s ambulancí, absolvuje časté laboratorní kontroly a jakmile lékař vyhodnotí, že léčba není vhodná, medikaci upraví nebo účast ukončí.',
          'Studie probíhají podle standardů GCP a dohlíží na ně zadavatel, státní i mezinárodní autority a etické komise.',
        ],
      },
      {
        title: 'Je možné účast ukončit?',
        paragraphs: [
          'Účast lze kdykoli ukončit bez udání důvodu. Pacient zůstává v péči ambulance a je nadále léčen standardní cestou.',
        ],
      },
      {
        title: 'Jaké jsou výsledky?',
        paragraphs: [
          'Výsledkem klinických studií bývá uvedení nových léčiv či technologií na trh, případně rozšíření indikací stávajících terapií.',
          'U observačních studií vznikají cenná data, která se dál využívají při vývoji nových léčiv, postupů či přístrojů. Přehled probíhajících studií najdete na stránkách SÚKL.',
          'Máte zájem o účast nebo se chcete na něco zeptat? Napište na studie@kardiologiebrandys.cz nebo volejte 326 320 112.',
        ],
      },
    ],
  },
  {
    slug: 'sonografie-karotid',
    title: 'Sonografie karotid',
    description: 'Ultrazvuk krčních tepen pro diagnostiku aterosklerózy a rizika CMP.',
    categories: ['Diagnostika'],
    detail: [
      {
        paragraphs: [
          'Ultrazvukové vyšetření krčních tepen umožňuje bezbolestně zhodnotit průtok krve do mozku a včas zachytit aterosklerotické pláty, zúžení nebo nepravidelnosti cévní stěny.',
          'Vyšetření doporučujeme pacientům s vysokým krevním tlakem, diabetem, poruchami lipidů či po neurologických příhodách. Získané výsledky pomáhají při rozhodování o konzervativní nebo intervenční léčbě a dlouhodobém sledování.',
        ],
      },
    ],
  },
  {
    slug: 'dus-dolnich-koncetin',
    title: 'DUS dolních končetin',
    description: 'Duplexní ultrasonografie žil i tepen dolních končetin.',
    categories: ['Diagnostika'],
    detail: [
      {
        paragraphs: [
          'Duplexní sonografie kombinuje klasické ultrazvukové zobrazení s dopplerovským měřením průtoku. Díky tomu umíme přesně posoudit stav tepen i žil na dolních končetinách.',
          'Vyšetření pomáhá při diagnostice chronické žilní insuficience, křečových žil, hluboké žilní trombózy i periferního arteriálního onemocnění. Zobrazíme průchodnost cév, odhalíme místa zúžení a navrhneme vhodnou terapii nebo kompresní režimy.',
        ],
      },
    ],
  },
  {
    slug: 'laborator-poct',
    title: 'Laboratoř (POCT)',
    description: 'INR, troponin, D-dimer, NT-proBNP – výsledky v řádu minut.',
    categories: ['Diagnostika', 'Výzkum'],
    detail: [
      {
        paragraphs: [
          'Pro určení přesné anamnézy pacientů provádíme náběry krve a biologických materiálů, které jsou následně odeslány do laboratoře k odbornému posouzení. U vybraných markerů využíváme point-of-care přístroje s výsledkem během několika minut.',
          'Ambulantní monitorování krevní srážlivosti papírkovou metodou (bez odběru ze žíly) slouží k optimálnímu nastavení léčby Warfarinem i nových antikoagulancií. Kromě INR sledujeme troponin, D-dimer, NT-proBNP a další parametry důležité pro rychlé rozhodování o léčbě.',
        ],
      },
    ],
  },
]
