---
title: "Code Retreat 2014"
author: Russell Hay
date: 2014-11-15
tags:
  - code
  - code retreat
  - programming
  - games
---
## What is Code Retreat?

Code Retreat is an event where you get together, pair program, and try to solve the same problem over and over with different constraints applied to it, deleting **all** of your code between attempts.

Traditionally, you use [Conway's Game of Life](http://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) and once a year, there is the global code retreat day with lots of events happening all across the world.  I attended one of the global ones.

## Cast of Characters

We had a great mix of people with varying backgrounds with a heavy concentration fo Microsoft employees which is pretty typical Western Washington.

Along with all of the microsofties, we had a high school CompSci teacher and his (assuming) grandson, a precocious kid who was quite sharp.

## The Tools

Given the concentration of Microsoft employees, C# was a primary language with Visual Studio as the primary IDE.  We had one linux person using python and vim, and I had my laptop loaded up to be able to do my favorite languages.

The boy and a few others dabbled with Haskel.  Sadly, no people interested in Go.  I don't think Google employees venture out of their enclaves very often.

## Round One
Constraints: None.

For round one, we just attacked the problem of GoL in whatever way we decided to implement it.

My first pairing, I drove most of the conversation, and we quickly came up with a solution that we liked.  We didn't do TDD, and just jumped right in.

It was a good opportunity to just get a feel for solutions, but my pair missed a vital piece.  The board is infinite so using a 2d array was not a good solution because that's finite.

But we came up with some interesting ideas.

# Round Two

Code Constraint: No Primative types passed in or returned except in constructors

Process Constraint: Strong Pairing<sup>[1](#footnote_1)</sup>

For this one, I paired with the teacher with Python as our primary language.  Since the teacher wasn't familiar with the syntax of python, I was on the keyboard the entire time, which meant I wasn't allowed to think through the problem, I was merely the typist/interpreter of what was being communicated.

I didn't like this because I had a really hard time not thinking through how to solve the problem.  We made good progress, but I was frustrated by this type of pairing.

I resorted to using leading questions to drive the solution in the directions that I wanted it to go which was a bit manipulative.

The "no primatives" constraint is interesting, but nothing I haven't done before.  Location is an obvious choice for encapsulating the two primative values and turning Location into a first class citizen.

## Round Three

Code Constraint: No Ifs

Process Constraint: Ping-Pong Pairing<sup>[2](#footnote_2)</sup>

I really enjoyed ping-pong pairing because it allowed us to know exactly when to move the keyboard back and forth which has always been a problem for me when pairing with someone.  I end up drving alot because I get frustated with being unable to articulate what's in my head using English rather than code.

The no-ifs constraint was interesting, but not particularly challenging.  There are lots of ways to make a decision without using an if statement, but we didn't get very far in the solution because we bogged ourselves with increasing test coverage, but that was okay.

## Round Four

Code Constraint: None (I think)

Process Constraint: Silent Ping-Pong

This one was very difficult.  This was the first time I had to use C# during the retreat, and it's changed a bit (xUnit, nCrunch) since I last used it 4 years ago.

Couple the unfamiliarity of the language without being able to talk, and the first couple of ping-pongs back and forth were rough, but eventually it smoothed out.

My partner for this one didn't like some of my decisions when I implemented the code for the test, but in the end, the solution worked, it just wasn't ideal for his style.

We both realized that we were afraid to refactor with silent ping-pong for fear that it might come off as dickish since we couldn't talk through why we were doing the refactoring if it was refactoring the other person's code.

Important lesson from this is Code Ownership is bad.  Code Stewardship is good.

## Round Five

For the last round, we decided to extend the length and do mob programming rather than pair programming, so we broke up into two groups with the constraint of "Tell, Don't Ask", which basically means, methods aren't allowed to return anything, so everything is a void.

We settled on using C# events for sending information around which is a good way to decouple code both statically and possibly temporally.

This was slow partially because of the mob programming style, and partially for the code constraint.

It was hard to wrap our heads around how the messages flow.  Lacking a whiteboard, we weren't able to communicate sequence of messages, like with a sequence diagram.

We spent quite a bit of time spinning on that, but in the end, I feel like we made good progress and people understood why message passing is a useful technique and how TDA can drive good design patterns when used non-dogmatically.

## Summary

All in all, Code Retreat was a great experience and I certainly look forward to doing it again.  As a matter of fact, I am going to try to get our Software Engineering Reading Group at work to do a code retreat for ourselves so we can experience what it's like and get the same benefit that I received from the day.

## Key Insights

* Good Design is subjective.
* Constraints can lead to better understanding of better design.
* Pairing is awesome, and everyone should do it at least some of the time, if not all of the time.
* I don't TDD enough in my day job.
* I should hang out with developers more often.

## End Notes

**<a name="footnote_1">1.</a> Strong Pairing** is the practice where the person at the keyboard isn't allowed to think about solving the problem.  They only translate the thinking/speaking done by the other member of the pair.

**<a name="footnote_2">2.</a> Ping-Pong Pairing** is when the pair takes turn at the keyboard.  Member 1 writes a failing test, Member 2 then writes the code to make the test pass, then refactors the code, and then writes the next failing test.  Member 1 then repeats what Member 2 just did, and repeat.
