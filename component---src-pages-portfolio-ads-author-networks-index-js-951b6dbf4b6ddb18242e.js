(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{173:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n.n(r),o=n(0),i=n.n(o),u=(n(1),n(180)),s=n(208),l=n.n(s),c=n(209),f=n.n(c),d=n(210),h=n.n(d),p=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return i.a.createElement(u.a,{title:"Rethinking the ADS author network visualizations"},i.a.createElement("p",null,"I created a new type of interactive author network visualization for the Astrophysics Data System and built it in D3."),i.a.createElement("h2",null,"The Problem: Force Directed Chaos"),i.a.createElement("p",null,"For any set of documents in the Astrophysics Data System, you can construct an author network in which the nodes represent authors and links represent co-authorship relationships between them. Ideally, this information could quickly answer questions like:",i.a.createElement("ol",null,i.a.createElement("li",null,"Which authors in a field tend to collaborate the most broadly?"),i.a.createElement("li",null,"Which collaborations over the course of an author's career have resulted in the most influential papers?"),i.a.createElement("li",null,"What discrete sub-topics has an author focused on over the course of his or her career?"))),i.a.createElement("figure",null,i.a.createElement("img",{src:l.a,alt:"the original ads author network"}),i.a.createElement("figcaption",null,"The original ADS author network visualization")),i.a.createElement("p",null,"When I first started working at ADS, the author network was visualized using the somewhat crowded force-directed layout shown above, which did not do a great job of answering those questions."),i.a.createElement("h2",null,"My First Redesign: Return of the Hairball"),i.a.createElement("figure",null,i.a.createElement("img",{src:f.a,alt:"my first redesign of the network"}),i.a.createElement("figcaption",null,"Redesign attempt #1")),i.a.createElement("p",null,"As one of my first data visualization tasks ever, I tried to redo the graph visualization in order to make it more readable. I removed the circles, and fiddled with the force directed network settings to make groups more apparent. The user could zoom, pan and drag nodes to reorganize the network in order to explore the relationships between authors."),i.a.createElement("p",null,"So, for instance, in this network, unlike the first one, you can see that Michael Kurtz works with two distinct groups. Still, this version was quite similar to the original implementation. In addition, the animation of the nodes finding their points of equilibrium was very taxing for the browser, as there could be hundreds of author nodes and thousands of links in a single visualization."),i.a.createElement("h2",null,"The Solution: Automatic Group Detection and a Hierarchical Layout"),i.a.createElement("p",null,i.a.createElement("a",{href:"https://ui.adsabs.harvard.edu/#search/q=%20author%3A%22kurtz%2Cm%22&sort=date%20desc%2C%20bibcode%20desc/author-network",className:"lead",rel:"noopener noreferrer",target:"_blank"},"Check out the live version here.")),i.a.createElement("p",null,"I wanted a visualization that could support user exploration into details like the zoomable node-link graph, but one which could also tell you at a glance some important features of the network. I started reading a bit about graph analysis and realized that some of the features I was relying on the force-directed node layout to show the user (like groups and collaborator nodes) could actually be calculated more efficiently using algorithms. I used the Python NetworkX library to add group information to the data."),i.a.createElement("p",null,"I realized that there were new dimensions to the data that the visualization could show. The papers themselves that formed the basis of the node-link structure could be immediately accessible to the user, possibly allowing the network visualization to be an alternate way to view the results list. In addition, cumulative characteristics of the groups—like long-term influence (citations), or short term popularity (reads), could also be useful to show."),i.a.createElement("p",null,"I ended up combining d3's sunburst layout and the hierarchical edge bundling layout to make a two-level ring structure that shows individual authors along the outer radius, and allows the user to view group summaries along the inner radius. You can toggle on and off a link layer that shows inter-group linkages and thus any important collaborator nodes."),i.a.createElement("p",null,"The video below shows the same data as the above two graphs—the collaboration network for the astrophysicist Michael Kurtz. The obvious two groups of the node-link network above here become three groups (the purple on the one hand and the yellow and red on the other). By clicking the link overlay checkbox, you can actually see that the yellow and red groups have cowritten many papers together, and thus the two groups are closely related, yet distinct."),i.a.createElement("video",{src:h.a,autoplay:!0,controls:!0}))},t}(o.Component);t.default=p},179:function(e,t,n){(function(n){var r,a,o,i={scope:{}};i.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){if(n.get||n.set)throw new TypeError("ES3 does not support getters and setters.");e!=Array.prototype&&e!=Object.prototype&&(e[t]=n.value)},i.getGlobal=function(e){return"undefined"!=typeof window&&window===e?e:void 0!==n&&null!=n?n:e},i.global=i.getGlobal(this),i.SYMBOL_PREFIX="jscomp_symbol_",i.initSymbol=function(){i.initSymbol=function(){},i.global.Symbol||(i.global.Symbol=i.Symbol)},i.symbolCounter_=0,i.Symbol=function(e){return i.SYMBOL_PREFIX+(e||"")+i.symbolCounter_++},i.initSymbolIterator=function(){i.initSymbol();var e=i.global.Symbol.iterator;e||(e=i.global.Symbol.iterator=i.global.Symbol("iterator")),"function"!=typeof Array.prototype[e]&&i.defineProperty(Array.prototype,e,{configurable:!0,writable:!0,value:function(){return i.arrayIterator(this)}}),i.initSymbolIterator=function(){}},i.arrayIterator=function(e){var t=0;return i.iteratorPrototype(function(){return t<e.length?{done:!1,value:e[t++]}:{done:!0}})},i.iteratorPrototype=function(e){return i.initSymbolIterator(),(e={next:e})[i.global.Symbol.iterator]=function(){return this},e},i.array=i.array||{},i.iteratorFromArray=function(e,t){i.initSymbolIterator(),e instanceof String&&(e+="");var n=0,r={next:function(){if(n<e.length){var a=n++;return{value:t(a,e[a]),done:!1}}return r.next=function(){return{done:!0,value:void 0}},r.next()}};return r[Symbol.iterator]=function(){return r},r},i.polyfill=function(e,t,n,r){if(t){for(n=i.global,e=e.split("."),r=0;r<e.length-1;r++){var a=e[r];a in n||(n[a]={}),n=n[a]}(t=t(r=n[e=e[e.length-1]]))!=r&&null!=t&&i.defineProperty(n,e,{configurable:!0,writable:!0,value:t})}},i.polyfill("Array.prototype.keys",function(e){return e||function(){return i.iteratorFromArray(this,function(e){return e})}},"es6-impl","es3");var u=this;a=[],void 0===(o="function"==typeof(r=function(){function e(e){if(!z.col(e))try{return document.querySelectorAll(e)}catch(e){}}function t(e,t){for(var n=e.length,r=2<=arguments.length?arguments[1]:void 0,a=[],o=0;o<n;o++)if(o in e){var i=e[o];t.call(r,i,o,e)&&a.push(i)}return a}function n(e){return e.reduce(function(e,t){return e.concat(z.arr(t)?n(t):t)},[])}function r(t){return z.arr(t)?t:(z.str(t)&&(t=e(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function a(e,t){return e.some(function(e){return e===t})}function o(e){var t,n={};for(t in e)n[t]=e[t];return n}function i(e,t){var n,r=o(e);for(n in e)r[n]=t.hasOwnProperty(n)?t[n]:e[n];return r}function s(e,t){var n,r=o(e);for(n in t)r[n]=z.und(e[n])?t[n]:e[n];return r}function l(e){if(e=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e))return e[2]}function c(e,t){return z.fnc(e)?e(t.target,t.id,t.total):e}function f(e,t){if(t in e.style)return getComputedStyle(e).getPropertyValue(t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function d(e,t){return z.dom(e)&&a(O,t)?"transform":z.dom(e)&&(e.getAttribute(t)||z.svg(e)&&e[t])?"attribute":z.dom(e)&&"transform"!==t&&f(e,t)?"css":null!=e[t]?"object":void 0}function h(e,n){switch(d(e,n)){case"transform":return function(e,n){var r=function(e){return-1<e.indexOf("translate")||"perspective"===e?"px":-1<e.indexOf("rotate")||-1<e.indexOf("skew")?"deg":void 0}(n),r=-1<n.indexOf("scale")?1:0+r;if(!(e=e.style.transform))return r;for(var a=[],o=[],i=[],u=/(\w+)\((.+?)\)/g;a=u.exec(e);)o.push(a[1]),i.push(a[2]);return(e=t(i,function(e,t){return o[t]===n})).length?e[0]:r}(e,n);case"css":return f(e,n);case"attribute":return e.getAttribute(n)}return e[n]||0}function p(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=l(e)||0;switch(t=parseFloat(t),e=parseFloat(e.replace(n[0],"")),n[0][0]){case"+":return t+e+r;case"-":return t-e+r;case"*":return t*e+r}}function m(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function g(e){e=e.points;for(var t,n=0,r=0;r<e.numberOfItems;r++){var a=e.getItem(r);0<r&&(n+=m(t,a)),t=a}return n}function y(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return 2*Math.PI*e.getAttribute("r");case"rect":return 2*e.getAttribute("width")+2*e.getAttribute("height");case"line":return m({x:e.getAttribute("x1"),y:e.getAttribute("y1")},{x:e.getAttribute("x2"),y:e.getAttribute("y2")});case"polyline":return g(e);case"polygon":var t=e.points;return g(e)+m(t.getItem(t.numberOfItems-1),t.getItem(0))}}function v(e,t){function n(n){return n=void 0===n?0:n,e.el.getPointAtLength(1<=t+n?t+n:0)}var r=n(),a=n(-1),o=n(1);switch(e.property){case"x":return r.x;case"y":return r.y;case"angle":return 180*Math.atan2(o.y-a.y,o.x-a.x)/Math.PI}}function b(e,t){var n,r=/-?\d*\.?\d+/g;if(n=z.pth(e)?e.totalLength:e,z.col(n))if(z.rgb(n)){var a=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);n=a?"rgba("+a[1]+",1)":n}else n=z.hex(n)?function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,r){return t+t+n+n+r+r});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);e=parseInt(t[1],16);var n=parseInt(t[2],16),t=parseInt(t[3],16);return"rgba("+e+","+n+","+t+",1)"}(n):z.hsl(n)?function(e){function t(e,t,n){return 0>n&&(n+=1),1<n&&--n,n<1/6?e+6*(t-e)*n:.5>n?t:n<2/3?e+(t-e)*(2/3-n)*6:e}var n=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e);e=parseInt(n[1])/360;var r=parseInt(n[2])/100,a=parseInt(n[3])/100,n=n[4]||1;if(0==r)a=r=e=a;else{var o=.5>a?a*(1+r):a+r-a*r,i=2*a-o,a=t(i,o,e+1/3),r=t(i,o,e);e=t(i,o,e-1/3)}return"rgba("+255*a+","+255*r+","+255*e+","+n+")"}(n):void 0;else a=(a=l(n))?n.substr(0,n.length-a.length):n,n=t&&!/\s/g.test(n)?a+t:a;return{original:n+="",numbers:n.match(r)?n.match(r).map(Number):[0],strings:z.str(e)||t?n.split(r):[]}}function w(e){return t(e=e?n(z.arr(e)?e.map(r):r(e)):[],function(e,t,n){return n.indexOf(e)===t})}function k(e,t){var n=o(t);if(z.arr(e)){var a=e.length;2!==a||z.obj(e[0])?z.fnc(t.duration)||(n.duration=t.duration/a):e={value:e}}return r(e).map(function(e,n){return n=n?0:t.delay,e=z.obj(e)&&!z.pth(e)?e:{value:e},z.und(e.delay)&&(e.delay=n),e}).map(function(e){return s(e,n)})}function x(e,t){var n;return e.tweens.map(function(r){var a=(r=function(e,t){var n,r={};for(n in e){var a=c(e[n],t);z.arr(a)&&1===(a=a.map(function(e){return c(e,t)})).length&&(a=a[0]),r[n]=a}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}(r,t)).value,o=h(t.target,e.name),i=n?n.to.original:o,i=z.arr(a)?a[0]:i,u=p(z.arr(a)?a[1]:a,i),o=l(u)||l(i)||l(o);return r.from=b(i,o),r.to=b(u,o),r.start=n?n.end:e.offset,r.end=r.start+r.delay+r.duration,r.easing=function(e){return z.arr(e)?T.apply(this,e):C[e]}(r.easing),r.elasticity=(1e3-Math.min(Math.max(r.elasticity,1),999))/1e3,r.isPath=z.pth(a),r.isColor=z.col(r.from.original),r.isColor&&(r.round=1),n=r})}function E(e,t,n,r){var a="delay"===e;return t.length?(a?Math.min:Math.max).apply(Math,t.map(function(t){return t[e]})):a?r.delay:n.offset+r.delay+r.duration}function I(e){var r,a=i(M,e),o=i(P,e),u=function(e){var t=w(e);return t.map(function(e,n){return{target:e,id:n,total:t.length}})}(e.targets),l=[],c=s(a,o);for(r in e)c.hasOwnProperty(r)||"targets"===r||l.push({name:r,offset:c.offset,tweens:k(e[r],o)});return e=function(e,r){return t(n(e.map(function(e){return r.map(function(t){var n=d(e.target,t.name);if(n){var r=x(t,e);t={type:n,property:t.name,animatable:e,tweens:r,duration:r[r.length-1].end,delay:r[0].delay}}else t=void 0;return t})})),function(e){return!z.und(e)})}(u,l),s(a,{children:[],animatables:u,animations:e,duration:E("duration",e,a,o),delay:E("delay",e,a,o)})}function A(e){function n(){return window.Promise&&new Promise(function(e){return d=e})}function r(e){return p.reversed?p.duration-e:e}function a(e){for(var n=0,r={},a=p.animations,o=a.length;n<o;){var i=a[n],u=i.animatable,s=i.tweens,l=s.length-1,c=s[l];l&&(c=t(s,function(t){return e<t.end})[0]||c);for(var s=Math.min(Math.max(e-c.start-c.delay,0),c.duration)/c.duration,d=isNaN(s)?1:c.easing(s,c.elasticity),s=c.to.strings,h=c.round,l=[],m=void 0,m=c.to.numbers.length,g=0;g<m;g++){var y=void 0,y=c.to.numbers[g],b=c.from.numbers[g],y=c.isPath?v(c.value,d*y):b+d*(y-b);h&&(c.isColor&&2<g||(y=Math.round(y*h)/h)),l.push(y)}if(c=s.length)for(m=s[0],d=0;d<c;d++)h=s[d+1],g=l[d],isNaN(g)||(m=h?m+(g+h):m+(g+" "));else m=l[0];F[i.type](u.target,i.property,m,r,u.id),i.currentValue=m,n++}if(n=Object.keys(r).length)for(a=0;a<n;a++)S||(S=f(document.body,"transform")?"transform":"-webkit-transform"),p.animatables[a].target.style[S]=r[a].join(" ");p.currentTime=e,p.progress=e/p.duration*100}function o(e){p[e]&&p[e](p)}function i(){p.remaining&&!0!==p.remaining&&p.remaining--}function u(e){var t=p.duration,u=p.offset,f=u+p.delay,m=p.currentTime,g=p.reversed,y=r(e);if(p.children.length){var v=p.children,b=v.length;if(y>=p.currentTime)for(var w=0;w<b;w++)v[w].seek(y);else for(;b--;)v[b].seek(y)}(y>=f||!t)&&(p.began||(p.began=!0,o("begin")),o("run")),y>u&&y<t?a(y):(y<=u&&0!==m&&(a(0),g&&i()),(y>=t&&m!==t||!t)&&(a(t),g||i())),o("update"),e>=t&&(p.remaining?(l=s,"alternate"===p.direction&&(p.reversed=!p.reversed)):(p.pause(),p.completed||(p.completed=!0,o("complete"),"Promise"in window&&(d(),h=n()))),c=0)}e=void 0===e?{}:e;var s,l,c=0,d=null,h=n(),p=I(e);return p.reset=function(){var e=p.direction,t=p.loop;for(p.currentTime=0,p.progress=0,p.paused=!0,p.began=!1,p.completed=!1,p.reversed="reverse"===e,p.remaining="alternate"===e&&1===t?2:t,a(0),e=p.children.length;e--;)p.children[e].reset()},p.tick=function(e){s=e,l||(l=s),u((c+s-l)*A.speed)},p.seek=function(e){u(r(e))},p.pause=function(){var e=j.indexOf(p);-1<e&&j.splice(e,1),p.paused=!0},p.play=function(){p.paused&&(p.paused=!1,l=0,c=r(p.currentTime),j.push(p),_||L())},p.reverse=function(){p.reversed=!p.reversed,l=0,c=r(p.currentTime)},p.restart=function(){p.pause(),p.reset(),p.play()},p.finished=h,p.reset(),p.autoplay&&p.play(),p}var S,M={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},P={duration:1e3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},O="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),z={arr:function(e){return Array.isArray(e)},obj:function(e){return-1<Object.prototype.toString.call(e).indexOf("Object")},pth:function(e){return z.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},dom:function(e){return e.nodeType||z.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return z.hex(e)||z.rgb(e)||z.hsl(e)}},T=function(){function e(e,t,n){return(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e}return function(t,n,r,a){if(0<=t&&1>=t&&0<=r&&1>=r){var o=new Float32Array(11);if(t!==n||r!==a)for(var i=0;11>i;++i)o[i]=e(.1*i,t,r);return function(i){if(t===n&&r===a)return i;if(0===i)return 0;if(1===i)return 1;for(var u=0,s=1;10!==s&&o[s]<=i;++s)u+=.1;var s=u+(i-o[--s])/(o[s+1]-o[s])*.1,l=3*(1-3*r+3*t)*s*s+2*(3*r-6*t)*s+3*t;if(.001<=l){for(u=0;4>u&&0!=(l=3*(1-3*r+3*t)*s*s+2*(3*r-6*t)*s+3*t);++u)var c=e(s,t,r)-i,s=s-c/l;i=s}else if(0===l)i=s;else{var s=u,u=u+.1,f=0;do{0<(l=e(c=s+(u-s)/2,t,r)-i)?u=c:s=c}while(1e-7<Math.abs(l)&&10>++f);i=c}return e(i,n,a)}}}}(),C=function(){function e(e,t){return 0===e||1===e?e:-Math.pow(2,10*(e-1))*Math.sin(2*(e-1-t/(2*Math.PI)*Math.asin(1))*Math.PI/t)}var t,n="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),r={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],e],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(t,n){return 1-e(1-t,n)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(t,n){return.5>t?e(2*t,n)/2:1-e(-2*t+2,n)/2}]},a={linear:T(.25,.25,.75,.75)},o={};for(t in r)o.type=t,r[o.type].forEach(function(e){return function(t,r){a["ease"+e.type+n[r]]=z.fnc(t)?t:T.apply(u,t)}}(o)),o={type:o.type};return a}(),F={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,a){r[a]||(r[a]=[]),r[a].push(t+"("+n+")")}},j=[],_=0,L=function(){function e(){_=requestAnimationFrame(t)}function t(t){var n=j.length;if(n){for(var r=0;r<n;)j[r]&&j[r].tick(t),r++;e()}else cancelAnimationFrame(_),_=0}return e}();return A.version="2.2.0",A.speed=1,A.running=j,A.remove=function(e){e=w(e);for(var t=j.length;t--;)for(var n=j[t],r=n.animations,o=r.length;o--;)a(e,r[o].animatable.target)&&(r.splice(o,1),r.length||n.pause())},A.getValue=h,A.path=function(t,n){var r=z.str(t)?e(t)[0]:t,a=n||100;return function(e){return{el:r,property:e,totalLength:y(r)*(a/100)}}},A.setDashoffset=function(e){var t=y(e);return e.setAttribute("stroke-dasharray",t),t},A.bezier=T,A.easings=C,A.timeline=function(e){var t=A(e);return t.pause(),t.duration=0,t.add=function(n){return t.children.forEach(function(e){e.began=!0,e.completed=!0}),r(n).forEach(function(n){var r=s(n,i(P,e||{}));r.targets=r.targets||e.targets,n=t.duration;var a=r.offset;r.autoplay=!1,r.direction=t.direction,r.offset=z.und(a)?n:p(a,n),t.began=!0,t.completed=!0,t.seek(r.offset),(r=A(r)).began=!0,r.completed=!0,r.duration>n&&(t.duration=r.duration),t.children.push(r)}),t.seek(0),t.reset(),t.autoplay&&t.restart(),t},t},A.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},A})?r.apply(t,a):r)||(e.exports=o)}).call(this,n(92))},180:function(e,t,n){"use strict";var r=n(5),a=n.n(r),o=n(0),i=n.n(o),u=n(1),s=n.n(u),l=n(179),c=n.n(l),f=function(e){function t(){return e.apply(this,arguments)||this}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){if(!this.props.animatingOut){var e=this.el.querySelector(".page--post__content");c.a.timeline().add({delay:500,begin:function(){e.style.display="block"},targets:e,translateY:["50vh",0],elasticity:50,duration:1200}).add({targets:e.querySelectorAll("li"),opacity:[0,1],delay:function(e,t){return 200*t},duration:250,easing:"easeInSine",offset:"-=100"})}},n.render=function(){var e=this,t=this.props,n=t.title,r=t.children;return i.a.createElement("div",{className:"page--post",ref:function(t){return e.el=t}},i.a.createElement("div",null,i.a.createElement("div",{className:"page--post__header"},i.a.createElement("h1",null,n)),i.a.createElement("div",{className:"page--post__content",style:{display:"none"}},i.a.createElement("div",null,r))))},t}(o.Component);f.propTypes={children:s.a.node,title:s.a.string},t.a=f},208:function(e,t,n){e.exports=n.p+"static/adslabs-network-2aec846ab216e46af3ef9aeb6492f18b.png"},209:function(e,t,n){e.exports=n.p+"static/old-network-eba7004bcafe18ab91878889a8ed608a.png"},210:function(e,t,n){e.exports=n.p+"static/network_again-e4cc316477e1bf4992bc0ad3c665a9a6.mp4"}}]);
//# sourceMappingURL=component---src-pages-portfolio-ads-author-networks-index-js-951b6dbf4b6ddb18242e.js.map