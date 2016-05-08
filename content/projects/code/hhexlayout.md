---
title: Introducing HHexLayout for Processing+HYPE
date: 2013-10-14
when: "past"
categories: "code"
tags:
  - code
  - processing
  - hype
aliases:
  - "/code/hhexlayout"
summary: Hex Grids for Processing+HYPE!
---

Rad sauce.  Last night, because I was in a funk, I decided to develop a hex grid layout object for the [HYPE Framework](http://hypeframework.org/) for [Processing](http://processing.org).  It generates an outwardly spiraling hex grid from the center of your sketch and since it's `HLayout`-compatible, it means you can use it with `HDrawablePool`.

Super Rad Sauce.

But, I suck at documentation, so here's an example:

	#!java
	HDrawablePool pool;

	public static class CountedObject extends HDrawable {
		static int _totalCount = 0;
		protected int _index = 0;

		public CountedObject createCopy() {
			CountedObject copy = new CountedObject();
			copy._index = _totalCount;
			_totalCount++;

			return copy;
		}

		public void draw(PGraphics g, boolean usesZ, float drawX, float drawY, float alphaPc) {
			g.textSize(16);
			float width = 25.0 - g.textWidth(Integer.toString(_index));

			
			
			g.text(Integer.toString(_index), drawX + (width/2.0), drawY - 8.0);
		}
	}

	CountedObject textDraw;
	HPath hex;

	void setup() {
		size(600, 600);
		H.init(this).background(#202020);
		smooth();

		textDraw = new CountedObject();
		hex = new HPath();
		hex.polygon(6).size(50);

		pool = new HDrawablePool(200);

		pool.autoAddToStage()
			.add(textDraw)
			.add(hex)
			.layout(
				new HHexLayout()
				  .spacing(25)
			)
			.onCreate(new HCallback() {
				public void run(Object obj) {
					HDrawable p = (HDrawable)obj;
					p.anchorAt(H.CENTER);
				}
			})

		.requestAll();

		noLoop();
		H.drawStage();
		saveFrame("hexTest.png");
	}

This generates an image that looks something like this:

![Hex Test](/static/images/processing/hexTest.png)

You will need to copy the HHexLayout.pde file from my github in order to make this work until it's pulled into HYPE.  You can do that by downloading: (https://raw.github.com/RussTheAerialist/HYPE_Processing/staging/pde/HHexLayout.pde) and putting it into your sketch directory.
