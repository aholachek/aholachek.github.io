(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{178:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(189),o=n(93),u=n.n(o),c=[{tag:"React Conf 2019",text:"Building Mobile-First Animations in React",to:"https://youtu.be/JDDxR1a15Yo?t=10664",external:!0,description:"Using animations to create a native feel on the mobile web"},{tag:"CSS Tricks",text:"Building a Complex UI Animation In React ",to:"https://css-tricks.com/building-a-complex-ui-animation-in-react-simply/",external:!0,description:"Building an animated navigation menu component"},{tag:"React NYC meetup",text:"React & the FLIP Technique",to:"https://www.youtube.com/watch?v=s06Z_e8ac0Y",external:!0,description:"Using the FLIP animation technique to create advanced UI animation effects"},{tag:"Medium",text:"Building Animations in React from Scratch",to:"https://medium.com/about-codecademy/building-animations-in-react-from-scratch-c66a582c9b65",external:!0,description:"Hacking React lifecycle events to create advanced effects"}];e.default=function(t){var e=t.animatingOut;return a.a.createElement(r.Fragment,null,a.a.createElement(u.a,{title:"Alex Holachek | Talks & Articles"}),a.a.createElement(i.a,{title:"Talks & Articles",links:c,animatingOut:e}))}},187:function(t,e,n){(function(n){var r,a,i,o={scope:{}};o.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){if(n.get||n.set)throw new TypeError("ES3 does not support getters and setters.");t!=Array.prototype&&t!=Object.prototype&&(t[e]=n.value)},o.getGlobal=function(t){return"undefined"!=typeof window&&window===t?t:void 0!==n&&null!=n?n:t},o.global=o.getGlobal(this),o.SYMBOL_PREFIX="jscomp_symbol_",o.initSymbol=function(){o.initSymbol=function(){},o.global.Symbol||(o.global.Symbol=o.Symbol)},o.symbolCounter_=0,o.Symbol=function(t){return o.SYMBOL_PREFIX+(t||"")+o.symbolCounter_++},o.initSymbolIterator=function(){o.initSymbol();var t=o.global.Symbol.iterator;t||(t=o.global.Symbol.iterator=o.global.Symbol("iterator")),"function"!=typeof Array.prototype[t]&&o.defineProperty(Array.prototype,t,{configurable:!0,writable:!0,value:function(){return o.arrayIterator(this)}}),o.initSymbolIterator=function(){}},o.arrayIterator=function(t){var e=0;return o.iteratorPrototype(function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}})},o.iteratorPrototype=function(t){return o.initSymbolIterator(),(t={next:t})[o.global.Symbol.iterator]=function(){return this},t},o.array=o.array||{},o.iteratorFromArray=function(t,e){o.initSymbolIterator(),t instanceof String&&(t+="");var n=0,r={next:function(){if(n<t.length){var a=n++;return{value:e(a,t[a]),done:!1}}return r.next=function(){return{done:!0,value:void 0}},r.next()}};return r[Symbol.iterator]=function(){return r},r},o.polyfill=function(t,e,n,r){if(e){for(n=o.global,t=t.split("."),r=0;r<t.length-1;r++){var a=t[r];a in n||(n[a]={}),n=n[a]}(e=e(r=n[t=t[t.length-1]]))!=r&&null!=e&&o.defineProperty(n,t,{configurable:!0,writable:!0,value:e})}},o.polyfill("Array.prototype.keys",function(t){return t||function(){return o.iteratorFromArray(this,function(t){return t})}},"es6-impl","es3");var u=this;a=[],void 0===(i="function"==typeof(r=function(){function t(t){if(!P.col(t))try{return document.querySelectorAll(t)}catch(t){}}function e(t,e){for(var n=t.length,r=2<=arguments.length?arguments[1]:void 0,a=[],i=0;i<n;i++)if(i in t){var o=t[i];e.call(r,o,i,t)&&a.push(o)}return a}function n(t){return t.reduce(function(t,e){return t.concat(P.arr(e)?n(e):e)},[])}function r(e){return P.arr(e)?e:(P.str(e)&&(e=t(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function a(t,e){return t.some(function(t){return t===e})}function i(t){var e,n={};for(e in t)n[e]=t[e];return n}function o(t,e){var n,r=i(t);for(n in t)r[n]=e.hasOwnProperty(n)?e[n]:t[n];return r}function c(t,e){var n,r=i(t);for(n in e)r[n]=P.und(t[n])?e[n]:t[n];return r}function l(t){if(t=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t))return t[2]}function s(t,e){return P.fnc(t)?t(e.target,e.id,e.total):t}function f(t,e){if(e in t.style)return getComputedStyle(t).getPropertyValue(e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function d(t,e){return P.dom(t)&&a(_,e)?"transform":P.dom(t)&&(t.getAttribute(e)||P.svg(t)&&t[e])?"attribute":P.dom(t)&&"transform"!==e&&f(t,e)?"css":null!=t[e]?"object":void 0}function p(t,n){switch(d(t,n)){case"transform":return function(t,n){var r=function(t){return-1<t.indexOf("translate")||"perspective"===t?"px":-1<t.indexOf("rotate")||-1<t.indexOf("skew")?"deg":void 0}(n),r=-1<n.indexOf("scale")?1:0+r;if(!(t=t.style.transform))return r;for(var a=[],i=[],o=[],u=/(\w+)\((.+?)\)/g;a=u.exec(t);)i.push(a[1]),o.push(a[2]);return(t=e(o,function(t,e){return i[e]===n})).length?t[0]:r}(t,n);case"css":return f(t,n);case"attribute":return t.getAttribute(n)}return t[n]||0}function m(t,e){var n=/^(\*=|\+=|-=)/.exec(t);if(!n)return t;var r=l(t)||0;switch(e=parseFloat(e),t=parseFloat(t.replace(n[0],"")),n[0][0]){case"+":return e+t+r;case"-":return e-t+r;case"*":return e*t+r}}function g(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function h(t){t=t.points;for(var e,n=0,r=0;r<t.numberOfItems;r++){var a=t.getItem(r);0<r&&(n+=g(e,a)),e=a}return n}function y(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return 2*Math.PI*t.getAttribute("r");case"rect":return 2*t.getAttribute("width")+2*t.getAttribute("height");case"line":return g({x:t.getAttribute("x1"),y:t.getAttribute("y1")},{x:t.getAttribute("x2"),y:t.getAttribute("y2")});case"polyline":return h(t);case"polygon":var e=t.points;return h(t)+g(e.getItem(e.numberOfItems-1),e.getItem(0))}}function v(t,e){function n(n){return n=void 0===n?0:n,t.el.getPointAtLength(1<=e+n?e+n:0)}var r=n(),a=n(-1),i=n(1);switch(t.property){case"x":return r.x;case"y":return r.y;case"angle":return 180*Math.atan2(i.y-a.y,i.x-a.x)/Math.PI}}function b(t,e){var n,r=/-?\d*\.?\d+/g;if(n=P.pth(t)?t.totalLength:t,P.col(n))if(P.rgb(n)){var a=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);n=a?"rgba("+a[1]+",1)":n}else n=P.hex(n)?function(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,n,r){return e+e+n+n+r+r});var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);t=parseInt(e[1],16);var n=parseInt(e[2],16),e=parseInt(e[3],16);return"rgba("+t+","+n+","+e+",1)"}(n):P.hsl(n)?function(t){function e(t,e,n){return 0>n&&(n+=1),1<n&&--n,n<1/6?t+6*(e-t)*n:.5>n?e:n<2/3?t+(e-t)*(2/3-n)*6:t}var n=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t);t=parseInt(n[1])/360;var r=parseInt(n[2])/100,a=parseInt(n[3])/100,n=n[4]||1;if(0==r)a=r=t=a;else{var i=.5>a?a*(1+r):a+r-a*r,o=2*a-i,a=e(o,i,t+1/3),r=e(o,i,t);t=e(o,i,t-1/3)}return"rgba("+255*a+","+255*r+","+255*t+","+n+")"}(n):void 0;else a=(a=l(n))?n.substr(0,n.length-a.length):n,n=e&&!/\s/g.test(n)?a+e:a;return{original:n+="",numbers:n.match(r)?n.match(r).map(Number):[0],strings:P.str(t)||e?n.split(r):[]}}function x(t){return e(t=t?n(P.arr(t)?t.map(r):r(t)):[],function(t,e,n){return n.indexOf(t)===e})}function w(t,e){var n=i(e);if(P.arr(t)){var a=t.length;2!==a||P.obj(t[0])?P.fnc(e.duration)||(n.duration=e.duration/a):t={value:t}}return r(t).map(function(t,n){return n=n?0:e.delay,t=P.obj(t)&&!P.pth(t)?t:{value:t},P.und(t.delay)&&(t.delay=n),t}).map(function(t){return c(t,n)})}function A(t,e){var n;return t.tweens.map(function(r){var a=(r=function(t,e){var n,r={};for(n in t){var a=s(t[n],e);P.arr(a)&&1===(a=a.map(function(t){return s(t,e)})).length&&(a=a[0]),r[n]=a}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}(r,e)).value,i=p(e.target,t.name),o=n?n.to.original:i,o=P.arr(a)?a[0]:o,u=m(P.arr(a)?a[1]:a,o),i=l(u)||l(o)||l(i);return r.from=b(o,i),r.to=b(u,i),r.start=n?n.end:t.offset,r.end=r.start+r.delay+r.duration,r.easing=function(t){return P.arr(t)?N.apply(this,t):T[t]}(r.easing),r.elasticity=(1e3-Math.min(Math.max(r.elasticity,1),999))/1e3,r.isPath=P.pth(a),r.isColor=P.col(r.from.original),r.isColor&&(r.round=1),n=r})}function E(t,e,n,r){var a="delay"===t;return e.length?(a?Math.min:Math.max).apply(Math,e.map(function(e){return e[t]})):a?r.delay:n.offset+r.delay+r.duration}function I(t){var r,a=o(M,t),i=o(O,t),u=function(t){var e=x(t);return e.map(function(t,n){return{target:t,id:n,total:e.length}})}(t.targets),l=[],s=c(a,i);for(r in t)s.hasOwnProperty(r)||"targets"===r||l.push({name:r,offset:s.offset,tweens:w(t[r],i)});return t=function(t,r){return e(n(t.map(function(t){return r.map(function(e){var n=d(t.target,e.name);if(n){var r=A(e,t);e={type:n,property:e.name,animatable:t,tweens:r,duration:r[r.length-1].end,delay:r[0].delay}}else e=void 0;return e})})),function(t){return!P.und(t)})}(u,l),c(a,{children:[],animatables:u,animations:t,duration:E("duration",t,a,i),delay:E("delay",t,a,i)})}function S(t){function n(){return window.Promise&&new Promise(function(t){return d=t})}function r(t){return m.reversed?m.duration-t:t}function a(t){for(var n=0,r={},a=m.animations,i=a.length;n<i;){var o=a[n],u=o.animatable,c=o.tweens,l=c.length-1,s=c[l];l&&(s=e(c,function(e){return t<e.end})[0]||s);for(var c=Math.min(Math.max(t-s.start-s.delay,0),s.duration)/s.duration,d=isNaN(c)?1:s.easing(c,s.elasticity),c=s.to.strings,p=s.round,l=[],g=void 0,g=s.to.numbers.length,h=0;h<g;h++){var y=void 0,y=s.to.numbers[h],b=s.from.numbers[h],y=s.isPath?v(s.value,d*y):b+d*(y-b);p&&(s.isColor&&2<h||(y=Math.round(y*p)/p)),l.push(y)}if(s=c.length)for(g=c[0],d=0;d<s;d++)p=c[d+1],h=l[d],isNaN(h)||(g=p?g+(h+p):g+(h+" "));else g=l[0];F[o.type](u.target,o.property,g,r,u.id),o.currentValue=g,n++}if(n=Object.keys(r).length)for(a=0;a<n;a++)k||(k=f(document.body,"transform")?"transform":"-webkit-transform"),m.animatables[a].target.style[k]=r[a].join(" ");m.currentTime=t,m.progress=t/m.duration*100}function i(t){m[t]&&m[t](m)}function o(){m.remaining&&!0!==m.remaining&&m.remaining--}function u(t){var e=m.duration,u=m.offset,f=u+m.delay,g=m.currentTime,h=m.reversed,y=r(t);if(m.children.length){var v=m.children,b=v.length;if(y>=m.currentTime)for(var x=0;x<b;x++)v[x].seek(y);else for(;b--;)v[b].seek(y)}(y>=f||!e)&&(m.began||(m.began=!0,i("begin")),i("run")),y>u&&y<e?a(y):(y<=u&&0!==g&&(a(0),h&&o()),(y>=e&&g!==e||!e)&&(a(e),h||o())),i("update"),t>=e&&(m.remaining?(l=c,"alternate"===m.direction&&(m.reversed=!m.reversed)):(m.pause(),m.completed||(m.completed=!0,i("complete"),"Promise"in window&&(d(),p=n()))),s=0)}t=void 0===t?{}:t;var c,l,s=0,d=null,p=n(),m=I(t);return m.reset=function(){var t=m.direction,e=m.loop;for(m.currentTime=0,m.progress=0,m.paused=!0,m.began=!1,m.completed=!1,m.reversed="reverse"===t,m.remaining="alternate"===t&&1===e?2:e,a(0),t=m.children.length;t--;)m.children[t].reset()},m.tick=function(t){c=t,l||(l=c),u((s+c-l)*S.speed)},m.seek=function(t){u(r(t))},m.pause=function(){var t=C.indexOf(m);-1<t&&C.splice(t,1),m.paused=!0},m.play=function(){m.paused&&(m.paused=!1,l=0,s=r(m.currentTime),C.push(m),j||L())},m.reverse=function(){m.reversed=!m.reversed,l=0,s=r(m.currentTime)},m.restart=function(){m.pause(),m.reset(),m.play()},m.finished=p,m.reset(),m.autoplay&&m.play(),m}var k,M={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},O={duration:1e3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},_="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),P={arr:function(t){return Array.isArray(t)},obj:function(t){return-1<Object.prototype.toString.call(t).indexOf("Object")},pth:function(t){return P.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},dom:function(t){return t.nodeType||P.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return P.hex(t)||P.rgb(t)||P.hsl(t)}},N=function(){function t(t,e,n){return(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t}return function(e,n,r,a){if(0<=e&&1>=e&&0<=r&&1>=r){var i=new Float32Array(11);if(e!==n||r!==a)for(var o=0;11>o;++o)i[o]=t(.1*o,e,r);return function(o){if(e===n&&r===a)return o;if(0===o)return 0;if(1===o)return 1;for(var u=0,c=1;10!==c&&i[c]<=o;++c)u+=.1;var c=u+(o-i[--c])/(i[c+1]-i[c])*.1,l=3*(1-3*r+3*e)*c*c+2*(3*r-6*e)*c+3*e;if(.001<=l){for(u=0;4>u&&0!=(l=3*(1-3*r+3*e)*c*c+2*(3*r-6*e)*c+3*e);++u)var s=t(c,e,r)-o,c=c-s/l;o=c}else if(0===l)o=c;else{var c=u,u=u+.1,f=0;do{0<(l=t(s=c+(u-c)/2,e,r)-o)?u=s:c=s}while(1e-7<Math.abs(l)&&10>++f);o=s}return t(o,n,a)}}}}(),T=function(){function t(t,e){return 0===t||1===t?t:-Math.pow(2,10*(t-1))*Math.sin(2*(t-1-e/(2*Math.PI)*Math.asin(1))*Math.PI/e)}var e,n="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),r={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],t],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(e,n){return 1-t(1-e,n)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(e,n){return.5>e?t(2*e,n)/2:1-t(-2*e+2,n)/2}]},a={linear:N(.25,.25,.75,.75)},i={};for(e in r)i.type=e,r[i.type].forEach(function(t){return function(e,r){a["ease"+t.type+n[r]]=P.fnc(e)?e:N.apply(u,e)}}(i)),i={type:i.type};return a}(),F={css:function(t,e,n){return t.style[e]=n},attribute:function(t,e,n){return t.setAttribute(e,n)},object:function(t,e,n){return t[e]=n},transform:function(t,e,n,r,a){r[a]||(r[a]=[]),r[a].push(e+"("+n+")")}},C=[],j=0,L=function(){function t(){j=requestAnimationFrame(e)}function e(e){var n=C.length;if(n){for(var r=0;r<n;)C[r]&&C[r].tick(e),r++;t()}else cancelAnimationFrame(j),j=0}return t}();return S.version="2.2.0",S.speed=1,S.running=C,S.remove=function(t){t=x(t);for(var e=C.length;e--;)for(var n=C[e],r=n.animations,i=r.length;i--;)a(t,r[i].animatable.target)&&(r.splice(i,1),r.length||n.pause())},S.getValue=p,S.path=function(e,n){var r=P.str(e)?t(e)[0]:e,a=n||100;return function(t){return{el:r,property:t,totalLength:y(r)*(a/100)}}},S.setDashoffset=function(t){var e=y(t);return t.setAttribute("stroke-dasharray",e),e},S.bezier=N,S.easings=T,S.timeline=function(t){var e=S(t);return e.pause(),e.duration=0,e.add=function(n){return e.children.forEach(function(t){t.began=!0,t.completed=!0}),r(n).forEach(function(n){var r=c(n,o(O,t||{}));r.targets=r.targets||t.targets,n=e.duration;var a=r.offset;r.autoplay=!1,r.direction=e.direction,r.offset=P.und(a)?n:m(a,n),e.began=!0,e.completed=!0,e.seek(r.offset),(r=S(r)).began=!0,r.completed=!0,r.duration>n&&(e.duration=r.duration),e.children.push(r)}),e.seek(0),e.reset(),e.autoplay&&e.restart(),e},e},S.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},S})?r.apply(e,a):r)||(t.exports=i)}).call(this,n(63))},189:function(t,e,n){"use strict";n(45),n(44);var r=n(5),a=n.n(r),i=n(0),o=n.n(i),u=n(1),c=n.n(u),l=n(187),s=n.n(l),f=n(8),d=n.n(f),p=function(t){var e=t.skills,n=t.text,r=t.img,a=t.external,i=t.to,u=t.description,c=t.simple,l=t.tag,s=o.a.createElement("div",null,o.a.createElement("div",{className:"card__padding"},l&&o.a.createElement("div",{className:"card__tag"},l),o.a.createElement("div",{className:"card__header"},o.a.createElement("h2",null,n),!!e&&function(t){return o.a.createElement("ul",{className:"card__skills"},t.map(function(e,n){return o.a.createElement("li",null,e,n===t.length-1?"":",")}))}(e),!!u&&function(t){return o.a.createElement("p",{className:"card__description",dangerouslySetInnerHTML:{__html:t}})}(u)),!!r&&o.a.createElement("img",{className:"card__img",src:r})));return o.a.createElement("li",{style:{opacity:0},key:i,className:"card "+(c?"card--simple":"")},a?o.a.createElement("a",{href:i},s):o.a.createElement(d.a,{to:i},s))};p.defaultProps={},p.propTypes={};var m=p,g=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))||this).state={},e}a()(e,t);var n=e.prototype;return n.componentDidMount=function(){if(!this.props.animatingOut){var t=this.el.querySelector(".page--list__content");s()({targets:t.querySelectorAll(".card"),opacity:{value:1,duration:300,easing:"easeInSine"},translateY:[50,0],delay:function(t,e){return 100*e+300},duration:1e3,elasticity:500})}},n.render=function(){var t=this,e=this.props,n=e.links,r=e.title,a=e.simple;return o.a.createElement("div",{className:"page--list",ref:function(e){return t.el=e}},o.a.createElement("div",null,o.a.createElement("div",{className:"page--list__header"},o.a.createElement("h1",null,r)),o.a.createElement("div",{className:"page--list__content"},o.a.createElement("div",null,o.a.createElement("ul",{className:"card-grid "+(a?"card-grid--simple":""),ref:function(e){t.list=e}},n.map(function(t){return o.a.createElement(m,Object.assign({},t,{simple:a}))}))))))},e}(i.Component);g.propTypes={title:c.a.string,links:c.a.array,animatingOut:c.a.bool};e.a=g}}]);
//# sourceMappingURL=component---src-pages-articles-js-08e70250bb50c2d47dfd.js.map