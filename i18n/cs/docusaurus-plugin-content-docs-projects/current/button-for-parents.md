---
slug: button-for-parents
title: Tlačítko pro rodiče 
---

## Úvod

Znáš to? Paříš jak drak nebo posloucháš hudbu na plné pecky, a když tě máma volá k večeři, vůbec o ničem nevíš. Sestav proto pro rodiče chytré tlačítko, se kterým tě upozorní přes mobil a nevyřvou si hlasivky.

V tomhle projektu se naučíš, **jak tlačítkem poslat zprávu do mobilu** odkudkoli v domě. 👌

Budeš potřebovat krabičku s **tlačítkem** a **USB dongle**. Proto si vystačíš se základní HARDWARIO sadou, tedy [**Starter setem**](https://shop.hardwario.com/p/start-set/).


## Rozjeď to v Node-RED

1. Starter set sestav a spáruj. Na Core module potřebuješ firmware **radio push button**.
2. V Playgroundu klikni na **záložku Functions**. Na ní si přednastavíš krabičku, aby dělala všechno, co chceš.
3. Jde se programovat. 🤞 Na plochu Node-RED postav světle fialovou bublinu, neboli nod. Najdeš ho vlevo jako **MQTT** v sekci **Input**.

![Rozjeď to v Node-RED](https://res.cloudinary.com/lukasfabik/image/upload/v1565632592/projects/button-for-mum/image3.png "Rozjeď to v Node-RED")

**Pokud program otevíráš poprvé:** tenhle node máš na ploše přednastavený jako **node/#**. Druhou, tmavězelenou, bublinu můžeš smazat.

4. Uvnitř nodu nastavíš klíčovou funkci – a tou je klikání na tlačítko. Na node dvakrát klikni a **do pole Topic zkopíruj tenhle řádek**:

```
node/push-button:0/push-button/-/event-count
```

![MQTT Topic](https://res.cloudinary.com/lukasfabik/image/upload/v1565632595/projects/button-for-mum/image9.png "MQTT Topic")

Potvrď pomocí tlačítka **Done**.

**Tip:** Vidíš v Playgroundu záložku **Messages**? Tady se zobrazují všechny akce, řádek po řádku. Klikni na krabičce – a tadá, zobrazilo se ti to stejné:
```
node/push-button:0/push-button/-/event-count
```
Co to znamená? Že můžeš příště do pole Topic kopírovat řádky ze záložky Messages.

## Hoď tam vlastní zprávu

1. Zprávu si nastavíš taky tady v Node-RED. Kamkoli vedle světle fialového inputu MQTT umísti **žlutý node ze sekce Functions s názvem Change**.

![Node-RED Change node](https://res.cloudinary.com/lukasfabik/image/upload/v1565632592/projects/button-for-mum/image7.png "Node-RED Change node")

2. Tenhle Change node mění, jak se akce projeví. Takže třeba pošle zprávu. Go wild a nastav si svoji vlastní (jenom pozor, na Blynku se nezobrazují háčky a čárky). Malá inspirace:
	- Zranice!
	- Cas krmeni
	- Bez doplnit realnou manu
	- Muj health potion byl prave uvaren

Uděláš to tak, že na node dvakrát klikneš a v poli **Rules** (pravidla) zprávu napíšeš do druhého řádku.

![Node-RED Change node edit](https://res.cloudinary.com/lukasfabik/image/upload/v1565632593/projects/button-for-mum/image5.png "Node-RED Change node edit")

Potvrď tlačítkem **Done**.

3. Na kraji každého nodu uvidíš malou šedou kuličku. Když na ni klikneš, klik podržíš a myš zatáhneš do strany, vytáhneš z nodu provázek. Tím se nody propojují.
Zkus si to. **Oba nody propoj** táhnutím myší od jedné bubliny k druhé. Easy peasy. 🙆

![Node-RED](https://res.cloudinary.com/lukasfabik/image/upload/v1565632593/projects/button-for-mum/image6.png "Node-RED")

## Připrav si applikaci Blynk IoT

1. Pokud ještě nemáš, vytvoř si účet v aplikaci [Blynk IoT](https://blynk.io). Seznámíš se tam i s tím, jak se tvoří šablony a datastreamy. Obojí budeš potřebovat.

2. Druhým krokem je vytvoření šablony zařízení. Klidně ale použij šablonu z předchozích projektů, pokud ji máš.

3. Teď si nastav nový Datastream. Na detailu šablony klikni na záložku **Datastreams**. Vpravo nahoře klikni na **Edit**. Objeví se ti tlačítko **+ New Datastream**, klikni na něj, vyber **Virtual Pin** a objeví se ti dialogové okno:


![Node-RED](https://res.cloudinary.com/lukasfabik/image/upload/v1565632593/projects/button-for-mum/add-datastream-1.png "Node-RED")

4. Nastav název pro nový Datastream a vyber jeden z volných Pinů. V mobilní notifikaci budeme chtít vypsat tvou vlastní zprávu, proto **zvol jako datový typ String** (textový řetězec). 

5. V dialogovém okně dole ještě rozklikni **Advanced settings** a zaškrtni poslední volbu **Expose to Automation**, díky tomu ji budeme moct použít v automatizacích. V selektoru vedle zvol **Sensor** a zaškrtni taky **Available in Conditions**. Datastream vytvoříš kliknutím na **Create**. 

![Node-RED](https://res.cloudinary.com/lukasfabik/image/upload/v1565632593/projects/button-for-mum/add-datastream-2.png "Node-RED")


6. Vpravo nahoře svou práci ulož tlačítkem **Save**.

## Založ zařízení

Pokud jej ještě nemáš, založ si zařízení z vytvořené šablony. 

## Vytvoř automatizaci

1. Přepni se do sekce **Automation** a klikni na tlačítko **+ Create Automation**.



![Node-RED](https://res.cloudinary.com/lukasfabik/image/upload/v1565632593/projects/button-for-mum/add-automation-1.png "Node-RED")


2. Z dostupných možností vyber **Device State**. Automatizace vyhodnotí vždy, když do aplikace pošleš zprávu.


![Node-RED](https://res.cloudinary.com/lukasfabik/image/upload/v1565632593/projects/button-for-mum/add-automation-2.png "Node-RED")


3. Nastavení automatizace probíhá jednoduše nastavením Kdy se má automatizace spustit - sekce **When** a co se má následně stát - sekce **Do this**. 

4. Nejprve nastav sekci **When**. Vyber tvé zařízení a **vytvořený Datastream**. Objeví se ti třetí selector, ten nech nastavený na **Is Any**. 

5. V sekci **Do This** klikni na **Send app notification** a nastav si příjemce. Pro zjednodušení tam nastav sebe. Do polí **Subject** a **Message** přetáhni myší položku **Trigger value**, jde o proměnnou, kde bude uložen text tvé zprávy.

6. Nakonec nezapomeň nastavit **název automatizace**. V selectu **Limit period** můžeš omezit, kdy nejdříve po notifikaci přijde další. 


![Node-RED](https://res.cloudinary.com/lukasfabik/image/upload/v1565632593/projects/button-for-mum/add-automation-3.png "Node-RED")

7. Klikem na **Save** automatizaci ulož.

## Nastav si appku na mobilu

😎 Stáhni si na mobil **appku Blynk IoT** z z [App store](https://apps.apple.com/us/app/blynk-iot/id1559317868), nebo [Google Play](https://play.google.com/store/apps/details?id=cloud.blynk). Přihlas se do ní pod svým účtem.



![Node-RED](https://res.cloudinary.com/lukasfabik/image/upload/v1565632593/projects/button-for-mum/blynk-iot.png "Node-RED")

## Propoj mobil s krabičkou

1. Vrať se k počítači. Na ploše Node-RED přidej za oba nody **zelený node Write**. Najdeš ho v levé části pod sekcí Blynk IoT.
2. Node otevři dvojklikem. Vpravo uvidíš **malou tužku**. Klikni na ni a otevře se ti nové okno.
3. Do pole **Url** vlož ``blynk.cloud``. 
4. Do polí **Auth Token** a **Template ID** zkopíruj hodnoty z detailu zařízení ve webové aplikaci na počítači.

![Node-RED Blynk](https://res.cloudinary.com/lukasfabik/image/upload/v1642775388/projects/button-for-mum/playground-1.png "Node-RED Blynk")

5. Nastavení potvrď tlačítkem **Add**. 


6. Vyplň číslo virtuálního Pinu vytvořeného datastreamu a tlačítkem **Done** vše ulož.

7. **Node s Blynkem propoj s nodem, do kterého si nastavil zprávu**. Teď si zařízení naprogramoval tak, aby se kliknutí na krabičce ➡️ proměnilo ve zprávu, ➡️ která doputuje až do tvého mobilu. 👾

![Node-RED Blynk integration](https://res.cloudinary.com/lukasfabik/image/upload/v1642775388/projects/button-for-mum/playground-2.png "Node-RED Blynk integration")

❗ Celý flow odstartuj a potvrď červeným tlačítkem **Deploy** vpravo nahoře. 🚨

## Akce!

1. Zmáčkni tlačítko a… magic. 🎇 **Zpráva se ti ukáže na mobilu!** 🙌
2. Tlačítko dej mámě nebo tátovi. Ti koukají, co? Rodinný mír a klid před večeří je zachráněn. 🤓



![Node-RED](https://res.cloudinary.com/lukasfabik/image/upload/v1565632593/projects/button-for-mum/blynk-notification-dinner.jpg "Node-RED")
