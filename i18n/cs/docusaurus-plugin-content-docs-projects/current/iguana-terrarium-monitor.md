---
slug: iguana-terrarium-monitor
title: Monitor terária pro leguány
---

## Úvod


Ať už máš doma leguána, želvu, hada nebo gekona, určitě chceš, aby byl u tebe doma co nejvíc spoko. 👌🦎 Sleduj klima v terárku a zjisti, jestli se má zelenáč ideální podmínky pro život.


S tímhle projektem se naučíš **měřit čtyři klimatické hodnoty a zobrazit je v grafech** – teplotu, vlhkost, světelnost a tlak vzduchu. Za odměnu ti tvoji zelení kámoši třeba povypráví historky svých dinosauřích předků. 🦖 Nebo něco na ten způsob.

Pokud máš Start Kit, budeš k němu potřebovat ještě [Climate Module](https://shop.hardwario.com/p/climate-module/). **Kompletní** výbavu najdeš v sadě [Clime Set](https://www.hardwario.store/p/clime-set).


## Připrav si krabičku

1. Clime Set sestav a spáruj: jestli to děláš poprvé, [připravili jsme k tomu jednoduchou příručku](/cs/handbook/) – postup je stejný jako u Start Setu. Na Core Module potřebuješ firmware **radio climate monitor**. Pokud nevíš, jak si firmware stáhnout nebo co to je, <a href="https://docs.hardwario.com/tower/firmware-development/hardwario-extension-tutorial/#flash-firmware" target="_blank">zjistíš to tady</a>.
2. Změny teploty, světla, vlhkosti a tlaku vzduchu uvidíš v Playgroundu v záložce **Messages**.

![messages](https://res.cloudinary.com/lukasfabik/image/upload/v1573049733/projects/Hlidej-prostredi-v-terarku-pro-sveho-leguana/image4.png)

## Nastav si Node-RED

1. Programování odstartuj v Node-RED. Nejdřív v Playgroundu klikni na záložku **Functions**.
2. Na volnou plochu si přetáhni světle fialový node (bublinu) s názvem **MQTT**. Najdeš ho v sekci Input.
3. Node rozklikni dvojklikem. V řádku **Topic** určíš, co chceš, aby barevný ukazatel zobrazoval. Teď to bude teplota. Proto do řádku zkopíruj zprávu s teplotou ze záložky Messages (bez čísla). Nebo klidně použij tohle:


```
node/climate-monitor:0/thermometer/0:0/temperature
```

![Node](https://res.cloudinary.com/lukasfabik/image/upload/v1573049733/projects/Hlidej-prostredi-v-terarku-pro-sveho-leguana/image6.png)

Potvrď tlačítkem **Done**.

4. Vedle nodu postav druhý, světle modrý s názvem **Gauge** (ukazatel). Najdeš ho v sekci Dashboard. Tímhle nodem určíš, jak bude naměřená teplota znázorněná na obrazovce.
5. Na node Gauge dvakrát klikni. V řádku **Range** si nastavíš, jaké rozmezí teploty na ukazateli uvidíš. Postačí ti 0 až 40 °C.

Na řádku **Label** si graf libovolně přejmenuj a na řádku **Value format** doplň jednotku teploty, tedy °C. Jestli chceš, vyber si i barvu ukazatele na řádku **Colour gradient**.

![label](https://res.cloudinary.com/lukasfabik/image/upload/v1573049734/projects/Hlidej-prostredi-v-terarku-pro-sveho-leguana/image8.png)

Potvrď tlačítkem **Done**.

6. Měření teploty máš ready, tak pojď na další hodnoty. Pod nody pro měření teploty přidej další dva stejné nody, tedy **MQTT** a **Gauge**.
7. Do nodu **MQTT** tentokrát zkopíruj Topic pro měření vlhkosti, vypadá takhle: node/climate-monitor:0/hygrometer/0:4/relative-humidity.

V novém nodu **Gauge** si nastav **Range** 0 až 100 a do **Value format** dej % (vlhkost se totiž měří v procentech). Nezapomeň si ukazatel pojmenovat, případně vyber barvu.

![value format](https://res.cloudinary.com/lukasfabik/image/upload/v1573049734/projects/Hlidej-prostredi-v-terarku-pro-sveho-leguana/image7.png)

8. Teď jdeme na ukazatel světla. 💡 Postup bude úplně stejný – jeden node **MQTT** a jeden node **Gauge**.
9. Do **MQTT** zkopíruj tenhle topic: node/climate-monitor:0/lux-meter/0:0/illuminance
   V **Gauge** nastav tentokrát rozmezí 0 až 10 000 a do **Value format** jednotku světla lx (takzvaný lux). A chceš-li, vyber opět jméno a barvičku.

![nastaveni value format](https://res.cloudinary.com/lukasfabik/image/upload/v1573049734/projects/Hlidej-prostredi-v-terarku-pro-sveho-leguana/image14.png)

10. 3 ze 4 kroků máš za sebou, tak přihoď ještě poslední hodnotu na měření: tlak vzduchu. Opět přihoď jeden node **MQTT** a jeden **Gauge**.
11. Do MQTT zkopíruj **Topic** pro měření tlaku vzduchu:


```
node/climate-monitor:0/barometer/0:0/pressure
```

A do nového **Gauge** opět přidej rozmezí 0 až 10 000. Jednotku tentokrát nastavovat nemusíš, ale jméno a barvu klidně přidej.

![](https://res.cloudinary.com/lukasfabik/image/upload/v1573049734/projects/Hlidej-prostredi-v-terarku-pro-sveho-leguana/image9.png)

12. Abys neviděl jenom aktuální čísla, přidej ke třem hodnotám ještě grafy, které ti přehledně ukážou, jak se vlhkost, světelnost a tlak vzduchu vyvíjely za poslední hodinu. 📈

Pod nody Gauge u vlhkosti, světelnosti a tlaku proto přidej po jednom nodu **Chart** ze sekce Dashboard.

13. Postupně si všechny tři nody rozklikni a v **Label** je pojmenuj stejně jako přilehlé nody Gauge. Do **X-axis** vždycky nastav, za jaký časový úsek chceš zobrazovat výsledky (hodina už by tam měla být automaticky nastavená).

Do **Y-axis** pak vyplň stejná rozmezí, jaká jsi dával do přilehlých Gauge, takže u vlhkosti 0 až 100, u teploty a světelnosti 0 až 10 000.

![y axis](https://res.cloudinary.com/lukasfabik/image/upload/v1573049733/projects/Hlidej-prostredi-v-terarku-pro-sveho-leguana/image5.png)

A je to! Než se pustíš do měření, přidej ještě jednu vychytanou funkci – virtuálního hlídače.

## Přidej kontrolku ideální teploty

Virtuální hlídač tě upozorní vždy, když ještěrák nebude mít v terárku tu správnou teplotu. 🐍 K jeho sestavení budeš potřebovat několik nodů.

1. Nad všechno, co jsi vytvořil, přidej node **Numeric** ze sekce Dashboard – má na sobě napsáno 123.

Rozklikni ho a jeho **Range** a **Value format** vyplň úplně stejně jako u prvního Gauge. Pokud si to už nepamatuješ, mrkni na obrázek dole. Nezapomeň ještě node v Labelu pojmenovat, třeba jako Ideální teplota.

![value format](https://res.cloudinary.com/lukasfabik/image/upload/v1573049734/projects/Hlidej-prostredi-v-terarku-pro-sveho-leguana/image13.png)

2. Hned vedle přidej další node, tentokrát to bude nová tvář v podobě nodu **Change** ze sekce Function.

Rozklikni si ho a nastav do něj hned pod sebe **flow.optimal** a **msg.payload** (tak, jak to je na obrázku).

**K čemu to je**: Tyhle dva nody (Numeric a Change) ti umožní nastavit ideální teplotu, na jejíž překročení tě bude hlídač upozorňovat. 👮 Pomocí nodu Numeric si budeš v Dashboardu určovat optimální teplotu a node Change ji nastaví do proměnné flow.optimal. S tou pracují další nody, které si umístíme nyní.

![optimalni teplota](https://res.cloudinary.com/lukasfabik/image/upload/v1573049734/projects/Hlidej-prostredi-v-terarku-pro-sveho-leguana/image12.png)

3. Teď je čas na node **Switch**, který taky najdeš v sekci **Function**. Přetáhni ho vedle MQTT nodu pro měření teploty a rozklikni.

V něm nastavíš tři různé situace, které při sledování ideální teploty můžou nastat. Tedy že teplota je akorát, že je moc nízká a že je moc vysoká.

4. Dvakrát klikni na malé tlačítko **+add**, ať máš v nodu tři možné situace. A potom je uprav přesně podle obrázku níž. Všimni si, že na každém řádku je „**flow.optimal**”. Program vždy zkontroluje, jaká je zrovna hodnota této proměnné a podle toho pozná správnou situaci.

![flow optimal](https://res.cloudinary.com/lukasfabik/image/upload/v1573049734/projects/Hlidej-prostredi-v-terarku-pro-sveho-leguana/image10.png)

5. Teď je čas nastavit zprávy, které tě upozorní na všechny tři možné situace. Uděláš to tak, že vedle nodu Switch umístíš tři nody **Change** pod sebou.
6. Všechny tři nody Change si postupně rozklikni a vepiš do nich zprávy, třeba “Teplota je moc vysoká/nízká/akorát”.

Pokud jsi node **Switch** nastavil přesně podle našeho obrázku, tak do vrchního nodu **Change** napiš zprávu pro příliš vysokou teplotu, do prostředního pro příliš nízkou a do spodního pro optimální teplotu.

![node change](https://res.cloudinary.com/lukasfabik/image/upload/v1573049734/projects/Hlidej-prostredi-v-terarku-pro-sveho-leguana/image11.png)

7. A teď už jen jeden node a můžeme to celé spustit! 🏎️ Za tři nody Change přidej node **Text** ze sekce **Dashboard**. Ten slouží k tomu, aby se ti zobrazovaly zprávy, které sis v předchozím kroku nastavil.
8. Node si rozklikni a pojmenuj ho na řádku **Label** třeba Stav teploty.

![label stav teploty](https://res.cloudinary.com/lukasfabik/image/upload/v1573049733/projects/Hlidej-prostredi-v-terarku-pro-sveho-leguana/image1.png)

9. A je to! Teď celý flow hezky pospojuj podle našeho obrázku. Nebo pokud se na to cítíš, pospojuj ho sám, a pak si ho podle našeho obrázku jen zkontroluj. 💪

![pospojovani flow](https://res.cloudinary.com/lukasfabik/image/upload/v1573049733/projects/Hlidej-prostredi-v-terarku-pro-sveho-leguana/image2.png)

10. Klikni na tlačítko **Deploy** vpravo nahoře a celý tenhle mega flow rozjeď. V Dashboardu se ti budou naměřené hodnoty zobrazovat zhruba takhle:

![deploy](https://res.cloudinary.com/lukasfabik/image/upload/v1573049733/projects/Hlidej-prostredi-v-terarku-pro-sveho-leguana/image3.png)

## A akce!

1. Krabičku izolepou pořádně upevni **do terárka tvého plazího bráchy nebo ségry**. 🏡
2. V Dashboardu najdi **nastavení optimální teploty** a pomocí dvou šipek si vyber takovou, kterou tvůj leguán, had nebo želva potřebují. Ideální hodnotu pro svého mazlíčka si dohledej na internetu.

![nastaveni optimalni teploty](https://res.cloudinary.com/lukasfabik/image/upload/v1573049734/projects/Hlidej-prostredi-v-terarku-pro-sveho-leguana/image15.png)

3. Kontroluj, zda má tvůj kámoš ideální teplotu, a sleduj, jak se **zvyšuje a snižuje** tlak, světelnost a vlhkost.
4. Pokud je naměřená teplota příliš odlišná od té v terárku, zajdi se poradit do zverimexu nebo k veterináři, ať je tvůj plazák **maximálně spoko**. 👌
