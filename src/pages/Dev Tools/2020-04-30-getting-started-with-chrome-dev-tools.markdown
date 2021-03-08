---
layout: post
title:  "Getting Started with Chrome Dev Tools"
date:   2020-04-30
categories: [Dev Tools]
tags: [dev tools, the-web, programming, basics]
index: 1
---

Cool! So far we've looked at each of the most used languages on the web, how to write code, how to write good code and most importantly - code that others can read. So in a sense you could say that you're ready to enter the digital jungles others have created out there in the world.

You will soon find frustration, because we haven't yet looked at a very important tool, used by all web developers - browser dev tools.

Each browser has them, I will focus on Chrome Dev Tools as a personal preference (and a choice that has stood test of time).

# What are the Chrome Dev Tools?

You probably have seen them before. Fear and anxiety probably flared up when you accidentaly opened them and probably a fear to "screw something up" ran through your mind too.

Yes folks, I am talking about pressing "F12" in Chrome. That's right, no additional stuff to download, it's been there since forever.

Now it's time to push fear aside and press "**F12**" while on any website.

<div class="tenor-gif-embed" data-postid="10270118" data-share-method="host" data-width="100%" data-aspect-ratio="1.7866666666666664"><a href="https://tenor.com/view/star-wars-do-it-gif-10270118">Star Wars Do It GIF</a> from <a href="https://tenor.com/search/starwars-gifs">Starwars GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>


Ok, you made it. Depending on how much you have previously tinkered around with it, it may show a different layout for you, so as the first thing that we'll do, let's reset the layout.

## Resetting the Layout

To reset the layout, simply have the dev tools open (via F12 if you haven't already), then press F1 (or press the three vertical dot menu and choose "Settings"), scroll to the very bottom and press "Restore defaults and reload".


# The Layout

Now you should see the following on the right side of your window:

<img src="/assets/img/ChromeDevToolsDefaultLayout.png">

So what is all this? If you take a second, you will recognize that we've dealt with all of this stuff already before!

* At the top we have the source code of the page.
* At bottom-left we have CSS that applies to the currently selected element, in the screenshot its the "body" element.
* At bottom-right we have the box model, as you see the "body" element has no margin, border or padding. It's 1348px tall and 1714.530px wide. As you scroll down, you will see all of the CSS properties that are targeted for the element.

Can you feel the initial fear slowly turn into excitement? Yep. Welcome to programming. You will feel this transition over, and over, and over again, and **that's ok**.

You also notice that there are tons of tabs scattered everywhere. What for? Do you need all of them? No. This type of dev tools contains almost everything you'd ever need to analyze a web page. Obviously the devs didn't want to run separate software, so they just added the tools to the browser instead. Efficient.

Since this is a programming course focusing on practicality, we will cover these tabs as we go along with learning code. So don't worry at trying to remember everything. That's not what programmers do. They remember the right tools for the right job. To learn about them, of course, you have to try them all out. Your employer will even pay you to do so (or he/she should). Once again - Welcome to the world of programming. 

# The Sauce

You probably noticed that I mentioned that we can see the source code in dev tools. You can also see the full source code in a separate tab by either pressing "CTRL+U" or right clicking and selecting "View page source" (it could be different for different browsers).

# So What About Firefox and Others?

These dev tools exist for each of the modern browsers by default. They have some differences, but all serve the same goal. To help you analyze web pages and their code.

# Why do You Need the Sauce?

> "I see all of my code in my editor, why would I need to see the source code like that?"

For now, you're writing what is known as "static pages". 

Static as in - they don't change after you save them.

In that case, obviously the same thing you see in your editor, will be output to the browser. Once you start working with generated content (oh you thought that you will be the one outputting all the code? cute. ), you will realize that:

* programmers write code,
* good programmers write readable code, 
* great programmers write code that writes code for them,
* the best programmers write code that also tests the code, that their previous code generated for them even. 

Just to give you a glimpse of how advanced it can (and should) get.

**So to sum up:** The source code you receive from the browser is the "final" code, that's output to the "user" of the page. Content can still change though, as you saw with the JavaScript clock example in a previous post. Though, you will turn to the source code very often, to understand what is going on.
