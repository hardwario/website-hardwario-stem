---
slug: lesson-3
title: Lekce 3 – Ukázat, či neukázat?
---
import Image from '@theme/IdealImage';

🧑‍💻 **Trvání:** 30 minut  
🎯 **Cílová skupina:** pro jednotlivce (nebo skupiny, které se nepohádají)

## 1. Úvod

Už umíte připojit moduly **HARDWARIO TOWER** a zobrazit jejich výstupy v grafech a na budících.  

V této lekci se ponoříme hlouběji do programování v prostředí **HARDWARIO Playground**. Naučíte se:
- pracovat se zprávami (**messages**)
- filtrovat je podle topicu
- vytvářet podmíněné výstupy (např. rozsvítit LED, jen když hodnota splní určitou podmínku)

Díky tomu začnete programovat **chování systému**, nejen sbírat data.

## 2. Co je připraveno

✅ PIR Module je připojený, napájený a spárovaný.  
✅ Do Playgroundu přicházejí data o orientaci, teplotě a přítomnosti osoby.  
✅ Dashboard zobrazuje aktuální hodnoty z modulu.  
✅ Víte, jak si hodnoty znovu zobrazit nebo upravit, pokud zmizí.

## 3. Kdo to všechno začne

Svůj flow začněte uzlem **mqtt in**, který bude odebírat zprávy o orientaci. V mém případě se topic jmenuje `node/motion-detector:0/orientation`, ale u vás se může mírně lišit podle názvu zařízení.

:::info
Aby bylo možné s nějakou zprávou pracovat, musí nejprve vůbec přijít. Pro testování se skvěle hodí **PIR senzor**, konkrétně akcelerometr v jeho modulu Core Module, protože množství a četnost zpráv můžete snadno ovlivnit pouhým překlápěním modulu.
:::

Co uzel vrací, už víte z předchozí lekce: výstup lze například vykreslit do grafu. Pro lepší pochopení ale doporučujeme napojit výstup uzlu **mqtt in** na uzel **debug**.  

- Ve výchozím nastavení se v debug výstupu zobrazí obsah `msg.payload`, tedy samotná hodnota přicházející ze senzoru.  
- U mého **PIR Module** se objevují čísla v rozsahu **1 až 6** podle toho, jak je natočený. Právě s touto hodnotou budeme dál pracovat.


## 4. Switch rozdělí výstup

Uzel **Switch** (sekce *Function*) má jeden vstup a alespoň jeden výstup. Po otevření ho můžete pojmenovat, abyste se ve flow lépe vyznali.  

- V poli **Property** nastavte hodnotu, se kterou má uzel pracovat, v tomto případě `msg.payload`.  
- Níže pak definujte jednotlivé podmínky výstupu.  

Pro tuto úlohu nás zajímá situace, kdy má orientace hodnotu **6** (modul leží na PIR senzoru). Všechno ostatní zachytí volba **otherwise** na konci seznamu podmínek.

## 5. Change změní zprávu

`msg.payload` má v tuto chvíli stále hodnotu 1–5, nebo 6 podle toho, kterým výstupem uzlu Switch zpráva prošla.  

- Uzel **Change** změní `msg.payload` na zvolený text.  
- V mém případě:  
  - hodnoty `payload 1–5` → **„Jsem v klidu“**  
  - hodnota `payload 6` → **„Bacha, spadnu“**

Použijete tedy dva uzly **Change**.

## 6. Text na dashboardu

Text zobrazíte uzlem **Text** ze sekce **Dashboard**.  

- Pojmenujte jej (např. *„Co PIR senzor?“*)  
- Nastavte ho tak, aby zobrazoval `msg.payload`, který teď nabývá hodnoty *„Jsem v klidu“*, nebo *„Bacha, spadnu“*.

<div class="container">
  <div class="row">
    <Image img={require('./img/iot-function-text.webp')} alt="Flow v Node-RED: uzly Change mění text podle orientace a posílají jej do uzlu Text na dashboardu"/>
  </div>
</div>


## 7. Z čísla do textu

Funguje to?  
Když **PIR Module** otočíte, měli byste na dashboardu vidět, jak se text mění:

- **„Jsem v klidu“** → při orientaci 1–5  
- **„Bacha, spadnu“** → při orientaci 6  

Pokud máte z předchozí lekce i uzel **Gauge**, uvidíte zároveň aktuální natočení **PIR Module**.

## 8. Hlídač

Zatím jste **PIR Module** používali jako **hrací kostku**, která pozná, na které stěně leží.

Nyní jej využijte opravdu jako **detektor pohybu**!  

👉 Naprogramujte jej tak, aby sledoval **přítomnost osoby** a psal na **Dashboard**, jestli někoho vidí, nebo ne.

## 9. Shrnutí

✅ **Vstup** generuje zprávy a ty umíte měnit pomocí **Change**.  
✅ Zprávy umíte filtrovat pomocí **Switch** a předávat je dalším uzlům pro zpracování.  
✅ Na **dashboardu** zobrazujete vlastní zprávy.  