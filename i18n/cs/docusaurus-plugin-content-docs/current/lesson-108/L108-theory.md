---
slug: iot-pulse-monitor-theory
title: Teorie
---
import Image from '@theme/IdealImage';

**Časová dotace:** 10 min.

## Měření spotřeby energií

Trendem dnešní doby je snaha co nejvíce snížit spotřebu elektrické energie, plynu nebo vody. **IoT** přináší možnost online sledovat a regulovat spotřebu energií.


## Měření spotřeby elektrické energie

Elektrický proud lze měřit pomocí dvou základních metod:

1. **Přímé měření** – [ampérmetrem](https://cs.wikipedia.org/wiki/Amp%C3%A9rmetr), který měří velikost elektrického proudu v obvodu.
2. **Nepřímé měření** – neměří se přímo elektrický proud, ale jiná fyzikální veličina, díky které lze hodnotu proudu a spotřeby dopočítat.

### Možnosti nepřímého měření elektrického proudu:
- Proudový [transformátor](https://cs.wikipedia.org/wiki/Transform%C3%A1tor)  
- [Hallova sonda ](https://cs.wikipedia.org/wiki/Hallova_sonda) 
- Výstupy elektroměru (magnetický, LES, S0, Modbus)


## Monitoring impulzů

Jedním ze způsobů online monitoringu spotřeby je **napojení na elektroměry/plynoměry/vodoměry** a přenos počtu impulsů, které tyto měřiče generují v závislosti na spotřebě daného média.

### Pro monitoring impulzů se nejčastěji používají tyto senzory:

- **LED senzor** – snímá impulzy LED na měřidle, které blikáním indikují spotřebu  
- **Magnetický senzor** – snímá impulzy, které vznikají každým otočením magnetu umístěného na jednotkovém ciferníku


<div class="container">
  <div class="row">
    <Image img={require('./pulse-cabel.avif')}/>
  </div>
</div>


