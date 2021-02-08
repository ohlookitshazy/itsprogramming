---
layout: post
title:  "What is Bootstrap?"
date:   2020-05-01
categories: [Bootstrap]
tags: [programming, bootstrap, html, css, javascript]
index: 1
---

Now that we know what dev tools are and what the different windows can be used for, let's put it to good use. So let's bring in more code to look at and learn how to build modern, responsive websites in a very practical way.

# Bootstrap?

As you saw previously - code becomes more practical, the more it can be reused. It saves you time and decreases chances of introducing bugs, it also improves maintainability. With that being said, you will be using code others have written a lot. 

So obviously people have been building websites for decades, obviously they've made so called "frameworks", which make creating website layouts faster, by already giving you premade CSS rules and JavaScript to let you get started very quickly.

So let's take a look at [Bootstrap](https://getbootstrap.com/).

Bootstrap was made [by folks at Twitter](https://getbootstrap.com/docs/4.4/about/overview/).

You can view some of the website templates they have [here](https://getbootstrap.com/docs/4.4/examples/).

To learn about the framework itself, you can (and should) read [the docs](https://getbootstrap.com/docs/4.4/getting-started/introduction/).

# Importing Bootstrap

So how does it work? Since it's code someone has already written, you have to download it and import it the regular way via links in the "head" element or in the "body" element, for JavaScript. Right? 

You can do that or you can import the file from a website too. In the bootstrap docs, the "Quick start" section, you can see a CSS import link with the "href" attribute pointing to a different website. This is perfectly normal and a frequently used approach. It's called "loading resources from a CDN". In the first paragraph, you see "Use BootstrapCDN, provided for free by the folks at StackPath.", so that means that you can freely use these resources, that are sitting somewhere on a server, maintained by folks at StackPath.

So just import it the usual way with [the link in the docs](https://getbootstrap.com/docs/4.4/getting-started/introduction/#css).

## What about JavaScript?

Scrolling down, you see 3 script elements provided to you? Why so many? Because it's common to see that frameworks use other frameworks too. Here, in the order provided:

* jQuery is imported first (it's a JavaScript framework we'll go into later).
* Popper is imported second, it needs jQuery to operate.
* Bootstrap is imported third, because it needs both of the above (important).

So to import it, just copy all three like they are provided and place them just before the closing "body" tag, as usual.

Here's bootstrap fully imported (CSS and JS):

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>

<body>

    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>
</body>

</html>
```

Feel free to copy the example if you get stuck.

# How to be sure everything works?

The first place you should always look, is the console in dev tools (F12). Any errors with your resources are shown there. If you get no errors or warnings, you should be good.

You can also test it by just trying to add an element, that is defined by Bootstrap, like the "h1" element:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>

<body>

    <h1>Test</h1>
    
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>
</body>

</html>
```

# Adding Bootstrap in Codepen

You might be wondering: "Ok, but what if i'd like to play around with Bootstrap in Codepen?"

So to do that, you don't have to import it manually every time. It's as simple as:

* Clicking the cogwheel icon in the "CSS" window,
* Find the searchbar under "Add External Stylesheets/Pens",
* Type: "Bootstrap",
* Select: "twitter-bootstrap",
* Click "Save & Close"

Now you can just write HTML without any noise:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="itsprogramming" data-slug-hash="QWjqPOr" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Bootstrap Example">
  <span>See the Pen <a href="https://codepen.io/itsprogramming/pen/QWjqPOr">
  Bootstrap Example</a> by itsprogramming (<a href="https://codepen.io/itsprogramming">@itsprogramming</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

