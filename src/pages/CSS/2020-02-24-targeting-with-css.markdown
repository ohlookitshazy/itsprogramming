---
layout: post
title:  "Targeting with CSS"
date:   2020-02-24
categories: [CSS]
tags: [programming, html, basics, css]
index: 1
---

Let's continue where we left off in the previous post.

## HTML

```html
<html>
  <head>
    <link rel="stylesheet" href="/styles.css">
  </head>
  <body>
    <h1 class="my-class">Lorem ipsum dolor sit amet.</h1>
  </body>
</html>
```

## CSS

```css
h1 {
    color: red;
}

.my-class {
    color: green;
}
```

## Result

<p class="codepen" data-height="169" data-theme-id="dark" data-default-tab="result" data-user="itsprogramming" data-slug-hash="xxGgYWW" style="height: 169px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Stylesheet Example 2">
  <span>See the Pen <a href="https://codepen.io/itsprogramming/pen/xxGgYWW">
  Stylesheet Example 2</a> by itsprogramming (<a href="https://codepen.io/itsprogramming">@itsprogramming</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

# Targeting with CSS

In the above CSS snippet, you see that the element is targeted both by the "element" and "class" CSS selectors.

# Targeting by ID

You can also target by "id". Instead of the dot infront of your custom class name (it can be anything, but spaces must be replaced by something, usually a dash "-"), you use the hashtag.

```css
h1 {
    color: red;
}

.my-class {
    color: green;
}

#my-id {
    color: blue;
}
```

In order for this to work, you have to add an "id" attribute to your HTML element, just like you did with "class". Except two things, selectors that change something but select the element by "id", will overwrite whatever is done by "class" selectors. The second thing, is that there can be only one unique "id" for the entire HTML document. It's more "important" and usually is used for dynamic styles, that change depending on what the user is doing, for example.

```html
<html>
  <head>
    <link rel="stylesheet" href="/styles.css">
  </head>
  <body>
    <h1 id="my-id" class="my-class">Lorem ipsum dolor sit amet.</h1>
  </body>
</html>
```

As expected, the heading turns blue. 

The hierarchy of "importance" looks like this:

1. !important
2. inline
3. id
4. class
5. element

So far we've covered targeting the element directly. Targeting by class and by id. 

**What does "inline" mean?** It means writing CSS "in line" with HTML, like we did before! It is not recommended though, since it decreases maintainability.

**What is "!important"?** Simply, it overrides any selectors (unless other !important ones exist) that have this added element. You add it like this:

```css
h1 {
    color: red !important;
}

.my-class {
    color: green;
}

#my-id {
    color: blue;
}
```

Instead of using it to select elements, you just basically state - this value here? Important! 

This is also not recommended, because it brings you back to managing styles individually and while ok in some scenarios, it decreases maintainability. 

Try experimenting with the different ways to select an element and when which selector is the most "important". [Here is a great post, that explains how the "importance" is calculated.](https://css-tricks.com/specifics-on-css-specificity/#article-header-id-0)
