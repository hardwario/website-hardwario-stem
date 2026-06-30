---
slug: appliance-control
title: Appliance Control
---

## Introduction

With the Control kit, you can use the integrated power relay (230V/16A) to control household appliances such as a lamp, fan, or even a water pump. You can also use the Control kit to manage a digital LED strip.

n this project, we’ll use the relay to control a desk lamp and display the surrounding temperature using a programmable LED strip. This setup is perfect for smart lighting at home, in the office, or even for a Christmas tree.

The kit includes 3 modules, a power adapter, a 3D-printed case, mounting rubber bands, and a 72-pixel LED strip.

**The kit does not include the Radio Dongle, which is required to create the network.**

Make sure you have everything needed for this project:

## Assemble the Kit


1. Attach the red **Core Module** to the yellow **Power Module**. To ensure proper alignment, one pin is missing and one hole in the connector is blocked. Be careful during assembly to avoid bending the pins. Bent pins can easily be straightened.
2. Attach the black Cover Module on top of the red **Core Module**.
3. Place the entire assembly **into the 3D-printed case** and secure it with rubber bands.
4. Connect the included **LED strip **to the **Power Module** connector located at the bottom of the case.
5. Prepare the **power adapter**, but do not plug it in yet.


## Start Your Own Radio Network

If you already have a **Radio Dongle** from another kit, you can skip this step.



1. Open the HARDWARIO Playground application on your computer. If you haven’t installed it yet, follow [this](https://docs.hardwario.com/tower/desktop-programming/playground-installation/#download) guide.
2. In Playground, open the **Devices** tab.
3. Plug your USB Radio Dongle into your computer. It will appear in the **Radio Dongle** dropdown at the top.
4. Click **Connect** to automatically start your radio network.

## Connect Your Control Kit

1. If you only have the Control kit and see a Push Button device in the device list (in Playground), you can delete it. If you also want to use other kits, do not delete anything.
2. In Playground, click the **Start pairing** button.
3. Take the Control kit connector and plug it into the case. Then connect the power adapter to an outlet.
4. Once paired successfully, a device named **Power Control** should appear in the list.

## Test the Communication

As mentioned earlier, the device can send more than just button press messages – it also sends data about temperature and orientation. Try the following to see what messages your device sends:

1. Open the Messages tab in Playground.
2. You’ll see a list of messages your button has sent through the Radio Dongle to your computer.
3. Press the button a few times and watch the press count increase.
4. Blow warm air onto the device – the temperature will rise and appear in the messages.
5. The last type of message is the orientation of the device. It works like a die (dice), try rotating it to find when positions 1, 2, 3...6 appear.

![Node-RED](./img/appliance-control/image3.png " Node-RED")

## Your First Project

In many tutorials, the first project is “Hello World!” Let’s do something more exciting – we’ll display temperature data on a graph!

1. Open the **Functions** tab in Playground.
2. This is an embedded **Node-RED** app. There’s great documentation, support, and a large user community. It’s based on **visual programming** – drag and drop functional blocks (called **nodes**) onto the workspace and connect them to create a working application (a flow).
3. Delete the two default nodes from the workspace.
4. Add a **mqtt in** node from the **network** section on the left. Drag it to the workspace and double-click it.
5. A configuration window will open. You need to fill in the **Topic** field, which determines what messages this flow will receive.
6. Go back to the **Messages** tab in Playground and find a temperature message. Next to the temperature value, you'll see an identifier like this: `node/push-button:0/thermometer/0:1/temperature` this is the **topic**.
7. Copy this topic, return to **Functions**, paste it into the **Topic** field, and click **Done**.
8. Now add a **Gauge** node from the **dashboard** section.
9. Double-click the Gauge node to configure it. In the ***Range*** section, change the **max** value to **50**, then click **Done**.
10. Connect both nodes. Simply click and drag from the gray square of one node to the other.
11. Click **Deploy** in the top-right corner to launch the application. Then switch to the **Dashboard** tab in Playground.
12. Blow on the device to trigger an immediate temperature update – you’ll see the current temperature in the graph.

**Tip for your next experiment:** Try displaying the device’s orientation and button press count on the dashboard too – the possibilities in Playground are endless!s