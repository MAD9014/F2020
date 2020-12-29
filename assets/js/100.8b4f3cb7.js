(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{533:function(t,e,a){"use strict";a.r(e);var s=a(27),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"geolocation-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#geolocation-api"}},[t._v("#")]),t._v(" geolocation API")]),t._v(" "),a("p",[t._v("Geolocation in the browser runs through two methods")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("navigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("geolocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCurrentPosition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  successCallback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  failCallback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  options\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nnavigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("geolocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("watchPosition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("successCallback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" failCallback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("The two functions are the same except that "),a("code",[t._v("getCurrentPosition")]),t._v(" runs once and "),a("code",[t._v("watchPosition")]),t._v(" runs repeatedly. If you want to stop the "),a("code",[t._v("watchPosition")]),t._v(" method running then we call:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("navigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("geolocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearWatch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Both methods accept a success callback function and a failure callback function. The success function will be passed a position object. The failure callback will be passed a position error object. See the code below for examples.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Position",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN Position Object reference"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/PositionError",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN PositionError Object reference"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("The third parameter is the options object.")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  enableHighAccuracy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  maximumAge"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("iframe",{staticStyle:{width:"100%"},attrs:{src:"//codepen.io/mad-d/embed/mymOBy/?height=526&theme-id=0&default-tab=js,result&embed-version=2",width:"100%",height:"526",allowfullscreen:"allowfullscreen"}},[t._v(".")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://codepen.io/mad-d/pen/mymOBy",target:"_blank",rel:"noopener noreferrer"}},[t._v("Codepen Link"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN options object reference"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Geolocation",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN Geolocation reference"),a("OutboundLink")],1)]),t._v(" "),a("YouTube",{attrs:{title:"geolocation",url:"https://youtube.com/embed/NIAqR34eg7I"}}),t._v(" "),a("h2",{attrs:{id:"google-maps-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#google-maps-api"}},[t._v("#")]),t._v(" Google Maps API")]),t._v(" "),a("p",[t._v("Once you are comfortable getting Geolocation coordinates, the next step would be to start working with maps. Google Maps has an API that lets us use a latitude and longitude to display an interactive map of the area.")]),t._v(" "),a("YouTube",{attrs:{title:"Intro to Google Maps",url:"https://www.youtube.com/embed/EwZUQuPjakg"}}),t._v(" "),a("h2",{attrs:{id:"google-maps-geocoding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#google-maps-geocoding"}},[t._v("#")]),t._v(" Google Maps Geocoding")]),t._v(" "),a("p",[t._v("After you have set up your own account with Google APIs then you can also start using other APIs like the GeoCoding API. The Geocoding API lets you turn an address into a "),a("code",[t._v("{latitude, longitude}")]),t._v(" or alternatively turn a "),a("code",[t._v("{latitude, longitude}")]),t._v(" into an actual address.")]),t._v(" "),a("p",[t._v("This video will explain how to do some reverse geocoding to extra an address that would have come from the HTML5 geolocation API.")]),t._v(" "),a("YouTube",{attrs:{title:"Geocoding API",url:"https://www.youtube.com/embed/H7gZ2hEjwuI"}}),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/modules/week9/"}},[t._v("Back to Week main page")])],1)],1)}),[],!1,null,null,null);e.default=n.exports}}]);