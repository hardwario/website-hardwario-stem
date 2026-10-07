---
slug: iot-pulse-monitor-theory
title: Theory
title_meta: "Theory (L108: IoT Pulse Monitor)"
---
import Image from '@theme/IdealImage';

**Time allocation**: 10 min.

## Measuring energy consumption

Today there is a strong drive to cut the consumption of electricity, gas and water as far as possible. With **IoT**, energy consumption can be monitored and regulated online.

## Measuring electricity consumption

Electric current can be measured in two basic ways:

1. **Direct measurement**: with an [ammeter](https://en.wikipedia.org/wiki/Ammeter), which measures the electric current flowing in a circuit.
2. **Indirect measurement**: instead of the current itself, another physical quantity is measured, and the current and consumption are calculated from it.

### Ways to measure electric current indirectly:

* [Current transformer](https://en.wikipedia.org/wiki/Current_transformer)
* [Hall sensor](https://en.wikipedia.org/wiki/Hall_effect_sensor)
* Electricity meter outputs (magnetic, LED, S0, Modbus)

## Pulse monitoring

Another way to monitor consumption online is to **connect to electricity, gas or water meters** and transmit the number of pulses these meters generate as the medium is consumed.

### The sensors most often used for pulse monitoring:

* **LED sensor**: picks up the pulses of the LED on the meter, which blinks to show consumption
* **Magnetic sensor**: picks up the pulses created each time a magnet on the meter's units dial turns

<div class="container">
  <div class="row">
    <Image img={require('./pulse-cabel.avif')} alt="Pulse sensor probe on a long grey cable ending in bare wires with a terminal connector"/>
  </div>
</div>
