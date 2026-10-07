---
slug: apology-to-teachers
title: Omluva učiteli
---
import Image from '@theme/IdealImage';

## Úvod

Ani mobilní telefon není neomylný! Občas vás může zradit a nevzbudit. Když se to stane, nezoufejte. Stiskněte 👇 chytré tlačítko a omluvte se učiteli dřív, než to oznámí vašim rodičům.

V tomto projektu se naučíte, **jak chytrým tlačítkem odeslat oznámení**. 📩

Stačí vám k tomu základní sada HARDWARIO [**Start Set**](https://www.hardwario.store/cz/p/start-set).


## Rozjeďte to v Node-RED

1. Sestavte Start Set a spárujte ho. Pokud to děláte poprvé, připravili jsme pro vás jednoduchý návod. Do modulu Core Module budete potřebovat firmware pro rádiové tlačítko. Pokud nevíte, jak firmware nahrát nebo co to vlastně je, najdete to [tady](https://docs.hardwario.com/tower/desktop-programming/firmware-flashing/).
2. V Playgroundu klikněte na záložku **Functions**, kde najdete programovací prostředí [Node-RED](https://docs.hardwario.com/tower/platform-integrations/blynk-app/#node-red-setup). 🤖
3. Z panelu vlevo přetáhněte na plochu Node-RED uzel **MQTT** ze sekce Input.

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

1. Text omluvy nastavíte také v Node-RED. Vedle uzlu MQTT umístěte uzel **Change** ze sekce **Functions**. Ten určuje, jaká zpráva se odešle.

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

Omluva dorazí učiteli do telefonu jako push notifikace z aplikace **Blynk IoT**. 📱

1. Pokud ještě nemáte účet v [Blynk IoT](https://docs.hardwario.com/tower/platform-integrations/blynk-app/), založte si ho. [V tomto návodu](https://docs.hardwario.com/tower/platform-integrations/blynk-app/) zjistíte, jak nastavit účet, šablonu zařízení (template) a zařízení (device). Budete potřebovat všechny tři. Můžete také znovu použít šablonu z některého předchozího projektu.

2. V Blynk IoT se oznámení nepřidává na obrazovku telefonu jako widget. Odesílá se jako událost (**Event**) definovaná v šabloně. V detailu šablony otevřete záložku **Events** a přidejte novou událost (pojmenujte ji třeba `apology` a zadejte jí zprávu). Pak pro tuto událost zapněte **Notifications**, aby ji Blynk doručil do telefonu. [Návod](https://docs.hardwario.com/tower/platform-integrations/blynk-app/) vás nastavením šablony provede.

3. Stáhněte si do telefonu **aplikaci Blynk IoT** z [App Store](https://apps.apple.com/us/app/blynk-iot/id1559317868) nebo [Google Play](https://play.google.com/store/apps/details?id=cloud.blynk) a přihlaste se stejným účtem. Zkontrolujte, že má aplikace povolená oznámení, aby se omluva mohla zobrazit. ✉️

## Nastavte odeslání omluvy

1. Vraťte se do Playgroundu. Na plochu Node-RED přidejte za uzel Change s omluvou uzel ze sekce **Blynk IoT**, který umí spustit vaši událost (uzel **log event**). 📮

2. Dvojklikem uzel otevřete. Vpravo uvidíte **malou tužku**. Klikněte na ni a otevře se nové okno. Do pole **Url** zadejte `blynk.cloud` a do polí **Auth Token** a **Template ID** zkopírujte hodnoty z detailu zařízení ve webové aplikaci Blynk IoT na počítači. Potvrďte tlačítkem **Add**.

3. Nastavte uzel tak, aby spouštěl událost (**Event**), kterou jste vytvořili (kód události, např. `apology`). Právě tím se stisk tlačítka promění v push notifikaci. Potvrďte tlačítkem **Done**.

4. **Propojte uzly** tak, aby se stisk tlačítka ➡️ proměnil v omluvu, ➡️ která spustí událost v Blynk IoT, ➡️ jež dorazí učiteli do mobilu. Pak stiskněte tlačítko **Deploy** a klidně si oddechněte: omluva, která vám zachrání kůži, až přijdete pozdě, je připravená! 🙏

## Připravit, pozor… start!

1. Chcete si to vyzkoušet? **Na testování použijte vlastní účet**, aby oznámení dorazilo do vašeho telefonu.
2. Znovu potvrďte tlačítkem **Deploy**, pak už jen stiskněte tlačítko a… hokus pokus, **někdo dostal vaši zprávu**! 💌
