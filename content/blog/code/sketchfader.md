---
title: Fading between different "scenes" in processing
date: 2013-07-25
tags:
  - code
  - processing
  - artwalk
---

I'm working on developing a series of processing sketches which I will display as part of upcoming artwalks, possible projected onto me as I'm doing hoop in the space.  As such, I needed a way to easily switch between different sketches on a single screen.

This doesn't quite do that, but it comes close. Basically, I didn't want to have multiple `PApplet` objects floating around, so did something a bit different.  I created a fader object that can render to `PGraphic` objects, that are then rendered with varying degrees of opacity. 

It also handles calling a onPause and onResume function. These are current required functions but that's okay.  Since this doesn't really make a good library, I thought I would just provide the source here, and you can modiy it as necessary.

The gist of it is simple, create two `PGraphics` objects, and when you need to fade, render stuff on both of them, and then send them to the processing sketch's canvas. The interesting function is `Fader.drawFade()`

	#!java
	import processing.core.*;

	public class Fader implements ArtObject {
	    PGraphics frontScreen, backScreen;
	    PGraphicAdapter frontAdapter, backAdapter;
	    ArtObject front, back;
	    PApplet parent;
	    boolean fading;
	    float fadeStart;
	    static float FADE_DURATION = 5000f;

	    public Fader(PApplet p) {
	        this.parent = p;
	        frontScreen = p.createGraphics(p.width, p.height, p.sketchRenderer());
	        backScreen = p.createGraphics(p.width, p.height, p.sketchRenderer());
	        frontAdapter = new PGraphicAdapter(frontScreen);
	        backAdapter = new PGraphicAdapter(backScreen);
	        fadeStart = -1;
	        front = null;
	        back = null;
	        fading = false;
	    }

	    public void set(ArtObject front) {
	        fading = false;
	        this.front = front;
	    }

	    public void fadeTo(ArtObject back) {
	        if (fading) {
	            front.onPause();
	            front = this.back;
	        }

	        this.back = back;
	        back.onResume();
	        fading = true;
	        fadeStart = parent.millis();
	    }

	    @Override
	    public void update() {
	        if (fading) {
	            front.update();
	            back.update();
	        } else if (front != null) {
	            front.update();
	        }
	    }

	    @Override
	    public void draw(DrawingObject g) {
	        if (fading) {
	            drawScreen(frontScreen, front, frontAdapter);
	            drawScreen(backScreen, back, backAdapter);
	            drawFade(g);
	        } else {
	            front.draw(g);
	        }
	    }

	    @Override
	    public void onPause()
	    {
	        // Fader Never Pauses
	    }

	    @Override
	    public void onResume()
	    {
	        // Fader Never Pauses
	    }

	    private void drawScreen(PGraphics screen, ArtObject obj, PGraphicAdapter adapter)
	    {
	        screen.beginDraw();
	        obj.draw(adapter);
	        screen.endDraw();
	    }

	    private void drawFade(DrawingObject g)
	    {
	        float fadeAmount = PApplet.lerp(0, 255, (parent.millis() - fadeStart) / FADE_DURATION);
	        g.image(frontScreen, 255-fadeAmount);
	        g.image(backScreen, fadeAmount);

	        if (fadeAmount >= 255) {
	           front.onPause();
	           front = back;
	           fading = false;
	        }
	    }
	}

There are a few more objects and interfaces that you need in order for this to work, but it's easy to use and extend. You can download a zip of all of the files here: [AugustArtwalk.zip](/files/AugustArtwalk.zip).
