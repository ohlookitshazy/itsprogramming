---
layout: post
title:  "Taking Screenshots with Dev Tools"
date:   2020-04-30
categories: [Dev Tools]
tags: [dev tools, the-web, programming, basics]
index: 3
---

A very convenient feature, that I actually found out about only about a year ago, is the ability to take screenshots right there in the browser with dev tools!

# Taking a Screenshot

To take a screenshot, just have dev tools open and press CTRL+SHIFT+P. This opens up a dropdown of tons of stuff. This stuff, is a list of executable commands you can do on the page.

One of those, is taking a screenshot in multiple ways. So just write "screenshot", it works like a search bar.

You should see 4 options show up:

* Capture area screenshot
* Capture full size screenshot
* Capture node screenshot
* Capture screenshot

You can select either with arrow keys and "Enter" or just clicking with your cursor.

# Capture Area Screenshot

This option will turn your cursor into a crosshair and you should be able to just drag across the page to select a region to save a screenshot as.

You might argue - "Why do all this if I have the snipping tool/print screen?"

This saves you time, because once you remember: "Ok, I need a screenshot. F12 -> CTRL+SHIFT+P -> 'screeshot'" then press "Enter" to save it. The snipping tool requires you to open the window afterward and then press save, then select the location.

Also if you need a full-height screenshot, then instead of taking tons of screenshots, then piecing them in Photoshop (or Paint) takes longer than just selecting the "Full-size" option in the command dropdown.

# Capture Full Size Screenshot

What do you expect me to write here? It takes a full sized screenshot! Some stuff, like dynamic navigation bars, that "stick" to the top of the page, even as you scroll down, that might get glitchy if you take a full sized screenshot like this while being in the middle of the page, for example.

# Capture Node Screenshot

This will output a screenshot only of the selected element. Useful, if it extends the viewport (aka the "screen" that's viewing the page). Probably useful to capture super wide elements, that go over the visible boundaries too.

# Capture Screenshot

This will capture whatever is visible currently on the page.
