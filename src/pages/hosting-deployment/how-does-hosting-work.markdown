---
layout: post
title:  "How does Hosting Work?"
date:   2020-05-06
categories: [Hosting & Deployment]
tags: [programming, html, basics, javascript, deployment]
index: 0
---

By now you've probably got your own little designs going, you have some JavaScript doing cool stuff, CSS doing cool stuff. You'd probably thought once or twice about - how could I share it? How could I show someone what my skill level is? Or perhaps you have already helped someone fix up their site and you'd like to add it to your portfolio. Time to talk about hosting.

# What is Hosting?

Websites are essentially documents, as you've seen by now. They're files, that your browser understands and can work with. Public websites are simply the same files, but on a folder on a server somewhere, allowing people access to this folder if you have the address (URL) that the server is configured to "serve" them for.

A quick, simple breakdown of what happens when you enter a URL into your browser and press "Enter":

##### 1. The browser sends out a message (request) with the URL (Uniform Resource Locator) to a DNS server:
>"I need to access 'https://example.com'"

##### 2. DNS server replies with an address:
>"Ok, that belongs to 12.34.56.78, talk to them"

##### 3. The browser sends out a message with the URL to a DNS server:
>"I need to access '12.34.56.78'"

##### 4. Server with the files on it says:
>"Ok, here you go"

and sends you all the resources (remember, the "Sources" tab in the dev tools window?)
##### 5. Your browser reads the resources and (usually) gives you the "index.html" 

That's it. This loop happens every time you click a link or enter a URL in the address bar.

[Learn more in the "How the Web Works" section of MDN](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works).

## What are Domains?

So you saw the switch the DNS server does, why do we have that? Simply because we wanted remember them by their name, so they could be nicely displayed on billboards, telephone ads and so on. 

## How to get your own?

Even though most obvious domains are taken already, it doesn't cost much to rent out a domain. My personal suggestion would be to turn to [NameCheap](https://namecheap.com), been using their services for years and no complaints at all!

## What's next?

You found your domain, bought a subscription - now what? 

Now you have to find a server to put your files on, aka - hosting.

I can suggest my personal favorite - [SiteGround](https://www.siteground.com/web-hosting.htm) their customer support is responsive, no uptime problems, no complaints whatsoever.

## Configuring your domain

In the example with the DNS server, notice that the domain does the address switch. That means you start the configuration there. 

[Here's a guide to connecting your domain to SiteGrounds servers](https://www.siteground.com/kb/point-website-domain-siteground/).

# What is Deployment?

Deployment means - to place your files on the server. Whether it's the first time or you're already deploying updates to your website, there are many ways to get your files on a server:

**Note:**

The deployment experience may vary between hosting companies. I will explain the general ideas and offer the recommended tools, but to understand how it's done for your setup, I'd suggest looking for tips that they might have already posted online or refer to their customer support.

## FTP - File Transfer Protocol

The easiest way to get your files on a server is to literally just copy them over with a what's called an "FTP Client". I can suggest using [FileZilla](https://filezilla-project.org/) which is a very easy to use program. Don't be deterred by the old-school looking website, the software is free! 

You can see a glimpse of the current UI [in this post "FileZilla is the best free FTP client for Windows computers"](https://www.thewindowsclub.com/filezilla-ftp-client-for-windows).

Once you install it, you will have to go in the settings/control panel in your hosting account, then create credentials (a profile) so that you can authenticate to your server from your home computer, via the FTP client you've installed.

Then, obviously go to your FTP client and log in.

If succesful, you should see your local folder on the left and the server files on the right. So, then just find the correct folder - most likely named "public_html" to my experience and copy the files over! 

Refresh your website and you should see your "index.html" now get served to anyone who visits your domain!

**Note:**

I will provide more ways, as I add posts surrounding the next topics, so that you can get the context correctly. 

Until then, I will just leave these links here:

[Website Deployment: Let Us Count The Ways!](https://css-tricks.com/deployment/)

[Publishing your website (MDN)](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Publishing_your_website)