---
title: CascadiaFest 2015 Trip Report
author: Russell Hay
date: 2015-07-12
tags:
  - code
  - cascadiajs
  - javascript
  - node
  - browser
  - css
---
*please note, I'll have links to all of the videos for the talks as soon as they are available.*

## Day One: CSS Day

Day one was all about CSS with a Hardware workshop in the afternoon.  All in all it was a good day.

The first talk was about the future of CSS and how some things coming down the pipe will either obsolete css preprocessors, or make they jobs easier.  This was an interesting talk and some of the key takeaways are: the future of css looks bright, there will be scoped variables, and flexbox is awesome.

The next talk was about designing tools for developing.  It mostly focused on the UNIX philosophy, show the general patterns of command line tools those tools follow.  The patterns were pretty well understood types of command line tools.  Overall it was an interesting talk, though nothing really new for me.

Next up was a talk about how to build team cohesion when some of the team members work remotely.  This talk really opened by eyes on a few things.  We have remote team members, and we struggle with team cohesion. The two things I learned from this talk are to have deeper, more meaningful daily check-ins and peer to peer one on ones.

Deeper, more meaningful daily check-ins is a time for the team to get to know each other on a more personal level, share in a team members' successes, offer empathy for team members' problems, and become friends with them.

The peer to peer one on ones is scheduling time to chat with a coworker, catch up over coffee, hangout, and become friends with each other.  Both of these two things seem to go a long way to building the rapport of the team.

Two of next sections talks were about making art with CSS.  It is fascinating to see the kinds of things you can make with css and very boring html.  One talk shows fractals implemented in css, and the other showed his 100 days of css "sketches".  Both talks showed what is possible with just css.  It might an interesting experiment to see how we can leverage some of these ideas to improve upon the way we approach visualizations on the web.  One of the speakers also launched [alonelysquare.com](http://alonelysquare.com/) which is an collaborative creative coding project where you develop an animation starting and ending with a black square in the center of the screen.  Those are stitched together into a looping video of a black square morphing and evolving over time.  I spent the evening after things wound down submitting [my first lonely square](https://github.com/stainlessio/experiments/tree/master/alonelysquare/square0001)

The last talk I attended during the morning was about using emotion and a sense of delight to improve a user experience.  This talk contained much of the same things we strive towards with our UI with a few key differences.

Use of face-like objects triggers a positive emotional response in everyone. It's almost a universal principle: if it looks like a face, we'll see it as a face.

Use of humor when things go bad.  If we inject a little humor in places where things go bad, it diffuses the initial frustrating feeling associated with errors, and makes people accepting of the error condition.

Adding personality.  The examples he used as Hipmunk and MailChimp.  Their logos add personality and character to their UI/product which adds emotional attachment.

After lunch, I attended a workshop about IoT. The internet for the conference was having a really hard time keeping up, so most of the workshop was spent fighting with the wifi to get things to work properly.  I was teamed up with a guy from Uber, and we built a small light controlled [theramin](https://github.com/lxe/photoservo).

Day one ended with food and drinks along the beach, great discussions with various members of the javascript community in Seattle and beyond.

## Day Two - Browser Day

Day two was about javascript in the browser.  The talks ranged from visualization and webgl to auth, animation and audio.

The first talk was about D3 performance and ways you can improve performance and measure performance of javascript in the browser.  She covered three typical approaches for helping debug performance issues: timers, specifically on the render function, the framerate meter in Chrome, and recording time lines. She emphasized  SVG is preferred over canvas rendering for reasons including being able to style them using css and grouping of svg elements using the &lt;g&gt; tag.

For addressing performance issues, she suggests two things: choose browser-native when possible and change the dom as little as possible.  For the former, she gave the example of a scrolling visualization.  Rendering a large svg and utilizing the browsers innate ability to scroll the page has better performance than trying to implement scrolling via javascript.  For the later thing, she mostly said just don't do it, but if you must, try to find ways of reusing existing dom elements without having to change the structure.

The second talk was about inheritance in javascript (prototypal) compared to classic inheritance like in C++.  She used the example of a weekly schedule.  Class-based inheritance is like a work day. You wake up at roughly the same time, you get into to work at roughly the same time, you leave at roughly the same time.  Prototypal inheritance is more like a vacation day.  You might wake up at 10, get ice cream for lunch, do some shopping, and then go out dancing.  It's still a day, just a different kind of day.

The third talk was about web audio and signal processing.  Not too applicable to what we do, but very useful knowledge in one of my personal projects which I'll explain later.

The next section was kicked off with a talk about JSON web tokens.  JSON web tokens are a way of eliminating the need for a session.  The basic idea is `[header] [payload] [hash]`.  The header contains information about what type of hashing algorithm you will be using.  The payload is any amount of JSON, and the hash is a hash of the header plus the payload plus some secret only the server knows (or your cluster of services).  He mostly focused on using this for authentication, and logging in, with a live coding demo.  My biggest concern is: for an api, this would allow a replay attack.  In his live example, he included an expiration date, but I would want to include IP address to ensure it's harder to exploit.  It's just my gut feeling from the talk.  More research would be needed to consider possible exploit vectors.

The next talk was about WebGL using Babylon.js.  Babylon is pretty neat looking, and he showed some demos with shaders, and lights, and animation.  It's a very well thought out API, and I'm interested in exploring it more.

The last talk was about systems, and how you must remember, even when you are working on entirely solo code, you are still part of an infinite system, especially once you start pulling in external dependencies.  He gave some examples, and quoted often from _The Systems Bible_ which I will need to check out.

After lunch, we came back to talk about how animation can enhance a user's experience with your UI. She talked about our perception system and how our peripheral vision cannot see detail but is really good a noticing motion.  She talked about natural interactions, with swiping for mobile phones being her main example.

Then there was a talk about why are there so many darn javascript frameworks.  He gave some good reasons, and it mostly boiled down to opinions, background, and the ever-changing, extremely fast pace of change in the browser eco-system.

Lastly, there was a talk about hacking your company culture through the strategic use of chat bots.  Chat (like hipchat which we use, Slack, BaseCamp, irc were also mentioned) is a great tool for remote and distributed teams.  'Bots are good at boring repetitive tasks, so why are the space-meat robots (space-meat robots came up at dinner after the talk, humans are just space-meat) being **paid** to do repetitive tasks we are bad at?  He recommends automating everything automatable, and hook it into a 'bot controlled via chat.

He offered a number of reasons for using chat as the interface, but the one compelling one to me was in the realm of on-boarding.  From day one, if things like deployment, release, etc are all done in chat, then a new person can watch how the experienced people do it.  This enables them to ramp up significantly faster without impacting other members of the team.  I found it compelling.

He went on to explain how at his company, in order to improve recognition of good work, they built a 'bot people use to high-five other people with gift-cards the company automatically paid for (certainly limits were put in place to limit abuse, but they have never had those limit rules hit).  They used a service called Tango, and could give people gift cards in any amount for any reason.  One example was a sales person high-fived one of the engineers for giving an excellent talk on the math behind one of their systems.  Another engineer high-fived an engineer who had just returned from paternity leave, and failed at telling his first dad joke (at least he tried!).

I missed the last three talks of the day which were about web components, visualizing the npm module eco-system (I heard it was a really good talk), and ES6.

I missed the last three talks because I was excited and inspired to go learn webaudio api to do generic signal processing data from my bluetooth motion sensor I've been playing with in my spare time.  In the two hours it took for those last 3 talks to happen, I managed to get the accelerometer data processing through an FFT and visualizing onto an HTML canvas. Here is a video of it working:

<iframe width="960" height="720" src="https://www.youtube.com/embed/fqxnBjzmhxU" frameborder="0" allowfullscreen></iframe>

Day Two ended with a clam bake, and a pool party with trivia, and karaoke.  I left once the karaoke started.

## Day Three - Server Day

The first part of the morning, I attended the WebRTC talk by &amp;yet.  It was a good introduction to WebRTC and all of the neat things you can do with it.  I was attending to see what kind of applicability it would have to us, and while there is a big focus on video and audio, the data channel of WebRTC could be interesting for syncing views between users for collaborative authoring, and if a server can act as a WebRTC peer, then a fast (encrypted) channel for pushing real time updates to a view could be possible.  It definitely sparked some things in my head.

I was sad this workshop made me miss the talk about machine intelligence in javascript, so I'm going to need to go back and watch the video once they are posted.  I was able to catch the next three talk segment about half way into the talk about teaching your kids to program through minecraft.  A fun talk with explosions (simulated), and wolves eating sheep (simulated).

Afterwards, there was a talk about about identifying vulnerabilities which was interesting, covered many of the things our security team has been teaching for a while, though of a javascript bent.

Next up was a talk about automating web performance testing and covered all the usual candidates.  The `wb` module for node is interesting and allows you to control selenium via javascript, and he talked about how to improve the perception of performance on the web.

The next talk was about Amazon SWF for deploying client-side apps, and how it works.  There is a decider process to determine what process needs to run next, and activity workers to run the tasks.  It was an interesting talk, and might be applicable for things like data collection, and other types of workflow-y things.

Another talk about the wonders of command line tools and how writing command line tools helps keep your ADHD in check (oooo shiny).  I like command line tools and he walked us through how he built a flight status checker to mimic what happens when you type a flight number into google, complete with unicode airplane character.

Then there were robots, a talk about IOT, and a lengthy discussion about how time is hard because human.

Of all the conferences I've been to, I continue to be impressed by the javascript/node conferences the most.  While many conferences are about marketing, knowledge dumps, and bragging rights, the javascript conferences are different.  They are about community building, and bonding over a common technology.  While you do get a huge knowledge dump, and sure there are bragging rights (because who doesn't want to have a [selfie with Ice](http://twitter.com/RussellHay/status/619512501344931844/photo/1)), but at the end of the day, their goal is community building.  The reason I come back to javascript, and node specifically, in personal projects is because never in any tech community have I ever felt more accepted, welcomed, and appreciated, and it is a powerful feeling, and a sign of a thriving, well-intentioned community.