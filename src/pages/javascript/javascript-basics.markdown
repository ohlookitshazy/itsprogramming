---
layout: post
title:  "JavaScript Basics"
date:   2020-04-26
categories: [JavaScript]
tags: [programming, basics, javascript]
index: 1
---

We looked at a few ideas of JavaScript in the previous post, let's go in more detail about each one.

# Storing Values

We stored numbers and text in variables so far, what else can you store?

Here are some of the basic JavaScript data types:

* Numbers
* Strings (Text)
* Booleans (true or false)
* Arrays (collections)

Let's try out all of them!

```javascript
var myNumber = 1;
var myString = "Some text";
var myBoolean = true;
var myArray = ["First text", "Second text", "Third text"];
```



If you replace any HTML value with any of the above, you will see their values output instead. So now you might see, that whenever you login somewhere on the internet, your username is handled as a "string". 

Text is called as "strings", because they are "strings of text characters". It is not only limited to text though, you can also do this:

```javascript
var myNumber = 1;
var myNumber = "1";
```

Both will seem to return the same result. In fact, if you try something weird, like:

```javascript
var myWeirdExperiment = 5 + "Text";
```

JavaScript will take care of transforming the number to a string for you behind the scenes and then merge both strings. So the output would be: "5Text".

JavaScript also does math, so you can do a lot of math with it. Here is [a reference from MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators). We already used one of math operators (i++) when looking at the "for" loop in the previous post.

# Arrays

We also looked at how to select items within arrays in the for loop. Here is a similiar example:

```javascript
var mySampleText = "New Text!";
var myElements = document.getElementsByClassName("myClass");

myElements[0].innerHTML = mySampleText;
```

Now let's add a few elements to the page, to see the selection happen:

```html
<p class="myClass">Some text</p>
<p class="myClass">Some text</p>
<p class="myClass">Some text</p>
```

Here is a full example:

<iframe width="100%" height="300" src="//jsfiddle.net/itshazy/p4oh87fe/embedded/js,html,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Very basic. You store a string of text in a mySampleText variable, then store all elements with a class "myClass" into a myElements variable.

As you see, selecting **myElements[0]** instead of myElements[i] (which wouldn't work anyway here as we don't have a loop running and creating this "i" variable) applies the custom text to the first element. Why is that?

# 0 Indexing

It's because collections are generally "0 indexed", which means the "index" or numbering of each element within the collection begins with 0. Logically, if you would want to change the content of the second element, you just target **myElements[1]** and **myElements[2]** for the third and so on. Just imagine an engineer at some point in time said "We are going to start counting items from 0 and not from 1" and everyone else was like "ok" and now we're here.

While we're still on the topic of collections, we also used the length of a collection for keeping the loop running in the previous post:

```javascript
var myElements = document.getElementsByClassName("myClass");

var amountOfElements = myElements.length;
```

This, as you might imagine, will store the number of items in the collection in a separate variable. We are accessing a built-in property of JavaScript collections. We can output this number as you'd expect:

<iframe width="100%" height="300" src="//jsfiddle.net/itshazy/okduacr9/embedded/js,html,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

You can also get a length of a string, since it's just a "string of characters" by using ".length".

# Booleans in Data Flow

So what about the boolean data type? It can only hold two values "true" or "false" and is used to manage data flow with conditions.

Let's try it out (with the same HTML as before):

```javascript
var mySampleText = "New Text!";
var myElements = document.getElementsByClassName("myClass");

if (myElements.length < 3){
  myElements[0].innerHTML = mySampleText;  
}
```

Here we have set an "if" statement for code to execute if the condition in the "argument" or between the parentheses "()" is true. 

This one isn't, so the HTML elements hold the initial text. If you increase the number for how many elements in the collection are the maximum allowed ones:

```javascript
if (myElements.length < 5){
  myElements[0].innerHTML = mySampleText;  
}
```

Then you will see it passes as true now and so the first element of the collection has its text changed.

Now you might think - "Do I build ALL of the logic in my software like this? It's just switches of "true" and "false" and data flowing through "if" statements and loops?"

yes.

# If ... else

You don't need to write a separate if statement for each condition though, you can chain them:

```javascript
var mySampleText = "New Text!";
var myOtherText = "Other Text!";

var myElements = document.getElementsByClassName("myClass");

if (myElements.length < 5){
  myElements[0].innerHTML = mySampleText;  
} else if (myElements.length == 5) {
  myElements[0].innerHTML = myOtherText;  
}
```

As you see the text is changed for the first item to "New Text!" because **myElements.length < 5** is still true, we only have 3 elements defined in the HTML. Add two more, so now you'd have:

```html
<p class="myClass">Some text</p>
<p class="myClass">Some text</p>
<p class="myClass">Some text</p>
<p class="myClass">Some text</p>
<p class="myClass">Some text</p>
```

Now you should see the "Other Text!" be applied instead, because element count now is indeed 5. Also notice, that to compare a value against a value, we used "==" and that's because a single "=" sign is reserved for storing values into variables. Read more about comparison operators in the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators).

<iframe width="100%" height="300" src="//jsfiddle.net/itshazy/5e2kpw61/embedded/js,html,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Cool! So we went through each thing we did in the previous post into more detail, by now you should be able to read the code in it much easier.
