(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{467:function(e,t,s){"use strict";s.r(t);var r=s(27),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"cors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[e._v("#")]),e._v(" CORS")]),e._v(" "),s("p",[e._v("CORS stands for Cross-Origin Resource Sharing. It refers to the process by which the browser can make HTTP Requests to load an HTML file from one domain and then other things like images, fonts, stylesheets, and scripts from different domains.")]),e._v(" "),s("p",[e._v("If the browser is making the request based on what it read in an HTML or CSS file then this can be done freely.")]),e._v(" "),s("p",[e._v("If the cross-domain request is coming from some JavaScript code then there are restrictions in place.")]),e._v(" "),s("p",[e._v("JavaScript can use the Fetch API or XMLHttpRequest objects to make requests for resources like XML, JSON, text, images, stylesheets, fonts, videos, audio files, etc. However, we have to follow a restrictive list of rules to be able to make those requests.")]),e._v(" "),s("h2",{attrs:{id:"headers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#headers"}},[e._v("#")]),e._v(" Headers")]),e._v(" "),s("p",[e._v("When you configure the fetch( ) call with the Request and Headers objects to request a resource on a different server the only predefined headers that can be set are: "),s("code",[e._v("Accept")]),e._v(", "),s("code",[e._v("Content-Type")]),e._v(", "),s("code",[e._v("Accept-Language")]),e._v(", and "),s("code",[e._v("Content-Language")]),e._v(". No other headers can be altered for a CORS request. You can add your own custom headers like "),s("code",[e._v("Steve-Is-Awesome")]),e._v(" without impacting CORS.")]),e._v(" "),s("p",[s("code",[e._v("Accept")]),e._v(" tells the server what types of files you are willing to accept as a response. "),s("code",[e._v("Content-type")]),e._v(" tells the server what type of file you are sending. The only three values allowed for "),s("code",[e._v("Content-Type")]),e._v(" are "),s("code",[e._v("text/plain")]),e._v(", "),s("code",[e._v("multipart/form-data")]),e._v(", or "),s("code",[e._v("x-www-form-urlencoded")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mode"}},[e._v("#")]),e._v(" Mode")]),e._v(" "),s("p",[e._v("When using the Fetch API we can set the CORS mode for the request. Basically we are going to tell the server that we do or do not want to make a cross-domain request.")]),e._v(" "),s("p",[e._v("Inside our Request options we define the mode like this:")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" options "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  method"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'GET'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  mode"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'cors'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("The mode can be "),s("code",[e._v('"cors"')]),e._v(", "),s("code",[e._v('"same-origin"')]),e._v(", or "),s("code",[e._v('"no-cors"')]),e._v(". If we set it to "),s("code",[e._v('"cors"')]),e._v(" then we are telling the browser to look for the proper permissions to come back from the remote webserver telling us that CORS is allowed. If we set it to "),s("code",[e._v('"same-origin"')]),e._v(" then we are telling the browser that it should prevent the JavaScript from making calls to any domain except the one where the HTML came from. "),s("code",[e._v('"no-cors"')]),e._v(" tries to make an opaque attempt to get external sources but does not currently work within the global scope of the page.")]),e._v(" "),s("h2",{attrs:{id:"behind-the-scenes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#behind-the-scenes"}},[e._v("#")]),e._v(" Behind the Scenes")]),e._v(" "),s("p",[e._v("When you make a CORS AJAX call from your JavaScript code there are actually two requests being made. An initial request called a "),s("code",[e._v("pre-flight")]),e._v(" request gets sent from the browser to the server. This request includes a header providing the domain from which the request is being made.")]),e._v(" "),s("p",[e._v("For the communication between the server and the browser to finish properly, the server needs to respond to the initial preflight request with a Response that includes a header called "),s("code",[e._v("Access-Control-Allow-Origin")]),e._v(". The value for this header must match exactly your URL or be set to a wildcard.")]),e._v(" "),s("p",[e._v("With Apache as your webserver, we can create a settings file called "),s("code",[e._v(".htaccess")]),e._v(" and inside that file add this line:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('Header set Access-Control-Allow-Origin "*"\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("This will create the required header to allow for cross origin requests.")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v(".htaccess")]),e._v(" file must be in the folder or a parent folder for the resource being requested.")]),e._v(" "),s("h2",{attrs:{id:"php"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#php"}},[e._v("#")]),e._v(" PHP")]),e._v(" "),s("p",[e._v("If the resource you are requesting is beeing processed by the PHP program then you can add the following to the top of your PHP file.")]),e._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("header")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[e._v('"Access-Control-Allow-Origin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[e._v('"*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"what-gets-restricted"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-gets-restricted"}},[e._v("#")]),e._v(" What Gets Restricted")]),e._v(" "),s("p",[e._v("There are actually quite a few things that can get restricted when requesting resources over CORS. For our immediate purposes, it is important to note that a webpage from edumedia.ca making a request to darksky.net would not be allowed to use the JSON data. This happens because the HTML file and the JSON file are coming from different servers and the server providing the JSON is NOT setting that Access-Control-Allow-Origin header for us.")]),e._v(" "),s("p",[e._v("If you set the mode to "),s("code",[e._v('"same-origin"')]),e._v(" or "),s("code",[e._v('"no-cors"')]),e._v(" then the request would be entirely rejected.")]),e._v(" "),s("p",[e._v("If you set the mode to "),s("code",[e._v('"cors"')]),e._v(" then the request would be sent and the JSON data returned but we would not be allowed to use the data in our JavaScript.")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN CORS reference"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("YouTube",{attrs:{title:"Resolving fetch cors",url:"https://www.youtube.com/embed/zswi0cPMxsU"}}),e._v(" "),s("p",[s("RouterLink",{attrs:{to:"/modules/week10/"}},[e._v("Back to Week main page")])],1)],1)}),[],!1,null,null,null);t.default=a.exports}}]);