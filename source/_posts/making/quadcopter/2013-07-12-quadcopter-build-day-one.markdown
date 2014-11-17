---
title: Quadcopter Build Day One
summary: A log of what was done during day one.
date: 2013-07-12 18:00
parts: QUADCOPTER_MARK_ONE
tags:
  - make
  - qcmk1
  - quadcopter
---

## Controller Setup

### Transmitter Configuration

The first order of business is the bind the receiver to the transmitter and configure the transmitter for . This is
necessary since you don't want stray transmitters to be able to control your quadcopter. I found a pretty
[good guide](http://blogs.hari.us/archive/2009/11/01/working-with-hobby-king-2.4ghz-6ch-tx-rx.aspx) for the Hobby
King transmitter that I have.

I ended up using t6config because turborix didn't work correctly on my computer.

The settings that I used are as follows for the different sections:

#### Endpoint

* CH1-4 on the left and right, enter 120%
* CH5-6 on the left and right, enter 100%

#### Reverse

* Check **NOR** for Channel 1

#### SubTrim

* CH1-6 set to Zero (0)

#### DR

* CH1 and CH2 on at 100, off at 65
* CH4 100 for both on and off

#### Mode

Pick model 2 because that's the appropriate one for the hobby king controller that I'm using.

#### Type

For type, pick **ACRO** because it provides the correct signals to the flight controller.

#### MIX

MIX 1 should be set as follows:

* Source = VR A
* Des = CH5
* Up Rate = 100%
* Down Rate = 100%
* Switch = ON

MIX 2 should be set as follows:

* Source = VR B
* Des = CH6
* Up Rate = 100%
* Down Rate = 100%
* Switch = ON

MIX 3 should be set as follows:

* Source = CH1
* Des = CH1
* Up Rate = 100%
* Down Rate = 100%
* Switch = ON

#### Switches (Switch and VR)

* Switch A = Throcut
* Switch B = DR
* both VR = NULL

Then press GetUser and your transmitter should be ready to go.

### Binding

I bound the receiver and then hooked up a servo to test the transmitter and receiver pairing. The process is pretty
braindead simple.  The receiver comes with a plug that is a loop from signal to ground (outer pins). Find that and
follow this procedure.

1. Insert binding plug into BATT
2. Insert ESC into CH3
3. Apply Power to ESC normally
4. Observe led blinking on receiver
5. Hold "Bind Range Test" button down on the transmitter
6. Observe led steady glow

That's it. Simple.

### Programming the ESCs

You need to program the ESC, so we have a programming card.  They are programmed using the single 3-pin wire with
Red-Black-White.  Plug this into the programming card, and apply power to the ESC.  Follow the instructions
but basically:

* Turn off bracking
* Power cut off to slow
* Everything else left at default

One thing you will have is the ability to select a song that it plays when you arm the flight controller.  It's cute,
so I did "End of the World".

### Summary

We did a little mechanics getting it together, but we ran out of time and I forgot to take pictures, so I'm going to
finish up building it out and testing it on my own so that I can provide guidance when everyone else do their build.
I did take some *shitty iphone* pictures tonight once I got home, which are available below.  I'll take better ones
once the quad is finished.
