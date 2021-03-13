---
layout: post
title:  "Animations"
date:   2020-05-03
categories: [Advanced CSS]
tags: [programming, html, css]
index: 1
---

We've kind of started animating stuff, but those aren't quite animations. To really get serious about animating elements, transitions wont cut it. So next up let's look at animating stuff with CSS!

# The "animation" Property

So there is a property "animation" that you can add to elements. Similiarly to "margin" you can either choose to define all values in one property declaration or target specifically with "animation-".

## Creating Animations

At first you **create an animation**, you have to use the "@keyframes" and define a name for it, like this:

```css
@keyframes myAnimation{
    from {

    }
    to {

    }
}
```

Could it be any simpler? You define properties that exist in the beginning and at the end of the animation. You can add properties as usual within both inner selectors, like change colors the same as before on hover, but without any hovering needed!

```css
@keyframes myAnimation{
    from {
        color: black;
    }
    to {
        color: red;
    }
}
```

## Selecting Animations

After you've created the animation, now you have to select it for your element:

```css
p {
    animation: myAnimation;
}
```

Nothings happening! Because you havent set how (timing-function) or even for how long (iteration-count) it should run. Do it like this:

```css
p {
    animation: myAnimation 0.3s linear;
}
```

Or this:

```css
p {
    animation-name: myAnimation;
    animation-duration: 0.3s;
    animation-iteration-count: linear;
}
```

Cool! Now it will play exactly once. To have it play forever, specify "infinite" instead.

```css
p {
    animation-name: myAnimation;
    animation-duration: 0.3s;
    animation-iteration-count: infinite;
}
```

Cool! Now you're on your way to create those [90s type websites, which apparently still exist](https://www.lingscars.com/). I somehow like that website though. It has it's charm. Who knows, maybe we make a loop and all of this fancy "Material", "Solid Color", "Minimalism" design converts into this again. 

# Other Animation Specific Properties

So what other properties do animations have?

As [MDN states](https://developer.mozilla.org/en-US/docs/Web/CSS/animation):

>The **animation** shorthand CSS property applies an animation between styles. It is a shorthand for **animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode**, and **animation-play-state**.

So you can basically write out all of those on one line:

```css
p {
    animation: 
        myAnimation /* animation-name */
        3s /* animation-duration */
        ease-in /* animation-timing-function */
        1s /* animation-delay */
        infinite /* animation-iteration-count */
        reverse /* animation-direction */
        both /* animation-fill-mode */
        running; /* animation-play-state */
}
```

I am not sure why they have the animation name at the end for the example on the MDN docs, but I placed it in front, for consistency to the quote above.

You can also break CSS selectors vertically like that, if it helps readability, the web browser doesn't care.

We covered the name, duration, timing function and delay previously, but what about the other properties?

## animation-iteration-count

This property specifies what number of times the animation should run. Numbers, fractions and "infinite" is fine as you can see in [the MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count).

## animation-direction

This just provides which direction the animation should run. The only choices are:

* normal
* reverse
* alternate
* alternate-reverse

Alternate will run the animation start to finish, then go back to start, basically.

## animation-fill-mode

This one defines when the styles should be applied, before or after the animation.

## animation-play-state

This property specifies if the animation should run or it is paused.