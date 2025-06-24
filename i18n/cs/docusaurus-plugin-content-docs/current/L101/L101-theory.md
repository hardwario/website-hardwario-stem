---
slug: what-is-iot-theory
title: Teorie
---
import Image from '@theme/IdealImage';

**Časová dotace**: 10 min.

## Co to je STEM

STEM je zkratka **SCIENCE-TECHNOLOGY-ENGINEERING-MATHEMATICS**.

Nové věci se **učíme najednou**. Nové věci se **učíme na projektech z reálného života**.

**V rámci STEM výuky HARDWARIO se učíme na reálných projektech internetu věcí**.

## Co to je IoT

Internet věcí (anglicky Internet of Things, zkratka IoT) je označení pro síť fyzických zařízení, vozidel, domácích spotřebičů a dalších zařízení, která jsou vybavena elektronikou, softwarem, senzory, pohyblivými částmi a síťovou konektivitou, která umožňuje těmto zařízením se propojit a vyměňovat si data.

A také to je fenomén, bublina, hrozba a příležitost. Příležitost udělat svět bezpečnější, šetrnější, efektivnější a zábavnější.

**Definice podle HARDWARIO**:

**Fyzické věci připojené k internetu, propojené s dalšími věcmi a daty s cílem z toho všeho získat něco užitečného**.

### Ukázky

* [**Riziko nesprávné interpretace dat**](https://youtu.be/nwPtcqcqz00)
* [**Riziko nabourání se do soukromí**](https://youtu.be/_CQA3X-qNgA)

## V čem IoT pomáhá a jak nás ohrožuje

Internet věcí je tady pro to, aby nám pomáhal. Dnes se zejména dotýká těchto oblastí:

* Bezpečnost - víme co se děje v našich objektech, kde se nachází naše děti, ...
* Zdraví - regulujeme prostředí, ve kterém žijeme a pracujeme, rychleji a přesněji reagujeme na zdravotní stav, ...
* Ekonomika - lépe plánujeme, optimalizujeme procesy, usnadňujeme si život, ...
* Ekologie - šetříme zdroje i přírodu, ...
* Zábava - objevujeme nové formy zábavy, ...

Existují i rizika spojená s rozvojem IoT:

* Zneužití dat
* Nabourání se do soukromí
* Nesprávná interpretace dat
* Zahlcení přemírou špatně strukturovaných informací

IoT vlastně znamená, že věci okolo nás s námi mohou komunikovat - tedy posílat nám informace, případně si tyto informace vyměňovat samy. Již toto je ohromný posun kupředu, protože nám umožňuje výrazně zrychlit a zefektivnit mnoho činností, dělat informovaná a tedy lepší rozhodnutí, lépe plánovat svůj čas, zvládnout spoustu aktivit na dálku, aniž bychom museli složitě cestovat, nebo zajišťovat jejich ovládání prostřednictvím jiné osoby.

Prostě v IoT máme v rukou nástroj s ohromným potenciálem zlepšit naše životy.

## IoT hardware

### Co jsou to ty "věci"

Jsou to fyzická zařízení. která měří, ovládají, komunikují. Patří mezi ně zejména:

* Senzory
* Akční členy
* Ovladače

Jiným pohledem můžeme za THINGS označit komplexnější zařízení:

* Vozidla
* Průmyslové stroje
* Domácí spotřebiče

**Důležité!**

Společnými znaky THINGS ale vždy jsou:

* Jde o fyzické zařízení
* Je vybavené elektronikou
* Je vybavené síťovou konektivitou
* Je jednoznačně identifikovatelné

### Centrální IoT zařízení

Nezbytnou podmínkou internetu věcí je, že jsou zařízení připojená k internetu. V mnoha případech je ale výhodnější zařízení připojit k internetu skrze nějaký centrální prvek - Hub. V takovém případě komunikují zařízení neinternetovým protokolem mezi sebou a s Hubem a k internetu je připojen pouze Hub.

Na trhu existuje mnoho centrálních Hubů, mezi ty nejpopulárnější v oblasti open-source hnutí patří Huby postavené na Raspberry Pi, nebo v Česku vyvíjený router Turris.

### Ostatní IoT hardware

Na vzestupu jsou hlasoví asistenti jako Google Assistant, Amazon Alexa, Microsoft Cortana nebo Siri od společnosti Apple. Fyzická zařízení, ve kterých asistenti běží, začínají být důležitou součástí IoT řešení, zejména v domácnostech.

## IoT software

### Firmware

**Důležité!**

Firmware je software pro řízení nějakého vestavěného (embedded) systému. Díky firmware se zařízení chová tak, jak chceme. Například každých 15 min. měří úroveň CO2 a každou hodinu odešle naměřené vzorky do cloudu.

Důležitou vlastností firmware je řízení spotřeby zařízení, což je kritická záležitost zejména u bateriově napájených produktů. I proto se doporučuje psát firmware v úsporných programovacích jazycích (např. C), aby samotné výpočetní operace netrvaly příliš dlouho a neubíraly potřebnou energii.

Vzhledem k paměťovým možnostem embedded zařízení je také nutné brát ohled na velikost kódu. Psaní firmware je tedy velmi náročná disciplína.

### IoT platformy

Přidaná hodnota internetu věcí netkví v IoT zařízeních, ale v analýzách získaných dat z těchto zařízení. Nashromážděná data se označují jako tzv. Big Data, a ta jsou ukládána a zpracovávána v backendových platformách. Dnes se již ustoupilo od provozování vlastních backendů a využívají se vysoce dostupná a škálovatelná řešení od Amazonu (AWS), Microsoftu (Azure) nebo Google. Toto nemusí platit pro uzavřené systémy, kdy výrobce nabízí kompletní řešení sestávající z hardware a aplikace a provozuje systém na vlastní infrastruktuře.

### IoT aplikace

Nabídka aplikací pro IoT je obrovská a dynamicky se rozšiřující. Velcí hráči provozující IoT platformy nabízejí vlastní řešení (např. Microsoft a jeho IoT Central), ale existuje mnoho vynikajících IoT aplikací vyvíjených menšími společnostmi, jako např. IFTTT, Ubidots, Blynk atd. Drtivá většina aplikací jsou v desktopové i mobilní variantě pro chytré telefony.

## IoT konektivita

### Přenosové protokoly

Protokol je v informatice konvence nebo standard, podle kterého probíhá elektronická komunikace a přenos dat mezi dvěma koncovými body (realizované nejčastěji počítači). Jednodušeji řečeno je to jazyk, kterým rozumí všechny prvky nějakého komunikačního systému.

V rámci internetu se používá mnoho protokolů, mezi hlavní patří rodina přenosových protokolů TCP/IP (IP, TCP, UDP ad.). Všeobecně nejznámějšími jsou aplikační protokoly jako např. HTTPS nebo IMAP.

Pro komunikaci v IoT se používá celá řada protokolů, my se ale zaměříme na protokol MQTT, který se stal standardem, je podporován téměř všemi IoT hráči a je používán v naší stavebnici HARDWARIO TOWER.

### MQTT

:::tip

MQTT (z anglického Message Queuing Telemetry Transport) je ISO standardizovaný protokol postavený na publish-subscribe (publikuj-odebírej) principu. A jak může vypadat do systému publikovaná zpráva? Skládá se z tzv. topiku (Topic) a vlastního obsahu, např.:

:::

* Topic: `mujdum/prizemi/vypinace/vypinac1`
* Obsah: `1`

Zpráva tedy říká, že vypínač jedna ze skupiny vypínačů v přízemí mého domu je ve stavu 1, což bývá nejčastěji ZAPNUTO.

:::info

Pokud se k této zprávě přihlásí konkrétní žárovka, pak bude svítit do doby, než dorazí zpráva mujdum/prizemi/vypinace/vypinac1 0, nebo když se rozbije :)

:::

Prvky MQTT systému komunikují se serverem, který se často nazývá brokerem. Je to vlastně pošťák, který doručuje zprávy z publikujích zařízení k těm, které se přihlásily k jejich odběru. My používáme open-source [Mosquitto broker](https://mosquitto.org/).

### Bezdrátové přenosy

Už víme jakým jazykem spolu IoT zařízení komunikují a kdo komunikaci řídí. Zprávy se ale musí mezi IoT zařízeními nějak přenášet, a to bezdrátově nebo drátově. Bezdrátové systémy si pro zjednodušení výuky rozdělíme na lokální (dosah v řádech metrů) a globální (dosah v řádech kilometrů).

#### Lokální bezdrátové přenosy

Ve světě IoT se pro lokální bezdrátové přenosy používají všeobecně známé standardy, např. Wi-Fi nebo Bluetooth. Existují rovněž speciální bezdrátové technologie jako [ZigBee](https://cs.wikipedia.org/wiki/ZigBee) nebo [Z-Wave](https://en.wikipedia.org/wiki/Z-Wave), které mají vlastní komunikační protokoly. Důležitým aspektem pro bezdrátové přenosy je volba frekvenčního pásma. Ta ovlivňuje kvalitu přenosu - dosah, spolehlivost a spotřebu.

Pro IoT zařízení, které většinou nepřenášejí velká data, se nejvíce hodí bezdrátové přenosy v tzv. Sub-GHz pásmu. V tomto pásmu jsou pro tyto účely vyhrazené bezlicenční frekvence, pro EU např. 868 MHz. Ve srovnání s Wi-Fi (provozované na frekvencích 2.4 a 5 GHz) má Sub-GHz téměř dvojnásobně vyšší dosah, vyšší spolehlivost (díky nižší frekvenci a méně zařízením používajícím toto pásmo) a výrazně nižšími nároky na výkon, tzn. s nižší spotřebou. Hodí se tedy pro zařízení běžící na baterie, jako například stavebnici HARDWARIO TOWER.

#### Globální bezdrátové přenosy

Globální přenosové systémy se používají zejména pro mobilní objekty nebo zařízení instalovaná v místech bez připojení k internetu.

V současnosti nejvíce používanými systémy pro globální bezdrátové přenosy jsou technologie mobilních operátorů, tedy 2G (GPRS, EDGE), 3G a 4G (LTE) sítě. IoT zařízení jsou vybavena SIM kartou a připojují se k internetu skrze zvolenou mobilní síť. Nevýhodou těchto technologií je náročnost na energii, nehodí se tedy pro bateriově napájená zařízení. Naštěstí se začaly budovat nové IoT sítě souhrnně označované jako LPWAN.

**Důležité!**

[LPWAN](https://en.wikipedia.org/wiki/Low-power_wide-area_network) je z anglického Low-Power Wide Area Network, tzn. sítě s nízkými nároky na energii pro komunikaci a pokrývající větší území. Patří mezi ně [NB-IoT](https://en.wikipedia.org/wiki/Narrowband_IoT), [LoRaWAN](https://en.wikipedia.org/wiki/LoRa) a [Sigfox](https://en.wikipedia.org/wiki/Sigfox). Každá z těchto sítí má svá specifika, všechny jsou ale vhodné pro IoT zařízení napájené z baterií a provozované v místech, kde není standardní připojení k internetu (např. Wi-Fi). Proto nabízejí perfektní IoT řešení v zemědělství, lesnictví, vodním hospodářství.

Ukázky

* MQTT: https://youtu.be/EIxdz-2rhLs

### Drátové přenosy

Data z IoT zařízení jde samozřejmě přenášet rovněž drátově. Pokud to podmínky umožňují, tak můžete vaše IoT zařízení připojit k internetu pomocí ethernetu. Častěji se ale setkáváme s řešením, kdy se jednotlivá IoT zařízení připojují drátově k Hubu, který je následně připojen do internetu. V takových případech se používají standardy [I²C](https://cs.wikipedia.org/wiki/I%C2%B2C), [1-Wire](https://cs.wikipedia.org/wiki/1-Wire), [RS-232](https://cs.wikipedia.org/wiki/RS-232), [RS485](https://cs.wikipedia.org/wiki/RS-485).
