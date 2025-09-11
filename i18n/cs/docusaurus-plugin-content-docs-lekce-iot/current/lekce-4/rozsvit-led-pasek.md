---
slug: rozsvit-led-pasek
title: Rozsviť LED pásek
---
import Image from '@theme/IdealImage';

## 3. Přehraj firmware pro Power Module

1. Připojte **Power Module** pomocí USB kabelu.  
2. V záložce **Firmware** vyberte nejnovější verzi.  
   - Ten můj měl nahraný `twr-radio-power-controller-rgb150`, ale rozhodně je dobré jej aktualizovat.  
3. LED pásek v tuto chvíli nemusí být připojený, ale ničemu to nevadí.

## 4. Spáruj Power Module

Power Module je výjimečný tím, že **nemá baterie** – je napájený přímo ze zdroje.  

1. V záložce **Devices** klikněte na **Start pairing**.  
2. Připojte Power Module do zdroje – tím se dostane do párovacího režimu.  
3. Po spárování se Power Module hlásí jako `power-controller:0`

<div class="container">
  <div class="row">
    <Image img={require('/lekce-iot/img/iot-LED.webp')}/>
  </div>
</div>


## 5. Spusťte to!

Programování ve flow opět začněte zprávou, která vám něco pošle. Možností je více:

✅ **Button modul** – sledování stisku  
✅ **PIR modul** – sledování orientace  
✅ **Libovolný modul** – všechny mají teplotu (trpělivější varianta 😊)


## 6. Co poslat do Power Module

Pro čtení ze senzorů jste dosud používali uzel **mqtt in**.  
Teď ale potřebujeme **zapsat** do zařízení → použijeme **mqtt out**.  

Topic, který rozzáří pásek, je například: `node/power-controller:0/led-strip/-/color/set`

## 7. Jakou zprávu poslat

Přímé spojení vstupu (např. `Button` se zprávou `1`) s výstupem (nastavení pásku) nevede ke správnému výsledku.  

Proto použijte uzel **Change**, kde přenastavíte `msg.payload` na hodnotu barvy v RGB hex kódu (například červená: `“#FF0000”`).

👉 Pokud neznáte kódování barev pomocí RGB, doporučujeme se podívat na dostupné [tabulky barev](https://www.w3schools.com/colors/colors_rgb.asp).

<div class="container">
  <div class="row">
    <Image img={require('/lekce-iot/img/iot-function_LED1.webp')}/>
  </div>
</div>


## 8. Pohrání si s kódem

Pro kód, který umí měnit barvu LED pásku podle orientace PIR senzoru:

1. Přidejte uzel **Switch**.  
2. Podle orientace (1–6) nastavujte různou barvu (`msg.payload`).  
3. Odesílejte ji přes **mqtt out** do Power Module.

<div class="container">
  <div class="row">
    <Image img={require('/lekce-iot/img/iot-function_LED2.webp')}/>
  </div>
</div>
  