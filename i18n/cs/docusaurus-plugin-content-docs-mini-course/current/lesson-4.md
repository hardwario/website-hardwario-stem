---
slug: lesson-4
title: Lekce 4 - Světla!
---
import Image from '@theme/IdealImage';

🧑‍💻 **Trvání:** 40 minut  
🎯 **Cílová skupina:** pro jednotlivce i skupiny  

## 1. Úvod

V **HARDWARIO Playground** už umíte najít vstupy, přepracovat je a vytisknout je do **Dashboardu**.  
Tím jste získali základní dovednosti pro práci se senzory a vizualizací dat.  

Následující lekce bude hra s **LED páskem**, která přinese do této části práce světlo a nové možnosti kreativního využití.

## 2. Co je připraveno

✅ Připravený a spárovaný **Button Module** nebo **PIR Module**  
✅ Znalost práce se zprávami v Playgroundu (uzly **Change** a **Switch**)  
✅ **Power Module** a **LED pásek**  

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
    <Image img={require('./img/iot-LED.webp')}/>
  </div>
</div>


## 5. Spusťte to!

Programování ve flow opět začněte zprávou, která vám něco pošle. Možností je více:

✅ **Button Module** – sledování stisku  
✅ **PIR Module** – sledování orientace  
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
    <Image img={require('./img/iot-function_LED1.webp')}/>
  </div>
</div>


## 8. Pohrání si s kódem

Pro kód, který umí měnit barvu LED pásku podle orientace PIR senzoru:

1. Přidejte uzel **Switch**.  
2. Podle orientace (1–6) nastavujte různou barvu (`msg.payload`).  
3. Odesílejte ji přes **mqtt out** do Power Module.

<div class="container">
  <div class="row">
    <Image img={require('./img/iot-function_LED2.webp')}/>
  </div>
</div>

## 9. Barvy a efekty
Byla by škoda nerozsvítit LED světla v plném rozsahu, proto se nebojte vyzkoušet například příkaz `node/power-controller:0/led-strip/-/effect/set`, kterému ale předáte zprávu 
```json
{"type":"rainbow", "wait":10}
```

Bolí vás oči s přílišného jasu? `node/power-controller:0/led-strip/-/brightness/set` bere jako zprávu hodnoty 0-100 a nastaví jas.

## 10. Adresace
Pásek je možné adresovat po jednotlivých LEDkách pomocí node//led-strip/-/set-pixel/set, zpráva pak obsahuje informace 
```json
{"type":"rainbow", "wait":10}
```

Bolí vás oči s přílišného jasu? `node/power-controller:0/led-strip/-/brightness/set` bere jako zprávu hodnoty 0-100 a nastaví jas.

## 11. Shrnutí

Máte spárovaný Power Module s firmware pro LED pásek.
Umíte rozsvítit LED pásek v různých barvách a přidat i efekty.