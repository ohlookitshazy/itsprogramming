---
layout: post
title:  "Website Types"
date:   2020-12-03
categories: [The Web]
tags: [the web, programming, basics]
index: 6
---

Obviously given the massive strides in how technology has evolved, there are multiple types of websites out there. So let's overview the most used types and what they're usually used for.

The type we're creating currently is called **a static website**. Static, as in "not-changing", users can't change anything, there are no accounts, no registration, no dynamic content.

# Static Websites

Their minimalistic nature doesn't allow for advanced scenarios, like having users, having admins, having accounts, nothing that involves a database or serverside logic, it's just static documents written in HTML, CSS and JS (usually).

This doesn't mean the website is impractical, quite the opposite. All of the types have their pros and cons, for static sites, it's the lightweight nature that is the biggest bonus. 

* You don't have to manage content added by users of the site.
* No database or server logic means faster loading times.
* Older devices have a better chance of viewing your site properly.
* Security - no database, no serverside logic? No problem. Nothing to hack, unless the account that controls the domain and FTP account for files.

That makes it an ideal candidate for portfolio sites, landing pages, simple websites, temporary ad campaign sites and such.

Static Sites also have so called "generators" that allow you to set rules for generating static documents and manage content much more efficiently. I do not recommend using these, before you really feel comfortable with creating one manually. 

# Dynamic Websites

These involve atleast some serverside code living on the server, not just the usual web documents. They might also involve connections to databases, content management, user management, update management, performance and security audits.

Ok, that's a lot. Luckily you can choose what functionality your website will contain, so you can choose to avoid any that don't make sense to you. 

**Tip:** 

What you create, you also will maintain, so choose wisely what you REALLY need and always think of the expiry date or atleast the refresh date, when you are going to take a good look at what you have, to throw the redundant stuff out. 


You can see pretty obviously that Dynamic Sites are a bigger responsibility, but also offer a greater payoff in terms of what you can deliver to your users. So before even taking the dynamic website road, understand whether there will be someone to manage it too. 

A plugin may become insecure and you have to act fast, or else a person (or a bot) could automatically hack your site. This can lead to **defacing** (replacement of content with whatever agenda they're trying to push), **content deletion** (imagine waking up one day with your user accounts and anything they've created - gone) or even worse - **sensitive info leaks** (imagine posting passwords of all of your users on Facebook, or even better - accidentally allowing to sell them on the dark web by the hacker).

# SPA(s)

SPA, for "Single Page Application" is another type. It's in it's own category, because it can be both - static or dynamic. Depends on how you build it. This is one of the newest types, which came about when web devs wanted to make their websites more "app-like". 

So they resorted to literally using one single .html file with massive amounts of JavaScript to change the content inside it. Not without it's own caveats, but a very powerful thing once you get the hang of it. It provides you not only the possibility of having realtime updates and having only specific parts of the page update (think fancy realtime stock dashboards), but also the posibility to convert these websites into mobile apps without much hassle (allegedly).

> What!? You mean if I now learn how to make SPAs, I can turn them into mobile apps? 🤯

yes. this is where we're at currently with technologies, ain't it inspiring? 😊

Building static SPAs doesn't make much sense (to me anyways), but it's doable. Dynamic SPAs, with a server in the background listening for any requests and a database to have a permanent storage of data, though, is where SPAs really shine.

**I do not recommend going into SPAs before you can confidently handle a regular dynamic site though.** UNLESS you are going to be a Frontend developer in your career, then the backend and databases shouldn't bother you too much. You should know the basics, but whatever the work specifics you will have, your work environment will probably educate you into using them anyways. 

# Further Reading

Of course summing the types in a single blog post is a futile effort, unless I want to make a one-paged book about everything, so here's a few links to give you more details on these (and other) types of websites you can build:

* [STATIC VS. DYNAMIC – WHICH WEBSITE IS BEST FOR YOU](https://vwm.com/blog/static-vs-dynamic-website-pros-cons/)
* [Static vs. dynamic websites explained for absolute beginners](https://jonpersson.co/blog/static-sites/)
* [Static vs Dynamic Website: What Is the Difference?](https://wpamelia.com/static-vs-dynamic-website/)
* [12 Popular Types of Websites You Can Create](https://www.hostgator.com/blog/popular-types-websites-create/)
* [Types of Websites (Examples)](https://websitesetup.org/types-of-websites-examples/)
* [What are the different types of websites?](https://www.expertmarket.co.uk/web-design/different-types-of-websites)