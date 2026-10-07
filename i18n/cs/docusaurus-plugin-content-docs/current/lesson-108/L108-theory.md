---
slug: iot-pulse-monitor-theory
title: Teorie
title_meta: "Teorie (L108: IoT čítač impulzů)"
---
import Image from '@theme/IdealImage';

**Časová dotace**: 10 min.

## Měření spotřeby energií

Trendem dnešní doby je snaha co nejvíce snížit spotřebu elektrické energie, plynu nebo vody. Díky **IoT** lze spotřebu energií sledovat a regulovat online.


## Měření spotřeby elektrické energie

Elektrický proud lze měřit dvěma základními metodami:

1. **Přímé měření**: [ampérmetrem](https://cs.wikipedia.org/wiki/Amp%C3%A9rmetr), který měří velikost elektrického proudu v obvodu.
2. **Nepřímé měření**: neměří se přímo elektrický proud, ale jiná fyzikální veličina, ze které lze proud a spotřebu dopočítat.

### Možnosti nepřímého měření elektrického proudu:
- Proudový [transformátor](https://cs.wikipedia.org/wiki/Transform%C3%A1tor)  
- [Hallova sonda](https://cs.wikipedia.org/wiki/Hallova_sonda)
- Výstupy elektroměru (magnetický, LES, S0, Modbus)


## Monitoring impulzů

Spotřebu lze online sledovat také tak, že se **napojíme na elektroměry, plynoměry nebo vodoměry** a přenášíme počet impulzů, které tato měřidla generují podle spotřeby daného média.

### Pro monitoring impulzů se nejčastěji používají tyto senzory:

- **LED senzor**: snímá impulzy LED na měřidle, která blikáním indikuje spotřebu  
- **Magnetický senzor**: snímá impulzy, které vznikají každým otočením magnetu umístěného na jednotkovém ciferníku


<div class="container">
  <div class="row">
    <Image img={require('./pulse-cabel.avif')} alt="Impulzní senzor na dlouhém šedém kabelu zakončeném holými vodiči se svorkou"/>
  </div>
</div>


