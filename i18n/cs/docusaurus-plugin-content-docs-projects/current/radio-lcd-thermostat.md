---
slug: radio-lcd-thermostat
title: Bezdrátový LCD termostat
---
import Image from '@theme/IdealImage';

# Bezdrátový LCD termostat

Tento dokument vás provede projektem **Bezdrátového LCD termostatu**. Pomocí tohoto zařízení budete moci na dálku ovládat teplotu.

## Blokové schéma

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat-block-diagram.webp')}/>
  </div>
</div>

## Požadavky

* Buď [Sada Display](https://www.hardwario.store/cz/p/display-set), nebo jednotlivé komponenty:

  * 1x [LCD Module](https://www.hardwario.store/cz/p/lcd-module-bg)
  * 1x [Core Module](https://www.hardwario.store/cz/p/core-module)
  * 1x [Mini Battery Module](https://www.hardwario.store/cz/p/mini-battery-module)
  * 1x [Radio Dongle](https://www.hardwario.store/cz/p/radio-dongle)
  
* One of these options:
  
  * Nainstalovaný **HARDWARIO Playground** \(doporučeno\)<br></br>
    Více informací naleznete v dokumentu [**Quick Start Guide**](https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/).
  * **Raspberry Pi** s distribucí **HARDWARIO Raspbian**<br></br>
    Více informací naleznete v dokumentu [**Instalace na Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/).
  * Nainstalovaný **HARDWARIO Firmware Tool**<br></br>
    Více informací naleznete v dokumentu [**Toolchain nastavení**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain).

## Nahrání firmwaru

V tomto postupu použijeme **HARDWARIO Playground** k nahrání firmwaru do **Core Modulu**.

#### Krok 1: Připojte kabel Micro USB k Core Modulu a počítači

#### Krok 2: Nahrání firmwaru

Spusťte aplikaci HARDWARIO Playground. Na záložce Firmware vyberte a nahrajte firmware `bcf-radio-lcd-thermostat` do **Core Modulu**.

:::warning

**Nahrávání firmwaru do Core Module R1 a R2**
Pro rozdíly v nahrávání firmwaru do staršího **Core Module 1** a novějšího **Core Module 2** si prosím přečtěte **srovnání Core Module R1 a R2** v sekci **Hardware**.

:::

#### Krok 3: Odpojte kabel Micro USB od **Core Modulu** a počítače

:::success

V tomto bodě je firmware úspěšně nahrán.

:::

## Sestavení hardwaru

Podívejte se na krátké video s jednoduchou ukázkou krok za krokem:


<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
  <iframe
    src="https://www.youtube.com/embed/5fihG2xp4y8?si=US5A8Sm3CeTFJtKf"     title="YouTube video player"
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>

#### Krok 1: Začněte s **Mini Battery Module**

:::warning

Ujistěte se, že v **Mini Battery Module** nejsou vloženy žádné baterie.

:::

#### Krok 2: Připojte **Core Module** na **Mini Battery Module**

#### Krok 3: Připojte **LCD Module** na **Core Module**

## Spuštění Playgroundu

:::danger

Pokud používáte nový **HARDWARIO Playground**, použijte záložku **Functions** místo [**http://localhost:1880/**](http://localhost:1880/). Proces párování nyní probíhá na záložce **Devices**. Pro otestování komunikace použijte záložku **Messages**.

:::

#### Krok 1: Otevřete **Node-RED** ve svém webovém prohlížeči

[http://localhost:1880/](http://localhost:1880/)

#### Krok 2: Měli byste vidět prázdnou pracovní plochu s označením **Flow 1**

#### Krok 3: Vložte následující úryvek do flow \(pomocí Menu &gt;&gt; Import\)

```text
[{"id":"2fc604fc.3b6abc","type":"inject","z":"dfc861b.b2a02a","name":"List all gateways","topic":"gateway/all/info/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":460,"wires":[["a2c10833.24d5d8"]]},{"id":"1e4502b8.2f63fd","type":"inject","z":"dfc861b.b2a02a","name":"Start node pairing","topic":"gateway/usb-dongle/pairing-mode/start","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":570,"y":580,"wires":[["795ff5a7.8e266c"]]},{"id":"3d844ce2.932864","type":"inject","z":"dfc861b.b2a02a","name":"Stop node pairing","topic":"gateway/usb-dongle/pairing-mode/stop","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":640,"wires":[["5967c452.c838bc"]]},{"id":"f202b253.2705b","type":"inject","z":"dfc861b.b2a02a","name":"List paired nodes","topic":"gateway/usb-dongle/nodes/get","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":520,"wires":[["f0aca138.0b2c3"]]},{"id":"349f02fd.890f6e","type":"inject","z":"dfc861b.b2a02a","name":"Unpair all nodes","topic":"gateway/usb-dongle/nodes/purge","payload":"","payloadType":"str","repeat":"","crontab":"","once":false,"x":560,"y":700,"wires":[["2f1c5bb6.53d6f4"]]},{"id":"cf61d75d.4ad8f8","type":"mqtt in","z":"dfc861b.b2a02a","name":"","topic":"#","qos":"2","broker":"67b8de4a.029d3","x":530,"y":400,"wires":[["a5cb0658.f5d658"]]},{"id":"a5cb0658.f5d658","type":"debug","z":"dfc861b.b2a02a","name":"","active":true,"console":"false","complete":"false","x":790,"y":400,"wires":[]},{"id":"a2c10833.24d5d8","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":460,"wires":[]},{"id":"f0aca138.0b2c3","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":520,"wires":[]},{"id":"795ff5a7.8e266c","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":580,"wires":[]},{"id":"5967c452.c838bc","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":640,"wires":[]},{"id":"2f1c5bb6.53d6f4","type":"mqtt out","z":"dfc861b.b2a02a","name":"","topic":"","qos":"","retain":"","broker":"717f7c18.ba0a24","x":770,"y":700,"wires":[]},{"id":"67b8de4a.029d3","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""},{"id":"717f7c18.ba0a24","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

Bude to vypadat takto:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat-node-red-gw-controls.webp')}/>
  </div>
</div><br></br>

:::info

Tento úryvek poskytuje ovládací tlačítka pro příkazy gateway/rádio. Tyto příkazy jsou odesílány přes protokol MQTT.

:::

#### Krok 4: Nasazení flow pomocí tlačítka **Deploy** v pravém horním rohu

#### Krok 5: Otevřete záložku **debug**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat-node-red-gw-debug.webp')}/>
  </div>
</div><br></br>

:::info

V záložce **debug** budete moci vidět všechny MQTT zprávy.

:::

#### Krok 6: Klikněte na tlačítko **List all gateways**. V záložce **debug** byste měli vidět odpověď podobnou této.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat-node-red-gw-list.webp')}/>
  </div>
</div><br></br>

:::success

V tomto bodě máte funkční **Node-RED**, **MQTT**, **HARDWARIO Radio Dongle** a **HARDWARIO Gateway**.

:::

## Rádiové párování

V této části vytvoříme rádiové spojení mezi **Radio Dongle** a **Rádiovým LCD termostatem**.

Postupujte podle následujících kroků v prostředí **Node-RED**:

#### Krok 1: Klikněte na tlačítko **Start node pairing**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat-node-red-gw-pair-start.webp')}/>
  </div>
</div>

#### Krok 2: Vložte baterie do **Rádiového LCD termostatu**, čímž odešlete požadavek na párování
(měla by se také rozsvítit červená LED na **Core Modulu** přibližně na 2 sekundy)

#### Krok 3: Klikněte na tlačítko **Stop node pairing**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-lcd-thermostat/radio-lcd-thermostat-node-red-gw-pair-stop.webp')}/>
  </div>
</div><br></br>

:::success

V tomto bodě máte navázané rádiové spojení mezi uzlem (**Rádiový LCD termostat**) a bránou (**Radio Dongle**).

:::

## Test komunikace

Postupujte podle následujících kroků v prostředí **Node-RED**:

#### Krok 1: Přepněte se na záložku **debug** vpravo

#### Krok 2: Vložte následující úryvek do flow (pomocí **Menu >> Import**)

```text
[{"id":"12b3deae.bbbdf1","type":"mqtt in","z":"f2f80e07.95983","name":"","topic":"node/lcd-thermostat:0/#","qos":"2","broker":"25b87ea5.743312","x":390,"y":320,"wires":[["7694514b.9b64d"]]},{"id":"7694514b.9b64d","type":"debug","z":"f2f80e07.95983","name":"","active":true,"console":"false","complete":"false","x":630,"y":320,"wires":[]},{"id":"25b87ea5.743312","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"willTopic":"","willQos":"0","willPayload":"","birthTopic":"","birthQos":"0","birthPayload":""}]
```

#### Krok 3: Pokud vidíte ve výstupu debug nějaké zprávy (například teplotu), vaše sada funguje správně.

:::success

V tomto bodě máte ověřenou rádiovou komunikaci.

:::

## Integrace s Blynk IoT

Nyní, když je sada sestavená a odesílá data přes MQTT, zobrazme si teplotu na
telefonu pomocí platformy **Blynk IoT** (aktuální platforma Blynk — původní cloud
Blynk Legacy byl ukončen). V tomto příkladu vykreslíme do grafu naměřenou teplotu
společně s nastavenou hodnotou (set-point), zatímco relé se nadále spíná lokálně
podle této nastavené hodnoty.

Postup vytvoření účtu Blynk, šablony zařízení, datastreamů a zařízení najdete
v hlavním návodu HARDWARIO
[**Integrace s aplikací Blynk**](https://docs.hardwario.com/tower/platform-integrations/blynk-app/).
Tento návod také vysvětluje, kde najít **Auth Token** a **Template ID**, které
budete níže potřebovat.

#### Krok 1: Vytvořte šablonu a datastreamy

Ve webové konzoli Blynk IoT vytvořte **šablonu zařízení** (device template) a poté
přidejte jeden **Datastream** (**Virtual Pin**) pro každou hodnotu, kterou chcete
zobrazit:

| Hodnota | Virtual Pin | Typ | Jednotka |
|---|---|---|---|
| Naměřená teplota | V1 | Double | °C |
| Nastavená teplota (set-point) | V2 | Double | °C |

Pro každý datastream nastavte rozumný rozsah (například **0 – 50**). Poté z této
šablony vytvořte **zařízení** — přesné kroky najdete v [návodu](https://docs.hardwario.com/tower/platform-integrations/blynk-app/).

#### Krok 2: Nakonfigurujte flow v Node-RED

Na ploše Node-RED se přihlaste k odběru dvou MQTT témat publikovaných termostatem
a předejte je do Blynku:

* `node/lcd-thermostat:0/thermometer/0:1/temperature` → **naměřená teplota**
* `node/lcd-thermostat:0/thermometer/set-point/temperature` → **nastavená hodnota (set-point)**

Logika relé zůstává zcela lokální: uzel **switch** porovnává naměřenou teplotu
s nastavenou hodnotou a publikuje `true`/`false` na téma
`node/power-controller:0/relay/-/state/set`, přesně jako dříve. Tato část se
Blynku netýká.

Abyste každou hodnotu odeslali do telefonu, přidejte za každé téma s teplotou uzel
**Blynk IoT Write** (najdete jej vlevo v sekci **Blynk IoT**):

* uzel s naměřenou teplotou → **Virtual Pin** `1`
* uzel s nastavenou hodnotou → **Virtual Pin** `2`

#### Krok 3: Nasměrujte uzly Write na Blynk IoT

Dvakrát klikněte na uzel **Write** a kliknutím na **malou tužku** otevřete
konfiguraci klienta. Do pole **Url** zadejte `blynk.cloud` a zkopírujte **Auth
Token** a **Template ID** z detailu vašeho zařízení ve webové konzoli Blynk.
Potvrďte tlačítkem **Add**. Zpět v uzlu nastavte číslo **Virtual Pin** (bez
písmene „V“) a klikněte na **Done**. Pro oba uzly Write použijte stejného klienta.

Jakmile jsou oba uzly zapojené, klikněte na tlačítko **Deploy** v pravém horním
rohu.

#### Krok 4: Přidejte widget v aplikaci Blynk IoT

Stáhněte si aplikaci **Blynk IoT** z
[**App Store**](https://apps.apple.com/us/app/blynk-iot/id1559317868) nebo
[**Google Play**](https://play.google.com/store/apps/details?id=cloud.blynk) a
přihlaste se pod stejným účtem. Otevřete své zařízení a poté přidejte widget
**Chart** (pro sledování teploty v čase) nebo **Gauge**. Otevřete nastavení
widgetu a navažte jej na **Datastream** virtuálního pinu, který jste zvolili.
Jakmile je Node-RED nasazený, hodnoty začnou přitékat a máte hotovo!

## Související dokumenty

* [**Integrace s aplikací Blynk**](https://docs.hardwario.com/tower/platform-integrations/blynk-app/)
* [**Instalace Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/)
* [**Toolchain nastavení**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)
* [**Toolchain průvodce**](https://docs.hardwario.com/chester/firmware-sdk/installation-on-macos/#install-toolchain)
