---
layout: post
title:  "Animate.css"
date:   2020-05-03
categories: [Advanced CSS]
tags: [programming, html, css]
index: 2
---

What if I told you that there exists a CSS animation framework as well? One of my favorites is called "Animate.css" and it is found [here](https://daneden.github.io/animate.css/). Though I don't use it a lot, when I actually used it for my personal projects, it was very easy.

# Animate.css

To get started, just download the CSS file from their website and import it into your project!

You can also import it into a Codepen, like I've done below:

<iframe width="100%" height="597" src="//jsfiddle.net/itshazy/Lh3cv74w/1/embedded/html,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

As you saw on their site, the dropdown displays many animation names, so to get the animation going, all you have to do is add the animation name to an element "animation" property, as we did before. 

Let's try it out:

<iframe width="100%" height="597" src="//jsfiddle.net/itshazy/z4nr9pga/1/embedded/html,css,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

To have it play once, just change the value "infinite" to "1".

For more advanced usage, add JavaScript logic to execute the animation only after the document has been fully loaded. Perhaps display a [Bootstrap spinner animation](https://getbootstrap.com/docs/4.4/components/spinners/) while it's loading? Obviously you'd need tons of content, to make the spinner visible for a longer time. 

You could actually mimic that "loading" effect by setting a delay (or timeout) in JavaScript!

**Example:**

<iframe width="100%" height="300" src="//jsfiddle.net/itshazy/mkpan1uh/2/embedded/js,html,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

The way I defined the HTML that's going into the ".html()" function is important, I didn't use either single quotes ('') or double quotes ("") here, I used what is known as "backticks" or (``). Usually they're located above your "TAB" key. They allow you not only to break the content into multiple lines, like above, but also to directly input variables into your strings, like this:

```javascript
var someVar = 5;

var someVarInAString = `This is a variable inside of a string: ${someVar}`;
```

This helps code readability a lot. Read more about them [in the MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

So as you saw on the [Animate.css website](https://daneden.github.io/animate.css/), they say "Just-add-water CSS animations", that's all there is to it. Experiment with them and I'm sure you'll get your UI all modern very quickly, don't overdo it though. 

# Other CSS Animation Frameworks

Of course Animate.css isn't the only one out there, [here's a list of a top 9 compiled by the folks at Sitepoint](https://www.sitepoint.com/our-top-9-animation-libraries/).

From that list, apart from "Animate.css" and "Hover.css", I haven't used any of the other ones, but i'd suggest trying them out!