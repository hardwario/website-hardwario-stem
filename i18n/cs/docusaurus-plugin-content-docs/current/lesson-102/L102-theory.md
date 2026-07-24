---
slug: hardwario-tower-iot-kit-theory
title: Teorie
---
import Image from '@theme/IdealImage';

**Časová dotace**: 10 min.

## Popis stavebnice TOWER

**HARDWARIO TOWER** je stavebnice elektronických prvků, které nacházejí uplatnění u projektů internetu věcí (IoT), Průmyslu 4.0 a domácí automatizace. 

### Hlavní výhody stavebnice TOWER

* Systém Plug&Make, díky kterému se prvky stavějí bez nutnosti pájení a drátování - [videonávod](https://www.youtube.com/watch?v=OCPPKXzCBg0)
* Bezdrátové řešení s velmi nízkou spotřebou energie, díky čemuž je instalace snadná a jednotky vydrží běžet z baterií i několik let
* Open-source přístup umožňující integrace s dalšími platformami - [github](https://github.com/hardwario)
* Vzorový firmware  k okamžitému použití - [github](https://github.com/hardwario)
* Široké portfolio modelů pouzder pro tisk na 3D tiskárnách, včetně dostupné služby 3D tisku - [store](https://www.hardwario.store/cz/enclosures)
* Podrobné návody a technická podpora, které pomáhají zákazníkům při práci se stavebnicí - [dokumentace](https://docs.hardwario.com/tower/) a [fórum](https://forum.hardwario.com/)

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

**HARDWARIO Playground** je aplikace pro nahrávání firmware, párování sestav a programování funkcí IoT stavebnice HARDWARIO TOWER. Je dostupná pro počítače s operačními systémy Windows, Linux, Ubuntu a Apple macOS.

V **HARDWARIO Playground** můžeš:

* připojit svou krabičku - IoT sestavu k počítači,
* upravovat a nastavovat funkce své sestavy,
* nahrávat do sestavy firmware (pokud nevíš, co to je, mrkni [sem](https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/))
* nebo sledovat, co tvá sestava dělá v přehledných grafech a vizualizacích.

<div class="container">
  <div class="row">
    <Image img={require('./tower-diagram.avif')} alt="Záložka Functions v aplikaci HARDWARIO Playground s Node-RED flow uzlů climate-monitoru"/>
  </div>
</div>

### Záložky aplikace Playground

1. **Devices** má úplně nejdůležitější roli ze všech záložek. Spáruješ tam svou sestavu s USB Donglem a tím pádem i s počítačem a pak už můžeš vesele tvořit. 
2. **Bridge** je záložka určená pro párování speciálního Bridge Module
3. **Functions** je záložka, kde si jednoduchým přetahováním takzvaných nodů určíš, jak se má tvoje sestava chovat v různých situacích – třeba když zmáčkneš tlačítko nebo se změní okolní teplota. Celé tohle jednoduché programování funguje na systému Node-RED, o kterém se víc dozvíš [tady](https://docs.hardwario.com/tower/desktop-programming/node-red-programming/).
4. V **Dashboardu** časem uvidíš aktivity své krabičky vykreslené v šikovných barevných grafech. Chceš sledovat, jak klesala a stoupala teplota v učebně? Žádný problém! Na to, jak vytvořit vychytaný Dashboard, jsme ti taky připravili [super návod](https://docs.hardwario.com/tower/desktop-programming/data-visualization).
5. V **Messages** uvidíš každou hodnotu, kterou tvá sestava zaznamená, ať už stisknutím tlačítka, změnou polohy nebo měřením teploty.
6. A nakonec tu máme záložku **Firmware**. Tady si do svého Core Modulu na pár kliknutí nahraješ firmware, tedy program, který zařízení řídí. Víc o firmwaru se dozvíš [tadyhle](https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/).