---
slug: warmes-coldes-place
title: Nejteplejší a nejchladnější místo
---


## Úvod

Tento projekt odhalí všechna tajemství vaší školy, ať už někdo loví duchy, nebo hledá žhavé místo na příští rande. Změřte se třídou teplotu v různých koutech školy a zkuste objevit ten největší extrém. 😱

S tímto projektem se naučíte **měřit teplotu pomocí IoT a zobrazit ji v mobilu**. Postačí vám základní sada HARDWARIO, tedy [**Sada Start**](https://www.hardwario.store/cz/p/start-set).

Hru **navrhněte učiteli fyziky** jako zpestření hodiny, nebo si ji s kamarády zahrajte jen tak po škole.

**V téhle hře jde o vítězství.** Kdo najde nejchladnější nebo nejteplejší místo ve škole, je **král**! 👑 Pokud máte ve třídě krabiček víc, pracujte samostatně nebo v malých skupinkách. Pokud máte jen jednu, střídejte se.


## Připravte si krabičku

1. Sestavte a spárujte Sadu Start. Do modulu Core Module potřebujete firmware **twr-radio-push-button**. Pokud nevíte, jak si firmware stáhnout nebo co to je, [najdete to tady](https://docs.hardwario.com/tower/desktop-programming/firmware-flashing/).

2. Změny teploty uvidíte v Playgroundu v záložce **Messages**.

![Zprávy MQTT v HARDWARIO Playground](./img/warmes-coldes-place/image10.png)

## Nastavte si Node-RED

1. Nejnižší nebo nejvyšší teplotu budete zaznamenávat na vlastním ukazateli. Začněte na počítači bublinami v [Node-RED](https://docs.hardwario.com/tower/desktop-programming/node-red-programming/). Nejdřív v Playgroundu klikněte na záložku **Functions**.

2. Na prázdnou plochu umístěte světle fialový uzel (bublinu) s názvem **mqtt in**. Najdete ho v sekci network.

3. Uzel otevřete dvojklikem. V řádku **Topic** určíte, co má ukazatel zobrazovat. Teď to bude teplota, proto do řádku zkopírujte zprávu s teplotou ze záložky Messages (bez čísla). Nebo klidně použijte tuto:

```
node/push-button:0/thermometer/0:1/temperature
```

![Uzel MQTT s topicem teploty](./img/warmes-coldes-place/image9.png)

Potvrďte tlačítkem **Done**.

## Připravte si aplikaci Blynk IoT

Krabička bude naměřenou teplotu posílat do aplikace **Blynk IoT**: Node-RED zapíše každé měření do datastreamu a ukazatel v mobilu ho zobrazí. Žádnou automatizaci ani notifikaci k tomuto projektu nepotřebujete.

1. Pokud ještě nemáte účet v aplikaci [Blynk IoT](https://blynk.io), založte si ho. Na tento projekt stačí bezplatný tarif.

2. Dalším krokem je vytvoření šablony zařízení (template). Jak na to, ukazuje [rychlý návod Blynku](https://docs.blynk.io/en/getting-started/template-quick-setup). Pokud máte šablonu z předchozích projektů, klidně ji použijte.

3. Teď nastavte nový datastream. V detailu šablony otevřete záložku **Datastreams**, vpravo nahoře klikněte na **Edit**, pak na **New Datastream** a vyberte **Virtual Pin**. Otevře se nastavení datastreamu:

![Blynk IoT: přidání nového datastreamu](./img/warmes-coldes-place/add-datastream-1.png)

4. Pojmenujte nový datastream (třeba `Teplota`) a vyberte jeden z volných pinů. Teplotu budete měřit jako desetinné číslo, proto **jako datový typ (Data Type) zvolte Double** a jednotku (unit) nastavte na **Celsius**. Nezapomeňte nastavit rozsah teplot, které budete měřit, například **0–50**.

5. Datastream vytvoříte kliknutím na **Create**.

![Blynk IoT: nastavení datastreamu](./img/warmes-coldes-place/add-datastream-2.png)

6. Vpravo nahoře uložte šablonu tlačítkem **Save**.

## Založte zařízení

Pokud ho ještě nemáte, založte si z vytvořené šablony zařízení: v sekci **Devices** přidejte nové zařízení, vyberte svou šablonu a zařízení pojmenujte. Na jeho záložce **Device Info** najdete **Auth Token**, který budete potřebovat v Node-RED.

## Spusťte aplikaci v mobilu

**Aplikaci Blynk IoT** si do mobilu stáhněte z [App Store](https://apps.apple.com/us/app/blynk-iot/id1559317868) nebo [Google Play](https://play.google.com/store/apps/details?id=cloud.blynk) a přihlaste se do ní stejným účtem.

![Úvodní obrazovka aplikace Blynk IoT se zvýrazněným tlačítkem Log In](./img/warmes-coldes-place/blynk-1.png)

Hned po přihlášení uvidíte vytvořené zařízení:

![Seznam zařízení v aplikaci Blynk IoT se zvýrazněným zařízením HARDWARIO device](./img/warmes-coldes-place/blynk-2.png)

Klepněte na něj. Teď nastavíme dashboard, na kterém se bude zobrazovat naměřená hodnota:

1. Pod ikonou **klíče** vpravo nahoře najdete stránku s nastavením dashboardu.

![Ikona klíče v aplikaci Blynk IoT](./img/warmes-coldes-place/blynk-3.png)

2. Tlačítkem **+** nebo klepnutím kamkoli na plochu přidáte nový graf nebo jiný prvek dashboardu. Teď použijeme **Gauge**.

![Widget Box v aplikaci Blynk IoT se zvýrazněným widgetem Gauge](./img/warmes-coldes-place/blynk-gauge.png)

3. Klepnutím na přidaný widget otevřete jeho nastavení. Nejdůležitější je vybrat ***Datastream*** ze své šablony pro zvolený virtuální pin. Můžete také doplnit název a změnit barvu.

![Nastavení widgetu Gauge v aplikaci Blynk IoT](./img/warmes-coldes-place/blynk-temperature.png)

4. Aplikace je hotová. Teď do ní začneme posílat data. 💪

## Propojte mobil s krabičkou

1. Vraťte se k počítači. Na plochu Node-RED přidejte za uzel MQTT **zelený uzel write**. Najdete ho vlevo v sekci **Blynk IoT** (sekce **Blynk ws** patří ke starému Blynku, který už nefunguje).

![Uzel write z Blynk IoT v Node-RED](./img/warmes-coldes-place/playground-0.png)

2. Uzel otevřete dvojklikem. Vedle pole **Connection** uvidíte **malou tužku**. Klikněte na ni a otevře se nové okno. Do pole **Url** vložte `blynk.cloud` a do polí **Auth Token** a **Template ID** zkopírujte hodnoty z webové aplikace Blynk na počítači: Auth Token najdete na záložce **Device Info** zařízení, Template ID v detailu šablony.

![Nastavení připojení k Blynku v Node-RED](./img/warmes-coldes-place/playground-1.png)

Nastavení potvrďte tlačítkem **Add**. Z uzlu ale ještě neodcházejte. 👈

3. Do řádku **Virtual Pin** napište číslo pinu, který jste zvolili v Blynku, bez písmene „V“.
Potvrďte tlačítkem **Done**.


![Nastavení Virtual Pin v uzlu write v Node-RED](./img/warmes-coldes-place/playground-2.png)

4. Teď **oba uzly propojte** a klikněte na červené tlačítko **Deploy** vpravo nahoře. 🚨

![Uzel MQTT propojený s uzlem write pro Blynk](./img/warmes-coldes-place/playground-3.png)

## Trumfněte svou třídu

1. Sami nebo ve skupině **vytipujte, které místo ve škole může být nejteplejší nebo nejchladnější**. 🔥 ⛄

2. Každý jednotlivec nebo skupina má na průzkum **jen 15 minut**. 🔦 Ať je to napínavé.

3. Vezměte krabičku na vybrané místo a **teplotu sledujte v mobilu**. Než se teplota na ukazateli projeví, může to chvíli trvat.

![Teplota na ukazateli Gauge v aplikaci Blynk IoT](./img/warmes-coldes-place/blynk-temperature-gauge.jpg)

4. Vyzkoušejte několik míst a na závěr vyhlaste nejextrémnější výsledky. **Gratulujeme vítězům!** 🎇
