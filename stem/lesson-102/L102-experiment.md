---
slug: hardwario-tower-iot-kit-experiment
title: Experiment
---
import Image from '@theme/IdealImage';

**Time allocation**: 10 min.

## Experiment 1 - Building TOWER kits

**Time allocation**: 5 min.

### Experiment description

Several teams of students will use the HARDWARIO kit to build sample sets. A list of these is available in the [online store](https://www.hardwario.store/tower).

## Experiment 2 - Creating flow in Playground

**Time allocation**: 5 min.

### Experiment description

In Playground, we will create a flow pattern showing the weight of the students.

#### Experiment procedure

1. Download and install the Playground app on your computer
2. In the Functions tab, create a new flow:
    a. insert mqtt in (double-click on the bubble and fill in topic cesko/city/name/weight + confirm Done)
    b. insert dashboard text (double click on the bubble to change Label to weight + confirm Done)
    c. connect the bubbles with a string
    d. confirm Deploy
3. In the Messages tab, subscribe to messages cesko/# (note - first delete the bridge/# cross)
4. Send a message with your token and payload - weight in kg
5. Go to the Dashboard tab and you should see your weight

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