---
slug: apology-to-teachers
title: Omluva učiteli
---
import Image from '@theme/IdealImage';

## Úvod

Ani mobilní telefon není neomylný! Občas tě může zklamat a nevzbudit. Pokud se ti to stane, nezoufej. Stiskni 👇 chytré tlačítko a omluv se učiteli dřív, než to oznámí rodičům.

V tomto projektu se naučíš, **jak odeslat oznámení pomocí chytrého tlačítka**. 📩

K tomu budeš potřebovat pouze základní [**Sadu Start**](https://www.hardwario.store/cz/p/start-set) od HARDWARIO.


## Zrealizuj to v Node-RED

1. Sestav Sadu Start a spáruj ji. Pokud to děláš poprvé, připravili jsme pro tebe jednoduchý návod. Pro Core Module budeš potřebovat firmware pro rádiové tlačítko. Pokud nevíš, jak firmware nahrát nebo co to vlastně je, zjistíš to [zde](https://docs.hardwario.com/tower/desktop-programming/firmware-flashing/).
2. V Playgroundu klikni na záložku **Functions**, kde se nachází programovací prostředí [Node-RED](https://docs.hardwario.com/tower/platform-integrations/blynk-app/#node-red-setup). 🤖
3. Z panelu vlevo přetáhni na plochu Node-RED **MQTT** uzel ze sekce Input.

<div class="container">
  <div class="row">
    <Image img={require('./img/apology-to-teachers/apology-to-teachers-1.webp')}/>
  </div>
</div>

4. V uzlu nastav funkci tlačítka. Dvojklikem otevři jeho nastavení a **zkopíruj následující řádek do pole Topic**:

```
node/push-button:0/push-button/-/event-count
```

Potvrď kliknutím na tlačítko **Done**.

## Nastav obsah omluvy.

1. Obsah omluvy určíš také v Node-RED. Umísti vedle MQTT node také **Change node** z kategorie **Functions**. Tento node určuje, jaká zpráva se odešle.

<div class="container">
  <div class="row">
    <Image img={require('./img/apology-to-teachers/apology-to-teachers-2.webp')}/>
  </div>
</div>

2. Dvojklikem otevři node a v poli **Rules** nastav pravidlo **msg.payload** (viz screenshot níže). Tím nastavíš obsah zprávy. Měj na paměti, že oznámení nezobrazuje české háčky a čárky – a nezapomeň se podepsat. Zpráva může vypadat třeba takto:

_Dear Mr. Woodpecker, I'm sorry, but unfortunately my dog ate my alarm clock. I'll come a.s.a.p. Evzen (your favorite pupil, who does not deserve to have a note sent home to his parents)._

<div class="container">
  <div class="row">
    <Image img={require('./img/apology-to-teachers/apology-to-teachers-3.webp')}/>
  </div>
</div>

Potvrď kliknutím na tlačítko **Done**. 👏

## Připrav Blynk IoT pro oznámení

Omluva dorazí na telefon učitele jako push oznámení prostřednictvím aplikace **Blynk IoT**. 📱

1. Pokud ještě nemáš účet, vytvoř si ho v [Blynk IoT](https://docs.hardwario.com/tower/platform-integrations/blynk-app/). [V tomto návodu](https://docs.hardwario.com/tower/platform-integrations/blynk-app/) se dozvíš, jak nastavit účet, šablonu zařízení (template) a zařízení (device) – budeš potřebovat všechny tři. Můžeš také znovu použít šablonu z předchozího projektu.

2. V Blynk IoT se oznámení neumisťuje na obrazovku telefonu jako widget – odesílá se jako **Event** definovaný na tvé šabloně. V detailu šablony otevři záložku **Events** a přidej nový event (například ho pojmenuj `apology` a přidej mu zprávu). Poté pro tento event zapni **Notifications**, aby ho Blynk doručil na tvůj telefon. [Návod](https://docs.hardwario.com/tower/platform-integrations/blynk-app/) tě provede nastavením šablony.

3. Stáhni si na telefon **aplikaci Blynk IoT** z [App Store](https://apps.apple.com/us/app/blynk-iot/id1559317868) nebo [Google Play](https://play.google.com/store/apps/details?id=cloud.blynk) a přihlas se stejným účtem. Zkontroluj, že má aplikace povolená oznámení, aby se omluva mohla zobrazit. ✉️

## Nastav odesílání omluvy

1. Nyní se vrať do Playgroundu. Na plochu Node-RED přidej za Change node se svou omluvou uzel ze sekce **Blynk IoT**, který umí spustit tvůj event (uzel **log event**). 📮

2. Dvojklikem node otevři. Vpravo uvidíš **malou tužku**. Klikni na ni a otevře se nové okno. Do pole **Url** zadej `blynk.cloud` a do polí **Auth Token** a **Template ID** zkopíruj hodnoty z detailu zařízení ve webové aplikaci Blynk IoT na svém počítači. Potvrď tlačítkem **Add**.

3. Nastav node tak, aby spouštěl **Event**, který jsi vytvořil (kód eventu, např. `apology`). Právě to promění stisk tlačítka v push oznámení. Potvrď kliknutím na tlačítko **Done**.

4. **Propoj uzly** tak, aby se ze stisku tlačítka ➡️ stala tvá omluva ➡️ která spustí Blynk IoT event ➡️ jenž dorazí na mobil učitele. Poté stiskni tlačítko **Deploy** a klidně se uvolni – omluva, která ti zachrání kůži, když se zpozdíš, je připravena! 🙏

## Připravit, pozor… teď!

1. Chceš si to vyzkoušet? **Pro testování použij svůj vlastní účet**, aby oznámení dorazilo na tvůj telefon.
2. Znovu potvrď tlačítkem **Deploy**, potom už jen stiskni tlačítko a… voilà, **někdo ti píše**! 💌
