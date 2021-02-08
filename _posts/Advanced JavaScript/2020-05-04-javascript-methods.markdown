---
layout: post
title:  "JavaScript Methods"
date:   2020-05-04
categories: [Advanced JavaScript]
tags: [programming, html, basics, javascript]
index: 2
---

Classes define blueprints for objects. Objects define multiple properties. Objects can also have functions, that they can perform (also known as "methods").

# What are Methods?

>"Properties that contain functions are generally called **methods** ..."

from the book ["Eloquent JavaScript"](https://eloquentjavascript.net/04_data.html#p_96KudJIN5i).

So for the sake of simplicity if you're not using a function that's more generic (not defined in a class), that's **a function**.

If you're using a function that's coming from a class, that's **a method**.

I have to admit, I am used to calling all functions as methods, mainly because I work mainly with object oriented code. It's a habit.

# Defining Methods

So to clarify even further, let's define a method for our fridge object, from the previous post:

```javascript
class myFridge {
    constructor(turnedOn, temperatureInCelsius, items){
        this.turnedOn = turnedOn;
        this.temperatureInCelsius = temperatureInCelsius;
        this.items = items;
    }
}
```

And add a method to it:

```javascript
class myFridge {
    constructor(turnedOn, temperatureInCelsius, items){
        this.turnedOn = turnedOn;
        this.temperatureInCelsius = temperatureInCelsius;
        this.items = items;
    }

    turnOn(){
        this.turnedOn = true;
    }
}
```

That's it! Now once you create an object of this type, you can use it, like "myFridgeObject.turnOn()". 

```javascript
class myFridge {
    constructor(turnedOn, temperatureInCelsius, items){
        this.turnedOn = turnedOn;
        this.temperatureInCelsius = temperatureInCelsius;
        this.items = items;
    }

    turnOn(){
        this.turnedOn = true;
    }
}

var myFridgeObject = new myFridge(false, 3, ["Meat", "Milk", "Cheese", "Eggs", "Salad"]);

console.log(myFridgeObject.turnedOn);
// Output: false

myFridgeObject.turnOn();

console.log(myFridgeObject.turnedOn);
// Output: true
```

You can do all of the same stuff here as with normal functions, like pass input parameters, have them return some value, or not return any values.

Let's try it out! 

First, I don't know about you, but my fridge doesn't have a separate button to turn it on or off, so let's get that working first.

Now we have a problem. The method will turn the fridge on regardless if it's off or on. So the logic we wan't to create should be aware of what is the status of the fridge before doing anything, then based on either if it's on or off, should switch to the other process.

So the needed logic goes something like this:

* If fridge is off
    * Turn it on
* If fridge is on
    * Turn it off

If we change it slightly:

* If (fridge.turnedOn == false)
    * fridge.turnedOn = true
* If (fridge.turnedOn == true)
    * fridge.turnedOn = false

That starts to look like code! Deconstructing problems like this just with words, before you write any code is super efficient. It's also called writing "pseudo-code", where you just break down the conditions and the requirements for the data flow with words.

Let's upgrade our fridge!

```javascript
class myFridge {
    constructor(turnedOn, temperatureInCelsius, items) {
        this.turnedOn = turnedOn;
        this.temperatureInCelsius = temperatureInCelsius;
        this.items = items;
    }

    toggleState() {
        if (this.turnedOn == false){
            this.turnedOn = true;
        }
        if (this.turnedOn == true){
            this.turnedOn = false;
        }
    }
}
```

Cool! Now every time we call ".toggleState()" it will switch to the other state, right? 

Nope.

In the example, the second "if" statement will cancel out the first one. So once the fridge is running, it will always be running. Forever.

To have one **or** the other to execute, you chain them with an "else if", as we have done before:

```javascript
class myFridge {
    constructor(turnedOn, temperatureInCelsius, items) {
        this.turnedOn = turnedOn;
        this.temperatureInCelsius = temperatureInCelsius;
        this.items = items;
    }
    toggleState() {
        if (this.turnedOn == true){
            this.turnedOn = false;
        } else if (this.turnedOn == false){
            this.turnedOn = true;
        }
    }
}

var myFridgeObject = new myFridge(false, 3, ["Meat", "Milk", "Cheese", "Eggs", "Salad"]);

console.log(myFridgeObject.turnedOn);
// Output: false

myFridgeObject.toggleState();
console.log(myFridgeObject.turnedOn);
// Output: true

myFridgeObject.toggleState();
console.log(myFridgeObject.turnedOn);
// Output: false
```

Cool! Now it works! 

Let's upgrade it even further! Let's add a method that accepts a parameter:

```javascript
class myFridge {
    constructor(turnedOn, temperatureInCelsius, items) {
        this.turnedOn = turnedOn;
        this.temperatureInCelsius = temperatureInCelsius;
        this.items = items;
    }
    toggleState() {
        if (this.turnedOn == true){
            this.turnedOn = false;
        } else if (this.turnedOn == false){
            this.turnedOn = true;
        }
    }
    changeItems(newItems) {
        this.items = newItems;
    }
}
```

Easy as that! Now changing the contents, **after** a fridge has been created is possible! You'd use it as you'd expect:

```javascript
class myFridge {
    constructor(turnedOn, temperatureInCelsius, items) {
        this.turnedOn = turnedOn;
        this.temperatureInCelsius = temperatureInCelsius;
        this.items = items;
    }

    toggleState() {
        if (this.turnedOn == true){
            this.turnedOn = false;
        } else if (this.turnedOn == false){
            this.turnedOn = true;
        }
    }

    changeItems(newItems) {
        this.items = newItems;
    }
}

var myFridgeObject = new myFridge(true, 3);
console.log(myFridgeObject.items);

// Output: undefined

myFridgeObject.changeItems(["Cake", "Ice Cream", "Yoghurt"]);
console.log(myFridgeObject.items);

// Output: (3) ["Cake", "Ice Cream", "Yoghurt"]
```

Notice that if a constructor might do something with the input parameters for the object, instead of just assigning them directly, then you might crash the logic flow, because you can leave out the input parameters, like I left out the "items" value (the third parameter), when creating it.

For a challenge, try:

* Creating a method, that adds one or more items to the fridge,
* Creating a method, that removes an item by name from the fridge,
* Add a new property "outsideTemperateInCelsius" and have the fridge turn on if the "outside temperature" is above some number,
* Create two fridges and have one pass all of it's items to the other

