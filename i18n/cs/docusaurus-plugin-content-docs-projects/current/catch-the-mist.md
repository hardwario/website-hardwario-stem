---
slug: catch-the-mist
title: Detektor otevírání ledničky
---
import Image from '@theme/IdealImage';

## Úvod

Určitě to znáš. V lednici si necháváš poslední kousek dortu ze svojí oslavy narozenin, ale když se k němu konečně dostaneš… Je pryč. A nenasytný sourozenec má čokoládu na bradě. Zastav ho s chytrou krabičkou! 🎂

V tomhle projektu se naučíš vytvořit **detektor otevírání ledničky**. 👈

Budeš potřebovat jen **krabičku s tlačítkem** a **USB dongle**. Proto si vystačíš se základní HARDWARIO sadou – [**Start Setem**](https://www.hardwario.store/p/start-set/).


## Stáhni si nový firmware

1. Pokud to ještě nemáš, sestav [Start Set ](https://www.hardwario.store/p/start-set/)
2. Na Core Module nahraj speciální firmware, a to **bcf-radio-x-axis-detector** (najdeš ho mezi ostatním firmwarem v Playgroundu). Díky tomuhle firmwaru bude krabička citlivější na pohyb. 👌
3. Core Module spáruj s USB Donglem. Hned po spárování uvidíš, že tvůj Core Module změnil Alias na **x-axis-detector**.

<div class="container"> <div class="row"> <Image img={require('./img/catch-the-mist/catch-the-mist-1.webp')} alt="Záložka Devices v Playgroundu se spárovaným Core Module pod aliasem x-axis-detector:0"/> </div> </div>

## Rozjeď to v Node-RED

1. V Playgroundu klikni na **záložku Functions**, kde je programovací plocha Node-RED.
2. Začni jako vždycky: na plochu nejdřív umísti **MQTT node** ze sekce Input.
Dvakrát na něj klikni a do řádku zkopíruj **Topic**, se kterým krabička odhalí změnu pohybu:

```
node/x-axis-detector:0/accelerometer/-/event-count
```
<div class="container"> <div class="row"> <Image img={require('./img/catch-the-mist/catch-the-mist-2.webp')} alt="Dialog Edit mqtt in node se zvýrazněným polem Topic s tématem event-count akcelerometru"/> </div> </div>

Potvrď tlačítkem **Done**.

3. Teď si tam nahraj malý javascript. 🙌 Nejdřív na plochu polož node Function ze stejnojmenné sekce…


4. ...a pak na tenhle node dvakrát ťukni. **Do pole Function zkopíruj tenhle kód**, který bude počítat, kolikrát se lednice otevřela:

```
var count = flow.get("count") || 0;
count++;
flow.set("count", count);
msg.payload = count;
return msg;
```

Node si ještě pojmenuj v řádku Label, třeba na **Počítadlo**.

<div class="container"> <div class="row"> <Image img={require('./img/catch-the-mist/catch-the-mist-3.webp')} alt="Dialog Edit function node s kódem počítadla otevření lednice a vyplněným názvem uzlu"/> </div> </div>

Potvrď tlačítkem **Done**.


5. Vedle tohohle nodu postav ještě poslední, a to **node Text** ze sekce Dashboard.


6. Uvnitř nodu změň jeho Label na text, který chceš, aby se ti při počítání ukazoval. Takže třeba **Otevřená lednice**.


<div class="container"> <div class="row"> <Image img={require('./img/catch-the-mist/catch-the-mist-4.webp')} alt="Dialog Edit text node s polem Label nastaveným na Otevřená lednice"/> </div> </div>

Potvrď tlačítkem **Done**.

7. **Všechny tři nody propoj** tak, jak to vidíš na obrázku. V pravém horním rohu nezapomeň ťuknout na staré známé tlačítko **Deploy**, kterým celé flow rozjedeš.

<div class="container"> <div class="row"> <Image img={require('./img/catch-the-mist/catch-the-mist-6.webp')} alt="Všechny tři uzly propojené od MQTT přes počítadlo k textovému uzlu, se zvýrazněným tlačítkem Deploy"/> </div> </div>


## A… akce!

1. Pojď pastičku zprovoznit. **Dej do lednice dort nebo jiné lákadlo**. 🍰
2. Krabičku vlož naležato **do dvířek lednice**.
3. Když se dvířka otevřou, krabička ti pošle upozornění na záložku **Dashboard**.

<div class="container"> <div class="row"> <Image img={require('./img/catch-the-mist/catch-the-mist-7.webp')} alt="Dlaždice Otevřená lednice na Dashboardu ukazující 4 otevření lednice"/> </div> </div>

4. **Utíkej zpacifikovat zlotřilého zloducha!** 👮
5. A vychutnej si svou sladkou odměnu ty sám. 💘
