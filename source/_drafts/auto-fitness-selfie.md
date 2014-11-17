title: Auto Fitness Selfie
tags:
  - fitness
  - progress pictures
  - tracking
id: 83
comment: false
categories:
  - Making
---

In June, I'm starting to really focus on fitness again.  I'm cleaning up my eating, adding exercise and stretching, and working towards getting super fit.  Losing fat and gaining muscle is a goal of mine.

To that end, I'm going to be taking progress pictures, daily, and hopefully will do a time lapse at the end of some time interval to show the progress I'm making.

I've done this in the past, but there was alot of manual work to resize, crop, and align the pictures to do an appropriate time lapse, and that's just painful if I want to do them regularly, so I've built a quick little system that uses a combination of the raspberry pi, the pi camera, and opencv to take the pictures so that they are nearly the same every day.

### The Code

It was pretty straight forward to do the computer vision program to detect a person vs. the background.  I had to be selective about my background, but by making sure the lighting was significantly different and controlling what was in the background of the image, I was able to insulate it from most of the problems of getting the background out.

Once we have a black and white image of the extract "foreground", I found the external contours and calculated the area, paying attention only to the largest one, which would be the person stepping into the frame.

From there, OpenCV has matchShape function which takes a contour from a expected and calculates the fitness of the currently detected contour.  This allows me get close to the assumed position.  Once we found a matching shape, we then need to calculate it's center of mass and align it to the same center of mass from the template picture, as well and instruct the person to move closer or further away based on the area of the contour also.

Once it's perfect, a picture is taken, and uploaded via an HTTP Post request to a local file server.  I do this because I don't want to store anything directly on the pi.  As an alternative, I could mount a USB key or external harddrive, but I prefer to just send it up to the cloud.

### The Hardware

The hardware is also pretty simple.  It's a raspberry pi, model B, with the normal raspberry pi camera module, a button, and a couple of leds.

I custom designed a case to be cut from pieces of acrylic using layers that are built on top of each other.  This version has a hole for a tripod mount so I can just mount it on a tripod that I keep in my garage.

### The Results

As you can see from the following animated gif, it's working pretty well, but of course, you can also see that I have much hard work cut out for me in the future to get fit again.

### Future Improvements

I might get a second raspberry pi that is pointed at my back so two pictures can be taken at the same time (using the network), or maybe at my side.  This would allow me to track more changes over time, but for now, the front view is enough to see progress.