---
layout: post
title:  "Intro to CSS and Separation of Concerns"
date:   2020-02-24
categories: [HTML]
tags: [programming, html, basics, css]
index: 4
---

Previously we wrote styles directly on HTML elements. That is not the most convenient way, because imagine managing 50 files like those and what amount of effort it would take to just change the font style across all of them.

This is where the term "Separation of Concerns" comes in. It means that each file should be responsible for it's own thing. HTML files are meant to hold content, not styles. We have a different language to write the styles of a web page in. It's called CSS.

CSS stands for Cascading Style Sheets. Style sheets mean that the file contains only CSS code. Cascading means that it is read top to bottom and anything above can be changed by a new style below.

Let's start fresh with only the html, head and body tags in your index.html file.

```html
<html>
  <head>

  </head>
  <body>
  
  </body>
</html>
```

To create a stylesheet, create a new file right next to your "index.html", name it "styles.css" (for stylesheet) and then link it to the HTML document with a `<link>` tag, like this:

```html
<html>
  <head>
    <link rel="stylesheet" href="/styles.css">
  </head>
  <body>
  
  </body>
</html>
```

Now create a heading element with some text in it.

```html
<html>
  <head>
    <link rel="stylesheet" href="/styles.css">
  </head>
  <body>
    <h1>Lorem ipsum dolor sit amet.</h1>
  </body>
</html>
```

Now open your "styles.css" and write:

```css
h1 {
    color: red;
}
```

You should now see your text turn red!

<iframe width="100%" height="300" src="//jsfiddle.net/itshazy/qotpmg9k/embedded/html,css,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

The CSS is very basic, you're targeting the "h1" element directly and changing the value, of the property called "color" to "red".
You can add any color you want. Even in Hex and RGB color codes.

```css
h1 {
    color: #FF0000;
}
```

```css
h1 {
    color: rgb(255,0,0);
}
```

Both of the above will still color the text red. This is the proper way of styling HTML elements and their content. You can target elements in a few more ways and one way is more "powerful" than the previous. The way we targeted is by **targeting the element**. You can also target by **class**.

# Targeting By Class

Clear everything out of the "styles.css" file except this code:

```css
h1 {
    color: red;
}
```

Now add a "class selector" like this:

```css
h1 {
    color: red;
}

.my-class {
    color: green;
}
```

And now make the CSS selector actually find the target in the linked HTML file by adding a "class" property to an HTML element, like this:

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

And surely enough, the heading turned green!

<iframe width="100%" height="300" src="//jsfiddle.net/itshazy/4j1ep8us/1/embedded/html,css,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

# Separation of Concern

I wish to highlight this idea again, because it's ultimately important to be lazy in programming. If you have to do the same exact thing 3 or more times in a row, over and over again, you could probably automate it. 

In the context of HTML and CSS, separation of concerns allows you to now link this CSS file in as many HTML files you want and unless there are styles in the HTML itself, that say otherwise, all of the "h1" headings should turn green. This minimizes the places you need to add changes down to one. The CSS file.

When creating programs, always try and imagine how code should be separated by it's main concern. 

The content lives in HTML files. 

The styles live in CSS files.
