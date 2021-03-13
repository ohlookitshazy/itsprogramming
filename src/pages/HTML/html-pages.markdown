---
layout: post
title:  "HTML Pages"
date:   2020-02-23
categories: [HTML]
tags: [programming, html, basics]
index: 1
---

Since HTML is used to structure entire web pages, then let's write one!

Open the same index.html file we used in the previous post and delete everything in it.

Then write the following:

```html
<html></html>
```

This is the HTML element, which is used to mark the beginning and the end of an HTML webpage. All of the content within HTML files should be "wrapped" with these tags.

Then add an opening and closing tag for the `<head>` and `<body>` elements, like this:

```html
<html>
  <head></head>
  <body></body>
</html>
```

# The Head

Is the element where you define all of the information that the page needs to have, but doesn't need to show on the page. Like the title of the page, that shows up in the actual tab in your browser and search results. 

# The Body

The body holds all of the content that has to be shown on the page. Like headings, paragraphs, lists and links, and many more.

# Putting it all together

By now we already know enough to construct a very simple HTML page. Let's take the setup we already have and start adding content to it.

First, let's add a page title, in the `<head>` element, like so:


```html
<html>
  <head>
    <title>My Page Title!</title>
  </head>
  <body>
  
  </body>
</html>
```

Now you should see the title of the page switch to whatever is the content in the element.

Now let's add a heading, you can also add a list and a few links if you'd like. I'll only add the heading.

```html
<html>
  <head>
    <title>My Page Title!</title>
  </head>
  <body>
    <h1>My Heading!</h1>
  </body>
</html>
```

# Paragraphs

One of the most commonly used elements, the paragraph element: `<p>`. 

It's very similiar to the elements we've already used before. You just provide the opening and closing tag and the content between the tags.

So let's add a paragraph, just beneath the heading and some [random text](https://www.lipsum.com/).

```html
<html>
  <head>
    <title>My Page Title!</title>
  </head>
  <body>
    <h1>My Heading!</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui 
      leo, lobortis quis orci quis, tincidunt volutpat neque. Orci 
      varius natoque penatibus et magnis dis parturient montes, nascetur
       ridiculus mus.</p>
  </body>
</html>
```

Additionally, you might want to split the paragraph into multiple lines, so you can use the line break element - <code class="language-html"><br></code>. This one is a little different, it doesn't need a closing tag, because it doesn't hold any content by itself, it's just a line break.

So let's add it to see what it does.

```html
<html>
  <head>
    <title>My Page Title!</title>
  </head>
  <body>
    <h1>My Heading!</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui 
      leo, lobortis quis orci quis, <br>tincidunt volutpat neque. Orci 
      varius natoque penatibus et magnis dis parturient montes, nascetur
       ridiculus mus.</p>
  </body>
</html>
```

If you'd like to split the paragraph in multiple parts, i'd suggest using separate paragraph elements, to keep the syntax clean and not stack these breaks for adding whitespace.

There's another element, that is quite similiar, the horizontal line element: `<hr>`. 

It also doesn't need a closing tag, because it's just a line. Let's add it to separate the heading and paragraph.

```html
<html>
  <head>
    <title>My Page Title!</title>
  </head>
  <body>
    <h1>My Heading!</h1>
    <hr>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui 
      leo, lobortis quis orci quis, <br>tincidunt volutpat neque. Orci 
      varius natoque penatibus et magnis dis parturient montes, nascetur
       ridiculus mus.</p>
  </body>
</html>
```

# Final Render

<iframe width="100%" height="300" src="//jsfiddle.net/itshazy/me3nd6vh/embedded/html,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Great! We'll take a look at how to establish layout in the next post.
