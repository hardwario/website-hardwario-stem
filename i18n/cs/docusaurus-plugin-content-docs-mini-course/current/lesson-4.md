---
slug: lesson-4
title: Lekce 4 – Světla!
---
import Image from '@theme/IdealImage';

🧑‍💻 **Trvání:** 40 minut  
🎯 **Cílová skupina:** pro jednotlivce i skupiny  

## 1. Úvod

V **HARDWARIO Playground** už umíte najít vstupy, zpracovat je a vypsat na **Dashboard**.  
Tím jste získali základní dovednosti pro práci se senzory a vizualizací dat.  

V této lekci si pohrajete s **LED páskem**, který do práce vnese světlo a nabídne nové možnosti pro kreativitu.

## 2. Co je připraveno

✅ Připravený a spárovaný **Button Module** nebo **PIR Module**  
✅ Znalost práce se zprávami v Playgroundu (uzly **Change** a **Switch**)  
✅ **Power Module** a **LED pásek**  

## 3. Nahrajte firmware do Power Module

1. Připojte **Power Module** USB kabelem k počítači.  
2. V záložce **Firmware** vyberte nejnovější verzi.  
   - Můj měl nahraný `twr-radio-power-controller-rgb150`, ale aktualizace rozhodně neuškodí.  
3. LED pásek teď nemusí být připojený, ale pokud připojený je, nevadí to.

## 4. Spárujte Power Module

Power Module se od ostatních modulů liší tím, že **nemá baterie**: napájí se přímo ze zdroje.  

1. V záložce **Devices** klikněte na **Start pairing**.  
2. Připojte Power Module ke zdroji. Tím se přepne do párovacího režimu.  
3. Po spárování se Power Module hlásí jako `power-controller:0`.

<div class="container">
  <div class="row">
    <Image img={require('./img/iot-led.webp')} alt="Power Module ve žluté krabičce se síťovým adaptérem a stočeným LED páskem"/>
  </div>
</div>


## 5. Spusťte to!

Flow opět začněte vstupem, který posílá zprávy. Možností je několik:

✅ **Button Module**: sledování stisku  
✅ **PIR Module**: sledování orientace  
✅ **Libovolný modul**: všechny měří teplotu (varianta pro trpělivé 😊)


## 6. Co poslat do Power Module

Pro čtení ze senzorů jste dosud používali uzel **mqtt in**.  
Teď ale potřebujeme **zapsat** do zařízení → použijeme **mqtt out**.  

Topic, který rozzáří pásek, je například: `node/power-controller:0/led-strip/-/color/set`

## 7. Jakou zprávu poslat

Když vstup (např. `Button` se zprávou `1`) spojíte přímo s výstupem (nastavení pásku), nebude to fungovat správně.  

Proto použijte uzel **Change** a nastavte v něm `msg.payload` na barvu v hexadecimálním kódu RGB (například červená: `"#FF0000"`).

👉 Pokud kódování barev v RGB neznáte, podívejte se do [tabulky barev](https://www.w3schools.com/colors/colors_rgb.asp).

<div class="container">
  <div class="row">
    <Image img={require('./img/iot-function-led1.webp')} alt="Flow v Node-RED: vstup orientace přes uzel Change Color R do tématu pro nastavení barvy LED pásku"/>
  </div>
</div>


## 8. Hrajeme si s kódem

Kód, který mění barvu LED pásku podle orientace PIR senzoru, vytvoříte takto:

1. Přidejte uzel **Switch**.  
2. Pro každou orientaci (1–6) nastavte jinou barvu (`msg.payload`).  
3. Odesílejte ji přes **mqtt out** do Power Module.

<div class="container">
  <div class="row">
    <Image img={require('./img/iot-function-led2.webp')} alt="Flow v Node-RED: uzel Condition větví orientaci do uzlů Change Color R, G a B před výstupem na LED pásek"/>
  </div>
</div>

## 9. Barvy a efekty
Byla by škoda nevyužít možnosti pásku naplno. Vyzkoušejte třeba příkaz `node/power-controller:0/led-strip/-/effect/set` se zprávou:
```json
{"type":"rainbow", "wait":10}
```

Bolí vás oči z přílišného jasu? `node/power-controller:0/led-strip/-/brightness/set` přijímá jako zprávu hodnotu 0–100 a podle ní nastaví jas.

## 10. Adresace
Pásek lze adresovat i po jednotlivých LED pomocí `node//led-strip/-/set-pixel/set`. Zpráva pak obsahuje informace:
```json
{"type":"rainbow", "wait":10}
```

Bolí vás oči z přílišného jasu? `node/power-controller:0/led-strip/-/brightness/set` přijímá jako zprávu hodnotu 0–100 a podle ní nastaví jas.

## 11. Shrnutí

Máte spárovaný Power Module s firmwarem pro LED pásek.  
Umíte rozsvítit LED pásek v různých barvách a přidat i efekty.