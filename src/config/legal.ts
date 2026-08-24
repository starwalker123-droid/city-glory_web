/**
 * Mandatory legal documents — migrated verbatim from the live
 * bratislava.cityglory.sk (Obchodné podmienky, Reklamácie, GDPR). The GDPR
 * page's §10 Cookies is split out into its own `cookies` document to match
 * this site's separate /cookies footer link.
 *
 * Slovak only, deliberately: the live site's /en/ version keeps this exact
 * same Slovak text too (only the surrounding page chrome is translated) —
 * consumer-protection law citations don't get casually machine-translated.
 * Do not paraphrase or "improve" this text; it's operative legal copy.
 */

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "link"; text: string; href: string };

export type LegalSection = {
  heading?: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  sections: LegalSection[];
  updated?: string;
};

const p = (text: string): LegalBlock => ({ type: "p", text });
const list = (items: string[]): LegalBlock => ({ type: "list", items });
const link = (text: string, href: string): LegalBlock => ({ type: "link", text, href });

export const obchodnePodmienky: LegalDocument = {
  updated: "19.06.2023",
  sections: [
    {
      heading: "1. Všeobecné ustanovenia",
      blocks: [
        p("Tieto obchodné podmienky sa riadia zákonmi Slovenskej republiky."),
        p("Nasledujúce podmienky sa vzťahujú na všetky objednávky uskutočnené prostredníctvom webovej stránky bratislava.cityglory.sk. Účelom týchto obchodných podmienok je vymedziť a upresniť práva a povinnosti predávajúceho (dodávateľa) na jednej strane a kupujúceho (zákazníka, spotrebiteľa) na strane druhej."),
        p("Predávajúcim a prevádzkovateľom internetového obchodu bratislava.cityglory.sk je spoločnosť:"),
        p("CITY GLORY s.r.o., 29.augusta 23, 81109 Bratislava"),
        p("IČO: 55 330 614, IČ DPH: SK2121951810"),
        p("Adresa na vrátenie tovaru:"),
        p("CITY GLORY s.r.o., Rebarborova 35, 821 07 Bratislava, Slovensko"),
        p("Číslo účtu IBAN: SK36 8330 0000 0025 0256 1130"),
        p("Všetky zmluvné vzťahy medzi predávajúcim a kupujúcim sú uzatvorené v súlade s právnym poriadkom Slovenskej republiky. V prípade, ak je zmluvnou stranou spotrebiteľ, riadia sa právne vzťahy neupravené obchodnými podmienkami bratislava.cityglory.sk zákonom č. 40/1964 Z. z. Občiansky zákonník v znení neskorších predpisov, zákonom č. 250/2007 Z. z. o ochrane spotrebiteľa v znení neskorších predpisov a zákonom č. 102/2014 Z. z. o ochrane spotrebiteľa pri zmluvách uzavretých na diaľku v znení neskorších predpisov. V prípade, ak je zmluvnou stranou podnikateľ, riadia sa právne vzťahy neupravené obchodnými podmienkami bratislava.cityglory.sk zákonom č. 513/1991 Z. z. Obchodným zákonníkom v znení neskorších predpisov."),
      ],
    },
    {
      heading: "2. Vymedzenie pojmov",
      blocks: [
        p("Spotrebiteľská zmluva – je kúpna zmluva, ak zmluvnými stranami sú na jednej strane dodávateľ a na druhej strane spotrebiteľ, ktorý nemohol individuálne ovplyvniť obsah dodávateľom vopred pripraveného návrhu na uzatvorenie zmluvy"),
        p("Predávajúci (dodávateľ) – osoba, ktorá pri uzatváraní a plnení spotrebiteľskej zmluvy koná v rámci predmetu svojej obchodnej alebo inej podnikateľskej činnosti. Je to podnikateľ, ktorý spotrebiteľovi ponúka alebo predáva výrobky alebo poskytuje služby a taktiež podnikateľ, ktorý priamo alebo prostredníctvom iných podnikateľov dodáva kupujúcemu výrobok"),
        p("Kupujúci (spotrebiteľ) – fyzická osoba alebo právnická osoba, ktorá nakupuje výrobky alebo používa služby pre osobnú potrebu alebo pre príslušníkov svojej domácnosti a ktorá pri uzatváraní a plnení spotrebiteľskej zmluvy nekoná v rámci predmetu svojej obchodnej alebo inej podnikateľskej činnosti"),
        p("Kupujúci, ktorý nie je spotrebiteľom – je osoba, ktorá pri uzatváraní a plnení kúpnej zmluvy koná v rámci predmetu svojej obchodnej alebo inej podnikateľskej činnosti"),
        p("Uzatvorenie kúpnej zmluvy – objednávka kupujúceho predstavuje návrh na uzatvorenie kúpnej zmluvy. Samotná kúpna zmluva je uzatvorená momentom doručenia záväzného súhlasu predávajúceho s návrhom kúpnej zmluvy kupujúcemu t. j. záväzným potvrdením objednávky zo strany predávajúceho. Od tohto momentu medzi kupujúcim a predávajúcim vznikajú vzájomné práva a povinnosti, ktoré sú vymedzené kúpnou zmluvou a týmito obchodnými podmienkami, ktoré sú neoddeliteľnou súčasťou kúpnej zmluvy."),
        p("Obchodné podmienky – zmluvné ustanovenia dohodnuté medzi predávajúcim a kupujúcim v tomto dokumente. Kupujúci v momente odoslania svojej objednávky potvrdzuje, že súhlasí s týmito obchodnými podmienkami platnými v čase odoslania svojej objednávky a je nimi viazaný od momentu uzatvorenia kúpnej zmluvy. Kupujúci odoslaním svojej objednávky potvrdzuje, že pred uskutočnením svojej objednávky sa s týmito obchodnými podmienkami oboznámil a s obchodnými podmienkami bez výhrad súhlasí."),
      ],
    },
    {
      heading: "3. Tovar, ceny a poštovné",
      blocks: [
        p("Ceny uvedené na webovej stránke bratislava.cityglory.sk sú vrátane aktuálnej sadzby DPH, ale nezahŕňajú poštovné. Prevádzkovateľ stránky si vyhradzuje právo na zmenu cien v prípade neoprávneného zásahu do obsahu. Konečná cena pre kupujúceho je uvedená v potvrdení objednávky."),
        p("Dodávateľ si vyhradzuje právo na opravu ceny tovaru pred jeho odoslaním, ak sa zistí, že cena ponúkaného tovaru nebola uvedená správne. V tomto prípade musí zákazníka – kupujúceho o správnej cene informovať a ten musí s úpravou ceny súhlasiť. V opačnom prípade nebude kúpna zmluva uzatvorená a objednávka bude predávajúcim stornovaná."),
        p("Zaradenie akýchkoľvek výrobkov alebo služieb na webovej stránke bratislava.cityglory.sk počas určitej doby neznamená ani nezaručuje, že tieto výrobky alebo služby budú k dispozícii kedykoľvek. Predávajúci si vyhradzuje si právo akýkoľvek výrobok alebo službu kedykoľvek stiahnuť."),
        p("Poštovné pre každú objednávku je v rovnakej výške, a to bez ohľadu na veľkosť alebo hmotnosť objednávky. Cena každého spôsobu dodania je jasne uvedená v sekcii Košík. Štandardný poplatok za dodanie na adresu prostredníctvom kuriéra (GLS, Packeta) je 4 Eur, za dodanie na odberné miesto (GLS parcel box, Packeta Výdajné miesto) je 3 Eur. V prípade objednávky nad 100 Eur kupujúci poštovné neplatí. Za dodanie tovaru na dobierku je účtovaný poplatok vo výše 1 Euro."),
        p("V prípade, že predávajúci nie je schopný objednávku dodať kompletne, rozdelí ju na viac objednávok, a to bez príplatku za následné dodávky."),
      ],
    },
    {
      heading: "4. Objednávka, uzavretie kúpnej zmluvy, zrušenie objednávky",
      blocks: [
        p("Kupujúci vykonáva objednávku tovaru týmito spôsobmi:"),
        list([
          "prostredníctvom svojho zákazníckeho účtu, ak vykonal predchádzajúcu registráciu v internetovom obchode,",
          "vyplnením objednávkového formulára bez registrácie.",
        ]),
        p("Pri zadávaní objednávky si kupujúci vyberie tovar, počet kusov tovaru, spôsob platby a doručenia."),
        p("Pred odoslaním objednávky je kupujúcemu umožnené kontrolovať a meniť údaje, ktoré do objednávky vložil. Objednávku odošle kupujúci predávajúcemu kliknutím na tlačidlo Dokončenie objednávky. Údaje uvedené v objednávke sú predávajúcim považované za správne. Podmienkou platnosti objednávky je vyplnenie všetkých povinných údajov v objednávkovom formulári a potvrdenie kupujúceho o tom, že sa zoznámil s týmito obchodnými podmienkami."),
        p("Bezodkladne po obdržaní objednávky zašle predávajúci kupujúcemu potvrdenie o obdržaní objednávky na emailovú adresu, ktorú kupujúci pri objednaní zadal. Toto potvrdenie je automatické a nepovažuje sa za uzavretie zmluvy. Prílohou potvrdenia sú aktuálne obchodné podmienky predávajúceho a formulár na odstúpenie od zmluvy. Kúpna zmluva je uzavretá až po prijatí objednávky predávajúcim."),
        p("V prípade, že niektorú z požiadaviek uvedených v objednávke nemôže predávajúci splniť, zašle kupujúcemu na jeho emailovú adresu pozmenenú ponuku. Pozmenená ponuka sa považuje za nový návrh kúpnej zmluvy a kúpna zmluva je v takom prípade uzavretá potvrdením kupujúceho o prijatí tejto ponuky predávajúcemu na jeho emailovú adresu uvedenú v týchto obchodných podmienkach."),
        p("Všetky objednávky prijaté predávajúcim sú záväzné. Kupujúci môže zrušiť objednávku, pokým nie je kupujúcemu doručené oznámenie o prijatí objednávky predávajúcim, a to elektronicky prostredníctvom formulára, ktorý je dostupný na webovej stránke predávajúceho bratislava.cityglory.sk zaslaným e-mailom na adresu bratislava@cityglory.sk."),
      ],
    },
    {
      heading: "5. Zákaznícky účet",
      blocks: [
        p("Na základe registrácie kupujúceho vykonanej v internetovom obchode môže kupujúci pristupovať do svojho zákazníckeho účtu. Zo svojho zákazníckeho účtu môže kupujúci vykonávať objednávanie tovaru. Kupujúci môže objednávať tovar tiež bez registrácie."),
        p("Pri registrácii do zákazníckeho účtu a pri objednávaní tovaru je kupujúci povinný uvádzať správne a pravdivo všetky údaje. Údaje uvedené v užívateľskom účte je kupujúci pri akejkoľvek ich zmene povinný aktualizovať. Údaje uvedené kupujúcim v zákazníckom účte a pri objednávaní tovaru sú predávajúcim považované za správne."),
        p("Prístup k zákazníckemu účtu je zabezpečený užívateľským menom a heslom. Kupujúci je povinný zachovávať mlčanlivosť ohľadom informácií nevyhnutných k prístupu do jeho zákazníckeho účtu. Predávajúci nenesie zodpovednosť za prípadné zneužitie zákazníckeho účtu tretími osobami."),
        p("Kupujúci nie je oprávnený umožniť využívanie zákazníckeho účtu tretím osobám."),
        p("Predávajúci môže zrušiť užívateľský účet, a to najmä v prípade, keď kupujúci svoj užívateľský účet dlhšie nevyužíva, či v prípade, kedy kupujúci poruší svoje povinnosti z kúpnej zmluvy a týchto obchodných podmienok."),
        p("Kupujúci berie na vedomie, že užívateľský účet nemusí byť dostupný nepretržite, a to najmä s ohľadom na nutnú údržbu hardwarového a softwarového vybavenia predávajúceho, popr. nutnú údržbu hardwarového a softwarového vybavenia tretích osôb."),
      ],
    },
    {
      heading: "6. Spôsoby platby",
      blocks: [
        p("Cenu tovaru a prípadné náklady spojené s dodaním tovaru podľa kúpnej zmluvy môže kupujúci zaplatiť nasledujúcimi spôsobmi:"),
        list(["Rýchla online platba prostredníctvom platobnej brány Comgate"]),
        p("Online bankový prevod je platba prostredníctvom internetového bankovníctva s okamžitým potvrdením úhrady. Online bankový prevod prostredníctvom internetového bankovníctva je k dispozícii pre klientov Slovenskej sporiteľne, Tatra banky a VÚB Banky."),
        p("Zo zoznam bánk si kupujúci vyberie svoju banku. Po výbere banky má kupujúci možnosť zaplatiť platbu prostredníctvom QR kódu, alebo klikne na „Zaplatiť v internetovom bankovníctve“ a je presmerovaný do internetového bankovníctva. Po prihlásení sa do internetového bankovníctva sa mu zobrazí predvyplnený platobný príkaz. V tomto príkaze nemá kupujúci možnosť meniť čiastku, variabilný symbol ani banku príjemcu. Po zaplatení dôjde k presmerovaniu kupujúceho späť do e-shopu."),
        p("Pre klientov iných bánk je k dispozícii bankový prevod, pri ktorom kupujúci uhrádza platbu prostredníctvom internetového bankovníctva. Údaje k platbe je v tomto prípade potrebné zadať ručne, alebo prostredníctvom QR kódu."),
        p("Po kliknutí na možnosť „Ostatné banky“ sa kupujúcemu zobrazia údaje potrebné k platbe, ako je čiastka, variabilný symbol a banka príjemcu. Kupujúci sa prihlási do svojho internetového bankovníctva, kde môže zaplatiť pomocou QR platby, alebo zadá údaje pre platbu ručne a úhradu potvrdí. Po zaplatení dôjde k presmerovaniu kupujúceho späť do e-shopu."),
        p("Poskytovateľom služieb platobnej bány Comgate je spoločnosť ComGate Payments, a.s. Viac informácií je možné získať na tomto odkaze: https://www.comgate.cz/cz/platebni-brana"),
        p("Kontaktné údaje v prípade otázok či reklamácií k platbám prostredníctvom platobnej brány Comgate:"),
        p("ComGate Payments, a.s. Gočárova třída 1754/48b, Hradec Králové. E-mail: platby-podpora@comgate.cz. Tel: +420 228 224 267"),
        list(["Bankový prevod"]),
        p("Po prijatí objednávky s platbou prostredníctvom bankového prevodu je predávajúci povinný bezodkladne zaslať kupujúcemu údaje potrebné pre realizáciu platby, a to najmä číslo účtu a variabilný symbol. Platbu kupujúci uhrádza vopred na bankový účet predávajúceho vedený vo Fio banke - číslo účtu IBAN: SK36 8330 0000 0025 0256 1130. Po prijatí platby predávajúci odošle tovar kupujúcemu a taktiež ho informuje o predpokladanom termíne doručenia zásielky."),
        p("V prípade bezhotovostnej platby je kúpna cena splatná do 5 dní od uzavretia kúpnej zmluvy. Záväzok kupujúceho zaplatiť kúpnu cenu je splnený okamihom pripísania príslušnej sumy na bankový účet predávajúceho."),
        list(["Dobierka"]),
        p("Po prijatí objednávky s platbou na dobierku dôjde k platbe kúpnej ceny v hotovosti, a to pri prevzatí tovaru."),
        p("Pri všetkých možnostiach platby je kupujúci povinný spoločne s kúpnou cenou zaplatiť predávajúcemu náklady spojené s balením a dodaním tovaru v zmluvnej výške. Ak nie je ďalej uvedené výslovne inak, rozumie sa ďalej kúpnou cenou aj náklad spojený s dodaním tovaru."),
        p("Predávajúci nepožaduje od kupujúceho vopred žiadnu zálohu či inú obdobnú platbu. Úhrada kúpnej ceny pred odoslaním tovaru nie je zálohou."),
        p("Doklad o zaplatení objednávky je pre kupujúceho vystavený formou elektronickej faktúry. Elektronickú faktúru si môže kupujúci kedykoľvek stiahnuť z odkazu v e-mailovom potvrdení o odoslaní objednávky."),
      ],
    },
    {
      heading: "7. Dodacie podmienky",
      blocks: [
        p("Tovar je kupujúcemu dodaný:"),
        list([
          "na adresu určenú kupujúcim v objednávke, prostredníctvom kuriérskej spoločnosti GLS alebo Packeta,",
          "prostredníctvom výdajne zásielok na adresu vybranej výdajne GLS Parcel Box alebo Packeta Výdajné miesto",
          "osobný odber v sieti našich partnerov.",
        ]),
        p("Voľba spôsobu dodania sa vykonáva v priebehu objednávania tovaru."),
        p("Predávajúci sa snaží odosielať objednávky v najrýchlejšom možnom čase a poradí, v ktorom sú prijaté, primárne v nasledujúci pracovný deň, alebo pri vyššom počte objednávok alebo pri neočakávaných udalostiach môže byť dodacia lehota posunutá na viac pracovných dní, spravidla v lehote od 2 až do 4 pracovných dní po potvrdení objednávky. Po odoslaní/potvrdení objednávky predávajúci kupujúcemu odošle e-mailom potvrdenie s predpokladanými podrobnosťami o dodaní objednávky."),
        p("Dodacia lehota začína plynúť dňom prijatia záväznej objednávky, ktorá obsahuje všetky potrebné údaje na jej vybavenie. V nepravdepodobnom prípade, ak by dodacia lehota presiahla dobu 30 dní, má kupujúci právo objednávku zrušiť."),
        p("Ak je predávajúci podľa kúpnej zmluvy povinný dodať tovar na miesto určené kupujúcim v objednávke, je kupujúci povinný prevziať tovar pri dodaní. V prípade, že je z dôvodov na strane kupujúceho nutné tovar doručovať opakovane alebo iným spôsobom, než bolo uvedené v objednávke, je kupujúci povinný zaplatiť náklady spojené s opakovaným doručovaním tovaru, resp. náklady spojené s iným spôsobom doručenia."),
        p("Pri prevzatí tovaru od prepravcu je kupujúci povinný skontrolovať neporušenosť obalov tovaru a v prípade akýchkoľvek vád toto bezodkladne oznámiť prepravcovi. V prípade zistenia porušenia obalu nasvedčujúceho neoprávnenému vniknutiu do zásielky nemusí kupujúci zásielku od prepravcu prevziať."),
        p("Kupujúci nadobúda vlastnícke právo ku tovaru zaplatením celej kúpnej ceny za tovar, vrátane nákladov na dodanie, najskôr však prevzatím tovaru. Zodpovednosť za náhodnú stratu, poškodenie či zničenie tovaru prechádza na kupujúceho okamihom prevzatia tovaru alebo okamihom, kedy mal kupujúci povinnosť tovar prevziať, ale v rozpore s kúpnou zmluvou tak neurobil."),
      ],
    },
    {
      heading: "8. Odstúpenie od zmluvy",
      blocks: [
        p("V súlade s ustanovením § 7 ods. 1 a. 102/2014 Z. z. o ochrane spotrebiteľa pri predaji tovaru alebo poskytovaní služieb na základe zmluvy uzavretej na diaľku alebo zmluvy uzavretej mimo prevádzkových priestorov predávajúceho, má spotrebiteľ právo odstúpiť od zmluvy do 14 dní od prevzatia tovaru."),
        p("Objednávku môže kupujúci zrušiť alebo vrátiť do 14 dní od prevzatia tovaru. Ak kupujúci už za tovar zaplatil, bude mu platba vrátená, po odčítaní štandardných nákladov na dopravu vo výške 4 Eur resp. 3 Eur za vrátenie tovaru, nakoľko predávajúcemu tieto náklady vznikli. V prípade, ak sa kupujúci rozhodne, že si určité položky tovaru ponechá a svoju objednávku zruší len čiastočne, náklady na doručenie mu taktiež vrátené nebudú."),
        p("V prípade ak si kupujúci praje odstúpiť od zmluvy, zašle predávajúcemu oznámenie písomne, prostredníctvom formulára, ktorý je dostupný na webovej stránke predávajúceho bratislava.cityglory.sk, zaslaným e-mailom na adresu bratislava@cityglory.sk, v lehote 14 dní od prevzatia tovaru. Kupujúci je zároveň povinný v odstúpení od zmluvy uviesť kontaktné údaje a číslo účtu, na ktorý má byť uhradená suma za objednaný tovar poukázaná zo strany predávajúceho."),
        p("V prípade zrušenia objednávky, predávajúci dáva kupujúcemu ako možnosť voľby vrátenia tovaru prostredníctvom kuriérskej spoločnosti (GLS). Táto služba vrátenia tovaru je spoplatnená sumou 4 Eur, a túto hradí kupujúci. V prípade záujmu o túto službu, kupujúci upovedomí predávajúceho, že má záujem o vrátenie tovaru prostredníctvom kuriérskej spoločnosti, následne predávajúci zabezpečí vyzdvihnutie zrušenej objednávky u kupujúceho prostredníctvom kuriérskej spoločnosti. Po prevzatí zrušenej objednávky prostredníctvom kuriérskej spoločnosti, predávajúci kupujúcemu vráti platbu za zrušenú objednávku (zníženú o náklady na dopravu vo výške 4 Eur resp. 3 Eur) do 14 dní."),
        p("Predávajúci je povinný bez zbytočného odkladu, najneskôr do 14 dní odo dňa doručenia oznámenia o odstúpení od zmluvy vrátiť spotrebiteľovi platby, ktoré od neho prijal na základe zmluvy alebo v súvislosti s ňou. Predávajúci nie je povinný vrátiť spotrebiteľovi platby podľa § 7 odseku 1 zákona č. 102/2014 o ochrane spotrebiteľa pred tým, ako mu je tovar doručený alebo kým spotrebiteľ nepreukáže zaslanie tovaru späť predávajúcemu, ibaže predávajúci navrhne, že si tovar vyzdvihne osobne alebo prostredníctvom ním poverenej osoby."),
        p("Odstúpiť od zmluvy nie je možné u tovaru uzavretého v ochrannom obale, ktorý nie je vhodné vrátiť z dôvodu ochrany zdravia alebo z hygienických dôvodov a ktorého ochranný obal bol po dodaní porušený."),
        p("V prípade, ak kupujúci už prevzal objednaný tovar, je povinný ho vrátiť v originálnom nepoškodenom balení. Predávajúci zaručuje vrátenie peňazí v plnej výške v súlade s vyššie uvedeným za predpokladu, že tovar je vrátený v rovnakom stave, v akom ho dostal – t. j. tovar nesmie byť poškodený, znečistený, použitý a všetky etikety alebo štítky by mali byť neporušené."),
        p("V prípade, ak kupujúci vráti objednaný tovar poškodený, čiastočne spotrebovaný resp. v stave, ktorý neodpovedá stavu, v ktorom bol predávajúcim odoslaný, berie na vedomie, že predávajúci je oprávnený si takto vzniknutú škodu, ktorú je predávajúci povinný preukázať, uhradiť zo sumy, ktorá bola uhradená kupujúcim za objednaný tovar."),
        p("Predávajúci nepreberá vrátený tovar prostredníctvom dobierkovej služby. Kupujúci v prípade vrátenia tovaru je povinný zaslať tovar formou bežného alebo obchodného balíku poštou alebo prostredníctvom kuriérskej spoločnosti (viď vyššie)."),
      ],
    },
    {
      heading: "9. Zodpovednosť za chyby, záruka, reklamácia",
      blocks: [
        p("Predávajúci poskytuje záruku na tovar v dĺžke 24 mesiacov. Záruka začína plynúť od prevzatia veci kupujúcim. Kupujúci berie na vedomie, že je povinný prezrieť si tovar bezprostredne pri jeho prevzatí. V prípade, že tovar pri prevzatí kupujúcim neodpovedá kúpnej zmluve, je kupujúci povinný bezodkladne o tom upovedomiť predávajúceho."),
        p("V prípade ak:"),
        list([
          "sa jedná o chybu odstrániteľnú, má kupujúci právo aby bola bezplatne, včas a riadne odstránená bez zbytočného odkladu resp. právo na výmenu veci. Kupujúci berie na vedomie, že predávajúci je oprávnený namiesto odstránenia chyby vymeniť vždy chybný tovar za bezchybný, pokiaľ to kupujúcemu nespôsobí závažné ťažkosti,",
          "sa jedná o chybu neodstrániteľnú, ktorá bráni tomu, aby mohol byť tovar riadne užívaný, má kupujúci právo na výmenu veci alebo právo od zmluvy odstúpiť,",
          "sa jedná o chybu neodstrániteľnú, ktorá ale nebráni tomu, aby mohol byť tovar riadne užívaný, má kupujúci právo na primeranú zľavu z ceny,",
          "sa jedná o chybu odstrániteľnú, ale kupujúci nemôže pre opätovne sa vyskytnutú chybu po oprave alebo pre väčší počet chýb vec riadne užívať, má kupujúci právo na výmenu tovaru alebo právo od zmluvy odstúpiť,",
        ]),
        p("Kupujúci berie na vedomie, že predávajúci neodpovedá za chyby tovaru, ktoré boli spôsobené v príčinnej súvislosti s jednaním alebo opomenutím kupujúceho."),
        p("Pri uplatnení reklamácie v zákonnej záruke je kupujúci povinný preukázať uzatvorenie kúpnej zmluvy s predávajúcim dokladom o kúpe alebo prípadným záručným listom. Súčasne je kupujúci povinný vyplniť reklamačný formulár, ktorý je dostupný na webovej stránke predávajúceho bratislava.cityglory.sk, a spolu s ním doručiť na adresu predávajúceho uvedenú v týchto obchodných podmienkach ako adresa na vrátenie tovaru v bode 1. týchto obchodných podmienok, reklamovaný tovar čistý, mechanicky nepoškodený, vrátane požadovaných dokladov."),
        p("Predávajúci sa zaväzuje oprávnenú a podľa týchto obchodných podmienok uplatnenú reklamáciu vybaviť bezodkladne, najneskôr do 30 kalendárnych dní odo dňa uplatnenia reklamácie, pokiaľ sa predávajúci s kupujúcim nedohodne inak."),
      ],
    },
    {
      heading: "10. Záverečné ustanovenia",
      blocks: [
        p("Objednávka kupujúceho je po svojom potvrdení ako uzatvorená zmluva medzi kupujúcim a predávajúcim archivovaná za účelom jej splnenia a ďalšej evidencie. Jednotlivé technické kroky smerujúce k uzatvoreniu zmluvy sú kupujúcemu známe z vlastného procesu uskutočnenia objednávky. Zmluva sa uzatvára v slovenskom jazyku, poprípade je možné ju uzatvoriť aj v iných jazykoch, pokiaľ to nebude dôvodom nemožnosti jej uzatvorenia. Kupujúci má možnosť opravovať chyby, ktoré vznikli pri zadávaní údajov pred podaním objednávky. Tieto obchodné podmienky umožňujú spotrebiteľovi ich archiváciu a reprodukciu. Obchodné podmienky platia od 19.06.2023."),
        p("V prípade vzniknutého sporu sa kupujúci v postavení spotrebiteľa môže obrátiť na orgán alternatívneho riešenia sporov, ktorý je v Slovenskej republike Slovenská obchodná inšpekcia – https://www.soi.sk/sk/alternativne-riesenie-spotrebitelskych-sporov.soi."),
        p("Kupujúci odoslaním objednávky dáva súhlas so spracovaním údajov podľa zákona č. 18/2018 Z. z. o ochrane osobných údajov a o zmene a doplnení niektorých zákonov. Kupujúci odoslaním objednávky potvrdzuje, že si tieto obchodné podmienky, prípadne reklamačný poriadok predávajúceho prečítal, oboznámil sa s ich obsahom a v celom rozsahu s nimi súhlasí."),
        p("Používaním webovej stránky predávajúceho bratislava.cityglory.sk alebo objednaním tovaru, vyjadrujte svoj súhlas s tým, že budete viazaní podmienkami uvedenými v tomto dokumente (ďalej len „obchodné podmienky“). Pred odoslaním/potvrdením objednávky sa uistite, že ste si tieto obchodné podmienky prečítali a porozumeli ich zneniu."),
        p("Prevádzkovateľ si vyhradzuje právo na zmenu obchodných podmienok bez predchádzajúceho upozornenia. Na každú objednávku sa vzťahuje tá verzia obchodných podmienok, ktorá bola zverejnená na webovej stránke predávajúceho bratislava.cityglory.sk v čase odoslania/potvrdenia danej objednávky."),
        p("Posledná zmena 19.06.2023."),
      ],
    },
  ],
};

export const reklamacie: LegalDocument = {
  sections: [
    {
      heading: "Zrušenie objednávky",
      blocks: [
        p("Všetky objednávky prijaté predávajúcim sú záväzné. Kupujúci môže zrušiť objednávku, pokiaľ nie je kupujúcemu doručené oznámenie o prijatí objednávky predávajúcim, a to elektronicky prostredníctvom formulára, ktorý je dostupný na webovej stránke predávajúceho bratislava.cityglory.sk zaslaným e-mailom na adresu bratislava@cityglory.sk."),
        link("Formulár na zrušenie Objednávky (storno)", "/legal/formular-storno-cityglory.pdf"),
      ],
    },
    {
      heading: "Odstúpenie od zmluvy",
      blocks: [
        p("V súlade s ustanovením § 7 ods. 1 a. 102/2014 Z. z. o ochrane spotrebiteľa pri predaji tovaru alebo poskytovaní služieb na základe zmluvy uzavretej na diaľku alebo zmluvy uzavretej mimo prevádzkových priestorov predávajúceho, má spotrebiteľ právo odstúpiť od zmluvy do 14 dní od prevzatia tovaru."),
        p("Objednávku môže kupujúci zrušiť alebo vrátiť do 14 dní od prevzatia tovaru. Ak kupujúci už za tovar zaplatil, bude mu platba vrátená, po odčítaní štandardných nákladov na dopravu vo výške 4 Eur resp. 3 Eur za vrátenie tovaru, nakoľko predávajúcemu tieto náklady vznikli. V prípade, ak sa kupujúci rozhodne, že si určité položky tovaru ponechá a svoju objednávku zruší len čiastočne, náklady na doručenie mu taktiež vrátené nebudú."),
        p("V prípade ak si kupujúci praje odstúpiť od zmluvy, zašle predávajúcemu oznámenie písomne, prostredníctvom formulára, ktorý je dostupný na webovej stránke predávajúceho bratislava.cityglory.sk, zaslaným e-mailom na adresu bratislava@cityglory.sk, v lehote 14 dní od prevzatia tovaru. Kupujúci je zároveň povinný v odstúpení od zmluvy uviesť kontaktné údaje a číslo účtu, na ktorý má byť uhradená suma za objednaný tovar poukázaná zo strany predávajúceho."),
        p("V prípade zrušenia objednávky, predávajúci dáva kupujúcemu ako možnosť voľby vrátenia tovaru prostredníctvom kuriérskej spoločnosti GLS. Táto služba vrátenia tovaru je spoplatnená sumou 4 Eur, a túto hradí kupujúci. V prípade záujmu o túto službu, kupujúci upovedomí predávajúceho, že má záujem o vrátenie tovaru prostredníctvom kuriérskej spoločnosti, následne predávajúci zabezpečí vyzdvihnutie zrušenej objednávky u kupujúceho prostredníctvom kuriérskej spoločnosti. Po prevzatí zrušenej objednávky prostredníctvom kuriérskej spoločnosti, predávajúci kupujúcemu vráti platbu za zrušenú objednávku (zníženú o náklady na dopravu vo výške 4 Eur resp. 3 Eur) do 14 dní."),
        p("Predávajúci je povinný bez zbytočného odkladu, najneskôr do 14 dní odo dňa doručenia oznámenia o odstúpení od zmluvy vrátiť spotrebiteľovi platby, ktoré od neho prijal na základe zmluvy alebo v súvislosti s ňou. Predávajúci nie je povinný vrátiť spotrebiteľovi platby podľa § 7 odseku 1 zákona č. 102/2014 o ochrane spotrebiteľa pred tým, ako mu je tovar doručený alebo kým spotrebiteľ nepreukáže zaslanie tovaru späť predávajúcemu, ibaže predávajúci navrhne, že si tovar vyzdvihne osobne alebo prostredníctvom ním poverenej osoby."),
        p("Odstúpiť od zmluvy nie je možné u tovaru uzavretého v ochrannom obale, ktorý nie je vhodné vrátiť z dôvodu ochrany zdravia alebo z hygienických dôvodov a ktorého ochranný obal bol po dodaní porušený."),
        p("V prípade, ak kupujúci už prevzal objednaný tovar, je povinný ho vrátiť v originálnom nepoškodenom balení. Predávajúci zaručuje vrátenie peňazí v plnej výške v súlade s vyššie uvedeným za predpokladu, že tovar je vrátený v rovnakom stave, v akom ho dostal – t. j. tovar nesmie byť poškodený, znečistený, použitý a všetky etikety alebo štítky by mali byť neporušené."),
        p("V prípade, ak kupujúci vráti objednaný tovar poškodený, čiastočne spotrebovaný resp. v stave, ktorý neodpovedá stavu, v ktorom bol predávajúcim odoslaný, berie na vedomie, že predávajúci je oprávnený si takto vzniknutú škodu, ktorú je predávajúci povinný preukázať, uhradiť zo sumy, ktorá bola uhradená kupujúcim za objednaný tovar."),
        p("Predávajúci nepreberá vrátený tovar prostredníctvom dobierkovej služby. Kupujúci v prípade vrátenia tovaru je povinný zaslať tovar formou bežného alebo obchodného balíku poštou alebo prostredníctvom kuriérskej spoločnosti (viď vyššie)."),
        p("Adresa na vrátenie tovaru:"),
        p("CITY GLORY s.r.o., Rebarborova 35, 821 07 Bratislava, Slovensko"),
        link("Formulár na odstúpenie od zmluvy", "/legal/formular-odstupenie-cityglory.pdf"),
      ],
    },
    {
      heading: "Reklamácie",
      blocks: [
        p("Predávajúci poskytuje záruku na tovar v dĺžke 24 mesiacov. Záruka začína plynúť od prevzatia veci kupujúcim. Kupujúci berie na vedomie, že je povinný prezrieť si tovar bezprostredne pri jeho prevzatí. V prípade, že tovar pri prevzatí kupujúcim neodpovedá kúpnej zmluve, je kupujúci povinný bezodkladne o tom upovedomiť predávajúceho."),
        p("V prípade ak:"),
        list([
          "sa jedná o chybu odstrániteľnú, má kupujúci právo aby bola bezplatne, včas a riadne odstránená bez zbytočného odkladu resp. právo na výmenu veci. Kupujúci berie na vedomie, že predávajúci je oprávnený namiesto odstránenia chyby vymeniť vždy chybný tovar za bezchybný, pokiaľ to kupujúcemu nespôsobí závažné ťažkosti,",
          "sa jedná o chybu neodstrániteľnú, ktorá bráni tomu, aby mohol byť tovar riadne užívaný, má kupujúci právo na výmenu veci alebo právo od zmluvy odstúpiť,",
          "sa jedná o chybu neodstrániteľnú, ktorá ale nebráni tomu, aby mohol byť tovar riadne užívaný, má kupujúci právo na primeranú zľavu z ceny,",
          "sa jedná o chybu odstrániteľnú, ale kupujúci nemôže pre opätovne sa vyskytnutú chybu po oprave alebo pre väčší počet chýb vec riadne užívať, má kupujúci právo na výmenu tovaru alebo právo od zmluvy odstúpiť,",
        ]),
        p("Kupujúci berie na vedomie, že predávajúci neodpovedá za chyby tovaru, ktoré boli spôsobené v príčinnej súvislosti s jednaním alebo opomenutím kupujúceho."),
        p("Pri uplatnení reklamácie v zákonnej záruke je kupujúci povinný preukázať uzatvorenie kúpnej zmluvy s predávajúcim dokladom o kúpe alebo prípadným záručným listom. Súčasne je kupujúci povinný vyplniť reklamačný formulár, ktorý je dostupný na webovej stránke predávajúceho bratislava.cityglory.sk, a spolu s ním doručiť na adresu predávajúceho uvedenú v týchto obchodných podmienkach ako adresa na vrátenie tovaru v bode 1. týchto obchodných podmienok, reklamovaný tovar čistý, mechanicky nepoškodený, vrátane požadovaných dokladov."),
        p("Predávajúci sa zaväzuje oprávnenú a podľa týchto obchodných podmienok uplatnenú reklamáciu vybaviť bezodkladne, najneskôr do 30 kalendárnych dní odo dňa uplatnenia reklamácie, pokiaľ sa predávajúci s kupujúcim nedohodne inak."),
        p("Adresa na vrátenie tovaru:"),
        p("CITY GLORY s.r.o., Rebarborova 35, 821 07 Bratislava, Slovensko"),
        link("Formulár na reklamáciu", "/legal/formular-reklamacia-cityglory.pdf"),
      ],
    },
  ],
};

export const ochranaUdajov: LegalDocument = {
  updated: "19.06.2023",
  sections: [
    {
      heading: "1. Ochrana osobných údajov",
      blocks: [
        p("Spoločnosť CITY GLORY s.r.o., 29. augusta 23, 811 09 Bratislava, zapísaná v OR Mestského súdu Bratislava III, oddiel Sro, vložka č. 168164/B, IČO: 55 330 614 (PREVÁDZKOVATEĽ), uchováva a spracováva osobné údaje (OÚ) v súlade s nariadením európskeho parlamentu a rady (EÚ) 2016/679 o ochrane fyzických osôb pri spracúvaní osobných údajov a o voľnom pohybe takýchto údajov (GDPR), a tiež podľa zákona č. 18/2018 Z. z o ochrane osobných údajov a o zmene a doplnení niektorých zákonov v platnom znení (ZÁKON)."),
        p("Aby sme vedeli správne určiť vaše priania a potreby a následne ich aj korektne plniť, potrebujeme od vás v niektorých prípadoch vaše OÚ. Zozbierané údaje sú následne použité na podporu zákazníckeho vzťahu medzi vami a prevádzkovateľom. Základným predpokladom na získanie akýchkoľvek informácií je vaše vyjadrenie súhlasu so spracovaním OÚ."),
        p("Údaje zbierame od svojich zákazníkov viacerými spôsobmi – pri registrácii alebo pri objednávke. Ide hlavne o meno a priezvisko zákazníka, fakturačnú a dodaciu adresu, platobné údaje a telefónny a emailový kontakt."),
        p("Pri každom kroku sa prevádzkovateľ riadi platnou legislatívou a všeobecnými obchodnými podmienkami. OÚ sú v prvom rade využívané na elektronické vybavenie objednávky, realizáciu dodávky, zúčtovanie platieb a s tým súvisiacu komunikáciu s vami. Ďalej na marketingové účely prevádzkovateľa a k tvorbe rozličných štatistík, ktoré sú však využívané len na interné účely."),
        p("Viac je uvedené v ods. 2 Účel spracúvania OÚ a právny základ spracúvania OÚ, ods. 3 Registrácia (vytvorenie užívateľského účtu) a ods. 4 Mladší ako 16 rokov."),
        p("Dôvernosť vašich OÚ berieme veľmi vážne a preto sa zaväzujeme, že vaše OÚ nebudú vydané tretím stranám, s výnimkou subdodávateľov a sprostredkovateľov, ktorí nám pomáhajú poskytovať naše služby."),
        p("Subdodávateľom a sprostredkovateľom však poskytujeme len tie údaje, ktoré sú nevyhnutné pre úspešné zrealizovanie objednávky a jej dodávky."),
        p("Zabezpečujeme, aby výber našich subdodávateľov a spracúvanie OÚ u našich subdodávateľov boli v súlade s GDPR."),
        p("Je našou povinnosťou chrániť Vaše osobné údaje primeraným spôsobom a z tohto dôvodu ich ochrane venujeme náležitú pozornosť. Prijali sme všeobecne akceptované technické a organizačné štandardy za účelom zachovania bezpečnosti spracúvaných OÚ, a to najmä pred ich stratou, zneužitím, neautorizovanej úprave, zničením alebo iným dopadom na práva a slobody dotknutých osôb. V situáciách, ak sa prenášajú citlivé dáta, používame šifrovacie technológie. Vaše OÚ sú uložené na serveroch prevádzkovateľov našich webových stránok a prevádzkovateľov cloudových a hostingových služieb, ktoré sú primerane zabezpečené. V prípade použitia analytických nástrojov tretích strán, sú dáta uložené na serveroch tretích strán."),
        p("Viac je uvedené v ods. 5 Tretie strany, ods. 6 Prenos OÚ do tretích krajín, ods. 7 Bezpečný prenos OÚ a ods. 10 Cookies."),
        p("Zákazníci môžu svoje osobné údaje kedykoľvek zmeniť alebo aktualizovať po prihlásení sa do svojho účtu alebo na základe písomnej žiadosti odoslanej na poštovú alebo emailovú adresu prevádzkovateľa. Zároveň, na písomnú žiadosť zákazníka, budú osobné údaje z databázy vymazané a prevádzkovateľ ich nebude ďalej spracovávať."),
        p("Viac je uvedené v ods. 9 Práva dotknutej osoby (kupujúceho) a ods. 11 Kontaktné údaje prevádzkovateľa."),
      ],
    },
    {
      heading: "2. Účel spracúvania OÚ a právny základ spracúvania OÚ",
      blocks: [
        p("Ak ste nám poskytli OÚ, budú použité na nasledovné účely:"),
        p("2.1 Eshop – k uzavretiu a plneniu kúpnej zmluvy, spracovaniu platby, dodaniu produktu, prípadne výkonu ostatných súvisiacich činností (ako napríklad reklamačné a iné povinnosti súvisiace s právnymi predpismi v oblasti ochrany spotrebiteľa), uzatvorenej prostredníctvom webovej stránky bratislava.cityglory.sk medzi prevádzkovateľom a kupujúcim. Pre vybavenie objednávky ste nám poskytli údaje meno, priezvisko, adresu, email, telefónne číslo a vaše platobné údaje. Email a telefónny kontakt slúžia aj ako komunikačný prostriedok. Na váš email budú zasielané informácie k potvrdeniu objednávky a faktúra."),
        p("Prevádzkovateľ spracúva OÚ na právnom základe (čl. 6 /1/b GDPR a ZÁKONA), spracúvanie osobných údajov je nevyhnutné na plnenie zmluvy, ktorej zmluvnou stranou je dotknutá osoba (kupujúci), alebo na vykonanie opatrenia pred uzatvorením zmluvy na základe žiadosti dotknutej osoby (kupujúceho) t. j. ide o zmluvnú požiadavku."),
        p("2.2 Marketing – na marketingové účely, ak ste udelili súhlas prevádzkovateľovi a to odkliknutím políčka pri odoslaní objednávky. Pod marketingovými účelmi sa rozumie podpora predaja, marketingové ponuky, newsletters, sms informácie o produktoch a novinkách. Ak si dotknutá osoba neželá dostávať tieto ponuky, jednoducho sa odhlási vo svojom užívateľskom účte alebo linkom po prijatí newslettera."),
        p("Prevádzkovateľ spracúva OÚ na základe súhlasu dotknutej osoby (čl. 6/1/a GDPR a ZÁKONA)."),
        p("2.3 Štatistické účely - na získanie informácií pre potreby podnikania prevádzkovateľa, jeho ďalšieho smerovania a pre vylepšenie poskytovaných služieb prevádzkovateľa, spracúvame OÚ aj na štatistické účely. Výsledkom takéto spracúvania však nie sú osobné údaje, ale agregované / anonymné informácie (ako napr. počet kupujúcich, ekonomické štatistiky a pod.)."),
        p("Prevádzkovateľ spracúva OÚ na právnom základe (čl. 89 GDPR)."),
        p("2.4 Všetky OÚ sú spracovávané len za vyššie uvedeným účelom a na nevyhnutný čas, bližšie uvedený v ods. 8 Doba spracúvania OÚ."),
      ],
    },
    {
      heading: "3. Registrácia (vytvorenie užívateľského účtu)",
      blocks: [
        p("Kupujúci môže na stránke prevádzkovateľa nakupovať bez registrácie alebo si môže vytvoriť užívateľský účet, ak udelí prevádzkovateľovi súhlas a to odkliknutím políčka pri registrácii. Pre vytvorenie užívateľského účtu poskytujete údaje meno, priezvisko, adresu, email, telefónne číslo a vaše platobné údaje."),
        p("Prevádzkovateľ spracúva OÚ na základe súhlasu dotknutej osoby (čl. 6/1/a GDPR a ZÁKONA)."),
      ],
    },
    {
      heading: "4. Mladší ako 16 rokov",
      blocks: [
        p("Prevádzkovateľ v súvislosti s ponukou služieb spoločnosti spracúva OÚ na základe súhlasu dotknutej osoby zákonne, ak dotknutá osoba dovŕšila 16 rokov veku. Stránka prevádzkovateľa nie je priamo určená osobám mladším ako 16 rokov."),
        p("Prevádzkovateľ nespracováva OÚ osôb mladších ako 16 rokov. Pri každom registrovaní/prihlásení, prevádzkovateľ žiada čestné prehlásenie kupujúceho. Stránka prevádzkovateľa nie je určená na nákup osobám mladším ako 16 rokov."),
      ],
    },
    {
      heading: "5. Tretie strany",
      blocks: [
        p("Počas spracovania objednávky a plnenia kúpnej zmluvy a počas poskytovania našich služieb sú OÚ poskytnuté aj tretím stranám. Patria medzi nich zmluvní partneri zabezpečujúci chod stránky, poskytovatelia štandardného softvérového vybavenia (Microsoft, Apple, Google), poskytovatelia cloudových alebo hostingových služieb, poskytovatelia nástrojov na analýzu, spracovania a uchovávanie dát (Google Analytics), prepravné, kuriérske a poštovné spoločnosti, banky, poskytovatelia služieb pre zasielanie newsletteru a podobne."),
      ],
    },
    {
      heading: "6. Prenos OÚ do tretích krajín",
      blocks: [
        p("Ak to nie je nevyhnutné, obmedzujeme akékoľvek cezhraničné prenosy OÚ do tretích krajín mimo EÚ a / alebo Európskeho hospodárskeho priestoru. Avšak, niektorí z našich subdodávateľov alebo vyššie uvedených príjemcov OÚ môžu byť usadení alebo ich servery môžu byť umiestnené v Spojených štátoch amerických (USA). USA je vo všeobecnosti považovaná za tretiu krajinu, ktorá nezabezpečuje primeranú úroveň ochrany. Spoločnosti, ktoré sú certifikované podľa mechanizmu ochrany súkromia EÚ a USA (EU-US Privacy Shield) schváleného Komisiou (EÚ) sa však považujú za podniky, ktoré zabezpečujú primeranú úroveň ochrany. Každý prenos OÚ mimo EÚ a/alebo Európskeho hospodárskeho priestoru sa uskutočňuje len v rámci striktného dodržiavania GDPR."),
        p("Prevádzkovateľ využíva online aplikáciu na zasielanie Newslettrov (Mailchimp a pod.) a služby poskytovateľov štatistických analýz (Google). V oboch prípadoch dochádza k cezhraničnému prenosu OÚ do USA, a to v súlade s rozhodnutím Európskej komisie, ktorou sa zaviedol tzv. Privacy Shield. Títo poskytovatelia služieb ďalej poskytli primerané záruky a bezpečnosť OÚ a zaručujú sa, že OÚ spracúvajú v zmysle zásad GDPR."),
      ],
    },
    {
      heading: "7. Bezpečný prenos OÚ",
      blocks: [
        p("Vaše OÚ sú bezpečne prenášané vďaka šifrovaniu. Systém kódovania SSL (Secure Socket Layer) sa najčastejšie využíva pre bezpečnú komunikáciu s webovými servermi. OÚ v našich systémoch ako i internetová stránka prevádzkovateľa sú zabezpečené primeranými technickými a organizačnými opatreniami proti strate, zničeniu, zmene a ďalšiemu šíreniu údajov prostredníctvom neoprávnených osôb."),
        p("V prípade, ak ste i registrovaný na stránke prevádzkovateľa bratislava.cityglory.sk, prístup k vášmu užívateľskému účtu máte iba vy, preto dbajte, aby ste s týmito údajmi nakladali dôverne. Prevádzkovateľ nezodpovedá za neoprávnené nakladanie alebo zneužitie hesla."),
      ],
    },
    {
      heading: "8. Doba spracúvania OÚ",
      blocks: [
        p("Kupujúci súhlasí so spracovaním OÚ odo dňa udelenia v zmysle týchto podmienok, počas trvania existencie užívateľského účtu kupujúceho alebo do doby vybavenia všetkých objednávok kupujúceho, a v prípade, ak si kupujúci nevytvoril užívateľský účet, po dobu 5 rokov, pri splnení účelu plnenia zo zmluvy ods. 2.1."),
        p("Kupujúci súhlasí so spracovaním OÚ odo dňa udelenia v zmysle týchto podmienok, po dobu 1 roka, pri splnení účelu marketingových aktivít ods. 2.2."),
      ],
    },
    {
      heading: "9. Práva dotknutej osoby (kupujúceho)",
      blocks: [
        p("Kupujúci má právo v zmysle GDPR na (i) právo na opravu, (ii) právo na výmaz, (iii) právo na prenosnosť údajov, (iv) právo namietať, (v) právo na odvolanie súhlasu, (vi) právo na prístup k informáciám, (vii) právo podať návrh na začatie konania."),
        p("Kupujúci má právo, aby prevádzkovateľ bez zbytočného odkladu opravil nesprávne OÚ, ktoré sa týkajú jeho osoby a doplnenie neúplných OÚ."),
        p("Kupujúci má právo na to, aby prevádzkovateľ bez zbytočného odkladu vymazal OÚ, ktoré sa týkajú jeho osoby. Prevádzkovateľ je povinný bez zbytočného odkladu vymazať tieto OÚ, ak je splnený niektorý z týchto dôvodov:"),
        list([
          "OÚ už nie sú potrebné na účel, na ktorý sa získali alebo spracúvali,",
          "dotknutá osoba odvolá súhlas na spracovanie OÚ aspoň na 1 konkrétny účel alebo súhlas je neplatný, ak jeho poskytnutie vylučuje osobitný predpis,",
          "dotknutá osoba namieta spracúvanie OÚ podľa ods. 2.1 a neprevažujú žiadne oprávnené dôvody na spracúvanie OÚ alebo dotknutá osoba namieta spracúvanie OÚ podľa ods. 2.2 a týka sa to priameho marketingu,",
          "OÚ sa spracúvajú nezákonne,",
          "je dôvodom pre výmaz splnenie povinnosti podľa tohto zákona, osobitného predpisu alebo medzinárodnej zmluvy, ktorou je Slovenská republika viazaná, alebo",
          "sa OÚ získavali v súvislosti s ponukou služieb spoločnosti a dotknutá osoba má menej ako 16 rokov.",
        ]),
        p("Ak prevádzkovateľ zverejnil OÚ a je povinný ich vymazať, je zároveň povinný prijať primerané bezpečnostné opatrenia vrátane technických opatrení so zreteľom na dostupnú technológiu a náklady na ich vykonanie, za účelom informovania ostatných prevádzkovateľov, ktorí spracúvajú OÚ dotknutej osoby o jej žiadosti, aby títo prevádzkovatelia vymazali odkazy na jej OÚ a ich kópie alebo odpisy."),
        p("Kupujúci má právo získať OÚ, ktoré sa týkajú jeho osoby a ktoré poskytol prevádzkovateľovi, v štruktúrovanom, bežne používanom a strojovo čitateľnom formáte a má právo preniesť tieto OÚ ďalšiemu prevádzkovateľovi - predajcovi, ak je to technicky možné a ak:"),
        list([
          "sa OÚ spracúvajú na základe súhlasu dotknutej osoby, na základe zmluvy a na základe súhlasu dotknutej osoby, ktorý je neplatný ak jeho poskytnutie vylučuje osobitný predpis,",
          "spracúvanie OÚ sa vykonáva automatizovanými prostriedkami.",
        ]),
        p("Kupujúci má právo namietať spracúvanie OÚ, ktoré sa týkajú jeho osoby, na účel priameho marketingu, prevádzkovateľ je povinný dotknutú osobu výslovne upozorniť na jej práva najneskôr pri prvej komunikácii s ňou, pričom informácia o tomto práve musí byť uvedená jasne a oddelene od akýchkoľvek iných informácií. Kupujúci svoje právo namietať môže uplatňovať automatizovanými prostriedkami s použitím technických špecifikácií."),
        p("Kupujúci má právo kedykoľvek odvolať súhlas so spracovaním OÚ, ktoré sa týkajú jeho osoby. Odvolanie súhlasu nemá vplyv na zákonnosť spracúvania OÚ založeného na súhlase pred jeho odvolaním; pred poskytnutím súhlasu musí byť kupujúci o tejto skutočnosti informovaný. Kupujúci môže súhlas odvolať rovnakým spôsobom, akým súhlas udelil."),
        p("Kupujúci má právo získať od prevádzkovateľa potvrdenie o tom, či sa spracúvajú OÚ, ktoré sa týkajú jeho osoby. Ak prevádzkovateľ takéto OÚ spracúva, kupujúci má právo získať prístup k týmto OÚ a informáciách o:"),
        list([
          "účele spracúvania OÚ,",
          "kategórii spracúvaných OÚ (bežné OÚ, prevádzkovateľ nespracováva osobitnú kategóriu OÚ),",
          "identifikácii príjemcu alebo o kategórii príjemcu, ktorému boli alebo majú byť OÚ poskytnuté, najmä o príjemcovi v tretej krajine alebo o medzinárodnej organizácii, ak je to možné,",
          "dobe uchovávania OÚ, ak to nie je možné, informáciu o kritériách jej určenia,",
          "práve požadovať od prevádzkovateľa opravu OÚ týkajúcich sa kupujúceho, ich vymazanie alebo obmedzenie ich spracúvania, alebo o práve namietať spracúvanie OÚ,",
          "práve podať návrh na začatie konania,",
          "zdroji OÚ, ak sa OÚ nezískali od kupujúceho,",
          "existencii automatizovaného individuálneho rozhodovania, v tomto prípade poskytne prevádzkovateľ kupujúcemu informácie najmä o použitom postupe, ako aj o význame a predpokladaných dôsledkoch takéhoto spracúvania OÚ pre kupujúceho.",
        ]),
        p("Prevádzkovateľ je povinný poskytnúť na základe tejto žiadosť informácie do 30 dní od doručenia tejto žiadosti. Túto lehotu môže prevádzkovateľ predĺžiť o ďalších 60 dní, o odklade je povinný kupujúceho informovať."),
        p("Za opakované poskytnutie OÚ, o ktoré kupujúci požiada, môže prevádzkovateľ účtovať primeraný poplatok zodpovedajúci administratívnym nákladom. Prevádzkovateľ je povinný poskytnúť OÚ kupujúceho spôsobom, akým požiadal alebo podľa jeho požiadavky."),
        p("Prevádzkovateľ si vyhradzuje právo kupujúceho verifikovať, a zistiť, či ide o konkrétneho kupujúceho. Verifikácia spočíva v poskytnutí dodatočných informácií napr. prostredníctvom kontrolných otázok. Verifikácia je dôležitá z hľadiska ochrany OÚ a poskytnutia informácií o OÚ, ktoré prevádzkovateľ spracúva, len dotknutej osobe osobne."),
        p("Kupujúci môže podať návrh na začatie konania v zmysle § 100 Zákona, ak je priamo dotknutý na svojich právach, návrh musí obsahovať informácie kto ho podáva, proti komu návrh smeruje s predmetom návrhu s označením práv, ktoré mali byť pri spracúvaní OÚ porušené, dôkazy."),
        p("Vzor návrhu je zverejnený na webovom sídle Úradu na ochranu osobných údajov, Hraničná 12, 820 02 Bratislava. Úrad posúdi podnet do 30 dní, rozhodne do 90 dní alebo lehotu môže primerane predĺžiť."),
      ],
    },
    {
      heading: "10. Kontaktné údaje prevádzkovateľa",
      blocks: [
        p("V prípade akýchkoľvek otázok alebo pripomienok týkajúcich sa spracovania OÚ je možné prevádzkovateľa kontaktovať poštou alebo emailom:"),
        p("CITY GLORY s.r.o."),
        p("29. augusta 23, 811 09 Bratislava"),
        p("Email: bratislava@cityglory.sk"),
      ],
    },
    {
      heading: "11. Záverečné ustanovenia",
      blocks: [
        p("Tieto informácie nadobúdajú platnosť a účinnosť dňom 19.06.2023."),
        p("Prevádzkovateľ si vyhradzuje právo tieto pravidlá zmeniť v prípade zmeny spracúvania OÚ v spoločnosti a v prípade legislatívnej zmeny."),
      ],
    },
  ],
};

export const cookiesDoc: LegalDocument = {
  updated: "19.06.2023",
  sections: [
    {
      blocks: [
        p("V súlade s § 55 ods. 5 zákona NRSR č. 351/2011 Z. z. o elektronických komunikáciách v znení neskorších predpisov, prevádzkovateľ informuje o používaní cookies na stránke bratislava.cityglory.sk a o možnosti zmeny nastavenia internetového prehliadača pre prípad, že vám aktuálne nastavenie využívania cookies nevyhovuje."),
        p("Tieto zásady obsahujú informácie o tom, ako prevádzkovateľ používa súbory cookie a podobné technológie (ďalej len „cookies“)."),
        p("Web stránka prevádzkovateľa používa cookies, ktoré nám pomáhajú zabezpečiť lepšie služby. Používaním stránky prevádzkovateľa vyjadrujete prevádzkovateľovi súhlas s použitím cookies v súlade s nastavením prehliadača. Ak navštívite našu webovú stránku a v prehliadači je povolené prijímanie súborov cookie, považujeme to za prijatie našich podmienok používania súborov cookie. Inštrukcie na zmenu cookies nájdete v pomoci každého prehliadača."),
        p("Súbory cookie sú malé textové súbory, ktoré môžu byť do internetového prehliadača odosielané pri návšteve webových stránok a ukladané do vášho zariadenia (počítača alebo do iného zariadenia s prístupom na internet, ako napr. smartphone alebo tablet). Súbory cookie sa ukladajú do priečinka pre súbory vášho prehliadača. Cookies obvykle obsahujú názov webovej stránky, z ktorej pochádzajú, platnosť a hodnotu. Pri ďalšej návšteve stránky webový prehliadač znovu načíta súbory cookie a tieto informácie odošle späť webovej stránke, ktorá pôvodne cookies vytvorila. Cookies, ktoré prevádzkovateľ používa, nepoškodzujú váš počítač."),
        p("Cookies prevádzkovateľ používa s cieľom optimálne vytvárať a neustále skvalitňovať svoje služby, prispôsobiť ich vašim záujmom a potrebám a zlepšovať ich štruktúru a obsah. Použité môžu byť cookies dočasné (zostávajú uložené v prehliadači len do tej doby, než ho zavriete) a trvalé (zostávajú uložené v zariadení dlhšie (doba ponechania cookie v zariadení závisí na nastavení samotnej cookie a nastavení prehliadača) alebo kým ich ručne neodstránite)."),
        p("Základné súbory cookie tvoria základ pre prevádzku webovej stránky prevádzkovateľa a umožňujú používanie základných funkcií, akými sú napríklad zabezpečené oblasti alebo online platby. Základnými cookies sú napr. predvyplnenie formulárov pri opätovnej návšteve a pod. Bez týchto cookies nemôžeme poskytovať služby, ktoré tvoria základ našej stránky. Pokiaľ tieto cookies zakážete, nebudeme môcť zaručiť bezchybný chod stránky."),
        p("Funkčné súbory cookie nie sú nevyhnutné, ale pomáhajú nám vylepšiť funkčnosť našej webovej stránky. Ide napríklad o zapamätanie nastavení zvolených pri predchádzajúcej návšteve stránky, napr. rozloženie obsahu, výber lokality a pod., aby ste ich nemuseli znova nastavovať. Pomocou týchto cookies zisťujeme, či vám už bola ponúknutá určitá služba alebo poskytujeme informácie z vašej aktuálnej oblasti, ak súhlasíte so zdieľaním takýchto informácií. Hoci použitie týchto cookies záleží výhradne na vašom nastavení, ich prípadným vypnutím by ste mohli prísť o niektoré služby, ktoré by sme vám mohli poskytovať."),
        p("Cookies, ktoré prevádzkovateľ používa, si môžete nastaviť vo svojom webovom prehliadači. Väčšina internetových prehliadačov je pôvodne nastavená na automatické akceptovanie cookies. Toto nastavenie môžete zmeniť zablokovaním cookies alebo upozornením v prípade, že sa majú cookies poslať do vášho zariadenia. Inštrukcie na zmenu cookies nájdete v pomoci každého prehliadača. Ak používate rozličné zariadenia na prístup k stránkam (napr. počítač, smartphone, tablet), odporúčame každý prehliadač na každom zariadení prispôsobiť vašim preferenciám cookies."),
        p("Cookies môžete v prehliadači kontrolovať a/alebo odstrániť podľa uváženia - jednotlivo alebo všetky naraz, a to buď priamo (ak vie kde sú uložené) alebo pomocou prehliadača. Podrobnosti si pozrite na stránke aboutcookies.org."),
        p("Budeme rešpektovať, pokiaľ si prednastavené nastavenie cookies zmeníte. Vypnutie niektorých cookies však môže mať dopad na funkčnosť našej webovej stránky."),
      ],
    },
  ],
};
