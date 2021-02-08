---
layout: post
title:  "Adding Icons"
date:   2020-05-04
categories: [CSS]
tags: [programming, html, basics, css]
index: 4
---

Importing icons is just as easy as importing custom fonts. My favorite place to turn to, when I need any icons is [fontawesome.com](https://fontawesome.com/). As of writing this post, they have [1588 free icons](https://fontawesome.com/icons?d=gallery&m=free) for you to use!

# Importing Font Awesome

To get started i'd suggest getting their CDN link from [here](https://fontawesome.com/start) all you need to do is provide your e-mail, sign up and then you should see your font kit on your profile page. 

After you've found it, you should see a snippet like this:

```html
<script src="https://kit.fontawesome.com/xxxxxxxxxx.js" crossorigin="anonymous"></script>
```

With your own unique code inside.

As the tutorial on the right shows, all you have to do is just copy this link into the "head" of your page and that's it!

# Using Font Awesome

After it's imported, head back to the [free icon list](https://fontawesome.com/icons?d=gallery&m=free) and choose any, like [the address book icon](https://fontawesome.com/icons/address-book?style=solid). At the top of the page, you will find an element definition, like this:

```html
<i class="fas fa-address-book"></i>
```

So just click it to copy it, then go into your html and paste it!

# Importing FontAwesome in CodePen

You can import Font Awesome into a CodePen example just by clicking the gear icon at the top of the CSS window and finding font-awesome.css via the searchbar.