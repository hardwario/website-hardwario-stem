---
slug: christmas-detector
title: Detektor Ježíška
---
import Image from '@theme/IdealImage';

## Úvod

Ježíšek je nesmírně tajemná bytost, ale s IoT ho můžete načapat přímo při nadílce. 🎄 Pomůže vám s tím detektor pohybu PIR Module.

V tomto projektu se naučíte **zaznamenat pohyb ve vzdálené místnosti**. Díky tomu si můžete ověřit, jestli k vám domů chodí Santa, Ježíšek, Děda Mráz, nebo někdo úplně jiný. 😲

Pokud máte Start Set, budete k němu potřebovat ještě [PIR Module](https://www.hardwario.store/p/pir-module/). **Kompletní výbavu** najdete v sadě [Motion Set](https://www.hardwario.store/p/motion-set).


## Připravte si krabičku

1. Sestavte sadu. Do modulu Core Module potřebujete firmware **bcf-radio-motion-detector**. <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-1.webp')} alt="Záložka Firmware v Playgroundu s vybraným firmwarem twr-radio-motion-detector k nahrání"/> </div> </div>

2. Pokud se firmware nahrál správně, uvidíte v Playgroundu na záložce Devices alias **motion-detector**.
<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-2.webp')} alt="Záložka Devices v Playgroundu se spárovaným zařízením pod aliasem motion-detector:0"/> </div> </div>

## Nastavte si Node-RED

1. Programovat začnete v Node-RED. Nejdřív v Playgroundu klikněte na záložku **Functions**.
2. Na prázdnou plochu přetáhněte světle fialový uzel (bublinu) s názvem **MQTT**. Najdete ho v sekci Input.

<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-3.webp')} alt="Uzel mqtt in zvýrazněný v paletě a uzel mqtt umístěný na ploše"/> </div> </div>

3. Uzel otevřete dvojklikem. Do řádku **Topic** zadejte klíčovou hodnotu. Uzel teď bude počítat zaznamenané pohyby:


```
node/motion-detector:0/pir/-/event-count
```

<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-4.webp')} alt="Uzel MQTT na ploše s tématem event-count PIR čidla motion-detectoru"/> </div> </div>

Potvrďte tlačítkem **Done**.

4. Za tento uzel umístěte uzel **Switch** ze sekce Function. Díky němu zařízení pozná, že je detektor zapnutý a může hlásit každý pohyb.
5. V uzlu vyplňte řádek **Property** jako _flow_. _detectorActive_ a podmínku v poli upravte na _is true_ (viz obrázek).
**Náš tip**: Přečtěte si o této funkci víc.
<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-5.webp')} alt="Dialog Edit switch node kontrolující vlastnost flow.detectorActive s podmínkou is true"/> </div> </div>

Potvrďte tlačítkem **Done**.

6. Za uzel Switch umístěte uzel **Change** ze stejné sekce Function.
<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-6.webp')} alt="Uzel Change zvýrazněný v paletě, uzel set msg.payload je umístěný za uzlem switch"/> </div> </div>

7. V něm nastavíte zprávu, která vyskočí, jakmile dorazí vousáč s dárky (nebo Ježíšek). 🎅 👼 Třeba: _Jezisek je v obyvaku_.
**Náš tip**: Pokud chcete nastavit i upozornění do mobilu, nepoužívejte háčky ani čárky, protože Blynk diakritiku nezobrazuje.
<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-7.webp')} alt="Dialog Edit change node s pravidlem nastavujícím flow.detectorActive na msg.payload"/> </div> </div>

Potvrďte tlačítkem **Done**.

8. Nad tento flow přidejte další, kterým budete detektor zapínat a vypínat. Bude se skládat ze dvou uzlů. První je uzel **Switch** ze sekce Dashboard.
<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-8.webp')} alt="Uzel switch z palety dashboard zvýrazněný a umístěný nad flow detektoru"/> </div> </div>

9. V tomto uzlu změňte **Label** na _Stav detektoru_. Tak bude váš projekt označený na Dashboardu.
<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-9.webp')} alt="Dialog Edit switch node s Label Stav detektoru a hodnotami true a false"/> </div> </div>

Potvrďte tlačítkem **Done**.

10. Za něj umístěte uzel **Change** ze sekce Function. Ano, stejný, jaký už máte o kousek níž. 👍
<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-10.webp')} alt="Uzel Change zvýrazněný v paletě, uzel set msg.payload je umístěný za přepínačem Stav detektoru"/> </div> </div>

11. V poli **Rules** nastavte funkci, podle které zařízení pozná, jestli je přepínač zapnutý, nebo vypnutý: _flow_. _detectorActive_ (viz obrázek). Pozor na překlepy!
<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-11.webp')} alt="Dialog Edit change node pro flow přepínače se zvýrazněným pravidlem Set flow.detectorActive na msg.payload"/> </div> </div>

Potvrďte tlačítkem **Done**.

12. Teď všechny uzly **propojte podle obrázku**, ale tlačítko Deploy ještě nestiskněte. Chybí poslední uzel, který přidáme za chvilku. S ním nastavíte upozornění do mobilu. 🤳
![Propojení uzlů](./img/christmas-detector/image13.png)


## Připravte Blynk IoT na upozornění

Zachycený pohyb vám dorazí do chytrého telefonu jako push notifikace z aplikace **Blynk IoT**. Šikovné, že? 😎

1. Pokud ještě nemáte účet v [Blynk IoT](https://docs.hardwario.com/tower/platform-integrations/blynk-app/), založte si ho. [V tomto návodu](https://docs.hardwario.com/tower/platform-integrations/blynk-app/) najdete, jak nastavit účet, šablonu zařízení (device template) a zařízení (device). Budete potřebovat všechny tři. Můžete také použít šablonu z některého předchozího projektu.

2. V Blynk IoT se push notifikace nepřidává na obrazovku telefonu jako widget. Posílá se jako událost (**Event**) definovaná v šabloně. V detailu šablony otevřete záložku **Events** a přidejte novou událost (pojmenujte ji třeba `motion` a zadejte zprávu, kterou chcete dostávat, například _Jezisek je v obyvaku_). Pak pro tuto událost zapněte **Notifications**, aby vám ji Blynk doručil do telefonu. [Návod](https://docs.hardwario.com/tower/platform-integrations/blynk-app/) vás nastavením šablony provede.

3. Stáhněte si do telefonu aplikaci **Blynk IoT** z [App Store](https://apps.apple.com/us/app/blynk-iot/id1559317868) nebo [Google Play](https://play.google.com/store/apps/details?id=cloud.blynk) a přihlaste se stejným účtem. Zkontrolujte, že má aplikace povolená upozornění, aby se zpráva mohla zobrazit. 📱

## Propojte mobil s krabičkou

1. Vraťte se k počítači. Na plochu Node-RED umístěte poslední uzel celého projektu: uzel ze sekce **Blynk IoT**, který umí spustit vaši událost (uzel **log event**). Patří hned za flow s přepínačem (viz obrázek). 👀 <div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-13.webp')} alt="Uzel notify pro Blynk zvýrazněný na ploše, umístěný na konec flow detektoru"/> </div> </div>

2. Uzel otevřete dvojklikem. Vpravo uvidíte **malou tužku**. Klikněte na ni a otevře se nové okno. Do pole **Url** zadejte `blynk.cloud` a do polí **Auth Token** a **Template ID** zkopírujte hodnoty z detailu zařízení ve webové aplikaci Blynk na počítači. Potvrďte tlačítkem **Add**.

3. Nastavte uzel tak, aby spouštěl událost (**Event**), kterou jste vytvořili (kód události, např. `motion`). Právě tím se zachycený pohyb promění v push notifikaci. Potvrďte tlačítkem **Done**.

4. Nakonec tento zelený uzel **propojte** s předchozím flow, aby detektor ➡️ spustil událost v Blynk IoT, ➡️ která dorazí do vašeho mobilu. Pak stiskněte červené tlačítko **Deploy**. 🚨

## A… akce!

1. Je nejvyšší čas vyzvědět, kdo nosí dárky. Na záložce **Dashboard** v Playgroundu **zapněte detektor**. 🕵️
<div class="container"> <div class="row"> <Image img={require('./img/christmas-detector/christmas-detector-17.webp')} alt="Hotový flow s přepínačem Stav detektoru a řetězcem události PIR končícím uzlem notify"/> </div> </div>

2. PIR Module zachytí i sebemenší pohyb a zprávu, že se něco děje, vám raz dva pošle do mobilu. **Ježíšek nemá šanci**! Rychle se běžte podívat a načapejte ho!

1. Poznámka na okraj: Po načapání si Ježíška **udobřete**, ať vám doma vůbec nějaké dárky nechá. 😜
