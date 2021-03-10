---
layout: post
title:  "Code Commenting"
date:   2020-04-26
categories: [The Web]
tags: [the web, programming, basics, javascript]
index: 1
---

We have so far looked at 3 different languages that make up the web, so we'd probably want to share our code or atleast leave some small notes about what the code does or is meant to do, or whatever else that helps you navigate that small digital jungle that you've created for yourself.

So let's take a look at code commenting.

In one sentence - It's code that will be ignored.

# Commenting in HTML

Say we'd like to explain a class being on an element for whatever reason, we'd do it with a comment:

```html
...
<body>
    <!-- This will be used by JavaScript later to generate content and put it inside this element -->
    <p id="myId">Some text</p>

    <script src="/example.js"></script>
</body>
...
```

As you see it's just a matter of wrapping your text within these arrow looking things "<!--" and "-->" and this code will not execute. So developers chose it as a way to pass notes.

If you wrap any piece of content, perhaps like this:

```html
...
<body>
    <!-- This will be used by JavaScript later to generate content and put it inside this element -->
    <!-- <p id="myId">Some text</p> -->

    <script src="/example.js"></script>
</body>
...
```

It's called "commenting out" code. So now the output from whatever is in "example.js" won't have an element to output it's content to.

# Commenting in CSS

In CSS it's very similiar:

```css
.myClass {
  background: red;
  /* color: white; */
}
```

You just do it with these slashes and stars instead. A comment would look like this:

```css
.myClass {
  /* Keep the background transparent so that the text can be readable. */
  background: transparent;
  color: black;
}
```

# Commenting in JavaScript

Same thing with JavaScript:

```javascript
var myVariable = 0;

// var myOtherVariable = myVariable + 5;

alert(myVariable);
```

By the way, the "alert()" function is also coming from the window object, thus you can summon error alerts or show other information, like from variables for example.

Additionally, here are a few articles about how to comment properly:

[https://www.sitepoint.com/how-good-are-your-html-and-css-comments/](https://www.sitepoint.com/how-good-are-your-html-and-css-comments/)

[https://www.hongkiat.com/blog/source-code-comment-styling-tips/](https://www.hongkiat.com/blog/source-code-comment-styling-tips/)
