---
slug: highest-centrifugal-force
title: Nejvyšší odstředivá síla
---
import Image from '@theme/IdealImage';

## Úvod

Pamatujete si ještě na káču? Možná jste měli dřevěnou nebo plastovou, ale vsadíme se, že chytrá nebyla. Teď si konečně vyrobíte takovou, která zaznamená vaši odstředivou sílu. Pak se změřte s kamarády a zjistěte, kdo z vás je odstředivě nejsilnější! 💪

V tomto projektu se naučíte **měřit rychlé otáčení krabičky**. 👈

Budete potřebovat jen **krabičku s tlačítkem** a **USB dongle**. Vystačíte si tedy se základní [**Sadou Start**](https://www.hardwario.store/cz/p/start-set) od HARDWARIO.


## Stáhněte si nový firmware

1. Pokud jste to ještě neudělali, sestavte Sadu Start.
2. Do modulu Core Module nahrajte nový firmware **bcf radio spinning game** (najdete ho v Playgroundu mezi ostatními firmwary). Díky němu bude krabička reagovat na otáčení. 👌


3. Modul Core Module spárujte s USB donglem. Hned po spárování uvidíte, že se jeho Alias změnil na **rotation-g-meter**.


<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-1.webp')} alt="Záložka Devices v Playgroundu: řádek spárovaného zařízení se zvýrazněným aliasem rotation-g-meter:0"/> </div> </div>

## Postavte to v Node-RED

1. V Playgroundu klikněte na **záložku Functions**, kde je programovací plocha Node-RED. 🤖
2. Začněte jako vždycky: na plochu nejdřív umístěte uzel **mqtt in** ze sekce **network**.

Dvakrát na něj klikněte a do pole **Topic** zkopírujte tento řádek, díky kterému krabička změří odstředivou sílu:

```
node/rotation-g-meter:0/rotation-g
```

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-2.webp')} alt="Dialog Edit mqtt in node s tématem rotation-g ve zvýrazněném poli Topic"/> </div> </div>

Potvrďte tlačítkem **Done**.

3. Překvapení! 😲 Pod první uzel MQTT umístěte druhý uzel **mqtt in** ze sekce **network**. Tentokrát do jeho nastavení zadejte jiný **Topic**, díky kterému krabička změří dobu otáčení:


```
node/rotation-g-meter:0/rotation-time
```

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-3.webp')} alt="Druhý uzel MQTT: dialog úprav s tématem rotation-time ve zvýrazněném poli Topic"/> </div> </div>

4. Ke každému z nich přidejte jeden uzel pro JavaScript. Najdete ho v sekci **function** pod názvem function (originální, že? 🤡).

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-4.webp')} alt="Plocha Node-RED se zvýrazněným uzlem Function vedle každého ze dvou uzlů MQTT"/> </div> </div>


5. Dvakrát klikněte na **horní uzel function** a do velkého pole na záložce **On Message** vložte tento kód. Bude zaznamenávat rekordní odstředivou sílu. 💪


```
var record = flow.get("record") || flow.set("record", 0.0);
var lastSpin = parseFloat(msg.payload);

if(lastSpin > flow.get("record"))
{
    flow.set("record", lastSpin);
    return msg;
}
```

V řádku **Name** uzel pojmenujte _Uložení rekordu_.

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-5.webp')} alt="Dialog Edit function node s kódem pro uložení rekordu a zvýrazněným polem Name"/> </div> </div>

Potvrďte tlačítkem **Done**.

6. Do **spodního uzlu function** (opět na záložku **On Message**) vložte kód, který bude zaznamenávat rekordní dobu otáčení. ⏰


```
var record = flow.get("timeRecord") || flow.set("timeRecord", 0.0);
var lastSpinTime = parseFloat(msg.payload);

if(lastSpinTime > flow.get("timeRecord"))
{
    flow.set("timeRecord", lastSpinTime);
    return msg;
}
```

V řádku **Name** uzel pojmenujte _Uložení rekordu_.

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-6.webp')} alt="Dialog Edit function node spodního uzlu s kódem rekordního času a zvýrazněným polem Name"/> </div> </div>

Potvrďte tlačítkem **Done**.

7. Pod horní uzel function vložte uzel **text** ze sekce **dashboard**. Můžete ho umístit i jinam, ale pro přehlednost bude lepší, když budou uzly pod sebou.

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-7.webp')} alt="Plocha Node-RED se zvýrazněným uzlem Text ze sekce Dashboard pod horním uzlem Function"/> </div> </div>

V nastavení ho pojmenujte _Poslední točení_. Bude ukazovat hodnotu, kterou krabička právě naměřila.

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-8.webp')} alt="Dialog Edit text node se zvýrazněným polem Label pro hodnotu posledního točení"/> </div> </div>

8. Pod tento uzel umístěte ještě jeden, díky kterému se hodnoty budou zapisovat do grafu. 📈 Najdete ho jako uzel **chart** v sekci **dashboard**.
V řádku **Label** ho pojmenujte _Historie_. V řádku **X-axis Label** nastavte automatic, takže se jednotka doplní automaticky.

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-9.webp')} alt="Dialog Edit chart node se zvýrazněným polem Label a automatickým popiskem osy X"/> </div> </div>

9. Pod druhý uzel s JavaScriptem vložte uzel **text** ze sekce **dashboard**.
Nastavte v něm popisek pro dobu posledního otáčení: _Doba posledního točení_.

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-10.webp')} alt="Dialog Edit text node se zvýrazněným polem Label pro dobu posledního točení"/> </div> </div>

10.  Za obě větve umístěte po jednom uzlu **text** ze sekce **dashboard**. Určují, jak uvidíte zaznamenané rekordy. Nastavte v nich postupně Label **Rekord** a **Rekordní čas**.

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-11.webp')} alt="Plocha Node-RED se zvýrazněnými uzly Text pro rekord a rekordní čas vedle obou větví"/> </div> </div>

11. A pak všechno **propojte** podle obrázku. Na ploše tak vzniknou dva samostatné flow. Nakonec nezapomeňte stisknout tlačítko **Deploy**, kterým celé zapojení spustíte. 🚨

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-12.webp')} alt="Dva hotové propojené flow v Node-RED se zvýrazněným tlačítkem Deploy"/> </div> </div>

## Roztočte to!

1. Pozvěte všechny kamarády a pořádně je vyhecujte. Dejte si třeba kolu. 😄
2. Změřte svou odstředivou sílu! Točte jeden po druhém.
   **Náš tip:** Nejlépe se krabička točí, když ji postavíte na tlačítko.
3. Výsledky sledujte na záložce **Dashboard**. Hodně štěstí a… **roztočte to, co to dá!**

<div class="container"> <div class="row"> <Image img={require('./img/highest-centrifugal-force/highest-centrifugal-force-13.webp')} alt="Dashboard s hodnotou posledního točení, grafem Historie, dobou točení, rekordem a rekordním časem"/> </div> </div>
