---
slug: hardwario-tower-iot-kit-theory
title: Teorie
title_meta: "Teorie (L102: IoT stavebnice HARDWARIO TOWER)"
---
import Image from '@theme/IdealImage';

**Časová dotace**: 10 min.

## Popis stavebnice TOWER

**HARDWARIO TOWER** je stavebnice elektronických prvků, které nacházejí uplatnění u projektů internetu věcí (IoT), Průmyslu 4.0 a domácí automatizace. 

### Hlavní výhody stavebnice TOWER

* Systém Plug&Make, díky kterému se prvky stavějí bez nutnosti pájení a drátování ([videonávod](https://www.youtube.com/watch?v=OCPPKXzCBg0))
* Bezdrátové řešení s velmi nízkou spotřebou energie, díky čemuž je instalace snadná a jednotky vydrží běžet z baterií i několik let
* Open-source přístup umožňující integrace s dalšími platformami: [github](https://github.com/hardwario)
* Vzorový firmware k okamžitému použití: [github](https://github.com/hardwario)
* Široké portfolio modelů pouzder pro tisk na 3D tiskárnách, včetně dostupné služby 3D tisku ([store](https://www.hardwario.store/cz/enclosures))
* Podrobné návody a technická podpora, které pomáhají zákazníkům při práci se stavebnicí ([dokumentace](https://docs.hardwario.com/tower/) a [fórum](https://forum.hardwario.com/))

### Komunikační možnosti

* Bezdrátově v sub-GHz pásmu (868 MHz v Evropě a 915 MHz v USA)
* Bezdrátově sítí Sigfox
* Bezdrátově sítí LoRaWAN
* Bezdrátově sítí NB-IoT
* Bezdrátově technologií IQRF
* Drátově RS-485

<div class="container">
  <div class="row">
    <Image img={require('./tower-communication.avif')} alt="Schéma komunikace stavebnice TOWER: cesty sub-GHz, LoRaWAN, Sigfox, NB-IoT a Ethernet do cloudu a aplikací"/>
  </div>
</div>

## Popis aplikace Playground

**HARDWARIO Playground** je aplikace pro nahrávání firmwaru, párování sestav a programování funkcí IoT stavebnice HARDWARIO TOWER. Je dostupná pro počítače s operačními systémy Windows, Linux, Ubuntu a Apple macOS.

V **HARDWARIO Playground** můžete:

* připojit svou krabičku (IoT sestavu) k počítači,
* upravovat a nastavovat funkce své sestavy,
* nahrávat do sestavy firmware (pokud nevíte, co to je, podívejte se [sem](https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/))
* nebo sledovat, co vaše sestava dělá v přehledných grafech a vizualizacích.

<div class="container">
  <div class="row">
    <Image img={require('./tower-diagram.avif')} alt="Záložka Functions v aplikaci HARDWARIO Playground s Node-RED flow uzlů climate-monitoru"/>
  </div>
</div>

### Záložky aplikace Playground

1. **Devices** je ze všech záložek nejdůležitější. Spárujete v ní svou sestavu s USB Donglem, a tím i s počítačem, a pak už můžete vesele tvořit. 
2. **Bridge** je záložka určená pro párování speciálního Bridge Module
3. **Functions** je záložka, kde si jednoduchým přetahováním takzvaných nodů určíte, jak se má vaše sestava chovat v různých situacích, třeba když zmáčknete tlačítko nebo se změní okolní teplota. Celé toto jednoduché programování běží na systému Node-RED, o kterém se víc dozvíte [tady](https://docs.hardwario.com/tower/desktop-programming/node-red-programming/).
4. V **Dashboardu** časem uvidíte aktivitu své krabičky vykreslenou v přehledných barevných grafech. Chcete sledovat, jak v učebně klesala a stoupala teplota? Žádný problém. Jak vytvořit povedený Dashboard, popisuje [návod](https://docs.hardwario.com/tower/desktop-programming/data-visualization), který jsme pro vás připravili.
5. V **Messages** uvidíte každou hodnotu, kterou vaše sestava zaznamená, ať už stisknutím tlačítka, změnou polohy nebo měřením teploty.
6. A nakonec tu máme záložku **Firmware**. Tady na pár kliknutí nahrajete do modulu Core Module firmware, tedy program, který zařízení řídí. Víc o firmwaru se dozvíte [tady](https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/).