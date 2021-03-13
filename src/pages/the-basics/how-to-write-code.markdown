---
layout: post
title:  "How to Write Code?"
date:   2020-02-23
categories: [The Basics]
tags: [programming, general, basics, visual studio code]
index: 4
---

There are many different options when it comes down where to write your code. It can be as simple as writing it in your regular notepad, that comes with each Windows installation and you can use an IDE - Independent Development Environment, that means it has many different features to allow you to develop code in a professional environment, where code errors get highlighted and there are lot's of different ways to debug code.

For now, let's keep it simple. We won't use notepad though. 

We're going to use [Visual Studio Code](https://code.visualstudio.com/) to write code in this course. It's a free code editor developed by Microsoft, with a lot of advanced features and it's available on many platforms! One of my personal favorites.

So download it, install it and while installing, be sure to check both the *"Add "Open with Code"* action to file/directory Context menu" options, like so:

![Installation Checkboxes](./VSC_InstallationCheckboxes.png)

The first one is, of course, optional. The 2nd and 3rd will allow you to very easily open any folder or file with the right mouse button click, like so:

![Open With Code](./VSC_OpenWithCode.png)

The 4th will allow you to automatically open any code-related file with Visual Studio Code instantly. The 5th one, judging by the official documentation, will allow you to launch Visual Studio Code from the CLI, if you do not know what that is, don't worry. It probably does other things aswell and it doesn't hurt to add it to PATH.

# Running Visual Studio Code for the first time

![Visual Studio Code Home screen](./VSC_FirstTimeRunning.png)

If everything went successfuly then this is what you should see. Let's break down the layout.

![Visual Studio Code UI windows](./VSC_Layout_MajorBlocks.png)

Outlined in green you see the sidebar, this is where you will organize your project, choose files for editing, and much, much more. Currently, the file editing part is the important one.

Outlined in red is the main work area, this is where you will write code. Don't go too much into detail about what's in the newest "1.27" update just yet, it will be really confusing for starters. The main thing you should focus on is that there are tabs at the very top, just like you would see in any web browser nowadays.

Outlined in blue is the bottom bar, you will see information change here as you work on a project, nothing super important when you're starting out, just so you know there won't be any important buttons there for now.

So the sidebar and the main work area are the main places you will focus on.

# Bring in the code

Let's take a look what the check boxes we checked during the installation actually do for us. Close the currently open Visual Studio Code window for now. Go anywhere in your computer and create a new folder, name it whatever you want and open it. Then right click anywhere in the folder.

![Open With Code](./VSC_MyProjectBlankFolder.png)

What you see is called the context menu, within it you see "Open with Code", clicking this will automatically launch Visual Studio Code with this folder that you have just clicked the button in.

![Open With Code](./VSC_MyProjectVisualStudioCode.png)

You can confirm this by looking in the side bar, you will see the name of the folder, just under the "Open Editors" sub-menu. Open Editors is the same as the tabs that are currently open in the main work area. You can close the "Welcome" tab, so you see the above screen.

Now let's create our HTML elements again with Visual Studio Code. In the sidebar, right-click and select "New File" as in the image below. 

![Open With Code](./VSC_MyProjectVisualStudioCode2.png)

Then just write "index.html". The editor automatically sets the extension and after pressing "Enter" you should see this:

![Open With Code](./VSC_MyProjectVisualStudioCode3.png)

Now let's add the elements from the [previous post](/what-is-programming) and save the file.

```html
<h1>I am a heading.</h1>
<h2>I am a heading.</h2>
<h3>I am a heading.</h3>
<h4>I am a heading.</h4>
<h5>I am a heading.</h5>
<h6>I am a heading.</h6>
```

To see your code in action, you need to feed it to a web browser. Open your favorite one, then just simply drag the file from the project folder into the address bar (where you normally would write links in) and hit "Enter".

Now you should see your HTML being rendered in the browser, just like you saw in the previous post.

# What if I told you programmers hate grunt work?

Saving, tabbing, dragging and refreshing different pages will add up to a lot of wasted hours. **There is a better way**.

Visual Studio Code is awesome, because it has a wide range of plugins you can use. Let's install our first one - [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

Click the link and approve opening the link through Visual Studio Code and you should be taken to the plugin marketplace page for it. What it does, is simply provide realtime feedback for changes in your files. So each time you save a file, the server refreshes automatically. 

After it's installed, simply press "F1" and start typing "live" and you'll see all the different actions you can do, for now, select the one called - "Live Server: Open With Live Server". This should open a new browser window with your website already visible!

Try removing a few headings and saving the file, the browser should refresh to show your changes and saving you from the manual labor of refreshing yourself every time. Neat!

# JSFiddle.net

As you might've noticed, some examples are already rendered within the page, by using [JSFiddle.net](https://jsfiddle.net/), which is an awesome free service, which allows you to play in isolated mini "environments". Thus instead of screenshots I will attempt to provide more examples from there, so that you can see the full picture at any given moment and play around with it, without breaking anything serious.
