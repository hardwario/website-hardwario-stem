---
slug: iot-soil-monitor-theory
title: Teorie
---
import Image from '@theme/IdealImage';

**Časová dotace**: 10 mins

## Monitoring půdy

### Co je to sucho

Sucho je obtížné definovat, protože jeho význam se liší v závislosti na regionu. Například na Bali je za sucho považováno období šesti dnů bez deště, zatímco v pouštních oblastech je samozřejmě tento pojem chápán zcela odlišně. Obecně řečeno, sucho nastává tehdy, když dochází k nedostatku srážek po delší dobu, což vede k nedostatku vody pro určitou činnost, skupinu lidí nebo životní prostředí.

Sucha se dělí na čtyři typy:

* **Meteorologické** – záporná odchylka srážek od normálu za určité období
* **Zemědělské** – půdní sucho, tedy nedostatek vlhkosti pro plodiny 
* **Hydrologické** – významný pokles hladin povrchových nebo podzemních vod
* **Socioekonomické** – dopady sucha na kvalitu života a hospodářství

Na druhou stranu i příliš vysoká vlhkost půdy může způsobovat problémy. Například podmáčená půda komplikuje zemědělské práce při setí nebo sklizni. Proto je důležité půdu sledovat – především její vlhkost. Díky IoT monitoringu můžeme například přesněji zavlažovat, zvýšit výnosy a zároveň šetřit vodou.

### Vodní potenciál půdy

Dostupnost vody pro rostliny je určena tzv. vodním potenciálem půdy. Přesněji řečeno jde o sílu, kterou musí rostlina překonat, aby získala vodu z půdy, a zároveň o sílu, která určuje rozdělení vlhkosti a pohyb roztoků v půdním prostředí.

Hodnota vodního potenciálu se obvykle udává jako záporný tlak. Například:

0 MPa – plná vodní kapacita, všechny póry jsou zaplněné vodou, rostlina má problém s příjmem kyslíku
-0,005 až -0,015 MPa - polní vodní kapacita, voda je v kapilárních pórech, rostlina má dostatek vody i vzduchu
-1,5 MPa – bod vadnutí, kdy transpirace převyšuje příjem vody a rostlina vadne

### Jak se půda monitoruje

Běžnou metodou měření vlhkosti půdy je rezistivní metoda. Takový senzor funguje na jednoduchém principu – měří vodivost mezi dvěma elektrodami. Pokud je půda vlhká, vodivost je vyšší (odpor nižší), a naopak. Elektrody jsou proto pokoveny na větší ploše, aby se zvýšil kontaktní povrch. Nevýhodou této metody je však oxidace elektrod, která může měření ovlivnit.

Z tohoto důvodu je vhodnější kapacitní metoda. Ta funguje na podobném principu jako dotykové displeje chytrých telefonů – prst změní dielektrické vlastnosti skla při dotyku. Ve stručnosti – dielektrikum je materiál a prostředí okolo elektrod. Voda zásadně mění dielektrické vlastnosti, když se dostane mezi elektrody. Jinými slovy: Dvě kovové elektrody mají jinou kapacitu, když je mezi nimi vzduch, a jinou, když je tam voda. Stejně to funguje, když elektrody vložíte do suché vs. mokré půdy.

V HARDWARIO jsme vyvinuli plně digitální Soil Sensor s širokým rozsahem napájení od 2,8 V do 5,5 V (kompatibilní s Arduino). Využívá průmyslově standardní sběrnici 1-Wire a umožňuje připojit více senzorů paralelně – jejich počet je prakticky neomezený. Je zcela zalitý silikonem a samozřejmě jej lze ponořit do vody. A právě s tímto senzorem budeme v našem experimentu pracovat.