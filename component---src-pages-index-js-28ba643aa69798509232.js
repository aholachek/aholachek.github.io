webpackJsonp([35783957827783],{232:function(t,e){t.exports=function(t,e){function n(t){for(var e=t.parentNode,n=t.nodeValue,a=n.length,r=-1;++r<a;){var l=document.createElement(i);s&&(l.className=s+o,o++),l.appendChild(document.createTextNode(n[r])),e.insertBefore(l,t)}e.removeChild(t)}e=e||{};var i=e.tagName||"span",s=null!=e.classPrefix?e.classPrefix:"char",o=1;!function t(e){if(e.nodeType===Node.TEXT_NODE)return n(e);var i=Array.prototype.slice.call(e.childNodes),s=i.length;if(1===s&&i[0].nodeType===Node.TEXT_NODE)return n(i[0]);for(var o=-1;++o<s;)t(i[o])}(t)}},215:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function r(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return parseFloat(Math.min(t+Math.random()*(e-t),e).toFixed(n))}e.__esModule=!0;var l=n(1),h=i(l),u=n(56),c=i(u),p=n(2),f=(i(p),n(23)),d=i(f),m=n(222),g=i(m),y=n(221),v=i(y),O=n(137),w=(i(O),{options:{shapeColors:[],shapesOnTop:!1},show:{lettersAnimationOpts:{duration:600,delay:function(t,e){return 60*e},easing:"easeOutExpo",opacity:{value:[0,1],duration:100,easing:"linear"},translateY:function(t,e){return e%2?[d.default.random(-350,350),0]:[d.default.random(450,450),0]}},shapesAnimationOpts:{duration:1600,delay:function(t,e){return 30*e},elasticity:500,translateX:function(t){return[t.dataset.x,d.default.random(-450,450)+parseFloat(t.dataset.x)]},translateY:function(t){return[t.dataset.y,d.default.random(-450,450)+parseFloat(t.dataset.y)]},scale:function(){return[r(.8,3),r(.5,5)]},rotate:function(){return[0,d.default.random(-16,16)]},opacity:[{value:1,duration:1,easing:"linear"},{value:0,duration:150,delay:1200,easing:"easeOutQuad"}]}}}),M=function(t){function e(){var n,i,a;s(this,e);for(var r=arguments.length,l=Array(r),h=0;h<r;h++)l[h]=arguments[h];return n=i=o(this,t.call.apply(t,[this].concat(l))),i.state={first:!0},a=n,o(i,a)}return a(e,t),e.prototype.componentDidMount=function(){function t(){var t=this;w.options.shapeColors=[this.props.cssVars["--color"]];var e=document.querySelector(".about-me__trigger-button");e.style.opacity=0;var n=this.title.getBoundingClientRect(),i=window.innerHeight/2-n.height/2-n.y,s=window.innerWidth/2-n.width/2-n.x;d.default.timeline().add({targets:this.title,translateY:i,translateX:s,duration:1}).add({targets:this.title,duration:1,opacity:1}).finished.then(function(){var e=new v.default(t.title,w.options);e.show(w.show)}),setTimeout(function(){(0,d.default)({targets:t.title,translateY:0,translateX:0,scale:.45,duration:200,easing:"easeInOutSine"}).finished.then(function(){return(0,g.default)(t.links)}).then(function(){(0,d.default)({targets:e,opacity:1,translateY:[60,0],delay:1e3,duration:800})})},1250)}this.props.animatingOut||"undefined"==typeof window||(t=t.bind(this),this.props.animatingIn?setTimeout(t,400):t())},e.prototype.render=function(){var t=this;return h.default.createElement("div",{className:"page--landing",ref:function(e){t.el=e}},h.default.createElement("div",null,h.default.createElement("h1",{className:"page--landing__title",ref:function(e){t.title=e}},"Alex Holachek"),h.default.createElement("ul",{className:"page--landing__links",ref:function(e){return t.links=e}},h.default.createElement("li",{style:{opacity:this.props.animatingOut?1:0}},h.default.createElement(c.default,{to:"/code"},h.default.createElement("h2",null,"Code"))),h.default.createElement("li",{style:{opacity:this.props.animatingOut?1:0}},h.default.createElement(c.default,{to:"/portfolio"},h.default.createElement("h2",null,"Portfolio"))),h.default.createElement("li",{style:{opacity:this.props.animatingOut?1:0}},h.default.createElement(c.default,{to:"/articles"},h.default.createElement("h2",null,"Articles"))))))},e}(l.Component);e.default=M,t.exports=e.default},221:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e,n){var i;return function(){var s=this,o=arguments,a=function(){i=null,n||t.apply(s,o)},r=n&&!i;clearTimeout(i),i=setTimeout(a,e),r&&t.apply(s,o)}}function a(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return parseFloat(Math.min(t+Math.random()*(e-t),e).toFixed(n))}e.__esModule=!0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},l=n(23),h=i(l),u=n(232),c=i(u),p=n(137),f=i(p),d=function(){function t(e,n,i){s(this,t),this.DOM={},this.options={shapeTypes:["circle","rect","polygon"],shapeColors:["#e07272","#0805b5","#49c6ff","#8bc34a","#1e1e21","#e24e81","#e0cd24"],shapeFill:!0,shapeStrokeWidth:1},r(this.options,i),this.type=e||this.options.shapeTypes[0],("random"===this.type||this.options.types.includes(this.type))&&("random"===this.type&&(this.type=this.options.shapeTypes[a(0,this.options.shapeTypes.length-1,0)]),this.letterRect=n,this.init())}return t.prototype.init=function(){this.DOM.el=document.createElementNS("http://www.w3.org/2000/svg","path");var t=f.default[Math.floor(a(0,f.default.length))];this.DOM.el.setAttribute("d",t),this.DOM.el.style.opacity=0,this.configureShape(),this.options.shapeFill?this.DOM.el.setAttribute("fill",this.options.shapeColors[a(0,this.options.shapeColors.length-1,0)]):(this.DOM.el.setAttribute("fill","none"),this.DOM.el.setAttribute("stroke-width",this.options.shapeStrokeWidth),this.DOM.el.setAttribute("stroke",this.options.shapeColors[a(0,this.options.shapeColors.length-1,0)]))},t.prototype.configureShape=function(){var t=this.letterRect.left+this.letterRect.width/2,e=this.letterRect.top+this.letterRect.height/2;this.DOM.el.dataset.x=t,this.DOM.el.dataset.y=e},t.prototype.onResize=function(t){this.letterRect=t,this.configureShape()},t}(),m=function(){function t(e,n,i){s(this,t),this.DOM={},this.DOM.el=e,this.DOM.svg=n,n.style.opacity=.4,this.options={totalShapes:4},r(this.options,i),this.rect=this.DOM.el.getBoundingClientRect(),this.totalShapes=this.options.totalShapes,this.init(),this.initEvents()}return t.prototype.init=function(){this.shapes=[];for(var t=0;t<=this.totalShapes-1;++t){var e=new d("random",this.rect,this.options);this.shapes.push(e),this.DOM.svg.appendChild(e.DOM.el)}},t.prototype.initEvents=function(){var t=this;window.addEventListener("resize",o(function(){t.rect=t.DOM.el.getBoundingClientRect();for(var e=0;e<=t.totalShapes-1;++e){var n=t.shapes[e];n.onResize(t.rect)}},20))},t}(),g=function(){function t(e,n){s(this,t),this.DOM={},this.DOM.el=e,this.options={shapesOnTop:!1},r(this.options,n),this.init()}return t.prototype.init=function(){var t=this;this.createSVG(),(0,c.default)(this.DOM.el),this.letters=[],Array.from(this.DOM.el.querySelectorAll("span")).forEach(function(e){return t.letters.push(new m(e,t.DOM.svg,t.options))})},t.prototype.createSVG=function(){this.winsize={width:window.innerWidth,height:window.innerHeight},this.DOM.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.DOM.svg.setAttribute("class","shapes"),this.DOM.svg.setAttribute("width",this.winsize.width+"px"),this.DOM.svg.setAttribute("height",this.winsize.width+"px"),this.DOM.svg.setAttribute("viewbox","0 0 "+this.winsize.width+" "+this.winsize.height),this.options.shapesOnTop?this.DOM.el.parentNode.insertBefore(this.DOM.svg,this.DOM.el.nextSibling):this.DOM.el.parentNode.insertBefore(this.DOM.svg,this.DOM.el)},t.prototype.show=function(t){return this.toggle("show",t)},t.prototype.hide=function(t){return this.toggle("hide",t)},t.prototype.toggle=function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"show",n=arguments[1];return new Promise(function(i,s){var o=function(){for(var n=0,s=t.letters.length;n<=s-1;++n)t.letters[n].DOM.el.style.opacity="show"===e?1:0;i()};if(n&&0!==Object.keys(n).length){if(n.shapesAnimationOpts)for(var a=0,r=t.letters.length;a<=r-1;++a){var l=t.letters[a];setTimeout(function(t){return function(){n.shapesAnimationOpts.targets=t.shapes.map(function(t){return t.DOM.el}),h.default.remove(n.shapesAnimationOpts.targets),(0,h.default)(n.shapesAnimationOpts)}}(l),n.lettersAnimationOpts&&n.lettersAnimationOpts.delay?n.lettersAnimationOpts.delay(l.DOM.el,a):0)}n.lettersAnimationOpts?(n.lettersAnimationOpts.targets=t.letters.map(function(t){return t.DOM.el}),n.lettersAnimationOpts.complete=function(){if("hide"===e)for(var t=0,s=n.lettersAnimationOpts.targets.length;t<=s-1;++t)n.lettersAnimationOpts.targets[t].style.transform="none";i()},(0,h.default)(n.lettersAnimationOpts)):o()}else o()})},t}();e.default=g,t.exports=e.default},222:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;setTimeout(function(){(0,a.default)({targets:t.children,easing:"easeOutExpo",opacity:[0,1],delay:function(t,e){return 250*e},duration:1e3})},e)}e.__esModule=!0,e.default=s;var o=n(23),a=i(o);t.exports=e.default},137:function(t,e){"use strict";e.__esModule=!0,e.default=["M11.4 10h2.7v7.6c0 3.4-1.6 4.6-4.3 4.6-.6 0-1.5-.1-2-.3l.3-2.2c.4.2.9.3 1.4.3 1.1 0 1.9-.5 1.9-2.4V10zm5.1 9.2c.7.4 1.9.8 3 .8 1.3 0 1.9-.5 1.9-1.3s-.6-1.2-2-1.7c-2-.7-3.3-1.8-3.3-3.6 0-2.1 1.7-3.6 4.6-3.6 1.4 0 2.4.3 3.1.6l-.6 2.2c-.5-.2-1.3-.6-2.5-.6s-1.8.5-1.8 1.2c0 .8.7 1.1 2.2 1.7 2.1.8 3.1 1.9 3.1 3.6 0 2-1.6 3.7-4.9 3.7-1.4 0-2.7-.4-3.4-.7l.6-2.3z","M8 15l6-5.6V12l-4.5 4 4.5 4v2.6L8 17v-2zm16 2.1l-6 5.6V20l4.6-4-4.6-4V9.3l6 5.6v2.2z","M7.5 15.1c1.5 0 1.7-.8 1.7-1.5 0-.6-.1-1.1-.1-1.7S9 10.7 9 10.2c0-2.1 1.3-3 3.4-3h.8v1.9h-.4c-1 0-1.3.6-1.3 1.6 0 .4.1.8.1 1.3 0 .4.1.9.1 1.5 0 1.7-.7 2.3-1.9 2.6 1.2.3 1.9.9 1.9 2.6 0 .6-.1 1.1-.1 1.5 0 .4-.1.9-.1 1.2 0 1 .3 1.6 1.3 1.6h.4v1.9h-.8c-2 0-3.3-.8-3.3-3 0-.6 0-1.1.1-1.7.1-.6.1-1.2.1-1.7 0-.6-.2-1.5-1.7-1.5l-.1-1.9zm17 1.7c-1.5 0-1.7.9-1.7 1.5s.1 1.1.1 1.7c.1.6.1 1.2.1 1.7 0 2.2-1.4 3-3.4 3h-.8V23h.4c1 0 1.3-.6 1.3-1.6 0-.4 0-.8-.1-1.2 0-.5-.1-1-.1-1.5 0-1.7.7-2.3 1.9-2.6-1.2-.3-1.9-.9-1.9-2.6 0-.6.1-1.1.1-1.5.1-.5.1-.9.1-1.3 0-1-.4-1.5-1.3-1.6h-.4V7.2h.8c2.1 0 3.4.9 3.4 3 0 .6-.1 1.1-.1 1.7-.1.6-.1 1.2-.1 1.7 0 .7.2 1.5 1.7 1.5v1.7z","M22 19.4c.1 1.1.2 2.1.2 3.2 0 1.3-.7 2.2-1.7 2.3-.5.1-1.1 0-1.6-.2-1-.5-1.9-1.2-2.9-1.8-.5.4-1 .8-1.6 1.2-.3.2-.7.4-1 .5-1.8.8-3.3-.1-3.4-2.1 0-1 .1-2.1.2-3.2-.6-.2-1.2-.4-1.8-.8-.6-.3-1.1-.7-1.6-1.2-.9-.9-.8-2 .1-2.9.8-.9 1.9-1.3 3-1.7.1 0 .3-.1.4-.1-.1-.7-.2-1.5-.3-2.2 0-.6.1-1.3.2-1.9.3-1.1 1.3-1.6 2.5-1.3 1.2.3 2.1 1 2.9 1.7.2.1.3.3.4.4.8-.6 1.6-1.2 2.5-1.7.6-.4 1.3-.6 2-.4 1 .2 1.6 1.1 1.7 2.4v1.6c0 .5-.2 1-.3 1.6.6.2 1.1.4 1.7.7.8.4 1.6.8 2.1 1.6.5.7.5 1.5 0 2.2-.5.8-1.3 1.2-2.1 1.6-.6.1-1.1.3-1.6.5zm-5.8-.1c.3 0 .8-.1 1.2-.1.3 0 .5-.1.7-.4.5-.8 1-1.6 1.4-2.5.1-.2.1-.5 0-.6-.5-.9-1-1.7-1.5-2.5-.1-.2-.3-.3-.5-.3-.9 0-1.7 0-2.6-.1-.5 0-.9.2-1.2.7-.2.3-.4.6-.6 1-1.1 2-1.1 1.2 0 3.2 1.2 1.9.6 1.5 3.1 1.6zm-5.8-.8c.3-.8.6-1.6.9-2.3v-.4c-.3-.8-.6-1.5-.9-2.3-1 .3-2 .7-2.8 1.3-.9.7-.9 1.6 0 2.3.8.8 1.8 1.1 2.8 1.4zm11.3-5.1c-.4.9-.7 1.7-1 2.5 0 .1-.1.2 0 .2.3.8.6 1.6 1 2.6.9-.5 1.9-.9 2.7-1.4 1.1-.7 1.1-1.7 0-2.4-.8-.7-1.8-1-2.7-1.5zm-10.7-1c.9-.1 1.7-.2 2.5-.4.1 0 .2-.1.2-.1.5-.7 1-1.3 1.6-2-.8-.7-1.6-1.4-2.6-1.8-1.1-.4-1.8 0-2 1.2-.1 1 .1 2 .3 3.1zm10 0c0-.1.1-.3.1-.4.2-1 .4-2.1 0-3.1-.2-.7-.7-1-1.3-.9-1.3.2-2.2 1.1-3.1 1.9.5.7 1 1.3 1.5 1.9l.3.3c.8.1 1.6.2 2.5.3zm-10 7.2c-.2 1.1-.5 2.1-.2 3.2.2 1 .9 1.4 1.9 1.1 1.1-.3 1.9-1.1 2.7-1.8-.5-.7-1-1.3-1.6-2-.1-.1-.2-.2-.3-.2-.8 0-1.6-.1-2.5-.3zm5.6 2.5c.6.8 1.8 1.6 2.6 1.9 1 .3 1.7 0 1.9-1.1.2-1.1 0-2.1-.2-3.2-.9.1-1.8.1-2.6.4-.6.3-.9 1-1.3 1.5-.1.2-.2.3-.4.5zm.6-10.2c-.4-.5-.8-.9-1.2-1.4-.4.5-.7.9-1.2 1.4h2.4zm0 8.2h-2.3c.4.5.8.9 1.2 1.4.3-.5.7-.9 1.1-1.4zm-4.1-1c-.4-.7-.8-1.3-1.2-2.1-.2.6-.4 1.1-.6 1.7.5.2 1.1.3 1.8.4zm7-2.1l-1.2 2.1c.7-.1 1.2-.2 1.8-.3-.1-.6-.3-1.1-.6-1.8zm-8.2-2l1.2-2.1c-.7.1-1.2.2-1.8.3.2.7.3 1.2.6 1.8zm7-2.1c.2.4.4.7.6 1 .2.3.4.6.6 1 .2-.6.4-1.2.6-1.7-.6 0-1.1-.1-1.8-.3z","M18 17.3c-1.1.7-2.4 1.5-3.5 2.2.4.9.4 1.8.1 2.7-.5 1.6-1.7 2.5-3.2 2.7-.4.1-.8 0-1.1-.1-.4-.1-.6-.4-.7-.7-.4-.9-.3-1.7.3-2.4.4-.4.8-.9 1.3-1.2.5-.4 1.2-.7 1.8-1.1.1-.1.2-.1.4-.2-.3-.2-.4-.4-.6-.4-.8-.5-1.6-1.1-2.3-1.8-.4-.4-.8-.8-1.1-1.3-.9-.7-1-1.7-.5-2.6.4-1 1.1-1.8 1.8-2.5 1.6-1.4 3.4-2.4 5.4-3.1 1.4-.5 2.8-.7 4.2-.5.4.2 1 .3 1.4.5 1.5.6 2.1 1.8 1.6 3.4-.4 1.3-1.2 2.4-2.4 3.1-1.6 1-3.2 1.4-5.1 1.1-.6-.1-1.1-.4-1.6-.9-.1-.2-.2-.4-.3-.5 0 0 0-.1.1-.2 0 0 .1 0 .2.1.8.8 1.7.9 2.6.7 1.7-.3 3.2-.9 4.3-2.2.4-.5.8-1.1 1-1.8.2-.8-.2-1.4-.9-1.8-.8-.4-1.6-.4-2.4-.3-2 .3-3.8 1.1-5.4 2.1-.9.5-1.7 1.1-2.3 1.9-.3.4-.5.8-.7 1.2-.3.8-.2 1.6.4 2.2.4.4.8.8 1.2 1.1.6.5 1.3 1.1 1.9 1.6.1 0 .2.1.3 0 .3-.2.5-.3.8-.4.9-.5 1.8-.9 2.8-1.1 0 .4.1.4.2.5 0-.1 0-.1 0 0zm-4.3 2.5c-.9.5-1.6 1-2.3 1.7-.4.4-.6.8-.7 1.3-.1.6.3.9.9.8.8-.2 1.4-.7 1.8-1.3.5-.8.5-1.5.3-2.5z"],t.exports=e.default}});
//# sourceMappingURL=component---src-pages-index-js-28ba643aa69798509232.js.map