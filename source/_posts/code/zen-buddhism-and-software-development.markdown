title: Zen Buddhism and Software Development
date: 2014-07-23 11:09:48
tags:
  - code
  - zen
  - productivity
---

In the software development world, we love to throw around the word Zen.  Python Zen, Emmet was originally called ZenCoding, Agile Zen.  It's everywhere, but I don't think the average software developer knows what it means beyond "easy" or "flowy".

I'd like to talk about some of the principles of Zen Buddhism and how they apply to the practice of software development, as I see that they map pretty wonderfully and directly between each other, when studied.

I will be speaking more about Soto Zen Buddhism which eschews most of the ceremony and showiness of other Zen practices and focuses on one thing: sitting.  This is the Zen practice that I know.  I sit, staring at nothing, every morning, only for a short while, five to fifteen minutes to clear my head in the morning and center my awareness.  That's the current extent of my practice, but that's not the point of this article.

The point of this article is how does Zen map to software development.

## Awareness

Awareness is a key aspect of Zen.  So Important, that I think I need to lead off what it means to me.  Awareness means seeing, listening, and understanding what your actions and words do to other people.  It is grasping how your actions impact other people around you.  Self-awareness is your ability to analyze why you acted or reacted a certain way.  This concept is so important in cultivating emotional intelligence.

The need for awareness applies anytime you are interacting with other people.  In software development, we must interact with other people all the time, and awareness is so critical that software development cannot happen without it to some level.  While there is no direct "how this applies to writing code" correlation for awareness, it applies and is integral to working on a team.

## Living in the Now

In Zen, there is no past and there is no future, there is only now.  Your choices in the past have created now, and your choices now create the future, but neither the past nor the future exist.

This applies to software development.  When developing a new feature, your past is the structure that defines the now, but it does not matter.  What you did in the past is unimportant when you focus on what you should do now.  A bad piece of code in the past has created the landscape of the now, but is not the now.  It should not dictate right action in the current moment, except coding style.

This sounds very grandiose, high-level thinking, but how does it apply to your day-to-day job of software development?  Let's take a look at a concrete example.

At my current company, I've held a number of roles, but my first role was manager of the brand-spankin'-new test engineer team and our charter was to create a suite of automated tests that test our server and desktop product.

This lead to a test framework, like what usually happens, called ATOM.  ATOM had some purity to it, an architecture that would have been great, had we stuck to it.  There are many things to regret about how it developed over time, leading to what it is now.

I left that team after about 6 months to go help build our continuous software delivery system, which took about 6 months, and then I moved on to a different team, which has a lull in development needs, so I'm being loaned back to the test framework team to do some work on ATOM.

As I get back into looking at it, I have a landscape of the current ATOM, which is not the past ATOM, nor is it the future ATOM, and my job is to improve it.

If I didn't live in the now, I would spend my time complaining about how the original design intent was abandoned shortly after I left the team, how the duplicate code sneaked in, and how we were not treating it like an open source project across the company with the new lead of ATOM being the benevolent dictator, ensuing that the architecture remained intact.

But that's counter-productive.  Complaining doesn't change the past.  Complaining doesn't change the future.  And complaining certainly doesn't change **now**.

## Non-attachment

In the ATOM example, I could look at it in the frame of mind that "they have destroyed my beautiful vision of what it could have been!"  But that, too, is counter productive.  The team grew from the first 22 people who built the first release, to well over 200 people, all contributing to the code base.

ATOM is not mine.  ATOM is not the new team lead's code either.  ATOM belongs to no one person, it belongs to all of us.

In Zen, you practice the idea of non-attachment to the physical world.  You are not your possessions.  You are not your preferences.  In software development, code ownership is horrible.  Feeling ownership over code, unless you are the sole developer on a project, is harmful to harmony on the team.  Ownership and responsibility are different, though, so the way I practice non-attachment in software development is the not feel ownership over the code that I write, but responsibility for the project .

Responsibility means that you have a stake in the success or failure of the project.  It means you feel it's your responsibility to improve the code as you go forward.  Responsibility also means that you can debate, without emotion, a change and whether it's good for the code base or not.  Ego plays no part in it.

Ownership, however, means you get offended if someone changes "your code" in a way that you don't like.  It means you are personally invested in the code and your ego is tied up in it, which makes every change, potentially, a personal attack against your character and ego.  What a horrible way to live.

Another example of attachment is favorite programming language.  It's great to have one, I suppose.  Mine is Python, but I strongly believe in choosing the right language for the problem at hand when starting a new project.  While I pick python?  Only if it's right for the problem.

Recently, I started thinking about making a network-based platformer game.  I am prototyping some ideas up in Python, because it's my preferred language, and I can do rapid prototyping, but I know that I'll really need to focus on performance to eek out what I want to do on the networking side, that it makes sense for me to write the product in C++, which is what I'll do because it's the right choice.

This is non-attachment.  I don't write the product in Python because it's not the right language for the project.

## Commit No Violence

Committing No Violence is a tenant of Buddhism a whole, and is why many Buddhists are vegetarian/vegan because violence, by some definition, is inherit in consuming animal-based foods.

The heart of commit no violence, though, is to cut or eliminate suffering through right action and right thought.  Through awareness, we understand how non-right actions and speech can induce suffering in others, and we should strive to cause as little suffering as possible through our actions, thoughts, and words.

I hope, by now, that you see how this applies to software development.

Violence, as I define it in software development, is doing a shitty coding job, cutting corners, and being sloppy.  Generally being a lazy programmer is violent to the code base.

My guiding principle on this is that I strive to always leave the code that I touch in a better state than when I found it.  This might mean refactoring to a pattern, writing tests, or cleaning up formatting problems.  All of these reduce suffering in the future.

When I add a feature, I strive to always add proper tests, keep the DRY principle in mind, and follow most of the advice in The Pragmatic Programmer.

This is my interpretation of committing no violence when applied to software development.

## Not the Rosy Picture

I'll admit, what I wrote above is very rose-tinted.  These are things I strive for, but no one is perfect.  I commit these sins and then some.  I lose my temper at times, and I have acted in ways I'm unashamed of when confronted with conflict, but these are my ideals.  These are what I strive towards, and why I start each day with my mindfulness practice.

And it's as simple as 5 minutes of focusing on your breath while clearing your mind of other thoughts.
