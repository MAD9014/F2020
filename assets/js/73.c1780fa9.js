(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{524:function(e,t,a){"use strict";a.r(t);var n=a(27),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"week-5-dom-and-namespaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#week-5-dom-and-namespaces"}},[e._v("#")]),e._v(" Week 5 - DOM and Namespaces")]),e._v(" "),a("h2",{attrs:{id:"running-javascript-in-the-browser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-javascript-in-the-browser"}},[e._v("#")]),e._v(" Running JavaScript in the Browser")]),e._v(" "),a("p",[e._v("You can attach one or more JavaScript files to your your webpage by using a "),a("code",[e._v("<script>")]),e._v(" tag.")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/modules/week5/script.html"}},[e._v("Learn How")])],1),e._v(" "),a("h2",{attrs:{id:"document-object-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#document-object-model"}},[e._v("#")]),e._v(" Document Object Model")]),e._v(" "),a("p",[e._v("When the browser reads an HTML file it creates an Object model representing all the content on the page. It builds a tree structure that helps it to know which elements are nested inside each other, which elements are parents and which are children.")]),e._v(" "),a("p",[e._v("This is a visual representation of how a browser sees the page. You can think of each indent as the start of a new branch in the DOM tree. Inside the "),a("code",[e._v("html")]),e._v(" object, there are two children - "),a("code",[e._v("head")]),e._v(" and "),a("code",[e._v("body")]),e._v(". Inside the head are two more children - "),a("code",[e._v("title")]),e._v(" and "),a("code",[e._v("link")]),e._v(". title has a child, which is "),a("code",[e._v("#text")]),e._v(". The "),a("code",[e._v("link")]),e._v(" element has no children. Inside "),a("code",[e._v("body")]),e._v(" > "),a("code",[e._v("header")]),e._v(" > "),a("code",[e._v("h1")]),e._v(" there are two children - "),a("code",[e._v("img")]),e._v(" and "),a("code",[e._v("#text")]),e._v(". The "),a("code",[e._v("img")]),e._v(" and the "),a("code",[e._v("#text")]),e._v(" are siblings.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("doctype\nhtml\n  head\n    title\n      #text\n    link\n  body\n    header\n      h1\n        img\n        #text\n    nav\n      a\n        #text\n      a\n        #text\n      a\n        #text\n    main\n      h2\n        #text\n      p\n        #text\n    footer\n      p\n        #text\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br")])]),a("p",[e._v("You need to be able to visualize every page in this manner. Understand when you are searching for things or altering things that you will be working with parents, children, and siblings.")]),e._v(" "),a("h3",{attrs:{id:"nodes-and-elements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodes-and-elements"}},[e._v("#")]),e._v(" Nodes and Elements")]),e._v(" "),a("p",[e._v("Each one of the things listed above, in the DOM diagram, is a "),a("code",[e._v("Node")]),e._v(". There are several kinds of types of nodes, including "),a("code",[e._v("ElementNode")]),e._v(", "),a("code",[e._v("TextNode")]),e._v(", "),a("code",[e._v("DocumentFragement")]),e._v(", and "),a("code",[e._v("Comment")]),e._v(". There are others but these are, by far, the most common.")]),e._v(" "),a("p",[e._v("There are node properties and methods which work on all the types, some that work only on Element nodes, and some that work only on Text nodes.")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/modules/week5/dom.html"}},[e._v("More about DOM and Nodes")])],1),e._v(" "),a("h2",{attrs:{id:"queryselector-queryselectorall-and-getelementbyid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#queryselector-queryselectorall-and-getelementbyid"}},[e._v("#")]),e._v(" querySelector, querySelectorAll, and getElementById")]),e._v(" "),a("p",[e._v("The two methods we use the most to find elements on the page are "),a("code",[e._v("document.querySelector")]),e._v(" and "),a("code",[e._v("document.querySelectorAll")]),e._v(". The difference between them is that "),a("code",[e._v("querySelector")]),e._v(" finds the first match starting at the top of the page and "),a("code",[e._v("querySelectorAll")]),e._v(" finds ALL the matches.")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/modules/week5/query.html"}},[e._v("Learn more about querySelector")])],1),e._v(" "),a("h2",{attrs:{id:"creating-changing-and-removing-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-changing-and-removing-content"}},[e._v("#")]),e._v(" Creating, Changing, and Removing Content")]),e._v(" "),a("p",[e._v("Manipulating HTML can be done quite easily once you understand the parent-child-sibling relationship between Nodes and the difference between Element nodes and Text nodes.")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/modules/week5/append.html"}},[e._v("Learn about altering HTML with JS")])],1),e._v(" "),a("h2",{attrs:{id:"namespacing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#namespacing"}},[e._v("#")]),e._v(" Namespacing")]),e._v(" "),a("p",[e._v("Namespacing is how we protect our code against naming conflicts with other peoples scripts. Anyone who builds an HTML file, can add "),a("code",[e._v("<script>")]),e._v(" tags that point to any JavaScript file which is publicly available online.")]),e._v(" "),a("p",[e._v("That means that your JavaScript file and the JavaScript files belonging to 10 of your friends can all be loaded and running on the same page.")]),e._v(" "),a("p",[e._v("With 100 lines of script in each file, there is a decent chance that two of you could have created a global variable with the same name. This means that the second one to load will overwrite the second one OR if you used "),a("code",[e._v("const")]),e._v(" then an error will stop all the scripts from running.")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/modules/week5/namespace.html"}},[e._v("Solve this problem with Namespacing")])],1),e._v(" "),a("h2",{attrs:{id:"live-preview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#live-preview"}},[e._v("#")]),e._v(" Live Preview")]),e._v(" "),a("p",[e._v("Once you start testing things in the browser, you will want to be able to get a live preview, meaning that every time you save a change to your files the browser will refresh itself.")]),e._v(" "),a("p",[e._v('There is an extension for VSCode called "Live Server" by Ritwick Dey. Currently, version 5.6.1. You should add this extension to VSCode.')]),e._v(" "),a("p",[e._v("If you want to add HTTPS support to the live preview, here is how:")]),e._v(" "),a("YouTube",{attrs:{title:"https support for VSCode Live Server",url:"https://www.youtube.com/embed/v4jgr0ppw8Q"}}),e._v(" "),a("p",[e._v("This extension is NOT required now. Save this for future reference.")]),e._v(" "),a("h2",{attrs:{id:"todo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[e._v("#")]),e._v(" TODO")]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("TODO Before next week")]),e._v(" "),a("ul",[a("li",[e._v("If you have not read all these notes and watched the videos from this week, do that first.")]),e._v(" "),a("li",[e._v("Finish and submit the exercises "),a("code",[e._v("Exercise 7- Arrays")]),e._v(" and "),a("code",[e._v("Exercise 8 - Loops")]),e._v(" before 5pm on this Tuesday.\n"),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/assignments/exer.html"}},[e._v("Exercises page")])],1)])]),e._v(" "),a("li",[e._v("Complete "),a("strong",[e._v("Hybrid 7 - Git Clone")]),e._v(" before next Monday at 5pm.\n"),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/assignments/hybrid.html"}},[e._v("Hybrid page")])],1)])]),e._v(" "),a("li",[e._v("Read ahead the notes for "),a("RouterLink",{attrs:{to:"/modules/week6/"}},[e._v("week 6")]),e._v(" to prepare for class.")],1)])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);