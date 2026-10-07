---
slug: lesson-1
title: Lekce 1 – Připravte se
---
import Image from '@theme/IdealImage';

🧑‍💻 **Trvání:** 20 minut  
🎯 **Cílová skupina:** pro jednotlivce  

Zapojte moduly HARDWARIO TOWER, nainstalujte HARDWARIO Playground a začněte měřit.

**Úkol:** Ověřte, že máte nainstalovaný Playground a že je zařízení spárované s Radio Dongle.

## 1. HARDWARIO Playground

HARDWARIO Playground je univerzální nástroj pro práci se stavebnicí HARDWARIO, dostupný pro Windows, macOS i Linux. Umožňuje vizuálně programovat a sledovat stav senzorů v reálném čase. Více informací najdete v [oficiální dokumentaci](https://docs.hardwario.com/tower/desktop-programming/about-playground/).

:::info

Playground si můžete stáhnout na stránce [Download](https://docs.hardwario.com/tower/desktop-programming/playground-installation/). Vyberte si verzi podle svého operačního systému, stáhněte instalační soubor a postupujte podle průvodce instalací.

:::

Po instalaci a spuštění aplikace HARDWARIO Playground se otevře její hlavní okno. V záložce **Devices** uvidíte seznam připojených zařízení. Pokud je vše správně zapojeno, objeví se zde vaše zařízení HARDWARIO. Na začátku však může být seznam prázdný. V takovém případě zkontrolujte, zda je zařízení správně připojeno přes USB a zda jsou nainstalovány všechny potřebné ovladače.


## 2. Radio Dongle

Nyní připojte **Radio Dongle** (USB modul) do volného USB portu počítače. Aplikace HARDWARIO Playground by měla dongle automaticky rozpoznat a zobrazit v seznamu **Devices**. Pokud se dongle neobjeví, ujistěte se, že je správně zasunutý.

<div class="container">
  <div class="row">
    <Image img={require('./img/iot-dongle.webp')} alt="HARDWARIO Radio Dongle: černý USB modul se štítkem s logem HARDWARIO"/>
  </div>
</div>

## 3. Nahrání firmwaru

*Tento krok je volitelný. Doporučujeme ho jen tehdy, když si nejste jisti, kdo a jak naposledy s Radio Dongle pracoval.*

V levém menu otevřete **Firmware**, vyhledejte `hardwario/twr-gateway-radio-dongle` a klikněte na tlačítko **Flash firmware**. Dongle tak dostane nejnovější verzi firmwaru, což může vyřešit případné problémy s připojením.

## 4. Připojte Radio Dongle

V pravém menu v sekci **Devices** klikněte na tlačítko **Connect** a dongle se připojí. Aplikace v tuto chvíli bohužel nijak dál nesignalizuje, že je připojený.

## 5. Párování PIR Module

<div class="container">
  <div class="row">
    <Image img={require('./img/iot-pirmodule.webp')} alt="Sestavený PIR Module v bílé krabičce s kopulovitou čočkou pohybového senzoru uprostřed"/>
  </div>
</div>

<br></br>
Abyste mohli **PIR Module** připojit, musíte ho nejprve přepnout do párovacího režimu. Ten se aktivuje vložením baterií do modulu.  

Ještě než baterie vložíte, klikněte v aplikaci **HARDWARIO Playground** na tlačítko **Start pairing**. Tím zahájíte párování.

<div class="container">
  <div class="row">
    <Image img={require('./img/iot-pirmodule-open.webp')} alt="Rozebraný PIR Module: sestava desek elektroniky, těsnicí O-kroužek a obě poloviny krabičky"/>
  </div>
</div>
<br></br>

:::tip

Pokud párujete v učebně, kde je více modulů, ujistěte se, že spárujete právě ten svůj, například tak, že si ověříte, že ve stejnou chvíli nepárují jiná zařízení.

:::

Po vložení baterií se v aplikaci **HARDWARIO Playground** objeví senzor, který se obvykle hlásí jako `motion-detector:0`. Jakmile se objeví, je připojený.  

V sekci **Messages** v levém menu můžete sledovat výstupy z **PIR Module** a zjistit z nich, zda senzor detekuje pohyb.

:::tip

Otočte **PIR Module** na bok. V sekci **Messages** by se měla objevit položka `node/motion-detector:0/orientation` (s číselnou hodnotou), která signalizuje změnu orientace modulu.

:::

## 6. Nahrání firmwaru do PIR Module

*Tento krok je volitelný. Doporučujeme ho, pokud **Core Module** předtím sloužil v jiném projektu a nehlásí se jako `motion-detector`, nebo pokud chcete mít jistotu, že používáte nejnovější firmware.*

1. Najděte USB kabel a připojte jím modul **Core Module** k počítači.  
2. V levém menu **HARDWARIO Playground** přejděte do sekce **Firmware**.  
3. V části **Device** uvidíte všechna připojená zařízení HARDWARIO, např. `bc-usb-dongle` a `hio-core-module`. Vyberte `hio-core-module`.  
4. V sekci firmwaru vyberte **twr-radio-motion-detector** (zobrazí se i jeho obrázek).  
5. Klikněte na tlačítko **Flash firmware**.


## 7. Shrnutí

✅ Modul je připojený, prostředí připravené. Můžete začít měřit.