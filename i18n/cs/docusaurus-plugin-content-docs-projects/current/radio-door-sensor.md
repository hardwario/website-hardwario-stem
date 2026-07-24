---
slug: radio-door-sensor
title: Bezdrátový dveřní senzor
---
import Image from '@theme/IdealImage';

# Bezdrátový dveřní senzor

**Bezdrátový dveřní senzor** vás upozorní na telefonu pokaždé, když někdo otevře dveře, okno nebo třeba dózu na sušenky! Lze jej také použít jako upozornění, pokud večer zapomenete zavřít garáž nebo bránu.

Může být vybaven magnetem pro snadné uchycení krabičky a funguje na baterie po mnoho let. Instalace je opravdu jednoduchá!

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-preview.webp')} alt="Sestavený Radio Door Sensor ve žluté krabičce s magnetickým kontaktem na kabelu vedle"/>
  </div>
</div>
<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-overview.webp')} alt="Rozložené díly Radio Door Sensoru: moduly, magnetický kontakt, díly krabičky a spojovací materiál"/>
  </div>
</div>
<div class="container">
  <div class="row">
    <Image  img={require('./img/radio-door-sensor/radio-door-sensor.png')}
          style={{ backgroundColor: "#fff" }} alt="Blokové schéma: magnetický kontakt připojený k Radio Door Sensoru, rádiem k donglu, Playgroundu a IFTTT"/>
  </div>
</div>

## Požadavky

* [**Radio Dongle**](https://www.hardwario.store/cz/p/radio-dongle)
* [**Core Module**](https://www.hardwario.store/cz/p/core-module)
* [**Battery Module**](https://www.hardwario.store/cz/p/battery-module)
* [**Sensor Module**](https://www.hardwario.store/cz/p/sensor-module)
* **Magnetický spínač** \(pro přišroubování SA-201-A, samolepicí SA-203\)
* Budete potřebovat počítač s operačním systémem **Windows**, **Linux** nebo **macOS**.

:::info

Můžete také připojit Radio Dongle k Raspberry Pi nebo jinému jednodeskovému počítači. Podívejte se na dokument [**Instalace na Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/).

:::

## Stažení HARDWARIO Playground

Stáhněte si nejnovější verzi [HARDWARIO Playground](https://github.com/hardwario/hardwario-playground/releases) pro svůj operační systém. Po stažení spusťte aplikaci Playground.


<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-playground-run.webp')} alt="Aplikace BigClown Playground otevřená na domovské obrazovce s dokumentací Learn"/>
  </div>
</div><br></br>

Nyní je potřeba se ujistit, že moduly používají nejnovější firmware. Je nutné nahrát firmware do vašeho [**Radio Dongle**](https://www.hardwario.store/cz/p/radio-dongle) a vzdáleného uzlu [**Core Module**](https://www.hardwario.store/cz/p/core-module).

## Nahrání firmwaru do dveřního senzoru

#### Krok 1: Připojení

**Připojte pouze** dveřní senzor k USB portu vašeho počítače.

#### Krok 2: Nahrání firmwaru

V aplikaci Playground přejděte na záložku **Firmware**, vyberte firmware `bigclownlabs/bcf-radio-door-sensor`, zvolte sériový port zařízení v poli **Device** a klikněte na **FLASH FIRMWARE**.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-playground-flash-door-sensor.webp')} alt="Záložka Firmware s vybraným bcf-radio-door-sensor, zvoleným sériovým portem a zvýrazněným Flash Firmware"/>
  </div>
</div>

#### Krok 3: Odpojení

Odpojte **dveřní senzor** od počítače. Vyjměte baterie a ponechte senzor bez napájení pro pozdější proces párování.

## Nahrání firmwaru do Radio Dongle

#### Krok 1: Připojení

Připojte **pouze** [Radio Dongle](https://www.hardwario.store/cz/p/radio-dongle) k USB portu vašeho počítače.

#### Krok 2: Nahrání firmwaru

V aplikaci Playground přejděte na záložku **Firmware**, vyberte firmware `bigclownlabs/bcf-gateway-usb-dongle`, zvolte sériový port zařízení v poli **Device** a klikněte na **FLASH FIRMWARE**.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-playground-flash-dongle.webp')} alt="Záložka Firmware s vybraným bcf-gateway-usb-dongle, zvoleným sériovým portem a zvýrazněným Flash Firmware"/>
  </div>
</div>

#### Krok 3: Nechte připojeno

Nechte [**Radio Dongle**](https://www.hardwario.store/cz/p/radio-dongle) připojený k počítači.

## Spuštění brány

V levém dolním rohu klikněte na **Gateway** a vyberte sériový port zařízení. Text **Gateway** by měl změnit barvu na **zelenou**.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-playground-gateway-connect.webp')} alt="Ovládání Gateway v levém dolním rohu s vybraným sériovým portem Radio Donglu"/>
  </div>
</div>

## Spárování Radio Door Sensor

#### Krok 1: Spuštění párování

Na záložce **Radio** klikněte na tlačítko **Pairing start**.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-playground-pairing-start.webp')} alt="Záložka Radio se zvýrazněným tlačítkem Pairing start"/>
  </div>
</div>

#### Krok 2: Přepnutí dveřního senzoru do párovacího režimu

Nyní vložte baterie do dveřního senzoru. Párovací příkaz je odeslán pokaždé, když vložíte baterie do vzdáleného modulu.

#### Krok 3: Ukončení párování

Ukončete párování kliknutím na tlačítko **Pairing stop**.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-playground-pairing-stop.webp')} alt="Záložka Radio se spárovaným door-sensor:0 v seznamu a zvýrazněným tlačítkem Pairing stop"/>
  </div>
</div>

## Otestuje dveřní senzor

#### Krok 1: Přepněte se na záložku **MQTT** a přihlaste se k odběru tématu `#`.

#### Krok 2: Přikládejte a oddalujte magnet od senzoru – měli byste vidět MQTT zprávy v horním okně.

#### Krok 3: Další zprávy jsou stisknutí tlačítka a změna teploty. Vyzkoušejte to!


<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-playground-mqtt-test.webp')} alt="Záložka MQTT s odběrem tématu # a zprávami o stavu door-sensoru přepínajícími mezi true a false"/>
  </div>
</div>
:::success
Skvělé! Vytvořili jste rádiovou síť, která přijímá události a měří teplotu.

:::

## Integrace s IFTTT

V této části vytvoříme **Applet** ve službě **IFTTT**. **Applet** funguje jako mechanismus pro spouštění událostí.

#### Krok 1: Otevřete webový prohlížeč a přejděte na [**IFTTT**](https://ifttt.com/):

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-ifttt-01.webp')} alt="Úvodní stránka IFTTT se zvýrazněným tlačítkem Sign in"/>
  </div>
</div>

#### Krok 2: Přihlaste se do služby IFTTT. Můžete se zaregistrovat pomocí účtu Google nebo Facebook:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-ifttt-02.webp')} alt="Stránka Discover na IFTTT po přihlášení se zvýrazněnou položkou My Applets v menu"/>
  </div>
</div>

#### Krok 3: V menu přejděte do sekce **My Applets** a klikněte na tlačítko **New Applet**:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-ifttt-03.webp')} alt="Stránka My Applets se zvýrazněným tlačítkem New Applet"/>
  </div>
</div>

#### Krok 4: Klikněte na **+this** ve větě `if this then that`:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-ifttt-04.webp')} alt="Editor nového appletu se zvýrazněným +this ve větě if this then that"/>
  </div>
</div>

#### Krok 5: Vyhledejte službu s názvem **Webhooks** a vyberte ji:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-ifttt-05.webp')} alt="Krok Choose a service s vyhledaným Webhooks a zvýrazněnou dlaždicí Webhooks"/>
  </div>
</div>

#### Krok 6: Klikněte na **Receive a web request**:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-ifttt-06.webp')} alt="Krok Choose trigger se zvýrazněnou kartou Receive a web request"/>
  </div>
</div>

#### Krok 7: Do pole **Event Name** napište `door` a klikněte na **Create Trigger**:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-ifttt-07.webp')} alt="Pole triggeru s názvem události door a zvýrazněným tlačítkem Create trigger"/>
  </div>
</div>

#### Krok 8: Klikněte na **+that** ve větě `if this then that`:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-ifttt-08.webp')} alt="Editor nového appletu se zvýrazněným +that ve větě if this then that"/>
  </div>
</div>

#### Krok 9: Vyhledejte akční službu s názvem **Notifications** a vyberte ji:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-ifttt-09.webp')} alt="Krok Choose action service s vyhledaným Notifications a zvýrazněnou dlaždicí Notifications"/>
  </div>
</div>

#### Krok 10: Klikněte na **Send a notification from the IFTTT app**:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-ifttt-10.webp')} alt="Krok Choose action se zvýrazněnou kartou Send a notification from the IFTTT app"/>
  </div>
</div>

#### Krok 11: Upravte pole **Notification** a vložte text `Door Sensor Alarm at {{OccurredAt}} !` a poté klikněte na tlačítko **Create action**:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-ifttt-11.webp')} alt="Pole akce s vyplněným textem oznámení Door Sensor Alarm a zvýrazněným tlačítkem Create action"/>
  </div>
</div>

#### Krok 12: Klikněte na tlačítko **Finish**:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-ifttt-12.webp')} alt="Krok Review and finish appletu door se zvýrazněným tlačítkem Finish"/>
  </div>
</div>

#### Krok 13: Klikněte na tlačítko **Webhooks**:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-ifttt-13.webp')} alt="Karta dokončeného appletu door se zvýrazněnou ikonou Webhooks"/>
  </div>
</div>

#### Krok 14: Klikněte na tlačítko **Documentation**:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-ifttt-14.webp')} alt="Stránka služby Webhooks se zvýrazněným tlačítkem Documentation"/>
  </div>
</div>

#### Krok 15: Nyní máte svůj notifikační klíč. **Nechte si tuto stránku otevřenou, abyste mohli tento klíč později zkopírovat do Node-RED**:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-ifttt-15.webp')} alt="Stránka dokumentace Webhooks se zvýrazněným osobním klíčem ke zkopírování"/>
  </div>
</div>

#### Krok 16: Nainstalujte si aplikaci **IFTTT** do svého chytrého telefonu a přihlaste se pomocí stejného účtu, který jste použili k vytvoření appletu. Při výzvě povolte aplikaci zasílání push notifikací.

:::success

V tomto bodě máte funkční notifikační **Applet** ve službě **IFTTT**.

:::

## Node-RED plug-in pro IFTTT

Pro použití IFTTT v Node-RED můžeme využít jednoduchý plug-in, který bude odesílat notifikace.

#### Krok 1: Klikněte na záložku **MQTT**, poté v pravém horním rohu na menu a vyberte **Manage palette**.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-node-red-manage-palette.webp')} alt="Otevřené menu Node-RED se zvýrazněnou položkou Manage palette"/>
  </div>
</div>

#### Krok 2: Přepněte se na záložku **Install**, vyhledejte `ifttt` a klikněte na tlačítko **Install**. V zobrazovaném okně klikněte znovu na **Install**.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-node-red-install-ifttt.webp')} alt="Záložka Install v Manage palette s vyhledaným ifttt a zvýrazněným tlačítkem install u node-red-contrib-ifttt"/>
  </div>
</div>

#### Krok 3: Po instalaci uvidíte potvrzení, že nové uzly byly přidány do prostředí Node-RED:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-node-red-installed-confirmation.webp')} alt="Potvrzení, že uzly ifttt-key a ifttt out byly přidány do palety"/>
  </div>
</div><br></br>

:::success

Skvělé! Plugin pro Node-RED umožní odesílat notifikace přímo do vašeho telefonu.

:::

## Import notifikačního flow do Node-RED

#### Krok 1: Zkopírujte níže uvedený text do schránky:

```text
[{"id":"5ca15197.aef91","type":"mqtt in","z":"49c6b66c.16eaf8","name":"","topic":"node/door-sensor:0/door-sensor/a/state","qos":"2","broker":"67b8de4a.029d3","x":210,"y":100,"wires":[["ccd36bb4.eccae8"]]},{"id":"ccd36bb4.eccae8","type":"switch","z":"49c6b66c.16eaf8","name":"","property":"payload","propertyType":"msg","rules":[{"t":"eq","v":"false","vt":"str"}],"checkall":"true","repair":false,"outputs":1,"x":210,"y":220,"wires":[["6cb9da01.6abab4"]]},{"id":"6cb9da01.6abab4","type":"ifttt out","z":"49c6b66c.16eaf8","eventName":"door","key":"","x":210,"y":320,"wires":[]},{"id":"67b8de4a.029d3","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","willTopic":"","willQos":"0","willPayload":""}]
```

#### Krok 2: Klikněte na **Menu** v pravém horním rohu, poté vyberte **Import** a následně **Clipboard**:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-node-red-menu-import.webp')} alt="Menu Node-RED se zvýrazněnými položkami Import a Clipboard"/>
  </div>
</div>

#### Krok 3: Vložte text ze schránky do textového pole a stiskněte **Import**:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-node-red-dialog-import.webp')} alt="Dialog Import nodes s vloženým JSON kódem flow a zvýrazněným tlačítkem Import"/>
  </div>
</div>

## Nastavení IFTTT klíče

#### Krok 1: Naimportovali jste flow. Nyní je potřeba vyplnit vlastní **IFTTT klíč**. Poklepejte na uzel **IFTTT**:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-node-red-doubleclick-ifttt.webp')} alt="Importovaný oznamovací flow se zvýrazněným uzlem IFTTT door pro úpravu"/>
  </div>
</div>

#### Krok 2: Klikněte na **ikonu tužky** a zkopírujte a **vlože klíč** z posledního kroku kapitoly o integraci s IFTTT. Zkontrolujte, že název události (**Event name**) je nastaven na **door**. Poté klikněte na **Done**:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-node-red-config-ifttt.webp')} alt="Dialog úpravy uzlu ifttt out se zvýrazněnou ikonou tužky u Key a názvem události door"/>
  </div>
</div>

## Spusťte a otestujte své flow!

#### Krok 1: Pokaždé, když změníte flow, musíte kliknout na tlačítko **Deploy** v pravém horním rohu. **Udělějte to prosím nyní**:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-node-red-deploy.webp')} alt="Editor Node-RED se zvýrazněným tlačítkem Deploy v pravém horním rohu"/>
  </div>
</div>

#### Krok 2: Nyní přiložte magnet k magnetickému senzoru na vašem rádiovém dveřním senzoru a poté jej oddalte. Během několika sekund by vám měla přijít IFTTT notifikace!

V pravé záložce **debug** byste měli vidět zprávy „true“ a „false“ a během stavu **false** se na chvíli zobrazí zelená vlaječka **Sent!** u uzlu IFTTT.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-node-red-test.webp')} alt="Zprávy o stavu dveří true a false v záložce debug a příznak Sent! pod uzlem IFTTT"/>
  </div>
</div><br></br>

Pokud chcete být upozorňováni na zprávy typu „true“ místo **false**, jednoduše otevřete **switch node** a změňte text `false` v pravidlech na `true`.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-phone-notification.webp')} alt="Telefon zobrazující push oznámení IFTTT Door Sensor Alarm s datem a časem"/>
  </div>
</div><br></br>

:::success

Nyní najděte vhodné místo pro umístění **Radio Door Sensor** a užijte si notifikace, které budete dostávat!

:::

## Další funkce

Naimportujte toto flow do Node-RED, které umožní:

* Zobrazit aktuální stav dveří pomocí grafického zámku
* Zobrazit stopky pro otevřené dveře a vyvolat událost po uplynutí nastaveného času otevření
* Zkontrolovat stav dveří v nastavený čas a generovat událost

```text
[{"id":"6f038501.0d3aec","type":"mqtt in","z":"84faeffa.c3a93","name":"","topic":"node/door-sensor:0/door-sensor/a/state","qos":"2","broker":"29fba84a.b2af58","x":290,"y":260,"wires":[["27a2954e.e0ee9a"]]},{"id":"968704d7.760558","type":"ui_switch","z":"84faeffa.c3a93","name":"","label":"Doors","group":"57ff470b.93fdf8","order":0,"width":"0","height":"0","passthru":false,"decouple":"true","topic":"","style":"","onvalue":"true","onvalueType":"str","onicon":"fa-lock","oncolor":"green","offvalue":"false","offvalueType":"str","officon":"fa-unlock","offcolor":"red","x":750,"y":260,"wires":[[]]},{"id":"cd19b231.5a539","type":"inject","z":"84faeffa.c3a93","name":"","topic":"","payload":"","payloadType":"date","repeat":"1","crontab":"","once":false,"onceDelay":0.1,"x":210,"y":420,"wires":[["90766ef0.cb081"]]},{"id":"ec67f171.3a0db","type":"ui_text","z":"84faeffa.c3a93","group":"57ff470b.93fdf8","order":0,"width":0,"height":0,"name":"","label":"Opened (sec)","format":"{{msg.payload}}","layout":"row-spread","x":580,"y":380,"wires":[]},{"id":"90766ef0.cb081","type":"function","z":"84faeffa.c3a93","name":"human time","func":"var human = {payload : \"\"};\nvar seconds = {payload : 0};\n\nif(flow.get(\"state\") == \"true\")\n{\n    human.payload = \"CLOSED\";\n} else\n{\n    diff = parseInt((Date.now() - flow.get(\"timestamp\")));\n    human.payload = new Date(diff).toString().slice(16,24);\n    seconds.payload = parseInt(diff/1000);\n}\n\n\nreturn [human, seconds];","outputs":2,"noerr":0,"x":390,"y":420,"wires":[["ec67f171.3a0db"],["fa64f9a0.2e58e8"]],"outputLabels":["human time","seconds"],"icon":"node-red/timer.png"},{"id":"27a2954e.e0ee9a","type":"change","z":"84faeffa.c3a93","name":"","rules":[{"t":"set","p":"state","pt":"flow","to":"payload","tot":"msg"},{"t":"set","p":"timestamp","pt":"flow","to":"","tot":"date"}],"action":"","property":"","from":"","to":"","reg":false,"x":580,"y":260,"wires":[["968704d7.760558"]]},{"id":"3ed1d655.049fda","type":"inject","z":"84faeffa.c3a93","name":"at 22:00","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"00 22 * * *","once":false,"onceDelay":0.1,"x":200,"y":600,"wires":[["66b56029.25196"]]},{"id":"66b56029.25196","type":"switch","z":"84faeffa.c3a93","name":"","property":"state","propertyType":"flow","rules":[{"t":"eq","v":"false","vt":"str"}],"checkall":"true","repair":false,"outputs":1,"x":370,"y":600,"wires":[["bf5ca77b.366198"]]},{"id":"94e19310.ac12e","type":"debug","z":"84faeffa.c3a93","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":770,"y":600,"wires":[]},{"id":"bf5ca77b.366198","type":"change","z":"84faeffa.c3a93","name":"","rules":[{"t":"set","p":"payload","pt":"msg","to":"Door opened at night","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":580,"y":600,"wires":[["94e19310.ac12e"]]},{"id":"fa64f9a0.2e58e8","type":"switch","z":"84faeffa.c3a93","name":"opened for 5 s","property":"payload","propertyType":"msg","rules":[{"t":"eq","v":"5","vt":"num"}],"checkall":"true","repair":false,"outputs":1,"x":580,"y":440,"wires":[["e3ba7f50.53703"]]},{"id":"e3ba7f50.53703","type":"debug","z":"84faeffa.c3a93","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":770,"y":440,"wires":[]},{"id":"cd9712a1.91c45","type":"comment","z":"84faeffa.c3a93","name":"Save state to flow and show it on dasboard","info":"","x":300,"y":200,"wires":[]},{"id":"21a591a0.10411e","type":"comment","z":"84faeffa.c3a93","name":"Opened doors stopwatch","info":"","x":250,"y":360,"wires":[]},{"id":"6752875e.0092b8","type":"comment","z":"84faeffa.c3a93","name":"Check door state at 22:00","info":"","x":250,"y":540,"wires":[]},{"id":"29fba84a.b2af58","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","willTopic":"","willQos":"0","willPayload":""},{"id":"57ff470b.93fdf8","type":"ui_group","z":"","name":"Default","tab":"11207769.c31889","disp":true,"width":"6","collapse":false},{"id":"11207769.c31889","type":"ui_tab","z":"","name":"Home","icon":"dashboard"}]
```

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-node-red-more-flows.webp')} alt="Další flow v Node-RED: stav dveří na dashboardu, stopky otevřených dveří a kontrola dveří ve 22:00"/>
  </div>
</div>

