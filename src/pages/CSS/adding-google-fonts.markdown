---
layout: post
title:  "Adding Google Fonts"
date:   2020-03-28
categories: [CSS]
tags: [programming, html, basics, css]
index: 2
---

Let's start customizing HTML by changing fonts.

We will use the free font collection called "<a href='https://fonts.google.com/' target="_blank">Google Fonts</a>".

It has many hundreds of fonts available for free. So choose one, like "Roboto" for example. Click the "+" in the upper right corner:

<img src="./GoogleFonts_Roboto.png"/>

This will add it to your font selection.

<img src="./GoogleFonts_FontSelection.png"/>

Then click on the selection title to open it.

<img src="./GoogleFonts_RobotoSelection.png"/>

Then copy the <code class="language-html"><link></code> element into the <code class="language-html"><head></code> of your html file, like this:

```html
<html>
  <head>
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
  </head>
  <body>
    <h1>Lorem Ipsum Title</h1>
  </body>
</html>
```

Now you can just set the new font to any text element with CSS. Copy the second part in the Font Selection window and here I will apply it inline, to keep the example minimal. 

```html
<html>
  <head>
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
  </head>
  <body>
    <h1 style="font-family: 'Roboto', sans-serif;">Lorem Ipsum Title</h1>
  </body>
</html>
```

Now you should see the font change to the new one.

<iframe width="100%" height="240" src="//jsfiddle.net/itshazy/0mdv8s3w/embedded/html,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Now you can try to change the font via the CSS file, if you get stuck, I have added the proper CSS version below:

<iframe width="100%" height="240" src="//jsfiddle.net/itshazy/0bm84e36/1/embedded/html,css,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

You can also load the fonts via the "Resources" tab on the left, when viewing the full JSFiddle example.