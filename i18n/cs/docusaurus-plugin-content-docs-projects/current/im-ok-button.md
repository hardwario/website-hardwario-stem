---
slug: im-ok-button
title: Tlačítko „Jsem v pohodě“
---


## Úvod

Rodiče vám každý den volají, jestli už jste ze školy doma? Je to sice otravné, ale prostě o vás mají starost. Vyrobte si tlačítko, kterým jim po příchodu domů pošlete jednoduchou zprávu do mobilu. 📲

V tomto projektu se naučíte, **jak tlačítkem poslat zprávu do mobilu rodičů**. 👩👱

Budete potřebovat jen **krabičku s tlačítkem** a **USB dongle**. Vystačíte si se základní [**Sadou Start**](https://www.hardwario.store/cz/p/start-set) od HARDWARIO.


## Rozjeďte to v Node-RED

1. Sestavte a spárujte Sadu Start. Do modulu Core Module potřebujete firmware **twr-radio-push-button**. Pokud nevíte, jak si firmware stáhnout nebo co to je, [najdete to tady](https://docs.hardwario.com/tower/desktop-programming/firmware-flashing/).

2. V Playgroundu klikněte na **záložku Functions**, kde je programovací plocha [Node-RED](https://docs.hardwario.com/tower/desktop-programming/node-red-programming/).

3. Na plochu Node-RED umístěte světle fialovou bublinu, neboli uzel. Najdete ho vlevo jako **mqtt in** v sekci **network**.

![MQTT input node](./img/im-ok-button/image4.png)

4. V uzlu nastavíte klíčovou funkci: stisknutí tlačítka. Na uzel dvakrát klikněte a **do pole Topic zkopírujte tento řádek**:

```
node/push-button:0/push-button/-/event-count
```

![MQTT topic](./img/im-ok-button/image8.png)


Potvrďte tlačítkem **Done**.

**Tip:** Místo kopírování řádku odsud můžete příště jednoduše zkopírovat řádek, který se po stisknutí tlačítka objeví **v záložce Messages**.


## Nastavte si zprávu

1. Zprávu nastavíte také tady v Node-RED. Kamkoli vedle světle fialového uzlu MQTT přetáhněte **žlutý uzel s názvem change ze sekce function**.

![Change Node HARDWARIO Playground](./img/im-ok-button/image7.png)


2. Na uzel dvakrát klikněte a do pole **Rules** (pravidla) napište svou zprávu pro rodiče. Jen pozor, Blynk nezobrazuje háčky a čárky. Malá inspirace:
	- *Klidek. Jsem doma a v bezpeci.*
	- *Mame doma celebritu… Delam si srandu. To jsem ja.*
	- *Pokousali me psi, uneslo me UFO, ale uz jsem doma.*

![HARDWARIO Playground MQTT messages](./img/im-ok-button/image6.png)


Potvrďte tlačítkem **Done** a oba uzly propojte tažením myši od jedné bubliny ke druhé. 🐁


## Připravte si aplikaci Blynk IoT

Zpráva dorazí rodičům do mobilu jako push notifikace z aplikace **Blynk IoT**. Node-RED pošle text zprávy do Blynku a automatizace v Blynku z každé nové zprávy udělá notifikaci.

1. Pokud ještě účet nemáte, vytvořte si ho v aplikaci [Blynk IoT](https://blynk.io). Na tento projekt stačí bezplatný tarif: v době psaní návodu zahrnuje push notifikace v aplikaci a až pět automatizací.

2. Dále vytvořte šablonu zařízení (template). Jak na to, ukazuje [rychlý návod Blynku](https://docs.blynk.io/en/getting-started/template-quick-setup). Pokud už máte šablonu z předchozích projektů, klidně ji použijte.

3. Teď nastavte nový datastream. V detailu šablony otevřete záložku **Datastreams**, klikněte na **New Datastream** a vyberte **Virtual Pin**. Otevře se nastavení datastreamu:

![HARDWARIO Add Blynk IoT datastream](./img/im-ok-button/add-datastream-1.png)


4. Pojmenujte nový datastream (třeba `Zprava`) a vyberte jeden z volných pinů, třeba V2. V notifikaci na mobilu chceme zobrazit vaši vlastní zprávu, proto **jako datový typ (Data Type) zvolte String** (textový řetězec).

5. V nastavení datastreamu ještě povolte, aby ho automatizace mohly použít jako podmínku: v části **Automations** zapněte **Use as Condition**. Datastream vytvoříte kliknutím na **Create**.

![HARDWARIO Add Blynk IoT datastream](./img/im-ok-button/add-datastream-2.png)


6. Šablonu uložte tlačítkem **Save** vpravo nahoře.

## Založte zařízení

Pokud ještě zařízení nemáte, založte si ho z vytvořené šablony: v sekci **Devices** přidejte nové zařízení, vyberte svou šablonu a zařízení pojmenujte. Na jeho záložce **Device Info** najdete **Auth Token**, který budete potřebovat v Node-RED.

## Vytvořte automatizaci

1. Přepněte se do sekce **Automations** a založte novou automatizaci.

![HARDWARIO Add Blynk IoT automation](./img/im-ok-button/add-automation-1.png)


2. Jako podmínku vyberte **Device State**. Automatizace se pak vyhodnotí pokaždé, když Node-RED pošle do Blynku novou zprávu.

![HARDWARIO Add Blynk IoT automation](./img/im-ok-button/add-automation-2.png)


3. Nastavení automatizace je jednoduché: v části **When** nastavíte, kdy se má automatizace spustit, a v části **Do this**, co se má potom stát.

4. Nejdřív nastavte část **When**: vyberte své zařízení a **vytvořený datastream**. Objeví se třetí nabídka, tu nechte nastavenou na **Is Any**. Automatizace tak zareaguje na každou zprávu, i když bude stejná jako minulá.

5. V části **Do this** přidejte akci, která pošle notifikaci do mobilní aplikace (**Send In-App Notifications**), a jako příjemce zadejte sebe. Do textu notifikace vložte zástupný symbol **Trigger value** (`{TRIGGER_VALUE}`). Blynk za něj dosadí text vaší zprávy.

6. Nakonec nezapomeňte vyplnit **název automatizace**. **Limit period** určuje, za jak dlouho se automatizace smí spustit znovu. Zvolte co nejkratší dobu, jinak by druhá zpráva odeslaná krátce po první nedorazila.

![HARDWARIO Add Blynk IoT automation](./img/im-ok-button/add-automation-3.png)


7. Automatizaci uložte tlačítkem **Save**.


## Nastavte mobilní aplikaci

1. Půjčte si od mámy nebo táty telefon a udělejte ho ještě o kousek chytřejší. 🤓 Aby se jim vaše zpráva zobrazila, musí mít v mobilu **aplikaci Blynk IoT**. Stáhnete ji z [App Store](https://apps.apple.com/us/app/blynk-iot/id1559317868) nebo [Google Play](https://play.google.com/store/apps/details?id=cloud.blynk).

2. Po instalaci se přihlaste svým účtem. Bezplatný tarif má jen jednoho uživatele, proto se i v telefonu rodičů přihlásíte vlastním účtem. Povolte aplikaci oznámení, aby se zpráva mohla zobrazit.


## Propojte mobil s krabičkou

1. Vraťte se k počítači. Na ploše Node-RED přidejte za oba uzly **zelený uzel write**. Najdete ho vlevo v sekci **Blynk IoT** (pozor, ne Blynk ws, ta patří ke starému Blynku, který už nefunguje).

![Blynk IoT - HARDWARIO Playground](./img/im-ok-button/playground-1.png)


2. Uzel otevřete dvojklikem. Vedle pole **Connection** uvidíte **malou tužku**. Klikněte na ni a otevře se nové okno. Do pole **Url** vložte ``blynk.cloud`` a do polí **Auth Token** a **Template ID** zkopírujte hodnoty z webové aplikace Blynk na počítači: Auth Token najdete na záložce **Device Info** zařízení, Template ID v detailu šablony.

![Blynk IoT - HARDWARIO Playground](./img/im-ok-button/playground-2.png)


Nastavení potvrďte tlačítkem **Add**.

3. Do pole **Virtual Pin** zadejte číslo pinu vytvořeného datastreamu (pro V2 je to 2) a vše uložte tlačítkem **Done**.

4. **Uzel write propojte se žlutým uzlem, ve kterém jste nastavili zprávu.** Teď máte zařízení naprogramované tak, aby se stisknutí tlačítka na krabičce ➡️ proměnilo ve zprávu, ➡️ která doputuje až do mobilu vašich rodičů. 👾

![Blynk IoT - HARDWARIO Playground](./img/im-ok-button/flow.png)


❗ Celý flow spusťte a potvrďte červeným tlačítkem **Deploy** vpravo nahoře. 🚨

## A… akce!

1. Stiskněte tlačítko. Rodičům v mobilu **vyskočí zpráva**. 💪

![Get Notification on Phone](./img/im-ok-button/notification.png)


2. Rodiče si o vás budou myslet, že máte talent, a vy si navíc ušetříte jejich každodenní telefonáty. 🎉 **A to je prostě tak chytré, až je to IoT.** 🕺
