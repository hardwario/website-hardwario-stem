---
slug: iguana-terrarium-monitor
title: Monitor terária pro leguány
---
import Image from '@theme/IdealImage';

## Úvod


Ať už máte doma leguána, želvu, hada nebo gekona, určitě chcete, aby se u vás cítil co nejlíp. 👌🦎 Sledujte klima v teráriu a zjistěte, jestli má váš zelený mazlíček ideální podmínky pro život.


S tímto projektem se naučíte **měřit čtyři klimatické veličiny a zobrazit je v grafech**: teplotu, vlhkost, osvětlenost a tlak vzduchu. Za odměnu vám možná vaši zelení kamarádi povyprávějí historky svých dinosauřích předků. 🦖 Nebo něco takového.

Pokud máte Sadu Start, budete k ní potřebovat ještě [Climate Module](https://www.hardwario.store/cz/p/climate-module/). **Kompletní** výbavu najdete v [Sadě Clime](https://www.hardwario.store/cz/p/clime-set).


## Připravte si krabičku

1. Sestavte a spárujte Sadu Clime. Pokud to děláte poprvé, [máme pro vás jednoduchou příručku](/mini-course/lesson-1/). Postup je stejný jako u Sady Start. Do modulu Core Module potřebujete firmware **twr-radio-climate-monitor**. Pokud nevíte, jak si firmware stáhnout nebo co to je, <a href="https://docs.hardwario.com/tower/desktop-programming/firmware-flashing/" target="_blank">najdete to tady</a>.
2. Změny teploty, osvětlenosti, vlhkosti a tlaku vzduchu uvidíte v Playgroundu v záložce **Messages**.

<div class="container"> <div class="row"> <Image img={require('./img/iguana-terrarium-monitor/iguana-terrarium-monitor-1.webp')} alt="Záložka Messages v Playgroundu s topicy climate-monitor a hodnotami teploty, orientace a přítomnosti"/> </div> </div>

## Nastavte si Node-RED

1. Programovat začnete v Node-RED. Nejdřív v Playgroundu klikněte na záložku **Functions**.
2. Na prázdnou plochu přetáhněte světle fialový uzel (bublinu) s názvem **mqtt in**. Najdete ho v sekci network.
3. Uzel otevřete dvojklikem. V řádku **Topic** určíte, co má barevný ukazatel zobrazovat. Teď to bude teplota. Do řádku proto zkopírujte zprávu s teplotou ze záložky Messages (bez čísla). Nebo klidně použijte tuto:


```
node/climate-monitor:0/thermometer/0:0/temperature
```

<div class="container"> <div class="row"> <Image img={require('./img/iguana-terrarium-monitor/iguana-terrarium-monitor-2.webp')} alt="Dialog Edit mqtt in node s topicem teploty z climate-monitor ve zvýrazněném poli Topic"/> </div> </div>

Potvrďte tlačítkem **Done**.

4. Vedle něj umístěte druhý, světle modrý uzel s názvem **Gauge** (ukazatel). Najdete ho v sekci Dashboard. Tímto uzlem určíte, jak se naměřená teplota zobrazí na obrazovce.
5. Na uzel Gauge dvakrát klikněte. V řádku **Range** nastavíte, jaký rozsah teplot bude ukazatel zobrazovat. Postačí 0 až 40 °C.

V řádku **Label** ukazatel libovolně pojmenujte a do řádku **Value format** doplňte jednotku teploty, tedy °C. Pokud chcete, vyberte si v řádku **Colour gradient** i barvu ukazatele.

<div class="container"> <div class="row"> <Image img={require('./img/iguana-terrarium-monitor/iguana-terrarium-monitor-3.webp')} alt="Dialog Edit gauge node pro teplotu: zvýrazněná pole Label, formát hodnoty se °C a rozsah 0 až 40"/> </div> </div>

Potvrďte tlačítkem **Done**.

6. Měření teploty máte hotové, tak se pusťte do dalších veličin. Pod uzly pro měření teploty přidejte další dva stejné uzly, tedy **MQTT** a **Gauge**.
7. Do uzlu **MQTT** tentokrát zkopírujte topic pro měření vlhkosti, který vypadá takto: node/climate-monitor:0/hygrometer/0:4/relative-humidity.

V novém uzlu **Gauge** nastavte **Range** 0 až 100 a do **Value format** zadejte % (vlhkost se totiž měří v procentech). Nezapomeňte ukazatel pojmenovat, případně mu vyberte barvu.

<div class="container"> <div class="row"> <Image img={require('./img/iguana-terrarium-monitor/iguana-terrarium-monitor-4.webp')} alt="Uzel MQTT pro vlhkost se zvýrazněným ukazatelem Gauge; dialog ukazuje Label, formát v procentech a rozsah 0 až 100"/> </div> </div>

8. Teď přijde na řadu ukazatel osvětlenosti. 💡 Postup bude úplně stejný: jeden uzel **MQTT** a jeden uzel **Gauge**.
9. Do uzlu **MQTT** zkopírujte tento topic: node/climate-monitor:0/lux-meter/0:0/illuminance
   V uzlu **Gauge** tentokrát nastavte rozsah 0 až 10 000 a do **Value format** zadejte jednotku osvětlenosti lx (lux). Pokud chcete, opět vyberte název a barvu.

<div class="container"> <div class="row"> <Image img={require('./img/iguana-terrarium-monitor/iguana-terrarium-monitor-5.webp')} alt="Uzel MQTT pro osvětlenost se zvýrazněným ukazatelem Gauge; dialog ukazuje formát v lx a rozsah 0 až 10000"/> </div> </div>

10. Tři ze čtyř veličin máte za sebou, zbývá poslední: tlak vzduchu. Opět přidejte jeden uzel **MQTT** a jeden uzel **Gauge**.
11. Do uzlu MQTT zkopírujte **Topic** pro měření tlaku vzduchu:


```
node/climate-monitor:0/barometer/0:0/pressure
```

Do nového uzlu **Gauge** zadejte rozsah 80 000 až 110 000. Senzor posílá tlak vzduchu v pascalech a při zemi je to kolem 100 000 Pa. Jednotku tentokrát nastavovat nemusíte, ale název a barvu klidně přidejte.

<div class="container"> <div class="row"> <Image img={require('./img/iguana-terrarium-monitor/iguana-terrarium-monitor-6.webp')} alt="Uzel MQTT pro tlak se zvýrazněným ukazatelem Gauge; dialog ukazuje Label a rozsah 0 až 10000"/> </div> </div>

12. Abyste neviděli jen aktuální čísla, přidejte ke třem veličinám ještě grafy. Přehledně ukážou, jak se vlhkost, osvětlenost a tlak vzduchu vyvíjely za poslední hodinu. 📈

Pod uzly Gauge pro vlhkost, osvětlenost a tlak proto přidejte po jednom uzlu **Chart** ze sekce Dashboard.

13. Všechny tři uzly postupně otevřete a v **Label** je pojmenujte stejně jako sousední uzly Gauge. V **X-axis** pokaždé nastavte, za jaké období chcete výsledky zobrazovat (hodina by tam už měla být nastavená automaticky).

Do **Y-axis** pak vyplňte stejné rozsahy jako u sousedních uzlů Gauge, tedy u vlhkosti 0 až 100, u osvětlenosti 0 až 10 000 a u tlaku 80 000 až 110 000.

<div class="container"> <div class="row"> <Image img={require('./img/iguana-terrarium-monitor/iguana-terrarium-monitor-7.webp')} alt="Dialog Edit chart node se zvýrazněnými poli Label, interval osy X a rozsah osy Y a třemi uzly Chart ve flow"/> </div> </div>

A je to! Než se pustíte do měření, přidejte ještě jednu vychytávku: virtuálního hlídače.

## Přidejte kontrolku ideální teploty

Virtuální hlídač vás upozorní pokaždé, když váš plaz nebude mít v teráriu správnou teplotu. 🐍 Sestavíte ho z několika uzlů.

1. Nad vše, co jste vytvořili, přidejte uzel **Numeric** ze sekce Dashboard. Poznáte ho podle nápisu 123.

Otevřete ho a pole **Range** a **Value format** vyplňte úplně stejně jako u prvního uzlu Gauge. Pokud si to už nepamatujete, podívejte se na obrázek níže. Nezapomeňte uzel v poli Label pojmenovat, třeba Ideální teplota.

<div class="container"> <div class="row"> <Image img={require('./img/iguana-terrarium-monitor/iguana-terrarium-monitor-8.webp')} alt="Uzel Numeric na ploše; dialog se zvýrazněnými poli Label, formát hodnoty se °C a rozsah 0 až 40"/> </div> </div>

2. Hned vedle přidejte další uzel, tentokrát novinku: uzel **Change** ze sekce Function.

Otevřete ho a nastavte v něm pod sebe **flow.optimal** a **msg.payload** (tak jako na obrázku).

**K čemu to je**: Pomocí těchto dvou uzlů (Numeric a Change) nastavíte ideální teplotu a hlídač vás upozorní, když se od ní naměřená teplota odchýlí. 👮 V uzlu Numeric budete na Dashboardu určovat optimální teplotu a uzel Change ji uloží do proměnné flow.optimal. S tou pracují další uzly, které přidáme teď.

<div class="container"> <div class="row"> <Image img={require('./img/iguana-terrarium-monitor/iguana-terrarium-monitor-9.webp')} alt="Uzel Change vedle uzlu Numeric; dialog se zvýrazněným pravidlem Set flow.optimal na msg.payload"/> </div> </div>

3. Teď je čas na uzel **Switch**, který také najdete v sekci **Function**. Přetáhněte ho vedle uzlu MQTT pro měření teploty a otevřete ho.

V něm nastavíte tři situace, které můžou při sledování ideální teploty nastat: teplota je akorát, moc nízká nebo moc vysoká.

4. Dvakrát klikněte na malé tlačítko **+add**, abyste měli v uzlu tři možné situace. Pak je upravte přesně podle obrázku níže. Všimněte si, že na každém řádku je „**flow.optimal**“. Program vždy zkontroluje aktuální hodnotu této proměnné a podle ní pozná, o kterou situaci jde.

<div class="container"> <div class="row"> <Image img={require('./img/iguana-terrarium-monitor/iguana-terrarium-monitor-10.webp')} alt="Dialog Edit switch node se třemi pravidly porovnávajícími msg.payload s flow.optimal, výstupy 1 až 3"/> </div> </div>

5. Teď nastavíte zprávy, které vás na všechny tři situace upozorní. Vedle uzlu Switch umístěte pod sebe tři uzly **Change**.
6. Všechny tři uzly Change postupně otevřete a napište do nich zprávy, třeba „Teplota je moc vysoká/nízká/akorát“.

Pokud jste uzel **Switch** nastavili přesně podle našeho obrázku, napište do horního uzlu **Change** zprávu pro příliš vysokou teplotu, do prostředního pro příliš nízkou a do spodního pro optimální teplotu.

<div class="container"> <div class="row"> <Image img={require('./img/iguana-terrarium-monitor/iguana-terrarium-monitor-11.webp')} alt="Tři uzly Change vedle uzlu Switch; dialog se zvýrazněnou zprávou o příliš vysoké teplotě"/> </div> </div>

7. A teď už jen jeden uzel a můžeme to celé spustit! 🏎️ Za tři uzly Change přidejte uzel **Text** ze sekce **Dashboard**. Ten bude zobrazovat zprávy, které jste nastavili v předchozím kroku.
8. Uzel otevřete a v řádku **Label** ho pojmenujte, třeba Stav teploty.

<div class="container"> <div class="row"> <Image img={require('./img/iguana-terrarium-monitor/iguana-terrarium-monitor-13.webp')} alt="Uzel Text za uzly Change; dialog se zvýrazněným polem Label pro stav teploty"/> </div> </div>

9. A je to! Teď celý flow propojte podle našeho obrázku. Pokud si troufnete, propojte ho sami a podle obrázku ho pak jen zkontrolujte. 💪

<div class="container"> <div class="row"> <Image img={require('./img/iguana-terrarium-monitor/iguana-terrarium-monitor-14.webp')} alt="Kompletní propojený flow: čtyři větve senzorů s ukazateli a grafy plus hlídač teploty, zvýrazněné tlačítko Deploy"/> </div> </div>

10. Klikněte na tlačítko **Deploy** vpravo nahoře a celý tenhle velký flow spusťte. Na Dashboardu se vám naměřené hodnoty zobrazí zhruba takto:

<div class="container"> <div class="row"> <Image img={require('./img/iguana-terrarium-monitor/iguana-terrarium-monitor-15.webp')} alt="Ukazatele na dashboardu s hodnotami teploty, vlhkosti a osvětlenosti"/> </div> </div>

## A akce!

1. Krabičku pořádně připevněte izolepou **do terária svého plazího bratříčka nebo sestřičky**. 🏡
2. Na Dashboardu najděte **nastavení optimální teploty** a pomocí dvou šipek zvolte tu, kterou váš leguán, had nebo želva potřebuje. Ideální hodnotu pro svého mazlíčka si dohledejte na internetu.

<div class="container"> <div class="row"> <Image img={require('./img/iguana-terrarium-monitor/iguana-terrarium-monitor-16.webp')} alt="Detail dashboardu: nastavení optimální teploty se šipkami a zvýrazněnou zprávou o stavu teploty"/> </div> </div>

3. Kontrolujte, jestli má váš mazlíček ideální teplotu, a sledujte, jak **stoupá a klesá** tlak, osvětlenost a vlhkost.
4. Pokud se naměřená teplota od ideální příliš liší, zajděte se poradit do zverimexu nebo k veterináři, ať je váš plaz **maximálně spokojený**. 👌
