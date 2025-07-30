---
slug: thief-trap
title: Past na Zloděje
---
## Úvod

Leze ti mladší brácha do pokoje? Jedeš na dovolenou a bojíš se, že ti někdo ukradne tvůj poklad? Nastav si alarm proti všem nenechavcům. 👮

V tomhle projektu se naučíš vytvořit **detektor cizí přítomnosti, který ti pošle upozornění na mobil**. 👁️

Pokud máš Starter Set, budeš k němu potřebovat ještě [**PIR Module**](https://www.hardwario.store/cz/p/pir-module). Kompletní výbavu najdeš v sadě [Motion Set](https://www.hardwario.store/cz/p/motion-set).


## Stáhni si nový firmware

1. Pokud to ještě nemáš, Motion Set si sestav.
2. Na Core Module nahraj speciální firmware, a to bcf-radio-burglar-alarm (najdeš ho mezi ostatním firmwarem v Playgroundu). Díky tomuhle firmwaru krabička odhalí zloděje. 👂

![sestavení motion detektor Setu](https://res.cloudinary.com/lukasfabik/image/upload/v1573157109/projects/pohlidej-si-kdyz-nejsi-doma-jestli-ti-nekdo-neleze-do-pokoje/image20.png)

**Náš tip**: Nevíš, jak si firmware stáhnout nebo co to je? [Zjistíš to tady](/cs/academy/jak-nahrat-firmware/).

3. Core Module spáruj s USB Donglem. Hned po spárování uvidíš, že tvůj Core Module změnil Alias na **Burglar alarm**.

![burglar alarm](https://res.cloudinary.com/lukasfabik/image/upload/v1573157099/projects/pohlidej-si-kdyz-nejsi-doma-jestli-ti-nekdo-neleze-do-pokoje/image10.png)

❓ **Věděl jsi**? Burglar znamená v angličtině zloděj. Burglarem byl třeba Bilbo Pytlík z Hobita, když kradl v dračí pokladnici. 🐉

## Rozjeď appku na mobilu

1. **Pokračuj na svém mobilu**. Krabička se propojí se smartphonem díky **appce Blynk**. 📱 [Zjisti, jak na Blynk](/cs/academy/jak-pripojit-blynk/).
2. Z nabídky zvol **Styled button** (vyšperkované tlačítko). 🚨 Tlačítko se ti umístí na plochu projektu a bude sloužit k vypínání a zapínání detektoru pohybu.

![spuštění aplikace](https://res.cloudinary.com/lukasfabik/image/upload/v1573157119/projects/pohlidej-si-kdyz-nejsi-doma-jestli-ti-nekdo-neleze-do-pokoje/image22.png)

3. Když na tlačítko ťukneš, dostaneš se do nastavení.

V horním řádku si projekt **pojmenuj**.

Hned pod tím zvolíš **PIN**. Klikni na něj. Vyber si **virtuální** a **číslo zvol dle libosti**. Ale zapamatuj si ho, budeš ho pak zadávat na počítači. PIN ulož a pokračuj v nastavování tlačítka.

Dál už je to na tvém uměleckém cítění. ️🎨 Můžeš si navolit barvu tlačítka, když je vypnuté a zapnuté, jeho tvar a další nezbytnosti.

Až všechno budeš mít, **vrať se na plochu** skrz šipku vlevo nahoře.

![virtuální tlačítko](https://res.cloudinary.com/lukasfabik/image/upload/v1573157108/projects/pohlidej-si-kdyz-nejsi-doma-jestli-ti-nekdo-neleze-do-pokoje/image18.png)

4. Klepni na plochu, abys přidal další prvek na plochu. Bude to **notifikace**.

![notifikace](https://res.cloudinary.com/lukasfabik/image/upload/v1573157088/projects/pohlidej-si-kdyz-nejsi-doma-jestli-ti-nekdo-neleze-do-pokoje/image4.png)

5. Celá tvoje plocha teď vypadá takhle. Spusť projekt tlačítkem **Play** vpravo nahoře. ▶️

![spuštění projektu](https://res.cloudinary.com/lukasfabik/image/upload/v1573157116/projects/pohlidej-si-kdyz-nejsi-doma-jestli-ti-nekdo-neleze-do-pokoje/image25.png)

6. **Poťukej na tlačítko**, mělo by se přepínat z módu ON (zapnuto) do módu OFF (vypnuto).

## Nastav si v Node Red přepínací tlačítko

1. V Playgroundu klikni na **záložku Functions**, kde je programovací plocha [Node-RED](https://docs.hardwario.com/tower/desktop-programming/node-red-programming/). 🤖
2. Začni programovat a rovnou do toho skoč po hlavě. První node bude totiž obsahovat malý javascriptík. Na plochu ho vložíš pomocí nodu **Function** ze stejnojmenné sekce.

Dvakrát na něj klikni a do pole Label napiš název nodu: Int parser.

Do pole Function pak zkopíruj tento jednoduchý javascript:

```
msg.payload = parseInt(msg.payload);
return msg;
```

![programovací plocha NODE-RED](https://res.cloudinary.com/lukasfabik/image/upload/v1573157099/projects/pohlidej-si-kdyz-nejsi-doma-jestli-ti-nekdo-neleze-do-pokoje/image12.png)

3. Teď přidej node, se kterým budeš moct sledování zlodějů zapínat a vypínat. To aby mobil nezačal plašit, až budeš doma ty. 🔕
   Uděláš to pomocí **nodu Switch** ze sekce Dashboard.

![](https://res.cloudinary.com/lukasfabik/image/upload/v1573157095/projects/pohlidej-si-kdyz-nejsi-doma-jestli-ti-nekdo-neleze-do-pokoje/image8.png)

4. Na node dvakrát klikni a změň jeho **Label** na Spouštěč. Potom uprav **On Payload** a **Off Payload** na 1 a 0 (viz obrázek).

Potvrď tlačítkem **Done**.

![spouštěč](https://res.cloudinary.com/lukasfabik/image/upload/v1573157095/projects/pohlidej-si-kdyz-nejsi-doma-jestli-ti-nekdo-neleze-do-pokoje/image3.png)

5. Za tenhle node postav **node** **Write** ze sekce Blynk ws.

![node Write z Blynk](https://res.cloudinary.com/lukasfabik/image/upload/v1573157114/projects/pohlidej-si-kdyz-nejsi-doma-jestli-ti-nekdo-neleze-do-pokoje/image15.png)

6. Dvakrát na něj klikni. Tady vyplň **PIN**, který jsi zadával v projektu na Blynku. Stačí napsat číslo bez počátečního V.

![programování](https://res.cloudinary.com/lukasfabik/image/upload/v1573157096/projects/pohlidej-si-kdyz-nejsi-doma-jestli-ti-nekdo-neleze-do-pokoje/image5.png)

Pak klikni na malou tužtičku. ✏

![Node-Red](https://res.cloudinary.com/lukasfabik/image/upload/v1573157090/projects/pohlidej-si-kdyz-nejsi-doma-jestli-ti-nekdo-neleze-do-pokoje/image1.png)

7. Otevře se ti nastavení propojení. Do pole **URL** vyplň webovou adresu z políčka níž. Do pole **Token** zkopíruj kód, který ti přišel z Blynku na e-mail.

A na závěr si v políčku **Label** projekt ještě pro lepší orientaci pojmenuj.

Všechno potvrď a vrátíš se na programovací plochu.

![nastavení propojení](https://res.cloudinary.com/lukasfabik/image/upload/v1573157110/projects/pohlidej-si-kdyz-nejsi-doma-jestli-ti-nekdo-neleze-do-pokoje/image17.png)

8. O kousek níž přidej node s podobným názvem, ale jinou funkcí. Je to **node Write Event** taky ze sekce Blynk. V něm nastav znovu stejný **PIN**. Na malou tužtičku už klikat nemusíš, nody jsou propojené a všechno se nastavilo samo.

![node Write Event](https://res.cloudinary.com/lukasfabik/image/upload/v1573157114/projects/pohlidej-si-kdyz-nejsi-doma-jestli-ti-nekdo-neleze-do-pokoje/image23.png)

9. Za tento node postav další javascriptí **node Function**. Díky němu se v projektu promítne, jestli je zrovna tlačítko v Blynku zapnuté nebo vypnuté.

V řádku **Name** vyplň Stav nastavení upozornění a do pole **Function** zkopíruj tento kódík:

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

![nastavení upozornění](https://res.cloudinary.com/lukasfabik/image/upload/v1573157103/projects/pohlidej-si-kdyz-nejsi-doma-jestli-ti-nekdo-neleze-do-pokoje/image11.png)

10. Pak celý tenhle flow pospojuj. Ještě ale neodcházej, čeká tě nastavení dvou dalších miniflow.

![nastavení miniflow](https://res.cloudinary.com/lukasfabik/image/upload/v1573157120/projects/pohlidej-si-kdyz-nejsi-doma-jestli-ti-nekdo-neleze-do-pokoje/image21.png)

## Naprogramuj hlavní senzor

1. Celý projekt funguje na principu pohybového čidla – když ti do pokoje vnikne zloděj, krabička si ho všimne a alarm aktivuje.

A díky měření okolní teploty může alarm měnit svůj stav tak, aby se udržel v low power módu – prostě aby moc neždímal baterky v krabičce. 🔋

V dalším flow tedy začni starým dobrým **nodem MQTT** ze sekce Input. V něm nastav jako **Topic** měření teploty:

```
node/burglar-alarm:0/thermometer/0:1/temperature
```

![měření teploty](https://res.cloudinary.com/lukasfabik/image/upload/v1573157098/projects/pohlidej-si-kdyz-nejsi-doma-jestli-ti-nekdo-neleze-do-pokoje/image7.png)

2. Hned za něj postav další node Function. Do pole Name napiš Stav alarmu a kód použij tento:


```
msg.payload = flow.get("alarmOn");
return msg;
```

Díky tomuhle node bude senzor aktivní jenom v případě, že ho spustíš tlačítkem v Blynku nebo na počítači.

![stav alarmu](https://res.cloudinary.com/lukasfabik/image/upload/v1573157118/projects/pohlidej-si-kdyz-nejsi-doma-jestli-ti-nekdo-neleze-do-pokoje/image19.png)

3. A do třetice (všeho nejlepšího) hoď na plochu node MQTT ze sekce

**Output** (bacha na to ❗).

V něm nastav jako Topic _node/burglar-alarm:0/alarm/-/set/state_, přes který senzor pošle na alarm svůj stav. A pokud máš v Blynku nebo dashboardu zapnutý spínáč, alarm se aktivuje. 👮

![aktivace alarmu](https://res.cloudinary.com/lukasfabik/image/upload/v1573157095/projects/pohlidej-si-kdyz-nejsi-doma-jestli-ti-nekdo-neleze-do-pokoje/image2.png)

4. Pak tyhle tři krasavce **pospojuj**.

![pospojování nodů](https://res.cloudinary.com/lukasfabik/image/upload/v1573157111/projects/pohlidej-si-kdyz-nejsi-doma-jestli-ti-nekdo-neleze-do-pokoje/image14.png)

## Nastav si svoji zprávu

1. V posledním miniflow si nastavíš zprávu, která ti přijde na mobil, když alarm někoho zachytí. 📩

Nejdřív si na plochu postav **MQTT node ze sekce Input**. V něm nastav jako **Topic** node/burglar-alarm:0/pir/-/event-count. Znamená to, že node se aktivuje, pokud bude aktivní a někdo kolem něj projde. Prostě vychytané pohybové čidlo.

![MQTT Node](https://res.cloudinary.com/lukasfabik/image/upload/v1573157123/projects/pohlidej-si-kdyz-nejsi-doma-jestli-ti-nekdo-neleze-do-pokoje/image26.png)

1. Za něj patří javascriptík, tedy **node Function**. Jako **Name** nastav _Zpráva_ a kód máš tady:


```
msg.payload = "Nekdo je ve tvem pokoji"
return msg;
```

**Náš tip**: Hlášku v kódu si klidně přepiš, ale nezapomeň na to, že Blynk nepřečte háčky ani čárky. Holt cizinec no. 🤷

![zpráva](https://res.cloudinary.com/lukasfabik/image/upload/v1573157116/projects/pohlidej-si-kdyz-nejsi-doma-jestli-ti-nekdo-neleze-do-pokoje/image16.png)

1. Nakonec sem hoď **node Notify** ze sekce Blynk ws, který komunikuje s upozorněním v mobilní appce. V něm už najdeš Token vyplněný, tak jen zkontroluj, jestli odpovídá tomu, který ti Blynk poslal na e-mail.

![node Notify](https://res.cloudinary.com/lukasfabik/image/upload/v1573157090/projects/pohlidej-si-kdyz-nejsi-doma-jestli-ti-nekdo-neleze-do-pokoje/image6.png)

4. Tyhle mazlíky **spoj**. A konečně zmáčkni tlačítko **Deploy**.

![spojení nodů a deploy](https://res.cloudinary.com/lukasfabik/image/upload/v1573157122/projects/pohlidej-si-kdyz-nejsi-doma-jestli-ti-nekdo-neleze-do-pokoje/image24.png)

## A... akce!

1. Až budeš chtít alarm spustit, **nastav switch** na počítači (v záložce Dashboard) nebo na mobilu. Obě tlačítka spolupracují, proto stačí nastavit buď jedno, nebo druhé.

![nastav switch](https://res.cloudinary.com/lukasfabik/image/upload/v1573157102/projects/pohlidej-si-kdyz-nejsi-doma-jestli-ti-nekdo-neleze-do-pokoje/image13.png)

2. Postav svou krabičku ke dveřím. Až krabička zachytí pohyb, **vyšle ti do mobilu upozornění**.

![upozornění v mobilu](https://res.cloudinary.com/lukasfabik/image/upload/v1573157092/projects/pohlidej-si-kdyz-nejsi-doma-jestli-ti-nekdo-neleze-do-pokoje/image9.png)

Zlodějové, střezte se, zákon je tu! 😱
