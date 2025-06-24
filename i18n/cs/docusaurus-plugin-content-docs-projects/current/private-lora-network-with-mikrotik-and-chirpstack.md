---
slug: private-lora-network-with-mikrotik-and-chirpstack
title: Private lora network
---
import Image from '@theme/IdealImage';


# Soukromá síť LoRa s Mikrotikem a ChirpStackem

Tento návod vysvětluje, jak nastavit soukromou síť LoRaWAN s Mikrotik wAP LR8 kit a ChirpStackem běžícím na jakémkoli počítači s Linuxem.

## Rychlý start sady Mikrotik wAP LR9

Připojte se k Mikrotiku podle pokynů na oficiální [stránce sady wAP LR8](https://help.mikrotik.com/docs/display/UM/wAP+LR8+kit). První připojení je pouze přes WiFi. To později změníme.

:::info

V případě, že budete potřebovat obnovit tovární nastavení Mikrotiku, [postupujte podle těchto pokynů](https://wiki.mikrotik.com/wiki/Manual:Reset). Ujistěte se, že sledujete správnou zelenou LED diodu, která je WiFi LED dioda pod konektorem napájení.



Uvnitř jednotky LoRa card je další zelená LED dioda, která po spuštění bliká, což je trochu matoucí. Nesledujte tuto zelenou LED diodu uvnitř jednotky.

:::

## Povolení připojení ethernetového rozhraní/zakázání WLAN

Volitelné. Ve výchozím nastavení je firewall nastaven tak, že se nemůžete připojit ke konfiguraci RouterOS přes ethernet. Povolíte to zakázáním všech pravidel ve Firewallu. Přejděte do IP > Firewall a zakážte všechna pravidla kliknutím na tlačítko „D“ vedle nich.

Ethernet by nyní měl fungovat a přidělit adresu DHCP. Nyní se můžete připojit k RouterOS přes ethernet.

Můžete také volitelně zcela deaktivovat WLAN. To provedete v části Interfaces, kde deaktivujete „wlan1“.

## Povolení LoRa

LoRa je ve výchozím nastavení deaktivována. Povolte ji v menu LoRa a stiskněte „E“ pro její aktivaci. Na traffic kartě byste měli vidět příchozí packety. Jsou šifrované, takže můžete správně vidět pouze Dev Addr, ale je docela užitečné vidět, že hardware funguje správně.

## Instalace ChirpStack

V této části nainstalujete **ChirpStack Gateway Bridge, ChirpStack Network Server, ChirpStack Application Server** na svůj server Linux. Váš Mikrotik wAP LR9 se poté připojí k tomuto serveru a bude tam předávat pakety LoRa.

Pro Debian můžete postupovat podle [návodu k instalaci Debian/Ubuntu](https://www.chirpstack.io/guides/debian-ubuntu/), jinak se podívejte na tuto [obecná stránka k instalaci](https://www.chirpstack.io/docs/chirpstack/downloads.html).


:::info


V instalačním návodu pro Debian/Ubuntu je skript pro vytvoření tabulky Postgress. Můžete zkopírovat celý skript a vložit ho do konzole Posgress. Po vytvoření tabulky stačí stisknout klávesu Enter a tím se provede poslední příkaz k ukončení příkazového řádku.

:::

## Připojení k síťovému serveru

:::info

Nezapomeňte povolit otevření portu 8080 ve firewallu serveru pro webovou stránku Chirp a portu 1700 pro Gateway Bridge. Pokud používáte MQTT, otevřete také port 1883. Pokud používáte `ufw`, zadejte `sudo ufw allow 8080`.

:::


Postupujte podle pokynů [jak se připojit k aplikačnímu serveru ChirpStack](https://www.chirpstack.io/guides/first-gateway-device/).

## Připojení brány Mikrotik k ChirpStack

Otevřete nabídku LoRa v konfiguraci Mikrotik. V předchozím kroku jsme povolili hardware LoRa. Nyní je čas nastavit IP adresu  ChirpStack Gateway Server. Přejděte do LoRa > Servery a nastavte IP adresu vašeho serveru a oba porty na 1700.

Druhým krokem je přejít do Zařízení, otevřít podrobnosti brány a v Síťových serverech vybrat přidaný síťový server. K změně tohoto nastavení může být nutné dočasně deaktivovat LoRa.

Měli byste také nastavit typ sítě na Soukromá. Poté je také nutné nastavit soukromou konfiguraci pro všechny vaše uzly LoRaWAN.

V levém menu v části Log byste měli vidět text „Forwarder started“. 

:::info

Na svém serveru můžete spustit `sudo journalctl -f -n 100 -u chirpstack-gateway-bridge.service` a zobrazit protokoly příchozích zpráv, abyste se ujistili, že je připojení nastaveno správně.

:::

Poté postupujte podle [těchto kroků v tutoriálu ChirpStack](https://www.chirpstack.io/guides/first-gateway-device/) a přidejte svůj síťový server, gateway, organizaci a profily, jak je vysvětleno.

## Užitečné odkazy a tutoriály

[HARDWARIO Kit LoRa AT commands configuration](https://docs.hardwario.com/tower/radio-communication/lora-at-commands/)

[HARDWARIO LoRa Tester with LCD & GPS](https://www.hackster.io/160709/lora-tester-with-lcd-gps-open-configurable-low-power-4a5b61), more information also in our e-shop.

[HARDWARIO LoRa Climate Kit](https://www.hackster.io/hubmartin/lora-climate-monitor-easy-open-low-power-and-with-graphs-7bacc2)



