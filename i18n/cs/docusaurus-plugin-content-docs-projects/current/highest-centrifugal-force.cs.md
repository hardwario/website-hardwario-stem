---
slug: highest-centrifugal-force
title: Nejvyšší odstředivá síla
---

## Úvod

Pamatuješ si ještě káču? Asi jsi měl dřevěnou nebo plastovou, ale vsadíme se, že nebyla chytrá. Teď si ji konečně vyrobíš – zaznamená tvou odstředivou sílu. Poměř pak s kámoši, kdo z vás je odstředivě nejsilnější! 💪

V tomhle projektu se naučíš vytvořit **změřit rychlé točení krabičky**. 👈

Budeš potřebovat jen **krabičku s tlačítkem** a **USB dongle**. Proto si vystačíš se základní HARDWARIO sadou – [**Start Set**](https://shop.hardwario.com/p/start-set/).


## Stáhni si nový firmware

1. Pokud to ještě nemáš, Start Set sestav.
2. Na Core Module nahraj nový firmware, a to **bcf radio spinning game** (najdeš ho mezi ostatním firmwarem v Playgroundu). Díky tomuhle firmwaru bude krabička citlivě vnímat rotace. 👌


3. Core Module spáruj s USB Donglem. Hned po spárování uvidíš, že tvůj Core Module změnil Alias na **rotation-g-meter**.


![HARDWARIO devices list](https://res.cloudinary.com/lukasfabik/image/upload/v1566292682/projects/highest-centrifugal-force/image11.png)

## Stavěj v Node-RED

1. V Playgroundu klikni na **záložku Functions**, kde je programovací plocha Node-RED. 🤖
2. Začni jako vždycky: na plochu nejdřív umísti **MQTT node** ze sekce Input.

Dvakrát na něj klikni a do řádku zkopíruj **Topic**, se kterým krabička změří odstředivou sílu:

```
node/rotation-g-meter:0/rotation-g
```

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566292682/projects/highest-centrifugal-force/image5.png)

Potvrď tlačítkem **Done**.

3. Překvápko. 😲 Pod první MQTT nod umísti ještě druhý **MQTT node** ze sekce Input. Tentokrát do jeho nastavení ulož jiný **Topic**, se kterým krabička změří čas rotace:


```
node/rotation-g-meter:0/rotation-time
```

![MQTT input node](https://res.cloudinary.com/lukasfabik/image/upload/v1566292683/projects/highest-centrifugal-force/image14.png)

4. K oběma nodům umísti po jednom nodu pro javascript. Najdeš je v sekci **Function** pod jménem Function (originální 🤡).

![javascript fuction node](https://res.cloudinary.com/lukasfabik/image/upload/v1566292681/projects/highest-centrifugal-force/image2.png)


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

![javascript fuction Node-RED](https://res.cloudinary.com/lukasfabik/image/upload/v1566292682/projects/highest-centrifugal-force/image10.png)

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

![Javascript Funciton HARDWARIO Set](https://res.cloudinary.com/lukasfabik/image/upload/v1566292681/projects/highest-centrifugal-force/image3.png)

Potvrď tlačítkem **Done**.

7. Pod horní Function nod vlož **textový node** ze sekce Dashboard. Můžeš ho vložit i jinam, ale pro přehlednost bude lepší, když budou pod sebou.

![Text Node](https://res.cloudinary.com/lukasfabik/image/upload/v1566292681/projects/highest-centrifugal-force/image7.png)

V nastavení ho pojmenuj jako _Poslední točení_. Takhle se ti bude zobrazovat hodnota, kterou krabička právě naměřila.

![Edit text Node](https://res.cloudinary.com/lukasfabik/image/upload/v1566292682/projects/highest-centrifugal-force/image12.png)

8. Pod tenhle nod polož ještě jeden, díky kterému se budou hodnoty zapisovat do grafu. 📈 Najdeš ho jako **node Chart** v sekci Dashboard.

![Chart node](https://res.cloudinary.com/lukasfabik/image/upload/v1566292681/projects/highest-centrifugal-force/image6.png)

Pojmenuj ho v řádku **Label** jako _Historie_. Do řádku **X-asis Label** nastav automatic, to znamená, že se jednotka přidá automaticky.

![settings of chart node in Node-RED](https://res.cloudinary.com/lukasfabik/image/upload/v1566334139/projects/highest-centrifugal-force/image13.png)

9. Pod druhý javascript vlož textový **node Text** ze sekce Dashboard.

![Dashboard text node](https://res.cloudinary.com/lukasfabik/image/upload/v1566292682/projects/highest-centrifugal-force/image1.png)

V něm pojmenuješ, jak se bude zobrazovat délka nejnovější rotace: _Doba posledního točení_.

![Set text node in dashboard](https://res.cloudinary.com/lukasfabik/image/upload/v1566292682/projects/highest-centrifugal-force/image12.png)

10. Za obě úrovně umísti po jednom textovém **nodu Text** ze sekce Dashboard. Ty ovlivní, jak v grafu uvidíš zapsaný rekordní čas. Nastav v nich proto postupně Label **Rekord** a **Rekordní čas**.

![HARDWARIO playground text node](https://res.cloudinary.com/lukasfabik/image/upload/v1566292682/projects/highest-centrifugal-force/image4.png)

11. A pak to všechno **propoj** podle obrázku. Na ploše ti tak vyjdou dvě samostatné flow. Nezapomeň nakonec zmáčknout tlačítko **Deploy**, kterým to celé zprovozníš. 🚨

![Deploy Node-RED flow](https://res.cloudinary.com/lukasfabik/image/upload/v1566292682/projects/highest-centrifugal-force/image9.png)

## Roztoč to!

1. Sezvi všechny kámoše a pořádně je vyhecuj. Dejte si třeba kolu. 😄
2. Změřte svou odstředivou sílu! Jeden po druhém točte.
   **Náš tip:** Nejlíp se ti bude točit, když krabičku postavíš na tlačítko.
3. Výsledky sleduj na záložce **Dashboard**. Tak hodně štěstí a… **Roztoč to jak roztoč!**

![settings of chart node in Node-RED](https://res.cloudinary.com/lukasfabik/image/upload/v1566334137/projects/highest-centrifugal-force/image15.png)
