---
slug: use-switch-for-values
title: Použij Switch pro hodnoty
---
import Image from '@theme/IdealImage';

## 3. Kdo to všechno začne

Ve vaší flow začněte uzlem **mqtt in**, který bude odebírat zprávy s orientací. V mém případě se jmenuje: `node/motion-detector:0/orientation` ale může se u vás mírně lišit podle názvu zařízení.

:::info
Aby bylo možné s nějakou zprávou pracovat, musí nejprve vůbec přijít. Pro testování se skvěle hodí **PIR senzor**, konkrétně jeho gyroskop, protože množství a četnost zpráv můžete snadno ovlivnit pouhým překlápěním modulu.
:::

Co daný uzel vrací, už víte z předchozí lekce – lze jej například vykreslit do grafu.  Pro lepší pochopení si ale doporučujeme výstup z uzlu **mqtt in** napojit na uzel **debug**.  

- Ve výchozím nastavení se v debug výstupu zobrazí obsah `msg.payload`, tedy samotná hodnota přicházející ze senzoru.  
- U mého **PIR Module** se objevují čísla v rozsahu **1 až 6** podle toho, jak je natočený – a právě s touto hodnotou budeme dále pracovat.


## 4. Switch rozdělí výstup

Uzel **Switch** (sekce *Function*) má jeden vstup a minimálně jeden výstup.  Po rozkliknutí můžete uzel pojmenovat, což vám usnadní orientaci ve vašem flow.  

- V poli **Property** nastavte hodnotu, se kterou má uzel pracovat – v tomto případě `msg.payload`.  
- Níže pak definujte jednotlivé podmínky výstupu.  

Pro tuto úlohu nás zajímá situace, kdy má orientace hodnotu **6** (modul leží na PIR senzoru). Všechno ostatní zachytíte pomocí volby **otherwise**, která se nachází na konci seznamu podmínek.

## 5. Change změní zprávu

`msg.payload` je v tuto chvíli stále nastavený na hodnotu 1–5 nebo 6, podle toho, na kterém výstupu Switche je zrovna flow.  

- Uzel **Change** změní `msg.payload` na vaši textovou hodnotu.  
- V mém případě:  
  - hodnoty `payload 1–5` → **"Jsem v klidu"**  
  - hodnota `payload 6` → **"Bacha spadnu"**

Použity jsou tedy dva uzly **Change**.

## 6. Text v Dashboardu

Aby bylo možné vytisknout text, použijte v sekci **Dashboard** uzel **Text**.  

- Pojmenujte jej (např. *„Co PIR senzor?“*)  
- Nastavte, aby zobrazoval `msg.payload` – v tuto chvíli nabývá hodnoty *„Jsem v klidu“* nebo *„Bacha spadnu“*.

<div class="container">
  <div class="row">
    <Image img={require('/iot-lessons/img/iot-function_text.webp')}/>
  </div>
</div>


## 7. Z čísla do textu

Funguje to?  
Po otočení **PIR Module** byste měli na dashboardu vidět, jak se text mění z:

- **„Jsem v klidu“** → při orientaci 1–5  
- **„Bacha spadnu“** → při orientaci 6  

Pokud máte z předchozí lekce také **Gauge**, uvidíte zároveň aktuální otočení **PIR mModule**.
