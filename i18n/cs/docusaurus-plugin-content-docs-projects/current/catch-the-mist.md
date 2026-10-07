---
slug: catch-the-mist
title: Detektor otevírání ledničky
---
import Image from '@theme/IdealImage';

## Úvod

Určitě to znáte. V lednici si schováváte poslední kousek dortu z narozeninové oslavy, a když se k němu konečně dostanete… je pryč. A mlsný sourozenec má čokoládu na bradě. Zastavte ho chytrou krabičkou! 🎂

V tomto projektu se naučíte vyrobit **detektor otevírání ledničky**. 👈

Budete potřebovat jen **krabičku s tlačítkem** a **USB dongle**. Vystačíte si tedy se základní [**Sadou Start**](https://www.hardwario.store/cz/p/start-set) od HARDWARIO.


## Stáhněte si nový firmware

1. Pokud jste to ještě neudělali, sestavte [Sadu Start](https://www.hardwario.store/cz/p/start-set).
2. Do modulu Core Module nahrajte speciální firmware **twr-radio-move-detector-x-axis** (najdete ho v Playgroundu mezi ostatními firmwary). Díky němu bude krabička reagovat na pohyb. 👌
3. Modul Core Module spárujte s USB donglem. Hned po spárování uvidíte, že se jeho Alias změnil na **x-axis-detector**.

<div class="container"> <div class="row"> <Image img={require('./img/catch-the-mist/catch-the-mist-1.webp')} alt="Záložka Devices v Playgroundu se spárovaným Core Module pod aliasem x-axis-detector:0"/> </div> </div>

## Rozjeďte to v Node-RED

1. V Playgroundu klikněte na **záložku Functions**, kde je programovací plocha Node-RED.
2. Začněte jako vždycky: na plochu nejdřív umístěte uzel **mqtt in** ze sekce **network**.
Dvakrát na něj klikněte a do pole **Topic** zkopírujte tento řádek, podle kterého krabička pozná pohyb:

```
node/x-axis-detector:0/accelerometer/-/event-count
```
<div class="container"> <div class="row"> <Image img={require('./img/catch-the-mist/catch-the-mist-2.webp')} alt="Dialog Edit mqtt in node se zvýrazněným polem Topic s tématem event-count akcelerometru"/> </div> </div>

Potvrďte tlačítkem **Done**.

3. Teď přidáte kousek JavaScriptu. 🙌 Nejdřív na plochu umístěte uzel **function** ze stejnojmenné sekce…


4. …a pak na něj dvakrát klikněte. **Na záložku On Message zkopírujte tento kód**, který bude počítat, kolikrát se lednice otevřela:

```
var count = flow.get("count") || 0;
count++;
flow.set("count", count);
msg.payload = count;
return msg;
```

Uzel ještě pojmenujte v řádku **Name**, třeba **Počítadlo**.

<div class="container"> <div class="row"> <Image img={require('./img/catch-the-mist/catch-the-mist-3.webp')} alt="Dialog Edit function node s kódem počítadla otevření lednice a vyplněným názvem uzlu"/> </div> </div>

Potvrďte tlačítkem **Done**.


5. Vedle něj umístěte poslední uzel, **text** ze sekce **dashboard**.


6. V nastavení uzlu přepište pole **Label** na text, který se má při počítání zobrazovat, třeba **Otevřená lednice**.


<div class="container"> <div class="row"> <Image img={require('./img/catch-the-mist/catch-the-mist-4.webp')} alt="Dialog Edit text node s polem Label nastaveným na Otevřená lednice"/> </div> </div>

Potvrďte tlačítkem **Done**.

7. **Všechny tři uzly propojte** tak, jak vidíte na obrázku. Nezapomeňte v pravém horním rohu kliknout na staré známé tlačítko **Deploy**, kterým celý flow spustíte.

<div class="container"> <div class="row"> <Image img={require('./img/catch-the-mist/catch-the-mist-6.webp')} alt="Všechny tři uzly propojené od MQTT přes počítadlo k textovému uzlu, se zvýrazněným tlačítkem Deploy"/> </div> </div>


## A… akce!

1. Teď pastičku zprovozníme. **Dejte do lednice dort nebo jinou návnadu**. 🍰
2. Krabičku položte naležato **do dvířek lednice**.
3. Když někdo dvířka otevře, krabička vám pošle upozornění na záložku **Dashboard**.

<div class="container"> <div class="row"> <Image img={require('./img/catch-the-mist/catch-the-mist-7.webp')} alt="Dlaždice Otevřená lednice na Dashboardu ukazující 4 otevření lednice"/> </div> </div>

4. **Utíkejte zpacifikovat zlotřilého zloducha!** 👮
5. A pak si vychutnejte sladké vítězství. 💘
