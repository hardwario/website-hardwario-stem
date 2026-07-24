---
slug: highest-centrifugal-force
title: Nejvyšší odstředivá síla
---
import Image from '@theme/IdealImage';

## Úvod

Pamatuješ si ještě káču? Asi jsi měl dřevěnou nebo plastovou, ale vsadíme se, že nebyla chytrá. Teď si ji konečně vyrobíš – zaznamená tvou odstředivou sílu. Poměř pak s kámoši, kdo z vás je odstředivě nejsilnější! 💪

V tomhle projektu se naučíš vytvořit **změřit rychlé točení krabičky**. 👈

Budeš potřebovat jen **krabičku s tlačítkem** a **USB dongle**. Proto si vystačíš se základní HARDWARIO sadou – [**Start Set**](https://www.hardwario.store/p/start-set/).


## Stáhni si nový firmware

1. Pokud to ještě nemáš, Start Set sestav.
2. Na Core Module nahraj nový firmware, a to **bcf radio spinning game** (najdeš ho mezi ostatním firmwarem v Playgroundu). Díky tomuhle firmwaru bude krabička citlivě vnímat rotace. 👌


3. Core Module spáruj s USB Donglem. Hned po spárování uvidíš, že tvůj Core Module změnil Alias na **rotation-g-meter**.


<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-1.webp')} alt="Záložka Devices v Playgroundu: řádek spárovaného zařízení se zvýrazněným aliasem rotation-g-meter:0"/> </div> </div>

## Stavěj v Node-RED

1. V Playgroundu klikni na **záložku Functions**, kde je programovací plocha Node-RED. 🤖
2. Začni jako vždycky: na plochu nejdřív umísti **MQTT node** ze sekce Input.

Dvakrát na něj klikni a do řádku zkopíruj **Topic**, se kterým krabička změří odstředivou sílu:

```
node/rotation-g-meter:0/rotation-g
```

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-2.webp')} alt="Dialog Edit mqtt in node s tématem rotation-g ve zvýrazněném poli Topic"/> </div> </div>

Potvrď tlačítkem **Done**.

3. Překvápko. 😲 Pod první MQTT nod umísti ještě druhý **MQTT node** ze sekce Input. Tentokrát do jeho nastavení ulož jiný **Topic**, se kterým krabička změří čas rotace:


```
node/rotation-g-meter:0/rotation-time
```

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-3.webp')} alt="Druhý MQTT uzel: dialog úprav s tématem rotation-time ve zvýrazněném poli Topic"/> </div> </div>

4. K oběma nodům umísti po jednom nodu pro javascript. Najdeš je v sekci **Function** pod jménem Function (originální 🤡).

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-4.webp')} alt="Plocha Node-RED se zvýrazněným uzlem Function vedle každého ze dvou MQTT uzlů"/> </div> </div>


5. Na **horní node Function** dvakrát klikni a do velkého políčka vlož tenhle kód, který bude zapisovat rekordní odstředivou sílu. 💪


```
var record = flow.get("record") || flow.set("record", 0.0);
var lastSpin = parseFloat(msg.payload);

if(lastSpin > flow.get("record"))
{
    flow.set("record", lastSpin);
    return msg;
}
```

V řádku **Name** nod pojmenuj jako _Uložení rekordu_.

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-5.webp')} alt="Dialog Edit function node s kódem pro uložení rekordu a zvýrazněným polem Name"/> </div> </div>

Potvrď tlačítkem **Done**.

6. Do **spodního nodu Function** vlož kód, který bude zapisovat rekordní čas točení. ⏰


```
var record = flow.get("timeRecord") || flow.set("timeRecord", 0.0);
var lastSpinTime = parseFloat(msg.payload);

if(lastSpinTime > flow.get("timeRecord"))
{
    flow.set("timeRecord", lastSpinTime);
    return msg;
}
```

V řádku **Name** nod pojmenuj jako _Uložení rekordu_.

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-6.webp')} alt="Dialog Edit function node spodního uzlu s kódem rekordního času a zvýrazněným polem Name"/> </div> </div>

Potvrď tlačítkem **Done**.

7. Pod horní Function nod vlož **textový node** ze sekce Dashboard. Můžeš ho vložit i jinam, ale pro přehlednost bude lepší, když budou pod sebou.

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-7.webp')} alt="Plocha Node-RED se zvýrazněným uzlem Text ze sekce Dashboard pod horním uzlem Function"/> </div> </div>

V nastavení ho pojmenuj jako _Poslední točení_. Takhle se ti bude zobrazovat hodnota, kterou krabička právě naměřila.

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-8.webp')} alt="Dialog Edit text node se zvýrazněným polem Label pro hodnotu posledního točení"/> </div> </div>

8. Pod tenhle nod polož ještě jeden, díky kterému se budou hodnoty zapisovat do grafu. 📈 Najdeš ho jako **node Chart** v sekci Dashboard.
Pojmenuj ho v řádku **Label** jako _Historie_. Do řádku **X-asis Label** nastav automatic, to znamená, že se jednotka přidá automaticky.

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-9.webp')} alt="Dialog Edit chart node se zvýrazněným polem Label a automatickým popiskem osy X"/> </div> </div>

9. Pod druhý javascript vlož textový **node Text** ze sekce Dashboard.
V něm pojmenuješ, jak se bude zobrazovat délka nejnovější rotace: _Doba posledního točení_.

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-10.webp')} alt="Dialog Edit text node se zvýrazněným polem Label pro dobu posledního točení"/> </div> </div>

10.  Za obě úrovně umísti po jednom textovém **nodu Text** ze sekce Dashboard. Ty ovlivní, jak v grafu uvidíš zapsaný rekordní čas. Nastav v nich proto postupně Label **Rekord** a **Rekordní čas**.

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-11.webp')} alt="Plocha Node-RED se zvýrazněnými uzly Text pro rekord a rekordní čas vedle obou větví"/> </div> </div>

11. A pak to všechno **propoj** podle obrázku. Na ploše ti tak vyjdou dvě samostatné flow. Nezapomeň nakonec zmáčknout tlačítko **Deploy**, kterým to celé zprovozníš. 🚨

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-12.webp')} alt="Dva hotové propojené flow v Node-RED se zvýrazněným tlačítkem Deploy"/> </div> </div>

## Roztoč to!

1. Sezvi všechny kámoše a pořádně je vyhecuj. Dejte si třeba kolu. 😄
2. Změřte svou odstředivou sílu! Jeden po druhém točte.
   **Náš tip:** Nejlíp se ti bude točit, když krabičku postavíš na tlačítko.
3. Výsledky sleduj na záložce **Dashboard**. Tak hodně štěstí a… **Roztoč to jak roztoč!**

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-13.webp')} alt="Dashboard s hodnotou posledního točení, grafem Historie, dobou točení, rekordem a rekordním časem"/> </div> </div>
