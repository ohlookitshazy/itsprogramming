---
layout: post
title:  "The Box Model"
date:   2020-04-25
categories: [CSS]
tags: [programming, html, basics, css]
index: 7
---

We previously customized the spacing between elements via "margin" properties, like for example, the post element in the previous post (very meta):

```css
.post {
  width: 40%; 
  display: inline-block;
  margin-right: 10%;
}
```

Almost all HTML elements regarding the actual UI have a what is known as: "The Box Model". It is simply the structure of how the element boundaries are defined. 

Let's take a very simple example:

<iframe width="100%" height="400" src="//jsfiddle.net/itshazy/gabmn1Lc/embedded/html,css,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

We have three equal divs stacked on top of each other, because by default, each div takes up the entire horizontal space on the page aka it is being displayed as a "block".

Now let's add a "margin" property to the "secondDiv" element:

```css
.secondDiv {
  margin: 15px;
}
```

<iframe width="100%" height="400" src="//jsfiddle.net/itshazy/xbm4hwqj/embedded/html,css,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Notice that the div now has a margin on top and bottom as well. This is because, without specifying "margin-right", "margin-top" and etc. it then applies to all of the sides instead.

Though you can also control the margins for individual sides like this as well, you just have to specify the values in a specific way.

The following example will set a 15px margin for the **top** and **bottom** of the element, while the **left** and **right** sides will have a 30px margin applied.

```css
.secondDiv {
  margin: 15px 30px;
}
```

The next one will set the margins to be:

* 15px for the top
* 30px for the right
* 5px for the bottom
* 0px for the left

```css
.secondDiv {
  margin: 15px 30px 5px 0;
}
```

So as you see, this way you just have to specify the sides individually, keeping in mind that they start from the top and go clockwise.

Or, of course you could do it like this instead:

```css
.secondDiv {
  margin-top: 15px;
  margin-right: 30px;
  margin-bottom: 5px;
  margin-left: 0;
}
```

But that's way too much code for achieving something, that can be done with one line. 

That's pretty much it for margins, but the box model has more customization that you can do, like with padding.

Add another div inside of the secondDiv element:

```html
<div class="firstDiv"></div>
<div class="secondDiv">
  <div class="nestedDiv"></div>
</div>
<div class="thirdDiv"></div>
```

Then add these properties for it, so you can see it:

```css
.nestedDiv {
  width: 50px;
  height: 50px;
  background: blue;
}
```

Now let's add padding to its so called "parent" element, the secondDiv:

```css
.secondDiv {
  margin: 5px;
  padding: 5px;
}
```

<iframe width="100%" height="400" src="//jsfiddle.net/itshazy/yk36ucoa/embedded/html,css,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Now you should see the difference between them. We have both the margins and the paddings set for all sides of the secondDiv element.

The margins "push" things away from around the element, while the padding pushes things away from the elements borders instead.

Speaking of borders, it's also a way to change the look of HTML elements. You can specify just the style of the border:

```css
.secondDiv {
  margin: 5px;
  padding: 5px;
  border: solid;
}
```

That will take the width of the border from the default values, which is 3px. To entirely customize the border, you write out the width, style and color of it with the same CSS property:

```css
.secondDiv {
  margin: 5px;
  padding: 5px;
  border: 5px solid green;
}
```

<iframe width="100%" height="410" src="//jsfiddle.net/itshazy/otxk6Lyp/embedded/html,css,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Mozilla Developer Network (MDN) Web Docs, have described it way more in detail, so I suggest that you check their page on ["The box model"](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model) to learn more!
