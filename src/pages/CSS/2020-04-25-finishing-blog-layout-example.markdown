---
layout: post
title:  "Finishing the Blog Layout Example"
date:   2020-04-25
categories: [CSS]
tags: [programming, html, basics, css]
index: 6
---

Let's finish the blog template! We will continue exactly where we left off in the previous post.

We will make the whole thing responsive, as in - able to change form for different screens and retaining the readability.

So here is how we left the project previously:

<p class="codepen" data-height="997" data-theme-id="dark" data-default-tab="html" data-user="itsprogramming" data-slug-hash="KKpbJxy" style="height: 997px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Blog Layout Example 4">
  <span>See the Pen <a href="https://codepen.io/itsprogramming/pen/KKpbJxy">
  Blog Layout Example 4</a> by itsprogramming (<a href="https://codepen.io/itsprogramming">@itsprogramming</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

In order to make the design responsive, we will change the way that the width of the elements is calculated, since phones, as an example, have a more vertical layout (unless you usually use it in landscape mode) and so the layout either breaks or is scaled down like an image and you have to pinch and zoom to navigate, which is less than ideal.

To enable responsive behavior in general for a page, you must  start by adding a meta tag element inside of the "head" of the page:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

So now the "head" should look like this:


```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
</head>
```


Then let's create a bit of space between the content and the sidebar with a "**margin-right**" property:

```css
.post {
  width: 40%; 
  display: inline-block;
  margin-right: 10%;
}
```

Now let's implement responsive design behavior via media queries:


```css
@media only screen and (max-width:850px) {

}
```
Quite different than the CSS we wrote before, but it's purpose is pretty much self-explanatory, since it's written in plain english. In other words it says:

"These CSS rules only apply to when the media is represented on a screen and its width is under 850px."

So let's add in a few selectors:

```css
@media only screen and (max-width:850px) {
  .sidebar, .post, .content {
    width: 60%;
  }
}
```
Now we made it so, that when the page is viewed from a screen, that is < 850px wide, the sidebar, post and content (in no particular order) are going to be exactly wide as 60% of the entire screen width. That's it, if viewed on a bigger screen, these rules don't apply.

Cool! We have added a bit of responsivity to the design! You can verify that by looking at [this example](https://cdpn.io/itsprogramming/debug/QWjdXzR/DqrDdgRyYRPr) from a phone. Then try rotating the phone, so that the screen width is more than 850px and you will see the content realign to take a more horizontal structure. Cool! 

**Tip:**

As of October 2016, more users are accessing content online via their mobile devices rather than desktop computers, so keep this in mind when developing designs.

<img src="https://cdn.broadbandsearch.net/blog/mobile-desktop-internet-usage-statistics/Internet_Usage_Worldwide.jpg">
<a href="https://www.broadbandsearch.net/blog/mobile-desktop-internet-usage-statistics" target="_blank">Source: broadbandresearch.net</a>

Feel free to play around with the example, make it fit your taste!
