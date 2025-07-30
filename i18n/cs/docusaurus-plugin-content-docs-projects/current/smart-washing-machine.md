---
slug: smart-washing-machine
title: Chytrá pračka
---

## Úvod

Zvedni rodinné pračce IQ. 🤖 Naprogramuj pomocí krabičky IoT upozornění, díky kterému se tví rodiče dozvědí, že várka doprala.

V tomhle projektu se naučíš **nastavit krabičku tak, že pozná, až pračka dopere**, a pošle o tom **upozornění na mobil**.📱 👈

Budeš potřebovat jen **krabičku s tlačítkem** a **USB dongle**. Proto si vystačíš se základní HARDWARIO sadou – [**Start Setem**](https://shop.hardwario.com/p/start-set/).


## Stáhni si nový firmware


1. Na Core Module nahraj nový firmware, a to **bcf-radio-washing-machine-monitor** (najdeš ho mezi ostatním firmwarem v Playgroundu). Díky tomuhle firmwaru bude krabička citlivěji vnímat otřesy pračky. 🔃

**Náš tip:** Nevíš, jak si firmware stáhnout nebo co to je? [Zjistíš to tady](https://docs.hardwario.com/tower/firmware-development/hardwario-extension-tutorial/#flash-firmware)

2. [Core Module spáruj s USB Donglem](https://docs.hardwario.com/tower/platform-integrations/homekit-and-siri/#pair-the-device). Hned po spárování uvidíš, že tvůj Core Module změnil Alias na **washing-machine-detector**. 👌

![HARDWARIO Playground devices list](https://res.cloudinary.com/lukasfabik/image/upload/v1566368246/projects/smart-washing-machine/image4.png)

## Rozjeď to v Node-RED

1. V Playgroundu klikni na **záložku Functions**, kde je programovací plocha [Node-RED](https://docs.hardwario.com/tower/desktop-programming/node-red-programming) 🤖

2. Začni jako vždycky: na plochu nejdřív umísti **MQTT node** ze sekce Input.
Dvakrát na něj klikni a do řádku zkopíruj **Topic**, se kterým krabička změří, kdy se pračka přestane otřásat:

```
node/washing-machine-detector:0/washing/finished
```

![Check alias of HARDWARIO kit](https://res.cloudinary.com/lukasfabik/image/upload/v1566368245/projects/smart-washing-machine/image2.png)

Potvrď tlačítkem **Done**.

3. Vedle postav **node Change** ze sekce Functions.

![Add change node to flow](https://res.cloudinary.com/lukasfabik/image/upload/v1566368245/projects/smart-washing-machine/image3.png)

4. Uvnitř nodu Change **nastavíš zprávu**, která se rodičům po doprání pošle do mobilu. Mysli na to, že by měla být bez háčků a čárek.
Malá inspirace:
    - Mate tam cisty pradlo.
    - Doprala jsem. Dostanu ted tyden dovolene?
    - Doprano a uz me nechte bejt. Vase pracka.

![Set message to show](https://res.cloudinary.com/lukasfabik/image/upload/v1566368245/projects/smart-washing-machine/image5.png)

Potvrď tlačítkem **Done**.

## Připrav si applikaci Blynk IoT

1. Pokud ještě nemáš, vytvoř si účet v aplikaci [Blynk IoT](https://blynk.io). Jak na to se podívej v [tomto návodu](https://docs.hardwario.com/tower/platform-integrations/blynk-app/). Seznámíš se tam i s tím, jak se tvoří šablony a datastreamy. Obojí budeš potřebovat.

2. Druhým krokem je vytvoření šablony zařízení. Jak na to najdeš [ve stejném návodu](https://docs.hardwario.com/tower/platform-integrations/blynk-app/). Klidně ale použij šablonu z předchozích projektů, pokud ji máš.

3. Teď si nastav nový Datastream. Na detailu šablony klikni na záložku **Datastreams**. Vpravo nahoře klikni na **Edit**. Objeví se ti tlačítko **+ New Datastream**, klikni na něj, vyber **Virtual Pin** a objeví se ti dialogové okno:

![HARDWARIO Add Blynk IoT datastream](https://res.cloudinary.com/lukasfabik/image/upload/v1642770010/projects/smart-washing-machine/add-datastream-1.png)

4. Nastav název pro nový Datastream a vyber jeden z volných Pinů. V mobilní notifikaci budeme chtít vypsat tvou vlastní zprávu, proto **zvol jako datový typ String** (textový řetězec). 

5. V dialogovém okně dole ještě rozklikni **Advanced settings** a zaškrtni poslední volbu **Expose to Automation**, díky tomu ji budeme moct použít v automatizacích. V selektoru vedle zvol **Sensor** a zaškrtni taky **Available in Conditions**. Datastream vytvoříš kliknutím na **Create**. 

![HARDWARIO Add Blynk IoT datastream](https://res.cloudinary.com/lukasfabik/image/upload/v1642770009/projects/smart-washing-machine/add-datastream-2.png)

6. Vpravo nahoře svou práci ulož tlačítkem **Save**.

## Založ zařízení

Pokud jej ještě nemáš, založ si zařízení z vytvořené šablony. Jak na to popisujeme [v návodu, který už znáš](https://docs.hardwario.com/tower/platform-integrations/blynk-app/).

## Vytvoř automatizaci

1. Přepni se do sekce **Automation** a klikni na tlačítko **+ Create Automation**.

![HARDWARIO Add Blynk IoT automation](https://res.cloudinary.com/lukasfabik/image/upload/v1642770009/projects/smart-washing-machine/add-automation-1.png)

2. Z dostupných možností vyber **Device State**. Automatizace vyhodnotí vždy, když do aplikace pošleš zprávu.

![HARDWARIO Add Blynk IoT automation](https://res.cloudinary.com/lukasfabik/image/upload/v1642770009/projects/smart-washing-machine/add-automation-2.png)

3. Nastavení automatizace probíhá jednoduše nastavením Kdy se má automatizace spustit - sekce **When** a co se má následně stát - sekce **Do this**. 

4. Nejprve nastav sekci **When**. Vyber tvé zařízení a **vytvořený Datastream**. Objeví se ti třetí selector, ten nech nastavený na **Is Any**. 

5. V sekci **Do This** klikni na **Send app notification** a nastav si příjemce. Pro zjednodušení tam nastav sebe. Do polí **Subject** a **Message** přetáhni myší položku **Trigger value**, jde o proměnnou, kde bude uložen text tvé zprávy.

6. Nakonec nezapomeň nastavit **název automatizace**. V selectu **Limit period** můžeš omezit, kdy nejdříve po notifikaci přijde další. 

![HARDWARIO Add Blynk IoT automation](https://res.cloudinary.com/lukasfabik/image/upload/v1642770009/projects/smart-washing-machine/add-automation-3.png)

7. Klikem na **Save** automatizaci ulož.

## Nastav si mobil

1. Čas ukrást mámě nebo tátovi mobil a nastavit jim jejich vlastní Blynk IoT. Pokud s Blynkem neumíš, [**podívej se na návod**](https://docs.hardwario.com/tower/platform-integrations/blynk-app/).

2. V Blynku se přihlas pod svým účtem.

## Dokonči programování

1. Vrať se k počítači. Na ploše Node-RED přidej za oba nody **zelený node Write**. Najdeš ho v levé části v sekci **Blynk IoT** (Pozor! Ne Blynk ws).

![Blynk IoT - HARDWARIO Playground](https://res.cloudinary.com/lukasfabik/image/upload/v1642769646/projects/smart-washing-machine/playground-1.png)

2. Dvakrát na node klikni. Pak klikni na **tužku**. ✏

![Blynk Connection settings](https://res.cloudinary.com/lukasfabik/image/upload/v1642769646/projects/smart-washing-machine/playground-2.png)

3. Otevřelo se ti okno pro párování s Blynkem. Tady nastav **Url** na ``blynk.cloud``, do polí **Auth Token** a **Template ID** zkopíruj hodnoty z detailu zařízení ve webové aplikaci na počítači.

![Blynk IoT - HARDWARIO Playground](https://res.cloudinary.com/lukasfabik/image/upload/v1642769646/projects/smart-washing-machine/playground-3.png)

Nastavení potvrď tlačítkem **Add**.

3. Vyplň číslo virtuálního Pinu vytvořeného datastreamu a tlačítkem **Done** vše ulož.

4. Už ti to zbývá jenom **propojit** a poslat příkaz do vesmíru červeným tlačítkem **Deploy** vpravo nahoře. 👏

![Deploy flow in Node-RED](https://res.cloudinary.com/lukasfabik/image/upload/v1642769645/projects/smart-washing-machine/playground-4.png)

## Roztoč to!

1. **Krabičku polož na pračku**. Přilep ji malým kouskem izolepy, aby nespadla.

2. **Krabička pozná, že pračka dopere**, protože se přestane otřásat. Pošle o tom zprávu mámě nebo tátovi na mobil.
Hustý, co? A rázem žiješ v **chytré domácnosti**! 🤡

![Get Notification on Phone](https://res.cloudinary.com/lukasfabik/image/upload/v1642770792/projects/smart-washing-machine/blynk-notification.jpg)