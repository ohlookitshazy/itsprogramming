---
layout: post
title:  "What is JavaScript?"
date:   2020-04-25
categories: [JavaScript]
tags: [programming, basics, javascript]
index: 1
---

So far we have looked at HTML and CSS, but you must've noticed the "JS" tab in the Codepen examples.

JS stands for JavaScript. It is a programming language that drives interactivity on the web. Login forms, slideshows, galleries, maps, games are just a few of examples, which JavaScript is used for. 

Let's play around with it in a fresh Codepen. Let's start by changing some content by writing some JavaScript!

<p class="codepen" data-height="271" data-theme-id="dark" data-default-tab="html,result" data-user="itsprogramming" data-slug-hash="bGVWNoP" style="height: 271px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JavaScript Basics">
  <span>See the Pen <a href="https://codepen.io/itsprogramming/pen/bGVWNoP">
  JavaScript Basics</a> by itsprogramming (<a href="https://codepen.io/itsprogramming">@itsprogramming</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

As you see, no CSS is used here, I just added an example paragraph:

```html
<p id="myId">Some text</p>
```

And some JavaScript:

```javascript
document.getElementById("myId").innerHTML = "New text!";
```

Notice that the paragraph was given an "id" that is referenced in the JavaScript. So essentially, the JavaScript states:

"Take the document, get me the element with the id "myId" and set its inner HTML to "New text!"".

It's that easy. 

JavaScript has many uses, but changing content is one of the more common ones. You can also target by class, but that requires a bit more code, because classes can be applied to multiple elements, thus doing:

```javascript
document.GetElementsByClassName("myClass");
```

Will return a collection of all elements, that have the class name "myClass", for example.

To store a value, you use variables. Imagine taking a box, putting a label on it and then putting data into it. In JavaScript it looks like this:

```javascript
var myVariable = 0;
```

This creates a very small "box" in your computers memory, storing the number "0". Let's upgrade our JavaScript:

```javascript
var mySampleText = "New Text!";

document.getElementById("myId").innerHTML = mySampleText;
```

Now we created the variable, stored our custom text in it and provided the variable as the source of information when changing the inner HTML of the selected element.

Still, not too complicated. 

Okay, so now we could get all of the elements by some class into a variable, that's great and all, but now what?

Now we should take each element we retrieved and change its HTML to the custom text. So next up - let's take a look at how data flow is handled.

One way that data flow in JavaScript is handled is with loops. Especially, when interacting with collections of data. 

Here's a simple example of a "for" loop.

```javascript
for (var i = 0; i < myElements.length; i++) {
  
}
```

Okay, now this might look crazy, let's break it down:

1. You create an empty for loop

```javascript
for () {
  
}
```

2. Then you provide the starting point of the loop, which here is just a variable with the number 0.

```javascript
var i = 0;
```

3. Then we create the ending point, in this case we set a condition the loop will run under. When the number we defined becomes greater than the length of the collection (received by writing ".length") the loop will stop, since it defies the condition.

```javascript
i < myElements.length;
```

4. Then we set what happens each loop, we set it to just add one number to the current number stored in the variable.

```javascript
i++
```

So now taking another look at the loop, it makes sense.

```javascript
for (var i = 0; i < myElements.length; i++) {
  
}
```

Currently this loop will do exactly nothing, for as many times as there are elements stored in the "myElements" variable. Instead, we need to make the loop change the HTML for each of the elements returned. 

```javascript
for (var i = 0; i < myElements.length; i++) {
  myElements[i].innerHTML = mySampleText;
}
```

So what is happening here? We take the variable, choose the element that coincides with the current loop count (each loop adds to "i" after it's done). Then sets the HTML like we did earlier.

All of the code taken together, to change the HTML of all elements, that have the class "myClass" we write this HTML:

```html
<p class="myClass">Some text</p>
<p class="myClass">Some text</p>
<p class="myClass">Some text</p>
```

```javascript
var mySampleText = "New Text!";
var myElements = document.getElementsByClassName("myClass");

for (var i = 0; i < myElements.length; i++) {
  myElements[i].innerHTML = mySampleText;
}
```

The Result:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="itsprogramming" data-slug-hash="rNOmaqm" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JavaScript Basics 2">
  <span>See the Pen <a href="https://codepen.io/itsprogramming/pen/rNOmaqm">
  JavaScript Basics 2</a> by itsprogramming (<a href="https://codepen.io/itsprogramming">@itsprogramming</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


Now, we covered a lot of new ideas in this post. Let them sink in, it will take time and it's perfectly normal to have a blank stare currently. The more practice you have, the faster you will associate how each action is represented in code and it will come to you naturally. 

I suggest reviewing the examples periodically, because there is a law called "the law of diminishing returns". What it means is - "used to refer to a point at which the level of profits or benefits gained is less than the amount of money or energy invested" (Source: [Lexico by Oxford](https://www.lexico.com/en/definition/diminish). 

In our context, sitting at a problem for long periods of time doesn't guarantee solving it. It does guarantee burnout though, if abused long enough. Take breaks and let the information "sit" for some amount of time and I can assure you, you'll be productive again in no time!
