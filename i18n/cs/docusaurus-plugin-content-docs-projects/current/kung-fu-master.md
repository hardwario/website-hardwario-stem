---
slug: kung-fu-master
title: Kung-fu mástr
---

## Úvod

S touhle hrou se s kámoši nudit nebudete. Nastav si svůj Start Set tak, aby dokázal rozeznat i ten nejjemnější pohyb.

V tomhle projektu se naučíš vytvořit takzvaný **still position detector**, tedy **detektor pohybu**. 👈

Budeš potřebovat jen **krabičku s tlačítkem** a **USB dongle**. Proto si vystačíš se základní HARDWARIO sadou – [**Start Setem**](https://shop.hardwario.com/Start-set/).


## Stáhni si nový firmware

1. Pokud to ještě nemáš, Start set sestav.

2. Na Core Module potřebuješ nahrát speciální firmware, a to **bcf radio still position detector** (najdeš ho mezi ostatním firmwarem v Playgroundu). S tímhle firmwarem bude krabička mnohem citlivější na pohyb a změny pohybu časově změří. 👌
**Náš tip:** Nevíš, jak si firmware stáhnout nebo co to je? [Zjistíš to tady](https://docs.hardwario.com/tower/firmware-sdk/)

1. [Core Module spáruj](https://docs.hardwario.com/tower/platform-integrations/homekit-and-siri/#pair-the-device) s USB Donglem Hned po spárování uvidíš, že tvůj Core Module změnil Alias na **still-position-detector**.

![Devices list in Playground](https://res.cloudinary.com/lukasfabik/image/upload/v1566156518/projects/kung-fu-master/image5.png)


## Rozjeď to v Node-RED

1. V Playgroundu klikni na **záložku Functions**, kde je programovací plocha [Node-RED](https://docs.hardwario.com/tower/desktop-programming/node-red-programming/).
2. Začni jako vždycky: na plochu nejdřív umísti **MQTT** node ze sekce Inputs.

Dvakrát na něj klikni a do řádku zkopíruj **Topic**, se kterým bude krabička počítat čas strávený v jedné poloze:

```
node/still-position-detector:0/hold-time
```

![MQTT node and topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566156518/projects/kung-fu-master/image2.png)


Potvrď tlačítkem **Done**.

3. Aby zařízení fungovalo, na plochu musíš umístit ještě další bublinu. Najdeš ji v sekci Dashboard jako **Text**. Tenhle node zajistí zapisování výsledku.

![Dashboard text Node-RED](https://res.cloudinary.com/lukasfabik/image/upload/v1566156518/projects/kung-fu-master/image4.png)


4. Na node Text dvakrát ťukni. V nastavení uprav jeho **Label**, tedy popisek. Napiš tam třeba **Still time**.

![Text settings](https://res.cloudinary.com/lukasfabik/image/upload/v1566156518/projects/kung-fu-master/image6.png)


Potvrď tlačítkem Done.

5. **Oba nody propoj.** V pravém horním rohu nezapomeň ťuknout na červené **Deploy**, kterým celé flow rozjedeš.

![Connect and Deploy](https://res.cloudinary.com/lukasfabik/image/upload/v1566156518/projects/kung-fu-master/image3.png)

## A… akce!

Wow, v ruce máš časovač pohybu. Nezní to cool? Zkus si to!

1. **Zmáčkni tlačítko** na krabičce. ⏺️

2. Po malé chvilce s **krabičkou pohni**.

3. Na záložce **Dashboard** v Playgroundu uvidíš, **kolik času** od zmáčknutí tlačítka a pohybu uběhlo. Mazec! 👍

![Kung-Fu master timer](https://res.cloudinary.com/lukasfabik/image/upload/v1566156518/projects/kung-fu-master/image1.png)

## Soupeř s kámoši

1. **Vyzvi kámoše na souboj** a zjisti, **kdo krabičku nejdýl udrží bez jediného pohybu v různých polohách**, třeba:
    - na jedné noze,
    - v planku,
    - ve stojce 🙃,
    - jakkoli jinak vás napadne.

    Slovní rušení protivníka je samozřejmě povoleno, ale nesahat! 🤡

2. **Výsledky zapisuj**.

3. Ten, kdo má nejvíckrát nejlepší čas, je **zenový kung-fu mástr**! 🙇
