---
slug: apology-to-teachers
title: Omluva učiteli
---
import Image from '@theme/IdealImage';

## Úvod

Ani mobilní telefon není neomylný! Občas vás může zradit a nevzbudit. Když se to stane, nezoufejte. Stiskněte 👇 chytré tlačítko a omluvte se učiteli dřív, než to oznámí vašim rodičům.

V tomto projektu se naučíte, **jak chytrým tlačítkem odeslat oznámení**. 📩

Stačí vám k tomu základní [**Sada Start**](https://www.hardwario.store/cz/p/start-set) od HARDWARIO.


## Rozjeďte to v Node-RED

1. Sestavte Sadu Start a spárujte ji. Do modulu Core Module budete potřebovat firmware **twr-radio-push-button**. Pokud to děláte poprvé nebo nevíte, co to firmware vlastně je a jak ho nahrát, připravili jsme pro vás [jednoduchý návod](https://docs.hardwario.com/tower/desktop-programming/firmware-flashing/).
2. V Playgroundu klikněte na záložku **Functions**, kde najdete programovací prostředí [Node-RED](https://docs.hardwario.com/tower/desktop-programming/node-red-programming/). 🤖
3. Z palety vlevo přetáhněte na plochu Node-RED uzel **mqtt in** ze sekce **network**.

<div class="container">
  <div class="row">
    <Image img={require('./img/apology-to-teachers/apology-to-teachers-1.webp')} alt="Paleta Node-RED se zvýrazněným uzlem mqtt in a uzlem mqtt umístěným na ploše"/>
  </div>
</div>

4. V uzlu nastavte klíčovou funkci, tedy stisk tlačítka. Dvojklikem otevřete jeho nastavení a **do pole Topic zkopírujte tento řádek**:

```
node/push-button:0/push-button/-/event-count
```

Potvrďte tlačítkem **Done**.

## Napište text omluvy

1. Text omluvy nastavíte také v Node-RED. Vedle uzlu MQTT umístěte uzel **change** ze sekce **function**. Ten určuje, jaká zpráva se odešle.

<div class="container">
  <div class="row">
    <Image img={require('./img/apology-to-teachers/apology-to-teachers-2.webp')} alt="Zvýrazněný uzel Change v paletě a uzel set msg.payload umístěný vedle uzlu MQTT tlačítka"/>
  </div>
</div>

2. Dvojklikem uzel otevřete a v poli **Rules** nastavte pravidlo **msg.payload** (viz snímek obrazovky níže). Tím určíte text zprávy. Pamatujte, že oznámení nezobrazí háčky a čárky, a nezapomeňte se podepsat. Zpráva může vypadat třeba takto:

_Vazeny pane Datle, omlouvam se, ale muj pes mi bohuzel sezral budik. Prijdu co nejdriv. Evzen (vas oblibeny zak, ktery si nezaslouzi poznamku domu)._

<div class="container">
  <div class="row">
    <Image img={require('./img/apology-to-teachers/apology-to-teachers-3.webp')} alt="Dialog Edit change node s pravidlem Rules nastavujícím msg.payload na text omluvy"/>
  </div>
</div>

Potvrďte tlačítkem **Done**. 👏

## Připravte Blynk IoT na oznámení

Omluva dorazí učiteli do telefonu jako push notifikace z aplikace **Blynk IoT**. 📱 Node-RED pošle text omluvy do Blynku a automatizace v Blynku z každé nové zprávy udělá notifikaci.

1. Pokud ještě nemáte účet v [Blynk IoT](https://blynk.io), založte si ho. Na tento projekt stačí bezplatný tarif: v době psaní návodu zahrnuje push notifikace v aplikaci a až pět automatizací.

2. Vytvořte šablonu zařízení (template). Jak na to, ukazuje [rychlý návod Blynku](https://docs.blynk.io/en/getting-started/template-quick-setup). Můžete také znovu použít šablonu z některého předchozího projektu.

3. V šabloně otevřete záložku **Datastreams**, klikněte na **New Datastream** a vyberte **Virtual Pin**. Datastream pojmenujte (třeba `Zprava`), vyberte volný pin (třeba V2) a jako datový typ (**Data Type**) zvolte **String**, protože notifikace ponese váš vlastní text.

4. V nastavení datastreamu povolte, aby ho automatizace mohly použít jako spouštěč: v části **Automations** zapněte **Use as Condition**. Datastream vytvořte a šablonu uložte.

5. Ze šablony založte zařízení: v sekci **Devices** přidejte nové zařízení, vyberte svou šablonu a zařízení pojmenujte. Na jeho záložce **Device Info** najdete **Auth Token**, který budete potřebovat v Node-RED.

## Vytvořte automatizaci

1. V Blynku otevřete **Automations** a založte novou automatizaci. Jako podmínku (**When**) zvolte **Device State**, pak své zařízení, svůj datastream a **Is Any**. Automatizace tak zareaguje na každou zprávu, i když bude stejná jako minulá.

2. V části **Do this** přidejte akci, která pošle notifikaci do mobilní aplikace (**Send In-App Notifications**), a jako příjemce zvolte sebe. Do textu notifikace vložte zástupný symbol **Trigger value** (`{TRIGGER_VALUE}`). Blynk za něj dosadí text, který mu pošle Node-RED.

3. Automatizaci pojmenujte. **Limit period** určuje, za jak dlouho se automatizace smí spustit znovu: zvolte co nejkratší dobu, jinak by druhá zpráva odeslaná krátce po první nedorazila. Automatizaci uložte.

4. Stáhněte si do telefonu **aplikaci Blynk IoT** z [App Store](https://apps.apple.com/us/app/blynk-iot/id1559317868) nebo [Google Play](https://play.google.com/store/apps/details?id=cloud.blynk) a přihlaste se stejným účtem. Zkontrolujte, že má aplikace povolená oznámení, aby se omluva mohla zobrazit. ✉️

## Nastavte odeslání omluvy

1. Vraťte se do Playgroundu. Na plochu Node-RED přidejte za uzel change s omluvou uzel **write** ze sekce **Blynk IoT**. Sekci **Blynk ws** nepoužívejte, patří ke starému Blynku, který už nefunguje. 📮

2. Dvojklikem uzel otevřete. Vedle pole **Connection** uvidíte **malou tužku**. Klikněte na ni a otevře se nové okno. Do pole **Url** zadejte `blynk.cloud` a do polí **Auth Token** a **Template ID** zkopírujte hodnoty z webové aplikace Blynk na počítači: Auth Token najdete na záložce **Device Info** zařízení, Template ID v detailu šablony. Potvrďte tlačítkem **Add**.

3. Do pole **Virtual Pin** zadejte číslo pinu svého datastreamu (pro V2 je to 2). Právě tím se stisk tlačítka promění v push notifikaci: uzel zapíše omluvu do datastreamu a automatizace ji pošle dál. Potvrďte tlačítkem **Done**.

4. **Propojte uzly** tak, aby se stisk tlačítka ➡️ proměnil v omluvu, ➡️ která odejde do Blynk IoT ➡️ a dorazí učiteli do mobilu. Pak stiskněte tlačítko **Deploy** a klidně si oddechněte: omluva, která vám zachrání kůži, až přijdete pozdě, je připravená! 🙏

## Připravit, pozor… start!

1. Chcete si to vyzkoušet? **Na testování použijte vlastní účet**, aby oznámení dorazilo do vašeho telefonu.
2. Znovu potvrďte tlačítkem **Deploy**, pak už jen stiskněte tlačítko a… hokus pokus, **někdo dostal vaši zprávu**! 💌
