---
title: "CascadiaFest 2016"
date: "2016-08-08"
tags:
  - "code"
  - "cascadiajs"
  - "javascript"
  - "node"
  - "browser"
  - "css"
---
*please note, I'll have links to all of the videos for the talks as soon as they are available.*

Links to descriptions of all of the talks can be found on the [CascadiaFest 2016](http://2016.cascadiafest.org) page.

## Day One: CSS Day

### First Block

The first block started off with a talk about practical color theory.  It was a good explanation for people
who have maybe not taken any art classes in school (do such people exist?) with a focus on utilizing the
color wheel to pick colors that work well together.  The talk was focused on building a color scheme using
complimentary colors, which are colors that are 180º away from each other on the color wheel.  [Natalya Shelburne](http://twitter.com/natalyathree)
talked about how to blend colors to make them work together, utilizing how our eyes work to trick our brains
into thinking they are under the same lighting conditions.  tl;dr; of that is to mix a little of each color
into the other color.  She then continued to build up a palette by further mixing the colors to form a neutral
color, and creating tones and shades by mixing white or black into it.

Next up was [Justin McDowell](http://twitter.com/revoltpuppy) who talked about new CSS features that enable Bauhaus layouts in the browser.  A little
bit of art history thrown in a talk about CSS transforms, perspective, css grids, and a few other things.
It was an interesting talk not just because the Bauhaus movement is rad as hell, but it showed how the
new CSS features are enabling complex and radically different options for design.

And lastly, [Miriam Suzanne](http://twitter.com/mirisuzanne) talked about establishing patterns in your CSS code, focusing on how to organize your
CSS code using things like Sass, naming conventions, etc.  The focus of this talk was largely on building
UI systems that enable a consistent API without re-inventing the wheel, and how to provide docs for your UI
systems.

### Second Block

I skipped the second block because I was getting a headache, and needed to take a break.  I am planning to
watch all of the videos when they come out.

### Third Block

The third block started with [Alice Barlett](http://twitter.com/alicebartlett) who talked about component systems and why they are important, useful,
and good.  She gave examples of the Financial Time's website and why/how [Origami](http://origami.ft.com)
came about.  She talked about Pattern Libraries and showed off a number of them include polymer and
[Future Learn's Pattern Library](https://www.futurelearn.com/pattern-library).  She stressed the importance
of documenting component systems to make them usable with a tagline of "If it's not documented, it doesn't
exist".  I think that applies to everything, not just component systems.  She recommended reading
Jacob Kaplan-Moss' [Writing Great Documentation](https://jacobian.org/writing/great-documentation/) as a
 starting point.

Next up was [James Steinbach](http://twitter.com/jdsteinbach) who talked about PostCSS and the power of PostCSS.  Since I'm not a frontend developer (or
one who does anything beyond a little sass), it was great to hear about this powerful tool.  PostCSS allows
you to manipulate an AST of your CSS in interesting and crazy ways and then write the AST back out as
normal CSS.  How freakin' cool is that?  Like seriously, I'm in the middle of building a website for me new
podcast that will be releasing in October, and I immediately added PostCSS to my build workflow for the
production version that can do things like check against [caniuse](http://caniuse.com) and fix some browser
bugs in flexbox.  Amazing.

I skipped out on the last talk of the block about SVG because my headache started to come back.  Damn these
stress headaches / allergy headaches.  I'm not sure which it was, but I was having none of it, and went back
to get some rest.

Someone in this block mentioned interviewing using [Codility](https://codility.com/), so I want to check that out as a possible
improvement over standard whiteboard interviewing.

### Fourth Block

The last block of the day were not directly related to technology.  [Lou Montano](http://twitter.com/loumontano) talked about how to learn, and
be organized in your learning especially since that's what we do, constantly, in tech.  With the pace that
technology changes, especially web tech, it's important to be really good at learning.  Hell, that's why we
go to conferences, right?  She had a few major takeaways in the talk:

* Just-in-time learning, and necessity driven learning are what's really required for tech.
* Experimentation and Practice are super important.  Failing in experiments is meaningful.
* Make lists and chunk the learning into pieces (refer to *The First 20 Hours*)
* Everyone learns at their own pace.  Respect the hell out of that.

Next up was [Gregor Martynus](http://twitter.com/gr2m).  His talk was about building an inclusive and welcoming community that fosters
healthy relationships, meaningful contributions, and a sense of pride and ownership from the community.  He had
a ton of advice, and when the video is available, go watch it because it's worth understanding every word he
says on how to make a safe, inclusive and welcoming community around your project.

The three big points for attracting a community are:

* Reach out
* Make it fun
* Keep it fun

He provides a bunch of details and examples of what each of these points are about.  A few of my main takeaways
where:

* Go where your contributors are
* Turn contributors into ambassadors by valuing them and being gracious of all of their contributions
* Host Events like Hackathons
* Making it fun should be for everyone, not just a select group of people
* Creating a safe space is of the utmost importance
* Choose a license early
* Optimize for contributors

I literally took 3 pages of notes from Gregor's talk, and suggest you all watch it when it's available.

The last talk of the day was by [Alan Stearns](http://twitter.com/alanstearns) of Adobe fame, and he impressed on us the responsibility of the
future of CSS is in our hands, and we should take an active part in driving that.  The main things he asked us
,as users of the web, to do is to **make noise when something breaks**, **write about what we try and do**, and
**file browser bugs when things are broken**.  It was a good, impassioned plea for people to be more active.

## Day Two - Browser Day

### First Block

[Rebecca Murphey](http://twitter.com/rmurphey) gave a talk about working with legacy apps, or as she likes to call them "vintage" apps, which
is a freakin' rad term.  She talked about her experience migrating a website from a disheveled mess of jQuery
towards more modern approaches.  She talked about centralizing the state of the app, a la Redux, the importance
of things like guardrails (linting & tests) to ensure nothing breaks, and how instrumentation is so critical
to knowing what's happening in the browser.

She talked a little about frameworks and recommended reading Tessa Thornton's
[How to learn web frameworks](https://medium.com/shopify-ux/how-to-learn-web-frameworks-9d447cb71e68#.3lb7ktbfu)

Afterwards [Nolan Lawson](http://twitter.com/nolanlawson) laid down some knowledge about service and web workers, and the main take away is
start using them.  All up-level browsers have them, and there is a polyfill that falls back to running
in the main thread if they aren't supported.  He provided lots of good examples of why, using animated
gifs of Kirby.  It's amazing how many supposedly async things block to the UI thread and stop animated gifs.

Lastly, [Seth Samuel](http://twitter.com/sethfsamuel) gave us a quick introduction to doing arbitrary computation on the GPU, and the main
takeaway is that for small problems, using the GPU has too much overhead, but for your data is large, and
you can pay the overhead of calling `canvas.getImageData`, then it might be worth it, but you'll need to
develop a heuristic for your specific problem for when to do it in one place or the other.

### Second Block

More headache fun, so I missed this one.  I've heard good things about all three talks, so I'm planning to
watch them when they are available on video.

### Third Block

[Rachel White](http://twitter.com/ohhoe) told us about her cat, Rick, and his [amazing adventures](https://github.com/rachelnicole/ricks-big-day) in her apartment while giving us an
introduction to game programming using Phaser.  She's inspired me to create *Cheese Vikings* so if anyone
is interested in making a Free-to-play HTML5 game with me, let me know.

[Thomas Wilburn](http://twitter.com/thomaswilburn) from the Seattle Times gave us an inside look at how they use custom elements across the
org for production websites that get a ton of hits daily.  He showed off how you can make custom elements
approachable, and easy for content creators to use.  Want a leaflet map without all of the annoying
boilerplate html?  Here's a custom element for that (at least if you work at the Seattle Times).  The power
of custom elements makes it obvious why it's a great technology that we should all start using.

Lastly, [Sarah Meyer](http://twitter.com/meyerini) took us on a trip around a galaxy far far away with
javascript turned off and offered us a call to action to test how our websites work with javascript
disabled. Do you have progressive enhancement, or does it fall over without javascript?

### Fourth Block

The last block of the day was skipped because my headache would just not freakin' quit, but I've heard good things
about [Dale Bustad](http://twitter.com/divmain)'s talk about HTTP/2 Server Push as well as [Marcy Sutton](http://twitter.com/marcysutton)'s Where in the Stack is Carmen Sanfrancisco.

## Day Three - Server Day

### First Block

I can't go into too many details here because, well, I was in the green room for most of it, but [Mariko Kosaka](http://twitter.com/kosamari)
started off the day with talking about Computer Vision and running CV in web workers to get it off the main
thread.  She gave a great intro to CV and how to do interesting things with CV.

Next up was [Pawel Szymczykowsi](http://twitter.com/makenai) talking about mobile app testing using a [tapster](http://www.tapster.io/) robot and a little CV.
While Mariko concentrated on experimentation and play in CV, Pawel's talk about all about practical application
.  He showed us how to use template match to find buttons on a mobile screen and press it with a stylus.

And then I was up to talk about leds, javascript, and the weather.  You'll need to watch the video to fully
get my gentle introduction to hardware and javascript where I covered node-pixel and J5 to build something
that helps me dress myself in the morning.

### Second Block

Oops, totally missed that because I was too busy talking to people and decompressing from giving my talk.

### Third Block

[Brock Whitten](http://twitter.com/sintaxi) started up the block with a talk about latency and how to remove latency by utilizing caching
in various forms to reduce the need for higher-cost options. Caching in memory is faster than caching on a
local disk which is faster than caching in a database.  It was a practical approach to achieving greater
throughput on web service.

Next up was [Nwokedi Idika](http://twitter.com/nwokedi) who talked about the darknet, specifically Tor and how it works.  It was a great
explanation and description of how Tor functions and provides anonymity from bad actors (e.g. hackers, gov'ts,
etc).  I enjoyed the fact that he replaced the standard crypto actors with pop culture icons like Adele,
Beyonce, Charlie Murphy (Eddie's brother), Drake, and Eddie Murphy.

Keeping with the theme of crypto, [Bill Automata](http://twitter.com/billautomata) talked about what's in the node crypto module, and the history
of the US government meddling in crypto from the never beginning.  He also talked about why crypto should be
accessible to all, and why we should lobby for strong encryption and not allow the government to weaken
encryption with things like law enforcement keys.

### Fourth Block

You know that headache that I've been complaining about, yup, it returned for the last one, though I did
get a chance to catch the last talk of the block, [Alejandro Oviedo](http://twitter.com/a0viedo)'s Demystifying Javascript Engines where he
talked about the architecture of the various engines, where they are similar and where they are different and
why they do some of the things they do.

## Media and Other things

Pictures this year were crowdsourced, so I'll be keeping an updated list of media and such here.

### Pictures

* from [a0viedo](https://storify.com/a0viedo/cascadia16-twitter-photos)