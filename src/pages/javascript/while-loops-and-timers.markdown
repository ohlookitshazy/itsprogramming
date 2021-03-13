---
layout: post
title:  "While Loops and Timers"
date:   2020-04-26
categories: [JavaScript]
tags: [programming, basics, javascript]
index: 4
---

Let's play around with a few of the things we covered previously so that you can practice them in different scenarios.

Let's also learn about "while" loops, which are similiar to "for" loops, but instead of setting 3 arguments, you provide one condition that will allow the loop to execute **while it's true**. 

We could build a random number generator with one. So let's do it!

Keeping the HTML the same as before:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <p id="myId">Some text</p>

  <script src="/example.js"></script>
</body>

</html>
```

We will even reuse the function from before, to output the random numbers to the paragraph element we have above.

```javascript
function outputToDiv(content, id){
  document.getElementById(id).innerHTML = content;
}
```

So next let's define a counter and an array, where to store the numbers:

```javascript
var i = 0;
var randomNumbers = [];
```

And here's the logic for generating them:

```javascript
while(i < 5){
  randomNumbers.push(Math.random());
  i++;
}
```

Basically: "While the variable 'i' remains lesser than 5, we take the array and 'push' (aka add) a number, generated from a 'Math' object."

We will talk about objects later on, for now let's keep it simple, so just know, if you want a random number in JavaScript, you can use "Math.random()" which as you see is a function call that doesn't take any arguments, but returns a number.

While loops can be **very dangerous** though. If you feel the need to add some danger into your life, you can crash your tab in the browser, by setting the while loop to look like this:

```javascript
while(true){
  randomNumbers.push(Math.random());
}
```

So if you happen to freeze a tab, just close it (might take a few clicks) and you should be fine. Remember to change the code before launching the live server or dragging the file into your browser.

The reason it froze, is because you sent it on a one-way ticket to infinity, to generate as many random numbers as it possibly can, forever.

That's why it's very important to double-check each loop if it executes for the amount of times that it has to. For a case of sweaty palms, imagine a money transaction going sideways like this. Forever. Only because a sleepy developer slurred through the code missing something like this and pushed code to production. 

**Tip:**

Never deploy code anywhere on fridays or before holidays. Ever.

So here is the final code:

<iframe width="100%" height="330" src="//jsfiddle.net/itshazy/stu2w3c9/embedded/js,html,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Cool! We have random numbers coming in every time you refresh the page! They look kindof weird though, how are you supposed to work with this?

By default, random numbers are returned as a decimal from 0 to 0,99999...

You can apply various built-in functions to format numbers, like in our case, we'd like whole numbers instead of decimals. We can do that, like this:

```javascript
while(i < 5){
    randomNumbers.push(Math.floor(Math.random()));
    i++;
}
```

This will now round down the random decimal. Which isn't very useful, it will give 0 as a result.

So we have to do this to move the value up:

```javascript
while(i < 5){
    randomNumbers.push(Math.floor(Math.random() * 10));
    i++;
}
```

This will now return a value from 0-9, but not 10. To have it return values from 0-10, we'd multiply it by an additional increment:

```javascript
while(i < 5){
    randomNumbers.push(Math.floor(Math.random() * 11));
    i++;
}
```

Which is kind of weird, but that's how random number generation works in JavaScript. [Here is a page](https://www.w3schools.com/js/js_random.asp) where you can look at random number generation in more detail.

# Timers

Let's try something else cool. Let's get the numbers get generated in realtime!

As you saw, we are using the "Math" object and using its ".random()" and ".floor()" functions. You can also use the "window" object and use its functions, but it is already accessed by default, all you have to do is just call its functions directly.

Let's replace the while loop and introduce a time-based function execution, with the ".setInterval()" function, that comes from the "window" object, so we call it like so:

```javascript
function outputToDiv(content, id){
    document.getElementById(id).innerHTML = content;
}

function generateRandomNumbers(){
  var randomNumbers = [];
  var i = 0;

  while(i < 5){
      randomNumbers.push(Math.floor(Math.random() * 10));
      i++;
  }

  return randomNumbers;
}

setInterval(function(){
  outputToDiv(generateRandomNumbers(), "myId")
}, 1000);
```

So what's happening here, we took the same two functions from before:
* `outputToDiv()` just targets the element by id and changes its content to whatever it receives.
* `generateRandomNumbers()` creates an array and a counter, then runs a loop of generating a number from 0-9 and returns the resulting collection.

Then created a variable, which holds a weird looking function definition that calls the `outputToDiv()` function, within that call it also calls the `generateRandomNumbers()` function to just create some content to add to the element. 

Then a number "1000", this is an argument for the `setInterval()` function, which defines how frequently to execute the weird looking function definition in milliseconds. In our case - every second.

Okay, this might be a lot, but not too much, we're just connecting function calls and passing arguments through them, even timing them.

If we take out the fancy random number generation stuff and just output the simplest random value, the whole javascript file looks like this:

```javascript
function outputToDiv(content, id){
    document.getElementById(id).innerHTML = content;
}

setInterval(function(){
  outputToDiv(Math.random(), "myId")
}, 1000);
```

So I hope it makes more sense now. What about that weird looking function definition - inside a function call?

Yes, this is what's called an "anonymous function", it is defined without a name, but as a value instead.

This is a regular function definition and call:

```javascript
function myFunction() {
  ...
}

myFunction();
```

Here is an anonymously declared function, notice that it gets called as soon as it is defined:

```javascript
var myAnonymousFunction = (function() {
  ...
});
```

This can be useful in many scenarios, in our case it allowed us to define code that should be run in a certain interval. 

What if you'd like to stop the timer at a certain point? All you have to do, is clear the interval, by calling the clearInterval() function and passing the variable itself in it, so the entire .js file might look like this:

```javascript
function outputToDiv(content, id){
    document.getElementById(id).innerHTML = content;
}

var i = 0;

var interval = setInterval(function(){

    if(i == 5){
        clearInterval(interval);
    }
    
    outputToDiv(Math.random(), "myId");

    i++;
}, 1000);
```

So we kept the same "outputToDiv()" function, then defined a counter variable "i". It's defined outside, to retain the total count, otherwise if you put it in the timer, it will reset to 0 each time, making it run infinitely. 

Then we have the interval function call stored in the "interval" variable, so that we can reference it within itself. 

Then we check if the counter has reached 5, if so, call the timer clearing function and pass the reference to our timer.

It's not that complicated if you just focus on the small functionalities that build up the whole thing. 

As a bonus, we can easily switch out random numbers to the current date and time too, via the "Date" object:

```javascript
var interval = setInterval(function(){

    if(i == 5){
        clearInterval(interval);
    }
    
    outputToDiv(Date(), "myId");

    i++;
}, 1000);
```

In this case we are not calling it's function, but we are creating a new object, during each cycle. By default, the Date object takes the current time upon creation. That's why we can just call it like this and have it update the value in the HTML every second. 

Also in our case, we have it set to run for 6 times, with the "if(i == 5)" condition and starting from 0 by declaring "var i = 0". 

You can define "i" as "var i = 1;" if you'd like to have it run precisely the times it's limited to in the "if" condition, so the entire JavaScript for this:

```javascript
function outputToDiv(content, id){
    document.getElementById(id).innerHTML = content;
}

var i = 1;

var interval = setInterval(function(){

    if(i == 5){
        clearInterval(interval);
    }
    
    outputToDiv(Date(), "myId");

    i++;
}, 1000);
```

Play around with it, see what you can come up with!
