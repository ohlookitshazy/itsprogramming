---
layout: post
title:  "JavaScript Functions"
date:   2020-04-26
categories: [JavaScript]
tags: [programming, basics, javascript]
index: 3
---

There is a way to reuse your code within the file itself too, very useful when your code grows into hundreds of lines.

# Functions

You can write a JavaScript function once and then re-use it in countless other scenarios. This is how you define a function in JavaScript:

```javascript
function addTwoNumbers(){

}
```

To re-use it, or more precisely - "call" it, you'd write this:

```javascript
addTwoNumbers();
```

As you see, the difference, is the curly braces "{}" they define the function "body" and the other stuff, like the name "addTwoNumbers" and the input arguments, which we haven't added yet. 

For calling a function, you have to have it defined in the code. If you'd have the function definition in a .js file that is not linked, it will not work.

# Input Arguments

To make the example function work, obviously we have to give it two numbers to add, so let's do that.

```javascript
function addTwoNumbers(x, y){

}
```

This specifies, that you can insert two values, or arguments into this function. These are only the references that will be applied to the function and will exist only within the function, so that you can work with the values in the function itself.

```javascript
function addTwoNumbers(x, y){
  x + y;
}
```

Now we have defined the calculation of both elements. So what should we do with the result? Let's change the text of a HTML paragraph to it!

```html
<p id="myId"></p>
```

With a simple HTML element defined, we can now again target it to change it's properties.

```javascript
function addTwoNumbers(x, y){
 document.getElementById("myId").innerHTML = x + y;
}
```

Then we target the element and provide the source of the change to be the calculation itself. The only thing left to make the changes visible, is now we need to call the function.

```javascript
addTwoNumbers(5, 15);
```

Now your code should look like this:

<iframe width="100%" height="300" src="//jsfiddle.net/itshazy/t6vqemyx/embedded/js,html,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

So now you have effectively made a reusable function, which adds the two numbers it receives and changes the content of a paragraph element to show the resulting value.

It would be cool to make this function more robust, so let's upgrade it!

Let's make it accept any class, not just the elements with the class "myId".

```javascript
function addTwoNumbers(x, y, id){
 document.getElementById(id).innerHTML = x + y;
}
```

With this simple change, of introducing a third input called "id" and adding the value to the ".getElementById" input, we can now have the same functionality as before, like this:

```javascript
function addTwoNumbers(x, y, id){
 document.getElementById(id).innerHTML = x + y;
}

addTwoNumbers(5, 15, "myId");
```

Now you can call this function as many times as needed and perhaps target other elements with different id's:

```javascript
function addTwoNumbers(x, y, id){
 document.getElementById(id).innerHTML = x + y;
}

addTwoNumbers(5, 15, "myId");
addTwoNumbers(5, 25, "myOtherId");
```

Without rewriting the basic logic to do it every time, this allows you to save many many hours of grunt work. With that in mind, I'd suggest thinking of functions as tools to achieve something specific, so one purpose for each function. 

Another important thing to note, is that when naming functions, name them as verbs, so that when reading code where multiple functions get called, you can clearly understand what's happening.

In our previous example the function name doesn't fully describe what it does, so let's improve it.

```javascript
function addTwoNumbersAndOutputToDiv(x, y, id){
 document.getElementById(id).innerHTML = x + y;
}

addTwoNumbersAndOutputToDiv(5, 15, "myId");
addTwoNumbersAndOutputToDiv(5, 25, "myOtherId");
```

Ok, so now we can see more clearly what the function does, but the name is pretty long now, which indicates that this function is managing more than one concern. How do we fix this? We split the concerns and thus the code too. 

```javascript
function addTwoNumbers(x, y){
  x + y;
}

function outputToDiv(content, id){
  document.getElementById(id).innerHTML = content;
}
```

Now we have two functions. "addTwoNumbers" calculates the sum of two numbers. "outputToDiv" takes content and an id, then replaces the divs content with the new content.

This already makes code more maintainable and each functionality available for wherever else we would need it in the future too.

There are two types of functions you can define:

* Functions that return a value
* Functions that don't return a value (aka return is void)

We do have a problem here, the "addTwoNumbers" calculates the result, but doesn't do anything with it. Because both of our functions don't return a value, but we do need to somehow get the value out of the first function. So let's enable it to **return** something.

```javascript
function addTwoNumbers(x, y){
    return x + y;
}
```

All that is left now is to chain them together, which we can do like so:

```javascript
outputToDiv(addTwoNumbers(5, 15), "myId");
```

It's perfectly fine to provide a function, instead of a value, but it's important to have the result returned.

Notice that we can now reuse both functions either together like this, or they can be called separately:

```javascript
function addTwoNumbers(x, y){
    return x + y;
}
  
function outputToDiv(content, id){
  document.getElementById(id).innerHTML = content;
}

var result = addTwoNumbers(5, 15);

outputToDiv(result, "myId");
```

This not only makes your code more reusable and saves tons of time, but the code is more readable. It's important to understand that you will be reading much more code than you will be writing. So keep it tidy. 
