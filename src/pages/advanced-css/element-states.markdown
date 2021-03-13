---
layout: post
title:  "Element States"
date:   2020-05-03
categories: [Advanced CSS]
tags: [programming, html, css]
index: 0
---

We've covered a lot of the basics for a lot of stuff so far. Let's take a more detailed look at how we can style HTML elements in different states. Like change color, when the user hovers over a link.

# Element States

So HTML elements have different states. To target specific states of an element, you have to use what's called [a "pseudo-selector"](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes). For example, links can have a CSS selector apply styles, that are activated only when the user hovers a link, button, div and etc. Here's how it looks:

```css
a:hover {
    color: red;
}
```

With that selector, now all links (that don't have more specific selectors) will turn red, when you hover over them!

Now one thing I immediately wanted to do was remove the underline from the links in general, this is how you do it:

```css
a:hover {
    text-decoration: none;
}
```

Cool! We can now customize how any element will look when hovered over! You can change any property you'd like, width, background color, font-weight, anything that fits whatever you're creating.

You have probably noticed that links become a purplish color when you visit them, right?

Turns out, "visited" is a state in itself:

```css
a:visited {
    color: orange;
}
```

Now it can be orange instead!

# Transitioning Between States

When elements go from one state to another, they don't do so instantly, they **transition**. You can control how fast this transition happens, making more subtle changes of UI possible, so that the overall UX is not jarring to the user.

```css
a:hover {
    color: red;
    text-decoration: none;
    transition-duration: 0.5s;
}
```

You can set duration for individual properties, like so:

```css
a:hover {
    color: red;
    font-size: 46px;
    text-decoration: none;
    transition: color 0.5s, font-size 1s;
}
```

Here's also [an example from MDN](https://codepen.io/anon/pen/WOEpva) where a simple navigation menu has these state transitions, but it's more advanced than the example above.

# Transition Types

Adding the property "transition-timing-function", you can really refine the overall transition, the way it happens all the way through from start to finish. 

On the ["transition-timing-function"](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function) page on MDN, you can see multiple ways of adjusting the values in the middle of the transition.

Props to [Andrey Sitnik](https://sitnik.ru/), for creating [this easing cheatsheet](https://easings.net/), so you can understand visually how the speed of the transition varies over the duration! You can of course go the old school way and just try them all out manually.

# Transition Delay

If you'd need a delay before the transition begins, you can use "transition-delay" and provide a similiar value as for duration:

```css
a:hover {
    color: red;
    text-decoration: none;
    transition-duration: 0.5s;
    transition-delay: 1s;
}
```

# Other States

I strongly suggest to check out the full list of CSS pseudo classes [provided by MDN here](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes), just scroll down to the "Index of standard pseudo-classes" and try some of them out!

