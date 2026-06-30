---
slug: iot-pulse-monitor-theory
title: Teorie
---
import Image from '@theme/IdealImage';

**Time allocation:** 10 min.

## Energy Consumption Monitoring

A major trend today is the effort to minimize the consumption of electricity, gas, or water. The **Internet of Things (IoT)** enables real-time monitoring and regulation of energy usage.

## Monitoring Electricity Consumption

Electric current can be measured using two basic methods:

1. **Direct Measurement** – using an [ammeter](https://en.wikipedia.org/wiki/Ammeter), which measures the magnitude of electric current in a circuit.
2. **Indirect Measurement** – the electric current is not measured directly, but instead another physical quantity is measured, from which the current and consumption values can be calculated.

### Options for Indirect Measurement of Electric Current:

* [Current transformer](https://en.wikipedia.org/wiki/Current_transformer)
* [Hall sensor](https://en.wikipedia.org/wiki/Hall_effect_sensor)
* Electricity meter outputs (magnetic, LES, S0, Modbus)

## Pulse monitoring

One of the ways to monitor consumption online is by connecting to **electricity/gas/water meters** and transmitting the number of pulses these meters generate depending on the consumption of the respective medium.

### The most commonly used sensors for pulse monitoring are:

* **LED sensor** – detects LED pulses on the meter, which blink to indicate consumption
* **Magnetic sensor** – detects pulses generated with each rotation of a magnet placed on the unit dial

<div class="container">
  <div class="row">
    <Image img={require('./pulse-cabel.avif')}/>
  </div>
</div>



