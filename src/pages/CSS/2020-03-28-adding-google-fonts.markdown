---
layout: post
title:  "Adding Google Fonts"
date:   2020-03-28
categories: [CSS]
tags: [programming, html, basics, css]
index: 3
---

Let's start customizing HTML by changing fonts.

We will use the free font collection called "<a href='https://fonts.google.com/' target="_blank">Google Fonts</a>".

It has many hundreds of fonts available for free. So choose one, like "Roboto" for example. Click the "+" in the upper right corner:

<img src="/assets/img/GoogleFonts_Roboto.png"/>

This will add it to your font selection.

<img src="/assets/img/GoogleFonts_FontSelection.png"/>

Then click on the selection title to open it.

<img src="/assets/img/GoogleFonts_RobotoSelection.png"/>

Then copy the <code class="language-html">&lt;link></code> element into the <code class="language-html">&lt;head></code> of your html file, like this:

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

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="itsprogramming" data-slug-hash="GRJPwWE" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="GRJPwWE">
  <span>See the Pen <a href="https://codepen.io/itsprogramming/pen/GRJPwWE">
  GRJPwWE</a> by itsprogramming (<a href="https://codepen.io/itsprogramming">@itsprogramming</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Now you can try to change the font via the CSS file, if you get stuck, I have added the proper CSS version below:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="html,result" data-user="itsprogramming" data-slug-hash="vYOvvoP" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Google Fonts Example 2">
  <span>See the Pen <a href="https://codepen.io/itsprogramming/pen/vYOvvoP">
  Google Fonts Example 2</a> by itsprogramming (<a href="https://codepen.io/itsprogramming">@itsprogramming</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
