---
slug: iot-indoor-air-quality-monitor-experiment
title: Experiment
---
import Image from '@theme/IdealImage';

## Experiment 1 - Monitor kvality vnitřního klimatu

**Časová dotace:** 15 min.

### Popis experimentu

Ze stavebnice HARDWARIO TOWER si postavíme monitor kvality vnitřního klimatu. Zařízení nám umožní měřit koncentraci oxidu uhličitého (CO2), koncentraci organických těkavých látek (VOC), teplotu a relativní vlhkost. Komunikace bude probíhat bezdrátově do Radio Dongle zasunutého do USB portu počítače. Naměřená data budeme zobrazovat v aplikaci HARDWARIO Playground, resp. v dashboardu vložené aplikace Node-RED.

V rámci experimentu pochopíme:

* že teplý vzduch stoupá vzhůru a proč
* co to je relativní vlhkost, rosný bod a TH index
* že standardní koncentrace CO2 ve venkovním prostředí je 400 ppm, tzn. 0,04% a že v nevětrané místnosti se bude zvyšovat a že při vyšších koncentracích negativně ovlivní naši výkonnost
* že CO2 je těžší než vzduch
* že VOC jsou organické těkavé látky, měří se v ppb a akceptovatelná koncentrace TVOC (VOC celkově) je 500 ppb (0.00005%)

### Kroky experimentu


1. Postavení monitorovací jednotky
2. Instalace aplikace Playground
3. Připojení jednotky k Playgroundu
4. Nastavení funkcí monitoringu a zobrazení dat

Měření teploty, vlhkosti, CO2 a VOC

**Postavení monitorovací jednotky**

<div class="container">
  <div class="row">
    <Image img={require('./stem-clime-xl.avif')}/>
  </div>
</div>

**Moduly v sestavě:**

* Core Module
* Battery Module
* CO2 Module
* Display Module
* Temperature Tag
* Humidity Tag
* VOC-LP Tag

Postavte si jednotku podle [videonávodu](https://www.youtube.com/watch?v=jGxjl5v7kqE)

**Instalace aplikace Playground**

[Stáhněte si aplikaci HARDWARIO Playground](https://github.com/hardwario/hardwario-playground/releases) a nainstalujte si ji do svého počítače.

### Připojení jednotky do Playgroundu

* Zasuňte do USB portu svého počítače **Radio Dongle**
* Otevřete aplikaci Playground a běžte na záložku **Devices**
* Vyberte z listu USB zařízení váš Radio Dongle a klikněte na **Connect**
* Klikněte na **Start pairing**
* Vložte do jednotky baterie

**Nastavení funkcí monitoringu a zobrazení dat**

* Přepněte se na záložku **Functions**
* Proveďte import **flow**

```json
[{"id":"2c41a2bd.aa36ae","type":"tab","label":"IAQ Monitor","disabled":false,"info":""},{"id":"8203aaee.220c58","type":"mqtt in","z":"2c41a2bd.aa36ae","name":"","topic":"node/air-quality-monitor:0/battery/-/voltage","qos":"2","datatype":"auto","broker":"67fc6ccd.e460d4","nl":false,"rap":false,"inputs":0,"x":330,"y":80,"wires":[["c2882634.6eba68"]]},{"id":"302aef24.2e89a","type":"mqtt in","z":"2c41a2bd.aa36ae","name":"","topic":"node/air-quality-monitor:0/co2-meter/-/concentration","qos":"2","datatype":"auto","broker":"67fc6ccd.e460d4","nl":false,"rap":false,"inputs":0,"x":390,"y":180,"wires":[["4d2b292b.1832b8"]]},{"id":"c20126e0.8e7338","type":"mqtt in","z":"2c41a2bd.aa36ae","name":"","topic":"node/air-quality-monitor:0/thermometer/0:0/temperature","qos":"2","datatype":"auto","broker":"67fc6ccd.e460d4","nl":false,"rap":false,"inputs":0,"x":410,"y":280,"wires":[["38569570.b364ca"]]},{"id":"1a91cdd2.5a6892","type":"mqtt in","z":"2c41a2bd.aa36ae","name":"","topic":"node/air-quality-monitor:0/hygrometer/0:4/relative-humidity","qos":"2","datatype":"auto","broker":"67fc6ccd.e460d4","nl":false,"rap":false,"inputs":0,"x":320,"y":360,"wires":[["52201a4f.691954"]]},{"id":"c2882634.6eba68","type":"ui_gauge","z":"2c41a2bd.aa36ae","name":"","group":"57ff470b.93fdf8","order":6,"width":"3","height":"3","gtype":"gage","title":"Voltage","label":"V","format":"{{value}}","min":0,"max":10,"colors":["#00b500","#e6e600","#ca3838"],"seg1":"","seg2":"","x":710,"y":80,"wires":[]},{"id":"4d2b292b.1832b8","type":"ui_gauge","z":"2c41a2bd.aa36ae","name":"","group":"57ff470b.93fdf8","order":1,"width":"3","height":"3","gtype":"gage","title":"CO2 concentration","label":"ppm","format":"{{value}}","min":0,"max":"3000","colors":["#00b500","#e6e600","#ca3838"],"seg1":"","seg2":"","x":710,"y":180,"wires":[]},{"id":"38569570.b364ca","type":"ui_gauge","z":"2c41a2bd.aa36ae","name":"","group":"57ff470b.93fdf8","order":2,"width":"3","height":"3","gtype":"gage","title":"Temperature","label":"°C","format":"{{value}}","min":0,"max":"40","colors":["#00b500","#e6e600","#ca3838"],"seg1":"","seg2":"","x":710,"y":280,"wires":[]},{"id":"52201a4f.691954","type":"ui_gauge","z":"2c41a2bd.aa36ae","name":"","group":"57ff470b.93fdf8","order":3,"width":"3","height":"3","gtype":"gage","title":"Humidity","label":"%","format":"{{value}}","min":0,"max":"100","colors":["#00b500","#e6e600","#ca3838"],"seg1":"","seg2":"","x":720,"y":360,"wires":[]},{"id":"9d36bbee.e2cd08","type":"mqtt in","z":"2c41a2bd.aa36ae","name":"","topic":"node/air-quality-monitor:0/voc-lp-sensor/0:0/tvoc","qos":"2","datatype":"auto","broker":"46ddad92.b27704","nl":false,"rap":false,"inputs":0,"x":360,"y":480,"wires":[["58b50f2f.eedd3"]]},{"id":"58b50f2f.eedd3","type":"ui_gauge","z":"2c41a2bd.aa36ae","name":"","group":"57ff470b.93fdf8","order":0,"width":0,"height":0,"gtype":"gage","title":"TVOC","label":"units","format":"{{value}} ppb","min":0,"max":"200","colors":["#00b500","#e6e600","#ca3838"],"seg1":"","seg2":"","x":710,"y":480,"wires":[]},{"id":"67fc6ccd.e460d4","type":"mqtt-broker","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","willTopic":"","willQos":"0","willPayload":""},{"id":"57ff470b.93fdf8","type":"ui_group","name":"Default","tab":"11207769.c31889","order":1,"disp":true,"width":"6","collapse":false},{"id":"46ddad92.b27704","type":"mqtt-broker","name":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","closeTopic":"","closeQos":"0","closePayload":"","willTopic":"","willQos":"0","willPayload":""},{"id":"11207769.c31889","type":"ui_tab","name":"Home","icon":"dashboard"}]
```


* Přepněte se na záložku **Messages**, pokud vše proběhlo správně, tak byste měli vidět příchozí zprávy z jednotky
* Přepněte se na záložku **Dashboard**, pokud vše proběhlo správně, tak byste měli vidět budíky s aktuálními naměřenými hodnotami teploty, vlhkosti, CO2 a VOC.

*Pozn.:*
1. *Pro urychlení odeslání dat na jednotku dýchněte*
2. *Jednotka měří teplotu, vlhkost a VOC každých 5 sekund, CO2 pak každých 15 sekund*
3. *Jednotka odesílá data každých 15 min.*
4. *Jednotka odešle data ihned, pokud dojde mezi dvěma měřeními k nárustu vyššímu než 0,2 °C u teploty, 5 % u relativní vlhkosti, 50 ppm u CO2 a 5 ppb u TVOC.*

### Měření teploty, vlhkosti, CO2 a VOC

* Zasoutěžte si v týmech kdo vlastním dechem vygeneruje nejvyšší teplotu<br />
*Otázka pro tým s nejnižší teplotou*<br />
**Proč teplý vzduch stoupá vzhůru?**

* Porovnejte si mezi týmy naměřenou vlhkost<br />
*Otázka pro všechny týmy*<br />
**Naměřená vlhkost je relativní vlhkostí. Vysvětlete pojmy relativní vlhkost a rosný bod.**

* Porovnejte si mezi týmy naměřené koncentrace CO2 a VOC<br />
*Otázka pro všechny týmy*<br />
**Čím vysvětlíte rozdíly v naměřených hodnotách?**


## Experiment 2 - Integrace monitoru kvality ovzduší s Google Sheets

**Časová dotace:** 15 mins.

### Popis experimentu

Na Experiment 1 může navazovat integrace s Google Tabulkou. Naměřená data z monitoru kvality vnitřního ovzduší budou ukládána do tabulky, ze které vytvoříme přehledné grafy.

V rámci experimentu pochopíme:

* jak propojit tabulku Google Sheets s prostředím Playground
* jak vytvořit přehledné grafy zobrazující závislost naměřených hodnot na rozvrhu hodin a počtu žáků ve třídě

### Kroky experimentu

* Vytvořte si **Google účet**
* Vytvořte novou Google tabulku, např. přes [sheets.new](https://docs.google.com/spreadsheets/d/1QeiJCh4L6f6cXWA7HfXrqGrWJPnjWcaemCiTn-Mbf9M/edit?gid=0#gid=0)
* Přejmenujte aktuální list z **List1** na **Data** – na tento název budeme v kódu odkazovat
* Můžete také upravit první řádek tak, aby popisoval, jaké hodnoty se nacházejí ve sloupcích – data budou přicházet v tomto pořadí: **CO₂, Teplota, Vlhkost, TVOC**
* V záložce **Nástroje** vyberte možnost **Editor skriptů**
* Vložte níže uvedený **skript** a uložte ho pomocí **Ctrl + S**

```json
function doPost(e) {
  var sheet;
  var rawData = e.parameter.val; // Data arrives in format "CO2;temp;hum;TVOC"
  sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data");

  var cuttedData = rawData.split(";"); //This cuts arrived data into separated values
  sheet.appendRow([cuttedData[0], cuttedData[1], cuttedData[2], cuttedData[3], new Date()]); //Data arrives in this order: "CO2, Temperature, Humidity, TVOC"
}
```

* **Pojmenujte projekt** názvem svého týmu a klikněte na **OK**
* V záložce **Publikovat** vyberte možnost **Nasadit jako webovou aplikaci**
* V nastavení oprávnění, u možnosti **Kdo má přístup k aplikaci**, zvolte **Kdokoliv, i anonymní uživatel**, a poté klikněte na **Nasadit**
* Stiskněte tlačítko **Zkontrolovat oprávnění**. Zobrazí se okno s upozorněním, že aplikace není ověřena. Vyberte **Rozšířené** a poté **Přejít na** `<název vašeho projektu>` **(nebezpečné)**. Povolte projektu přístup k vašemu Google účtu kliknutím na tlačítko **Povolit**.
* Pomocí **Ctrl + C** zkopírujte zobrazenou **URL adresu** pro další použití a klikněte na **OK**.
* V aplikaci **Playground** přejděte na kartu Functions a importujte tento **flow**.

```json
[{"id":"1fa190de.6bf34f","type":"mqtt in","z":"2c41a2bd.aa36ae","name":"","topic":"node/co2-monitor:0/co2-meter/-/concentration","qos":"2","datatype":"auto","broker":"d0869e74.d39d3","x":230,"y":380,"wires":[["1058eb8d.695774"]]},{"id":"fdb48a87.f1bde8","type":"mqtt in","z":"2c41a2bd.aa36ae","name":"","topic":"node/co2-monitor:0/thermometer/0:1/temperature","qos":"2","datatype":"auto","broker":"d0869e74.d39d3","x":240,"y":420,"wires":[["d2a76868.4a1a88"]]},{"id":"ad8c529f.84e79","type":"mqtt in","z":"2c41a2bd.aa36ae","name":"","topic":"node/co2-monitor:0/hygrometer/0:4/relative-humidity","qos":"2","broker":"d0869e74.d39d3","x":250,"y":460,"wires":[["92c2dca0.e7b93"]]},{"id":"f011b140.62712","type":"mqtt in","z":"2c41a2bd.aa36ae","name":"","topic":"node/co2-monitor:0/voc-sensor/0:0/tvoc","qos":"2","datatype":"auto","broker":"a1e2fc41.c77ce","x":210,"y":500,"wires":[["5d4d663a.f49858"]]},{"id":"f6f1904c.f411e","type":"function","z":"2c41a2bd.aa36ae","name":"Data Parser","func":"msg.payload = flow.get(\"co2\") + \";\" + flow.get(\"temp\") + \";\" +\n              flow.get(\"humidity\") + \";\" + flow.get(\"tvoc\");\nmsg.payload = { val: msg.payload,\n                type: 'rawData'};\n msg.headers = {'content-type':'application/x-www-form-urlencoded'};\nreturn msg;","outputs":1,"noerr":0,"x":790,"y":440,"wires":[["992d7e0f.3141e"]]},{"id":"1058eb8d.695774","type":"change","z":"2c41a2bd.aa36ae","name":"","rules":[{"t":"set","p":"co2","pt":"flow","to":"payload","tot":"msg"}],"action":"","property":"","from":"","to":"","reg":false,"x":530,"y":380,"wires":[["f6f1904c.f411e"]]},{"id":"d2a76868.4a1a88","type":"change","z":"2c41a2bd.aa36ae","name":"","rules":[{"t":"set","p":"temp","pt":"flow","to":"payload","tot":"msg"}],"action":"","property":"","from":"","to":"","reg":false,"x":530,"y":420,"wires":[["f6f1904c.f411e"]]},{"id":"92c2dca0.e7b93","type":"change","z":"2c41a2bd.aa36ae","name":"","rules":[{"t":"set","p":"humidity","pt":"flow","to":"payload","tot":"msg"}],"action":"","property":"","from":"","to":"","reg":false,"x":540,"y":460,"wires":[["f6f1904c.f411e"]]},{"id":"5d4d663a.f49858","type":"change","z":"2c41a2bd.aa36ae","name":"","rules":[{"t":"set","p":"tvoc","pt":"flow","to":"payload","tot":"msg"}],"action":"","property":"","from":"","to":"","reg":false,"x":530,"y":500,"wires":[["f6f1904c.f411e"]]},{"id":"2e286fc4.213ca","type":"inject","z":"2c41a2bd.aa36ae","name":"","topic":"","payload":"-1","payloadType":"num","repeat":"","crontab":"","once":true,"onceDelay":0.1,"x":130,"y":300,"wires":[["980aadd7.47307","2e69ab31.67fa74","a6a27021.dbb98","7dd059ea.b9bd08"]]},{"id":"980aadd7.47307","type":"change","z":"2c41a2bd.aa36ae","name":"","rules":[{"t":"set","p":"co2","pt":"flow","to":"payload","tot":"msg"}],"action":"","property":"","from":"","to":"","reg":false,"x":390,"y":200,"wires":[[]]},{"id":"2e69ab31.67fa74","type":"change","z":"2c41a2bd.aa36ae","name":"","rules":[{"t":"set","p":"temp","pt":"flow","to":"payload","tot":"msg"}],"action":"","property":"","from":"","to":"","reg":false,"x":390,"y":240,"wires":[[]]},{"id":"a6a27021.dbb98","type":"change","z":"2c41a2bd.aa36ae","name":"","rules":[{"t":"set","p":"humidity","pt":"flow","to":"payload","tot":"msg"}],"action":"","property":"","from":"","to":"","reg":false,"x":400,"y":280,"wires":[[]]},{"id":"7dd059ea.b9bd08","type":"change","z":"2c41a2bd.aa36ae","name":"","rules":[{"t":"set","p":"tvoc","pt":"flow","to":"payload","tot":"msg"}],"action":"","property":"","from":"","to":"","reg":false,"x":390,"y":320,"wires":[[]]},{"id":"992d7e0f.3141e","type":"http request","z":"2c41a2bd.aa36ae","name":"","method":"POST","ret":"txt","paytoqs":false,"url":"","tls":"","persist":false,"proxy":"","authType":"","x":910,"y":280,"wires":[[]]},{"id":"d0869e74.d39d3","type":"mqtt-broker","z":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","willTopic":"","willQos":"0","willPayload":""},{"id":"a1e2fc41.c77ce","type":"mqtt-broker","z":"","name":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","closeTopic":"","closeQos":"0","closePayload":"","willTopic":"","willQos":"0","willPayload":""}]
```

<div class="container">
  <div class="row">
    <Image img={require('./stem-experiment-image.png')}/>
  </div>
</div>


* Ve flow klikněte na bublinu **http request** a vložte URL adresu vašeho projektu do pole **URL**, poté přidejte následující **útržek kódu** a klikněte na **Hotovo**
* Horní část s **uzlem -1** slouží pouze k nastavení výchozích hodnot pro případ, že některé senzory ještě neposlaly žádná data.

```json
?value={{{payload}}}
```

<div class="container">
  <div class="row">
    <Image img={require('./stem-experiment-code.png')}/>
  </div>
</div>


* Potvrďte nastavení Functions kliknutím na tlačítko **Nasadit**
* Podívejte se do své **Google tabulky** a měli byste vidět, jak se do jednotlivých sloupců zapisují naměřené hodnoty
* Pokud v některém sloupci vidíte hodnotu **-1**, znamená to, že daný senzor ještě neodeslal žádná data
* Na konci měření doplňte do tabulky **rozvrh hodin a počet žáků** a poté prezentujte výsledky ostatním

## Experiment 3 - Integrace monitoru kvality ovzduší s aplikací Blynk

**Časová dotace**: 15 min.

### Popis experimentu

Na Experiment 1 může navazovat integrace s mobilní aplikací Blynk, díky které můžete zobrazit naměřená data ve svém chytrém telefonu.

V rámci experimentu pochopíme:

* jak propojit mobilní aplikaci Blynk s prostředím Playground

### Kroky experimentu


* Nainstalujte si [aplikaci Blynk](https://blynk.io/getting-started) do svého chytrého telefonu
* Vyberte možnost **Scan QR code** (Skenovat QR kód) a naskenujte tento **kód**

<div class="container">
  <div class="row">
    <Image img={require('./stem-qr-code.jpeg')}/>
  </div>
</div>

* Uvidíte, že se projekt objeví ve vaší aplikaci
* Klikněte na projekt a poté v pravém horním rohu na ikonu **Nastavení**

<div class="container">
  <div class="row">
    <Image img={require('./stem-application.png')}/>
  </div>
</div>

* Zobrazí se vám **Auth Token**, který budete potřebovat, aby projekt fungoval s prostředím Playground
* V aplikaci Playground přejděte na kartu Functions a importujte tento flow

```json
[{"id":"73063e5f.b2922","type":"mqtt in","z":"b3853131.935c8","name":"","topic":"node/co2-monitor:0/thermometer/0:0/temperature","qos":"2","broker":"e649966c.8c2af8","x":340,"y":480,"wires":[["8f85e87c.769d18","3f7fcbee.7f91e4"]]},{"id":"4166a3d0.b2c9ac","type":"mqtt in","z":"b3853131.935c8","name":"","topic":"node/co2-monitor:0/hygrometer/0:4/relative-humidity","qos":"2","broker":"e649966c.8c2af8","x":350,"y":580,"wires":[["28dadeae.792542","4eab5e08.5ca1d"]]},{"id":"4008a8e5.904ff8","type":"mqtt in","z":"b3853131.935c8","name":"","topic":"node/co2-monitor:0/co2-meter/-/concentration","qos":"2","broker":"e649966c.8c2af8","x":330,"y":780,"wires":[["bba1323a.410d6","4470ac6c.039244"]]},{"id":"8f85e87c.769d18","type":"ui_gauge","z":"b3853131.935c8","name":"","group":"57ff470b.93fdf8","order":0,"width":0,"height":0,"gtype":"gage","title":"Temperature","label":"°C","format":"{{value}}","min":0,"max":"40","colors":["#00b500","#e6e600","#ca3838"],"seg1":"","seg2":"","x":750,"y":480,"wires":[]},{"id":"28dadeae.792542","type":"ui_gauge","z":"b3853131.935c8","name":"","group":"57ff470b.93fdf8","order":0,"width":0,"height":0,"gtype":"gage","title":"Humidity","label":"%","format":"{{value}}","min":0,"max":"100","colors":["#97faff","#00b8c1","#005bca"],"seg1":"","seg2":"","x":740,"y":580,"wires":[]},{"id":"bba1323a.410d6","type":"ui_gauge","z":"b3853131.935c8","name":"","group":"57ff470b.93fdf8","order":0,"width":0,"height":0,"gtype":"gage","title":"CÖ2 Concentration","label":"ppm","format":"{{value}}","min":0,"max":"10000","colors":["#ffffff","#c0c0c0","#220909"],"seg1":"","seg2":"","x":770,"y":780,"wires":[]},{"id":"3f7fcbee.7f91e4","type":"blynk-ws-out-write","z":"b3853131.935c8","name":"","pin":0,"pinmode":0,"client":"69359c27.0b0d54","x":760,"y":520,"wires":[]},{"id":"4eab5e08.5ca1d","type":"blynk-ws-out-write","z":"b3853131.935c8","name":"","pin":"1","pinmode":0,"client":"69359c27.0b0d54","x":760,"y":620,"wires":[]},{"id":"4470ac6c.039244","type":"blynk-ws-out-write","z":"b3853131.935c8","name":"","pin":"3","pinmode":0,"client":"69359c27.0b0d54","x":760,"y":820,"wires":[]},{"id":"b481c17c.ffeb1","type":"blynk-ws-out-write","z":"b3853131.935c8","name":"","pin":"2","pinmode":0,"client":"69359c27.0b0d54","x":760,"y":720,"wires":[]},{"id":"ec9b8fbd.bd1ec","type":"mqtt in","z":"b3853131.935c8","name":"","topic":"node/co2-monitor:0/voc-sensor/0:0/tvoc","qos":"2","datatype":"auto","broker":"e649966c.8c2af8","x":310,"y":680,"wires":[["b481c17c.ffeb1","a38ea362.79de7"]]},{"id":"a38ea362.79de7","type":"ui_gauge","z":"b3853131.935c8","name":"","group":"2fc45a9a.bbfd66","order":0,"width":0,"height":0,"gtype":"gage","title":"TVOC","label":"units","format":"{{value}} ppb","min":0,"max":"5500","colors":["#00b500","#e6e600","#ca3838"],"seg1":"","seg2":"","x":730,"y":680,"wires":[]},{"id":"e649966c.8c2af8","type":"mqtt-broker","z":"","name":"","broker":"127.0.0.1","port":"1883","clientid":"","usetls":false,"compatmode":true,"keepalive":"60","cleansession":true,"birthTopic":"","birthQos":"0","birthPayload":"","closeTopic":"","closeQos":"0","closePayload":"","willTopic":"","willQos":"0","willPayload":""},{"id":"57ff470b.93fdf8","type":"ui_group","z":"","name":"Default","tab":"11207769.c31889","disp":true,"width":"6","collapse":false},{"id":"69359c27.0b0d54","type":"blynk-ws-client","z":"","name":"CO2 Monitor","path":"ws://blynk-cloud.com/websockets","key":"","dbg_all":false,"dbg_read":false,"dbg_write":false,"dbg_notify":false,"dbg_mail":false,"dbg_prop":false,"dbg_sync":false,"dbg_bridge":false,"dbg_low":false,"dbg_pins":"","multi_cmd":false,"proxy_type":"no","proxy_url":"","enabled":true},{"id":"2fc45a9a.bbfd66","type":"ui_group","z":"","name":"Default","tab":"54d3d6be.bc2ca8","disp":true,"width":"6","collapse":false},{"id":"11207769.c31889","type":"ui_tab","z":"","name":"Home","icon":"dashboard"},{"id":"54d3d6be.bc2ca8","type":"ui_tab","z":"","name":"Home","icon":"dashboard"}]
```
* Po úspěšném importu budete muset aktualizovat zelené uzly Blynk – zobrazí se jako „Disconnected“ (odpojeno)

<div class="container">
    <div class="row">
        <Image img={require('./stem-diagram.png')}/>
    </div>
</div>

* Otevřete libovolný z těchto uzlů
* Na konci řádku **Connection** klikněte na malou tužku
* Zobrazí se nové okno
* Vložte **Auth Token**, který máte ve své mobilní aplikaci, do pole **Auth Token**
* Klikněte na tlačítko **Update** a poté na **Done**
* Stiskněte tlačítko **Deploy**, abyste změny potvrdili
* Během chvilky byste měli vidět naměřená data v připraveném **dashboardu v Blynku**
