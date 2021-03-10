---
layout: post
title:  "Getting Started with jQuery"
date:   2020-05-03
categories: [jQuery]
tags: [programming, jquery, html, css, javascript]
index: 1
---

So jQuery seems like a very useful framework, let's try it out! You probably noticed the word "query" in "jQuery", it means "to ask for something". So in this case you could associate this framework allowing to ask you for stuff via JavaScript more easily. When, for example you'd like something out of a database, you would "query" for it, just to give a little more context.

# How to jQuery?

As the jQuery website states: 

>"It makes things like **HTML document traversal and manipulation**, **event handling**, **animation**, and **Ajax** much simpler with an easy-to-use API that works across a multitude of browsers. If you're new to jQuery, we recommend that you check out the jQuery Learning Center."

Let's dive into each of these areas (be sure to check out the ["jQuery Learning Center"](https://learn.jquery.com/) too!).

Let's load up a fresh project, with Bootstrap in it, so we also get jQuery and some UI to play with. I will use Codepen to avoid writing a lot of redundant code, but so you can still see the full picture.

<iframe width="100%" height="300" src="//jsfiddle.net/itshazy/7ytr3bpL/embedded/html,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Just a simple container div with text centered, via Bootstrap class "text-center", so that it looks tidy.

# Getting Started

So previously you probably looked at all of the functions provided by jQuery (atleast briefly). So you probably understood that there's a **ton** of them. For many different situations and many different functionalities. 

Let's start by looking at the basic ones, then build up from that. 

# Document Ready?

As we are adding more and more code, it will take longer and longer the website to load. So you might experience issues, executing JavaScript before the document is fully loaded.

That's why there's a function that executes only when the document is ready. This is the first most important concept to grasp. That you should allow the page to load and only then execute JavaScript. Else imagine having a ton of content coming in, then JavaScript is executing in between. Then it tries to select an object that's not fully there yet. Your internet has a hiccup and the page or other parts of JavaScript break down. 

That's what your users could see one day. 

That's why you wait for **the document to be ready**.

You do it like this:

```javascript
jQuery(document).ready(function () {
    console.log("Document loaded!");
});
```

Or, like this:

```javascript
$(document).ready(function () {
    console.log("Document loaded!");
});
```

As you see, they're equivalent in the result, they both log something to the console once the document is ready. The only difference is in the way you can use the "jQuery" or the "$" to write code. The "$" approach is more favorable and it's just less stuff to read. 

But what's really happening there?

We're just passing the "document" object to the jQuery object, or "$" and calling it's ".ready()" function, then executing something via an anonymous function. 

# Selecting DOM Elements

>"What does DOM mean?"

DOM stands for - Document Object Model.

It's the hierarchy of your pages elements, which is read when selecting elements in JavaScript and edited if you change those elements. You could also say "the stuff that's on the page" if you'd like. Not precise, but is more convenient until the association sets in.

As we saw in simple/vanilla/pure JavaScript, [we can select elements by id](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) like so:

```javascript
document.getElementById("id");
```
You would do the same with jQuery, like this:

```javascript
$("#id");
```

>"Woah, that starts to look like CSS!"

```css
#id {

}
```

Correct. jQuery utilizes the way you **query** for elements in CSS. It's that "query" word again. It makes sense though. 

>"Cool! But.. why though?"

Remember, how jQuery is there to make your life easier? With this one convention, it turns regular JavaScript selection types:

```javascript
document.getElementById("id");
document.getElementsByClassName("className");
document.getElementsByTagName("div");
```

can be done like this instead:

```javascript
$("#id");
$(".class");
$("div");
```

Much less redundant stuff to write (and read), if you ask me!

Just to clarify, you'd then store and/or interact with elements as usual:

```javascript
var someElement = $("#id");

someElement.innerHTML("New content!");

// or

$("#id").innerHTML("New content!");

// is fine too, if you don't need to store the element in a variable
```

Also forget about writing ".innerHtml()". Those were your "pre-jQuery" days, now all you need to write is ".html()", so these two are equivalent:

```javascript
$("#id").innerHTML("New content!");
$("#id").html("New content!");
```

# Summary

jQuery is very convenient, it turns regular boring ol' JavaScript:

```javascript
document.getElementById("id").innerHTML("New text!");
```

Into modern and efficient JavaScript:

```javascript
$("#id").html("New text!");
```

And before you ask "Oh but which way should I choose and for what situations?", let me give you my opinion on using frameworks in general.

# To Framework or not to Framework?

Use frameworks as much as possible. They're there for convenience. Use them until you hit a "wall" or find a problem, which that framework can't solve in a simple way. Then resort to using vanilla JavaScript to fix it. Then find or build a better framework. Repeat.

If we wouldnt've used frameworks, we'd still be using low level languages to write code.

Nowadays though, JavaScript and other frameworks spawn every day. They die every day too and that's ok. You will get overwhelmed and that's ok too. The tools don't make the artist. That's why, in my opinion, you shouldn't attach yourself to them and be ready to switch, once it's convenient.

If you'd ask me specifically about using vanilla JavaScript or jQuery, I'd propably reply with: **"I hate googling the same stuff over and over, which one is easier to remember? Which allows me to write code faster?"**.

So to sum up, I'd suggest pursuing practicality, when it comes down to questions without a concrete answer. You could use both interchangeably if that's your thing. 

Bend electricity in any way you want, it's up to you.











