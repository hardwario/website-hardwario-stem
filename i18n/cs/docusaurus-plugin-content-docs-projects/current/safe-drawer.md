---
slug: safe-drawer
title: Tajný šuplík
---
import Image from '@theme/IdealImage';

## Úvod

Máte v šuplíku deníček, básničky nebo tajný vládní dokument? Pokud je to něco, co by nikdo neměl vidět, zabezpečte to. 🔒 Ze Sady Start si vyrobte IoT hlídače šuplíku, který vám pošle upozornění na mobil. 📲

V tomto projektu se naučíte vytvořit **detektor otevření šuplíku, který vám pošle upozornění na mobil**. 👈

Budete potřebovat jen **krabičku s tlačítkem** a **USB dongle**. Vystačíte si proto se základní [**Sadou Start**](https://www.hardwario.store/cz/p/start-set).


## Stáhněte si nový firmware

1. Do modulu Core Module nahrajte speciální firmware **twr-radio-move-detector-x-axis** (najdete ho mezi ostatním firmwarem v Playgroundu). Díky tomuto firmwaru bude krabička citlivější na pohyb. 👌

**Náš tip:** Nevíte, jak si firmware stáhnout nebo co to je? [Najdete to tady](https://docs.hardwario.com/tower/desktop-programming/firmware-flashing/).

2. [Spárujte modul Core Module s USB donglem](https://docs.hardwario.com/tower/desktop-programming/radio-network-management/#pairing-new-devices). Hned po spárování uvidíte, že se alias modulu Core Module změnil na **x-axis-detector**.

<div class="container">
  <div class="row">
    <Image img={require('./img/safe-drawer/safe-drawer-1.webp')} alt="Záložka Devices v Playgroundu: řádek spárovaného zařízení se zvýrazněným aliasem x-axis-detector:0"/>
  </div>
</div>


## Připravte si aplikaci Blynk IoT

Krabička se vám bude hlásit na mobil přes aplikaci **Blynk IoT**. 📱 Nastavíte v ní dvě věci: **přepínač**, kterým detektor zapnete a vypnete, a **push notifikaci**, která přijde, když někdo otevře šuplík. Node-RED pošle text upozornění do Blynku a automatizace v Blynku z každé nové zprávy udělá notifikaci.

1. Pokud ještě nemáte účet v [Blynk IoT](https://blynk.io), založte si ho. Na tento projekt stačí bezplatný tarif: v době psaní návodu zahrnuje push notifikace v aplikaci a až pět automatizací.

2. Vytvořte šablonu zařízení (template). Jak na to, ukazuje [rychlý návod Blynku](https://docs.blynk.io/en/getting-started/template-quick-setup). Můžete také použít šablonu z některého předchozího projektu.

3. **Přidejte datastream pro zprávu.** V šabloně otevřete záložku **Datastreams**, vpravo nahoře klikněte na **Edit**, pak na **New Datastream** a vyberte **Virtual Pin**. Datastream pojmenujte (třeba `Zprava`), vyberte volný pin (třeba V2) a jako datový typ (**Data Type**) zvolte **String**, protože notifikace ponese váš vlastní text. V nastavení datastreamu povolte, aby ho automatizace mohly použít jako spouštěč: v části **Automations** zapněte **Use as Condition**. Datastream vytvořte.

4. **Přidejte datastream pro stav detektoru.** Přidejte ještě jeden datastream typu **Virtual Pin** (třeba `Detektor` na V3) a zvolte typ **Integer** s rozsahem **0–1** (0 = vypnuto, 1 = zapnuto). Klikněte na **Create** a šablonu uložte tlačítkem **Save**.

5. Ze šablony založte zařízení: v sekci **Devices** přidejte nové zařízení, vyberte svou šablonu a zařízení pojmenujte. Na jeho záložce **Device Info** najdete **Auth Token**, který budete potřebovat v Node-RED.

## Vytvořte automatizaci

1. V Blynku otevřete **Automations** a založte novou automatizaci. Jako podmínku (**When**) zvolte **Device State**, pak své zařízení, datastream pro zprávu a **Is Any**. Automatizace tak zareaguje na každou zprávu, i když bude stejná jako minulá.

2. V části **Do this** přidejte akci, která pošle notifikaci do mobilní aplikace (**Send In-App Notifications**), a jako příjemce zvolte sebe. Do textu notifikace vložte zástupný symbol **Trigger value** (`{TRIGGER_VALUE}`). Blynk za něj dosadí text, který mu pošle Node-RED.

3. Automatizaci pojmenujte. **Limit period** určuje, za jak dlouho se automatizace smí spustit znovu: zvolte co nejkratší dobu, jinak by druhá zpráva odeslaná krátce po první nedorazila. Automatizaci uložte.

4. Stáhněte si do mobilu **aplikaci Blynk IoT** z [App Store](https://apps.apple.com/us/app/blynk-iot/id1559317868) nebo [Google Play](https://play.google.com/store/apps/details?id=cloud.blynk) a přihlaste se stejným účtem. Zkontrolujte, že má aplikace povolené notifikace, aby vám upozornění mohlo naskočit. 📱

5. V mobilu otevřete zařízení a nastavte jeho dashboard: přidejte widget **Button**, přepněte ho do režimu **Switch** a přiřaďte mu datastream se stavem detektoru. Detektor pak budete pohodlně zapínat a vypínat z mobilu.


## Nastavte zprávu v Node-RED

1. V Playgroundu klikněte na **záložku Functions**, kde je programovací plocha [Node-RED](https://docs.hardwario.com/tower/desktop-programming/node-red-programming/).

2. Začněte jako vždy: na plochu nejdřív umístěte **uzel mqtt in** ze sekce network.

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

7. Na konec tohoto potravního řetězce umístěte uzel **write** ze sekce **Blynk IoT**. Sekci **Blynk ws** nepoužívejte, patří ke starému Blynku, který už nefunguje.

8. Dvakrát na něj klikněte, aby se otevřelo nastavení. Vedle pole **Connection** uvidíte **malou tužku**. Klikněte na ni a otevře se nové okno. Do pole **Url** zadejte `blynk.cloud` a do polí **Auth Token** a **Template ID** zkopírujte hodnoty z webové aplikace Blynk na počítači: Auth Token najdete na záložce **Device Info** zařízení, Template ID v detailu šablony. Potvrďte tlačítkem **Add**.

**Náš tip:** Připojení pojmenujte, ať ho v dalších uzlech snadno poznáte.

9. Do pole **Virtual Pin** zadejte číslo pinu datastreamu pro zprávu (pro V2 je to 2). Díky tomu se z otevření šuplíku stane push notifikace: uzel zapíše zprávu do datastreamu a automatizace ji pošle dál. Potvrďte tlačítkem **Done**.

10. Teď celý řetězec **propojte**: MQTT ➡️ Switch ➡️ Change ➡️ Blynk IoT write. A jdeme dál.

## Nastavte v Node-RED přepínač detektoru

Druhý řetězec čte widget **Switch** ve vašem mobilu, takže detektor můžete zapínat a vypínat na dálku.

1. Začněte další řetězec: na plochu umístěte **uzel write event** ze sekce **Blynk IoT**. Ten přijímá stav přepínače z mobilu.

2. Dvojklikem ho otevřete. V řádku **Connection** vyberte připojení, které jste nastavili výše u uzlu write. Do řádku **Virtual Pin** zadejte číslo pinu datastreamu se stavem detektoru (pro V3 je to 3). Potvrďte tlačítkem **Done**.

3. A poslední uzel do party: na plochu umístěte **uzel Change** ze sekce Function.

4. Uzel nastavíte tak, aby reagoval na zapnutí a vypnutí přepínače v Blynku. Dvojklikem ho otevřete a do políček Rules postupně zadejte **flow.active** a **msg.payload**, aby se hodnota přepínače ukládala do proměnné `flow.active`, kterou kontroluje uzel Switch v prvním řetězci.

5. Teď tuhle dvojici **propojte**. Nezapomeňte také kliknout na tlačítko **Deploy** vpravo nahoře, aby se všechno spustilo.


## Nastražte past

1. **Krabičku položte do šuplíku** naplocho.

2. Všechno ostatní už ovládáte z mobilu. 📱 Otevřete zařízení v aplikaci Blynk IoT a **zapněte detektor** přepnutím widgetu Switch do polohy ON. (Pokud už je zapnutý z dřívějška, vypněte ho a znovu zapněte, ať se Node-RED dozví jeho stav.)

3. A čekejte, až se myška chytí. 🥁 Jakmile někdo otevře šuplík, **na mobilu vám naskočí push notifikace**. Mezitím si **naplánujte, co s nenechavcem uděláte**. Doporučujeme, ať za vás týden dělá domácí práce. Zaslouží si to.
