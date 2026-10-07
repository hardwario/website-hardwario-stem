---
slug: kennel-temperature-monitor-upgrade
title: Vylepšený monitor teploty psí boudy
---
import Image from '@theme/IdealImage';

## Úvod

Základní verzi hlídače teploty psí boudy už máte? Postavte si ještě o třídu lepší. Bude vám posílat notifikace do mobilu, takže o zimě v boudě budete vědět, ať jste kdekoli. 🐶

S tímto projektem se naučíte nastavit krabičku tak, aby vám **poslala zprávu, když teplota klesne pod nastavenou hodnotu**. 👌 Štěkat krabička sice nezačne, ale i tak je to skvělý projekt. 🐩

Základní verzi tohoto projektu najdete tady: [Hlídač teploty pro chlupatého hlídače: kontrolujte teplotu v boudě svého psa](/cs/projects/kennel-temperature-monitor/).

I tentokrát vám postačí základní sada HARDWARIO, tedy [**Sada Start**](https://www.hardwario.store/cz/p/start-set).


## Připravte si Node-RED

1. K projektu potřebujete známý firmware **twr-radio-push-button**. Máte ho nahraný? Tak na nic nečekejte a spárujte krabičku s donglem.
<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-1.webp')} alt="Záložka Devices v Playgroundu: řádek spárovaného zařízení se zvýrazněným aliasem push-button:0"/>
  </div>
</div>

2. V Playgroundu přepněte na záložku **Functions** a umístěte na plochu totéž co v základní verzi projektu:

- jeden **uzel mqtt in** ze sekce network, do kterého znovu vložte tento **Topic**:

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

Upozornění na teplotu vám přijde do telefonu jako push notifikace z aplikace **Blynk IoT**. Právě tím se z krabičky stává chytrá věc. 😎 Node-RED pošle text upozornění do Blynku a automatizace v Blynku z každé nové zprávy udělá notifikaci.

1. Pokud ještě nemáte účet v [Blynk IoT](https://blynk.io), založte si ho. Na tento projekt stačí bezplatný tarif: v době psaní návodu zahrnuje push notifikace v aplikaci a až pět automatizací.

2. Vytvořte šablonu zařízení (template). Jak na to, ukazuje [rychlý návod Blynku](https://docs.blynk.io/en/getting-started/template-quick-setup). Můžete také použít šablonu z některého předchozího projektu.

3. V šabloně otevřete záložku **Datastreams**, klikněte na **New Datastream** a vyberte **Virtual Pin**. Datastream pojmenujte (třeba `Zprava`), vyberte volný pin (třeba V2) a jako datový typ (**Data Type**) zvolte **String**, protože notifikace ponese váš vlastní text.

4. V nastavení datastreamu povolte, aby ho automatizace mohly použít jako spouštěč: v části **Automations** zapněte **Use as Condition**. Datastream vytvořte a šablonu uložte.

5. Ze šablony založte zařízení: v sekci **Devices** přidejte nové zařízení, vyberte svou šablonu a zařízení pojmenujte. Na jeho záložce **Device Info** najdete **Auth Token**, který budete potřebovat v Node-RED.

## Vytvořte automatizaci

1. V Blynku otevřete **Automations** a založte novou automatizaci. Jako podmínku (**When**) zvolte **Device State**, pak své zařízení, svůj datastream a **Is Any**. Automatizace tak zareaguje na každou zprávu, i když bude stejná jako minulá.

2. V části **Do this** přidejte akci, která pošle notifikaci do mobilní aplikace (**Send In-App Notifications**), a jako příjemce zvolte sebe. Do textu notifikace vložte zástupný symbol **Trigger value** (`{TRIGGER_VALUE}`). Blynk za něj dosadí text, který mu pošle Node-RED.

3. Automatizaci pojmenujte. **Limit period** určuje, za jak dlouho se automatizace smí spustit znovu. Dokud je v boudě zima, krabička posílá teplotu pořád dokola, proto zvolte delší dobu, třeba hodinu: stačí vám jedno upozornění, ne jedno za každé měření. Automatizaci uložte.

4. Stáhněte si do telefonu aplikaci **Blynk IoT** z [App Store](https://apps.apple.com/us/app/blynk-iot/id1559317868) nebo [Google Play](https://play.google.com/store/apps/details?id=cloud.blynk) a přihlaste se stejným účtem. Zkontrolujte, že má aplikace povolené notifikace, aby se upozornění mohlo zobrazit. 📱 Nejdřív ale musíte vylepšit Node-RED, jinak se nic nestane.


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

b. nastavte, aby se notifikace poslala, když teplota klesne na hodnotu proměnné **flow.optimalTemp** (třeba −15 °C) nebo níž. Použijte operátor menší nebo rovno `<=` (na obrázku je ještě `==`, ten změňte).
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

- Třetí: uzel **write** ze sekce **Blynk IoT**. Přes něj vede spojení s mobilem. Sekci **Blynk ws** nepoužívejte, patří ke starému Blynku, který už nefunguje.
Uzel otevřete dvojklikem. Vedle pole **Connection** uvidíte **malou tužku**. Klikněte na ni a otevře se nové okno. Do pole **Url** zadejte `blynk.cloud` a do polí **Auth Token** a **Template ID** zkopírujte hodnoty z webové aplikace Blynk na počítači: Auth Token najdete na záložce **Device Info** zařízení, Template ID v detailu šablony. Potvrďte tlačítkem **Add**.

Pak do pole **Virtual Pin** zadejte číslo pinu svého datastreamu (pro V2 je to 2). Právě tím se příliš nízká naměřená teplota promění v push notifikaci: uzel zapíše zprávu do datastreamu a automatizace ji pošle dál. Potvrďte tlačítkem **Done**.

**Náš tip**: V řádku Name propojení pojmenujte, ať ho později poznáte.

## Přidejte flow, který hlídá optimální teplotu

1. Teď přijde třešnička na dortu. Tento flow se bude skládat ze dvou uzlů.

První je **uzel Numeric** ze sekce Dashboard. Zní to jako padouch z komiksu, že? Teď je to ale váš pomocník.

Pomocí uzlu Numeric nastavíte nejnižší přípustnou teplotu přímo z Dashboardu v Playgroundu. **Práh tak snadno upravíte.**
<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-12.webp')} alt="Plocha Node-RED se zvýrazněným uzlem Numeric ze sekce Dashboard"/>
  </div>
</div>

2. V uzlu nastavte **jednotku** (°C), **teplotní rozsah** (−15 až 50) a **název uzlu**.

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

5. Teď už zbývá uzly **propojit podle obrázku** a potvrdit tlačítkem **Deploy**. 🙌 Uzel MQTT vede do ukazatele Gauge i do uzlu Switch, dál pak Switch ➡️ Change ➡️ write; ve druhém flow Numeric ➡️ Change. Obrázek pochází ze starší verze projektu: první flow v něm končí starým uzlem **notify** pro Blynk a je na něm ještě pár dalších uzlů Blynku. Místo uzlu notify použijte svůj uzel write a ostatní uzly Blynku vynechte.
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
