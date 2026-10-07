---
slug: safe-drawer
title: Tajný šuplík
---
import Image from '@theme/IdealImage';

## Úvod

Máte v šuplíku deníček, básničky nebo tajný vládní dokument? Pokud je to něco, co by nikdo neměl vidět, zabezpečte to. 🔒 Ze sady Start Set si vyrobte IoT hlídače šuplíku, který vám pošle upozornění na mobil. 📲

V tomto projektu se naučíte vytvořit **detektor otevření šuplíku, který vám pošle upozornění na mobil**. 👈

Budete potřebovat jen **krabičku s tlačítkem** a **USB dongle**. Vystačíte si proto se základní sadou HARDWARIO [**Start Set**](https://www.hardwario.store/cz/p/start-set).


## Stáhněte si nový firmware

1. Do modulu Core Module nahrajte speciální firmware **bcf-radio-x-axis-detector** (najdete ho mezi ostatním firmwarem v Playgroundu). Díky tomuto firmwaru bude krabička citlivější na pohyb. 👌

**Náš tip:** Nevíte, jak si firmware stáhnout nebo co to je? [Najdete to tady](https://docs.hardwario.com/tower/firmware-development/hardwario-extension-tutorial/#flash-firmware).

2. [Spárujte modul Core Module s USB donglem](https://docs.hardwario.com/tower/platform-integrations/homekit-and-siri/#pair-the-device). Hned po spárování uvidíte, že se alias modulu Core Module změnil na **x-axis-detector**.

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-1.webp')} alt="Záložka Devices v Playgroundu: řádek spárovaného zařízení se zvýrazněným aliasem x-axis-detector:0"/>
  </div>
</div>


## Připravte si aplikaci Blynk IoT

Krabička se vám bude hlásit na mobil přes aplikaci **Blynk IoT**. 📱 Nastavíte v ní dvě věci: **přepínač**, kterým detektor zapnete a vypnete, a **push notifikaci**, která přijde, když někdo otevře šuplík.

1. Pokud ještě účet nemáte, vytvořte si ho v [Blynk IoT](https://docs.hardwario.com/tower/platform-integrations/blynk-app/). V [tomto návodu](https://docs.hardwario.com/tower/platform-integrations/blynk-app/) najdete, jak si založit účet, šablonu zařízení (device template) a zařízení (device). Budete potřebovat všechny tři. Můžete také použít šablonu z některého předchozího projektu.

2. **Přidejte datastream pro stav detektoru.** V detailu šablony otevřete záložku **Datastreams**, vpravo nahoře klikněte na **Edit**, pak na **+ New Datastream** a zvolte **Virtual Pin**. Vyberte volný pin a zvolte typ **Integer** s rozsahem **0–1** (0 = vypnuto, 1 = zapnuto). Poznamenejte si číslo pinu, budete ho potřebovat v Node-RED. Klikněte na **Create** a šablonu uložte tlačítkem **Save**.

3. **Přidejte událost pro notifikaci.** V šabloně otevřete záložku **Events** a přidejte novou událost (**Event**). Pojmenujte ji třeba `drawer` a zadejte zprávu, kterou chcete dostávat. Pozor, Blynk neumí čárky, háčky ani speciální znaky. 🤷 Pro tuto událost zapněte **Notifications**, aby vám Blynk doručil upozornění na mobil. Nastavením šablony vás provede [návod](https://docs.hardwario.com/tower/platform-integrations/blynk-app/).

4. Pokud ještě nemáte zařízení, **vytvořte si ho** ze své šablony. Postup najdete ve [stejném návodu](https://docs.hardwario.com/tower/platform-integrations/blynk-app/).

5. Stáhněte si do mobilu **aplikaci Blynk IoT** z [App Store](https://apps.apple.com/us/app/blynk-iot/id1559317868) nebo [Google Play](https://play.google.com/store/apps/details?id=cloud.blynk) a přihlaste se stejným účtem. Zkontrolujte, že má aplikace povolené notifikace, aby vám upozornění mohlo naskočit. 📱

6. V mobilu otevřete zařízení a nastavte jeho dashboard: přidejte widget **Button**, přepněte ho do režimu **Switch** a přiřaďte mu vytvořený datastream se stavem detektoru. Detektor pak budete pohodlně zapínat a vypínat z mobilu.


## Nastavte zprávu v Node-RED

1. V Playgroundu klikněte na **záložku Functions**, kde je programovací plocha [Node-RED](https://docs.hardwario.com/tower/desktop-programming/node-red-programming/).

2. Začněte jako vždy: na plochu nejdřív umístěte **uzel MQTT** ze sekce Input.

Dvakrát na něj klikněte a do řádku **Topic** zkopírujte tento topic, přes který krabička hlásí pohyb:

```
node/x-axis-detector:0/accelerometer/-/event-count
```

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-2.webp')} alt="Dialog Edit mqtt in node s topicem event-count akcelerometru ve zvýrazněném poli Topic"/>
  </div>
</div>

3. Vedle tohoto uzlu umístěte **uzel Switch** ze sekce **Function**. Díky němu můžete detekci vypnout, když jste doma a šuplík otvíráte sami.

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-3.webp')} alt="Plocha Node-RED s uzlem Switch vedle uzlu MQTT pro x-axis-detector"/>
  </div>
</div>

4. V uzlu změňte řádek Property na **flow.active** a do řádku pod ním zadejte číslici **1**. Díky jedničce se notifikace pošle jen tehdy, když je přepínač zapnutý, jinak se zahodí. Řiďte se obrázkem.

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-4.webp')} alt="Dialog Edit switch node: Property nastaveno na flow.active s pravidlem rovná se 1"/>
  </div>
</div>

5. Za něj umístěte ještě **uzel Change** ze sekce Function.

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-5.webp')} alt="Plocha Node-RED s uzlem Change (set msg.payload) přidaným za uzel Switch"/>
  </div>
</div>

6. V něm nastavte **zprávu, která vám přijde do mobilu**. Pozor, čárky a háčky Blynk neumí. 🤷

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-6.webp')} alt="Dialog Edit change node: msg.payload nastaven na text upozornění"/>
  </div>
</div>

7. Na konec tohoto potravního řetězce umístěte uzel ze sekce **Blynk IoT**, který umí spustit vaši událost (uzel **log event**).

8. Dvakrát na něj klikněte, aby se otevřelo nastavení. Vpravo uvidíte **malou tužku**. Klikněte na ni a otevře se nové okno. Do pole **Url** zadejte `blynk.cloud` a do polí **Auth Token** a **Template ID** zkopírujte hodnoty z detailu zařízení ve webové aplikaci Blynk IoT na počítači. Potvrďte tlačítkem **Add**.

**Náš tip:** Připojení pojmenujte, ať ho v dalších uzlech snadno poznáte.

9. Nastavte uzel tak, aby spouštěl vytvořenou událost (**Event**), v našem příkladu s kódem `drawer`. Díky tomu se z otevření šuplíku stane push notifikace. Potvrďte tlačítkem **Done**.

10. Teď celý řetězec **propojte**: MQTT ➡️ Switch ➡️ Change ➡️ Blynk IoT log event. A jdeme dál.

## Nastavte v Node-RED přepínač detektoru

Druhý řetězec čte widget **Switch** ve vašem mobilu, takže detektor můžete zapínat a vypínat na dálku.

1. Začněte další řetězec: na plochu umístěte **uzel Write** ze sekce **Blynk IoT**. Ten čte stav přepínače.

2. Dvojklikem ho otevřete. V řádku **Connection** vyberte připojení, které jste nastavili výše u uzlu log event. Do řádku **Virtual Pin** zadejte číslo datastreamu se stavem detektoru, který jste vytvořili v Blynku (bez písmene „V“). Potvrďte tlačítkem **Done**.

3. A poslední uzel do party: na plochu umístěte **uzel Change** ze sekce Function.

4. Uzel nastavíte tak, aby reagoval na zapnutí a vypnutí přepínače v Blynku. Dvojklikem ho otevřete a do políček Rules postupně zadejte **flow.active** a **msg.payload**, aby se hodnota přepínače ukládala do proměnné `flow.active`, kterou kontroluje uzel Switch v prvním řetězci.

5. Teď tuhle dvojici **propojte**. Nezapomeňte také kliknout na tlačítko **Deploy** vpravo nahoře, aby se všechno spustilo.


## Nastražte past

1. **Krabičku položte do šuplíku** naplocho.

2. Všechno ostatní už ovládáte z mobilu. 📱 Otevřete zařízení v aplikaci Blynk IoT a **zapněte detektor** přepnutím widgetu Switch do polohy ON.

3. A čekejte, až se myška chytí. 🥁 Jakmile někdo otevře šuplík, **na mobilu vám naskočí push notifikace**. Mezitím si **naplánujte, co s nenechavcem uděláte**. Doporučujeme, ať za vás týden dělá domácí práce. Zaslouží si to.
