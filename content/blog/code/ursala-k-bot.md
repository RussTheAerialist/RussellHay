+++
title = "Ursala K Twitter Bot"
author = "Russell Hay"
date = 2016-07-01T07:00:00Z
tags = ["twitter", "bot", "art", "performance art"]
+++

I don't exactly remember the conversation or how the idea came up, I think we were talking about google translate in an
infinite loops until the change between rounds is minimal, but a conversation happened at work, and that let me to
creating [`Ursala K Bot`](http://twitter.com/ursalakbot).

It's a twitter bot that listens for a keyword, currently that keyword is Seattle, and then takes the text of the tweet
and sends it through a series of translations using the Microsoft Azure Text Translation service.  The current
configuration is to go from English to French to Spanish to German to Italian and back to English.

I whipped up the code fairly quickly last night in node.js using a bunch of modules off of npm and creating a number of
streams to process the text.  Because I didn't want the bot to be too spammy, I have a number of filters that drop the
tweet if the filter matches.  I drop anything with a link in it, anything that has too many tags, and anything that
starts with RT.  Once all that filtering is done, I then have a random filter that only allows 1% of the tweets to ever
make it to the translation phase.  It's pretty straight forward, and ends up being a bunch of `.pipe` statements.

Already, Ursala K Bot has generated some interesting text.  My favorite so far is this one:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Seattle air would be too sweet for my taste. I miss the spice of the leaves in autumn and winter, shorter and more dynamic.</p>&mdash; Ursala K Bot (@ursalakbot) <a href="https://twitter.com/ursalakbot/status/748852098729594880">July 1, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Code for Ursala K Bot can be found on github [stainlessio/ursalakbot](https://github.com/stainlessio/ursalakbot)