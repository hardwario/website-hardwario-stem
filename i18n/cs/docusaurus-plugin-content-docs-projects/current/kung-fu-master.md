---
slug: kung-fu-master
title: Kung-fu mástr
---
import Image from '@theme/IdealImage';

## Úvod

S touhle hrou se s kámoši nudit nebudete. Nastav si svůj Start Set tak, aby dokázal rozeznat i ten nejjemnější pohyb.

V tomhle projektu se naučíš vytvořit takzvaný **still position detector**, tedy **detektor pohybu**. 👈

Budeš potřebovat jen **krabičku s tlačítkem** a **USB dongle**. Proto si vystačíš se základní HARDWARIO sadou – [**Start Setem**](https://www.hardwario.store/Start-set/).


## Stáhni si nový firmware

1. Pokud to ještě nemáš, Start set sestav.

2. Na Core Module potřebuješ nahrát speciální firmware, a to **bcf radio still position detector** (najdeš ho mezi ostatním firmwarem v Playgroundu). S tímhle firmwarem bude krabička mnohem citlivější na pohyb a změny pohybu časově změří. 👌
**Náš tip:** Nevíš, jak si firmware stáhnout nebo co to je? [Zjistíš to tady](https://docs.hardwario.com/tower/firmware-sdk/)

1. [Core Module spáruj](https://docs.hardwario.com/tower/platform-integrations/homekit-and-siri/#pair-the-device) s USB Donglem Hned po spárování uvidíš, že tvůj Core Module změnil Alias na **still-position-detector**.

<div class="container">
  <div class="row">
    <Image img={require('./img/kung-fu-master/kung-fu-master-1.webp')}/>
  </div>
</div>


## Rozjeď to v Node-RED

1. V Playgroundu klikni na **záložku Functions**, kde je programovací plocha [Node-RED](https://docs.hardwario.com/tower/desktop-programming/node-red-programming/).
2. Začni jako vždycky: na plochu nejdřív umísti **MQTT** node ze sekce Inputs.

Dvakrát na něj klikni a do řádku zkopíruj **Topic**, se kterým bude krabička počítat čas strávený v jedné poloze:

```
node/still-position-detector:0/hold-time
```

<div class="container">
  <div class="row">
    <Image img={require('./img/kung-fu-master/kung-fu-master-2.webp')}/>
  </div>
</div>


Potvrď tlačítkem **Done**.

3. Aby zařízení fungovalo, na plochu musíš umístit ještě další bublinu. Najdeš ji v sekci Dashboard jako **Text**. Tenhle node zajistí zapisování výsledku.

4. Na node Text dvakrát ťukni. V nastavení uprav jeho **Label**, tedy popisek. Napiš tam třeba **Still time**.

<div class="container">
  <div class="row">
    <Image img={require('./img/kung-fu-master/kung-fu-master-3.webp')}/>
  </div>
</div>


Potvrď tlačítkem Done.

5. **Oba nody propoj.** V pravém horním rohu nezapomeň ťuknout na červené **Deploy**, kterým celé flow rozjedeš.

<div class="container">
  <div class="row">
    <Image img={require('./img/kung-fu-master/kung-fu-master-4.webp')}/>
  </div>
</div>

## A… akce!

Wow, v ruce máš časovač pohybu. Nezní to cool? Zkus si to!

1. **Zmáčkni tlačítko** na krabičce. ⏺️

2. Po malé chvilce s **krabičkou pohni**.

3. Na záložce **Dashboard** v Playgroundu uvidíš, **kolik času** od zmáčknutí tlačítka a pohybu uběhlo. Mazec! 👍

<div class="container">
  <div class="row">
    <Image img={require('./img/kung-fu-master/kung-fu-master-5.webp')}/>
  </div>
</div>

## Soupeř s kámoši

1. **Vyzvi kámoše na souboj** a zjisti, **kdo krabičku nejdýl udrží bez jediného pohybu v různých polohách**, třeba:
    - na jedné noze,
    - v planku,
    - ve stojce 🙃,
    - jakkoli jinak vás napadne.

    Slovní rušení protivníka je samozřejmě povoleno, ale nesahat! 🤡

2. **Výsledky zapisuj**.

3. Ten, kdo má nejvíckrát nejlepší čas, je **zenový kung-fu mástr**! 🙇
