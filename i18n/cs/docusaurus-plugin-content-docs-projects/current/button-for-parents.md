---
slug: button-for-parents
title: Tlačítko pro rodiče
---

## Úvod

Znáte to: zrovna hrajete hry nebo posloucháte hudbu naplno, a když vás máma volá k večeři, vůbec o tom nevíte. Sestavte proto rodičům chytré tlačítko, kterým vás upozorní přes mobil a nebudou muset křičet přes celý dům.

V tomto projektu se naučíte, **jak tlačítkem poslat zprávu do mobilu** odkudkoli v domě. 👌

Budete potřebovat krabičku s **tlačítkem** a **USB dongle**. Vystačíte si tedy se základní sadou HARDWARIO [**Start Set**](https://www.hardwario.store/p/start-set/).


## Rozjeďte to v Node-RED

1. Start Set sestavte a spárujte. Do modulu Core Module potřebujete firmware **radio push button**.
2. V Playgroundu klikněte na **záložku Functions**. Tady krabičku nastavíte tak, aby dělala, co chcete.
3. Jdeme programovat. 🤞 Na plochu Node-RED umístěte světle fialovou bublinu, tedy uzel. Najdete ho vlevo jako **MQTT** v sekci **Input**.

![Rozjeďte to v Node-RED](./img/button-for-parents/image3.png "Rozjeďte to v Node-RED")

**Pokud program otevíráte poprvé:** tento uzel už máte na ploše předem nastavený jako **node/#**. Druhou, tmavě zelenou bublinu můžete smazat.

4. V uzlu nastavíte klíčovou funkci, tedy stisk tlačítka. Dvakrát na uzel klikněte a **do pole Topic zkopírujte tento řádek**:

```
node/push-button:0/push-button/-/event-count
```

![MQTT Topic](./img/button-for-parents/image9.png "MQTT Topic")

Potvrďte tlačítkem **Done**.

**Tip:** Vidíte v Playgroundu záložku **Messages**? Zobrazují se v ní všechny akce, řádek po řádku. Stiskněte tlačítko na krabičce a… tadá, objevil se stejný řádek:
```
node/push-button:0/push-button/-/event-count
```
Co to znamená? Příště můžete řádky do pole Topic kopírovat přímo ze záložky Messages.

## Napište vlastní zprávu

1. Zprávu nastavíte také tady v Node-RED. Kamkoli vedle světle fialového vstupu MQTT umístěte **žlutý uzel Change ze sekce Functions**.

![Uzel Change v Node-RED](./img/button-for-parents/image7.png "Uzel Change v Node-RED")

2. Uzel Change určuje, co se při stisku stane, třeba že se odešle zpráva. Popusťte uzdu fantazii a napište si vlastní (jen pozor, Blynk nezobrazuje háčky a čárky). Malá inspirace:
	- Vecere!
	- Cas krmeni
	- Bez si doplnit skutecnou manu
	- Lektvar zdravi je uvareny

Stačí na uzel dvakrát kliknout a v poli **Rules** (pravidla) napsat zprávu do druhého řádku.

![Úprava uzlu Change v Node-RED](./img/button-for-parents/image5.png "Úprava uzlu Change v Node-RED")

Potvrďte tlačítkem **Done**.

3. Na okraji každého uzlu uvidíte malou šedou kuličku. Když na ni kliknete, podržíte tlačítko myši a táhnete do strany, vytáhnete z uzlu provázek. Tak se uzly propojují.
Vyzkoušejte to. **Oba uzly propojte** tažením myši od jedné bubliny ke druhé. Hračka. 🙆

![Node-RED](./img/button-for-parents/image6.png "Node-RED")

## Připravte si aplikaci Blynk IoT

1. Pokud ještě nemáte účet v aplikaci [Blynk IoT](https://blynk.io), založte si ho. Zároveň se tam seznámíte s tím, jak se vytvářejí šablony a datastreamy. Budete potřebovat obojí.

2. Dalším krokem je vytvoření šablony zařízení. Pokud máte šablonu z předchozích projektů, klidně ji použijte.

3. Teď nastavte nový datastream. V detailu šablony klikněte na záložku **Datastreams** a vpravo nahoře na **Edit**. Objeví se tlačítko **+ New Datastream**. Klikněte na něj, vyberte **Virtual Pin** a otevře se dialogové okno:


![Přidání datastreamu v Blynk IoT](./img/button-for-parents/add-datastream-1.png "Přidání datastreamu v Blynk IoT")

4. Pojmenujte nový datastream a vyberte jeden z volných pinů. V notifikaci na mobilu chceme zobrazit vaši vlastní zprávu, proto **jako datový typ zvolte String** (textový řetězec).

5. Dole v dialogovém okně ještě rozbalte **Advanced settings** a zaškrtněte poslední volbu **Expose to Automation**, abychom datastream mohli použít v automatizacích. V rozbalovacím seznamu vedle zvolte **Sensor** a zaškrtněte také **Available in Conditions**. Datastream vytvoříte kliknutím na **Create**.

![Nastavení datastreamu v Blynk IoT](./img/button-for-parents/add-datastream-2.png "Nastavení datastreamu v Blynk IoT")


6. Vpravo nahoře práci uložte tlačítkem **Save**.

## Založte zařízení

Pokud ho ještě nemáte, založte si z vytvořené šablony zařízení.

## Vytvořte automatizaci

1. Přepněte se do sekce **Automation** a klikněte na tlačítko **+ Create Automation**.



![Nová automatizace v Blynk IoT](./img/button-for-parents/add-automation-1.png "Nová automatizace v Blynk IoT")


2. Z nabízených možností vyberte **Device State**. Automatizace se vyhodnotí pokaždé, když do aplikace pošlete zprávu.


![Výběr podmínky automatizace v Blynk IoT](./img/button-for-parents/add-automation-2.png "Výběr podmínky automatizace v Blynk IoT")


3. Nastavení automatizace je jednoduché: v sekci **When** určíte, kdy se má automatizace spustit, a v sekci **Do this**, co se pak má stát.

4. Nejdřív nastavte sekci **When**. Vyberte své zařízení a **vytvořený datastream**. Objeví se třetí rozbalovací seznam, ten nechte nastavený na **Is Any**.

5. V sekci **Do This** klikněte na **Send app notification** a nastavte příjemce. Pro jednoduchost zadejte sebe. Do polí **Subject** a **Message** přetáhněte myší položku **Trigger value**. Je to proměnná, ve které bude uložený text vaší zprávy.

6. Nakonec nezapomeňte automatizaci **pojmenovat**. V poli **Limit period** můžete nastavit, za jak dlouho nejdříve může po jedné notifikaci přijít další.


![Nastavení automatizace v Blynk IoT](./img/button-for-parents/add-automation-3.png "Nastavení automatizace v Blynk IoT")

7. Automatizaci uložte kliknutím na **Save**.

## Nastavte si aplikaci v mobilu

😎 Stáhněte si do mobilu **aplikaci Blynk IoT** z [App Store](https://apps.apple.com/us/app/blynk-iot/id1559317868) nebo [Google Play](https://play.google.com/store/apps/details?id=cloud.blynk). Přihlaste se do ní svým účtem.



![Aplikace Blynk IoT v mobilu](./img/button-for-parents/blynk-iot.png "Aplikace Blynk IoT v mobilu")

## Propojte mobil s krabičkou

1. Vraťte se k počítači. Na plochu Node-RED přidejte za oba uzly **zelený uzel Write**. Najdete ho vlevo v sekci Blynk IoT.
2. Uzel otevřete dvojklikem. Vpravo uvidíte **malou tužku**. Klikněte na ni a otevře se nové okno.
3. Do pole **Url** vložte ``blynk.cloud``.
4. Do polí **Auth Token** a **Template ID** zkopírujte hodnoty z detailu zařízení ve webové aplikaci Blynk na počítači.

![Uzel Blynk v Node-RED](./img/button-for-parents/playground-1.png "Uzel Blynk v Node-RED")

5. Nastavení potvrďte tlačítkem **Add**.


6. Vyplňte číslo virtuálního pinu vytvořeného datastreamu a vše uložte tlačítkem **Done**.

7. **Uzel Blynku propojte s uzlem, ve kterém jste nastavili zprávu.** Teď jste zařízení naprogramovali tak, aby se stisk tlačítka na krabičce ➡️ proměnil ve zprávu, ➡️ která doputuje až do vašeho mobilu. 👾

![Propojení Node-RED s Blynkem](./img/button-for-parents/playground-2.png "Propojení Node-RED s Blynkem")

❗ Celý flow spusťte červeným tlačítkem **Deploy** vpravo nahoře. 🚨

## Akce!

1. Stiskněte tlačítko a… kouzlo! 🎇 **Zpráva se vám objeví v mobilu!** 🙌
2. Dejte tlačítko mámě nebo tátovi. Koukají, co? Rodinný klid před večeří je zachráněn. 🤓



![Notifikace Blynk v mobilu](./img/button-for-parents/blynk-notification-dinner.jpg "Notifikace Blynk v mobilu")
