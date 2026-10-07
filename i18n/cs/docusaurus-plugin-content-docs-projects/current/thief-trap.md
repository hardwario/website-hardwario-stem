---
slug: thief-trap
title: Past na zloděje
---
import Image from '@theme/IdealImage';

## Úvod

Leze vám mladší bratr do pokoje? Jedete na dovolenou a bojíte se, že vám někdo ukradne poklad? Nastavte si alarm proti všem nenechavcům. 👮

V tomto projektu se naučíte vytvořit **detektor cizí přítomnosti, který vám pošle upozornění na mobil**. 👁️

Pokud máte Start Set, budete k němu potřebovat ještě [**PIR Module**](https://www.hardwario.store/cz/p/pir-module). Kompletní výbavu najdete v sadě [Motion Set](https://www.hardwario.store/cz/p/motion-set).


## Stáhněte si nový firmware

1. Pokud jste to ještě neudělali, sestavte Motion Set.
2. Do modulu Core Module nahrajte speciální firmware bcf-radio-burglar-alarm (najdete ho mezi ostatním firmwarem v Playgroundu). Díky tomuto firmwaru krabička odhalí zloděje. 👂

![Sestavení sady Motion Set](./img/thief-trap/image20.png)

**Náš tip**: Nevíte, jak si firmware stáhnout nebo co to je? [Najdete to tady](https://docs.hardwario.com/tower/firmware-development/firmware-quick-start/).

3. Spárujte modul Core Module s USB donglem. Hned po spárování uvidíte, že se alias modulu Core Module změnil na **Burglar alarm**.

<div class="container">
  <div class="row">
    <Image img={require('./img/thief-trap/thief-trap-2.webp')} alt="Záložka Devices v Playgroundu: řádek spárovaného zařízení se zvýrazněným aliasem burglar-alarm:0"/>
  </div>
</div>

❓ **Věděli jste?** Anglické slovo burglar znamená lupič. Takovým burglarem byl třeba Bilbo Pytlík z Hobita, když kradl v dračí pokladnici. 🐉

## Připravte Blynk IoT na notifikace

Krabička se s vaším telefonem propojí přes aplikaci **Blynk IoT**, kam vám alarm přijde jako push notifikace. 📱

1. Pokud ještě účet nemáte, vytvořte si ho v [Blynk IoT](https://docs.hardwario.com/tower/platform-integrations/blynk-app/). V [tomto návodu](https://docs.hardwario.com/tower/platform-integrations/blynk-app/) zjistíte, jak si nastavit účet, šablonu zařízení (device template) a zařízení (device). Budete potřebovat všechny tři. Klidně můžete použít i šablonu z některého z předchozích projektů.

2. V Blynk IoT se push notifikace nepřidává na plochu telefonu jako widget, ale posílá se jako událost (**Event**) definovaná v šabloně. V detailu šablony otevřete záložku **Events** a přidejte novou událost (pojmenujte ji například `thief` a zadejte zprávu, kterou chcete dostávat, třeba „Nekdo je v pokoji“). Pak pro tuto událost zapněte **Notifications**, aby vám ji Blynk doručil na mobil. Nastavením šablony vás provede [návod](https://docs.hardwario.com/tower/platform-integrations/blynk-app/).

3. Alarm budete chtít zapínat a vypínat i z mobilu, aby nepípal, když jste doma. 🔕 Do stejné šablony přidejte **Datastream** (virtuální pin) a v aplikaci k němu přiřaďte widget **switch** (přepínač). Přepínač posílá `1` (zapnuto) nebo `0` (vypnuto) a tuto hodnotu za chvíli načtete v Node-RED.

4. Stáhněte si do mobilu aplikaci **Blynk IoT** z [App Store](https://apps.apple.com/us/app/blynk-iot/id1559317868) nebo [Google Play](https://play.google.com/store/apps/details?id=cloud.blynk) a přihlaste se stejným účtem. Zkontrolujte, že má aplikace povolené notifikace, aby vám alarm mohl naskočit. 🚨

## Načtěte v Node-RED přepínač alarmu

1. V Playgroundu klikněte na **záložku Functions**, kde je programovací plocha [Node-RED](https://docs.hardwario.com/tower/desktop-programming/node-red-programming/). 🤖
2. Pusťte se do programování rovnou po hlavě. První uzel totiž bude obsahovat malý kousek JavaScriptu. Na plochu ho vložíte jako uzel **Function** ze stejnojmenné sekce.

Dvakrát na něj klikněte a do pole **Name** napište název uzlu: Int parser.

Do pole Function pak zkopírujte tento jednoduchý kód:

```
msg.payload = parseInt(msg.payload);
return msg;
```


<div class="container">
  <div class="row">
    <Image img={require('./img/thief-trap/thief-trap-3.webp')} alt="Plocha Node-RED s uzlem Function"/>
  </div>
</div>

3. Teď přidejte uzel, kterým budete hlídání zapínat a vypínat, aby mobil nespouštěl poplach, když jste doma vy. 🔕
   Použijte k tomu **uzel Switch** ze sekce Dashboard.


<div class="container">
  <div class="row">
    <Image img={require('./img/thief-trap/thief-trap-4.webp')} alt="Plocha Node-RED: widget Switch ze sekce Dashboard vedle uzlu Function"/>
  </div>
</div>
4. Na uzel dvakrát klikněte a změňte jeho **Label** na Spouštěč. Potom nastavte **On Payload** a **Off Payload** na 1 a 0 (viz obrázek).

Potvrďte tlačítkem **Done**.


<div class="container">
  <div class="row">
    <Image img={require('./img/thief-trap/thief-trap-5.webp')} alt="Dialog Edit switch node: zvýrazněná pole Label, On Payload 1 a Off Payload 0"/>
  </div>
</div>

5. Alarm budete zapínat i z mobilu. Přidejte uzel ze sekce **Blynk IoT**, který čte datastream (uzel **read / input**), a nastavte v něm virtuální pin přepínače alarmu, který jste vytvořili v šabloně.

6. Dvakrát na něj klikněte, aby se otevřel. Vpravo uvidíte **malou tužku**. Klikněte na ni a otevře se nové okno. Do pole **Url** napište `blynk.cloud` a do polí **Auth Token** a **Template ID** zkopírujte hodnoty z detailu zařízení ve webové aplikaci Blynk IoT na počítači. Potvrďte tlačítkem **Add**. (Stejné propojení použijete pro každý uzel Blynk IoT v tomto projektu.)

7. Za uzel Switch z Dashboardu i za uzel Blynk IoT read umístěte **uzel Function** s JavaScriptem. Díky němu si projekt pamatuje, jestli je alarm zrovna zapnutý, ať už ho zapnete z počítače (Dashboard), nebo z mobilu (Blynk IoT).

V řádku **Name** vyplňte Stav nastavení upozornění a do pole **Function** zkopírujte tento kód:

```
if(msg.payload == "1")
{
 flow.set("alarmOn", 1);
}
else
{
 flow.set("alarmOn", 0);
}
return msg;
```

<div class="container">
  <div class="row">
    <Image img={require('./img/thief-trap/thief-trap-10.webp')} alt="Flow v Node-RED se zvýrazněným uzlem Function pro stav nastavení upozornění za uzly switch a Blynk read"/>
  </div>
</div>

8. Pak celý flow propojte. Ještě ale neodcházejte, čekají vás další dva miniflow.


## Naprogramujte hlavní senzor

1. Celý projekt funguje na principu pohybového čidla: když vám do pokoje vnikne zloděj, krabička si ho všimne a spustí alarm.

Díky měření okolní teploty může alarm přepínat svůj stav tak, aby zůstal v úsporném režimu a zbytečně nevybíjel baterie v krabičce. 🔋

V dalším flow tedy začněte starým dobrým **uzlem MQTT** ze sekce Input. Jako **Topic** v něm nastavte měření teploty:

```
node/burglar-alarm:0/thermometer/0:1/temperature
```

<div class="container">
  <div class="row">
    <Image img={require('./img/thief-trap/thief-trap-11.webp')} alt="Flow v Node-RED se zvýrazněným uzlem MQTT pro teploměr burglar-alarm"/>
  </div>
</div>

2. Hned za něj umístěte další uzel Function. Do pole Name napište Stav alarmu a vložte tento kód:


```
msg.payload = flow.get("alarmOn");
return msg;
```

Díky tomuto uzlu bude senzor aktivní jen tehdy, když ho zapnete přepínačem v Blynku nebo na počítači.

<div class="container">
  <div class="row">
    <Image img={require('./img/thief-trap/thief-trap-12.webp')} alt="Flow v Node-RED se zvýrazněným uzlem Function pro stav alarmu vedle uzlu MQTT pro teplotu"/>
  </div>
</div>

3. A do třetice všeho dobrého umístěte na plochu uzel MQTT, tentokrát ze sekce **Output** (pozor na to ❗).

V něm nastavte jako Topic _node/burglar-alarm:0/alarm/-/set/state_, přes který senzor pošle alarmu svůj stav. Pokud máte v Blynku nebo na Dashboardu zapnutý přepínač, alarm se aktivuje. 👮
4. Pak tyhle tři krasavce **propojte**.

<div class="container">
  <div class="row">
    <Image img={require('./img/thief-trap/thief-trap-13.webp')} alt="Flow v Node-RED: teplota, stav alarmu a zvýrazněný výstupní uzel MQTT s topicem pro nastavení stavu alarmu"/>
  </div>
</div>





## Nastavte si zprávu

1. V posledním miniflow si nastavíte zprávu, která vám přijde na mobil, když alarm někoho zachytí. 📩

Nejdřív na plochu umístěte **uzel MQTT ze sekce Input** a jako **Topic** v něm nastavte node/burglar-alarm:0/pir/-/event-count. Uzel se tak aktivuje, když je alarm zapnutý a někdo kolem krabičky projde. Prostě vychytané pohybové čidlo.

<div class="container">
  <div class="row">
    <Image img={require('./img/thief-trap/thief-trap-14.webp')} alt="Flow v Node-RED se zvýrazněným vstupním uzlem MQTT pro event-count senzoru PIR"/>
  </div>
</div>

2. Za něj patří kousek JavaScriptu, tedy **uzel Function**. Jako **Name** nastavte _Zpráva_ a použijte tento kód:


```
msg.payload = "Nekdo je ve vasem pokoji"
return msg;
```

**Náš tip**: Hlášku v kódu si klidně přepište, jen nezapomeňte, že Blynk nepřečte háčky ani čárky. Holt cizinec. 🤷


<div class="container">
  <div class="row">
    <Image img={require('./img/thief-trap/thief-trap-15.webp')} alt="Flow v Node-RED se zvýrazněným uzlem Function pro zprávu vedle uzlu event-count senzoru PIR"/>
  </div>
</div>

3. Nakonec sem umístěte uzel ze sekce **Blynk IoT**, který umí spustit vaši událost (uzel **log event**). Použije propojení, které jste nastavili dřív (Url `blynk.cloud`, Auth Token + Template ID), takže na tužku už klikat nemusíte. Dvakrát na něj klikněte a nastavte ho tak, aby spouštěl událost (**Event**) vytvořenou v šabloně, v našem příkladu s kódem `thief`. Právě díky tomu se zachycený pohyb promění v push notifikaci na vašem mobilu.

4. **Propojte** uzly tak, aby se z pohybu ➡️ stala vaše zpráva, ➡️ která spustí událost v Blynk IoT, ➡️ a ta vám přijde na mobil. 👾 Nakonec stiskněte červené tlačítko **Deploy**.

## A… akce!

1. Až budete chtít alarm zapnout, **zapněte přepínač** na počítači (na záložce Dashboard) nebo v mobilu. Oba přepínače spolupracují, takže stačí použít jeden z nich.


<div class="container">
  <div class="row">
    <Image img={require('./img/thief-trap/thief-trap-18.webp')} alt="Záložka Dashboard v Playgroundu se zapnutým přepínačem alarmu"/>
  </div>
</div>

2. Postavte krabičku ke dveřím. Jakmile zachytí pohyb, **pošle vám do mobilu upozornění**.

![upozornění v mobilu](./img/thief-trap/image9.png)

Zlodějové, střezte se, zákon je tu! 😱
