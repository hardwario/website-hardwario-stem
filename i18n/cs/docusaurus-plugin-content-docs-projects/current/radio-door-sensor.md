---
slug: radio-door-sensor
title: Bezdrátový dveřní senzor
---
import Image from '@theme/IdealImage';

# Bezdrátový dveřní senzor

**Bezdrátový dveřní senzor** vám pošle upozornění do telefonu pokaždé, když někdo otevře dveře, okno nebo třeba dózu na sušenky! Hodí se také jako připomínka, když večer zapomenete zavřít garáž nebo bránu.

Krabičku můžete opatřit magnetem, takže ji snadno připevníte, a na baterie senzor vydrží mnoho let. Instalace je opravdu jednoduchá.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-preview.webp')} alt="Sestavený Radio Door Sensor ve žluté krabičce s magnetickým kontaktem na kabelu vedle"/>
  </div>
</div>
<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-overview.webp')} alt="Rozložené díly senzoru Radio Door Sensor: moduly, magnetický kontakt, díly krabičky a spojovací materiál"/>
  </div>
</div>
<div class="container">
  <div class="row">
    <Image  img={require('./img/radio-door-sensor/radio-door-sensor.png')}
          style={{ backgroundColor: "#fff" }} alt="Blokové schéma: magnetický kontakt připojený k senzoru Radio Door Sensor, rádiem k donglu, Playgroundu a IFTTT"/>
  </div>
</div>

## Úvodní video k projektu

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
  <iframe
  src="https://www.youtube.com/embed/cvO_tXcAvZ8?si=0UJ3TTTpmu1JjB67" title="YouTube video player"
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>

## Požadavky

* [**Radio Dongle**](https://www.hardwario.store/cz/p/radio-dongle)
* [**Core Module**](https://www.hardwario.store/cz/p/core-module)
* [**Battery Module**](https://www.hardwario.store/cz/p/battery-module)
* [**Sensor Module**](https://www.hardwario.store/cz/p/sensor-module)
* **Magnetický kontakt** \(SA-201-A k přišroubování, samolepicí SA-203\)
* Budete potřebovat počítač s operačním systémem **Windows**, **Linux** nebo **macOS**.

:::info

Radio Dongle můžete připojit také k Raspberry Pi nebo jinému jednodeskovému počítači. Postup najdete v dokumentu [**Instalace na Raspberry Pi**](https://docs.hardwario.com/tower/server-raspberry-pi/).

:::

## Stažení HARDWARIO Playground

Stáhněte si nejnovější verzi [HARDWARIO Playground](https://github.com/hardwario/hardwario-playground/releases) pro svůj operační systém. Po stažení spusťte aplikaci Playground.


<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-playground-run.webp')} alt="Aplikace BigClown Playground otevřená na domovské obrazovce s dokumentací Learn"/>
  </div>
</div><br></br>

Teď nahrajte nejnovější firmware do donglu [**Radio Dongle**](https://www.hardwario.store/cz/p/radio-dongle) i do vzdáleného uzlu [**Core Module**](https://www.hardwario.store/cz/p/core-module).

## Nahrání firmwaru do dveřního senzoru

#### Krok 1: Připojte senzor

K USB portu počítače **připojte jen** dveřní senzor.

#### Krok 2: Nahrajte firmware

V aplikaci Playground přejděte na záložku **Firmware**, vyberte firmware `bigclownlabs/bcf-radio-door-sensor`, zvolte sériový port zařízení v poli **Device** a klikněte na **FLASH FIRMWARE**.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-playground-flash-door-sensor.webp')} alt="Záložka Firmware s vybraným bcf-radio-door-sensor, zvoleným sériovým portem a zvýrazněným Flash Firmware"/>
  </div>
</div>

#### Krok 3: Odpojte senzor

Odpojte **dveřní senzor** od počítače. Vyjměte baterie a nechte senzor bez napájení, dokud ho nebudete párovat.

## Nahrání firmwaru do Radio Dongle

#### Krok 1: Připojte dongle

K USB portu počítače připojte **jen** [Radio Dongle](https://www.hardwario.store/cz/p/radio-dongle).

#### Krok 2: Nahrajte firmware

V aplikaci Playground přejděte na záložku **Firmware**, vyberte firmware `bigclownlabs/bcf-gateway-usb-dongle`, zvolte sériový port zařízení v poli **Device** a klikněte na **FLASH FIRMWARE**.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-playground-flash-dongle.webp')} alt="Záložka Firmware s vybraným bcf-gateway-usb-dongle, zvoleným sériovým portem a zvýrazněným Flash Firmware"/>
  </div>
</div>

#### Krok 3: Nechte dongle připojený

Nechte [**Radio Dongle**](https://www.hardwario.store/cz/p/radio-dongle) připojený k počítači.

## Spuštění brány

V levém dolním rohu klikněte na **Gateway** a vyberte sériový port zařízení. Text **Gateway** by se měl zbarvit **zeleně**.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-playground-gateway-connect.webp')} alt="Ovládání Gateway v levém dolním rohu s vybraným sériovým portem Radio Donglu"/>
  </div>
</div>

## Spárování dveřního senzoru

#### Krok 1: Spusťte párování

Na záložce **Radio** klikněte na tlačítko **Pairing start**.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-playground-pairing-start.webp')} alt="Záložka Radio se zvýrazněným tlačítkem Pairing start"/>
  </div>
</div>

#### Krok 2: Přepněte senzor do režimu párování

Teď do dveřního senzoru vložte baterie. Vzdálený modul odešle párovací příkaz pokaždé, když do něj vložíte baterie.

#### Krok 3: Ukončete párování

Párování ukončete tlačítkem **Pairing stop**.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-playground-pairing-stop.webp')} alt="Záložka Radio se spárovaným door-sensor:0 v seznamu a zvýrazněným tlačítkem Pairing stop"/>
  </div>
</div>

## Otestujte dveřní senzor

#### Krok 1: Přepněte se na záložku **MQTT** a přihlaste se k odběru topicu `#`

#### Krok 2: Přibližte magnet k senzoru a zase ho oddalte. V horním okně byste měli vidět zprávy MQTT

#### Krok 3: Zprávy posílá i stisk tlačítka a změna teploty. Vyzkoušejte to!


<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-playground-mqtt-test.webp')} alt="Záložka MQTT s odběrem topicu # a zprávami o stavu door-sensor přepínajícími mezi true a false"/>
  </div>
</div>
:::success
Skvělé! Vytvořili jste rádiovou síť, která přijímá události i naměřenou teplotu.

:::

## Integrace s IFTTT

V této části vytvoříme **Applet** ve službě **IFTTT**. **Applet** je pravidlo, které na určitou událost zareaguje akcí.

#### Krok 1: Otevřete webový prohlížeč a přejděte na [**IFTTT**](https://ifttt.com/):

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-ifttt-01.webp')} alt="Úvodní stránka IFTTT se zvýrazněným tlačítkem Sign in"/>
  </div>
</div>

#### Krok 2: Přihlaste se do služby IFTTT. Zaregistrovat se můžete i účtem Google nebo Facebook:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-ifttt-02.webp')} alt="Stránka Discover na IFTTT po přihlášení se zvýrazněnou položkou My Applets v menu"/>
  </div>
</div>

#### Krok 3: V menu přejděte do **My Applets** a klikněte na tlačítko **New Applet**:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-ifttt-03.webp')} alt="Stránka My Applets se zvýrazněným tlačítkem New Applet"/>
  </div>
</div>

#### Krok 4: Ve větě `if this then that` klikněte na **+this**:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-ifttt-04.webp')} alt="Editor nového appletu se zvýrazněným +this ve větě if this then that"/>
  </div>
</div>

#### Krok 5: Vyhledejte službu **Webhooks** a vyberte ji:

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

#### Krok 8: Ve větě `if this then that` klikněte na **+that**:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-ifttt-08.webp')} alt="Editor nového appletu se zvýrazněným +that ve větě if this then that"/>
  </div>
</div>

#### Krok 9: Vyhledejte službu pro akci **Notifications** a vyberte ji:

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

#### Krok 11: Do pole **Notification** vložte text `Door Sensor Alarm at {{OccurredAt}} !` a klikněte na tlačítko **Create action**:

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

#### Krok 15: Teď máte svůj klíč pro notifikace. **Nechte tuto stránku otevřenou, klíč budete později kopírovat do Node-RED**:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-ifttt-15.webp')} alt="Stránka dokumentace Webhooks se zvýrazněným osobním klíčem ke zkopírování"/>
  </div>
</div>

#### Krok 16: Nainstalujte si do chytrého telefonu aplikaci **IFTTT** a přihlaste se stejným účtem, ve kterém jste applet vytvořili. Když se aplikace zeptá, povolte jí push notifikace

:::success

Teď máte ve službě **IFTTT** funkční **Applet** pro notifikace.

:::

## Plugin IFTTT pro Node-RED

IFTTT zapojíte do Node-RED jednoduchým pluginem, který odesílá notifikace.

#### Krok 1: Klikněte na záložku **MQTT**, pak vpravo nahoře na menu a vyberte **Manage palette**

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-node-red-manage-palette.webp')} alt="Otevřené menu Node-RED se zvýrazněnou položkou Manage palette"/>
  </div>
</div>

#### Krok 2: Přepněte se na záložku **Install**, vyhledejte `ifttt` a klikněte na tlačítko **install**. Ve vyskakovacím okně klikněte znovu na **Install**:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-node-red-install-ifttt.webp')} alt="Záložka Install v Manage palette s vyhledaným ifttt a zvýrazněným tlačítkem install u node-red-contrib-ifttt"/>
  </div>
</div>

#### Krok 3: Po instalaci se zobrazí potvrzení, že do Node-RED přibyly nové uzly:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-node-red-installed-confirmation.webp')} alt="Potvrzení, že uzly ifttt-key a ifttt out byly přidány do palety"/>
  </div>
</div><br></br>

:::success

Skvělé! Díky pluginu pro IFTTT bude Node-RED posílat notifikace přímo do telefonu.

:::

## Import flow pro notifikace do Node-RED

#### Krok 1: Zkopírujte do schránky tento text:

```text
[{"id":"5ca15197.aef91","type":"mqtt in","z":"49c6b66c.16eaf8","name":"","topic":"node/door-sensor:0/door-sensor/a/state","qos":"2","broker":"67b8de4a.029d3","x":210,"y":100,"wires":[["ccd36bb4.eccae8"]]},{"id":"ccd36bb4.eccae8","type":"switch","z":"49c6b66c.16eaf8","name":"","property":"payload","propertyType":"msg","rules":[{"t":"eq","v":"false","vt":"str"}],"checkall":"true","repair":false,"outputs":1,"x":210,"y":220,"wires":[["6cb9da01.6abab4"]]},{"id":"6cb9da01.6abab4","type":"ifttt out","z":"49c6b66c.16eaf8","eventName":"door","key":"","x":210,"y":320,"wires":[]},{"id":"67b8de4a.029d3","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","willTopic":"","willQos":"0","willPayload":""}]
```

#### Krok 2: Klikněte vpravo nahoře na **menu** a vyberte **Import** a **Clipboard**:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-node-red-menu-import.webp')} alt="Menu Node-RED se zvýrazněnými položkami Import a Clipboard"/>
  </div>
</div>

#### Krok 3: Vložte text ze schránky do textového pole a klikněte na **Import**:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-node-red-dialog-import.webp')} alt="Dialog Import nodes s vloženým JSON kódem flow a zvýrazněným tlačítkem Import"/>
  </div>
</div>

## Nastavení klíče IFTTT

#### Krok 1: Flow je naimportovaný, teď do něj doplňte svůj **klíč IFTTT**. Dvakrát klikněte na uzel **IFTTT**:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-node-red-doubleclick-ifttt.webp')} alt="Importovaný oznamovací flow se zvýrazněným uzlem IFTTT door pro úpravu"/>
  </div>
</div>

#### Krok 2: Klikněte na **ikonu tužky** a **vložte klíč** z posledního kroku části Integrace s IFTTT. Zkontrolujte, že je název události (**Event name**) nastavený na **door**. Pak klikněte na **Done**:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-node-red-config-ifttt.webp')} alt="Dialog úpravy uzlu ifttt out se zvýrazněnou ikonou tužky u Key a názvem události door"/>
  </div>
</div>

## Spusťte a otestujte flow

#### Krok 1: Po každé změně flow musíte kliknout na tlačítko **Deploy** v pravém horním rohu. **Udělejte to teď**:

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-node-red-deploy.webp')} alt="Editor Node-RED se zvýrazněným tlačítkem Deploy v pravém horním rohu"/>
  </div>
</div>

#### Krok 2: Přiložte magnet k magnetickému kontaktu dveřního senzoru a zase ho oddalte. Do několika sekund by vám měla přijít notifikace z IFTTT!

Na záložce **debug** vpravo uvidíte zprávy „true“ a „false“. Při stavu **false** se u uzlu IFTTT na chvíli objeví zelený příznak **Sent!**.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-node-red-test.webp')} alt="Zprávy o stavu dveří true a false v záložce debug a příznak Sent! pod uzlem IFTTT"/>
  </div>
</div><br></br>

Pokud chcete dostávat upozornění na zprávy „true“ místo **false**, otevřete uzel **switch** a v pravidlech změňte text `false` na `true`.

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-phone-notification.webp')} alt="Telefon zobrazující push oznámení IFTTT Door Sensor Alarm s datem a časem"/>
  </div>
</div><br></br>

:::success

Teď najděte senzoru **Radio Door Sensor** vhodné místo a užívejte si notifikace!

:::

## Další funkce

Do Node-RED můžete naimportovat i tento flow, který umí:

* Zobrazit aktuální stav dveří pomocí grafického zámku
* Zobrazit stopky pro otevřené dveře a vyvolat událost po uplynutí nastaveného času otevření
* Zkontrolovat stav dveří v nastavený čas a vyvolat událost

```text
[{"id":"6f038501.0d3aec","type":"mqtt in","z":"84faeffa.c3a93","name":"","topic":"node/door-sensor:0/door-sensor/a/state","qos":"2","broker":"29fba84a.b2af58","x":290,"y":260,"wires":[["27a2954e.e0ee9a"]]},{"id":"968704d7.760558","type":"ui_switch","z":"84faeffa.c3a93","name":"","label":"Doors","group":"57ff470b.93fdf8","order":0,"width":"0","height":"0","passthru":false,"decouple":"true","topic":"","style":"","onvalue":"true","onvalueType":"str","onicon":"fa-lock","oncolor":"green","offvalue":"false","offvalueType":"str","officon":"fa-unlock","offcolor":"red","x":750,"y":260,"wires":[[]]},{"id":"cd19b231.5a539","type":"inject","z":"84faeffa.c3a93","name":"","topic":"","payload":"","payloadType":"date","repeat":"1","crontab":"","once":false,"onceDelay":0.1,"x":210,"y":420,"wires":[["90766ef0.cb081"]]},{"id":"ec67f171.3a0db","type":"ui_text","z":"84faeffa.c3a93","group":"57ff470b.93fdf8","order":0,"width":0,"height":0,"name":"","label":"Opened (sec)","format":"{{msg.payload}}","layout":"row-spread","x":580,"y":380,"wires":[]},{"id":"90766ef0.cb081","type":"function","z":"84faeffa.c3a93","name":"human time","func":"var human = {payload : \"\"};\nvar seconds = {payload : 0};\n\nif(flow.get(\"state\") == \"true\")\n{\n    human.payload = \"CLOSED\";\n} else\n{\n    diff = parseInt((Date.now() - flow.get(\"timestamp\")));\n    human.payload = new Date(diff).toString().slice(16,24);\n    seconds.payload = parseInt(diff/1000);\n}\n\n\nreturn [human, seconds];","outputs":2,"noerr":0,"x":390,"y":420,"wires":[["ec67f171.3a0db"],["fa64f9a0.2e58e8"]],"outputLabels":["human time","seconds"],"icon":"node-red/timer.png"},{"id":"27a2954e.e0ee9a","type":"change","z":"84faeffa.c3a93","name":"","rules":[{"t":"set","p":"state","pt":"flow","to":"payload","tot":"msg"},{"t":"set","p":"timestamp","pt":"flow","to":"","tot":"date"}],"action":"","property":"","from":"","to":"","reg":false,"x":580,"y":260,"wires":[["968704d7.760558"]]},{"id":"3ed1d655.049fda","type":"inject","z":"84faeffa.c3a93","name":"at 22:00","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"00 22 * * *","once":false,"onceDelay":0.1,"x":200,"y":600,"wires":[["66b56029.25196"]]},{"id":"66b56029.25196","type":"switch","z":"84faeffa.c3a93","name":"","property":"state","propertyType":"flow","rules":[{"t":"eq","v":"false","vt":"str"}],"checkall":"true","repair":false,"outputs":1,"x":370,"y":600,"wires":[["bf5ca77b.366198"]]},{"id":"94e19310.ac12e","type":"debug","z":"84faeffa.c3a93","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":770,"y":600,"wires":[]},{"id":"bf5ca77b.366198","type":"change","z":"84faeffa.c3a93","name":"","rules":[{"t":"set","p":"payload","pt":"msg","to":"Door opened at night","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":580,"y":600,"wires":[["94e19310.ac12e"]]},{"id":"fa64f9a0.2e58e8","type":"switch","z":"84faeffa.c3a93","name":"opened for 5 s","property":"payload","propertyType":"msg","rules":[{"t":"eq","v":"5","vt":"num"}],"checkall":"true","repair":false,"outputs":1,"x":580,"y":440,"wires":[["e3ba7f50.53703"]]},{"id":"e3ba7f50.53703","type":"debug","z":"84faeffa.c3a93","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":770,"y":440,"wires":[]},{"id":"cd9712a1.91c45","type":"comment","z":"84faeffa.c3a93","name":"Save state to flow and show it on dasboard","info":"","x":300,"y":200,"wires":[]},{"id":"21a591a0.10411e","type":"comment","z":"84faeffa.c3a93","name":"Opened doors stopwatch","info":"","x":250,"y":360,"wires":[]},{"id":"6752875e.0092b8","type":"comment","z":"84faeffa.c3a93","name":"Check door state at 22:00","info":"","x":250,"y":540,"wires":[]},{"id":"29fba84a.b2af58","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","willTopic":"","willQos":"0","willPayload":""},{"id":"57ff470b.93fdf8","type":"ui_group","z":"","name":"Default","tab":"11207769.c31889","disp":true,"width":"6","collapse":false},{"id":"11207769.c31889","type":"ui_tab","z":"","name":"Home","icon":"dashboard"}]
```

<div class="container">
  <div class="row">
    <Image img={require('./img/radio-door-sensor/radio-door-sensor-node-red-more-flows.webp')} alt="Další flow v Node-RED: stav dveří na dashboardu, stopky otevřených dveří a kontrola dveří ve 22:00"/>
  </div>
</div>

