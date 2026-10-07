---
slug: appliance-control
title: Ovládání spotřebičů
---

## Úvod

Se Sadou Control a jejím vestavěným silovým relé (230 V / 16 A) ovládáte domácí spotřebiče, třeba lampu, větrák nebo i vodní čerpadlo. Sada Control umí řídit také digitální LED pásek.

V tomto projektu budeme pomocí relé ovládat stolní lampu a na programovatelném LED pásku zobrazovat okolní teplotu. Hodí se to pro chytré osvětlení doma, v kanceláři nebo třeba na vánočním stromku.

Sada obsahuje 3 moduly, napájecí adaptér, krabičku vytištěnou na 3D tiskárně, upevňovací gumičky a LED pásek se 72 pixely.

**Součástí sady není Radio Dongle, který potřebujete k vytvoření sítě.**

Než začnete, zkontrolujte si, že máte vše, co projekt potřebuje.

## Sestavte sadu

1. Nasaďte červený **Core Module** na žlutý **Power Module**. Aby moduly nešly nasadit obráceně, jeden pin chybí a jeden otvor v konektoru je zaslepený. Při nasazování buďte opatrní, ať piny neohnete. Ohnuté piny ale snadno narovnáte.
2. Černý **Cover Module** nasaďte na červený **Core Module**.
3. Celou sestavu vložte do **krabičky vytištěné na 3D tiskárně** a zajistěte ji **gumičkami**.
4. Přiložený **LED pásek** zapojte do konektoru modulu **Power Module** ve spodní části krabičky.
5. Připravte si **napájecí adaptér**, ale zatím ho nezapojujte.


## Spusťte vlastní rádiovou síť

Pokud už máte **Radio Dongle** z jiné sady, můžete tento krok přeskočit.

1. Otevřete na počítači aplikaci HARDWARIO Playground. Pokud ji ještě nemáte, nainstalujte si ji podle [tohoto](https://docs.hardwario.com/tower/desktop-programming/playground-installation/#download) návodu.
2. V Playgroundu otevřete záložku **Devices**.
3. Zapojte USB Radio Dongle do počítače. Objeví se nahoře v rozbalovacím seznamu **Radio Dongle**.
4. Klikněte na **Connect** a rádiová síť se automaticky spustí.

## Připojte Sadu Control

1. Pokud máte jen Sadu Control a v seznamu zařízení (v Playgroundu) vidíte zařízení Push Button, můžete ho smazat. Pokud chcete používat i jiné sady, nic nemažte.
2. V Playgroundu klikněte na tlačítko **Start pairing**.
3. Vezměte konektor Sady Control a zapojte ho do krabičky. Pak zapojte napájecí adaptér do zásuvky.
4. Po úspěšném spárování by se v seznamu mělo objevit zařízení s názvem **Power Control**.

## Otestujte komunikaci

Zařízení umí kromě zprávy o stisknutí tlačítka posílat také údaje o teplotě a orientaci. Vyzkoušejte, jaké zprávy posílá:

1. Otevřete v Playgroundu záložku **Messages**.
2. Uvidíte seznam zpráv, které vaše tlačítko poslalo přes Radio Dongle do počítače.
3. Několikrát stiskněte tlačítko a sledujte, jak roste počet stisknutí.
4. Dýchněte na zařízení teplý vzduch: teplota stoupne a objeví se mezi zprávami.
5. Poslední typ zprávy je orientace zařízení. Funguje jako hrací kostka: zkuste zařízením otáčet a zjistěte, kdy se objeví pozice 1, 2, 3…6.

![Node-RED](./img/appliance-control/image3.png "Node-RED")

## První projekt

V mnoha návodech je prvním projektem „Hello World!“. My zvládneme něco zajímavějšího: zobrazíme teplotu na ukazateli!

1. V Playgroundu otevřete záložku **Functions**.
2. Je to vestavěná aplikace **Node-RED**. Má skvělou dokumentaci, podporu i velkou komunitu uživatelů. Funguje na principu **vizuálního programování**: na plochu přetahujete bloky, kterým se říká **uzly** (nodes), a jejich propojením **vytvoříte fungující aplikaci** (flow).
3. Smažte z plochy dva výchozí uzly.
4. Začněte uzlem **mqtt in**, který najdete vlevo v sekci **network**. Přetáhněte ho na plochu a dvakrát na něj klikněte.
5. Otevře se okno s nastavením uzlu. Vyplňte v něm pole **Topic**, které určuje, jaké zprávy bude tento flow přijímat.
6. Vraťte se v Playgroundu na záložku **Messages** a najděte zprávu s teplotou. Vedle hodnoty teploty uvidíte identifikátor zprávy, například `node/push-button:0/thermometer/0:1/temperature`. To je **topic**.
7. Zkopírujte tento topic, vraťte se na záložku **Functions**, vložte ho do pole **Topic** a klikněte na **Done**.
8. Teď přidejte uzel **gauge** ze sekce **dashboard**.
9. Dvojklikem otevřete jeho nastavení. V sekci **Range** změňte hodnotu **max** na **50** a klikněte na **Done**.
10. Oba uzly propojte. Stačí chytit myší šedý čtvereček jednoho uzlu a táhnout ho k druhému.
11. Kliknutím na **Deploy** vpravo nahoře aplikaci spustíte. Pak se v Playgroundu přepněte na záložku **Dashboard**.
12. Dýchněte na zařízení, aby hned poslalo zprávu o teplotě. Ukazatel zobrazí aktuální teplotu.

**Tip na další experiment:** Zkuste na dashboardu zobrazit i orientaci zařízení a počet stisknutí tlačítka. Možnosti Playgroundu jsou neomezené!
