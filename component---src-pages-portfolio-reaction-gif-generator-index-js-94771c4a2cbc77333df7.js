(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{184:function(t,e,n){"use strict";n.r(e);var r=n(5),a=n.n(r),o=n(0),i=n.n(o),u=(n(1),n(189)),s=n(193),c=n.n(s),l=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){return i.a.createElement(u.a,{title:"Reaction GIF Generator"},i.a.createElement("p",{className:"lead"},"Just for fun, I built a small app in Vue.js that allowed you to take a selfie to find an appropriate reaction gif. It ended up getting featured on websites such as"," ",i.a.createElement("a",{href:"https://mashable.com/2017/01/31/selfie-emotion-gif-reaction-generator/"},"Mashable"),"."),i.a.createElement("img",{src:c.a,alt:"a screenshot from the reaction gif generator",style:{maxWidth:"40rem",height:"auto"}}),i.a.createElement("p",null,"I built it using the Oxford Emotion API, the Giphy API, and HTML5 webcam access"),i.a.createElement("p",null,"Unfortunately, free access to the Oxford Emotion API is no more and so the app is no longer working, but here's"," ",i.a.createElement("a",{href:"https://github.com/aholachek/gif-search"}," the front-end code.")))},e}(o.Component);e.default=l},188:function(t,e,n){(function(n){var r,a,o,i={scope:{}};i.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){if(n.get||n.set)throw new TypeError("ES3 does not support getters and setters.");t!=Array.prototype&&t!=Object.prototype&&(t[e]=n.value)},i.getGlobal=function(t){return"undefined"!=typeof window&&window===t?t:void 0!==n&&null!=n?n:t},i.global=i.getGlobal(this),i.SYMBOL_PREFIX="jscomp_symbol_",i.initSymbol=function(){i.initSymbol=function(){},i.global.Symbol||(i.global.Symbol=i.Symbol)},i.symbolCounter_=0,i.Symbol=function(t){return i.SYMBOL_PREFIX+(t||"")+i.symbolCounter_++},i.initSymbolIterator=function(){i.initSymbol();var t=i.global.Symbol.iterator;t||(t=i.global.Symbol.iterator=i.global.Symbol("iterator")),"function"!=typeof Array.prototype[t]&&i.defineProperty(Array.prototype,t,{configurable:!0,writable:!0,value:function(){return i.arrayIterator(this)}}),i.initSymbolIterator=function(){}},i.arrayIterator=function(t){var e=0;return i.iteratorPrototype(function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}})},i.iteratorPrototype=function(t){return i.initSymbolIterator(),(t={next:t})[i.global.Symbol.iterator]=function(){return this},t},i.array=i.array||{},i.iteratorFromArray=function(t,e){i.initSymbolIterator(),t instanceof String&&(t+="");var n=0,r={next:function(){if(n<t.length){var a=n++;return{value:e(a,t[a]),done:!1}}return r.next=function(){return{done:!0,value:void 0}},r.next()}};return r[Symbol.iterator]=function(){return r},r},i.polyfill=function(t,e,n,r){if(e){for(n=i.global,t=t.split("."),r=0;r<t.length-1;r++){var a=t[r];a in n||(n[a]={}),n=n[a]}(e=e(r=n[t=t[t.length-1]]))!=r&&null!=e&&i.defineProperty(n,t,{configurable:!0,writable:!0,value:e})}},i.polyfill("Array.prototype.keys",function(t){return t||function(){return i.iteratorFromArray(this,function(t){return t})}},"es6-impl","es3");var u=this;a=[],void 0===(o="function"==typeof(r=function(){function t(t){if(!j.col(t))try{return document.querySelectorAll(t)}catch(t){}}function e(t,e){for(var n=t.length,r=2<=arguments.length?arguments[1]:void 0,a=[],o=0;o<n;o++)if(o in t){var i=t[o];e.call(r,i,o,t)&&a.push(i)}return a}function n(t){return t.reduce(function(t,e){return t.concat(j.arr(e)?n(e):e)},[])}function r(e){return j.arr(e)?e:(j.str(e)&&(e=t(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function a(t,e){return t.some(function(t){return t===e})}function o(t){var e,n={};for(e in t)n[e]=t[e];return n}function i(t,e){var n,r=o(t);for(n in t)r[n]=e.hasOwnProperty(n)?e[n]:t[n];return r}function s(t,e){var n,r=o(t);for(n in e)r[n]=j.und(t[n])?e[n]:t[n];return r}function c(t){if(t=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t))return t[2]}function l(t,e){return j.fnc(t)?t(e.target,e.id,e.total):t}function f(t,e){if(e in t.style)return getComputedStyle(t).getPropertyValue(e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function d(t,e){return j.dom(t)&&a(k,e)?"transform":j.dom(t)&&(t.getAttribute(e)||j.svg(t)&&t[e])?"attribute":j.dom(t)&&"transform"!==e&&f(t,e)?"css":null!=t[e]?"object":void 0}function p(t,n){switch(d(t,n)){case"transform":return function(t,n){var r=function(t){return-1<t.indexOf("translate")||"perspective"===t?"px":-1<t.indexOf("rotate")||-1<t.indexOf("skew")?"deg":void 0}(n),r=-1<n.indexOf("scale")?1:0+r;if(!(t=t.style.transform))return r;for(var a=[],o=[],i=[],u=/(\w+)\((.+?)\)/g;a=u.exec(t);)o.push(a[1]),i.push(a[2]);return(t=e(i,function(t,e){return o[e]===n})).length?t[0]:r}(t,n);case"css":return f(t,n);case"attribute":return t.getAttribute(n)}return t[n]||0}function m(t,e){var n=/^(\*=|\+=|-=)/.exec(t);if(!n)return t;var r=c(t)||0;switch(e=parseFloat(e),t=parseFloat(t.replace(n[0],"")),n[0][0]){case"+":return e+t+r;case"-":return e-t+r;case"*":return e*t+r}}function g(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function h(t){t=t.points;for(var e,n=0,r=0;r<t.numberOfItems;r++){var a=t.getItem(r);0<r&&(n+=g(e,a)),e=a}return n}function y(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return 2*Math.PI*t.getAttribute("r");case"rect":return 2*t.getAttribute("width")+2*t.getAttribute("height");case"line":return g({x:t.getAttribute("x1"),y:t.getAttribute("y1")},{x:t.getAttribute("x2"),y:t.getAttribute("y2")});case"polyline":return h(t);case"polygon":var e=t.points;return h(t)+g(e.getItem(e.numberOfItems-1),e.getItem(0))}}function v(t,e){function n(n){return n=void 0===n?0:n,t.el.getPointAtLength(1<=e+n?e+n:0)}var r=n(),a=n(-1),o=n(1);switch(t.property){case"x":return r.x;case"y":return r.y;case"angle":return 180*Math.atan2(o.y-a.y,o.x-a.x)/Math.PI}}function b(t,e){var n,r=/-?\d*\.?\d+/g;if(n=j.pth(t)?t.totalLength:t,j.col(n))if(j.rgb(n)){var a=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);n=a?"rgba("+a[1]+",1)":n}else n=j.hex(n)?function(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,n,r){return e+e+n+n+r+r});var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);t=parseInt(e[1],16);var n=parseInt(e[2],16),e=parseInt(e[3],16);return"rgba("+t+","+n+","+e+",1)"}(n):j.hsl(n)?function(t){function e(t,e,n){return 0>n&&(n+=1),1<n&&--n,n<1/6?t+6*(e-t)*n:.5>n?e:n<2/3?t+(e-t)*(2/3-n)*6:t}var n=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t);t=parseInt(n[1])/360;var r=parseInt(n[2])/100,a=parseInt(n[3])/100,n=n[4]||1;if(0==r)a=r=t=a;else{var o=.5>a?a*(1+r):a+r-a*r,i=2*a-o,a=e(i,o,t+1/3),r=e(i,o,t);t=e(i,o,t-1/3)}return"rgba("+255*a+","+255*r+","+255*t+","+n+")"}(n):void 0;else a=(a=c(n))?n.substr(0,n.length-a.length):n,n=e&&!/\s/g.test(n)?a+e:a;return{original:n+="",numbers:n.match(r)?n.match(r).map(Number):[0],strings:j.str(t)||e?n.split(r):[]}}function w(t){return e(t=t?n(j.arr(t)?t.map(r):r(t)):[],function(t,e,n){return n.indexOf(t)===e})}function x(t,e){var n=o(e);if(j.arr(t)){var a=t.length;2!==a||j.obj(t[0])?j.fnc(e.duration)||(n.duration=e.duration/a):t={value:t}}return r(t).map(function(t,n){return n=n?0:e.delay,t=j.obj(t)&&!j.pth(t)?t:{value:t},j.und(t.delay)&&(t.delay=n),t}).map(function(t){return s(t,n)})}function I(t,e){var n;return t.tweens.map(function(r){var a=(r=function(t,e){var n,r={};for(n in t){var a=l(t[n],e);j.arr(a)&&1===(a=a.map(function(t){return l(t,e)})).length&&(a=a[0]),r[n]=a}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}(r,e)).value,o=p(e.target,t.name),i=n?n.to.original:o,i=j.arr(a)?a[0]:i,u=m(j.arr(a)?a[1]:a,i),o=c(u)||c(i)||c(o);return r.from=b(i,o),r.to=b(u,o),r.start=n?n.end:t.offset,r.end=r.start+r.delay+r.duration,r.easing=function(t){return j.arr(t)?F.apply(this,t):C[t]}(r.easing),r.elasticity=(1e3-Math.min(Math.max(r.elasticity,1),999))/1e3,r.isPath=j.pth(a),r.isColor=j.col(r.from.original),r.isColor&&(r.round=1),n=r})}function A(t,e,n,r){var a="delay"===t;return e.length?(a?Math.min:Math.max).apply(Math,e.map(function(e){return e[t]})):a?r.delay:n.offset+r.delay+r.duration}function M(t){var r,a=i(O,t),o=i(P,t),u=function(t){var e=w(t);return e.map(function(t,n){return{target:t,id:n,total:e.length}})}(t.targets),c=[],l=s(a,o);for(r in t)l.hasOwnProperty(r)||"targets"===r||c.push({name:r,offset:l.offset,tweens:x(t[r],o)});return t=function(t,r){return e(n(t.map(function(t){return r.map(function(e){var n=d(t.target,e.name);if(n){var r=I(e,t);e={type:n,property:e.name,animatable:t,tweens:r,duration:r[r.length-1].end,delay:r[0].delay}}else e=void 0;return e})})),function(t){return!j.und(t)})}(u,c),s(a,{children:[],animatables:u,animations:t,duration:A("duration",t,a,o),delay:A("delay",t,a,o)})}function S(t){function n(){return window.Promise&&new Promise(function(t){return d=t})}function r(t){return m.reversed?m.duration-t:t}function a(t){for(var n=0,r={},a=m.animations,o=a.length;n<o;){var i=a[n],u=i.animatable,s=i.tweens,c=s.length-1,l=s[c];c&&(l=e(s,function(e){return t<e.end})[0]||l);for(var s=Math.min(Math.max(t-l.start-l.delay,0),l.duration)/l.duration,d=isNaN(s)?1:l.easing(s,l.elasticity),s=l.to.strings,p=l.round,c=[],g=void 0,g=l.to.numbers.length,h=0;h<g;h++){var y=void 0,y=l.to.numbers[h],b=l.from.numbers[h],y=l.isPath?v(l.value,d*y):b+d*(y-b);p&&(l.isColor&&2<h||(y=Math.round(y*p)/p)),c.push(y)}if(l=s.length)for(g=s[0],d=0;d<l;d++)p=s[d+1],h=c[d],isNaN(h)||(g=p?g+(h+p):g+(h+" "));else g=c[0];L[i.type](u.target,i.property,g,r,u.id),i.currentValue=g,n++}if(n=Object.keys(r).length)for(a=0;a<n;a++)E||(E=f(document.body,"transform")?"transform":"-webkit-transform"),m.animatables[a].target.style[E]=r[a].join(" ");m.currentTime=t,m.progress=t/m.duration*100}function o(t){m[t]&&m[t](m)}function i(){m.remaining&&!0!==m.remaining&&m.remaining--}function u(t){var e=m.duration,u=m.offset,f=u+m.delay,g=m.currentTime,h=m.reversed,y=r(t);if(m.children.length){var v=m.children,b=v.length;if(y>=m.currentTime)for(var w=0;w<b;w++)v[w].seek(y);else for(;b--;)v[b].seek(y)}(y>=f||!e)&&(m.began||(m.began=!0,o("begin")),o("run")),y>u&&y<e?a(y):(y<=u&&0!==g&&(a(0),h&&i()),(y>=e&&g!==e||!e)&&(a(e),h||i())),o("update"),t>=e&&(m.remaining?(c=s,"alternate"===m.direction&&(m.reversed=!m.reversed)):(m.pause(),m.completed||(m.completed=!0,o("complete"),"Promise"in window&&(d(),p=n()))),l=0)}t=void 0===t?{}:t;var s,c,l=0,d=null,p=n(),m=M(t);return m.reset=function(){var t=m.direction,e=m.loop;for(m.currentTime=0,m.progress=0,m.paused=!0,m.began=!1,m.completed=!1,m.reversed="reverse"===t,m.remaining="alternate"===t&&1===e?2:e,a(0),t=m.children.length;t--;)m.children[t].reset()},m.tick=function(t){s=t,c||(c=s),u((l+s-c)*S.speed)},m.seek=function(t){u(r(t))},m.pause=function(){var t=T.indexOf(m);-1<t&&T.splice(t,1),m.paused=!0},m.play=function(){m.paused&&(m.paused=!1,c=0,l=r(m.currentTime),T.push(m),_||N())},m.reverse=function(){m.reversed=!m.reversed,c=0,l=r(m.currentTime)},m.restart=function(){m.pause(),m.reset(),m.play()},m.finished=p,m.reset(),m.autoplay&&m.play(),m}var E,O={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},P={duration:1e3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},k="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),j={arr:function(t){return Array.isArray(t)},obj:function(t){return-1<Object.prototype.toString.call(t).indexOf("Object")},pth:function(t){return j.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},dom:function(t){return t.nodeType||j.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return j.hex(t)||j.rgb(t)||j.hsl(t)}},F=function(){function t(t,e,n){return(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t}return function(e,n,r,a){if(0<=e&&1>=e&&0<=r&&1>=r){var o=new Float32Array(11);if(e!==n||r!==a)for(var i=0;11>i;++i)o[i]=t(.1*i,e,r);return function(i){if(e===n&&r===a)return i;if(0===i)return 0;if(1===i)return 1;for(var u=0,s=1;10!==s&&o[s]<=i;++s)u+=.1;var s=u+(i-o[--s])/(o[s+1]-o[s])*.1,c=3*(1-3*r+3*e)*s*s+2*(3*r-6*e)*s+3*e;if(.001<=c){for(u=0;4>u&&0!=(c=3*(1-3*r+3*e)*s*s+2*(3*r-6*e)*s+3*e);++u)var l=t(s,e,r)-i,s=s-l/c;i=s}else if(0===c)i=s;else{var s=u,u=u+.1,f=0;do{0<(c=t(l=s+(u-s)/2,e,r)-i)?u=l:s=l}while(1e-7<Math.abs(c)&&10>++f);i=l}return t(i,n,a)}}}}(),C=function(){function t(t,e){return 0===t||1===t?t:-Math.pow(2,10*(t-1))*Math.sin(2*(t-1-e/(2*Math.PI)*Math.asin(1))*Math.PI/e)}var e,n="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),r={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],t],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(e,n){return 1-t(1-e,n)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(e,n){return.5>e?t(2*e,n)/2:1-t(-2*e+2,n)/2}]},a={linear:F(.25,.25,.75,.75)},o={};for(e in r)o.type=e,r[o.type].forEach(function(t){return function(e,r){a["ease"+t.type+n[r]]=j.fnc(e)?e:F.apply(u,e)}}(o)),o={type:o.type};return a}(),L={css:function(t,e,n){return t.style[e]=n},attribute:function(t,e,n){return t.setAttribute(e,n)},object:function(t,e,n){return t[e]=n},transform:function(t,e,n,r,a){r[a]||(r[a]=[]),r[a].push(e+"("+n+")")}},T=[],_=0,N=function(){function t(){_=requestAnimationFrame(e)}function e(e){var n=T.length;if(n){for(var r=0;r<n;)T[r]&&T[r].tick(e),r++;t()}else cancelAnimationFrame(_),_=0}return t}();return S.version="2.2.0",S.speed=1,S.running=T,S.remove=function(t){t=w(t);for(var e=T.length;e--;)for(var n=T[e],r=n.animations,o=r.length;o--;)a(t,r[o].animatable.target)&&(r.splice(o,1),r.length||n.pause())},S.getValue=p,S.path=function(e,n){var r=j.str(e)?t(e)[0]:e,a=n||100;return function(t){return{el:r,property:t,totalLength:y(r)*(a/100)}}},S.setDashoffset=function(t){var e=y(t);return t.setAttribute("stroke-dasharray",e),e},S.bezier=F,S.easings=C,S.timeline=function(t){var e=S(t);return e.pause(),e.duration=0,e.add=function(n){return e.children.forEach(function(t){t.began=!0,t.completed=!0}),r(n).forEach(function(n){var r=s(n,i(P,t||{}));r.targets=r.targets||t.targets,n=e.duration;var a=r.offset;r.autoplay=!1,r.direction=e.direction,r.offset=j.und(a)?n:m(a,n),e.began=!0,e.completed=!0,e.seek(r.offset),(r=S(r)).began=!0,r.completed=!0,r.duration>n&&(e.duration=r.duration),e.children.push(r)}),e.seek(0),e.reset(),e.autoplay&&e.restart(),e},e},S.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},S})?r.apply(e,a):r)||(t.exports=o)}).call(this,n(64))},189:function(t,e,n){"use strict";var r=n(5),a=n.n(r),o=n(0),i=n.n(o),u=n(1),s=n.n(u),c=n(188),l=n.n(c),f=function(t){function e(){return t.apply(this,arguments)||this}a()(e,t);var n=e.prototype;return n.componentDidMount=function(){if(!this.props.animatingOut){var t=this.el.querySelector(".page--post__content");l.a.timeline().add({delay:500,begin:function(){t.style.display="block"},targets:t,translateY:["50vh",0],elasticity:50,duration:1200}).add({targets:t.querySelectorAll("li"),opacity:[0,1],delay:function(t,e){return 200*e},duration:250,easing:"easeInSine",offset:"-=100"})}},n.render=function(){var t=this,e=this.props,n=e.title,r=e.children;return i.a.createElement("div",{className:"page--post",ref:function(e){return t.el=e}},i.a.createElement("div",null,i.a.createElement("div",{className:"page--post__header"},i.a.createElement("h1",null,n)),i.a.createElement("div",{className:"page--post__content",style:{display:"none"}},i.a.createElement("div",null,r))))},e}(o.Component);f.propTypes={children:s.a.node,title:s.a.string},e.a=f},193:function(t,e,n){t.exports=n.p+"static/reaction-gif-thumbnail-00ec6db9f5bfe80e60d7b75cc13e4e64.gif"}}]);
//# sourceMappingURL=component---src-pages-portfolio-reaction-gif-generator-index-js-94771c4a2cbc77333df7.js.map