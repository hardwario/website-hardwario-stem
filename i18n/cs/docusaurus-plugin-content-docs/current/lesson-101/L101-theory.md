---
slug: what-is-iot-theory
title: Teorie
title_meta: "Teorie (L101: Co je to internet věcí – IoT)"
---
import Image from '@theme/IdealImage';

**Časová dotace**: 10 min.

## Co to je STEM

STEM je zkratka anglických slov **Science, Technology, Engineering, Mathematics** (přírodní vědy, technologie, technika, matematika).

Jednotlivé obory se **učíme společně**. Nové věci se **učíme na projektech z reálného života**.

**Ve STEM výuce HARDWARIO se učíme na reálných projektech internetu věcí.**

## Co to je IoT

Internet věcí (anglicky Internet of Things, zkratka IoT) je označení pro síť fyzických zařízení, vozidel, domácích spotřebičů a dalších zařízení, která jsou vybavena elektronikou, softwarem, senzory, pohyblivými částmi a síťovou konektivitou, díky které se mohou propojit a vyměňovat si data.

A také to je fenomén, bublina, hrozba a příležitost. Příležitost udělat svět bezpečnější, šetrnější, efektivnější a zábavnější.

**Definice podle HARDWARIO**:

**Fyzické věci připojené k internetu, propojené s dalšími věcmi a daty s cílem z toho všeho získat něco užitečného**.

### Ukázky

* [**Riziko nesprávné interpretace dat**](https://youtu.be/nwPtcqcqz00)
* [**Riziko narušení soukromí**](https://youtu.be/_CQA3X-qNgA)

## V čem IoT pomáhá a jak nás ohrožuje

Internet věcí je tu proto, aby nám pomáhal. Dnes se týká hlavně těchto oblastí:

* Bezpečnost: víme, co se děje v našich objektech, kde jsou naše děti atd.
* Zdraví: regulujeme prostředí, ve kterém žijeme a pracujeme, rychleji a přesněji reagujeme na zdravotní stav atd.
* Ekonomika: lépe plánujeme, optimalizujeme procesy, usnadňujeme si život atd.
* Ekologie: šetříme zdroje i přírodu atd.
* Zábava: objevujeme nové formy zábavy atd.

Existují i rizika spojená s rozvojem IoT:

* Zneužití dat
* Narušení soukromí
* Nesprávná interpretace dat
* Zahlcení přemírou špatně strukturovaných informací

IoT vlastně znamená, že věci kolem nás s námi mohou komunikovat, tedy posílat nám informace, případně si je vyměňovat mezi sebou. Už to je obrovský krok kupředu: díky tomu můžeme výrazně zrychlit a zefektivnit mnoho činností, dělat informovaná, a tedy lepší rozhodnutí, lépe plánovat svůj čas a zvládnout spoustu věcí na dálku, aniž bychom museli složitě cestovat nebo je za nás musel ovládat někdo jiný.

Zkrátka, v IoT máme v rukou nástroj s ohromným potenciálem zlepšit naše životy.

## IoT hardware

### Co jsou to ty „věci“

Jsou to fyzická zařízení, která měří, ovládají a komunikují. Patří mezi ně zejména:

* Senzory
* Akční členy
* Ovladače

Z jiného pohledu můžeme za věci (things) považovat i složitější zařízení:

* Vozidla
* Průmyslové stroje
* Domácí spotřebiče

**Důležité!**

Všechny věci (things) však mají vždy tyto společné znaky:

* Jde o fyzické zařízení
* Je vybavené elektronikou
* Je vybavené síťovou konektivitou
* Je jednoznačně identifikovatelné

### Centrální IoT zařízení

Nezbytnou podmínkou internetu věcí je, že jsou zařízení připojená k internetu. Často je ale výhodnější připojit je k internetu přes nějaký centrální prvek, tzv. hub. Zařízení pak mezi sebou i s hubem komunikují jiným než internetovým protokolem a k internetu je připojen jen hub.

Na trhu je mnoho centrálních hubů. V open-source komunitě patří k nejoblíbenějším huby postavené na Raspberry Pi nebo router Turris vyvíjený v Česku.

### Ostatní IoT hardware

Na vzestupu jsou hlasoví asistenti jako Google Assistant, Amazon Alexa, Microsoft Cortana nebo Siri od společnosti Apple. Fyzická zařízení, ve kterých asistenti běží, začínají být důležitou součástí IoT řešení, zejména v domácnostech.

## IoT software

### Firmware

**Důležité!**

Firmware je software, který řídí vestavěný (embedded) systém. Díky firmwaru se zařízení chová tak, jak chceme: například každých 15 minut změří koncentraci CO2 a každou hodinu odešle naměřené hodnoty do cloudu.

Důležitým úkolem firmwaru je řídit spotřebu zařízení, což je zásadní hlavně u výrobků napájených z baterií. I proto se firmware doporučuje psát v efektivních programovacích jazycích (např. v jazyce C), aby samotné výpočty netrvaly příliš dlouho a zbytečně nevybíjely baterii.

Kvůli omezené paměti vestavěných zařízení je také nutné hlídat velikost kódu. Psaní firmwaru je tedy velmi náročná disciplína.

### IoT platformy

Přidaná hodnota internetu věcí netkví v samotných zařízeních, ale v analýze dat, která z nich získáme. Nashromážděným datům se říká big data a ukládají se a zpracovávají na backendových platformách. Od provozu vlastních backendů se dnes již ustoupilo a využívají se vysoce dostupná a škálovatelná řešení od Amazonu (AWS), Microsoftu (Azure) nebo Googlu. To nemusí platit pro uzavřené systémy, ve kterých výrobce nabízí kompletní řešení z hardwaru a aplikace a provozuje ho na vlastní infrastruktuře.

### IoT aplikace

Nabídka aplikací pro IoT je obrovská a dynamicky se rozšiřuje. Velcí hráči, kteří provozují IoT platformy, nabízejí vlastní řešení (např. Microsoft a jeho IoT Central), ale existuje i mnoho vynikajících IoT aplikací od menších společností, například IFTTT nebo Ubidots. Drtivá většina aplikací má desktopovou i mobilní verzi pro chytré telefony.

## IoT konektivita

### Přenosové protokoly

Protokol je v informatice konvence nebo standard, podle kterého probíhá elektronická komunikace a přenos dat mezi dvěma koncovými body (nejčastěji počítači). Jednodušeji řečeno je to jazyk, kterému rozumějí všechny prvky komunikačního systému.

Na internetu se používá mnoho protokolů, mezi hlavní patří rodina přenosových protokolů TCP/IP (IP, TCP, UDP a další). Nejznámější jsou aplikační protokoly, například HTTPS nebo IMAP.

V IoT se ke komunikaci používá celá řada protokolů. My se zaměříme na protokol MQTT, který se stal standardem, podporují ho téměř všichni hráči na trhu IoT a používá ho i stavebnice HARDWARIO TOWER.

### MQTT

:::tip

MQTT (z anglického Message Queuing Telemetry Transport) je protokol standardizovaný ISO a postavený na principu publish-subscribe (publikuj-odebírej). Jak může vypadat zpráva publikovaná do systému? Skládá se z tzv. topicu (Topic) a vlastního obsahu, například:

:::

* Topic: `mujdum/prizemi/vypinace/vypinac1`
* Obsah: `1`

Zpráva tedy říká, že vypínač č. 1 ze skupiny vypínačů v přízemí mého domu je ve stavu 1, což obvykle znamená ZAPNUTO.

:::info

Pokud se k odběru této zprávy přihlásí konkrétní žárovka, bude svítit, dokud nedorazí zpráva mujdum/prizemi/vypinace/vypinac1 0, nebo dokud se nerozbije :)

:::

Prvky systému MQTT komunikují se serverem, kterému se často říká broker. Je to vlastně pošťák, který doručuje zprávy z publikujících zařízení k těm, které se přihlásily k jejich odběru. My používáme open-source broker [Mosquitto](https://mosquitto.org/).

### Bezdrátové přenosy

Už víme, jakým jazykem spolu IoT zařízení komunikují a kdo komunikaci řídí. Zprávy se ale musí mezi IoT zařízeními nějak přenášet, a to bezdrátově nebo drátově. Bezdrátové systémy si pro zjednodušení výuky rozdělíme na lokální (dosah v řádech metrů) a globální (dosah v řádech kilometrů).

#### Lokální bezdrátové přenosy

Ve světě IoT se pro lokální bezdrátové přenosy používají všeobecně známé standardy, např. Wi-Fi nebo Bluetooth. Existují rovněž speciální bezdrátové technologie jako [ZigBee](https://cs.wikipedia.org/wiki/ZigBee) nebo [Z-Wave](https://en.wikipedia.org/wiki/Z-Wave), které mají vlastní komunikační protokoly. Pro bezdrátový přenos je důležitá volba frekvenčního pásma, protože ovlivňuje kvalitu přenosu: dosah, spolehlivost a spotřebu.

Pro IoT zařízení, která většinou nepřenášejí velké objemy dat, se nejvíce hodí bezdrátový přenos v tzv. pásmu sub-GHz. V tomto pásmu jsou pro tyto účely vyhrazené bezlicenční frekvence, pro EU např. 868 MHz. Ve srovnání s Wi-Fi (provozovanou na frekvencích 2,4 a 5 GHz) má pásmo sub-GHz téměř dvojnásobný dosah, vyšší spolehlivost (díky nižší frekvenci a méně zařízením používajícím toto pásmo) a výrazně nižší nároky na výkon, tedy nižší spotřebu. Proto se hodí pro zařízení napájená z baterií, například pro stavebnici HARDWARIO TOWER.

#### Globální bezdrátové přenosy

Globální přenosové systémy se používají zejména pro mobilní objekty nebo zařízení instalovaná v místech bez připojení k internetu.

Pro globální bezdrátové přenosy se dnes nejčastěji používají sítě mobilních operátorů, tedy 2G (GPRS, EDGE), 3G a 4G (LTE). IoT zařízení mají SIM kartu a k internetu se připojují přes zvolenou mobilní síť. Nevýhodou těchto technologií je vysoká spotřeba energie, proto se nehodí pro zařízení napájená z baterií. Naštěstí se začaly budovat nové IoT sítě souhrnně označované jako LPWAN.

**Důležité!**

[LPWAN](https://en.wikipedia.org/wiki/Low-power_wide-area_network) je zkratka anglického Low-Power Wide Area Network, tedy síť s nízkou spotřebou energie, která pokrývá velké území. Patří mezi ně [NB-IoT](https://en.wikipedia.org/wiki/Narrowband_IoT), [LoRaWAN](https://en.wikipedia.org/wiki/LoRa) a [Sigfox](https://en.wikipedia.org/wiki/Sigfox). Každá z těchto sítí má svá specifika, všechny jsou ale vhodné pro IoT zařízení napájená z baterií a provozovaná v místech, kde není standardní připojení k internetu (např. Wi-Fi). Proto se výborně hodí pro IoT řešení v zemědělství, lesnictví nebo vodním hospodářství.

Ukázky

* MQTT: https://youtu.be/EIxdz-2rhLs

### Drátové přenosy

Data z IoT zařízení lze samozřejmě přenášet i drátově. Pokud to podmínky umožňují, můžete své IoT zařízení připojit k internetu pomocí ethernetu. Častěji se ale setkáváme s řešením, kdy se jednotlivá IoT zařízení připojují drátově k hubu, který je pak připojen k internetu. V takových případech se používají standardy [I²C](https://cs.wikipedia.org/wiki/I%C2%B2C), [1-Wire](https://cs.wikipedia.org/wiki/1-Wire), [RS-232](https://cs.wikipedia.org/wiki/RS-232) a [RS-485](https://cs.wikipedia.org/wiki/RS-485).
