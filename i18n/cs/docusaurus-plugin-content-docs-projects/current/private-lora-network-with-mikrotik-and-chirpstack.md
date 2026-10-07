---
slug: private-lora-network-with-mikrotik-and-chirpstack
title: Soukromá síť LoRa
---
import Image from '@theme/IdealImage';


# Soukromá síť LoRa: MikroTik a ChirpStack

Tento návod popisuje, jak postavit soukromou síť LoRaWAN se sadou MikroTik wAP LR8 kit a serverem ChirpStack na libovolném počítači s Linuxem.

## Rychlý start se sadou MikroTik wAP LR9

K zařízení MikroTik se připojte podle pokynů na oficiální [stránce sady wAP LR8](https://help.mikrotik.com/docs/display/UM/wAP+LR8+kit). Poprvé se můžete připojit jen přes Wi-Fi, to později změníme.

:::info

Pokud budete potřebovat obnovit tovární nastavení zařízení MikroTik, [postupujte podle těchto pokynů](https://wiki.mikrotik.com/wiki/Manual:Reset). Řiďte se přitom správnou zelenou LED: je to LED Wi-Fi pod napájecím konektorem.

Uvnitř jednotky je na kartě LoRa další zelená LED, která po spuštění bliká a trochu mate. Tou se neřiďte.

:::

## Připojení přes ethernet a vypnutí WLAN

Tento krok je volitelný. Ve výchozím nastavení firewall nedovolí připojit se ke konfiguraci RouterOS přes ethernet. Přístup povolíte tak, že ve firewallu vypnete všechna pravidla: přejděte do IP > Firewall a u každého pravidla klikněte na tlačítko „D“.

Ethernet by teď měl fungovat a získat adresu z DHCP. K RouterOS se pak můžete připojit přes ethernet.

WLAN můžete také úplně vypnout: v části Interfaces deaktivujte „wlan1“.

## Zapnutí LoRa

LoRa je ve výchozím nastavení vypnutá. Zapnete ji v menu LoRa tlačítkem „E“. Na kartě Traffic byste měli vidět příchozí pakety. Jsou šifrované, takže čitelná je jen Dev Addr, ale aspoň vidíte, že hardware funguje správně.

## Instalace serveru ChirpStack

V této části nainstalujete na svůj linuxový server **ChirpStack Gateway Bridge, ChirpStack Network Server, ChirpStack Application Server**. Zařízení MikroTik wAP LR9 se pak k tomuto serveru připojí a bude mu předávat pakety LoRa.

Na Debianu postupujte podle [návodu k instalaci pro Debian/Ubuntu](https://www.chirpstack.io/guides/debian-ubuntu/), jinak použijte [obecnou stránku k instalaci](https://www.chirpstack.io/docs/chirpstack/downloads.html).

:::info

Instalační návod pro Debian/Ubuntu obsahuje skript, který v PostgreSQL vytvoří tabulky. Celý skript můžete zkopírovat a vložit do konzole PostgreSQL. Po vytvoření tabulek stiskněte Enter: provede se tím poslední příkaz, který konzoli ukončí.

:::

## Připojení k síťovému serveru

:::info

Nezapomeňte na firewallu serveru otevřít port 8080 pro webové rozhraní ChirpStack a port 1700 pro Gateway Bridge. Pokud používáte MQTT, otevřete i port 1883. S `ufw` stačí zadat `sudo ufw allow 8080`.

:::

Pak postupujte podle návodu, [jak se připojit k aplikačnímu serveru ChirpStack](https://www.chirpstack.io/guides/first-gateway-device/).

## Připojení brány MikroTik k serveru ChirpStack

V konfiguraci zařízení MikroTik otevřete menu LoRa. Hardware LoRa jsme zapnuli v předchozím kroku, teď nastavíme IP adresu pro ChirpStack Gateway Server. Přejděte do LoRa > Servers, zadejte IP adresu svého serveru a oba porty nastavte na 1700.

Potom přejděte do Devices, otevřete detail brány a v Network Servers vyberte přidaný síťový server. Než nastavení změníte, možná bude potřeba LoRa dočasně vypnout.

Nastavte také Network type na Private. Soukromou konfiguraci pak musíte nastavit i ve všech uzlech LoRaWAN.

V levém menu v části Log by se měl objevit text „Forwarder started“.

:::info

Na serveru můžete spustit `sudo journalctl -f -n 100 -u chirpstack-gateway-bridge.service` a v logu příchozích zpráv ověřit, že je připojení nastavené správně.

:::

## Brána a zařízení v systému ChirpStack

Pak podle [těchto kroků v návodu ChirpStack](https://www.chirpstack.io/guides/first-gateway-device/) přidejte síťový server, bránu, organizaci a profily.

## Užitečné odkazy a návody

[Konfigurace sady HARDWARIO LoRa pomocí příkazů AT](https://docs.hardwario.com/tower/radio-communication/lora-at-commands/)

[HARDWARIO LoRa Tester with LCD & GPS](https://www.hackster.io/160709/lora-tester-with-lcd-gps-open-configurable-low-power-4a5b61), další informace najdete i v našem e-shopu.

[HARDWARIO LoRa Climate Kit](https://www.hackster.io/hubmartin/lora-climate-monitor-easy-open-low-power-and-with-graphs-7bacc2)



