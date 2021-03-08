---
layout: post
title:  "Bootstrap: The Basics"
date:   2020-05-01
categories: [Bootstrap]
tags: [programming, bootstrap, html, css, javascript]
index: 2
---

After importing Bootstrap succesfuly, we can get to building a layout! Let's see how the system works first, so that we don't get headaches of "what goes where" later.

# The Grid

Website design usually revolves around grids (think tic-tac-toe). To maintain consistency and allow easier implementation of responsivity. Just imagine going through a website, where all elements would be different sizes and in random positions - a nightmare. That's why we have smooth flowing websites nowadays, navigating through them doesn't require you to think much of which button is where.

Back in the day though, people used tables to create website design. Yeah, the same regular tables you'd see in Word or Excel.

**Fun fact:**

E-mail templates are [still being made with tables](https://webdesign.tutsplus.com/articles/build-an-html-email-template-from-scratch--webdesign-12770), because of safety precautions and other reasons. 


In Bootstrap, the grid is being controlled by 3 CSS classes and **they always have to be in a certain order**, like this:

```html
...

<div class="container">
  <div class="row">
    <div class="col">
      
    </div>
  </div>
</div>

...
```

To better understand how they interact, let's add some colors to them:

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="css,result" data-user="itsprogramming" data-slug-hash="wvKrZRm" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Bootstrap Example 2">
  <span>See the Pen <a href="https://codepen.io/itsprogramming/pen/wvKrZRm">
  Bootstrap Example 2</a> by itsprogramming (<a href="https://codepen.io/itsprogramming">@itsprogramming</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

So I colored each one and made the text white, so that we can see it on the darker backgrounds. I added some text too, so that there's some content present as well. Opening the full example via the "Edit on Codepen" might help understand the example better.

Ok, so what's the difference between the three?

All three classes have to be applied on "div" elements. The outermost class is the "container", as in the overall "box" that sets the boundaries of the grid itself.

Then you have the "row" class, it is simply a horizontal row, that splits the container.

Then there's a "col" class. It stands for "column". It allows you to further split the row into columns. 

It's easiest to understand when put to practice, so let's do it:

# Columns

Add another column, like this:

```html
<div class="container">
  <div class="row">
    <div class="col">
      Some text.
    </div>
    <div class="col">
      Some text.
    </div>
  </div>
</div>
```

Notice how the row is now split equally. Because we only have 2 columns. Add another one!

```html
<div class="container">
  <div class="row">
    <div class="col">
      Some text.
    </div>
    <div class="col">
      Some text.
    </div>
    <div class="col">
      Some text.
    </div>
  </div>
</div>
```

You could already start using this layout, to have some content in the middle of the page and two sidebars! You didn't even notice it! 

By now you might wonder - "Wait, where's the row itself? Didn't I paint it green?"

Yup, it's right there, underneath the columns. Let's add some margins to reveal it:

```css
.col {
  background: blue;
  margin: 10px;
}
```

Now you should be able to see the row. 

# Rows

Let's duplicate the entire row, so now we have two:

```html
<div class="container">
  <div class="row">
    <div class="col">
      Some text.
    </div>
    <div class="col">
      Some text.
    </div>
    <div class="col">
      Some text.
    </div>
  </div>
  <div class="row">
    <div class="col">
      Some text.
    </div>
    <div class="col">
      Some text.
    </div>
    <div class="col">
      Some text.
    </div>
  </div>
</div>
```

Okay, so that works as expected, where is the container though?

You can reveal the container the same way, just add a margin to the bottom:

```css
.row {
  background: green;
  margin-bottom: 10px;
}
```

As you see the basics are simple, but important. I've had multiple cases where i've been wrestling with paddings and margins, and even linebreaks to get some elements positioned properly. 

If you'd add another row and remove row margins from the CSS, you'd literally get a tic-tac-toe grid, like this:

<p class="codepen" data-height="481" data-theme-id="dark" data-default-tab="html,result" data-user="itsprogramming" data-slug-hash="RwWLOzZ" style="height: 481px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Bootstrap Example 3">
  <span>See the Pen <a href="https://codepen.io/itsprogramming/pen/RwWLOzZ">
  Bootstrap Example 3</a> by itsprogramming (<a href="https://codepen.io/itsprogramming">@itsprogramming</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

# Overriding Bootstrap 

Notice, that Bootstrap is just a framework. It comes with pre-defined CSS classes like "container", "row", "col", but you can freely customize them further, by just overriding them in your own CSS, providing the same (or more specific) selectors.

Remember, to import your CSS **after Bootstrap is imported**, so that the changes don't go the other way. Code is read top-to-bottom.

There are advanced ways to override bootstrap, like customizing values before the framework CSS file is generated, but let's keep it simple for now. Just overriding the CSS is perfectly fine.

If you imported Bootstrap locally, be careful not to change those files (or else the next time an update to the framework comes around, by copying the new file in, you will overwrite all of your changes).

Do take the time to open up the Bootstrap CSS file though, a lot of effort and time has gone into making it. You don't even have to download it to see it, just use [the CDN link](https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css)!

## Woah, all of that CSS is jumbled upon into a mess!

Actually it's perfectly valid CSS, it's just been "minified" as in "all of the needless symbols including spaces are taken out", for performance. The computer doesn't care about many symbols, yet we write them in code to make the code more readable for humans. For computers, this minified code is fine, it even makes the file lighter, so the page loads faster.

CDN link from before: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap**.min**.css"

Minified files are usually with ".min" in the name, to help distinguish them from the regular ones. So, if you'd like to see the human readable version, just remove ".min" from the link and you should be redirected to [the other file](https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.css).



