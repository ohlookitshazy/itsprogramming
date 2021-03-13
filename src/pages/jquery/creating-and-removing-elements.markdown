---
layout: post
title:  "Creating and Removing Elements"
date:   2020-05-03
categories: [jQuery]
tags: [programming, jquery, html, css, javascript]
index: 2
---

Manipulating elements is cool and all, but what if we'd like to create some? Or perhaps we have dug ourselves in too deep into the digital jungle or maze and we'd like to remove some dynamically? Let's take a look at how it's done both in vanilla JavaScript and jQuery.

# Creating Elements with JavaScript

Creating HTML elements from scratch in JavaScript is not hard, but it does involve a few function calls:

```javascript
$(document).ready(function () {

    var myCard = document.createElement("div");
    myCard.classList.add("card"); 
    
    var myCardText = document.createTextNode("Some text for the new card.");
    myCard.appendChild(myCardText);

    console.log(myCard);

    var targetElement = document.getElementById("myId");
    targetElement.appendChild(myCard);
});
```

Notice the "$(document).ready()" being used here, so we're sure the element is there. Now let's break it down line by line:

* 3: We create a generic HTML element, here we directly control what is put between the square brackets "< ... >", in our case this will result into a `<div></div>` element being created,
* 4: We add a "card" class to the element class list, it becomes this: `<div class="card"></div>` so that Bootstrap rules can make it look like a card,
* 6: We create a text node, for simplicity - imagine we're just creating a special text object,
* 7: We connect the text object to our previously made object, so the result is: `<div class="card">Some text for the new card.</div>`
* 9: We just log it, to make sure that it's working properly,
* 11: We target an element to add this object inside of,
* 12: We add the new element at the end of the child elements of the targeted element.

In our case - "Take this object, find the div with the id: "myId", which could just be a `<div id="myId" class="col"></div>` and add the card as the last child element inside it." so if it would have a few cards inside of it, it would add this new one after the last one.

**Example:**

```html
<div id="myId" class="col">
  <div class="card">First card!</div>
  <div class="card">Second card!</div>
  <!-- if you use .appendChild(), the element would go here -->
</div>
```

and on the other hand, if you'd use **.prepend()**:

```html
<div id="myId" class="col">
  <!-- then the element would go here instead, before the other "child" elements -->
  <div class="card">First card!</div>
  <div class="card">Second card!</div>
</div>
```

# Removing Elements with JavaScript

Removing elements is easier, all you have to do is target them and call its "parent" element (or node), then call ".removeChild" and pass the element as the target to remove, like this:

```javascript
var removableElement = document.getElementById("someId");

removableElement.parentNode.removeChild(removableElement);
```

Seems logical, but I wish we could write this in a more readable manner. Oh wait, **where's jQuery**?

# Creating Elements with jQuery

What if I told you it's so convenient to create elements via jQuery, that you don't even need to call any extra functions?

```javascript
$("<div>Some card text.</div>");
```

Yup.

<div class="tenor-gif-embed" data-postid="14053511" data-share-method="host" data-width="100%" data-aspect-ratio="1.7131782945736433"><a href="https://tenor.com/view/mindblown-excuse-me-what-me-dr-phil-gif-14053511">Mindblown Excuse Me GIF</a> from <a href="https://tenor.com/search/mindblown-gifs">Mindblown GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>


To add the element class, you can either do it like:

```javascript
var myCard = $("<div class='card'>Some card text.</div>");
```

or if you have dynamic classes being added, based on conditions or whatnot, you can use this:

```javascript
var myCard = $("<div>Some card text.</div>").addClass("card");
```

Now to add the element under a parent element with jQuery, you do this:

```javascript
$("#myId").append(myCard);
```

Nothing surprising there, you just select the parent element and call ".append()". So the full example equivalent to what we did before with JavaScript would be:

```javascript
$(document).ready(function () {
    var myCard = $("<div class='card'>Some card text.</div>");

    console.log(myCard);

    $("#myId").append(myCard);
});
```

Compared to doing the same with just JavaScript:

```javascript
$(document).ready(function () {

    var myCard = document.createElement("div");
    myCard.classList.add("card"); 
    
    var myCardText = document.createTextNode("Some text for the new card.");
    myCard.appendChild(myCardText);

    console.log(myCard);

    var targetElement = document.getElementById("myId");
    targetElement.appendChild(myCard);
});
```

Obviously the amount of code lines needed to do the same functionality, went from 7 to 3. Efficiency literally rose by more than a half here.

# Removing Elements with jQuery

As you might imagine, you just select the element you need (or don't need) and call the ".remove()" function on it:

```javascript
$("#myId").remove();
```

Look at that, you don't even have to select the parent element anymore or anything. 

Just pure convenience.
