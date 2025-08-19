---
slug: safe-drawer
title: Tajný šuplík
---

## Úvod

Máš v šuplíku deníček, básničky nebo tajný vládní dokument? Pokud je to něco, co by nikdo neměl vidět, zabezpeč to. 🔒 Vytvoř si ze Start Sady IoT hlídače šuplíku, který ti pošle upozornění na mobil. 📲

![Get mobile notification when someone open your drawer](https://res.cloudinary.com/lukasfabik/image/upload/v1566364960/projects/safe-drawer/image8.png)

V tomhle projektu se naučíš vytvořit **detektor otevírání šuplíku, který ti pošle upozornění na mobil**. 👈

Budeš potřebovat jen **krabičku s tlačítkem** a **USB dongle**. Proto si vystačíš se základní HARDWARIO sadou – [**Starter Kitem**](https://shop.hardwario.com/starter-kit/).


## Stáhni si nový firmware

1. Na Core Module nahraj speciální firmware, a to **bcf-radio-x-axis-detector** (najdeš ho mezi ostatním firmwarem v Playgroundu). Díky tomuhle firmwaru bude krabička citlivější na pohyb. 👌

**Náš tip:** Nevíš, jak si firmware stáhnout nebo co to je? [Zjistíš to tady](https://docs.hardwario.com/tower/firmware-development/hardwario-extension-tutorial/#flash-firmware)

2. [Core Module spáruj s USB Donglem](https://docs.hardwario.com/tower/platform-integrations/homekit-and-siri/#pair-the-device) Hned po spárování uvidíš, že tvůj Core Module změnil Alias na **x-axis-detector**.

![HARDWARIO Playground - devices](https://res.cloudinary.com/lukasfabik/image/upload/v1566364970/projects/safe-drawer/image26.png)

## Rozjeď appku na mobilu

1. **Pokračuj na svém mobilu**. Krabička se propojí se smartphonem díky **appce Blynk**. 📱 [**Zjisti, jak na Blynk**](https://docs.hardwario.com/tower/platform-integrations/blynk-app)

2. Z nabídky zvol **Styled button** (vyšperkované tlačítko). 🚨 Tlačítko se ti umístí na plochu projektu.

![Add style button to blynk app](https://res.cloudinary.com/lukasfabik/image/upload/v1566364970/projects/safe-drawer/image20.png)

3. Když na tlačítko klikneš, dostaneš se do nastavení. Teď dávej bacha.
V horním řádku si detektor **pojmenuj**.

![Settings of styled button in Blynk App](https://res.cloudinary.com/lukasfabik/image/upload/v1566364966/projects/safe-drawer/image12.png)

Hned pod tím zvolíš **PIN**. Klikni na něj. Vyber si **virtuální** a **číslo zvol dle libosti**. Ale zapamatuj si ho, budeš ho pak zadávat na počítači. PIN ulož a pokračuj v nastavování tlačítka.

![Styled button in Blynk App](https://res.cloudinary.com/lukasfabik/image/upload/v1566364978/projects/safe-drawer/image25.png)
![Styled button in Blynk App](https://res.cloudinary.com/lukasfabik/image/upload/v1566364965/projects/safe-drawer/image14.png)

Přepni tlačítko z módu push na **switch**, abys mohl detektor pohodlně spouštět a vypínat.

![Settings of styled button in Blynk App](https://res.cloudinary.com/lukasfabik/image/upload/v1566364970/projects/safe-drawer/image18.png)

A dál už jsou jenom takové ty **dyzajnové blbůstky**. 💄 Můžeš si navolit barvu tlačítka, když je vypnuté a zapnuté, jeho tvar a další nezbytnosti.

![Settings of styled button in Blynk App](https://res.cloudinary.com/lukasfabik/image/upload/v1566364966/projects/safe-drawer/image13.png)

Až všechno budeš mít, **vrať se na plochu** skrz šipku vlevo nahoře.

4. Klepni na plochu, abys přidal další prvek na plochu. Bude to notifikace.

![Add Blynk Notification node](https://res.cloudinary.com/lukasfabik/image/upload/v1566364964/projects/safe-drawer/image1.png)

5. Celá tvoje plocha teď vypadá takhle.

![Your Blynk App](https://res.cloudinary.com/lukasfabik/image/upload/v1566364961/projects/safe-drawer/image7.png)

6. Poťukej na tlačítko, mělo by se přepínat z módu ON (zapnuto) do módu OFF (vypnuto).

![Your Blynk App](https://res.cloudinary.com/lukasfabik/image/upload/v1566364960/projects/safe-drawer/image4.png)
![Your Blynk App](https://res.cloudinary.com/lukasfabik/image/upload/v1566364961/projects/safe-drawer/image7.png)

## Nastav v Node-RED zprávu

1. V Playgroundu klikni na **záložku Functions**, kde je programovací plocha [Node-RED](https://docs.hardwario.com/tower/desktop-programming/node-red-programming/).

2. Začni jako vždycky: na plochu nejdřív umísti **MQTT node** ze sekce Input.

Dvakrát na něj klikni a do řádku zkopíruj **Topic**, se kterým krabička odhalí změnu pohybu:

```
node/x-axis-detector:0/accelerometer/-/event-count
```

![Set MQTT input in HARDWARIO Playground](https://res.cloudinary.com/lukasfabik/image/upload/v1566364963/projects/safe-drawer/image6.png)

3. Vedle tohohle nodu umísti **node Switch** ze sekce **Function**. Díky tomuhle nodu můžeš detekci vypnout, když jsi doma a otvíráš šuplík sám.

![Add Switch node to Playground](https://res.cloudinary.com/lukasfabik/image/upload/v1566364972/projects/safe-drawer/image16.png)

4. Uvnitř nodu změň řádek Property na **flow. active**. Do řádku níž číslici **1**. S touhle jedničkou se notifikace pošle, když je tlačítko zapnuté, jinak se zahodí. Mrkej na obrázek.

![Set Switch node in Node-RED Playground](https://res.cloudinary.com/lukasfabik/image/upload/v1566364968/projects/safe-drawer/image19.png)

5. Za tohle postav ještě **node Change** ze sekce Function.

![Add Switch node in Node-RED Playground](https://res.cloudinary.com/lukasfabik/image/upload/v1566364962/projects/safe-drawer/image2.png)

6. V něm si nastav **zprávu, která se ti pošle do mobilu**. Dávej bacha, čárky a háčky Blynk neumí. 🤷

![Set the message for mobile app](https://res.cloudinary.com/lukasfabik/image/upload/v1566364965/projects/safe-drawer/image10.png)

7. Na konec tohohle potravního řetězce umísti **node Notify** ze sekce Blynk ws.

![Send mobile notification with this node](https://res.cloudinary.com/lukasfabik/image/upload/v1566364969/projects/safe-drawer/image15.png)

8. Když na něj dvakrát klikneš, otevře se ti nastavení. Tady klepni na **malou tužtičku**. Dostaneš se do ještě hlubšího nastavení.

![Blynk App Settings](https://res.cloudinary.com/lukasfabik/image/upload/v1566364971/projects/safe-drawer/image23.png)

9. Zajímat tě budou první dva řádky. **URL** zkopíruj z odkazu níž a **token** zkopči z e-mailu, který se ti poslal, když jsi vytvořil projekt v Blynku.

![Blynk App connection with Token and URL](https://res.cloudinary.com/lukasfabik/image/upload/v1566364968/projects/safe-drawer/image17.png)

**Náš tip:** V řádku Name projekt pojmenuj. V dalších nodech ho pak jednoduše rozeznáš.

![Blynk App settings in Node-RED](https://res.cloudinary.com/lukasfabik/image/upload/v1566364971/projects/safe-drawer/image22.png)

10. Teď tenhle řetězec **pospojuj**. A jdeme dál.

![Connect flow in Node-RED](https://res.cloudinary.com/lukasfabik/image/upload/v1566364963/projects/safe-drawer/image11.png)

## Nastav v Node-RED detektor pohybu

1. Načni další řetězec. Polož na plochu **node Write event** ze sekce Blynk WS. Ten ovládá tlačítko.

![Send an event to Blynk App](https://res.cloudinary.com/lukasfabik/image/upload/v1566364963/projects/safe-drawer/image5.png)

2. Když na něj dvakrát klikneš, do řádku **Virtual Pin** vyplň číslo, které jsi zadával jako PIN na Blynku (bez písmene V).

![Set Virtual PIN in Blink node](https://res.cloudinary.com/lukasfabik/image/upload/v1566364976/projects/safe-drawer/image21.png)

Na řádku **Connection** pak vyber projekt, který jsi pojmenoval u nodu Notify.

3. A poslední node do party. Polož na plochu **node Change** ze sekce Function.

![Add change node to flow in Node-RED](https://res.cloudinary.com/lukasfabik/image/upload/v1566364962/projects/safe-drawer/image3.png)

4. Node nastavíš tak, aby reagoval na vypnutí a zapnutí tlačítka na Blynku. Dvojklikem ho otevři a nastav do políček Rules postupně **flow. active** a **msg. payload** (mrkej na obrázek).

![Settings of change node in flow of Node-RED](https://res.cloudinary.com/lukasfabik/image/upload/v1566364966/projects/safe-drawer/image9.png)

5. Teď tyhle dva hezouny **spoj**. Nezapomeň taky kliknout na tlačítko **Deploy** vpravo nahoře, aby se všechno zprovoznilo.

![Deploy your flow in Node-RED | HARDWARIO Playground](https://res.cloudinary.com/lukasfabik/image/upload/v1566364975/projects/safe-drawer/image24.png)

## Spusť pastičku

1. **Krabičku polož do šuplíku** naležato.

2. Všechno ostatní už ovládej z mobilu. 📱 Projekt v Blynku **zapni** (klikni na tlačítko, aby se dostalo do pozice ON).

![Blynk Mobile App with Button](https://res.cloudinary.com/lukasfabik/image/upload/v1566364960/projects/safe-drawer/image4.png)
![Blynk Mobile App with Button](https://res.cloudinary.com/lukasfabik/image/upload/v1566364961/projects/safe-drawer/image7.png)

3. Celý flow v Blynku spusť skrze **tlačítko Play** vpravo nahoře. ▶️

4. A čekej, až se myška chytí. 🥁 Mezitím **naplánuj, co s nenechavým neřádem uděláš**.️ Doporučujeme nechat ho týden dělat domácí práce za tebe. Však si to zaslouží.


![Get mobile notification when someone open your drawer](https://res.cloudinary.com/lukasfabik/image/upload/v1566364960/projects/safe-drawer/image8.png)
