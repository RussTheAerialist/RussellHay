---
title: "imuduino + Three.js + node = awesome"
author: Russell Hay
date: 2015-06-13
video: LuwXq0XLCk0
videotype: youtube
tags:
  - code
  - node
  - hardware
  - imuduino
  - arduino
  - javascript
---

*This article was originally published on the [femto.io](http://femto.io/blogs/news/34205764-imuduino-three-js-node-awesome) blog.*

A little while ago, I ordered an [IMUduino](http://femto.io) which is a tiny
arduino clone that has a full IMU + bluetooth low energy built into it. This is
the perfect part for my next prototype of my parkour impact sensor.

In order to tweak the led reactions, I want to be able to record and playback
IMU data, so that I can not exhaust myself while tesitng out different light
patterns.

So I need to build a record and playback system that allows me to visualize
what happened in the recording, and play that back to the device to run through
how the leds will react.

But first, I need to just familiarize myself with the device, the data it can
return, and just generally figure out the system for record and playback, so
I built a small system that reads data from the device, and sends it to the
web client running a three.js scene.

![Photo of IMUduino with a green cube in the background](cube.jpg)

## Prepping the device

For this first attempt, I flashed [yaw-pitch-roll sketch](https://github.com/zrecommerce/imuduino-btle/tree/master/Arduino/libraries/IMUduino/examples/IMUduino_Bluetooth_UART_YawPitchRoll) that's included
in the [imuduino github](https://github.com/zrecommerce/imuduino-btle/).

This sketch outputs, over btle, a string of the format: `yaw|pitch|roll`.
Since this is guaranteed to be below the 20 byte limit for data packets, this
was easier than sending the raw data and doing the IMU calculations in javascript.

In the future, I'm going to write my own sketch that outputs a compact packet
of the raw data so I don't have to do string parsing, but this works for now.

## Client Side

The client side is pretty easy.  The javascript is based on the three.js example
with an added light, and a lambert material assigned to the cube rather than
basic, so that the rotation is more visible.

The full source for [index.js](https://github.com/RussTheAerialist/imuduino-3js/blob/master/client/index.js) can be viewed on github.  Of course, this is run through
browserify because I like node's module system better than anything else, so
yeah, plus [browserify is awesome](http://browserify.org/).

The important bits are this:

```
function render() {
  requestAnimationFrame( render )
  cube.rotation.x = roll
  cube.rotation.y = yaw
  cube.rotation.z = pitch
  renderer.render( scene, camera)
}

var socket = io.connect()
socket.on('position', function (data) {
  pitch = data.pitch
  yaw = data.yaw
  roll = data.roll
})
```

If you are familiar with three.js, you'll notice the `render()` function is what
is needed to render the scene.  In this case, we set the rotation of the x, y, z
axis based on the global variables roll, yaw, and pitch.

Then, in the `socket.on('position')` callback, we read the pitch, yaw, and roll
from the position message that the server will send.

## Server Side

The server side is a very simple express + websocket server.  I'm going to skip
over [server.js](https://github.com/RussTheAerialist/imuduino-3js/blob/master/server.js) because it's messy, and it mostly just glues things together.

The one thing that `server.js` does that isn't boilerplate is that it converts
the degrees that yaw, roll, and pitch are sent from the device to radians which
three.js needs.  While the client could do that, I'd rather see it done on the server.

## IMUDuino.js

This is where the real meat of the interaction with the IMUduino lives.  The [IMUDuino.js](https://github.com/RussTheAerialist/imuduino-3js/blob/master/lib/imuduino.js)
file is heavily based on [nodebotanist/imuduino-ble-js](https://github.com/nodebotanist/imuduino-ble-js) by the amazing [Kassandra Perch](http://nodebotani.st/).

It's based on the [noble.js] bluetooth library, and the basic pattern that is
needed is that you first discover available devices, match against a known
UUID for the device, then discover the services, and then discover the characteristics of the device.

All of the necessary service ids (including my device's peripheralUUID) can be
found in [service-info.js](https://github.com/RussTheAerialist/imuduino-3js/blob/master/lib/service-info.js)

In the case of the IMUduino (and any other UART-emulating BTLE device), there
is a read and a write characteristic.  We only care about the read in this case.

One thing that caught me up when developing this was that the newest version of noble apparently starts up a bit quicker than previous versions, so if I tried
to start scanning immediately, it was not in a powered on state.  To fix this,
I added the following bit of code:

```
	noble.on('stateChange', function (state) {
		if (state == 'poweredOn') {
			noble.startScanning()
		}
	})
```

This waits until the BTLE device is powered on.

The read characteristic has a read event which passes the read data into the
callback function.  All very node style.  From here, the relevent piece is to 
parse the string.  This isn't super robust, and I will be moving towards a
binary packet design in the near future, but this works for now.

```
Imuduino.prototype.parse_packet = function (input) {
	var data = input.split('|')
	var p = _.zipObject(PROPS,
		    _.map(data, function (n) { return parseFloat(n) }))
	this.emit('packet', p)
	
}
```

So we take the input, split it into an array of numbers.  The next two lines
are a bit of functional magic, but basically, it converts each entry of the
array into a floating point number.  Then, it builds an object (or dictionary)
based on a second array which contains the names of the fields.

This bit is just to make the data nice to work with.  I'd rather have to do `position.pitch` rather than `position[1]` because it's more readable
in the first way.

After converting the data into an object, I emit a packet event, which the `server.js` listens for, converting the degrees to radians, and then emits
a position message over websockets.

## Conclusion

All in all, this example was a great way for me to learn how to interact with
IMUduino, and how to do a little something in three.js, gluing it all together
with [socket.io](http://socket.io).

Hopefully this example helps other people get up and running with IMUduino + 
three.js without having to run into all the same problems I ran into.

You can always reach me on twitter [@RussellHay](http://twitter.com/russellhay) if you have any questions about this example.
