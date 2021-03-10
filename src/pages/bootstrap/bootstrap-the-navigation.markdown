---
layout: post
title:  "Bootstrap: Navigation"
date:   2020-05-02
categories: [Bootstrap]
tags: [programming, bootstrap, html, css, javascript]
index: 4
---

Cool, so we took a look at creating a simple page layout previously with Bootstrap components, using the Bootstrap grid. Websites usually have more than one page nowadays (shush SPA devs).

# The Navigation

So obviously to navigate between pages, we need some sort of navigation. Bootstrap has navigation built out for you. It's even responsive. Let's use the example from the previous post.

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

Then let's add navigation, based on what's written in [the Bootstrap docs about navigation (navbars)](https://getbootstrap.com/docs/4.4/components/navbar/) and add the very first snippet to our example:

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

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>

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
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                    </div>
                </div>

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

Damn, that's a ton of code already. Moving forward, I will omit elemets for brevity and use Codepen for full example display. Let's focus just on the navigation first:

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
</nav>
```

So why does something that seem as just a box with some links in it become so complex when you look at the code?

It's because mainly it consists of multiple parts, so let's take a look at each one starting from the top:

* The Branding ("a" element with the "navbar-brand" class)
* The Responsive menu button (aka the "burger menu")
* Some "div" with the classes "collapse navbar-collapse" with some id that seems to contain everything with in it
* Then an "ul" (unordered list) element, which contains the links themselves
* Then a form element, that's on the other side of the page

It's all responsive too! Try resizing the page and see how the menu changes!

No, seriously, do it. It's like magic. You didn't write a single "@media" query for responsivity yourself and your design already knows how to act when viewed with different screen sizes. Thus, the power of using a ready front-end framework.

Let's go a bit more in detail about each one.

## The Branding

This is the element which usually would be the logo. Either it's a text, icon or image logo. As long as it's sized properly, it should work. Use the dev tools inspector mode to understand what's up, if it doesn't.

## The Responsive Menu Button

Once you size down the width of the page, you will see that the navigation changes into something entirely different. Yet it keeps all of the same content. There are not two navbars here, it's the same one.

The trick is, that at **991px** the navigation elements are getting really close to one another. To avoid overlapping or some weird breaking of the design, the items are re-aligned into a vertical list instead. Smart!

>Why **991px**?

Because the Bootstrap CSS file says so:

```css
@media (min-width: 992px)
.navbar-expand-lg .navbar-toggler {
    display: none;
}
```

If you want to customize and make it appear sooner (or later) in the range of screen sizes, copy this CSS selector over to your CSS file (that is imported after the Bootstrap CSS file) and just change the "min-width: 992px" to whatever fits you better.

Now, where does this magic number itself come from (Magic - because seemingly with no origin)?

It comes from [the container breakpoints](https://getbootstrap.com/docs/4.4/layout/overview/#containers). 

As you see on that page, Bootstrap defines 5 types of screen sizes. The responsive menu appears only if the current screen size is under the "Large" dimensions, which is 992px, so at 991px it becomes visible.

## Some "div" with the classes "collapse navbar-collapse"

This is simply the wrapper around the content, that will have to be "collapsed" into the vertical list when the screen size falls within the correct range. Take a look at it in the inspector, once the responsive menu appears (and is opened).

## The "ul"

It simply provides styles and a way to add links that makes sense (they are usually lists).

## Then a form element

Well, it's a form element. It doesn't do anything, because it's not wired to anything. It's just a placeholder.

# Centering the Navigation Elements

>The navigation seems to take up the full width of the page, how can I center it more, so it aligns with the content?

Easy. Just place the entire nav within the same (or an identical) "container" div:

<iframe width="100%" height="300" src="//jsfiddle.net/itshazy/cexwzvrL/embedded/html,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

More info [here](https://getbootstrap.com/docs/4.4/components/navbar/#containers).

**Remember:**

If you want the responsive menu behavior to exist in Codepen too, you have to import Bootstrap **JavaScript** as well as the **CSS**. In Codepen, simply add it the same way you added the custom stylesheets, via the gear icon in the "JS" window.

**Be careful:**

When importing jQuery, make sure it is the same version shown in [the docs](https://getbootstrap.com/docs/4.4/getting-started/introduction/#js):

```html
<!-- The jQuery imported below is of version "3.4.1", so change this number whenever you're importing jQuery in Codepen too -->
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
```

# Additionally:

Ok, cool. So it's not that scary. Told you I was about to bring in lots more code in. Only after I introduced you to the dev tools though, so don't worry, you'll be fine. 👍

Actually take the time to inspect each element to learn more why it is the way it is. 

Remember to use Google to search for answers. You are most likely not the first one with some problem, definitely not the last one. So the answers are out there. 

[Here is an article on how to use Google if you're a developer.](https://medium.com/@niamhpower/how-to-google-effectively-as-a-developer-4ebe363afe)

[Stackoverflow](https://stackoverflow.com/) is your second best friend in the developer world. If Google doesn't give you answers, try searching there directly.

