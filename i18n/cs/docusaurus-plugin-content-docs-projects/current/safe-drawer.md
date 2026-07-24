---
slug: safe-drawer
title: Tajný šuplík
---
import Image from '@theme/IdealImage';

## Úvod

Máš v šuplíku deníček, básničky nebo tajný vládní dokument? Pokud je to něco, co by nikdo neměl vidět, zabezpeč to. 🔒 Vytvoř si ze Start Sady IoT hlídače šuplíku, který ti pošle upozornění na mobil. 📲

V tomhle projektu se naučíš vytvořit **detektor otevírání šuplíku, který ti pošle upozornění na mobil**. 👈

Budeš potřebovat jen **krabičku s tlačítkem** a **USB dongle**. Proto si vystačíš se základní HARDWARIO sadou – [**Starter Kitem**](https://www.hardwario.store/starter-kit/).


## Stáhni si nový firmware

1. Na Core Module nahraj speciální firmware, a to **bcf-radio-x-axis-detector** (najdeš ho mezi ostatním firmwarem v Playgroundu). Díky tomuhle firmwaru bude krabička citlivější na pohyb. 👌

**Náš tip:** Nevíš, jak si firmware stáhnout nebo co to je? [Zjistíš to tady](https://docs.hardwario.com/tower/firmware-development/hardwario-extension-tutorial/#flash-firmware)

2. [Core Module spáruj s USB Donglem](https://docs.hardwario.com/tower/platform-integrations/homekit-and-siri/#pair-the-device) Hned po spárování uvidíš, že tvůj Core Module změnil Alias na **x-axis-detector**.

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-1.webp')} alt="Záložka Devices v Playgroundu: řádek spárovaného zařízení se zvýrazněným aliasem x-axis-detector:0"/>
  </div>
</div>


## Připrav si appku Blynk IoT

Krabička se ti bude hlásit na mobil přes appku **Blynk IoT**. 📱 Nastavíš si v ní dvě věci: **přepínač** pro zapnutí a vypnutí detektoru a **push notifikaci**, která se spustí, když někdo otevře šuplík.

1. Pokud ho ještě nemáš, vytvoř si účet v [Blynk IoT](https://docs.hardwario.com/tower/platform-integrations/blynk-app/). V [tomhle návodu](https://docs.hardwario.com/tower/platform-integrations/blynk-app/) najdeš, jak si založit účet, šablonu zařízení (device template) a zařízení (device) – budeš potřebovat všechny tři. Můžeš taky využít šablonu z některého předchozího projektu.

2. **Přidej Datastream pro stav detektoru.** V detailu šablony otevři záložku **Datastreams**, vpravo nahoře klikni na **Edit**, pak na **+ New Datastream** a zvol **Virtual Pin**. Vyber volný Pin a zvol typ **Integer** s rozsahem **0 - 1** (0 = vypnuto, 1 = zapnuto). Zapamatuj si číslo Pinu – budeš ho potřebovat v Node-RED. Klikni na **Create** a šablonu ulož přes **Save**.

3. **Přidej notifikační Event.** V šabloně otevři záložku **Events** a přidej nový event (třeba ho pojmenuj `drawer` a dej mu zprávu, kterou chceš dostávat – pozor, Blynk neumí čárky, háčky ani speciální znaky 🤷). Pro tenhle event zapni **Notifications**, aby ti Blynk doručil upozornění na mobil. [Návod](https://docs.hardwario.com/tower/platform-integrations/blynk-app/) tě nastavením šablony provede.

4. Pokud ještě nemáš zařízení, **vytvoř si device** ze své šablony – popsané je to ve [stejném návodu](https://docs.hardwario.com/tower/platform-integrations/blynk-app/).

5. Stáhni si do mobilu **appku Blynk IoT** z [App Store](https://apps.apple.com/us/app/blynk-iot/id1559317868) nebo [Google Play](https://play.google.com/store/apps/details?id=cloud.blynk) a přihlas se stejným účtem. Zkontroluj, že má appka povolené notifikace, aby ti upozornění mohlo naskočit. 📱

6. V mobilu otevři zařízení a nastav si jeho dashboard: přidej widget **Button**, přepni ho do režimu **Switch** a přiřaď mu Datastream se stavem detektoru, který jsi vytvořil. Takhle budeš detektor z mobilu pohodlně zapínat a vypínat.


## Nastav v Node-RED zprávu

1. V Playgroundu klikni na **záložku Functions**, kde je programovací plocha [Node-RED](https://docs.hardwario.com/tower/desktop-programming/node-red-programming/).

2. Začni jako vždycky: na plochu nejdřív umísti **MQTT node** ze sekce Input.

Dvakrát na něj klikni a do řádku zkopíruj **Topic**, se kterým krabička odhalí změnu pohybu:

```
node/x-axis-detector:0/accelerometer/-/event-count
```

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-2.webp')} alt="Dialog Edit mqtt in node s tématem event-count akcelerometru ve zvýrazněném poli Topic"/>
  </div>
</div>

3. Vedle tohohle nodu umísti **node Switch** ze sekce **Function**. Díky tomuhle nodu můžeš detekci vypnout, když jsi doma a otvíráš šuplík sám.

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-3.webp')} alt="Plocha Node-RED s uzlem Switch umístěným vedle MQTT uzlu x-axis-detectoru"/>
  </div>
</div>

4. Uvnitř nodu změň řádek Property na **flow. active**. Do řádku níž číslici **1**. S touhle jedničkou se notifikace pošle, když je tlačítko zapnuté, jinak se zahodí. Mrkej na obrázek.

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-4.webp')} alt="Dialog Edit switch node: Property nastaveno na flow.active s pravidlem rovná se 1"/>
  </div>
</div>

5. Za tohle postav ještě **node Change** ze sekce Function.

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-5.webp')} alt="Plocha Node-RED s uzlem Change (set msg.payload) přidaným za uzel Switch"/>
  </div>
</div>

6. V něm si nastav **zprávu, která se ti pošle do mobilu**. Dávej bacha, čárky a háčky Blynk neumí. 🤷

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-6.webp')} alt="Dialog Edit change node: msg.payload nastaven na text upozornění"/>
  </div>
</div>

7. Na konec tohohle potravního řetězce umísti node ze sekce **Blynk IoT**, který umí spustit tvůj event (node **log event**).

8. Dvakrát na něj klikni, ať se ti otevře nastavení. Vpravo uvidíš **malou tužtičku**. Klikni na ni a otevře se nové okno. Do pole **Url** zadej `blynk.cloud` a do polí **Auth Token** a **Template ID** zkopíruj hodnoty z detailu zařízení ve webové appce Blynk IoT na svém počítači. Potvrď tlačítkem **Add**.

**Náš tip:** Připojení pojmenuj, ať ho v dalších nodech snadno poznáš.

9. Nastav node tak, aby spouštěl **Event**, který jsi vytvořil (kód eventu, např. `drawer`). Tohle z otevření šuplíku udělá push notifikaci. Potvrď tlačítkem **Done**.

10. Teď tenhle řetězec **pospojuj** – MQTT ➡️ Switch ➡️ Change ➡️ Blynk IoT log event. A jdeme dál.

## Nastav v Node-RED detektor přepínače

Tenhle druhý řetězec čte widget **Switch** z tvého mobilu, takže můžeš detektor zapínat a vypínat na dálku.

1. Načni další řetězec. Polož na plochu **node Write** ze sekce **Blynk IoT**. Ten čte stav přepínače.

2. Dvojklikem ho otevři. Na řádku **Connection** vyber připojení, které jsi nastavil výš u nodu log event. Do řádku **Virtual Pin** vyplň číslo Datastreamu se stavem detektoru, který jsi vytvořil v Blynku (bez písmene „V"). Potvrď tlačítkem **Done**.

3. A poslední node do party. Polož na plochu **node Change** ze sekce Function.

4. Node nastavíš tak, aby reagoval na vypnutí a zapnutí přepínače na Blynku. Dvojklikem ho otevři a nastav do políček Rules postupně **flow.active** a **msg.payload**, aby se hodnota přepínače ukládala do `flow.active` (které kontroluje node Switch v prvním řetězci).

5. Teď tyhle dva hezouny **spoj**. Nezapomeň taky kliknout na tlačítko **Deploy** vpravo nahoře, aby se všechno zprovoznilo.


## Spusť pastičku

1. **Krabičku polož do šuplíku** naležato.

2. Všechno ostatní už ovládej z mobilu. 📱 Otevři zařízení v appce Blynk IoT a **zapni detektor** přepnutím widgetu Switch do polohy ON.

3. A čekej, až se myška chytí. 🥁 Jakmile někdo otevře šuplík, **na mobilu naskočí push notifikace**. Mezitím **naplánuj, co s nenechavým neřádem uděláš**. Doporučujeme nechat ho týden dělat domácí práce za tebe. Však si to zaslouží.
