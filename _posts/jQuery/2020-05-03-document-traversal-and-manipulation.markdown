---
layout: post
title:  "Document Traversal and Manipulation"
date:   2020-05-03
categories: [jQuery]
tags: [programming, jquery, html, css, javascript]
index: 2
---

The title sounds like we're some systems scanning and manipulating documents. Which we actually **are**. So let's atleast learn to do it professionally, ok?

# Traversal

Traversing, or "moving" through the document simply means selecting elements from the hierarchy, like we did before.

In CSS you can specifically select "child" elements from a "parent" element, to apply styles, like so:

```css
div .myClass {

}
```

This would select only the elements, that have the class "myClass" and only if they are inside a "div" element, so it would target this:

```html
<div>
  <p class="myClass"></p>
</div>
```

but not this:

```html
<div>
</div>
<p class="myClass"></p>
```

So you can do the same selection within jQuery, which would look like this:

```javascript
$("div .myClass");
```

## Selecting Multiple Elements

Say you'd want to select multiple elements in a single jQuery selector, you'd do this:

```javascript
$("div, .myClass");
```

You only have to separate each element with a comma and with this selector, both of these elements will be selected:

```html
<div>
</div>
<p class="myClass"></p>
```

# Manipulation

Cool so by now we can select any element and change it's HTML! It'd be a lot cooler if we could change CSS on the fly too. **Which we can** very easily, like this:

```javascript
$("div").css("color", "red");
```

As you might imagine, this will get all "divs" on the page, then change their CSS property "color" (which is the text color) to the value "red", which is an ok value, so all of these elements will get their text colored red!

You can also just store the value of the CSS property from the targeted elements, like this:

```javascript
var divTextColor = $("div").css("color");
```

Stuff like this is used, for example, when you fill out a login form and fail some basic validation rules, like it should be an "x" amount of characters, have numbers, symbols and etc. If validation fails, usually JavaScript gives the problematic input field a red outline, to help direct your attention to the problem.

## Managing CSS Classes

Instead of providing tons of these individual CSS changes, though, you could add/remove classes instead:

```javascript
$("div").addClass("divClass");
```

Deceptively simple. If you'd have a CSS class imported into the document, like this:

```css
.divClass {
  color: red;
}
```

then it would make all divs have red colored text, because all of them had the "divClass" added to them! Removing classes is done like you'd imagine:

```javascript
$("div").removeClass("divClass");
```

If you're extra lazy (or efficient) you can have both behaviors happen with one function call! It's called ".toggleClass()", so if the class already exists, it will be removed, if not, then it will be added to the element:

```javascript
$("div").toggleClass("divClass");
```

# .html() or .text()?

At some point you will want to output HTML as text, like for your own code snippet library or examples or whatnot:

```javascript
$(".card").html("<html>");
```

This way won't work, because JavaScript will treat the input value **as HTML** itself. Thus the above code will replace the entire content of the card with **HTML** which in this case will just be invisible. 

So remember to use ".html()" whenever you need **actual HTML** in the element, like inserting one element into another and use ".text()" when you are just changing the text, or want to output HTML as text.

```javascript
$(".card").text("<html>");
```

This will work as you'd expect and output the string as text to the element. For more context, if you'd like to do this in vanilla JavaScript, you'd call the function ".innerText()".
