---
layout: post
title:  "What is Programming?"
date:   2020-02-22
categories:  [The Basics]
tags: [programming, general, basics]
index: 1
---

Starting with the simple question of - What is programming? 

As stated in the [Wikipedia](https://en.wikipedia.org/wiki/Computer_programming):

> Computer programming is the process of designing and building an executable computer program to accomplish a specific computing result.

If we simplify it a bit:

> Programming is the process of designing and building an executable program to accomplish a specific result.

So we can split programming into two parts:

* Designing and building a program.
* Executing it to accomplish a specific result.

# Designing and Building a Program

Many countless programs exist with different designs and purposes. Nowadays you can program pretty much any electronic device, from computers, to cars, to sattelites, to your fridge. How do you know where to start? 

One good way to understand which first programming language to learn, is to look at the [StackOverflow Developer Survey from 2019](https://insights.stackoverflow.com/survey/2019#most-popular-technologies), where ~**90000** developers have expressed their opinion on technologies and other parts of the programming world.

As you already see, at the top we have JavaScript, HTML and CSS. These languages are responsible for the explosive growth of web technologies we utilize every day. These 3 languages are going to be the main focus of this course.

**How do you build a program?** You write code for it. 

**Where?** In any text editor or a specialized code editing environment (read - fancy text editor).

**How?** By writing in a special way, according to the rules of the language.

The same way that humans understand language, like when it's spoken cleary, in properly structured sentences - in that same way computers understand what you're trying to do if you align to the way code should be written.

Let's take a look at some HTML.

<pre><code class="language-html">&lt;h1>I am a heading.&lt;/h1></code></pre>

If you would give that to a web browser, you would see this:

<p class="codepen" data-height="162" data-theme-id="dark" data-default-tab="result" data-user="itsprogramming" data-slug-hash="BaNQxjP" style="height: 162px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Heading 1 Example">
  <span>See the Pen <a href="https://codepen.io/itsprogramming/pen/BaNQxjP">
  Heading 1 Example</a> by itsprogramming (<a href="https://codepen.io/itsprogramming">@itsprogramming</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


Simple enough right? You can press "Edit on CodePen" in the corner, to play around with the text. Try it out!

Let's break it down.

<pre><code class="language-html">&lt;h1>&lt;/h1></code></pre>

These HTML tags are for the ["section heading 1"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements), theres an opening and a closing one in the above examples. Inbetween you can place text and have it shown according to how "section heading 1" looks. By default, its the Times New Roman font with a large font size and some space underneath, to symbolize a heading, like one seen in a newspaper.

For context, here are all of the heading sizes:

<p class="codepen" data-height="375" data-theme-id="dark" data-default-tab="result" data-user="itsprogramming" data-slug-hash="zYGojVz" style="height: 375px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Heading 1-6 Example">
  <span>See the Pen <a href="https://codepen.io/itsprogramming/pen/zYGojVz">
  Heading 1-6 Example</a> by itsprogramming (<a href="https://codepen.io/itsprogramming">@itsprogramming</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

# Executing it to Accomplish a Specific Result

Obviously the previous example is simple. Let's imagine you have written your program, even if it's just the above code.

How to execute it? Let's imagine you have written your program and you want to execute it (read - launch it like a rocket 🚀). 

Since you've written it in HTML, you need a browser to actually execute the code. All of the browsers can read and execute HTML. We'll do exactly that in the next post.

What about the "Specific Result" part? I am glad that whoever wrote that, did it like this, because a program should always be made for a specific purpose. Huge programs, like video games or social networks aren't single "programs", they're a collection of countless smaller programs, where each one of those (hopefully) is written for a specific purpose. 

So while it's relatively easy to learn how to build simple programs, connecting them in a way that builds upon each other and doesn't slow each other down is the essence of the craft.
