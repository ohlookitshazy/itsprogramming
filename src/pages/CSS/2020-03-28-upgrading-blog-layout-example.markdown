---
layout: post
title:  "Upgrading the Blog Layout Example"
date:   2020-03-28
categories: [CSS]
tags: [programming, html, basics, css]
index: 5
---

Let's take the blog layout we looked at in the ["HTML Layout and Styles"](/html-layout-and-styles.html) post:

<img src="/assets/img/BlogLayoutDivs_2.png"/>

Let's also take the code we ended up with at the end of that post and re-create the layout as seen in the screenshot above, but slightly better.

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

The first thing before we change any styles, would be to copy over the existing inline styles into a separate .css file.

<p class="codepen" data-height="900" data-theme-id="dark" data-default-tab="html" data-user="itsprogramming" data-slug-hash="vYOvvoP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Blog Layout Example">
  <span>See the Pen <a href="https://codepen.io/itsprogramming/pen/vYOvvoP">
  Blog Layout Example</a> by itsprogramming (<a href="https://codepen.io/itsprogramming">@itsprogramming</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Here's how I'd do it. It makes sense. I added classes for each element I want to customize, gave them appropriate names and moved the styles to a separate file for maintainability. Now we could have 5 posts each with different content and have the same style applied. 

Now let's change the font, let's load in a custom one from <a href='https://fonts.google.com/' target="_blank">Google Fonts</a>. I chose "Open Sans", here is the element to add inside the head of the page.

```html
<link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
```

Then add an additional selector to our CSS:

```css
.content h1 {
      font-family: 'Open Sans', sans-serif;
}
```

Be careful though, because now all <code class="language-html">&lt;h1></code> elements within the <code class="language-html">&lt;div class="content"></code> will have the change applied. Because we are specifying to apply styles to all <code class="language-html">&lt;h1></code> elements, within elements that have 'class="content"' on them.

If you'd like to specify only the blog title, you should add a class to it instead. In our case I will keep that title as the most important title as the only H1 heading and other headings, like for example, the post headings are of lower importance, thus I've already set it to be an <code class="language-html">&lt;h2></code> element instead. Continuing this pattern, I've also set the sidebar heading, which is even less important, to use the <code class="language-html">&lt;h3></code> element. This allows me to target those headings individually, without writing additional classes.

While we're at it, let's change it's size as well:

```css
.content h1 {
      font-family: 'Open Sans', sans-serif;
      font-size: 60px;
}
```

Now for the blog description, since it shares the same connection with the <code class="language-html">&lt;div class="content"></code> element, as in you can target the blog description and all other paragraphs simply by writing a CSS selector that targets any <code class="language-html">&lt;p></code> elements, that are within the <code class="language-html">&lt;div class="content"></code> element. 

So we'd use something like this:

```css
.content p {
      font-family: 'Open Sans', sans-serif;
}
```

This is how your code should look like by now:

<p class="codepen" data-height="1000" data-theme-id="dark" data-default-tab="html" data-user="itsprogramming" data-slug-hash="NWqeojb" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Blog Layout Example 2">
  <span>See the Pen <a href="https://codepen.io/itsprogramming/pen/NWqeojb">
  Blog Layout Example 2</a> by itsprogramming (<a href="https://codepen.io/itsprogramming">@itsprogramming</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Notice that you could've instead selected each div and set specifically their paragraph element styles, but that would result in 3x the code. Instead, try to use a practical structure, which in this case allows us to just target all elements within a so called "parent" element, which in our case is the <code class="language-html">&lt;div class="content"></code> element.

In fact, we can go even further and use an element that's already present and make all of this custom font stuff very fast and simple.

Remove all occurences of setting the custom font-family (leave the font-size for the blog title) and just add this to the top of the CSS file:

```css
body {
      font-family: 'Open Sans', sans-serif;
}
```

It makes sense, because the body element always holds all of the page content. So it makes sense to do the font change there. Later, when you need specific styles, like for the titles and such, be sure to add your selectors below this body element selector. 

Your CSS should now be like this:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css" data-user="itsprogramming" data-slug-hash="LYVMqro" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Blog Layout Example 3">
  <span>See the Pen <a href="https://codepen.io/itsprogramming/pen/LYVMqro">
  Blog Layout Example 3</a> by itsprogramming (<a href="https://codepen.io/itsprogramming">@itsprogramming</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Looking good! 👍🏼

Now we could improve the blog description to fit in better. Let's remove the big gap between the description and the title by changing the CSS selector for the title to:

```css
.content h1 {
  font-size: 60px;
  margin-bottom: 0;
}
```

You can also use classes, to set predefined styles for many types of elements, like for example - declaring a CSS class for text that will be grayed out:

```css
.gray-text {
  color: gray;
}
```

Now you can add this class to either headings, paragraphs or even the list we have on the page. Try it out! I will just add it to the blog description and the post timestamp.

As an added benefit, our "gray-text" class is now added on elements, that we'd like to decrease the gap that's on top of those too and we can simply do it by adding an additional margin property value of 0, like so:

```css
.gray-text {
  color: gray;
  margin-top: 0;
}
```

Now our blog layout page really starts taking form and the titles look nice and tidy (open the full example):

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="itsprogramming" data-slug-hash="KKpbJxy" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Blog Layout Example 4">
  <span>See the Pen <a href="https://codepen.io/itsprogramming/pen/KKpbJxy">
  Blog Layout Example 4</a> by itsprogramming (<a href="https://codepen.io/itsprogramming">@itsprogramming</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Of course viewing it via the CodePen widget will squeeze your page into a different way than it looks when you open the full example on CodePen. This is because we are not taking into account the responsivity aspect of websites just yet. So the layout is the same if you would open it on a phone, basically. The margin-left property we have used doesn't really allow the content to resize properly when scaled down. This is one of the main ideas for responsive design in general - How to create a design that takes care of the content both on horizontal and vertical screens. This includes stuff like deciding to hide elements, like the navigation bar, for example, since there is simply no space for it and deciding to hide it behind the so called "burger" icon instead. 

As you see, designing web page layouts is not as hard as it may seem. You just have to clearly define what goes where and make sure that you can understand what you wrote a month from now. 😄 
