---
slug: node-red-and-start-set
title: Node-RED a Sada Start
---
## Úvod

Node-RED je jednoduchý, ale mocný nástroj. Teď si ukážeme, jak v něm vytvořit základní dashboard, který zobrazí počet stisknutí tlačítka, teplotu a stav naklonění.


## Kolikrát jsem stiskl tlačítko?

Abychom mohli počet stisknutí zobrazit, musíme ho nejdřív někde získat.

1. Pokud ještě neběží, spusťte **HARDWARIO Playground**. Z předchozího návodu víte, že se data zobrazují v **Messages**. Když tu kliknete na řádek s topicem `node/motion-detector:0/push-button/-/event-count`, zkopíruje se do schránky a potvrdí to vyskakovací informační panel.

> Pokud máte spárovaných více modulů **Push Button**, budou se lišit číslem za \`motion-detector:\`

2. Teď přejděte do **Functions**. Je to vestavěná aplikace **Node-RED**, ke které existuje skvělá dokumentace, podpora i velká komunita uživatelů. Funguje na principu **vizuálního programování**: na plochu přidáváte funkční bloky, kterým říkáme **uzly** (nodes), a jejich propojením **vytvoříte funkční aplikaci** (flow).
3. Smažte dva uzly, které už na ploše jsou.
4. Začněte uzlem **mqtt in**. Najdete ho vlevo v sekci **network**. Přetáhněte ho na plochu.

![Rozjeďte to v Node-RED](./img/node-red-and-start-set/image3.png "Rozjeďte to v Node-RED")

5. Dvojklikem otevřete jeho nastavení. Tady je potřeba vyplnit pole **topic**, které určuje, jaké zprávy bude tento flow přijímat.
6. Vraťte se v Playgroundu na záložku **Messages** a najděte zprávu s teplotou. Vedle hodnoty teploty vidíte i identifikátor zprávy, který vypadá takto: `node/push-button:0/thermometer/0:1/temperature`. To je **topic**.
7. Topic zkopírujte, vraťte se do **Functions**, vložte ho do pole **Topic** a nastavení uložte tlačítkem **Done**.
8. Teď přetáhněte na plochu uzel **Gauge**. Najdete ho v sekci **dashboard**.
9. Dvojklikem otevřete jeho nastavení a v sekci **Range** změňte hodnotu **max** na **50**. Nastavení uložte tlačítkem **Done**.
10. Oba uzly propojte. Je to snadné: klikněte na šedý čtvereček jednoho uzlu a myší ho přetáhněte k šedému čtverečku druhého uzlu.
11. Tlačítkem **Deploy** vpravo nahoře aplikaci spusťte a pak v Playgroundu přepněte na záložku **Dashboard**.
12. Dýchněte na zařízení, aby hned odeslalo zprávu s teplotou, a je to! Na budíku uvidíte aktuální teplotu.
