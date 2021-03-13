---
layout: post
title:  "Object Inheritance"
date:   2020-05-04
categories: [Advanced JavaScript]
tags: [programming, html, basics, javascript]
index: 2
---

Objects are a powerful way to create data structures, provide them with properties and methods. Having them interact with one another and much more. One of the powerful features we haven't yet looked at, is inheritance. 

# What is Object Inheritance?

For the scenarios, where you see that the objects you create are kind of similiar, but not fully? Like you'd have these two classes, for example:

```javascript
class Box {
    constructor(items) {
        this.items = items;
    }

    changeItems(newItems) {
        this.items = newItems;
    }
}

class Safe {
    constructor(items, isLocked) {
        this.items = items;
        this.isLocked = isLocked;
    }

    changeItems(newItems) {
        this.items = newItems;
    }

    lock() {
        this.isLocked = true;
    }

    unlock() {
        this.isLocked = false;
    }
}
```

They both can store stuff and have their stuff changed later, so they're both essentially boxes, only one has a lock on it. This similiarity can be introduced into the code itself, with inheritance. That means, that you can specify another object, that your current object is based off and it will **inherit** all of the previous objects properties and methods. **This is one of the corner stones of Object Oriented Programming**. Because it's ridiculously powerful at allowing you to manage all of the different types of objects you'll be creating.

Let's make the safe inherit all of the boxes properties, because it is too - a box:

```javascript
class Safe extends Box {

    lock() {
        this.isLocked = true;
    }

    unlock() {
        this.isLocked = false;
    }

}
```

Now you can safely remove the constructor function and the "changeItems()" method from the "Safe" class and still use it as if it was there, because it is, only "behind the scenes":

```javascript
class Box {
    constructor(items) {
        this.items = items;
    }

    changeItems(newItems) {
        this.items = newItems;
    }
}

class Safe extends Box {

    lock() {
        this.isLocked = true;
    }

    unlock() {
        this.isLocked = false;
    }
}

var mySafe = new Safe();

mySafe.changeItems(["Cash", "Gold Bars", "Toilet Paper"]);

console.log(mySafe.items);
// Output: (3) ["Cash", "Gold Bars", "Toilet Paper"]
```

Feel free to introduce any new methods to the classes that extend other classes, but if you notice that a lot of duplication is appearing, it's probably best to use inheritance and "share" this code amongst the classes.

# Overriding Methods

It's cool connect objects via inheritance, saving you time and code (and potential debugging). But what if you find yourself in a situation, where an object can use a method that's inherited, but if only it had a small change added?

You can override inherited methods entirely, by just writing up a new method with the same name, like this, if we'd want to increase the security of our Safe:

```javascript
class Box {
    constructor(items) {
        this.items = items;
    }

    changeItems(newItems) {
        this.items = newItems;
    }
}

class Safe extends Box {
    
    changeItems(newItems) {
        this.items = newItems;
        console.log(`${newItems} have been added to the safe.`)
    }

    lock() {
        this.isLocked = true;
    }

    unlock() {
        this.isLocked = false;
    }
}
```

This will entirely hide the "changeItems()" method inherited from the "Box" class.

If you'd like to still call the parent method, but only add something to it, you will have to call the "parents" version of it:

```javascript
class Box {
    constructor(items) {
        this.items = items;
    }

    changeItems(newItems) {
        this.items = newItems;
    }
}

class Safe extends Box {
    changeItems(newItems) {
        super.changeItems(newItems);
        console.log(`${newItems} have been added to the safe.`)
    }

    lock() {
        this.isLocked = true;
    }

    unlock() {
        this.isLocked = false;
    }
}
```

By using "super" you target the parent of this object and here we call the parents ".changeItems()" but still pass the incoming, new value. Then we just added logging to it. 

Now safes, by their nature are smaller than most boxes. It's because you're meant to keep precious things in them.

Let's implement a 10 item limit, but only for the Safe objects:

```javascript
class Box {
    constructor(items) {
        this.items = items;
    }

    addItems(newItems){
        this.items = this.items.concat(newItems);
    }
}

class Safe extends Box {

    addItems(newItems) {
        if(this.items.length + newItems.length > 10){
            console.log("The safe doesn't have enough space!")
        } else {
            super.addItems(newItems);
            console.log(`${newItems} have been added to the safe.`)
        }
    }

    lock() {
        this.isLocked = true;
    }

    unlock() {
        this.isLocked = false;
    }
}

var mySafe = new Safe(["Gold Bars", "Gold Bars", "Gold Bars", "Gold Bars", "Gold Bars", "Gold Bars", "Gold Bars", "Gold Bars"]);

mySafe.addItems(["Cash", "Gold Bars", "Toilet Paper"]);

console.log(mySafe.items);
```

As you see I replaced "changeItems()" with "addItems()", so it makes more sense. Then added a limit for the Safe version of the method, but still using the inherited one, to do the actual item changing. Then if the incoming items won't make the existing Safe go over the limit of 10 (it already starts out with 8 gold bars, for the sake of the example), then it merges both collections (or concatenates, that's why I used .concat()).

Here's an article for [further details and more examples](https://javascript.info/class-inheritance).