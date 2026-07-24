---
slug: kennel-temperature-monitor-upgrade
title: Monitor teploty psí boudy - Vylepšení
---
import Image from '@theme/IdealImage';

## Úvod

Základní verzi detektoru teploty do psí boudy už máš? Postav si ještě o třídu lepší. Bude ti posílat notifikace do mobilu a teplotní stav boudy uvidíš odkudkoli. 🐶

S tímhle projektem se naučíš nastavit krabičku tak, aby ti **poslala zprávu, když teplota překročí přednastavenou hodnotu**. 👌 Štěkat krabička sice nezačne, ale i tak je to super projekt. 🐩

Základní verzi tohohle projektu najdeš tady: [Hlídač teploty pro chlupatého hlídače: kontroluj teplotu v boudě svého psa](/cs/projects/kennel-temperature-monitor/).

Tentokrát ti taky postačí základní HARDWARIO sada, tedy [**Start Set**](https://www.hardwario.store/p/start-set).


## Připrav si Node-RED

1. Firmware, který k projektu potřebuješ, je známý **bcf-radio-push-button**. Máš ho tam? Tak na co čekáš, krabičku spáruj s Donglem.
<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-1.webp')} alt="Záložka Devices v Playgroundu: řádek spárovaného zařízení se zvýrazněným aliasem push-button:0"/>
  </div>
</div>

2. V Playgroundu překlikni na záložku **Functions** a polož na plochu úplně to samé, co v základní verzi projektu:

- jeden kousek **MQTT nodu** ze sekce Input (nahraj na něj znovu **Topic**

```
node/push-button:0/thermometer/0:1/temperature),
```

- a ukazatel, tedy node **Gauge** ze sekce Dashboard. Měl by ukazovat od −15 do 40 °C. Navíc si ho pojmenuj, pro lepší orientaci. ✍️
<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-2.webp')} alt="Plocha Node-RED s MQTT uzlem teploty a uzlem budíku boudy umístěnými na ploše"/>
  </div>
</div>

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-3.webp')} alt="Dialog úprav se zvýrazněnými poli Label, formát hodnoty se °C a rozsah teplot"/>
  </div>
</div>

Drž si cylindr, jedeme dál. 🎩

## Připrav Blynk IoT pro upozornění

Teplotní upozornění ti dorazí do telefonu skrz aplikaci **Blynk IoT** jako push notifikace. A přesně tohle dělá z krabičky chytrou věc. 😎

1. Pokud ještě žádný nemáš, založ si účet v [Blynk IoT](https://docs.hardwario.com/tower/platform-integrations/blynk-app/). Jak si nastavit účet, šablonu zařízení (device template) a zařízení (device) se dozvíš v [tomhle návodu](https://docs.hardwario.com/tower/platform-integrations/blynk-app/) — budeš potřebovat všechny tři. Klidně můžeš použít i šablonu z předchozího projektu.

2. V Blynk IoT se upozornění na obrazovku telefonu neumisťuje jako widget — posílá se jako **Event** (událost) definovaný na tvé šabloně. V detailu šablony otevři záložku **Events** a přidej nový event (pojmenuj ho například `kennel_temp` a dej mu zprávu, kterou chceš dostávat, třeba _It is too cold in the kennel_). Pak pro tenhle event zapni **Notifications**, aby ti ho Blynk doručil do telefonu. [Návod](https://docs.hardwario.com/tower/platform-integrations/blynk-app/) tě nastavením šablony provede.

3. Stáhni si do telefonu aplikaci **Blynk IoT** z [App Store](https://apps.apple.com/us/app/blynk-iot/id1559317868) nebo [Google Play](https://play.google.com/store/apps/details?id=cloud.blynk) a přihlas se stejným účtem. Ujisti se, že má aplikace povolené notifikace, aby se upozornění mohlo objevit. 📱 Nejdřív ale musíš vylepšit svůj Node-RED, jinak to nic dělat nebude.


## Upgraduj v Node-RED

1. Vrať se k počítači a do Playground nastav další funkce. První z nich bude **notifikace na mobil**. Tu zprovozníš díky třem nodům.

- První node: **node Switch** ze sekce Function.
<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-4.webp')} alt="Plocha Node-RED se zvýrazněným uzlem Switch ze sekce Function nad uzlem budíku"/>
  </div>
</div>

Uvnitř nodu nastav to, co vidíš níž na obrázku:

a. jako vybranou vlastnost (Property) použij **msg. payload**,

b. zvol, aby se notifikace poslala, když bude teplota rovna nebo nižší −15 °C. Pracuj s proměnnou **flow. optimalTemp** a se značkou menší/rovná se: 
`**<=**`.
<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-5.webp')} alt="Dialog Edit switch node: vlastnost msg.payload s pravidlem porovnávajícím flow.optimalTemp"/>
  </div>
</div>

- Druhý: **node Change** ze stejné sekce. Ten ovlivňuje, jaká zpráva ti na mobil přijde.
<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-6.webp')} alt="Plocha Node-RED se zvýrazněným uzlem Change (set msg.payload) vedle uzlu Switch"/>
  </div>
</div>

Uvnitř nodu nastav, co ti telefon zahlásí, až teplota v boudě klesne pod nejnižší teplotu, kterou sis nastavil. Třeba _V boude je moc velka zima_.

**Náš tip**: Zprávu piš bez háčků a čárek, Blynk jim bohužel nerozumí.

- Třetí: **node Blynk IoT**, který umí spustit tvůj event (node **log event**), ze sekce Blynk IoT. Ten zajišťuje propojení s mobilem.
Dvojklikem node otevři. Vpravo uvidíš **malou tužku**. Klikni na ni a otevře se nové okno. Do pole **Url** zadej `blynk.cloud` a do polí **Auth Token** a **Template ID** zkopíruj hodnoty z detailu zařízení ve webové aplikaci Blynk IoT na počítači. Potvrď tlačítkem **Add**.

Pak node nastav tak, aby spouštěl **Event**, který jsi vytvořil (kód eventu, např. `kennel_temp`). Právě tohle promění příliš nízkou naměřenou teplotu v push notifikaci. Potvrď tlačítkem **Done**.

**Náš tip**: V řádku name si propojení ještě pojmenuj, abys ho později poznal.

## Hoď tam flow, které hlídá optimální teplotu

1. Poslední třešinka na dortu. Tohle flow se bude skládat ze dvou nodů.

První je **node Numeric** ze sekce Dashboard. Zní to jako nějaký padouch z komiksu, že jo? Teď je to ale tvůj kámoš.

Node Numeric ti umožní nastavit nejnižší přípustnou teplotu rovnou z Dashboardu v Playgroundu. **Zajistí, že se práh dá snadno upravit.**
<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-12.webp')} alt="Plocha Node-RED se zvýrazněným uzlem Numeric ze sekce Dashboard"/>
  </div>
</div>

Uvnitř nastav **měrnou jednotku** (°C), **teplotní rozmezí** ( −15 a 40) a **název nodu**.

<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-13.webp')} alt="Dialog Edit numeric node: zvýrazněná pole Label, formát hodnoty se °C a rozsah min -15 max 50"/>
  </div>
</div>

3. Vedle toho umísti další **Change node**.
<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-14.webp')} alt="Plocha Node-RED se zvýrazněným uzlem Change (set msg.payload) vedle uzlu Numeric"/>
  </div>
</div>

4. V něm nastav, aby se podle změny v nodu Numeric rovnou aktualizovala hodnota minimální teploty (optimalTemp). Mrkej na obrázek.
<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-15.webp')} alt="Dialog Edit change node: zvýrazněné pravidlo Set flow.optimalTemp na msg.payload"/>
  </div>
</div>

5. Teď už ti to zbývá **propojit podle obrázku** a potvrdit tlačítkem **Deploy**. 🙌
<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-18.webp')} alt="Hotový flow v Node-RED s propojenými uzly a zvýrazněným tlačítkem Deploy"/>
  </div>
</div>

## A... akce!

1. Krabičku zase nalep na **vnitřní stěnu boudy**.
2. Teplota naměřená v boudě se ti ukazuje v Playgroundu **na záložce Dashboard**…
<div class="container">
  <div class="row">
    <Image img={require('./img/kennel-temperature-monitor-upgrade/kennel-temperature-monitor-upgrade-19.webp')} alt="Dashboard s budíkem teploty v boudě ukazujícím 23,75 °C a polem optimální teploty"/>
  </div>
</div>

3. A hlavně dostaneš na mobil **notifikaci**, kdyby bylo rafíkovi moc hic nebo velká kosa — takže můžeš boudu čekovat odkudkoli a kdykoli. 🕵️ Šťastný pes = dobrý pes! 🐕
