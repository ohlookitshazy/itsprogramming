---
layout: post
title:  "Metadata"
date:   2020-12-10
categories: [Advanced HTML]
tags: [the web, programming, basics, html]
index: 4
---

The project layout should now start to make sense. We have [a bunch of files](https://github.com/h5bp/html5-boilerplate/blob/v8.0.0/dist/doc/misc.md), which I call "metadata" in the main folder. They usually describe stuff for servers or other software that developers work with. Let's go over them.

# .gitignore and .gitattributes

These files define stuff for version control systems, in our case for "Git". Version Control systems allow you to, well, control versions of your software. Systems like Git make it very easy to have multiple versions of the same software to exist and not interrupt each other.

We'll go into version control a lot more in future posts.

# .editorconfig

Is intended to provide guidelines on coding styles for developers that will work with this project. Code editors and IDEs (Independent Development Environments, or as I call them "Fancy Code Editors") can read these files and then highlight any incosistencies that developers might be causing.

# .htaccess 

Is an access file, that as the team behind HTML5 BP say:

> The .htaccess file is mostly used for:
* Rewriting URLs
* Controlling cache
* Authentication
* Server-side includes
* Redirects
* Gzipping

They have [a lot more info](https://github.com/h5bp/server-configs-apache) in the docs too.

This one only concerns you if you use an Apache Server to serve your website though.

One interesting part in it, is the 404 response we looked at in the previous post.

> ErrorDocument 404 /404.html

This would let the server know which file/document/page to give to the user in case of this error.

# robots.txt

A very important file when dealing with the internet as a constantly evolving network of great and sometimes not too great software.

It's meant for the robots crawling through the internet, as a rule list that they should follow. Which pages they can crawl, which they can't and more detailed stuff like that.

Of course you might immediately think - Why should they care? 

Because otherwise it's considered illegal to crawl sites without taking into account the Terms of Agreement of the website, which is considered intellectual property, thus a product, that you agree to use in accordance with their Usage Policies and etc.

Same thing with Cookies, it's why they need your consent to store info on your device that helps with various things online.

# humans.txt

This is for humans to read, if you're having problems with Captchas, probably this is not for you.

Read more about it [here](http://humanstxt.org/).

# browserconfig.xml

HTML5 BP team say that this changes stuff for Windows 8.1 and Internet Explorer 11. Uh, ok? 

Honestly, haven't cared about a file like this in the last 5 years. Probably you won't too. There is [more info here](https://docs.microsoft.com/en-gb/previous-versions/windows/internet-explorer/ie-developer/platform-apis/dn320426(v=vs.85)), if you're curious.

# package.json

Cool, the last one!

A very important one, regardless of your skill level with JavaScript, this is a very important concept to learn, because it makes your life easier without much added effort.

```json
"name": " ",
  "version": "0.0.1",
  "description": "",
  "keywords": "",
  "license": "",
  "author": "",
```

If you open it up as it is by default, you will see some metadata fields, you can name your project, provide a description and etc. 

```json
"scripts": {
    "build": "parcel build index.html",
    "dev": "parcel index.html --open",
    "start": "npm run build && npm run dev",
    "test": "echo \"Error: no test specified\" && exit 1"
}
```
Then there's a "scripts" section, which gives you 4 rows of what seem to be commands?

Yep. 

These will allow you to do various things that we will get into another post. 

```json
"devDependencies": {
    "parcel-bundler": "^1.12.4"
}
```

What's this? What's a "parcel-bundler"? A simple google search [gave this](https://lmgtfy.app/?q=parcel-bundler).

Ok, so after scrolling down a bit, they say:

> Parcel takes all of your files and dependencies, transforms them, and merges them together into a smaller set of output files that can be used to run your code.

At the time of writing, I haven't use this particular tool. What it seems to do is it takes your project folder, merges and optimzies your files and outputs a set of files ready to be put on a server.

I might do a write up on using Parcel, but you can always go ahead and take a look at [their docs](https://parceljs.org/getting_started.html).

What I do want to highlight here is the way it was added to your project. 

Essentially package.json lists all of the 3rd party plugins/addons/libraries/packages you might want to add to your project. A lot of plugins are built on top of other plugins, so instead of having you spend hours to find all of the correct packages for all sub-packages, and sub-sub-packages, it only asks you to list what you need once. Then you can easily get everything you need by executing just one command. 

We will be doing that soon too.

# Conclusion

That's it! You are now ready to build great and structured web sites! Let curiosity guide you and remember, that the problems you face at the beginning of your journey are not just yours and neither were you the first to have them. 

So use google early and often! There's a reason that "googling" is a meme to put on your CV as a skill. Because [it's real](https://www.google.com/search?q=tips+for+google+as+a+developer&oq=tips+for+google+as+a+developer&aqs=chrome..69i57j33i22i29i30.4847j1j7&sourceid=chrome&ie=UTF-8).