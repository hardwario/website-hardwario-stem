---
slug: iot-soil-monitor-theory
title: Teorie
title_meta: "Teorie (L109: IoT monitor půdy)"
---
import Image from '@theme/IdealImage';

**Časová dotace**: 10 min.

## Monitoring půdy

### Co je to sucho

Sucho je obtížné definovat, protože jeho význam se liší v závislosti na regionu. Například na Bali se za sucho považuje období šesti dní bez deště, zatímco v pouštních oblastech se tento pojem chápe samozřejmě úplně jinak. Obecně řečeno, sucho nastává tehdy, když se delší dobu nedostává srážek a pro určitou činnost, skupinu lidí nebo životní prostředí pak chybí voda.

Rozlišujeme čtyři typy sucha:

* **Meteorologické**: záporná odchylka srážek od normálu za určité období
* **Zemědělské**: půdní sucho, tedy nedostatek vlhkosti pro plodiny 
* **Hydrologické**: významný pokles hladin povrchových nebo podzemních vod
* **Socioekonomické**: dopady sucha na kvalitu života a hospodářství

Na druhou stranu i příliš vysoká vlhkost půdy může způsobovat problémy. Například podmáčená půda komplikuje zemědělské práce při setí nebo sklizni. Proto je důležité půdu sledovat, především její vlhkost. Díky IoT monitoringu můžeme například přesněji zavlažovat, zvýšit výnosy a zároveň šetřit vodou.

### Vodní potenciál půdy

Dostupnost vody pro rostliny určuje tzv. vodní potenciál půdy. Přesněji řečeno jde o sílu, kterou musí rostlina překonat, aby získala vodu z půdy, a zároveň o sílu, která určuje rozdělení vlhkosti a pohyb roztoků v půdním prostředí.

Hodnota vodního potenciálu se obvykle udává jako záporný tlak. Například:

* **0 MPa**: plná vodní kapacita, všechny póry jsou zaplněné vodou a rostlina má problém s příjmem kyslíku
* **-0,005 až -0,015 MPa**: polní vodní kapacita, voda je v kapilárních pórech a rostlina má dostatek vody i vzduchu
* **-1,5 MPa**: bod vadnutí, kdy transpirace převyšuje příjem vody a rostlina vadne

### Jak se půda monitoruje

Vlhkost půdy se běžně měří rezistivní metodou. Senzor funguje na jednoduchém principu: měří vodivost mezi dvěma elektrodami. Ve vlhké půdě je vodivost vyšší (odpor nižší), v suché naopak nižší. Elektrody jsou pokovené na větší ploše, aby byla styčná plocha s půdou co největší. Nevýhodou této metody je oxidace elektrod, která může měření ovlivnit.

Proto je vhodnější kapacitní metoda. Funguje na podobném principu jako dotykové displeje chytrých telefonů: prst při dotyku změní dielektrické vlastnosti skla. Stručně řečeno, dielektrikum je materiál a prostředí okolo elektrod. Voda zásadně mění dielektrické vlastnosti, když se dostane mezi elektrody. Jinými slovy: dvě kovové elektrody mají jinou kapacitu, když je mezi nimi vzduch, a jinou, když je tam voda. Stejně to funguje, když elektrody vložíte do suché a do mokré půdy.

V HARDWARIO jsme vyvinuli plně digitální půdní senzor Soil Sensor se širokým rozsahem napájecího napětí od 2,8 V do 5,5 V (kompatibilní s Arduinem). Komunikuje po průmyslově standardní sběrnici 1-Wire, na kterou lze paralelně připojit více senzorů; jejich počet je prakticky neomezený. Je celý zalitý silikonem, takže ho samozřejmě lze ponořit do vody. Právě s tímto senzorem budeme v experimentu pracovat.