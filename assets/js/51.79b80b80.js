(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{485:function(e,t,s){"use strict";s.r(t);var a=s(27),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"week-13-advanced-fetch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#week-13-advanced-fetch"}},[e._v("#")]),e._v(" Week 13 - Advanced Fetch")]),e._v(" "),s("h2",{attrs:{id:"fetch-headers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fetch-headers"}},[e._v("#")]),e._v(" Fetch Headers")]),e._v(" "),s("p",[e._v("When you use the "),s("code",[e._v("fetch()")]),e._v(" method you are making an "),s("code",[e._v("HTTP Request")]),e._v(". Every request and response is made up of Headers and a "),s("code",[e._v("Body")]),e._v(". The "),s("code",[e._v("Body")]),e._v(" is the container for files being sent to the Server or the file that will be loaded and displayed in the browser.")]),e._v(" "),s("p",[e._v("The headers are a list of name-value pairs that represent settings and other information about the "),s("code",[e._v("Request")]),e._v(" | "),s("code",[e._v("Response")]),e._v("or data that is related.")]),e._v(" "),s("p",[e._v("When making a "),s("code",[e._v("fetch")]),e._v(" call we can provide a "),s("code",[e._v("Request")]),e._v(" object instead of just a "),s("code",[e._v("URL")]),e._v(". The "),s("code",[e._v("Request")]),e._v(" method takes a "),s("code",[e._v("URL")]),e._v(" as its first parameter, then an options object as the second.")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" h "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Headers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" req "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  method"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'POST'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  headers"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[e._v("The "),s("code",[e._v("headers")]),e._v(" property in the Request object is where we put our headers which will be sent with our fetch Request.")]),e._v(" "),s("YouTube",{attrs:{title:"Fetch with Request and Headers",url:"https://www.youtube.com/embed/YJ7ZgGnhN5k"}}),e._v(" "),s("p",[e._v("The QueryString is sent as a header. Cookies are also sent as a header.")]),e._v(" "),s("p",[e._v("All the "),s("code",[e._v("CORS")]),e._v(" values are sent as headers too.")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN Headers Object reference"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"request-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-object"}},[e._v("#")]),e._v(" Request Object")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("Request")]),e._v(" object has many properties. Many have default values and some are useful only under special circumstances. The Request object contains everything that is sent from the browser to the server.")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Request/Request",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN Request Object reference"),s("OutboundLink")],1)]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("method")]),e._v(": The request method, e.g., "),s("code",[e._v("GET")]),e._v(", "),s("code",[e._v("POST")]),e._v(", "),s("code",[e._v("OPTIONS")]),e._v(", "),s("code",[e._v("PUT")]),e._v(", "),s("code",[e._v("PATCH")]),e._v(", "),s("code",[e._v("DELETE")]),e._v(", "),s("code",[e._v("HEAD")]),e._v(". The default is "),s("code",[e._v("GET")]),e._v(".")]),e._v(" "),s("li",[s("strong",[e._v("headers")]),e._v(": Any headers you want to add to your request, contained within a "),s("code",[e._v("Headers")]),e._v(" object or an object literal with ByteString values.")]),e._v(" "),s("li",[s("strong",[e._v("body")]),e._v(": Any "),s("code",[e._v("body")]),e._v(" that you want to add to your request: this can be a "),s("code",[e._v("Blob")]),e._v(", "),s("code",[e._v("BufferSource")]),e._v(", "),s("code",[e._v("FormData")]),e._v(", "),s("code",[e._v("URLSearchParams")]),e._v(", "),s("code",[e._v("USVString")]),e._v(", or "),s("code",[e._v("ReadableStream")]),e._v(" object. Note that a request using the "),s("code",[e._v("GET")]),e._v(" or "),s("code",[e._v("HEAD")]),e._v(" method cannot have a body.")]),e._v(" "),s("li",[s("strong",[e._v("mode")]),e._v(": The mode you want to use for the request, e.g., "),s("code",[e._v("cors")]),e._v(", "),s("code",[e._v("no-cors")]),e._v(", "),s("code",[e._v("same-origin")]),e._v(", or "),s("code",[e._v("navigate")]),e._v(". The default is "),s("code",[e._v("cors")]),e._v(".")]),e._v(" "),s("li",[s("strong",[e._v("credentials")]),e._v(": The request credentials you want to use for the - request: "),s("code",[e._v("omit")]),e._v(", "),s("code",[e._v("same-origin")]),e._v(", or "),s("code",[e._v("include")]),e._v(". The default is "),s("code",[e._v("same-origin")]),e._v(".")]),e._v(" "),s("li",[s("strong",[e._v("cache")]),e._v(": The cache mode you want to use for the request.")]),e._v(" "),s("li",[s("strong",[e._v("redirect")]),e._v(": The redirect mode to use: "),s("code",[e._v("follow")]),e._v(", "),s("code",[e._v("error")]),e._v(", or "),s("code",[e._v("manual")]),e._v(". The default is "),s("code",[e._v("follow")]),e._v(".")]),e._v(" "),s("li",[s("strong",[e._v("referrer")]),e._v(": A USVString specifying no-referrer, client, or a "),s("code",[e._v("URL")]),e._v(". The default is about:client.")]),e._v(" "),s("li",[s("strong",[e._v("integrity")]),e._v(": Contains the subresource integrity value of the request (e.g., sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=).")])]),e._v(" "),s("h2",{attrs:{id:"response-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-object"}},[e._v("#")]),e._v(" Response Object")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("Response")]),e._v(" object is what returns to the browser after a "),s("code",[e._v("Request")]),e._v(" has been sent. It is also made up of a "),s("code",[e._v("Headers")]),e._v(" section and a Body section. The "),s("code",[e._v("Headers")]),e._v(" are similar to the ones in a "),s("code",[e._v("Request")]),e._v(" but the values are created by the Server.")]),e._v(" "),s("p",[e._v("In the "),s("strong",[e._v("Network")]),e._v(" Tab in the browser Developer Tools we can see all the "),s("code",[e._v("Requests")]),e._v(", "),s("code",[e._v("Responses")]),e._v(", and if we select a request, the "),s("code",[e._v("Headers")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"body-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#body-object"}},[e._v("#")]),e._v(" Body Object")]),e._v(" "),s("p",[e._v("The Body is the actual file or files being sent between the browser and the server. Both Requests and Responses can have a Body object inside them.")]),e._v(" "),s("p",[e._v("The Body object has the "),s("code",[e._v(".json()")]),e._v(", "),s("code",[e._v(".text()")]),e._v(", and "),s("code",[e._v("blob()")]),e._v(" methods for extracting the text, json data, or binary data from the body. These methods, in the body object, are available to the Request and the Response objects, which is why the fetch response in the first "),s("code",[e._v("then()")]),e._v(" method's function can call "),s("code",[e._v("response.json()")]),e._v(".")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Body",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN Body reference"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"transition-events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transition-events"}},[e._v("#")]),e._v(" Transition Events")]),e._v(" "),s("p",[e._v("There will be times when you want to use a CSS transition on your webpage to create a visual effect, but you want to run some JavaScript only after the transition is complete. This is where the "),s("code",[e._v("transitionend")]),e._v(" event can be useful.")]),e._v(" "),s("p",[e._v("As long as your transitions are simple, and not greatly staggered, then you will be able to use this technique.")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("let")]),e._v(" sidebar "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'sidebar'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nsidebar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'transitionend'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("ev")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//this runs when a CSS transition on #sidebar is over")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("YouTube",{attrs:{title:"transitionend and animationend",url:"https://www.youtube.com/embed/Xsl1xA1HWic"}}),e._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontransitionend",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN transitionend event reference"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"web-animations-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-animations-api"}},[e._v("#")]),e._v(" Web Animations API")]),e._v(" "),s("p",[e._v("The following short video talks about Web Animation gotchas and how the newer Web Animations API helps to solve some of these issues.")]),e._v(" "),s("YouTube",{attrs:{title:"HTTP 203 animation gotchas",url:"https://youtube.com/embed/FWVZcN41ta"}}),e._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web Animations API MDN reference"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"requestanimationframe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requestanimationframe"}},[e._v("#")]),e._v(" RequestAnimationFrame")]),e._v(" "),s("p",[e._v("When you want to have some JavaScript run on a frequent interval but you want the interval to be tied closely to the performance of the browser and run at the most optimal times that can take advantage of available resources, then you should consider using "),s("code",[e._v("RequestAnimationFrame")]),e._v(" instead of "),s("code",[e._v("setInterval")]),e._v(".")]),e._v(" "),s("YouTube",{attrs:{title:"Hidden world of RequestAnimationFrame",url:"https://www.youtube.com/embed/zBRqnSiq_VM"}})],1)}),[],!1,null,null,null);t.default=n.exports}}]);