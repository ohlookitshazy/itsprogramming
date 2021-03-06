---
layout: post
title:  "Folder Structure"
date:   2020-12-10
categories: [Advanced HTML]
tags: [the web, programming, basics, html]
index: 1
---

Previously we took a look at the index.html file, now let's look at what else is in the .zip from the HTML5 Boilerplate project.

# Folders

We have 4 folders. "img" is for your images, "css" is for your .css files, "js" is for your .js files. This is a pretty obvious and a good way to separate your concerns even further, to keep the folder structure easy to maintain.

# What about "doc"?

Doc usually stands for documentation, so this is the local copy of their documentation on GitHub. If you drag the TOC.md (for "Table of Contents") file into your browser, you will see it readable, but in a specific format. The ".md" stands for "Markup Document", so this is [MarkDown](https://www.markdownguide.org/basic-syntax/) format. It's used very frequently for writing documentation, because you can easily write formatted documentation without any additional software.

If you're using Visual Studio Code, you can preview MarkDown files with their formatting intact via opening any .md file with Visual Studio Code, then pressing F1 and typing/selecting: "Markdown: Open Preview". 

You should then see it rendered, with headings, lists and links should be clickable too. Additionally you can keep it open to the side, for example to see it rendered instantly as you type.

Each post on this blog is in .md too, by the way, so it's not limited only to documentation. It's a popular format, you'll see it alot.

# Why is there a 404.html in the folder?

If you open the file in your browser, you'll see "Page Not Found". You might be wondering what is this about and probably you've seen it when you've ventured into the deep, dark corners of the internet. Or a poorly maintained website.

404 is an error code. Returned by the server you might be trying to reach, by trying to access a page. This means the server didn't find the page you're looking for. The file could be removed, renamed or moved somewhere else, but the link hasn't been updated.

Usually, websites have a dedicated page where to send the user if the requested page wasn't found. Instead of giving a blank page and no further instructions to the user, it simply usually says that the page wasn't found, and maybe gives you a search form to try and find what you were looking for again.

# So why 404?

It's an error code, meaning [one of the many codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) you can get when interacting with a server. 

You don't need to know all of them, or even most of them. You should know that they exist on a list and usually help you understand what the server is trying to say.

Most common ones are:

* 200 - OK
* 400 - Bad Request
* 404 - Not Found
* 500 - Internal Server Error

So each time you visit a webpage, the browser is receiving these in the background all of the time, for each resource pretty much. You can see those in the "Network" tab of the browser Dev Tools (usually accessible with F12).

Thus logically, HTML5BP decided to include a 404 page by default. Unless you're actually building a server at this point, it doesn't really matter, because when deployed locally, there is no automatic redirection to the 404 if a resource isn't found.





