---
title: Methane Sensor parts have arrived
tags:
  - make
  - arduino
  - gas sensor
  - methane
aliases:
  - "/make/methane-sensor-parts-have-arrived"
date: 2014-04-09
---

A while ago I bought this [Methane sensor](https://www.sparkfun.com/products/9404) on a whim because it could be used for something interesting, and now comes the interesting.

We have a tiki mask in the bathroom as part of our decorations for that room, so I thought, "wouldn't it be great if when it got really stinky in the bathroom, the tiki mask eyes glowed red, or flashed or something".

So spawned the Tiki Mask of Fart Detection.

It took me a while to get things going, reading up, delaying soldering the pins on, you know, the usual procrastination on my electronics projects, but I've finally decided to move forward with this project, and I was only missing a 10k resistor.  Well, after more delays, I finally ordered the spark fun resistor pack (because who couldn't use 100+ resisters for $3) and it came in today.

I'm going to finish putting it together on a breadboard, and have it connected to the raspberry pi to collect data about methane levels so I can calibrate what level means "turn the lights red".  I have two neopixels left over from my hoodie project, so I'm going to use those, and will probably 3d print something for them to stick into to give a slightly wider area of light for the tiki mask eyes.

Here is the current code which just outputs the levels as hex values over the usb-serial connection.

    #!C
    int last_read;

    void setup() {
        Serial.begin(115200);
        pinMode(A0, INPUT);
        pinMode(13, OUTPUT);

    }

    void loop() {
        digitalWrite(13, HIGH);
        last_read = analogRead(A0);
        Serial.println(last_read, HEX);
        delay(1000);
        digitalWrite(13, LOW);
        delay(250);

    }
