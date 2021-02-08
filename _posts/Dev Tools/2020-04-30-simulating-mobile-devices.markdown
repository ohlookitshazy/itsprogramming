---
layout: post
title:  "Simulating Mobile Devices"
date:   2020-04-30
categories: [Dev Tools]
tags: [dev tools, the-web, programming, basics]
index: 3
---

You probably noticed the button next to the "inspector" mode at the top of the sidebar. Quite simply, it allows you to simulate how your page will look and act on a mobile device.

# Why?

This allows more precise control over the exact size of the screen that's "viewing" the page. Notice how there is now a toolbar at the top of your page. The first dropdown controls the "mode" the simulation is in. 

The default is "responsive". This means that no particular device is selected and you're given a handle that you can drag, on the right side of your page. Literally, hover slightly off the right edge of the page and a handle should appear. Click and hold to see your page contents update dynamically. This is a great way to test the entire screen size range right there in your browser.

Personally, I don't use the responsivity simulator too much. I change the "screen size" on the page, by simply dragging the edge of the sidebar while in normal mode instead.

# What Devices does it Support?

It comes with some default templates, like iPhones, iPads, some Android phones but if you click "Edit..." at the bottom of the dropdown, you will be able to add your own device templates, or add some specific ones from the entire default set.

# What else does it do?

You can set the sizes of the screen by manually entering the values, next to the device dropdown. You can also adjust the zoom, the speed of the internet (for the simulation) and switch from portrait to landscape modes via the last button. 

**Tip:**

You can also view all of the keyboard shortcuts by clicking the 3 dot menu button of the sidebar and pressing "Shortcuts".

# Touch Simulation

If you have some specific need to test the touch behavior aswell, notice that while in responsivity simulator mode, your cursor turns into a circle instead, to simulate touch. You can also swipe across the page as you would normally. 

You can still inspect elements while this mode is on as usual.

To exit the responsive mode, just click the button again or you can also use CTRL + SHIFT + M.
