---
layout: post
title:  "Responsive Columns"
date:   2020-05-02
categories: [Bootstrap]
tags: [programming, bootstrap, html, css, javascript]
index: 6
---

Previously we looked at the most basic usage of columns within rows. Bootstrap allows you to individually control how each column behaves when it has to respond to different screen sizes.

# Responsive Column Classes

So the description about these in the documentation is found [here](https://getbootstrap.com/docs/4.4/layout/grid/#responsive-classes).

As you can see in the documentation example:

```html
<div class="container">
  <div class="row">
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
  </div>
  <div class="row">
    <div class="col-8">col-8</div>
    <div class="col-4">col-4</div>
  </div>
</div>
```

The second row has column size provided with the class name. So you can specify **1-12** columns after the "col-" part, to control it manually. The maximum is 12, because that's how Bootstrap has defined it.

```html
<div class="container">
  <div class="row">
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
  </div>
  <div class="row">
    <div class="col-8">col-8</div>
    <div class="col-4">col-4</div>
  </div>
    <div class="row">
    <div class="col-8">col-8</div>
    <div class="col">col-?</div>
  </div>
</div>
```

<iframe width="100%" height="300" src="//jsfiddle.net/itshazy/509fnzde/embedded/html,css,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

You don't have to specify all column sizes though, in this case, the 3rd rows second column will automatically take up 4 column spaces, because that's all that is left, after the first one takes 8/12.

# Positioning Columns

You can also define where your columns are placed, if they don't take up the full width:

```html
<div class="container">
  <div class="row">
    <div class="col align-self-start">
      One of three columns
    </div>
    <div class="col align-self-center">
      One of three columns
    </div>
    <div class="col align-self-end">
      One of three columns
    </div>
  </div>
</div>
```

Here's [a few more examples in the docs](https://getbootstrap.com/docs/4.4/layout/grid/#horizontal-alignment).

# Offsetting Columns

[Also very easy to do](https://getbootstrap.com/docs/4.4/layout/grid/#offsetting-columns). All that you really do is just add the correct class and you're good!

The example has "md" in it, that's the breakpoint class name that we saw previously at the [container breakpoint section in the docs](https://getbootstrap.com/docs/4.4/layout/overview/#containers).

# Controlling Responsivity

Since the breakpoint class names are shared, you can easily add as many as are needed to the columns for different screen sizes if needed. 

For example:

<iframe width="100%" height="240" src="//jsfiddle.net/itshazy/cw1tbek6/embedded/html,css,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

This column will be:

* Full sized on screens smaller than 576px 
* Take up 1 column on screens from 576-768px
* Take up 3 columns on screens from 768-992px
* Take up 6 columns on screens from 992-1200px
* Be full sized again on screens larger than 1200px

Open the example in Codepen or do it in a local project, then open dev tools and watch the column change sizes as you change the screen width. As long as you test your design with these sizes, then there should be no design breaking for some specific tablet model or anything like that. 

# Nesting Columns

Another important aspect, to achieve more specific and advanced layouts is nesting columns. 

There's [an example in the docs](https://getbootstrap.com/docs/4.4/layout/grid/#nesting), but I'm not sure why they used breakpoint classes "col-sm-6" in them, here's the same example, but simplified:

<iframe width="100%" height="300" src="//jsfiddle.net/itshazy/w04agz8o/embedded/html,css,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>