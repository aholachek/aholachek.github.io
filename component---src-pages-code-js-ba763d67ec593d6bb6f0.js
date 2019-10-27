(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{179:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),i=r(189),o=r(93),u=r.n(o),c=[{text:"Github",to:"https://github.com/aholachek",description:"A few interesting open source libraries",external:!0},{text:"Codepen",to:"https://codepen.io/aholachek",description:"Tiny front-end projects and brainstorms",external:!0},{text:"D3 bl.ocks",to:"https://bl.ocks.org/aholachek",description:"Experiments with visualization techniques",external:!0}];e.default=function(t){var e=t.animatingOut;return a.a.createElement(n.Fragment,null,a.a.createElement(u.a,{title:"Alex Holachek | Code"}),a.a.createElement(i.a,{title:"Code",links:c,animatingOut:e,simple:!0}))}},187:function(t,e,r){(function(r){var n,a,i,o={scope:{}};o.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,r){if(r.get||r.set)throw new TypeError("ES3 does not support getters and setters.");t!=Array.prototype&&t!=Object.prototype&&(t[e]=r.value)},o.getGlobal=function(t){return"undefined"!=typeof window&&window===t?t:void 0!==r&&null!=r?r:t},o.global=o.getGlobal(this),o.SYMBOL_PREFIX="jscomp_symbol_",o.initSymbol=function(){o.initSymbol=function(){},o.global.Symbol||(o.global.Symbol=o.Symbol)},o.symbolCounter_=0,o.Symbol=function(t){return o.SYMBOL_PREFIX+(t||"")+o.symbolCounter_++},o.initSymbolIterator=function(){o.initSymbol();var t=o.global.Symbol.iterator;t||(t=o.global.Symbol.iterator=o.global.Symbol("iterator")),"function"!=typeof Array.prototype[t]&&o.defineProperty(Array.prototype,t,{configurable:!0,writable:!0,value:function(){return o.arrayIterator(this)}}),o.initSymbolIterator=function(){}},o.arrayIterator=function(t){var e=0;return o.iteratorPrototype(function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}})},o.iteratorPrototype=function(t){return o.initSymbolIterator(),(t={next:t})[o.global.Symbol.iterator]=function(){return this},t},o.array=o.array||{},o.iteratorFromArray=function(t,e){o.initSymbolIterator(),t instanceof String&&(t+="");var r=0,n={next:function(){if(r<t.length){var a=r++;return{value:e(a,t[a]),done:!1}}return n.next=function(){return{done:!0,value:void 0}},n.next()}};return n[Symbol.iterator]=function(){return n},n},o.polyfill=function(t,e,r,n){if(e){for(r=o.global,t=t.split("."),n=0;n<t.length-1;n++){var a=t[n];a in r||(r[a]={}),r=r[a]}(e=e(n=r[t=t[t.length-1]]))!=n&&null!=e&&o.defineProperty(r,t,{configurable:!0,writable:!0,value:e})}},o.polyfill("Array.prototype.keys",function(t){return t||function(){return o.iteratorFromArray(this,function(t){return t})}},"es6-impl","es3");var u=this;a=[],void 0===(i="function"==typeof(n=function(){function t(t){if(!P.col(t))try{return document.querySelectorAll(t)}catch(t){}}function e(t,e){for(var r=t.length,n=2<=arguments.length?arguments[1]:void 0,a=[],i=0;i<r;i++)if(i in t){var o=t[i];e.call(n,o,i,t)&&a.push(o)}return a}function r(t){return t.reduce(function(t,e){return t.concat(P.arr(e)?r(e):e)},[])}function n(e){return P.arr(e)?e:(P.str(e)&&(e=t(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function a(t,e){return t.some(function(t){return t===e})}function i(t){var e,r={};for(e in t)r[e]=t[e];return r}function o(t,e){var r,n=i(t);for(r in t)n[r]=e.hasOwnProperty(r)?e[r]:t[r];return n}function c(t,e){var r,n=i(t);for(r in e)n[r]=P.und(t[r])?e[r]:t[r];return n}function l(t){if(t=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t))return t[2]}function s(t,e){return P.fnc(t)?t(e.target,e.id,e.total):t}function f(t,e){if(e in t.style)return getComputedStyle(t).getPropertyValue(e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function d(t,e){return P.dom(t)&&a(_,e)?"transform":P.dom(t)&&(t.getAttribute(e)||P.svg(t)&&t[e])?"attribute":P.dom(t)&&"transform"!==e&&f(t,e)?"css":null!=t[e]?"object":void 0}function p(t,r){switch(d(t,r)){case"transform":return function(t,r){var n=function(t){return-1<t.indexOf("translate")||"perspective"===t?"px":-1<t.indexOf("rotate")||-1<t.indexOf("skew")?"deg":void 0}(r),n=-1<r.indexOf("scale")?1:0+n;if(!(t=t.style.transform))return n;for(var a=[],i=[],o=[],u=/(\w+)\((.+?)\)/g;a=u.exec(t);)i.push(a[1]),o.push(a[2]);return(t=e(o,function(t,e){return i[e]===r})).length?t[0]:n}(t,r);case"css":return f(t,r);case"attribute":return t.getAttribute(r)}return t[r]||0}function m(t,e){var r=/^(\*=|\+=|-=)/.exec(t);if(!r)return t;var n=l(t)||0;switch(e=parseFloat(e),t=parseFloat(t.replace(r[0],"")),r[0][0]){case"+":return e+t+n;case"-":return e-t+n;case"*":return e*t+n}}function g(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function h(t){t=t.points;for(var e,r=0,n=0;n<t.numberOfItems;n++){var a=t.getItem(n);0<n&&(r+=g(e,a)),e=a}return r}function y(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return 2*Math.PI*t.getAttribute("r");case"rect":return 2*t.getAttribute("width")+2*t.getAttribute("height");case"line":return g({x:t.getAttribute("x1"),y:t.getAttribute("y1")},{x:t.getAttribute("x2"),y:t.getAttribute("y2")});case"polyline":return h(t);case"polygon":var e=t.points;return h(t)+g(e.getItem(e.numberOfItems-1),e.getItem(0))}}function v(t,e){function r(r){return r=void 0===r?0:r,t.el.getPointAtLength(1<=e+r?e+r:0)}var n=r(),a=r(-1),i=r(1);switch(t.property){case"x":return n.x;case"y":return n.y;case"angle":return 180*Math.atan2(i.y-a.y,i.x-a.x)/Math.PI}}function b(t,e){var r,n=/-?\d*\.?\d+/g;if(r=P.pth(t)?t.totalLength:t,P.col(r))if(P.rgb(r)){var a=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r);r=a?"rgba("+a[1]+",1)":r}else r=P.hex(r)?function(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,r,n){return e+e+r+r+n+n});var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);t=parseInt(e[1],16);var r=parseInt(e[2],16),e=parseInt(e[3],16);return"rgba("+t+","+r+","+e+",1)"}(r):P.hsl(r)?function(t){function e(t,e,r){return 0>r&&(r+=1),1<r&&--r,r<1/6?t+6*(e-t)*r:.5>r?e:r<2/3?t+(e-t)*(2/3-r)*6:t}var r=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t);t=parseInt(r[1])/360;var n=parseInt(r[2])/100,a=parseInt(r[3])/100,r=r[4]||1;if(0==n)a=n=t=a;else{var i=.5>a?a*(1+n):a+n-a*n,o=2*a-i,a=e(o,i,t+1/3),n=e(o,i,t);t=e(o,i,t-1/3)}return"rgba("+255*a+","+255*n+","+255*t+","+r+")"}(r):void 0;else a=(a=l(r))?r.substr(0,r.length-a.length):r,r=e&&!/\s/g.test(r)?a+e:a;return{original:r+="",numbers:r.match(n)?r.match(n).map(Number):[0],strings:P.str(t)||e?r.split(n):[]}}function x(t){return e(t=t?r(P.arr(t)?t.map(n):n(t)):[],function(t,e,r){return r.indexOf(t)===e})}function w(t,e){var r=i(e);if(P.arr(t)){var a=t.length;2!==a||P.obj(t[0])?P.fnc(e.duration)||(r.duration=e.duration/a):t={value:t}}return n(t).map(function(t,r){return r=r?0:e.delay,t=P.obj(t)&&!P.pth(t)?t:{value:t},P.und(t.delay)&&(t.delay=r),t}).map(function(t){return c(t,r)})}function E(t,e){var r;return t.tweens.map(function(n){var a=(n=function(t,e){var r,n={};for(r in t){var a=s(t[r],e);P.arr(a)&&1===(a=a.map(function(t){return s(t,e)})).length&&(a=a[0]),n[r]=a}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(n,e)).value,i=p(e.target,t.name),o=r?r.to.original:i,o=P.arr(a)?a[0]:o,u=m(P.arr(a)?a[1]:a,o),i=l(u)||l(o)||l(i);return n.from=b(o,i),n.to=b(u,i),n.start=r?r.end:t.offset,n.end=n.start+n.delay+n.duration,n.easing=function(t){return P.arr(t)?N.apply(this,t):j[t]}(n.easing),n.elasticity=(1e3-Math.min(Math.max(n.elasticity,1),999))/1e3,n.isPath=P.pth(a),n.isColor=P.col(n.from.original),n.isColor&&(n.round=1),r=n})}function A(t,e,r,n){var a="delay"===t;return e.length?(a?Math.min:Math.max).apply(Math,e.map(function(e){return e[t]})):a?n.delay:r.offset+n.delay+n.duration}function k(t){var n,a=o(I,t),i=o(M,t),u=function(t){var e=x(t);return e.map(function(t,r){return{target:t,id:r,total:e.length}})}(t.targets),l=[],s=c(a,i);for(n in t)s.hasOwnProperty(n)||"targets"===n||l.push({name:n,offset:s.offset,tweens:w(t[n],i)});return t=function(t,n){return e(r(t.map(function(t){return n.map(function(e){var r=d(t.target,e.name);if(r){var n=E(e,t);e={type:r,property:e.name,animatable:t,tweens:n,duration:n[n.length-1].end,delay:n[0].delay}}else e=void 0;return e})})),function(t){return!P.und(t)})}(u,l),c(a,{children:[],animatables:u,animations:t,duration:A("duration",t,a,i),delay:A("delay",t,a,i)})}function S(t){function r(){return window.Promise&&new Promise(function(t){return d=t})}function n(t){return m.reversed?m.duration-t:t}function a(t){for(var r=0,n={},a=m.animations,i=a.length;r<i;){var o=a[r],u=o.animatable,c=o.tweens,l=c.length-1,s=c[l];l&&(s=e(c,function(e){return t<e.end})[0]||s);for(var c=Math.min(Math.max(t-s.start-s.delay,0),s.duration)/s.duration,d=isNaN(c)?1:s.easing(c,s.elasticity),c=s.to.strings,p=s.round,l=[],g=void 0,g=s.to.numbers.length,h=0;h<g;h++){var y=void 0,y=s.to.numbers[h],b=s.from.numbers[h],y=s.isPath?v(s.value,d*y):b+d*(y-b);p&&(s.isColor&&2<h||(y=Math.round(y*p)/p)),l.push(y)}if(s=c.length)for(g=c[0],d=0;d<s;d++)p=c[d+1],h=l[d],isNaN(h)||(g=p?g+(h+p):g+(h+" "));else g=l[0];C[o.type](u.target,o.property,g,n,u.id),o.currentValue=g,r++}if(r=Object.keys(n).length)for(a=0;a<r;a++)O||(O=f(document.body,"transform")?"transform":"-webkit-transform"),m.animatables[a].target.style[O]=n[a].join(" ");m.currentTime=t,m.progress=t/m.duration*100}function i(t){m[t]&&m[t](m)}function o(){m.remaining&&!0!==m.remaining&&m.remaining--}function u(t){var e=m.duration,u=m.offset,f=u+m.delay,g=m.currentTime,h=m.reversed,y=n(t);if(m.children.length){var v=m.children,b=v.length;if(y>=m.currentTime)for(var x=0;x<b;x++)v[x].seek(y);else for(;b--;)v[b].seek(y)}(y>=f||!e)&&(m.began||(m.began=!0,i("begin")),i("run")),y>u&&y<e?a(y):(y<=u&&0!==g&&(a(0),h&&o()),(y>=e&&g!==e||!e)&&(a(e),h||o())),i("update"),t>=e&&(m.remaining?(l=c,"alternate"===m.direction&&(m.reversed=!m.reversed)):(m.pause(),m.completed||(m.completed=!0,i("complete"),"Promise"in window&&(d(),p=r()))),s=0)}t=void 0===t?{}:t;var c,l,s=0,d=null,p=r(),m=k(t);return m.reset=function(){var t=m.direction,e=m.loop;for(m.currentTime=0,m.progress=0,m.paused=!0,m.began=!1,m.completed=!1,m.reversed="reverse"===t,m.remaining="alternate"===t&&1===e?2:e,a(0),t=m.children.length;t--;)m.children[t].reset()},m.tick=function(t){c=t,l||(l=c),u((s+c-l)*S.speed)},m.seek=function(t){u(n(t))},m.pause=function(){var t=T.indexOf(m);-1<t&&T.splice(t,1),m.paused=!0},m.play=function(){m.paused&&(m.paused=!1,l=0,s=n(m.currentTime),T.push(m),F||L())},m.reverse=function(){m.reversed=!m.reversed,l=0,s=n(m.currentTime)},m.restart=function(){m.pause(),m.reset(),m.play()},m.finished=p,m.reset(),m.autoplay&&m.play(),m}var O,I={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},M={duration:1e3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},_="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),P={arr:function(t){return Array.isArray(t)},obj:function(t){return-1<Object.prototype.toString.call(t).indexOf("Object")},pth:function(t){return P.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},dom:function(t){return t.nodeType||P.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return P.hex(t)||P.rgb(t)||P.hsl(t)}},N=function(){function t(t,e,r){return(((1-3*r+3*e)*t+(3*r-6*e))*t+3*e)*t}return function(e,r,n,a){if(0<=e&&1>=e&&0<=n&&1>=n){var i=new Float32Array(11);if(e!==r||n!==a)for(var o=0;11>o;++o)i[o]=t(.1*o,e,n);return function(o){if(e===r&&n===a)return o;if(0===o)return 0;if(1===o)return 1;for(var u=0,c=1;10!==c&&i[c]<=o;++c)u+=.1;var c=u+(o-i[--c])/(i[c+1]-i[c])*.1,l=3*(1-3*n+3*e)*c*c+2*(3*n-6*e)*c+3*e;if(.001<=l){for(u=0;4>u&&0!=(l=3*(1-3*n+3*e)*c*c+2*(3*n-6*e)*c+3*e);++u)var s=t(c,e,n)-o,c=c-s/l;o=c}else if(0===l)o=c;else{var c=u,u=u+.1,f=0;do{0<(l=t(s=c+(u-c)/2,e,n)-o)?u=s:c=s}while(1e-7<Math.abs(l)&&10>++f);o=s}return t(o,r,a)}}}}(),j=function(){function t(t,e){return 0===t||1===t?t:-Math.pow(2,10*(t-1))*Math.sin(2*(t-1-e/(2*Math.PI)*Math.asin(1))*Math.PI/e)}var e,r="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),n={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],t],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(e,r){return 1-t(1-e,r)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(e,r){return.5>e?t(2*e,r)/2:1-t(-2*e+2,r)/2}]},a={linear:N(.25,.25,.75,.75)},i={};for(e in n)i.type=e,n[i.type].forEach(function(t){return function(e,n){a["ease"+t.type+r[n]]=P.fnc(e)?e:N.apply(u,e)}}(i)),i={type:i.type};return a}(),C={css:function(t,e,r){return t.style[e]=r},attribute:function(t,e,r){return t.setAttribute(e,r)},object:function(t,e,r){return t[e]=r},transform:function(t,e,r,n,a){n[a]||(n[a]=[]),n[a].push(e+"("+r+")")}},T=[],F=0,L=function(){function t(){F=requestAnimationFrame(e)}function e(e){var r=T.length;if(r){for(var n=0;n<r;)T[n]&&T[n].tick(e),n++;t()}else cancelAnimationFrame(F),F=0}return t}();return S.version="2.2.0",S.speed=1,S.running=T,S.remove=function(t){t=x(t);for(var e=T.length;e--;)for(var r=T[e],n=r.animations,i=n.length;i--;)a(t,n[i].animatable.target)&&(n.splice(i,1),n.length||r.pause())},S.getValue=p,S.path=function(e,r){var n=P.str(e)?t(e)[0]:e,a=r||100;return function(t){return{el:n,property:t,totalLength:y(n)*(a/100)}}},S.setDashoffset=function(t){var e=y(t);return t.setAttribute("stroke-dasharray",e),e},S.bezier=N,S.easings=j,S.timeline=function(t){var e=S(t);return e.pause(),e.duration=0,e.add=function(r){return e.children.forEach(function(t){t.began=!0,t.completed=!0}),n(r).forEach(function(r){var n=c(r,o(M,t||{}));n.targets=n.targets||t.targets,r=e.duration;var a=n.offset;n.autoplay=!1,n.direction=e.direction,n.offset=P.und(a)?r:m(a,r),e.began=!0,e.completed=!0,e.seek(n.offset),(n=S(n)).began=!0,n.completed=!0,n.duration>r&&(e.duration=n.duration),e.children.push(n)}),e.seek(0),e.reset(),e.autoplay&&e.restart(),e},e},S.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},S})?n.apply(e,a):n)||(t.exports=i)}).call(this,r(63))},189:function(t,e,r){"use strict";r(45),r(44);var n=r(5),a=r.n(n),i=r(0),o=r.n(i),u=r(1),c=r.n(u),l=r(187),s=r.n(l),f=r(8),d=r.n(f),p=function(t){var e=t.skills,r=t.text,n=t.img,a=t.external,i=t.to,u=t.description,c=t.simple,l=t.tag,s=o.a.createElement("div",null,o.a.createElement("div",{className:"card__padding"},l&&o.a.createElement("div",{className:"card__tag"},l),o.a.createElement("div",{className:"card__header"},o.a.createElement("h2",null,r),!!e&&function(t){return o.a.createElement("ul",{className:"card__skills"},t.map(function(e,r){return o.a.createElement("li",null,e,r===t.length-1?"":",")}))}(e),!!u&&function(t){return o.a.createElement("p",{className:"card__description",dangerouslySetInnerHTML:{__html:t}})}(u)),!!n&&o.a.createElement("img",{className:"card__img",src:n})));return o.a.createElement("li",{style:{opacity:0},key:i,className:"card "+(c?"card--simple":"")},a?o.a.createElement("a",{href:i},s):o.a.createElement(d.a,{to:i},s))};p.defaultProps={},p.propTypes={};var m=p,g=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))||this).state={},e}a()(e,t);var r=e.prototype;return r.componentDidMount=function(){if(!this.props.animatingOut){var t=this.el.querySelector(".page--list__content");s()({targets:t.querySelectorAll(".card"),opacity:{value:1,duration:300,easing:"easeInSine"},translateY:[50,0],delay:function(t,e){return 100*e+300},duration:1e3,elasticity:500})}},r.render=function(){var t=this,e=this.props,r=e.links,n=e.title,a=e.simple;return o.a.createElement("div",{className:"page--list",ref:function(e){return t.el=e}},o.a.createElement("div",null,o.a.createElement("div",{className:"page--list__header"},o.a.createElement("h1",null,n)),o.a.createElement("div",{className:"page--list__content"},o.a.createElement("div",null,o.a.createElement("ul",{className:"card-grid "+(a?"card-grid--simple":""),ref:function(e){t.list=e}},r.map(function(t){return o.a.createElement(m,Object.assign({},t,{simple:a}))}))))))},e}(i.Component);g.propTypes={title:c.a.string,links:c.a.array,animatingOut:c.a.bool};e.a=g}}]);
//# sourceMappingURL=component---src-pages-code-js-ba763d67ec593d6bb6f0.js.map