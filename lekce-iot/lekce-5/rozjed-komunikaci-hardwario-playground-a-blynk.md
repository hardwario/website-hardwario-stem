---
slug: rozjed-komunikaci-hardwario-playground-a-blynk
title: Rozjeď komunikaci Hardwario Playground a Blynk
---
import Image from '@theme/IdealImage';

## 3. Připravte si aplikaci Blynk IoT

1. Vytvořte si registraci na [blynk.cloud](https://blynk.cloud/dashboard/login) kliknutím na **Create new account**.
2. Vytvořte novou šablonu (**Create New Template**), vyplňte jméno, jako typ hardwaru zvolte **Other**, na typu připojení také nezáleží. Tlačítkem **Done** dokončete vytvoření šablony.
3. Nyní nastavte nový **Datastream**. Na detailu šablony klikněte na záložku **Datastreams**. Vpravo nahoře klikněte na **Edit**. Objeví se tlačítko **+ New Datastream** – klikněte na něj, vyberte **Virtual Pin** a otevře se dialogové okno.
4. Nastavte název pro nový Datastream (například **Notification**) a vyberte jeden z volných **Pinů** (libovolný). V mobilní notifikaci budete chtít vypsat osvětlení, proto jako datový typ zvolte **Double**.
5. V dialogovém okně nahoře jste v nastavení **General**. Přepněte se do záložky **Expose to Automation**, díky tomu bude možné stream použít v automatizacích. V selektoru vedle zvolte **Sensor** a zaškrtněte také **Condition** a **Action**. Datastream vytvoříte kliknutím na **Create**.
6. Vpravo nahoře svou práci uložte tlačítkem **Save**. **Uložte si vaše Template ID.**

##  4. Založte v Blynk zařízení

1. Přejděte v Blynku na **Devices**. Tlačítkem **+ New Device** otevřete okno pro vytvoření nového zařízení.
2. Ve výběru způsobu vytvoření zvolte **From template**. V následujícím formuláři vyberte svou šablonu a přiřaďte zařízení jméno. Kliknutím na **Create** proces dokončíte.
3. Uložte si informace, které vám dává Blynk – **Template ID** byste už měli mít, teď získáte **Auth Token**.

## 5. Přesuňte se do Playgroundu

1. V záložce **Functions** najděte nody, které pracují s novou verzí Blynk – jsou označené sekcí **Blynk IoT**.
2. Pro zápis hodnot do vytvořeného datastreamu vyberte node **write**.
3. Dvojklikem se dostanete do jeho nastavení.
4. Vpravo klikněte na malou **tužku** – tím otevřete nové okno.
5. Do pole **Url** vložte `blynk.cloud`, do polí **Auth Token** a **Template ID** zkopírujte hodnoty z detailu zařízení ve webové aplikaci na počítači.
6. Nastavení potvrďte kliknutím na **Add**.
7. Vyplňte číslo **virtuálního pinu** vašeho datastreamu a tlačítkem **Done** vše uložte.
8. Nyní můžete nastavit svou **flow v Node-RED**, kde spojíte **mqtt out** node, který dává osvětlení ze senzoru, s **write** node pro Blynk.

<div class="container">
  <div class="row">
    <Image img={require('/lekce-iot/img/iot-function_blynk1.webp')}/>
  </div>
</div>

## 6. Nastavte si mobilní aplikaci

1. Aplikaci **Blynk IoT** si stáhněte do mobilního zařízení z App Store nebo Google Play.
2. Přihlaste se do ní pomocí svých přihlašovacích údajů.
3. Na úvodní stránce uvidíte vámi vytvořené zařízení.
4. Otevřete jej kliknutím a nastavte si **dashboard**:
   - Pod **klíčem** vpravo nahoře najdete nastavovací stránku dashboardu.
   - V **My Templates** najdete svůj template. Klikněte na něj.
   - Tlačítkem **+** nebo kliknutím někam na plochu přidejte nový widget, například **Value Display**.
   - Stiskem přidaného widgetu zobrazíte okno s jeho nastavením. Nejdůležitější je doplnit **Datastream** z vaší šablony pro vybraný **virtuální Pin**.

## 7. Vytvořte automatizaci

1. Přepněte se ve webové aplikaci Blynk do sekce **Automation** a klikněte na tlačítko **+ Create Automation**.
2. Z dostupných možností vyberte **Device State**. Automatizace se spustí vždy, když do aplikace pošlete zprávu.
3. Nastavení automatizace probíhá ve dvou krocích: **When** – kdy se má automatizace spustit, a **Do this** – co se má stát.
4. Nejprve nastavte sekci **When**. Vyberte své zařízení a vytvořený **Datastream**. Objeví se třetí selektor – ten ponechte nastavený na **Is Any**.
5. V sekci **Do This** klikněte na **Send In-App Notification** a nastavte si příjemce. Pro zjednodušení zde nastavte **sebe**.
6. Do polí **Subject** a **Message** přetáhněte myší položku **Trigger value** – jde o proměnnou, kde bude uložen text vaší zprávy.
7. Nakonec nezapomeňte nastavit název automatizace.
8. Kliknutím na **Save** automatizaci uložte.


## 8. Spusťte to

1. V **Hardwario Playground** stiskněte tlačítko **Deploy**.
2. Změňte osvětlení svého **Climate** modulu, abyste viděli v **Messages**, že posílá novou hodnotu.
3. Zkontrolujte svůj mobil, zda má novou notifikaci o změně osvětlení a jestli aplikace **Blynk** ukazuje aktuální hodnotu.