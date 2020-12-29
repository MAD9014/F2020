(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{541:function(e,t,o){"use strict";o.r(t);var a=o(27),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"week-9-promises-geolocation-prototypes-timers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#week-9-promises-geolocation-prototypes-timers"}},[e._v("#")]),e._v(" Week 9 - Promises, Geolocation, Prototypes & Timers")]),e._v(" "),o("h2",{attrs:{id:"javascript-is-a-prototype-based-language"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#javascript-is-a-prototype-based-language"}},[e._v("#")]),e._v(" JavaScript is a Prototype Based Language")]),e._v(" "),o("p",[e._v("You will hear a lot about "),o("code",[e._v("prototype")]),e._v(" and "),o("code",[e._v("class")]),e._v(" over the next few semesters. They are two different approaches to designing and architect software. The problem is that in your early days of programming they can seem like almost the same thing.")]),e._v(" "),o("p",[e._v("We will try to help you understand the differences here in simple practical terms that will let you write better JavaScript with fewer unexpected errors.")]),e._v(" "),o("p",[e._v("A "),o("code",[e._v("Class")]),e._v(" is a blueprint for building objects. It is not an object itself, just the plans for building a certain kind of object. Classes inherit properties and methods from parent classes. When you create ("),o("code",[e._v("instantiate")]),e._v(") an object from a class, the object will be given copies all the properties and methods from it's class blueprint as well as copies of all the properties and methods from all the ancestor parent classes. So, when you call an Object's method, the method actually exists inside the Object.")]),e._v(" "),o("p",[e._v("A "),o("code",[e._v("prototype")]),e._v(" is an example Object. It is an Object. Think of it as the first one built. In JavaScript, when we create an Object a constructor function is used to build the object. That function has a "),o("code",[e._v("prototype")]),e._v(" object. We can put any methods that we want to share with all the objects built with that constructor into that prototype object. We can still link our objects to parent ones but we don't copy the methods, instead, we just link to the parent's prototype. There is a chain of prototype type objects. When we create ("),o("code",[e._v("instantiate")]),e._v(") our Object, it doesn't need copies of all the methods and parent methods. If we call an Object's method and the method does not exist inside our Object, then JavaScript will look up the prototype chain for the method and delegate (borrow) the method to run.")]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/modules/week9/proto.html"}},[e._v("Learn more about Prototype")])],1),e._v(" "),o("h2",{attrs:{id:"asynchronous-vs-synchronous"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#asynchronous-vs-synchronous"}},[e._v("#")]),e._v(" Asynchronous vs Synchronous")]),e._v(" "),o("p",[e._v("JavaScript has a mechanism known as the event loop. When you pass a list of commands to the event loop, it will keep running each of those commands in order until it gets to the end of your list. This list is known as the main stack. JavaScript keeps trying to run commands as long as there is something on the main stack.")]),e._v(" "),o("p",[e._v("However, sometimes there is a command that would stop the event loop from getting to the next command. It gets blocked from going to the next command in the stack. These types of commands are things that take a long time to complete, like talking to a database, or the file system, or a network request for a file, or a timer that needs to wait before running.")]),e._v(" "),o("p",[e._v("There are specific tasks that are going to take too long and they get put into a secondary area so they can wait for their result. These tasks are known as asynchronous.")]),e._v(" "),o("p",[e._v("If the code stays on the main stack and insists on being run before the event loop moves on to the next item then it is called synchronous.")]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/modules/week9/synch.html"}},[e._v("Learn more about asynchronous")])],1),e._v(" "),o("h2",{attrs:{id:"timers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#timers"}},[e._v("#")]),e._v(" Timers")]),e._v(" "),o("p",[e._v("If you want to do a task repeatedly and as quickly as possible then you use some type of loop. However, if you want to repeatedly do something with a delay between each task or you want to do something once after some delay, then you want to use the "),o("code",[e._v("setTimeout")]),e._v(" or "),o("code",[e._v("setInterval")]),e._v(" methods.")]),e._v(" "),o("p",[e._v("Timers are an example of an Asynchronous task. They call a function at sometime in the future, not as part of the current execution stack.")]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/modules/week9/timers.html"}},[e._v("Learn about setTimeout and setInterval")])],1),e._v(" "),o("h2",{attrs:{id:"promises"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#promises"}},[e._v("#")]),e._v(" Promises")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("Fetch")]),e._v(" API, which we start next week, is actually built on top of another technology that became official with ES6 in 2015 - "),o("code",[e._v("Promises")]),e._v(".")]),e._v(" "),o("p",[e._v("Promises did for asynchronous programming, what fetch did for AJAX.")]),e._v(" "),o("p",[e._v("They are an alternative to callback functions.")]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/modules/week9/promise.html"}},[e._v("Learn about Promises")])],1),e._v(" "),o("h2",{attrs:{id:"async-await"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#async-await"}},[e._v("#")]),e._v(" Async - Await")]),e._v(" "),o("p",[e._v("As part of ES6, there were two new keywords "),o("code",[e._v("async")]),e._v(" and "),o("code",[e._v("await")]),e._v(" that allowed us to tell JavaScript that we were calling a method, which we expected to be an asychronous one, and have our function wait for the response in a synchronous way. Effectively it wraps the command inside a "),o("code",[e._v("Promise")]),e._v(".")]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/modules/week9/async.html"}},[e._v("Learn more about async and await")])],1),e._v(" "),o("h2",{attrs:{id:"html5-geolocation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#html5-geolocation"}},[e._v("#")]),e._v(" HTML5 Geolocation")]),e._v(" "),o("p",[e._v("On of the APIs added as part of the update to HTML5 was the geolocation API. This let developers determine the latitude and longitude of a device based on either an actual GPS coordinate detection, a cell tower triangulation, or position estimation through wi-fi and network location.")]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/modules/week9/geolocation.html"}},[e._v("Learn more about Geolocation")])],1),e._v(" "),o("h2",{attrs:{id:"custom-sorts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#custom-sorts"}},[e._v("#")]),e._v(" Custom Sorts")]),e._v(" "),o("p",[e._v("Here is a review on how to move beyond just the built-in string sort method available on the Array object? Want to be able to do numeric sorts or sort objects?")]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/modules/week9/custom.html"}},[e._v("Learn more about doing custom sorts on Arrays")])],1),e._v(" "),o("h2",{attrs:{id:"todo"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[e._v("#")]),e._v(" TODO")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TODO Before next week")]),e._v(" "),o("ul",[o("li",[e._v("If you have not read all these notes and watched the videos from this week, do that first.")]),e._v(" "),o("li",[e._v("Finish reading the notes for week 9 and watch all the videos in the notes for week 10.")]),e._v(" "),o("li",[o("code",[e._v("Hybrid 9")]),e._v(" due Monday this week.")]),e._v(" "),o("li",[e._v("Finish and submit the exercises "),o("code",[e._v("Exercise 15 - Create Elements")]),e._v(" and "),o("code",[e._v("Exercise 16 - Modify DOM")]),e._v(" before 5pm on this Tuesday.")]),e._v(" "),o("li",[e._v("Finish and submit "),o("code",[e._v("Hybrid 10")]),e._v(" by next Monday.")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);