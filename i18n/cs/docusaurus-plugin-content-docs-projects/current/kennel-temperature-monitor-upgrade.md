---
slug: kennel-temperature-monitor-upgrade
title: Vylepšený monitor teploty psí boudy
---
import Image from '@theme/IdealImage';

## Úvod

Základní verzi hlídače teploty psí boudy už máte? Postavte si ještě o třídu lepší. Bude vám posílat notifikace do mobilu a teplotu v boudě uvidíte odkudkoli. 🐶

S tímto projektem se naučíte nastavit krabičku tak, aby vám **poslala zprávu, když teplota klesne pod nastavenou hodnotu**. 👌 Štěkat krabička sice nezačne, ale i tak je to skvělý projekt. 🐩

Základní verzi tohoto projektu najdete tady: [Hlídač teploty pro chlupatého hlídače: kontrolujte teplotu v boudě svého psa](/cs/projects/kennel-temperature-monitor/).

I tentokrát vám postačí základní sada HARDWARIO, tedy [**Start Set**](https://www.hardwario.store/p/start-set).


## Připravte si Node-RED

1. K projektu potřebujete známý firmware **bcf-radio-push-button**. Máte ho nahraný? Tak na nic nečekejte a spárujte krabičku s donglem.
<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-1.webp')} alt="Záložka Devices v Playgroundu: řádek spárovaného zařízení se zvýrazněným aliasem push-button:0"/>
  </div>
</div>

2. V Playgroundu přepněte na záložku **Functions** a umístěte na plochu totéž co v základní verzi projektu:

- jeden **uzel MQTT** ze sekce Input, do kterého znovu vložte tento **Topic**:

```
node/push-button:0/thermometer/0:1/temperature
```

- a ukazatel, tedy uzel **Gauge** ze sekce Dashboard. Měl by ukazovat rozsah od −15 do 40 °C. Pro lepší orientaci ho pojmenujte. ✍️
<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-2.webp')} alt="Plocha Node-RED s uzlem MQTT pro teplotu a uzlem Gauge pro boudu"/>
  </div>
</div>

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-3.webp')} alt="Dialog úprav se zvýrazněnými poli Label, formát hodnoty se °C a rozsah teplot"/>
  </div>
</div>

Držte si klobouky, jedeme dál. 🎩

## Připravte Blynk IoT na upozornění

Upozornění na teplotu vám přijde do telefonu jako push notifikace z aplikace **Blynk IoT**. Právě tím se z krabičky stává chytrá věc. 😎

1. Pokud ještě účet nemáte, založte si ho v [Blynk IoT](https://docs.hardwario.com/tower/platform-integrations/blynk-app/). Jak nastavit účet, šablonu zařízení (device template) a zařízení (device), se dozvíte v [tomto návodu](https://docs.hardwario.com/tower/platform-integrations/blynk-app/). Budete potřebovat všechny tři. Klidně můžete použít i šablonu z předchozího projektu.

2. V Blynk IoT se upozornění nepřidává na obrazovku telefonu jako widget, ale posílá se jako událost (**Event**) definovaná v šabloně. V detailu šablony otevřete záložku **Events** a přidejte novou událost (pojmenujte ji například `kennel_temp` a zadejte zprávu, kterou chcete dostávat, třeba _V boude je moc velka zima_). Pak pro tuto událost zapněte **Notifications**, aby vám ji Blynk doručil do telefonu. Nastavením šablony vás provede [návod](https://docs.hardwario.com/tower/platform-integrations/blynk-app/).

3. Stáhněte si do telefonu aplikaci **Blynk IoT** z [App Store](https://apps.apple.com/us/app/blynk-iot/id1559317868) nebo [Google Play](https://play.google.com/store/apps/details?id=cloud.blynk) a přihlaste se stejným účtem. Zkontrolujte, že má aplikace povolené notifikace, aby se upozornění mohlo zobrazit. 📱 Nejdřív ale musíte vylepšit Node-RED, jinak se nic nestane.


## Vylepšete Node-RED

1. Vraťte se k počítači a v Playgroundu nastavte další funkce. První z nich je **notifikace na mobil**, kterou zprovozníte pomocí tří uzlů.

- První: **uzel Switch** ze sekce Function.
<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-4.webp')} alt="Plocha Node-RED se zvýrazněným uzlem Switch ze sekce Function nad uzlem Gauge"/>
  </div>
</div>

V uzlu nastavte totéž co na obrázku níže:

a. jako vybranou vlastnost (Property) použijte **msg.payload**,

b. nastavte, aby se notifikace poslala, když teplota klesne na −15 °C nebo níž. Pracujte s proměnnou **flow.optimalTemp** a operátorem menší nebo rovno: 
`**<=**`.
<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-5.webp')} alt="Dialog Edit switch node: vlastnost msg.payload s pravidlem porovnávajícím flow.optimalTemp"/>
  </div>
</div>

- Druhý: **uzel Change** ze stejné sekce. Ten určuje, jaká zpráva vám přijde na mobil.
<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-6.webp')} alt="Plocha Node-RED se zvýrazněným uzlem Change (set msg.payload) vedle uzlu Switch"/>
  </div>
</div>

V uzlu nastavte, co vám telefon oznámí, když teplota v boudě klesne pod nastavené minimum. Třeba _V boude je moc velka zima_.

**Náš tip**: Zprávu pište bez háčků a čárek, Blynk jim bohužel nerozumí.

- Třetí: **uzel Blynk IoT** ze sekce Blynk IoT, který umí spustit vaši událost (uzel **log event**). Přes něj vede spojení s mobilem.
Uzel otevřete dvojklikem. Vpravo uvidíte **malou tužku**. Klikněte na ni a otevře se nové okno. Do pole **Url** zadejte `blynk.cloud` a do polí **Auth Token** a **Template ID** zkopírujte hodnoty z detailu zařízení ve webové aplikaci Blynk IoT na počítači. Potvrďte tlačítkem **Add**.

Pak uzel nastavte tak, aby spouštěl vytvořenou událost (**Event**), v našem příkladu s kódem `kennel_temp`. Díky tomu se příliš nízká naměřená teplota promění v push notifikaci. Potvrďte tlačítkem **Done**.

**Náš tip**: V řádku name propojení pojmenujte, ať ho později poznáte.

## Přidejte flow, který hlídá optimální teplotu

1. Teď přijde třešnička na dortu. Tento flow se bude skládat ze dvou uzlů.

První je **uzel Numeric** ze sekce Dashboard. Zní to jako padouch z komiksu, že? Teď je to ale váš pomocník.

Pomocí uzlu Numeric nastavíte nejnižší přípustnou teplotu přímo z Dashboardu v Playgroundu. **Práh tak snadno upravíte.**
<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-12.webp')} alt="Plocha Node-RED se zvýrazněným uzlem Numeric ze sekce Dashboard"/>
  </div>
</div>

V uzlu nastavte **jednotku** (°C), **teplotní rozsah** (−15 až 40) a **název uzlu**.

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-13.webp')} alt="Dialog Edit numeric node: zvýrazněná pole Label, formát hodnoty se °C a rozsah min -15 max 50"/>
  </div>
</div>

3. Vedle něj umístěte další **uzel Change**.
<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-14.webp')} alt="Plocha Node-RED se zvýrazněným uzlem Change (set msg.payload) vedle uzlu Numeric"/>
  </div>
</div>

4. V něm nastavte, aby se při každé změně v uzlu Numeric hned aktualizovala minimální teplota (optimalTemp). Řiďte se obrázkem.
<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-15.webp')} alt="Dialog Edit change node: zvýrazněné pravidlo Set flow.optimalTemp na msg.payload"/>
  </div>
</div>

5. Teď už zbývá uzly **propojit podle obrázku** a potvrdit tlačítkem **Deploy**. 🙌
<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-18.webp')} alt="Hotový flow v Node-RED s propojenými uzly a zvýrazněným tlačítkem Deploy"/>
  </div>
</div>

## A… akce!

1. Krabičku znovu přilepte na **vnitřní stěnu boudy**.
2. Teplotu naměřenou v boudě uvidíte v Playgroundu **na záložce Dashboard**…
<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-19.webp')} alt="Dashboard s ukazatelem teploty v boudě, který ukazuje 23,75 °C, a polem optimální teploty"/>
  </div>
</div>

3. A hlavně vám na mobil přijde **notifikace**, kdyby byla psovi v boudě zima, takže boudu můžete kontrolovat odkudkoli a kdykoli. 🕵️ Šťastný pes = dobrý pes! 🐕
