---
layout: post
title:  "What is HTML?"
date:   2020-02-23
categories: [HTML]
tags: [programming, html, basics]
index: 0
---

HTML or Hyper Text Markup Language serves as the backbone that holds all of the content of any webpage. Literally **all of them**.

> "Even giants like Facebook, Google, Amazon?"

Yes. They weren't developed the way you are developing right now, but the technology to display content is the same. 

We previously played around with headings, one of the more basic HTML elements.

## How many other HTML elements are there?

**A lot**. Here is a list of [all of them](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

Let's continue with a few commonly used ones.


# Lists

Most webpages list stuff. Be it the latest news, tops, e-shop items, pictures, you name it! So let's list some stuff ourselves! Let's begin with the unordered list, what does that mean? It means that the list items are provided in no specific order. 

For example, you could create a shopping list for groceries. To write a list, you have to start with the opening and closing tags:

```html
<ul></ul>
```

 (for unordered list)

 Next up, lists contain list items. Each list item also has opening and closing tags:

```html
<ul>
    <li></li>
</ul>
```

That's it! Now all you have to do is create as many list items and fill the area between the tags with groceries, like so:

```html
<ul>
    <li>Milk</li>
    <li>Bread</li>
    <li>Cheese</li>
</ul>
```

The result should look like this in the browser:

<iframe width="100%" height="300" src="//jsfiddle.net/itshazy/ofrp8t0h/embedded/html,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Ordered lists are made the same way, just edit the list tags themselves from `<ul>` to `<ol>` (for ordered list), like so:

```html
<ol>
    <li>Milk</li>
    <li>Bread</li>
    <li>Cheese</li>
</ol>
```

The result should look like this in the browser:

<iframe width="100%" height="300" src="//jsfiddle.net/itshazy/xfyg79rv/embedded/html,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

# Links

What would the internet be without links? Obviously websites link to one another and they have links for other pages and even link to positions in the same page aswell! Let's create a link right now. Just as with most HTML elements, links need opening and closing tags aswell. They are written like so:

```html
<a></a>
```

It stands for "anchor", don't ask me why. We just *roll* with it. 

If you add a link element like above to your webpage and refresh the browser, nothing has appeared. 

> Why?

It's because a link element has multiple parts:

* The link text
* The link target
* Additional elements

So let's add the link text first:

```html
<a>My first link!</a>
```

"Okay, the text appeared, but I can't click it?"

Yes, because we're still missing the link target. The link target is where you will be sent to after you click the link. Choose the full address to your favorite website, or just use "https://www.google.com/" and add it as a link target like so:

```html
<a href="https://www.google.com">My first link!</a>
```

Yay! It became active and is now clickable! How about the other additional link elements? Most important ones are the "target" and "title" elements, let's add them:

```html
<a href="https://www.google.com" target="_blank" title="Sends you to Google search!">My first link!</a>
```

As you see, the elements can be added within the tag, just by adding them before the ">" character.

The target element specifies what relation your page and the linked webpage have, in our case, we simply specify to open the link in a new (blank) tab.

The title element provides any additional information for when a user puts their cursor over the link but doesn't click it yet, try it!

<iframe width="100%" height="190px" src="//jsfiddle.net/itshazy/f184tb5s/embedded/html,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

# Tip:

Before clicking on a link, always check where it leads by looking at the lower left corner of the browser. Links, especially in e-mails might be dangerous, so compare the links whether they have the same starting part as the website you intend to go to. 

For example, if you receive a link that says it will go to Facebook, hover over it with your cursor and double-check whether the link really starts with "https://www.facebook.com/". Nowadays you can easily put yourself in danger by clicking the wrong link.
