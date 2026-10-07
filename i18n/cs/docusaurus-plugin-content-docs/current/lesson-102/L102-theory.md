---
slug: hardwario-tower-iot-kit-theory
title: Teorie
title_meta: "Teorie (L102: IoT stavebnice HARDWARIO TOWER)"
---
import Image from '@theme/IdealImage';

**Časová dotace**: 10 min.

## Popis stavebnice TOWER

**HARDWARIO TOWER** je stavebnice elektronických modulů pro projekty internetu věcí (IoT), Průmyslu 4.0 a domácí automatizace. 

### Hlavní výhody stavebnice TOWER

* Systém Plug&Make, díky kterému se moduly skládají bez pájení a drátování ([videonávod](https://www.youtube.com/watch?v=OCPPKXzCBg0))
* Bezdrátové řešení s velmi nízkou spotřebou energie, díky čemuž je instalace snadná a jednotky vydrží běžet z baterií i několik let
* Otevřený (open-source) přístup, který umožňuje integraci s dalšími platformami: [GitHub](https://github.com/hardwario)
* Vzorový firmware k okamžitému použití: [GitHub](https://github.com/hardwario)
* Široká nabídka modelů krabiček pro 3D tisk, včetně služby 3D tisku ([e-shop](https://www.hardwario.store/cz/enclosures))
* Podrobné návody a technická podpora, které pomáhají zákazníkům při práci se stavebnicí ([dokumentace](https://docs.hardwario.com/tower/) a [fórum](https://forum.hardwario.com/))

### Komunikační možnosti

* Bezdrátově v pásmu sub-GHz (868 MHz v Evropě a 915 MHz v USA)
* Bezdrátově sítí Sigfox
* Bezdrátově sítí LoRaWAN
* Bezdrátově sítí NB-IoT
* Bezdrátově technologií IQRF
* Drátově přes RS-485

<div class="container">
  <div class="row">
    <Image img={require('./tower-communication.avif')} alt="Schéma komunikace stavebnice TOWER: cesty sub-GHz, LoRaWAN, Sigfox, NB-IoT a Ethernet do cloudu a aplikací"/>
  </div>
</div>

## Popis aplikace Playground

**HARDWARIO Playground** je aplikace pro nahrávání firmwaru, párování sestav a programování funkcí IoT stavebnice HARDWARIO TOWER. Je dostupná pro počítače s operačními systémy Windows, Linux, Ubuntu a Apple macOS.

V aplikaci **HARDWARIO Playground** můžete:

* připojit svou krabičku (IoT sestavu) k počítači,
* upravovat a nastavovat funkce své sestavy,
* nahrávat do sestavy firmware (pokud nevíte, co to je, podívejte se [sem](https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/)),
* nebo v přehledných grafech a vizualizacích sledovat, co sestava dělá.

<div class="container">
  <div class="row">
    <Image img={require('./tower-diagram.avif')} alt="Záložka Functions v aplikaci HARDWARIO Playground s flow Node-RED a uzly MQTT pro climate-monitor"/>
  </div>
</div>

### Záložky aplikace Playground

1. **Devices** je ze všech záložek nejdůležitější. Spárujete v ní sestavu s USB donglem (Radio Dongle), a tím i s počítačem, a pak už můžete vesele tvořit. 
2. **Bridge** je záložka pro připojení speciálního modulu Bridge Module.
3. **Functions** je záložka, kde jednoduchým přetahováním takzvaných uzlů určíte, jak se má sestava chovat v různých situacích, třeba když stisknete tlačítko nebo se změní okolní teplota. Toto jednoduché programování běží v prostředí Node-RED, o kterém se víc dozvíte [tady](https://docs.hardwario.com/tower/desktop-programming/node-red-programming/).
4. Na záložce **Dashboard** časem uvidíte aktivitu své krabičky v přehledných barevných grafech. Chcete sledovat, jak v učebně klesala a stoupala teplota? Žádný problém. Jak vytvořit povedený dashboard, popisuje [návod](https://docs.hardwario.com/tower/desktop-programming/data-visualization), který jsme pro vás připravili.
5. Na záložce **Messages** uvidíte každou hodnotu, kterou sestava zaznamená, ať už jde o stisk tlačítka, změnu polohy, nebo naměřenou teplotu.
6. A nakonec tu máme záložku **Firmware**. Tady na pár kliknutí nahrajete do modulu Core Module firmware, tedy program, který zařízení řídí. Víc o firmwaru se dozvíte [tady](https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/).