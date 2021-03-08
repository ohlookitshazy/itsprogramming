---
layout: post
title:  "Don't Repeat Yourself"
date:   2020-03-01
categories: [CSS]
tags: [programming, html, basics, css]
index: 2
---

Another general programming idea, similiar to "Separation of Concerns", is that you simply don't repeat yourself.

There are countless ways of writing software and websites, but a general principle of good code is to have as less of it as possible. 

For example, in CSS you can declare identical selectors, with different properties in different parts of the stylesheet, so maintaining them becomes a burden. 

```css
h1 {
    color: red;
}

h2 {
    color: green;
}

h1 {
    font-size: 16px;
}
```
Inefficient ❌

```css
h1 {
    color: red;
    font-size: 16px;
}

h2 {
    color: green;
}
```
Better ✔

That's why proper use of the cascading part of "Cascading Style Sheets" is important, in order to minimize code duplication.

In my opinion - the more code you have, the more possibilities of something going wrong and also you get decreased maintainability of said code.

In context of CSS, this means that your selector count should be justifiable and that signs of CSS being somewhere inside HTML, like inline CSS or the use of !important selector attribute are bad signs or atleast signs of additional need to maintain code. 
