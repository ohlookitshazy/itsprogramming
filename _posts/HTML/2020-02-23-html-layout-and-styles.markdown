---
layout: post
title:  "HTML Layout and Styles"
date:   2020-02-23
categories: [HTML]
tags: [programming, html, basics]
index: 3
---

In the previous post we looked at the different elements that are most commonly used in websites. Let’s talk about layout. Obviously, after the content itself, the way it is presented is the second most important thing about a website. How easy is it to find stuff, is there always a way back and similiar problems must be tackled when creating a website. 

# How to move things around? 

If you’re wondering if it will need another HTML tag – yes, this time its called a <code class="language-html">&lt;div></code>. That stands for “division“. The simplest way to understand how a div works, is to imagine that it’s a box. A box that holds any HTML elements you put into it, like this: 


```html
<div>
    <h1>A title</h1>
<div>
```

Currently, the code wont make the title look different, you have only created the division. Instructing the division element to change the layout is very simple. You’re going to use what is called an attribute of the div element.

Let’s take a look:

```html
<div style="text-align: center">
    <h1>A title</h1>
</div>
```

Simple enough, right? So you went into the opening tag of the division element, said that – “I want to set the style of this element to align the text it contains in the center!”. When you take a look at the web page in your browser, your text is centered!

# How is a style applied? 

Let’s analyze what you just wrote, it has 3 parts:

#### The Attribute 

```html
style=""
```

The “style” attribute can be changed for all HTML elements. It defines the style of the element with what is known as a CSS style. We will talk about CSS in the oncoming posts. For now, just know that CSS is what changes the look of things on a web page, while HTML is the content itself. 

#### The Property
```html
text-align:
```

This part is which declares what exactly is it we want to change. In this example, the alignment of text. Pretty straightforward.

#### The Value
```html
center
```

Also self-explanatory, the value we want to change the default one from. In our case, the default “text-align” for all elements is “text-align: left”, so we changed it to “center”. You might aswell change it to “right” and have all of the text inside the div that we made previously align to the right side of the webpage.

## How to arrange a webpage layout?

Just centering text is not enough, so let’s dig in further. Divs are a good way to split your webpage into boxes and to apply styles on all elements inside it.&nbsp;
Let’s create a similiar blog type layout, to the one below.
<img src="/assets/img/BlogLayoutDivs_2.png"/>

The first thing you should start with when designing a web page, is to arrange everything in boxes. In this example I see 3 big ones:

<img src="/assets/img/BlogLayoutDivs_1.png"/>

Each of these boxes or divs, can be split even further, like for example, the sidebar has an “About” and an “Archives” box.

## Let’s make it happen

Let’s start with a new HTML file:

```html
<html>
</html>
```

Now let’s add all of the content:

```html
<html>
<body> 
    <h1>My Blog</h1>
    <p>My first blog template, learning how HTML layouts work!</p>

    <h2>About HTML Blog layout</h2>
    <p>September 2, 2018 by Me</p>

    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis accumsan eros, in dignissim tortor venenatis at. Duis nec malesuada odio. Mauris nulla lectus, dictum at dictum nec, tincidunt vitae lacus. Nunc sollicitudin sit amet enim quis tempus. Nunc vitae sapien aliquet, convallis est in, tempor mi. In in risus molestie, consequat sem id, dictum eros. Nullam vestibulum diam vitae libero aliquet, sit amet laoreet magna elementum.
        Aliquam a aliquet nunc, a sagittis massa. Vivamus lacinia mattis libero, ut rhoncus lorem lacinia ac. Nullam ullamcorper maximus leo, ut volutpat felis rhoncus nec. Vestibulum gravida leo erat, sit amet tincidunt ante facilisis a. Sed consectetur tellus id tempus posuere. Aliquam sollicitudin quam non erat malesuada mollis. Suspendisse gravida mollis ex eget ornare. Quisque luctus, diam non condimentum vestibulum, ipsum nisi placerat sem, gravida rutrum lorem leo eget leo. Integer id nulla sem.
    </p>

    <h3>About</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis accumsan eros, in dignissim tortor venenatis at. Duis nec malesuada odio. Mauris nulla lectus, dictum at dictum nec, tincidunt vitae lacus.</p>

    <h3>Archives</h3>
    <ul>
        <li>September 2018</li>
        <li>August 2018</li>
        <li>July 2018</li>
        <li>June 2018</li>
        <li>May 2018</li>
    </ul>
</body>
</html>
```

Now when you refresh the web page, you might start to see how everything will go into its place soon enough. Time to make some divs! We need 3 of them:



{%- capture basic-html-demo -%}
<html>
<body> 
    <div>
        <h1>My Blog</h1>
        <p>My first blog template, learning how HTML layouts work!</p>
    </div>

    <div>
        <h2>About HTML Blog layout</h2>
        <p>September 2, 2018 by Me</p>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis accumsan eros, in dignissim tortor venenatis at. Duis nec malesuada odio. Mauris nulla lectus, dictum at dictum nec, tincidunt vitae lacus. Nunc sollicitudin sit amet enim quis tempus. Nunc vitae sapien aliquet, convallis est in, tempor mi. In in risus molestie, consequat sem id, dictum eros. Nullam vestibulum diam vitae libero aliquet, sit amet laoreet magna elementum.
            Aliquam a aliquet nunc, a sagittis massa. Vivamus lacinia mattis libero, ut rhoncus lorem lacinia ac. Nullam ullamcorper maximus leo, ut volutpat felis rhoncus nec. Vestibulum gravida leo erat, sit amet tincidunt ante facilisis a. Sed consectetur tellus id tempus posuere. Aliquam sollicitudin quam non erat malesuada mollis. Suspendisse gravida mollis ex eget ornare. Quisque luctus, diam non condimentum vestibulum, ipsum nisi placerat sem, gravida rutrum lorem leo eget leo. Integer id nulla sem.
        </p>
    </div>

    <div>
        <h3>About</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis accumsan eros, in dignissim tortor venenatis at. Duis nec malesuada odio. Mauris nulla lectus, dictum at dictum nec, tincidunt vitae lacus.</p>

        <h3>Archives</h3>
        <ul>
            <li>September 2018</li>
            <li>August 2018</li>
            <li>July 2018</li>
            <li>June 2018</li>
            <li>May 2018</li>
        </ul>
    </div>
</body> 
</html>
{% endcapture %}

<pre class="line-numbers" data-line="3, 6, 8, 16, 18, 30"><code class="language-html">
{{- basic-html-demo | escape -}}
</code> </pre>

As mentioned previously, just adding div tags wont change anything, so let’s add attributes. Since the example web page layout is nicely centered, let’s add a div around everything that we have currently, by the way, this is also called “wrapping” – when you “wrap” something in, for example div tags.

So now you should have 4 divs in total, like so:

{%- capture basic-html-demo-2 -%}
<html>
<body> 
    <div>
        <div>
            <h1>My Blog</h1>
            <p>My first blog template, learning how HTML layouts work!</p>
        </div>

        <div>
            <h2>About HTML Blog layout</h2>
            <p>September 2, 2018 by Me</p>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis accumsan eros, in dignissim tortor venenatis at. Duis nec malesuada odio. Mauris nulla lectus, dictum at dictum nec, tincidunt vitae lacus. Nunc sollicitudin sit amet enim quis tempus. Nunc vitae sapien aliquet, convallis est in, tempor mi. In in risus molestie, consequat sem id, dictum eros. Nullam vestibulum diam vitae libero aliquet, sit amet laoreet magna elementum.
            Aliquam a aliquet nunc, a sagittis massa. Vivamus lacinia mattis libero, ut rhoncus lorem lacinia ac. Nullam ullamcorper maximus leo, ut volutpat felis rhoncus nec. Vestibulum gravida leo erat, sit amet tincidunt ante facilisis a. Sed consectetur tellus id tempus posuere. Aliquam sollicitudin quam non erat malesuada mollis. Suspendisse gravida mollis ex eget ornare. Quisque luctus, diam non condimentum vestibulum, ipsum nisi placerat sem, gravida rutrum lorem leo eget leo. Integer id nulla sem.
            </p>
        </div>

        <div>
            <h3>About</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis accumsan eros, in dignissim tortor venenatis at. Duis nec malesuada odio. Mauris nulla lectus, dictum at dictum nec, tincidunt vitae lacus.</p>

            <h3>Archives</h3>
            <ul>
                <li>September 2018</li>
                <li>August 2018</li>
                <li>July 2018</li>
                <li>June 2018</li>
                <li>May 2018</li>
            </ul>
        </div>
    </div>
</body> 
</html>
{% endcapture %}
<pre class="line-numbers" data-line="3, 32"><code class="language-html">
{{- basic-html-demo-2 | escape -}}
</code> </pre>
Let’s start off by adding the following attribute to the very first div tag, the one that has all of the elements inside it:

```html
<div style="margin-left: 25%;"></div>
```

So now you should have the following code:

```html
<body> 
    <div style="margin-left: 25%;">
        <div>
            <h1>My Blog</h1>
            <p>My first blog template, learning how HTML layouts work!</p>
        </div>

        <div>
        <h2>About HTML Blog layout</h2>
        <p>September 2, 2018 by Me</p>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis accumsan eros, in dignissim tortor venenatis at. Duis nec malesuada odio. Mauris nulla lectus, dictum at dictum nec, tincidunt vitae lacus. Nunc sollicitudin sit amet enim quis tempus. Nunc vitae sapien aliquet, convallis est in, tempor mi. In in risus molestie, consequat sem id, dictum eros. Nullam vestibulum diam vitae libero aliquet, sit amet laoreet magna elementum.
            Aliquam a aliquet nunc, a sagittis massa. Vivamus lacinia mattis libero, ut rhoncus lorem lacinia ac. Nullam ullamcorper maximus leo, ut volutpat felis rhoncus nec. Vestibulum gravida leo erat, sit amet tincidunt ante facilisis a. Sed consectetur tellus id tempus posuere. Aliquam sollicitudin quam non erat malesuada mollis. Suspendisse gravida mollis ex eget ornare. Quisque luctus, diam non condimentum vestibulum, ipsum nisi placerat sem, gravida rutrum lorem leo eget leo. Integer id nulla sem.
        </p>
    </div>

    <div>
        <h3>About</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis accumsan eros, in dignissim tortor venenatis at. Duis nec malesuada odio. Mauris nulla lectus, dictum at dictum nec, tincidunt vitae lacus.</p>

        <h3>Archives</h3>
        <ul>
            <li>September 2018</li>
            <li>August 2018</li>
            <li>July 2018</li>
            <li>June 2018</li>
            <li>May 2018</li>
        </ul>
    </div>
</body> 
</html>
```

The code we just added, moves all of our html elements 25% from the left side of the page.

By default, divs are taking up all of the horizontal space, that’s why they are stacked on top of one another in our web page currently.

<img src="/assets/img/InitialBlogLayout.png"/>

So lets change that. Add this to the lower two divs:

```html
<div style="width: 40%; display: inline-block;">
```

Change the width of the last div to be 20%, so that it doesn’t take up too much space and closer resembles the layout we looked at in the beginning. So now your code should look like this:

```html
<html>
<body> 
    <div style="margin-left: 25%;">
        <div>
            <h1>My Blog</h1>
            <p>My first blog template, learning how HTML layouts work!</p>
        </div>

        <div style="width: 40%; display: inline-block;">
            <h2>About HTML Blog layout</h2>
            <p>September 2, 2018 by Me</p>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis accumsan eros, in dignissim tortor venenatis at. Duis nec malesuada odio. Mauris nulla lectus, dictum at dictum nec, tincidunt vitae lacus. Nunc sollicitudin sit amet enim quis tempus. Nunc vitae sapien aliquet, convallis est in, tempor mi. In in risus molestie, consequat sem id, dictum eros. Nullam vestibulum diam vitae libero aliquet, sit amet laoreet magna elementum.
                Aliquam a aliquet nunc, a sagittis massa. Vivamus lacinia mattis libero, ut rhoncus lorem lacinia ac. Nullam ullamcorper maximus leo, ut volutpat felis rhoncus nec. Vestibulum gravida leo erat, sit amet tincidunt ante facilisis a. Sed consectetur tellus id tempus posuere. Aliquam sollicitudin quam non erat malesuada mollis. Suspendisse gravida mollis ex eget ornare. Quisque luctus, diam non condimentum vestibulum, ipsum nisi placerat sem, gravida rutrum lorem leo eget leo. Integer id nulla sem.
            </p>
        </div>

        <div style="width: 20%; display: inline-block;">
            <h3>About</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis accumsan eros, in dignissim tortor venenatis at. Duis nec malesuada odio. Mauris nulla lectus, dictum at dictum nec, tincidunt vitae lacus.</p>

            <h3>Archives</h3>
            <ul>
                <li>September 2018</li>
                <li>August 2018</li>
                <li>July 2018</li>
                <li>June 2018</li>
                <li>May 2018</li>
            </ul>
        </div>
    </div>
</body> 
</html>
```

<img src="/assets/img/InitialBlogLayout (1).png"/>

Nice! Looking good! Now let’s analyze what we’ve just added:

<pre><code class="language-css">width: 40%;</code> </pre>

Simply tells the element how wide it should be.

<pre><code class="language-css">display: inline-block;</code> </pre>

This tells the element to instead of taking all of the horizontal space on the page, it should allow other elements to be in-line with it, the "block" means that it still should be treated as a box element.

If you remove the "-block" part, everything will return to being as it was, because since you took the box behavior away, everything now is in the same box, thus the structure is lost.
