---
slug: node-red-and-start-set
title: Node-RED and the Start set
---
## Introduction

Node-RED is a simple yet powerful tool, and now we will show how to create a basic dashboard to display information about the number of button presses, temperature, and tilt status.

## How many times have I pressed the button?

To display the button press count, we first need to retrieve that value.

1. If you haven't already, start **HARDWARIO Playground**. From the previous tutorial, we know that data appears in **Messages**, and if you click on the line with the topic `node/motion-detector:0/push-button/-/event-count`, it gets copied to the clipboard, which is confirmed by a pop-up info panel.

> If you have multiple **Push Button** modules paired, they will differ by the number after \`motion-detector:\`

2. Now go to **Functions**. This is the embedded **Node-RED** application. It has excellent documentation, support, and a large user community. It works on the principle of **visual programming** – you add functional blocks (called **nodes**) to the canvas and by connecting them, **you create a functional application** (flow).
3. Delete the two nodes that are already on the canvas.
4. Start by adding an **mqtt in** node. You can find it in the **network** section on the left. Drag it onto the canvas.

![Run it in Node-RED](./img/node-red-and-start-set/image3.png "Run it in Node-RED")

5. Double-click it to open its settings window, where you need to fill in the **topic** field. This determines which messages we want to receive in this flow.
6. Go back to the **Messages** tab in Playground and find the message with the temperature. Besides the temperature value, you’ll also see the message ID, which looks like this: `node/push-button:0/thermometer/0:1/temperature` – this is the **topic**.
7. Copy this topic, go back to the **Functions** section, paste it into the **Topic** field, and save the settings by clicking **Done**.
8. Now drag a **Gauge** node onto the canvas – you’ll find it in the **dashboard** section.
9. Double-click it to open its settings. Change the **max** value in the **Range** section to **50**. Save the settings by clicking **Done**.
10. Connect the two nodes. It’s easy – just click the gray square of one node and drag it to the gray square of the other node.
11. Click the **Deploy** button in the top right to start the application, then switch to the **Dashboard** tab in Playground.
12. Blow on the device to trigger an immediate temperature message – and voilà! You'll see the current temperature in the graph.