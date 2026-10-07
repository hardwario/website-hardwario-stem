---
slug: kung-fu-master
title: Mistr kung-fu
---
import Image from '@theme/IdealImage';

## Úvod

S touhle hrou se s kamarády nudit nebudete. Nastavte si Sadu Start tak, aby rozpoznala i ten nejjemnější pohyb.

V tomto projektu se naučíte vytvořit takzvaný **still position detector**, tedy **detektor pohybu**. 👈

Budete potřebovat jen **krabičku s tlačítkem** a **USB dongle**. Vystačíte si proto se základní [**Sadou Start**](https://www.hardwario.store/cz/p/start-set).


## Stáhněte si nový firmware

1. Pokud jste to ještě neudělali, sestavte Sadu Start.

2. Do modulu Core Module nahrajte speciální firmware **bcf-radio-still-position-detector** (najdete ho mezi ostatním firmwarem v Playgroundu). S tímto firmwarem bude krabička mnohem citlivější na pohyb a změří, kolik času mezi pohyby uběhne. 👌
**Náš tip:** Nevíte, jak si firmware stáhnout nebo co to je? [Najdete to tady](https://docs.hardwario.com/tower/desktop-programming/firmware-flashing/).

3. [Spárujte modul Core Module](https://docs.hardwario.com/tower/desktop-programming/radio-network-management/#pairing-new-devices) s USB donglem. Hned po spárování uvidíte, že se alias modulu Core Module změnil na **still-position-detector**.

<div class="container">
  <div class="row">
    <Image img={require('./img/kung-fu-master/kung-fu-master-1.webp')} alt="Záložka Devices v Playgroundu se spárovaným modulem Core Module, který má nově alias still-position-detector:0"/>
  </div>
</div>


## Rozjeďte to v Node-RED

1. V Playgroundu klikněte na **záložku Functions**, kde je programovací plocha [Node-RED](https://docs.hardwario.com/tower/desktop-programming/node-red-programming/).
2. Začněte jako vždy: na plochu nejdřív umístěte uzel **mqtt in** ze sekce network.

Dvakrát na něj klikněte a do řádku **Topic** zkopírujte tento topic, přes který krabička posílá čas strávený v jedné poloze:

```
node/still-position-detector:0/hold-time
```

<div class="container">
  <div class="row">
    <Image img={require('./img/kung-fu-master/kung-fu-master-2.webp')} alt="Nastavení uzlu MQTT s topicem hold-time vyplněným v poli Topic"/>
  </div>
</div>


Potvrďte tlačítkem **Done**.

3. Aby zařízení fungovalo, umístěte na plochu ještě jednu bublinu. Najdete ji v sekci Dashboard jako **Text**. Tento uzel bude výsledek vypisovat.

4. Na uzel Text dvakrát klikněte. V nastavení upravte jeho **Label**, tedy popisek. Napište tam třeba **Still time**.

<div class="container">
  <div class="row">
    <Image img={require('./img/kung-fu-master/kung-fu-master-3.webp')} alt="Nastavení uzlu Text s vlastním popiskem ve zvýrazněném poli Label"/>
  </div>
</div>


Potvrďte tlačítkem **Done**.

5. **Oba uzly propojte.** Nezapomeňte v pravém horním rohu kliknout na červené tlačítko **Deploy**, kterým celý flow spustíte.

<div class="container">
  <div class="row">
    <Image img={require('./img/kung-fu-master/kung-fu-master-4.webp')} alt="Uzel MQTT propojený s uzlem Text a zvýrazněné červené tlačítko Deploy"/>
  </div>
</div>

## A… akce!

Wow, v ruce máte časovač pohybu. Nezní to skvěle? Vyzkoušejte si ho!

1. **Stiskněte tlačítko** na krabičce. ⏺️

2. Po chvilce **krabičkou pohněte**.

3. Na záložce **Dashboard** v Playgroundu uvidíte, **kolik času** uběhlo mezi stisknutím tlačítka a pohybem. Paráda! 👍

<div class="container">
  <div class="row">
    <Image img={require('./img/kung-fu-master/kung-fu-master-5.webp')} alt="Dashboard v Playgroundu zobrazující naměřený čas bez pohybu v sekundách vedle popisku"/>
  </div>
</div>

## Změřte síly s kamarády

1. **Vyzvěte kamarády na souboj** a zjistěte, **kdo krabičku v různých polohách nejdéle udrží bez jediného pohybu**, třeba:
    - na jedné noze,
    - v planku,
    - ve stojce 🙃,
    - jakkoli jinak vás napadne.

    Rozptylovat soupeře slovy je samozřejmě povoleno, ale nesahat! 🤡

2. **Zapisujte si výsledky.**

3. Kdo bude mít nejčastěji nejlepší čas, je **zenový mistr kung-fu**! 🙇
