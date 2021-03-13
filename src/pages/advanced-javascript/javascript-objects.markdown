---
layout: post
title:  "JavaScript Objects"
date:   2020-05-04
categories: [Advanced JavaScript]
tags: [programming, html, basics, javascript]
index: 0
---

You probably noticed that we used some JavaScript objects previously, like "jQuery", "document", "Math" to name a few. They seem to be really useful and people seem to be making them. What are they?

# What are JavaScript Objects?

This is an important topic, because not only you will learn the advanced JavaScript use cases, but also the principles of what is known as "Object Oriented Programming". It's a design for developing software, centered around the use of objects. This design spans many programming languages and it's principles are shared too.

I will even go as far to leave a link to [the appropriate chapter](https://eloquentjavascript.net/04_data.html) in the book "Eloquent Javascript", because it is a topic that is so important, that i'd suggest learning about it from different sources.

Simply put: **Objects are data structures.**

So far we've looked at simple data types, like numbers, strings and etc. objects are just collections of these stored in one entity. So what's a better way than to jump in and make one?

```javascript
var myObject = new Object();
```

Not too difficult. 

What now?

Currently you've made just a default, empty object. Empty, because Objects are supposed to hold properties of their own. Understanding objects is easier, if you compare them to everyday objects, like a fridge, or a TV remote, anything really. 

Let's create an object that resembles a fridge:

```javascript
var myFridge = new Object();

myFridge.turnedOn = true;
myFridge.temperatureInCelsius = 3;
myFridge.items = ["Meat", "Milk", "Cheese", "Eggs", "Salad"];

console.log(myFridge);
```

As you see, you can specify any type of properties for it. Then you can use the object, doing stuff like:

```javascript
if (myFridge.temperatureInCelsius > 4) {
    console.log("The Fridge is too warm!");
}

// or

console.log(`There's currently ${myFridge.items.length} items in the fridge.`);
```

You probably noticed, that we have an interesting way of creating objects - "new Object();", it seems to look like a function call, because it has the parentheses "()" at the end. That's becaue **it is one**. It's a special function call, that returns an object of a specific type. It's also known as a **constructor**. Constructor functions are defined in the **object class definition**, so that you can later call it like: "x();" and replacing "x" with the needed **class**. 

Don't mistake these for CSS classes, only the name is common.

# JavaScript Classes

Let's take a step back, to understand the context:

* You define an object **class** 
* You define the **constructor**, within in the class
* You call this constructor, whenever you need an object from this class

So let's take a look at this idea in code, by re-creating the fridge object, starting with the object class:

```javascript
class myFridge {

}
```

Ok, you thought it's going to be something crazy right? Nope, you define a class similiarly as you define a function. Now you can create fridge objects, like this:

```javascript
class myFridge {

}
var myFridgeObject = new myFridge();

myFridgeObject.turnedOn = true;
myFridgeObject.temperatureInCelsius = 3;
myFridgeObject.items = ["Meat", "Milk", "Cheese", "Eggs", "Salad"];

console.log(myFridgeObject);
```

In this case, all "myFridge" objects will still come out as empty, because we are not changing the way they're being created in the constructor. In fact, we don't have a constructor function yet, so let's add it:

```javascript
class myFridge {
    constructor(){
        
    }
}
```

Not too bad. It's just a function, inside of a class declaration. The constructor function will return the object and within the body of this function, you can define exactly how it is returned. Perhaps we'd like the fridges to come out turned off by default? You know, saving the environment and stuff. We'd do it like so:

```javascript
class myFridge {
    constructor(){
        this.turnedOn = false;
    }
}
```

So now if you log this object, you'll see that this property is set by default for all of the new objects created (also known as "instantiated") and will remain such until changed:

```javascript
class myFridge {
    constructor(){
        this.turnedOn = false;
    }
}

var myFridgeObject = new myFridge();

console.log(myFridgeObject);
// Output: myFridge {turnedOn: false}

myFridgeObject.turnedOn = true;
myFridgeObject.temperatureInCelsius = 3;
myFridgeObject.items = ["Meat", "Milk", "Cheese", "Eggs", "Salad"];

console.log(myFridgeObject);
// Output: myFridge {turnedOn: true, temperatureInCelsius: 3, items: Array(5)}
```

Makes sense, right? We used "this" keyword to target the "currently selected" (as I like to think about it) object, which in that case is the one "going through the constructor" or "being created".

# Creating Custom Objects

Constructors are very convenient, they literally allow you to place all of the creation stuff in one place and just call it whenever needed! Would be really great to get different objects out every time though, not just a ton of fridges that aren't turned on.

For starters, let's bring in all of the properties into the constructor, to clean up the code a bit:

```javascript
class myFridge {
    constructor(){
        this.turnedOn = false;
        this.temperatureInCelsius = 3;
        this.items = ["Meat", "Milk", "Cheese", "Eggs", "Salad"];
    }
}

var myFridgeObject = new myFridge();

console.log(myFridgeObject);
```

Much better. Now, let's say we'd like to choose either a fridge is turned on or off by default. Remember that constructors are in fact functions, that return objects. Functions are able to receive values and use them, constructor functions are no different, so let's add a value to the function parentheses:

```javascript
// removed some code for brevity

class myFridge {
    constructor(turnedOnByDefault){
        this.turnedOn = turnedOnByDefault;
        ...
    }
}

var myFridgeObject = new myFridge(true);

...
```

Simply give a name to the input value, in our case "turnedOnByDefault" into the parentheses, then provide the value in the constructor, to assign this value to the property upon creating the object. In our case "this.turnedOn" will receive whatever is passed into the constructor. Then when we create the "myFridgeObject", we provide the value "true" which is what we used previously too.

Now you can simply choose whether your fridges will be turned on, or off by default:

```javascript
// removed some code for brevity

class myFridge {
    constructor(turnedOnByDefault){
        this.turnedOn = turnedOnByDefault;
        ...
    }
}

var myFridgeObject = new myFridge(true);
var myOtherFridgeObject = new myFridge(false);

...
```

And of course you can do this for all properties too:

```javascript
class myFridge {
    constructor(turnedOnByDefault, defaultTemperatureInCelsius, defaultItems){
        this.turnedOn = turnedOnByDefault;
        this.temperatureInCelsius = defaultTemperatureInCelsius;
        this.items = defaultItems;
    }
}

var myFridgeObject = new myFridge(true, 3, ["Meat", "Milk", "Cheese", "Eggs", "Salad"]);

console.log(myFridgeObject);
```

Now you can get a custom fridge every time you need it! 

By the way, you don't have to write "default" for the input names, it can be whatever you need. My suggestion is to keep it the same name as the property, it prevents confusion, improves readability too:

```javascript
class myFridge {
    constructor(turnedOn, temperatureInCelsius, items){
        this.turnedOn = turnedOn;
        this.temperatureInCelsius = temperatureInCelsius;
        this.items = items;
    }
}

var myFridgeObject = new myFridge(true, 3, ["Meat", "Milk", "Cheese", "Eggs", "Salad"]);

console.log(myFridgeObject);
```

Congrats! You've taken your first steps in Object Oriented Programming and you will greatly improve the practicality of your code as you move along. 

You can actually already see how much time you can save, if only you take a moment and understand the requirements of the objects you will need and plan out the "blueprint" or "class" for it, then just make it robust for many types of use cases!

Best part? If you'd ever need to upgrade your fridge objects, perhaps integrate social media or a sound system, then you can do it once, in the constructor.

