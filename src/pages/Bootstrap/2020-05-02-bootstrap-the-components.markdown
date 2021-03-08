---
layout: post
title:  "Bootstrap: Components"
date:   2020-05-02
categories: [Bootstrap]
tags: [programming, bootstrap, html, css, javascript]
index: 3
---

Bootstrap offers way more, than just an efficient way to position your content. It offers [a pretty big list](https://getbootstrap.com/docs/4.4/components/alerts/) of premade components, which you have to only copy over and configure.

# Basic Bootstrap Components

Let's look at some basic ones. This is our HTML, the basic setup we used previously.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>

<body>

    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>
</body>

</html>
```

Now let's add in the grid we had going on in the previous post, so now you should have this:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>

<body>

    <div class="container">
        <div class="row">
            <div class="col">
                
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>
</body>

</html>
```

Now that the setup is done, let's look at our first Bootstrap component.

# Cards

So [cards](https://getbootstrap.com/docs/4.4/components/card/) are literally just components that you can add pretty much any content into and in various ways. It's a card.

So let's add one! I omitted HTML for brevity and just copied over the card from the example.

```html
...

<div class="container">
    <div class="row">
        <div class="col">

            <div class="card" style="width: 18rem;">
              <img src="..." class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>

        </div>
    </div>
</div>

...
```

You should now see something like this:

<iframe width="100%" height="300" src="//jsfiddle.net/itshazy/abou4yrs/1/embedded/html,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

Already a few things stand out in the example:

* Why does the card element has inline style?
* Why is there no image source in the "img" element?
* Why is the "alt" text empty?

There's only one answer - who knows? 

So let's remove all 3 of them.

"Wait what? What do you mean there's no answer?" 

Yeah, there propably is one. Regardless of why the developer put that there, I assume just for the purpose of the example, them putting it there doesn't mean you can't change it. In fact, their recommendation is for you to use their framework for faster development.

```html
<div class="container">
    <div class="row">
        <div class="col">

            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>

        </div>
    </div>
</div>
```

Now it's cleaner. Okay, so as you see you can customize the content and where the button takes you as you wish. 

In general, all that you have to do to use Bootstrap efficiently, is:

* Import it
* Remember about the 3 parts of the Bootstrap Grid
* Use classes on elements properly

That's it!

# Buttons

Let's add some stuff inside our card. Bootstrap has [multiple variations of buttons](https://getbootstrap.com/docs/4.4/components/buttons/) for you to use. So let's use them!

```html
<div class="container">
    <div class="row">
        <div class="col">

            <div class="card">
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button type="button" class="btn btn-primary">Primary</button>
                <button type="button" class="btn btn-secondary">Secondary</button>
                <button type="button" class="btn btn-success">Success</button>
                <button type="button" class="btn btn-danger">Danger</button>
                <button type="button" class="btn btn-warning">Warning</button>
                <button type="button" class="btn btn-info">Info</button>
                <button type="button" class="btn btn-light">Light</button>
                <button type="button" class="btn btn-dark">Dark</button>

                <button type="button" class="btn btn-link">Link</button>
                </div>
            </div>

        </div>
    </div>
</div>
```

Notice I removed the initial link, which was an "a" element, instead of a button. You can of course try and use "a" elements instead, but it's best to follow the examples given by the developers of the framework. They even explicitly state [here](https://getbootstrap.com/docs/4.4/components/buttons/#button-tags):

"The .btn classes are designed to be used with the `<button>` element. However, you can also use these classes on `<a>` or `<input>` elements (though some browsers may apply a slightly different rendering)."

Cool! Of course, the amount of buttons is excessive for anything useful. So let's remove all of those for now:

```html
<div class="container">
    <div class="row">
        <div class="col">

            <div class="card">
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

        </div>
    </div>
</div>
```

Be sure to check out the [buttons page](https://getbootstrap.com/docs/4.4/components/buttons/) in the docs for all the different ways to use buttons with Bootstrap!

# Headings

Let's add a new row and add a [display heading](https://getbootstrap.com/docs/4.4/content/typography/#display-headings) element, provided by Bootstrap:

```html
<div class="container">
    
    <div class="row">
        <div class="col">
            <h1 class="display-4">My Blog</h1>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">Some Blog Post</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

        </div>
    </div>
</div>
```

Now let's add some leading text under the heading. Notice I changed the text for the "h5" element too:

```html
<div class="container">
    
    <div class="row">
        <div class="col">
            <h1 class="display-4">My Blog</h1>
            <div class="lead">Some leading text, probably a description for the blog goes here.</div>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">Some Blog Post</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

        </div>
    </div>
</div>
```

Now we have a blog website layout taking shape! Test yourself by building a copy (or a something that resembles) a website that is out there or just continue building this example. Try to add a sidebar. Or try adding back the image on the card (we took the "img" element out of the example at the very beginning).

**Important!**

Don't think practicing layouts like this is pointless. You can reuse any of these later in the future, when you will be able to add data dynamically and etc. It's also great stuff to reflect upon later, to see how you have progressed too!

## Final Example

<iframe width="100%" height="300" src="//jsfiddle.net/itshazy/06yL8kgv/embedded/html,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>