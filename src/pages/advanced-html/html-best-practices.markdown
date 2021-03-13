---
layout: post
title:  "HTML Best Practices"
date:   2020-12-04
categories: [Advanced HTML]
tags: [the web, programming, basics, html]
index: 0
---

By now it should be clear as to what HTMLs main purpose is. It's also important to reach out and see what best practices people implement and what the latest and greatest approaches are.

Fortunately, you don't have to look far.

Introducing the [**HTML5 Boilerplate**](https://html5boilerplate.com/).

As they state in their repo:

> A finely-tuned starter template. Reap the benefits of 10 years of analysis, research and experimentation by over 200 contributors.

If that's not enough then it's used by:

> Microsoft, NASA, Nike, Barack Obama, ITV News, Creative Commons, Australia Post, and many more.

Great! Of course, there are plenty of other resources, but in these series, I will go into detail about this particular one.

# The HTML5 Boilerplate Project

So you hit the big shiny "Download" button and got the zip file unzipped into a folder, what's next?

> That's a lot of stuff in here, 31 files and 4 folders??

Yep. Let's dig in.

But before we do, I want you to go back on their site and take another look at their navigation up top. It has "SOURCE CODE", "DOCS", "OTHER PROJECTS" (as of 04.12.2020). Press "[SOURCE CODE](https://github.com/h5bp/html5-boilerplate)".

You're gonna see **a ton** of buttons, don't worry about any of them for now. What I want you to do next is scroll down to the description part and check out the various stuff they outline there.

The page you're on currently (github.com) is one of the worlds largest code repositories. Imagine a marketplace of software that people have made, where everything available for free, as long as you take into account the licenses given for each project.

Now go back again to the HTML5 Boilerplate website and now go to "[DOCS](https://github.com/h5bp/html5-boilerplate/blob/v8.0.0/dist/doc/TOC.md)".

It's GitHub again! This time you see the "Wiki" page of the project, it's the documentation that describes the project in great detail. The [HTML](https://github.com/h5bp/html5-boilerplate/blob/v8.0.0/dist/doc/html.md), [CSS](https://github.com/h5bp/html5-boilerplate/blob/v8.0.0/dist/doc/css.md), [JavaScript](https://github.com/h5bp/html5-boilerplate/blob/v8.0.0/dist/doc/js.md) and [Everything else](https://github.com/h5bp/html5-boilerplate/blob/v8.0.0/dist/doc/misc.md) included in the project.

I suggest diving in and exploring the various stuff they have going on in those pages. We're gonna look into some of it in more detail.

# Getting Started

Now about those 31 files.

The most important one being the "index.html" file (obviously), so let's right-click and "Open with Code", you can do it either for that file only or the whole folder. I'd suggest opening the whole folder in Visual Studio Code, so you can get a better look at how it's all connected.

```html
<!doctype html>
<html class="no-js" lang="">
```

The beginning is basic, just as before we declare the HTML5 document type on line 1, but on line 2, as they explain it in [their wiki](https://github.com/h5bp/html5-boilerplate/blob/v8.0.0/dist/doc/html.md#the-no-js-class) - the class is used to easily apply styles for situations when the user has JavaScript disabled. This is not a common scenario, but it does happen. Disabling JavaScript when browsing the internet is safer, but also breaks a lot of pages, because they depend on JavaScript to be rendered properly. Then is the language of content, so add "en" in there, if your website is in english [or any other language](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).

# The Head

Now let's look into all the stuff they have in their `<head>` section.

```html
<head>
  <meta charset="utf-8">
  <title></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <meta property="og:title" content="">
  <meta property="og:type" content="">
  <meta property="og:url" content="">
  <meta property="og:image" content="">

  <link rel="manifest" href="site.webmanifest">
  <link rel="apple-touch-icon" href="icon.png">
  <!-- Place favicon.ico in the root directory -->

  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/main.css">

  <meta name="theme-color" content="#fafafa">
</head>
```

Starting the the meta tag:

```html
<meta charset="utf-8">
```

The charset attribute allows you to have special characters (like "ā") on your webpage and have them rendered properly.

```html
<title></title>
```

Then the title, which changes the text in the tab of the current page.

```html
<meta name="description" content="">
```

Description is what shows up in search results.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Viewport, as we saw before in [Finishing the Blog Layout Example](https://itsprogramming.com/finishing-blog-layout-example.html) post, the viewport meta element allows for responsivity to work correctly.

```html
<meta property="og:title" content="">
<meta property="og:type" content="">
<meta property="og:url" content="">
<meta property="og:image" content="">
```

Then we have a big block of "og:" properties. That stands for "OpenGraph", which is used to generate details about yoru site when it's shared online, like Facebook, Twitter, etc. For this to work though, you need to deploy your website somewhere, it won't generate anything if you paste your local file link on Facebook. 

```html
<link rel="manifest" href="site.webmanifest">
```

The Manifest is for when your app is pinned on device home screens. Ever pinned a website on your mobile home screen? No? Me neither. 

```html
<link rel="apple-touch-icon" href="icon.png">
<!-- Place favicon.ico in the root directory -->
```

Apple-touch-icon and the comment about a "favicon.ico" is about your websites Fav Icon, or the icon that shows up in the tab up top in your browser, or when the site is bookmarked.

We will go into creating/generating fav icons in another post.

```html
<link rel="stylesheet" href="css/normalize.css">
<link rel="stylesheet" href="css/main.css">
```

Then we have two stylesheets:

* [Normalize.css](https://github.com/h5bp/html5-boilerplate/blob/v8.0.0/dist/doc/css.md#normalizecss) is used to reset defaults and have websites rendered properly.

* [Main.css](https://github.com/h5bp/html5-boilerplate/blob/v8.0.0/dist/doc/css.md#maincss) is the main file that they have used to store lots of base CSS styles, that complement Normalize.css

The first thought you might have is to just start adding stuff at the bottom of Main.css, but I'd suggest creating a new file which will only hold your changes and link it after "Main.css" in the index.html. Then updating will be easier and faster.

Curious about updates that they're working on? Check their [GitHub Commit page](https://github.com/h5bp/html5-boilerplate/commits/v8.0.0). You can see who did what, when and what discussion followed, atleast in written form.

> What's a "Commit"?

Commits are updates that each developer "pushes" into the main project. We will talk about this and version control soon.

```html
<meta name="theme-color" content="#fafafa">
```

Then, lastly the "theme-color" property allows you to further personalize, for example - [how Chrome customizes the address bar on an Android mobile device](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color).

# The Body

The `<p>` element aside, we have 4 `<script>` elements:

```html
<script src="js/vendor/modernizr-3.11.2.min.js"></script>
```

The Modernizr script imports allow older browsers to handle your website if they don't support some functionality. Also called a polyfill.

```html
<script src="js/plugins.js"></script>
```

Then you have a "plugins.js" import, which prevents console errors on browsers that don't have one and a place to put other 3rd party libraries/plugins in. It's not mandatory though. There are better ways to import plugins.

```html
<script src="js/main.js"></script>
```

Then you have a "main.js" file, which is empty, but already linked in your index.html so you can start adding in JavaScript immediately.

```html
<!-- Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
<script>
    window.ga = function () { ga.q.push(arguments) }; ga.q = []; ga.l = +new Date;
    ga('create', 'UA-XXXXX-Y', 'auto'); ga('set', 'anonymizeIp', true); ga('set', 'transport', 'beacon'); ga('send', 'pageview')
</script>
```

The last one seems like an alien artifact at first, but really, it's just a single Google Analytics plugin, about which we'll go into more detail in a separate post. If it scares you, delete it. It's not mandatory.

# Conclusion

That's it. A great starting point for many web projects. Be sure to explore far and wide as to what each single thing means, to be on top of your frontend game. At first it takes up a lot of time, but you only have to do it once and then just keep updated.