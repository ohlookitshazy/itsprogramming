---
layout: post
title:  "Inspecting HTML and CSS"
date:   2020-04-30
categories: [Dev Tools]
tags: [dev tools, the-web, programming, basics]
index: 1
---

The very first thing you should learn to do with the dev tools, is inspecting HTML to understand why it does (or doesn't) work.

<img src="./ChromeDevToolsDefaultLayout.png">

In the screenshot we viewed previously, notice the very first button in the upper left corner, the square with the cursor in it. When you click it (or you can use **CTRL+SHIFT+C** too) your cursor becomes an inspector tool. 

Try hovering over the page and you should see different elements getting highlighted. You also can easily see the class name, some CSS properties and dimensions of the element.

Additionally, the element will be highlighted in the sidebar too. When you click on an element, it will now be more permanently highlighted and you can view its CSS properties in the bottom CSS property list.

I'd suggest just taking some time to get used to the way things are shown in the sidebar. It does take some time to sink in.

# Editing HTML and CSS in the Browser

Another useful feature, is the ability to update the HTML or CSS right there in your browser! Very convenient, when you want to only temporarily see some CSS being applied or add some temporary content into the HTML.

## Editing HTML

To edit any HTML element, just right click it and select "Edit HTML". Since pressing "Enter" adds a new line, you have to click outside the content box, for the changes to be applied.

Try out deleting and hiding elements too!

## Editing CSS

Editing CSS is similiar, but slightly more advanced. It consists of multiple parts, since the code affects all HTML elements that get selected by CSS selectors, instead of just one element being edited.

So if you hover any of the CSS rules in the CSS window, you will see the targeted elements get highlighted on the page, so you see what your changes will apply to.

To edit a single CSS property, like "color:" or "background:" you can just click on its **value** once and start writing. Pressing "Enter" will apply the changes.

To add new properties for the selected element, you can click in the area, which says "element.style {", right under the tabs of the CSS window.

To add new properties for multiple elements, like under an existing CSS selector, just click on the bottom curly brace "}". It's really neat that it will also show if you have errors in your CSS right there too.

# Changing the Sidebar Alignment

You can also change the alignment of the entire sidebar, by clicking the 3 vertical dot button, next to the "X" that closes the sidebar. A dropdown will reveal all of the possible modes in the first row. So you can have it:

* To the right
* To the bottom
* To the left
* In a separate window

Remember, if you mess anything up, you can always reset the default by going to "Settings" (or F1) and scrolling down to the reset button.

# Inspecting the Box Model

As you saw previously, enabling the "inspector" mode on your cursor to highlight elements allowed to view some info in numbers about it too. Notice that when you hover over elements, their box model dimensions are shown around the element as well.

You can also edit it, by applying the different properties to it either in the CSS window of the dev tool sidebar, or in the box model graphic on the right, by directly clicking where dashes ("-") or some values already exist.

**Tip:**

You can also use your mousewheel to increase or decrease values in the CSS window. Be sure to select a numeric value first though, even if it has "px" in the value.
