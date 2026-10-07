---
slug: bottle-party-game
title: Party draw game
---
import Image from '@theme/IdealImage';

## Introduction

Why play spin the bottle with a real bottle when a smart box will do?
Set up your Start Set to pick one member of your group at random, whether at a party, in a prize draw or when you need to decide who does the tidying up.

In this project, you will learn how to set up the box so that it **picks one member** of your group at random. 😱

You will need **the box with the button** and the **USB dongle**, so the basic HARDWARIO [Start Set](https://www.hardwario.store/p/start-set) is all you need.

## Make it happen in Node-RED

1. Assemble the Start Set and pair it. Upload the **twr-radio-move-detector-x-axis** firmware to the Core Module, so that the box reacts to movement.
2. In Playground, click the **Functions** tab, where you'll find the programming workspace.
3. Here we go. 🤞 Place an **mqtt in** node from the **network** section on the workspace.

Double-click the node to open it and set up the key function: the box reacting to movement.

**Copy this line into the Topic field**:

```
node/x-axis-detector:0/accelerometer/-/event-count
```

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-1.webp')} alt="Edit mqtt in node dialog with the accelerometer event-count topic filled into the highlighted Topic field"/> </div> </div>

Confirm with **Done**.

## Set up the random draw

1. You program the random draw with a little JavaScript. Don't worry, we'll help you. First, place a **function** node from the **function** section next to the MQTT node.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-2.webp')} alt="Function node highlighted in the palette and placed next to the accelerometer MQTT node"/> </div> </div>

2. Double-click the node to open it. In the **Name** field, give it a name (*for example, Random pick*). Copy this code into the **On Message** tab.
The code draws one of the participants, each with the same chance.

```
var rand = Math.floor(Math.random() * flow.get("numberOfContestants"));
msg.payload = flow.get("contestantArr")[rand];
return msg;
```

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-3.webp')} alt="Edit function node dialog named Random pick with the random-draw JavaScript on the On Message tab"/> </div> </div>

Confirm with **Done**.

3. Next to the Random pick node, add one more node: **delay** (you'll find it in the **function** section too). It holds the answer back for a moment and builds up the suspense. Boo! 😲

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-4.webp')} alt="Delay node highlighted in the palette, with a delay 5s node placed after the Random pick function"/> </div> </div>

4. To make the draw even more unpredictable, set a random delay in the node: click **random delay** and choose a time between **2 and 4 seconds**. That's just right to keep everyone on the edge of their seats.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-5.webp')} alt="Edit delay node dialog set to a random delay between 2 and 4 seconds"/> </div> </div>

Confirm with **Done**.

5. Above all these nodes, place a node that sets the message shown while the draw is running. Use a **change** node from the same section.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-6.webp')} alt="Change node highlighted in the palette, with a set msg.payload node placed above the draw flow"/> </div> </div>

6. Double-click the node to open it and type your message, for example: *Picking…*

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-7.webp')} alt="Edit change node dialog setting msg.payload to the text Picking..."/> </div> </div>

## Set up the participants

1. Your draw needs a button that clears the table, so you can keep playing. Below the **MQTT** node, place a **button** node, this time from the **dashboard** section.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-8.webp')} alt="Button node highlighted in the dashboard palette and placed below the MQTT node"/> </div> </div>

2. Double-click the node to open it and type *Reset* in the **Label** field.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-9.webp')} alt="Edit button node dialog with the Label field set to Reset"/> </div> </div>

Confirm with **Done**.

3. Let's keep going! Now set up all the friends who will play, anonymously for now. Add them to the workspace as **text input** nodes from the **dashboard** section, one node for each player.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-10.webp')} alt="Text input node highlighted in the palette, with five text input nodes placed on the canvas"/> </div> </div>

4. In each node, set:
   * In the **Label** field, type Participant 1, Participant 2 and so on, according to the number of players.
   * In the **Delay** field, enter 0.
   * **Uncheck** the box just below it, so that the fields really clear when you press Reset.

Set this up in every participant node.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-11.webp')} alt="Edit text input node dialog with Label Participant 2, Delay set to 0 and the pass-through box unchecked"/> </div> </div>

Confirm with **Done**.

5. Next to the participants, add some more JavaScript. It puts the participants' names in the right places. Again, you add it as a **function** node.
6. Double-click the node to open its settings. Type a name for the node in the **Name** field and copy this code into the **On Message** tab:

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
return msg;
```

Make sure the node really has just one output (the **Outputs** field on the **Setup** tab). ❗

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-12.webp')} alt="Edit function node dialog named Fate, choose one of them with the code that stores each participant"/> </div> </div>

Confirm with **Done**.

7. Don't worry, we're almost there. 🙌 Place a **change** node on the workspace. It puts everything back the way it was when you reset the game. 🖖

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-13.webp')} alt="Second set msg.payload change node highlighted below the participant nodes"/> </div> </div>

8. In this node's settings, fill in two **Rules** as shown in the picture. The first one is **Delete | flow | contestantArr**. You add the next rule with the small **+ Add** button below the field. In this second rule, set **Delete | flow | numberOfContestants**.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-14.webp')} alt="Edit change node dialog with two Delete rules clearing contestantArr and numberOfContestants"/> </div> </div>

Confirm with **Done**.

## Only one can be chosen

1. Place the last node on the workspace. It announces who has been chosen. 🙏 You'll find it simply as the **text** node in the **dashboard** section.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-15.webp')} alt="Text node highlighted in the dashboard palette and placed at the end of the flow"/> </div> </div>

2. In the node's **Label** field, set how the message about the randomly chosen participant will look.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-16.webp')} alt="Edit text node dialog with the Label set to And fate chooses..."/> </div> </div>

Confirm with **Done**.

3. Then **wire everything up neatly**. In the upper part, connect the nodes that run the draw; in the lower part, the ones that make up the draw table.

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-17.webp')} alt="Finished flow with the draw and participant nodes wired together and the Deploy button highlighted"/> </div> </div>

4. Don't forget to click the **Deploy** button in the top right corner! 🚨

## Let the fun begin!

1. Now for the fun part! In the **Dashboard** tab, enter the names of all participants. If you haven't set an automatic refresh in the participant nodes, remember to press Enter after each name. Then move the box and the draw begins. 👈

<div class="container"> <div class="row"> <Image img={require('./img/bottle-party-game/bottle-party-game-18.webp')} alt="Dashboard with the Reset button, five participant name fields and the drawn name shown below"/> </div> </div>

2. **Who has fate chosen**? And what for? That's entirely up to you. 😈

You can, for example:

* draw who kisses whom (woohoo),
* pull the shortest straw to decide who takes out the trash,
* pick the winner of a competition,
* hand out crazy tasks at random,
* and anything else you can think of!
