(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{bpIZ:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("WnLM"),i=n.n(o);var c=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.componentDidMount=function(){if(!this.props.animatingOut){var e=this.el.querySelector(".page--post__content");i.a.timeline().add({delay:500,begin:function(){e.style.display="block"},targets:e,translateY:["50vh",0],elasticity:50,duration:1200}).add({targets:e.querySelectorAll("li"),opacity:[0,1],delay:function(e,t){return 200*t},duration:250,easing:"easeInSine",offset:"-=100"})}},o.render=function(){var e=this,t=this.props,n=t.title,a=t.children;return r.a.createElement("div",{className:"page--post",ref:function(t){return e.el=t}},r.a.createElement("div",null,r.a.createElement("div",{className:"page--post__header"},r.a.createElement("h1",null,n)),r.a.createElement("div",{className:"page--post__content",style:{display:"none"}},r.a.createElement("div",null,a))))},a}(a.Component);t.a=c},mtpx:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("bpIZ"),i=n("u8Le"),c=n.n(i);var s=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement(o.a,{title:"Reaction GIF Generator"},r.a.createElement("img",{src:c.a,alt:"a screenshot from the reaction gif generator",style:{maxWidth:"40rem",height:"auto",margin:"3rem auto 2rem auto",display:"block"}}),r.a.createElement("p",null,"Just for fun, I built a small app in Vue.js that allowed you to take a selfie to find an appropriate reaction gif. It ended up getting featured on websites such as"," ",r.a.createElement("a",{href:"https://mashable.com/2017/01/31/selfie-emotion-gif-reaction-generator/"},"Mashable"),"."),r.a.createElement("p",null,"I built it using the Oxford Emotion API, the Giphy API, and HTML5 webcam access"),r.a.createElement("p",null,"Unfortunately, free access to the Oxford Emotion API is no more and so the app is no longer working, but here's"," ",r.a.createElement("a",{href:"https://github.com/aholachek/gif-search"}," ","the front-end code.")))},a}(a.Component);t.default=s},u8Le:function(e,t,n){e.exports=n.p+"static/reaction-gif-thumbnail-00ec6db9f5bfe80e60d7b75cc13e4e64.gif"}}]);
//# sourceMappingURL=component---src-pages-portfolio-reaction-gif-generator-index-js-a31a189ea7e9c081ed42.js.map