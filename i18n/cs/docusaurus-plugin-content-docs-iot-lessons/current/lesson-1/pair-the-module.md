---
slug: pair-the-module
title: Spáruj modul
---
import Image from '@theme/IdealImage';

## 5. Párování PIR Module

<div class="container">
  <div class="row">
    <Image img={require('/iot-lessons/img/iot-PIRmodule.webp')}/>
  </div>
</div>

<br></br>
Abyste mohli připojit **PIR Module**, musíte jej nejprve dostat do párovacího režimu Bluetooth. Tento režim aktivujete vložením baterií do modulu.  

Předtím, než vložíte baterie, přejděte do **HARDWARIO Playground** a klikněte na tlačítko **Start pairing**. Tento krok zahájí proces párování.

<div class="container">
  <div class="row">
    <Image img={require('/iot-lessons/img/iot-PIRmodule_open.webp')}/>
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
