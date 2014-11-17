---
title: JumpBooth
date: 2013-10-29 12:29
summary: An openframeworks system for taking pictures of people jumping
tags:
  - make
  - OpenFrameworks
  - OpenCV
  - Computer Vision
---

Two day engineering/programming marathon led to a system that catches the moment after weightlessness in a picture.  I call it jumpbooth because the original idea is to take accurately timed jumping pictures, and that's what this does, but because of the way I implemented it, it can catch anything the moment it's acceleration becomes negative, which means, right after the moment of weightlessness is experienced.

The code is available on bitbucket: (https://bitbucket.org/russellhay/jumpbooth)

But let's talk about how it works because that's the interesting part.  The system is built on top of OpenFrameworks and OpenCV, which made it easy to rapidly prototype and build this system.

I used a number of addons:

* ofxBackground (modified to emit an event when learning is finished)
* ofxCameraKit (to take the picture)
* ofxKalmanFilter (I wrote this to implement a nice interface to the KalmanFilter for predicting Position and Velocity)
* ofxOpenCV (this comes with OpenFrameworks)

The system is very straight forward with a pipeline of processing that follows these steps:

1. Background substraction - handled by ofxBackground
	* This gives us 1-bit image which represents everything that is not the background
2. Contour detection with approximation - handled by ofxOpenCV
	* This gives us a set of points that define the approximate boundary of the non-background pixels
	* Ignore all up the largest blob
	* Store the centroid
3. Kalman Filter on the position and velocity of the centroid - handled by ofxKalmanFilter
	* This smooths out the potentially erradic centroid position and estimates the velocity
4. Trigging based on acceleration changes and a vertical "active" zone
	* If the centroid is about 50% of the screen, and has reached a zero vertical accleration, we take the picture

All in all, the system works well, and I'm happy with it.

Here is a screenshot of it working:

![screenshot](/thumbnails/2_page.png)
