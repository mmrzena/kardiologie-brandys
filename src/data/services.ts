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
          'Kardiologická a interní ambulance MEDICUS SERVICES s.r.o. v Brandýse nad Labem je jedním z řady center po celém světě, která se ve spolupráci s farmaceutickým průmyslem, technologickými společnostmi a vědeckými institucemi podílejí na realizaci klinických studií.',
          'MUDr. Jiří Krupička, PhD. má jakožto hlavní zkoušející více než dvacetileté zkušenosti se studijními programy zaměřenými na výzkum v oblasti kardiologie a vnitřního lékařství. Dříve takto působil ve Fakultní nemocnici Královské Vinohrady a v Nemocnici Na Homolce a dnes se díky němu a jeho studijnímu týmu Kardiologická ambulance MEDICUS SERVICES s.r.o. v Brandýse nad Labem řadí k významným studijním centrům v České republice. Od roku 2010 se naše centrum podílelo na více než 25 studiích.',
        ],
      },
      {
        title: 'Co jsou to klinické studie?',
        paragraphs: [
          'Klinické studie jsou nedílnou součástí moderní medicíny. Jedná se o proces, kdy se léčivé přípravky či nové technologie, které se při předchozím několikaletém vývoji a testování prokázaly jako bezpečné a účinné, začínají za pečlivého dozoru lékařů a dalších odborníků podávat prvním pacientům z řad veřejnosti.',
          'Pacienti jsou do klinických studií vybíráni na základě přísných vstupních a vylučovacích kritérií, která přesně definují např. stáří, pohlaví, diagnózu, přidružené choroby, užívanou medikaci či laboratorní výsledky. Účast ve studii nabízí lékař, který zná pacientův zdravotní stav a vyhodnotil, že účast v klinické studii by pacientovi mohla přinést zlepšení jeho zdravotního stavu a pokrok v jeho léčbě.',
        ],
      },
      {
        title: 'Čím se zabývají klinické studie v oboru kardiologie?',
        paragraphs: [
          'Klinické studie, kterých se naše pracoviště účastní, se zabývají vývojem léčiv v široké škále indikací, jako je například prevence a léčba srdečního selhání, léčba vysokého krevního tlaku, léčba aterosklerózy a dalších projevů poruchy metabolismu tuků nebo antikoagulace („ředění krve") při některých poruchách srdečního rytmu. V několika posledních letech u nás probíhají také studie, jejichž cílem je průkaz účinnosti a bezpečnosti moderních léčiv, určených k léčbě obezity a zdravotních komplikací s obezitou spojených. Vzhledem k ambulantnímu charakteru našeho pracoviště se neúčastníme studií v oblasti tzv. intervenční kardiologie, jako je např. léčba akutního infarktu myokardu nebo vývoj nových přístrojů na kontrolu srdečního rytmu, tzv. pacemakerů.',
        ],
      },
      {
        title: 'Jak studie probíhají?',
        paragraphs: [
          'Průběh se vždy odvíjí podle předem jasně daného plánu, který odpovídá požadavkům a typu dané studie. O podstatě studie a jejím průběhu je pacient vždy informován při své první návštěvě, na které zároveň podepisuje informovaný souhlas, kde je daná studie podrobně popsána. Stejnopis informovaného souhlasu si pacient odnáší domů.',
          'Kromě lékaře se o pacienta stará také studijní sestra spolu se studijní koordinátorkou. Po celou dobu studie jsou pro pacienta partnery, na které se může kdykoli obrátit.',
          'Účast ve studii je zcela dobrovolná. Pokud pacient účast ve studii odmítne, zůstává nadále v naší ambulanci, jak tomu bylo doposud. I v průběhu studie se může pacient rozhodnout ukončit svoje další pokračování ve studii.',
        ],
      },
      {
        title: 'Co pacientovi přinese účast ve studii?',
        paragraphs: [
          'V první řadě samozřejmě očekávané zlepšení zdravotního stavu díky možnosti být léčen nejmodernější dostupnou léčbou, která je po celou dobu hrazená sponzorem projektu. Hodnota užívané léčby se obvykle pohybuje v rámci desítek až stovek tisíc korun. Pacient v klinické studii se dostává k dané medikaci o několik let dříve, než „běžný" pacient, který lék může dostat až po jeho schválení a stanovení úhrady zdravotními pojišťovnami. Přínosem účasti ve studii je také nadstandardní lékařský dohled po celou dobu studie.',
          'Účast neznamená pro pacienta žádný finanční náklad, jelikož cestovné je průběžně propláceno.',
        ],
      },
      {
        title: 'Naruší účast ve studii stávající léčbu?',
        paragraphs: [
          'Ne. Účast v klinické studii pro pacienta znamená nadstavbu jeho stávající léčby. Nejedná se o změnu či přerušení současné léčby, ale pouze o doplněk, který má ještě zlepšit zdravotní stav za pomoci nové medikace a nových odborných poznatků.',
          'Pacient dále dochází na pravidelné kontroly ke všem svým lékařům tak, jak byl doposud zvyklý. Účast ve studii v žádném případě nenahrazuje léčbu u jiných specialistů ani u nás v ambulanci.',
        ],
      },
      {
        title: 'Existují nějaká rizika?',
        paragraphs: [
          'Bezpečnost a zdraví pacienta je vždy na prvním místě. Po celou dobu studie je pacient pod nadstandardním lékařským dohledem, v pravidelném kontaktu s ambulancí. Laboratorní kontroly, které jsou nadstandardně časté, jsou rozsahem sledovaných parametrů velmi široké. V okamžiku, kdy lékař vyhodnotí, že léčba není pro pacienta nadále vhodná, dochází k úpravě medikace či ukončení účasti ve studii.',
          'Klinické studie probíhají podle jasně definovaných celosvětových standardů (jsou nazývány GCP = Good Clinical Practice neboli správná klinická praxe) a na celém procesu se podílí pouze vyškolení odborníci. Zadavatel studie a kontrolní autority (Státní ústav pro kontrolu léčiv v ČR, EMA v Evropě a FDA v USA) vždy pečlivě dohlíží na dodržování všech postupů. Provádění studie je též kontrolováno etickou komisí před a v průběhu studie. Těmito opatřeními se míra rizika zcela minimalizuje, byť jisté bezpečnostní riziko, které je ovšem spojené s jakoukoliv diagnostickou či léčebnou procedurou nebo podáním (i již schváleného) léčiva, pochopitelně zůstává.',
        ],
      },
      {
        title: 'Je možné účast ukončit předčasně?',
        paragraphs: [
          'Účast ve studii je zcela dobrovolná, můžete ji tak kdykoli ukončit bez udání důvodu. V takovém případě samozřejmě nadále zůstáváte pacientem naší ambulance a jste léčeni standardní cestou.',
        ],
      },
      {
        title: 'Jaké jsou výsledky takovýchto projektů?',
        paragraphs: [
          'Výsledkem klinických studií obvykle bývá uvedení daného léčiva na trh, tedy jeho zpřístupnění široké veřejnosti. Může se ale také jednat o výzkum již standardně používaného léčiva v nové indikaci.',
          'V případě observačních studií, kdy se zpravidla jedná pouze o sběr dat, jsou pak výsledkem důležité informace, které se dále využívají ve farmacii při vývoji nových léčiv a postupů.',
          'Stejné postupy se týkají vývoje přístrojů, lékařského instrumentaria a podobně.',
          'Na stránkách Státního úřadu pro kontrolu léčiv si můžete vyhledat všechny probíhající i ukončené studie.',
          'Nenašli jste odpovědi na své otázky? Máte zájem o účast v klinické studii a zajímá Vás, jestli jste vhodným kandidátem? Napište nám na studie@kardiologiebrandys.cz nebo volejte 326 320 112.',
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
