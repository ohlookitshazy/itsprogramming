---
layout: post
title:  "Inline vs External JavaScript"
date:   2020-04-26
categories: [JavaScript]
tags: [programming, basics, javascript]
index: 4
---

Great! We're already writing some basic JavaScript! So far we've done it in Codepen examples, so how do we go about setting them up locally on our computer?

# External JavaScript

Easy. The same way we imported CSS. You have to have your JavaScript in a separate file, prefferably next to your HTML files and they must have a ".js" ending, which stands for javascript.

Then you link them into your HTML documents, but in a slightly different way than .css files, you import them just before the closing body "</body>" tag. 

As an example, imagine a folder with just the index.html file:

* Project Folder
  * index.html

You would place the javascript next to it:

* Project Folder
  * index.html
  * example.js

Then link it in HTML like this:

```html
...
    <script src="/example.js"></script>
</body>
</html>
```

So to copy the last Codepen example from the previous post, you'd have your index.html like this:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <p class="myClass">Some text</p>
    <p class="myClass">Some text</p>
    <p class="myClass">Some text</p>
    <p class="myClass">Some text</p>
    <p class="myClass">Some text</p>

    <script src="/example.js"></script>
</body>

</html>
```

and your example.js like this:

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

Now that is the preffered way of working with JavaScript. To be clear, inline javascript can have it's uses, but the same way as .html files should contain as less of CSS as possible, it's the same with JavaScript. 

# Inline JavaScript

So that you're not surprised once you see inline JavaScript, you write it like this:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <p class="myClass">Some text</p>
    <p class="myClass">Some text</p>
    <p class="myClass">Some text</p>
    <p class="myClass">Some text</p>
    <p class="myClass">Some text</p>

    <script>
        var mySampleText = "New Text!";
        var myOtherText = "Other Text!";

        var myElements = document.getElementsByClassName("myClass");

        if (myElements.length < 5) {
            myElements[0].innerHTML = mySampleText;
        } else if (myElements.length == 5) {
            myElements[0].innerHTML = myOtherText;
        }
    </script>
</body>

</html>
```

As you see, the link has been removed and the content inside of the <script></script> elements is filled with the code instead. Now we got the same thing going on as previously, but it's in a single .html file. Which is terrible, but ok for examples and to prepare you for the weird constructs others have made out there.

Always prioritize code reuse by keeping things and concerns separated. 

Imagine if you'd want to have this epic text replacing code work in 50 pages. You'd have to copy it 50 times and then change it 50 times each time the amount of elements, for example, should be adjusted to 4 instead. Yuck. Horrible. Literally uncodeable. Avoid this.

If you'd have it in a separate .js file, you could just link it into the 50 pages once, then any changes you add in that one file will propagate to all 50 pages as soon as you save the file. Strive for efficiency.
