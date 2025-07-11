---
slug: bottle-party-game
title: Bottle party game
---

## Introduction


Why play Spin the Bottle with a bottle if all you need is a smart box?  Set your Start Set to draw a random member of your group. Whether it be at a party, while drawing a winner or deciding who will clean up.

In this project, you will learn how to set up the box so it **draws a random member** of your group. 😱

You will need **the box with the button** and the **USB dongle**. All you need is a basic HARDWARIO kit, the [**Start Set**](https://www.hardwario.store/p/start-set).


## Get it started in the Node-RED

1. Start Set put together and pair.
2. In the Playground, click on the **Functions tab** where the programming desktop is located.
3. Let’s make it happen. 🤞 Place the **MQTT** node from the Input section in the desktop.

Double click on the node and set the key feature - clicking the button. **Copy the following line into the Topic field**:

```
node/x-axis-detector:0/accelerometer/-/event-count
```

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image18.png "MQTT topic")

Confirm it with the **Done** button.

## Set up a random option

1. You can programme a random option following a simple javascript. But don’t worry, we’ll help you. First, place the **Function node** from the Function section next to the MQTT.


![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image5.png "Node-RED function node")

2. Double click on the node to open it. In the **Name** line, name the node (for example, Random option). In the **Function** line, copy this code exactly as you see it in the picture. With this code, one of the participants will be drawn.


```
var rand = Math.round( Math.random() * (flow.get("numberOfContestants") - 1));
msg.payload = flow.get("contestantArr")[rand];
return msg;
```

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image9.png "Node-RED Random")

Confirm it with the **Done** button.

3. Add another node next to the Random option, the **Delay** one (also found in the Function section). Thanks to this node, the response will be delayed a little and it will create an atmosphere of tension. Boo! 😲

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image14.png "Node-RED delay")

4. Inside the node, make it even more random, set up a **random delay**. Click on random delay and select a time between **2 and 4 seconds**. That should be just right for keeping the tension in the air.

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image3.png "Node-RED random delay")

Confirm it with the **Done** button.

5. Above all this, place a node that will set up a message that shows up when the box is busy picking. Use the **Change node** from the same section to do it.

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image1.png "Node-RED change node")

6. Open the node with a double-click and type here your message. For example, _Picking_...

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image4.png "Node-RED - HARDWARIO playground")

## Set the participants

1. Your lottery won’t do without a table reset button. You need it to continue playing. Under the MQTT place the **Button node**, this time from the Dashboard section.

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image17.png "Node-RED dashboard button")

2. Double click on the node and in the **Label** line, name it _Reset_.

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image13.png "HARDWARIO Playground dashboard button")

Confirm it with the **Done** button.

3. We are moving on. Now set all your buddies who will take part in the game. Anonymously, for now. Place them on the desktop using the **Text input** node in the Dashboard section. As many pieces as many you are.

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image10.png "Node-RED text input")

4. Within each node, rewrite the **Label** line to Participant + a number from one to as many as you are. So it will go Participant 1, Participant 2… you know the rest.
   In the **Delay** field, fill in the number 0.
   **Uncheck** the box just bellow it to really reset the fields after the reset.
   Do all this with all nodes with participants.

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image6.png "HARDWARIO Playground function")

Confirm it with the **Done** button.

5. Set up another javascript next to the participants. This javascript assigns the names of the participants to the corresponding place. Again, you will insert it as a **Function** node.

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image19.png "HARDWARIO Playground function")

6. Double-click on the node to open its settings. In the **Label** line, fill in the name of the node and copy this code into the **Function** field:


```
var contestants = flow.get("numberOfContestants") || 0;
var contestantArray = flow.get("contestantArr") || [msg.payload];
contestants++;
flow.set("numberOfContestants", contestants);

if(contestants != 1)
{
    contestantArray.push(msg.payload);
}

flow.set("contestantArr", contestantArray);
```

Make sure the **Output** is really just one. ❗

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image7.png "Node-RED function node")

Confirm it with the **Done** button.

7. Don’t worry, we are almost finished. 🙌 Place the **Change** node on the desktop. This will ensure that everything gets restored to its original state when resetting.🖖

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image11.png "Node-RED change payload")

8. In this node’s settings, fill in two **Rules** as you can see in the picture. The first one is **Delete | flow | ContestantArr**. To add another rule, click on the small **+Add** button below the field. In this Rule, set **Delete | flow | numberOfContestants.**

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image2.png "Node-RED rules")

Confirm it with the **Done** button.

## Only one can be selected

1. Put the last node behind all this on the desktop. It will tell everyone who has been chosen. 🙏 You can find it simply as **Text** node in the Dashboard section.

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image16.png "Node-RED dashboard text")

2. In the **Label** line inside the node, set how the message will look like when randomly selecting one participant.

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image12.png "Text label in dashboard Node-RED")

Confirm it with the **Done** button.

3. And then **put it all beautifully together**. In the upper part, connect all the nodes that ensure the draw, in the lower part, connect the ones that form the draw table.

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image15.png "HARDWARIO Playground connect nodes in Node-RED")

4. Don’t forget to click on the **Deploy** button in the top right corner! 🚨

## Let the fun begin!

1. And now, let’s get down to business! In the **Dashboard** tab, enter the names of all participants. If you haven’t selected the auto-refresh time period in the nodes for each participant, be sure to press **Enter** after each name. 👈

![MQTT topic](https://res.cloudinary.com/lukasfabik/image/upload/v1566149308/projects/bottle-party-game/image8.png "show dashboard Node-RED / HARDWARIO Playground")

2. **Who was chosen by fate**? And what for? It’s only up to you now. 😈
   You can, for example:

* draw who gives a kiss to whom (woohoo),
* pull the shortest match for the one who takes out the trash,
* draw the winner of a competition,
* assign crazy tasks chosen by chance,
* and anything else that crosses your mind!
