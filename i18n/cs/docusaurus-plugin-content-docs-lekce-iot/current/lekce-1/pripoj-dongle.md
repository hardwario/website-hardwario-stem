---
slug: pripoj-dongle
title: Připoj dongle
---

import Image from '@theme/IdealImage';

## 2. Radio Dongle

Nyní připojte **Radio Dongle** (USB modul) do volného USB portu vašeho počítače. HARDWARIO Playground by měl zařízení automaticky rozpoznat a zobrazit jej v seznamu **Devices**. Pokud se dongle neobjeví, ujistěte se, že je správně zasunutý.

<div class="container">
  <div class="row">
    <Image img={require('/lekce-iot/img/iot-dongle.webp')}/>
  </div>
</div>

## 3. Přehrání firmware

*Tento krok je volitelný a doporučuje se provést pouze v případě, že si nejste jisti, kdo naposledy a jak pracoval s vaším Radio Donglem.*

V menu vlevo najdete odkaz **Firmware**, kde je potřeba vyhledat `hardwario/twr-gateway-radio-dongle` a stisknout tlačítko **„Flash firmware“**. Tento krok zajistí, že dongle bude mít nejnovější verzi firmwaru, což může vyřešit případné problémy s připojením.

## 4. Připoj Radio Dongle

V menu vpravo v sekci **Devices** klikněte na tlačítko **Connect**, čímž se Dongle připojí. Bohužel v tuto chvíli nebudou zobrazeny žádné další efekty ani indikátory připojení.