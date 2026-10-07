---
slug: hardwario-tower-iot-kit-experiment
title: Experiment
title_meta: "Experiment (L102: IoT stavebnice HARDWARIO TOWER)"
---
import Image from '@theme/IdealImage';

**Časová dotace**: 10 min. 

## Experiment 1 - Stavíme si sestavy TOWER

**Časová dotace**: 5 min. 

### Popis experimentu

Několik týmů studentů postaví ze stavebnice HARDWARIO vzorové sestavy. Jejich přehled najdete v [e-shopu](https://www.hardwario.store/cz/tower).

## Experiment 2 - Tvoříme flow v aplikaci Playground

**Časová dotace**: 5 min. 

### Popis experimentu

V aplikaci Playground vytvoříme vzorový flow, který zobrazí váhu studentů.

#### Postup experimentu

1. Stáhněte si aplikaci Playground a nainstalujte ji do počítače
2. Na záložce **Functions** vytvořte nový flow:

    a. vložte uzel **mqtt in** (dvojklikem ho otevřete, do pole **Topic** vyplňte cesko/mesto/jmeno/vaha a potvrďte **Done**)

    b. vložte uzel **text** ze sekce dashboard (dvojklikem ho otevřete, **Label** změňte na váha a potvrďte **Done**)
    
    c. propojte oba uzly spojnicí

    d. klikněte na **Deploy**
3. Na záložce **Messages** se přihlaste k odběru zpráv cesko/# (pozor: nejdříve křížkem odeberte bridge/#)
4. Pošlete zprávu se svým topicem a payloadem, kterým je vaše váha v kg
5. Přejděte na záložku **Dashboard**, kde uvidíte svou váhu

<div class="container">
  <div class="row">
    <Image img={require('./tower-experiment-1.avif')} alt="Úprava uzlu mqtt in v Playgroundu: vyplněný topic váhy propojený s textovým uzlem dashboardu"/>
  </div>
</div>

<div class="container">
  <div class="row">
    <Image img={require('./tower-experiment-2.webp')} alt="Záložka Messages v Playgroundu: publikování hodnoty váhy do topicu a odběr cesko/#"/>
  </div>
</div>