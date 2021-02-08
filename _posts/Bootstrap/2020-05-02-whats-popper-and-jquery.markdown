---
layout: post
title:  "So What's Popper and jQuery?"
date:   2020-05-02
categories: [Bootstrap]
tags: [programming, bootstrap, html, css, javascript]
index: 8
---

We've covered the majority of Bootstrap in big steps by now. We haven't yet looked at the other 2 script imports, namely "Popper" and "jQuery", what are those?

# Popper

If you follow the [script resource link](https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js):

```html
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
```

You will see this at the very top:

```javascript
/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
*/
```

Ok, so it's a JavaScript framework of some sort, made by Federico Zivolo. Let's find it on the internet.

I found [this one](https://popper.js.org/docs/v2/) which seems to be the one. It seems that it deals with tooltips and popovers and in this case, Bootstrap builds off of this functionality. These docs are for v2 though and I haven't used either v1 or v2 separately from Bootstrap, so I can't comment the usefulness of this framework. I'd suggest trying it out, maybe it's the best thing ever? Who knows?

# jQuery

Now [jQuery](https://jquery.com/) is a very broadly used framework, you will find it pretty much anywhere. Why? Because it's main idea is to ease development with JavaScript. It brings in [many useful functions](https://api.jquery.com/) to allow you faster and more efficient development with JavaScript.

It even has a separate library [for UI stuff](https://jqueryui.com/) too! For free! Great!

In a few words - Remember the ease of mind that you felt when you realized you won't have to write code from 0 for every single UI element, since other people have already done it for you. Imagine the same, but with JavaScript.