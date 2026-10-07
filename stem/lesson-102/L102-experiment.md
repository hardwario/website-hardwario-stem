---
slug: hardwario-tower-iot-kit-experiment
title: Experiment
title_meta: "Experiment (L102: HARDWARIO TOWER IoT Kit)"
---
import Image from '@theme/IdealImage';

**Time allocation**: 10 min.

## Experiment 1: Building TOWER assemblies

**Time allocation**: 5 min.

### Experiment Description

Several teams of students use the HARDWARIO kit to build sample assemblies. You will find an overview of them in the [store](https://www.hardwario.store/tower).

## Experiment 2: Creating a flow in Playground

**Time allocation**: 5 min.

### Experiment Description

In the Playground app, we will create a sample flow that displays the students' weight.

#### Experiment procedure

1. Download the Playground app and install it on your computer
2. On the **Functions** tab, create a new flow:

    a. add an **mqtt in** node (double-click it to open it, enter cesko/city/name/weight in the **Topic** field and confirm with **Done**)

    b. add a **text** node from the dashboard section (double-click it to open it, change the **Label** to weight and confirm with **Done**)
    
    c. connect the two nodes with a wire

    d. click **Deploy**
3. On the **Messages** tab, subscribe to the messages cesko/# (note: first remove bridge/# by clicking its cross)
4. Send a message with your topic and a payload containing your weight in kg
5. Go to the **Dashboard** tab, where you will see your weight

<div class="container">
  <div class="row">
    <Image img={require('./tower-experiment-1.avif')} alt="Editing the mqtt in node in Playground: weight topic filled in and wired to a dashboard text node"/>
  </div>
</div>

<div class="container">
  <div class="row">
    <Image img={require('./tower-experiment-2.webp')} alt="Playground Messages tab publishing a weight value to the topic, with cesko/# among subscribed topics"/>
  </div>
</div>
