---
title: Laundry Ambient Indicator
category: make
date: 2013-08-05
tags:
  - make
  - laundry
  - arduino
  - raspberry pi
parts: LaundryLight
---

Over the weekend, I put together something to help us out in our daily life.  We both have a bad habit of
putting laundry on the wash and then forgetting that we did because our washer is tucked away, and hard to hear, and
we are just plain forgetful, so Cord had the idea of a light that reminds us, that we can't ignore, that the laundry
is in the wash.

Since we generally keep the lid open when there isn't laundry in the wash, a detector that can tell if the lid is up
or down is perfect, so that's what I built.

#### Parts List:

* Arduino (Uno)
* Raspberry Pi (Model B)
* Generic USB Wifi adapter
* Optek 704WZ
* A couple of resistors (one each: 10K and 470)
* A Belkin WeMo Switch

### Source Code

You can download the [laundry server source code][] from the git repository on bitbucket.

It's a python script that uses firmata to communicate with the arduino.  To run it, just type the following after
installing dependencies:

    > python server.py

This will start the server and drop you into a repl that allows you to do a few things, like set the open and close
points, and turn on debugging to watch the stream of data coming in from the arduino.

You will need my version of [pyFirmata][] to be able to use the callback system that I added to the pin objects.

The code is slightly overengineered, but I tend to do that anyway. It is basically a server that uses a lazy pirate zmq req/res message system to connect the repl to the server. Commands are defined in a json file so that they can be easily hydrated into functions inside of the repl, and easily serialize into a json string for sending over the repl.

I could have used a REST api, but meh, I like zeromq so I tend to use it.

### Hardware Build

The circuit for connecting the optek optical switch to the arduino is pretty simple, and can be seen in the following
schematic:

![schematic][schematic]

Once I figured out where things were needed, I made a simple breadboard prototype using a prototyping shield for the arduino

![prototype][prototype]

Since there are very few parts, I just did a free form soldering job, which was laid out like the following diagram
explains:

![connection][connection]

*One small correction on both of these, where I say red, I really mean orange because the wire ended up being orange
when I looked at it in the real light*

I made the connection out of a double row of header pins that just fit right into the arduino.  I only had
double rows, otherwise, I would have just used a single set of pins.  I keyed it by removing some pins, and formed it
together.

Once soldered, it looked like the following, but please excuse the messy soldering job.  I've always sucked at soldering:

![freeform][freeform]

Notice the removed pins. These connectors go onto the side of the board with power, ground, and the analog signals. Since the optek component gives you voltage fluctuations that are not within logic high/logic low levels for the arduino, you need to read it as an analog signal.

Plugged into the arduino, it looks like this:

![onarduino][onarduino]
 
Now that everything works, it was time to case it, mount it, and tune it for it's real world application, Stay tuned for the next installment

[laundry server source code]: https://bitbucket.org/russellhay/laundry
[pyFirmata]: https://github.com/RussTheAerialist/pyFirmata
[schematic]: /static/images/making/laundry/optoswitch_schematic.png "Schematic Drawing"
[prototype]: /thumbnails/breadboard_page.jpg "Breadboard"
[connection]: /static/images/making/laundry/laundryfreeform.png "Free-Form Layout"
[freeform]: /thumbnails/freeform_page.jpg "Free-Form Soldering Job"
[onarduino]: /thumbnails/onArduino_page.jpg "Connector plugged into the arduino"
