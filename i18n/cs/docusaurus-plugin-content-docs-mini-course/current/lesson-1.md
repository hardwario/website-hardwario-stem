---
slug: lesson-1
title: Lekce 1 – Připravte se
---
import Image from '@theme/IdealImage';

🧑‍💻 **Trvání:** 20 minut  
🎯 **Cílová skupina:** pro jednotlivce  

Zapojte moduly HARDWARIO TOWER, nainstalujte HARDWARIO Playground a začněte měřit.

**Úkol:** Ověřte, že máte nainstalovaný Playground a že zařízení je připojeno přes Bluetooth.

## 1. HARDWARIO Playground

HARDWARIO Playground je univerzální nástroj pro práci se stavebnicí HARDWARIO, dostupný pro Windows, macOS i Linux. Umožňuje vizuální programování a sledování aktuálního stavu senzorů v reálném čase. Více informací najdete v [oficiální dokumentaci](https://docs.hardwario.com/tower/desktop-programming/about-playground/).

:::info

Playground si můžete stáhnout na stránce [Download](https://docs.hardwario.com/tower/desktop-programming/playground-installation/). Vyberte si verzi podle vašeho operačního systému, stáhněte instalační soubor a postupujte podle průvodce instalací.

:::

Po úspěšné instalaci a spuštění HARDWARIO Playground se otevře hlavní okno aplikace. V záložce **Devices** uvidíte seznam připojených zařízení. Pokud je vše správně zapojeno, objeví se zde vaše HARDWARIO zařízení. Na začátku však může být seznam prázdný – v takovém případě zkontrolujte, zda je zařízení správně připojeno přes USB a nainstalovány všechny potřebné ovladače.


## 2. Radio Dongle

Nyní připojte **Radio Dongle** (USB modul) do volného USB portu vašeho počítače. HARDWARIO Playground by měl zařízení automaticky rozpoznat a zobrazit jej v seznamu **Devices**. Pokud se dongle neobjeví, ujistěte se, že je správně zasunutý.

<div class="container">
  <div class="row">
    <Image img={require('./img/iot-dongle.webp')} alt="HARDWARIO Radio Dongle: černý USB modul se štítkem s logem HARDWARIO"/>
  </div>
</div>

## 3. Přehrání firmware

*Tento krok je volitelný a doporučuje se provést pouze v případě, že si nejste jisti, kdo naposledy a jak pracoval s vaším Radio Donglem.*

V menu vlevo najdete odkaz **Firmware**, kde je potřeba vyhledat `hardwario/twr-gateway-radio-dongle` a stisknout tlačítko **„Flash firmware“**. Tento krok zajistí, že dongle bude mít nejnovější verzi firmwaru, což může vyřešit případné problémy s připojením.

## 4. Připoj Radio Dongle

V menu vpravo v sekci **Devices** klikněte na tlačítko **Connect**, čímž se Dongle připojí. Bohužel v tuto chvíli nebudou zobrazeny žádné další efekty ani indikátory připojení.

## 5. Párování PIR Module

<div class="container">
  <div class="row">
    <Image img={require('./img/iot-pirmodule.webp')} alt="Sestavený PIR Module v bílé krabičce s kopulovitou čočkou pohybového senzoru uprostřed"/>
  </div>
</div>

<br></br>
Abyste mohli připojit **PIR Module**, musíte jej nejprve dostat do párovacího režimu Bluetooth. Tento režim aktivujete vložením baterií do modulu.  

Předtím, než vložíte baterie, přejděte do **HARDWARIO Playground** a klikněte na tlačítko **Start pairing**. Tento krok zahájí proces párování.

<div class="container">
  <div class="row">
    <Image img={require('./img/iot-pirmodule-open.webp')} alt="Rozebraný PIR Module: sestava desek elektroniky, těsnicí O-kroužek a obě poloviny krabičky"/>
  </div>
</div>
<br></br>

:::tip

Pokud párujete v učebně, kde je více modulů, ujistěte se, že spárujete právě ten svůj. Například tím, že si ověříte, že v daném okamžiku neprobíhá párování u jiných zařízení.

:::

Po vložení baterií se v **HARDWARIO Playground** objeví senzor, který se obvykle hlásí jako `motion-detector:0`. Jakmile se tento senzor objeví, znamená to, že je připojen.  

V levém menu v sekci **Messages** můžete sledovat výstupy z **PIR Module**, které vám ukáží, zda senzor detekuje pohyb.

:::tip

Otočte **PIR Module** na bok. V sekci **Messages** by se měla objevit položka `node/motion-detector:0/orientation` (a nějaké číslo), což indikuje změnu orientace modulu.

:::

## 6. Přehrání firmware PIR Module

*Tento krok je volitelný a doporučuje se provést, pokud **Core Module** sloužil v jiném projektu a nyní se nehlásí jako `motion-detector`. Také pokud si chcete být jisti, že používáte nejnovější firmware.*

1. Najděte USB kabel pro připojení **Core Modulu** k počítači.  
2. V levém menu **HARDWARIO Playground** přejděte do sekce **Firmware**.  
3. V části **Device** uvidíte všechna připojená HARDWARIO zařízení, např. `bc-usb-dongle` a `hio-core-module`. Vyberte `hio-core-module`.  
4. V sekci firmware vyberte **twr-radio-motion-detector** (zobrazí se i jeho obrázek).  
5. Klikněte na tlačítko **Flash firmware**.


## 7. Shrnutí

✅ Modul je připojený, prostředí připravené — můžete začít měřit.