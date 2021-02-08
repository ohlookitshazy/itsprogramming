---
layout: post
title:  "Debugging JavaScript with Dev Tools"
date:   2020-04-30
categories: [Dev Tools]
tags: [dev tools, the-web, programming, basics]
index: 5
---

So far the browser dev tools seem to have tons of cool stuff that can be done, it really changes the way you view web pages, since you can now see and interpret the "behind the scenes" stuff. The real power actually is revealed when you are working with JavaScript.

# Debugging? What's that?

Debugging is the process of analyzing how something works. Usually "to debug", means to "remove bugs". Though you don't need any bugs, to debug code. It's just the way of analyzing values and data flow, as it executes.

With that being said, let's setup a basic project and do a simple debugging session (I will avoid a lot of HTML for brevity, I will also just write inline JavaScript for these basic examples):

```html
<body>
    <div id="myId"></div>

    <script>
        var div = document.getElementsById("myID");
    </script>
</body>
```

So here we just select the div by an id and store it in a variable. Let's change its content again!

```html
<body>
    <div id="myId"></div>

    <script>
        var div = document.getElementsById("myID");

        var text = "New content!";

        div.innerHTML = text;
    </script>
</body>
```

Hmm, nothing changed? Looks like we got some bugs in here, let's find and get rid of them.

So let's open the dev tools (F12). You might notice a small red circle has now appeared next to the "X" that closes the sidebar. Click it!

An additional window showed up below the CSS window, it's called "Console". The Console is an interactive window that displays a list of messages. In our case, it shows an error message:

> "Uncaught TypeError: document.getElementsById is not a function at ..."

So the browser says it doesn't understand what "document.getElementsById" is meant to be. Why?
In this case, it's because we are not targeting "ById" correctly. We have written ".getElement**s**", you cannot get multiple elements by id, so let's change that line to:

```html
<body>
    <div id="myId"></div>

    <script>
        var div = document.getElementById("myID");

        var text = "New content!";

        div.innerHTML = text;
    </script>
</body>
```

Now save the code, refresh the page and ... still nothing? If you take a look at the console window again, there's a different error message now:

> "Uncaught TypeError: Cannot set property 'innerHTML' of null at ..."

What is **null** ? Null is a data type, like numbers, booleans or strings. The only difference, it is a data type, that defines nothing. It's not quite empty, it is the nothingness. 

It's nothing, but it's also **very dangerous**. It can give [free stuff to people](https://www.radiox.co.uk/news/man-changes-name-null-free-rental-cars-hotels/). It can [destroy computer systems](https://www.bbc.com/future/article/20160325-the-names-that-break-computer-systems). It can [change lives](https://www.wired.com/2015/11/null/).

So what did we do wrong? If you look at the id that's targeted in the JavaScript, it's different from the actual elements id by one character. It's "myID" instead of "myId", this difference, although us humans can still read it, the computer can't. It will only accept precise values. So let's fix it.

```html
<body>
    <div id="myId"></div>

    <script>
        var div = document.getElementById("myId");

        var text = "New content!";

        div.innerHTML = text;
    </script>
</body>
```

Finally we can see our content.

# Logging Your Own Messages to the Console

What's better than receiving messages about what's going wrong? Messages that you send for yourself! You can log (aka write) messages by using the "console" object in JavaScript itself! Let's try it out:

```html
<body>
    <div id="myId"></div>

    <script>
        var div = document.getElementById("myId");

        var text = "New content!";

        console.log(text);

        div.innerHTML = text;
    </script>
</body>
```

Here we just pass the variable with the text into the function parentheses and surely enough, if you look at the console after a refresh, you should see the same content output to the console.

Let's add more code.

```html
<body>
    <div id="myId"></div>

    <script>
        var div = document.getElementById("myId");

        var text = "New content!";

        console.log(text);

        text = "New content and more!"

        div.innerHTML = text;
    </script>
</body>
```

Now notice how when you log something to console, it will output the value as it is, at that moment. Since code executes top-to-bottom, then to log the new value, you have to use the logging function after the values have been changed.

# Multiple Types of Console Logs

There are [many ways](https://developer.mozilla.org/en-US/docs/Web/API/console) your messages can be logged too! Let's look at a few:

```html
<body>
    <div id="myId"></div>

    <script>
        var div = document.getElementById("myId");

        var text = "New content!";

        console.error(text);
        console.log(text);
        console.info(text)
        console.trace(text);
        console.warn(text);

        div.innerHTML = text;
    </script>
</body>
```

These are the the basic ones. As you see, ".error()" outputs a red error message to highlight that something went wrong. ".log()" and ".info()" are pretty much the same, although I've seen ".log()" being used the most.

".trace()" is interesting, the documentation states: "Outputs a stack trace."

# What is a Stack Trace?

A stack trace, is a trace, from the stack (imagine pancakes) of functions (a stack of pancakes, where each pancake is a step in the stack and syrup is the value flowing through the stack).

When you have many functions calling each other and passing values, it's hard to understand sometimes when what is where and how it came to be.

The Stack Trace allows you to easily see the whole pattern, so let's add more code to have a more comprehensive stack trace:

```html
<body>
    <div id="myId"></div>

    <script>
        var div = document.getElementById("myId");

        var text = "New content";

        div.innerHTML = someFunction(text);

        function someFunction(text) {
            var result = someOtherFunction(text) + " and some other stuff";

            return result;
        }

        function anotherFunction(text){
            var anotherResult = someOtherFunction(text);

            return anotherResult;
        }

        function someOtherFunction(text) {
            var otherResult = text + " and some more stuff.";

            console.trace();

            return otherResult;
        }
    </script>
</body>
```

Ok, so we have some functions calling each other, but something seems off. Though the content is changed correctly, there's something that can be done to improve this code. So we threw in a "console.trace();" in the last function, to see where the variable "text" is coming from.

Then in the console we see, that "someOtherFunction" and "someFunction" was called. It is always displayed in the calling order, so in this case "someOtherFunction" was called by "someFunction". So the second function isn't even called, so we can remove it!


```html
<body>
    <div id="myId"></div>

    <script>
        var div = document.getElementById("myId");

        var text = "New content";

        div.innerHTML = someFunction(text);

        function someFunction(text) {
            var result = someOtherFunction(text) + " and some other stuff";

            return result;
        }

        function someOtherFunction(text) {
            var otherResult = text + " and some more stuff.";

            console.trace();

            return otherResult;
        }
    </script>
</body>
```

The code still works as intended and we removed redundant code! Great!

Also notice, that using stack trace you can also click on the lines of code, where the function call is made and the dev tools sidebar will take you to the exact line it's being called from! Very convenient, when you have hundreds of linked code files (and you will faster than you might imagine).

Additionally, as you go to a specific line of code in the sidebar, the "Sources" tab is being opened at the top of it. I usually interpret it as reSources, as just the files that are imported into the current page. 
