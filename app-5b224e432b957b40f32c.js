webpackJsonp([0xd2a57dc1d883],{84:function(e,t,n){"use strict";function o(e,t,n){var o=a.map(function(n){if(n.plugin[e]){var o=n.plugin[e](t,n.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:n?[n]:[]}function r(e,t,n){return a.reduce(function(n,o){return o.plugin[e]?n.then(function(){return o.plugin[e](t,o.options)}):n},Promise.resolve())}t.__esModule=!0,t.apiRunner=o,t.apiRunnerAsync=r;var a=[{plugin:n(333),options:{plugins:[],trackingId:"UA-59799152-1"}},{plugin:n(208),options:{plugins:[]}}]},200:function(e,t,n){"use strict";var o;t.components={"component---src-pages-404-js":n(314),"component---src-pages-articles-js":n(315),"component---src-pages-code-js":n(316),"component---src-pages-index-js":n(317),"component---src-pages-portfolio-js":n(319),"component---src-pages-portfolio-progressive-mass-index-js":n(320),"component---src-pages-portfolio-redesigning-ads-index-js":n(322),"component---src-pages-portfolio-ads-author-networks-index-js":n(318),"component---src-pages-portfolio-reaction-gif-generator-index-js":n(321)},t.json=(o={"layout-index.json":n(15),"404.json":n(323)},o["layout-index.json"]=n(15),o["articles.json"]=n(325),o["layout-index.json"]=n(15),o["code.json"]=n(326),o["layout-index.json"]=n(15),o["index.json"]=n(327),o["layout-index.json"]=n(15),o["portfolio.json"]=n(328),o["layout-index.json"]=n(15),o["404-html.json"]=n(324),o["layout-index.json"]=n(15),o["portfolio-progressive-mass.json"]=n(330),o["layout-index.json"]=n(15),o["portfolio-redesigning-ads.json"]=n(332),o["layout-index.json"]=n(15),o["portfolio-ads-author-networks.json"]=n(329),o["layout-index.json"]=n(15),o["portfolio-reaction-gif-generator.json"]=n(331),o),t.layouts={"layout---index":n(313)}},201:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=n(1),s=o(c),l=n(2),f=o(l),p=n(135),d=o(p),h=n(65),g=o(h),m=n(84),y=function(e){var t=e.children;return s.default.createElement("div",null,t())},v=function(e){function t(n){r(this,t);var o=a(this,e.call(this)),u=n.location;return d.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(t,e),t.prototype.componentWillReceiveProps=function(e){var t=this;if(this.state.location.pathname!==e.location.pathname){var n=d.default.getResourcesForPathname(e.location.pathname);if(n)this.setState({location:e.location,pageResources:n});else{var o=e.location;d.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(e){t.setState({location:o,pageResources:e})})}}},t.prototype.componentDidMount=function(){var e=this;g.default.on("onPostLoadPageResources",function(t){d.default.getPage(e.state.location.pathname)&&t.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:t.pageResources})})},t.prototype.shouldComponentUpdate=function(e,t){return!t.pageResources||(!(this.state.pageResources||!t.pageResources)||(this.state.pageResources.component!==t.pageResources.component||(this.state.pageResources.json!==t.pageResources.json||!(this.state.location.key===t.location.key||!t.pageResources.page||!t.pageResources.page.matchPath&&!t.pageResources.page.path))))},t.prototype.render=function(){var e=(0,m.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),t=e[0];return this.props.page?this.state.pageResources?t||(0,c.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?t||(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:y,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},t}(s.default.Component);v.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},t.default=v,e.exports=t.default},65:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(351),a=o(r),u=(0,a.default)();e.exports=u},202:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(83),a=n(136),u=o(a),i={};e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(n){var o=decodeURIComponent(n),a=(0,u.default)(o,t);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),i[a])return i[a];var c=void 0;return e.some(function(e){if(e.matchPath){if((0,r.matchPath)(a,{path:e.path})||(0,r.matchPath)(a,{path:e.matchPath}))return c=e,i[a]=e,!0}else{if((0,r.matchPath)(a,{path:e.path,exact:!0}))return c=e,i[a]=e,!0;if((0,r.matchPath)(a,{path:e.path+"index.html"}))return c=e,i[a]=e,!0}return!1}),c}}},203:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(77),a=o(r),u=n(84),i=(0,u.apiRunner)("replaceHistory"),c=i[0],s=c||(0,a.default)();e.exports=s},324:function(e,t,n){n(7),e.exports=function(e){return n.e(0xa2868bfb69fc,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(339)})})}},323:function(e,t,n){n(7),e.exports=function(e){return n.e(0xe70826b53c04,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(340)})})}},325:function(e,t,n){n(7),e.exports=function(e){return n.e(56932394960959,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(341)})})}},326:function(e,t,n){n(7),e.exports=function(e){return n.e(0x898befc1e701,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(342)})})}},327:function(e,t,n){n(7),e.exports=function(e){return n.e(0x81b8806e4260,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(343)})})}},15:function(e,t,n){n(7),e.exports=function(e){return n.e(60335399758886,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(106)})})}},329:function(e,t,n){n(7),e.exports=function(e){return n.e(0xcd446a2fd83,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(344)})})}},330:function(e,t,n){n(7),e.exports=function(e){return n.e(32414747432192,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(345)})})}},331:function(e,t,n){n(7),e.exports=function(e){return n.e(0x7b6082235571,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(346)})})}},332:function(e,t,n){n(7),e.exports=function(e){return n.e(0x8ac780150f41,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(347)})})}},328:function(e,t,n){n(7),e.exports=function(e){return n.e(0xaeb581a62131,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(348)})})}},313:function(e,t,n){n(7),e.exports=function(e){return n.e(0x67ef26645b2a,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(204)})})}},135:function(e,t,n){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.publicLoader=void 0;var r=n(1),a=(o(r),n(202)),u=o(a),i=n(65),c=o(i),s=n(136),l=o(s),f=void 0,p={},d={},h={},g={},m={},y=[],v=[],b={},_="",k=[],R={},w=function(e){return e&&e.default||e},x=void 0,j=!0,P=[],E={},C={},N=5;x=n(205)({getNextQueuedResources:function(){return k.slice(-1)[0]},createResourceDownload:function(e){T(e,function(){k=k.filter(function(t){return t!==e}),x.onResourcedFinished(e)})}}),c.default.on("onPreLoadPageResources",function(e){x.onPreLoadPageResources(e)}),c.default.on("onPostLoadPageResources",function(e){x.onPostLoadPageResources(e)});var O=function(e,t){return R[e]>R[t]?1:R[e]<R[t]?-1:0},S=function(e,t){return b[e]>b[t]?1:b[e]<b[t]?-1:0},T=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(g[t])e.nextTick(function(){n(null,g[t])});else{var o=void 0;o="component---"===t.slice(0,12)?d.components[t]:"layout---"===t.slice(0,9)?d.layouts[t]:d.json[t],o(function(e,o){g[t]=o,P.push({resource:t,succeeded:!e}),C[t]||(C[t]=e),P=P.slice(-N),n(e,o)})}},L=function(t,n){m[t]?e.nextTick(function(){n(null,m[t])}):C[t]?e.nextTick(function(){n(C[t])}):T(t,function(e,o){if(e)n(e);else{var r=w(o());m[t]=r,n(e,r)}})},M=function(){var e=navigator.onLine;if("boolean"==typeof e)return e;var t=P.find(function(e){return e.succeeded});return!!t},A=function(e,t){console.log(t),E[e]||(E[e]=t),M()&&window.location.pathname.replace(/\/$/g,"")!==e.replace(/\/$/g,"")&&(window.location.pathname=e)},D=1,U={empty:function(){v=[],b={},R={},k=[],y=[],_=""},addPagesArray:function(e){y=e,f=(0,u.default)(e,_)},addDevRequires:function(e){p=e},addProdRequires:function(e){d=e},dequeue:function(){return v.pop()},enqueue:function(e){var t=(0,l.default)(e,_);if(!y.some(function(e){return e.path===t}))return!1;var n=1/D;D+=1,b[t]?b[t]+=1:b[t]=1,U.has(t)||v.unshift(t),v.sort(S);var o=f(t);return o.jsonName&&(R[o.jsonName]?R[o.jsonName]+=1+n:R[o.jsonName]=1+n,k.indexOf(o.jsonName)!==-1||g[o.jsonName]||k.unshift(o.jsonName)),o.componentChunkName&&(R[o.componentChunkName]?R[o.componentChunkName]+=1+n:R[o.componentChunkName]=1+n,k.indexOf(o.componentChunkName)!==-1||g[o.jsonName]||k.unshift(o.componentChunkName)),k.sort(O),x.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:k,resourcesCount:R}},getPages:function(){return{pathArray:v,pathCount:b}},getPage:function(e){return f(e)},has:function(e){return v.some(function(t){return t===e})},getResourcesForPathname:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};j&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(f(t)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var t=e,n=Array.isArray(t),o=0,t=n?t:t[Symbol.iterator]();;){var r;if(n){if(o>=t.length)break;r=t[o++]}else{if(o=t.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),j=!1;if(E[t])return A(t,'Previously detected load failure for "'+t+'"'),n();var o=f(t);if(!o)return A(t,"A page wasn't found for \""+t+'"'),n();if(t=o.path,h[t])return e.nextTick(function(){n(h[t]),c.default.emit("onPostLoadPageResources",{page:o,pageResources:h[t]})}),h[t];c.default.emit("onPreLoadPageResources",{path:t});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){h[t]={component:r,json:a,layout:u,page:o};var e={component:r,json:a,layout:u,page:o};n(e),c.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return L(o.componentChunkName,function(e,t){e&&A(o.path,"Loading the component for "+o.path+" failed"),r=t,i()}),L(o.jsonName,function(e,t){e&&A(o.path,"Loading the JSON for "+o.path+" failed"),a=t,i()}),void(o.layoutComponentChunkName&&L(o.layout,function(e,t){e&&A(o.path,"Loading the Layout for "+o.path+" failed"),u=t,i()}))},peek:function(e){return v.slice(-1)[0]},length:function(){return v.length},indexOf:function(e){return v.length-v.indexOf(e)-1}};t.publicLoader={getResourcesForPathname:U.getResourcesForPathname};t.default=U}).call(t,n(107))},349:function(e,t){e.exports=[{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-articles-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles.json",path:"/articles/"},{componentChunkName:"component---src-pages-code-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"code.json",path:"/code/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-portfolio-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"portfolio.json",path:"/portfolio/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"},{componentChunkName:"component---src-pages-portfolio-progressive-mass-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"portfolio-progressive-mass.json",path:"/portfolio/progressiveMass/"},{componentChunkName:"component---src-pages-portfolio-redesigning-ads-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"portfolio-redesigning-ads.json",path:"/portfolio/redesigningADS/"},{componentChunkName:"component---src-pages-portfolio-ads-author-networks-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"portfolio-ads-author-networks.json",path:"/portfolio/adsAuthorNetworks/"},{componentChunkName:"component---src-pages-portfolio-reaction-gif-generator-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"portfolio-reaction-gif-generator.json",path:"/portfolio/reactionGifGenerator/"}]},205:function(e,t){"use strict";e.exports=function(e){var t=e.getNextQueuedResources,n=e.createResourceDownload,o=[],r=[],a=function(){var e=t();e&&(r.push(e),n(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(t){return t!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(t){return t!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(84),u=n(1),i=o(u),c=n(170),s=o(c),l=n(83),f=n(337),p=n(299),d=o(p),h=n(203),g=o(h),m=n(65),y=o(m),v=n(349),b=o(v),_=n(350),k=o(_),R=n(201),w=o(R),x=n(200),j=o(x),P=n(135),E=o(P);n(292),window.___history=g.default,window.___emitter=y.default,E.default.addPagesArray(b.default),E.default.addProdRequires(j.default),window.asyncRequires=j.default,window.___loader=E.default,window.matchPath=l.matchPath;var C=k.default.reduce(function(e,t){return e[t.fromPath]=t,e},{}),N=function(e){var t=C[e];return null!=t&&(g.default.replace(t.toPath),!0)};N(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history&&c!==!1||(window.___history=e,c=!0,e.listen(function(e,t){N(e.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:e,action:t})}))}function t(e,t){var n=t.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:n});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===n)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&n(206);var o=function(e){function t(n){n.page.path===E.default.getPage(e).path&&(y.default.off("onPostLoadPageResources",t),clearTimeout(o),window.___history.push(e))}var n=C[e];if(n&&(e=n.toPath),window.location.pathname!==e){var o=setTimeout(function(){y.default.off("onPostLoadPageResources",t),y.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);E.default.getResourcesForPathname(e)?(clearTimeout(o),window.___history.push(e)):y.default.on("onPostLoadPageResources",t)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var c=!1,p=(0,a.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(e){var t=e.children;return i.default.createElement(l.Router,{history:g.default},t)},m=(0,l.withRouter)(w.default);E.default.getResourcesForPathname(window.location.pathname,function(){var n=function(){return(0,u.createElement)(p?p:h,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:t},(0,u.createElement)(m,{layout:!0,children:function(t){return(0,u.createElement)(l.Route,{render:function(n){e(n.history);var o=t?t:n;return E.default.getPage(o.location.pathname)?(0,u.createElement)(w.default,r({page:!0},o)):(0,u.createElement)(w.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:n},n)[0];(0,d.default)(function(){return s.default.render(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},350:function(e,t){e.exports=[]},206:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(65),a=o(r),u="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var t=e.installing;console.log("installingWorker",t),t.addEventListener("statechange",function(){switch(t.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},136:function(e,t){"use strict";t.__esModule=!0,t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.substr(0,t.length)===t?e.slice(t.length):e},e.exports=t.default},207:function(e,t){"use strict";t.__esModule=!0,t.default=[{darker:"#f51567",lighter:"#ebe77e",background:"lighter"},{darker:"#4f10ee",lighter:"#faee81",background:"darker"},{lighter:"#cbe653",darker:"#5824f4",background:"darker"},{lighter:"#82f399",darker:"#574d6b",background:"darker"},{lighter:"#fcea73",darker:"#3222c6",background:"darker"},{lighter:"#cddf2e",darker:"#093093",background:"darker"},{darker:"#cc3c29",lighter:"#a0df99",background:"lighter"},{lighter:"#95e299",darker:"#1331b5",background:"darker"},{lighter:"#f65c92",darker:"#22097d",background:"darker"},{darker:"#fe0b5c",lighter:"#cccbd6",background:"lighter"},{lighter:"#a1f9b8",darker:"#9d24f9",background:"darker"},{darker:"#3a2e92",lighter:"#bcb8d3",background:"lighter"},{darker:"#3703e1",lighter:"#cec7b7",background:"lighter"},{darker:"#170c90",lighter:"#5bc586",background:"darker"},{darker:"#4744ea",lighter:"#fbdecb",background:"darker"},{darker:"#6e4ffa",lighter:"#eafe9b",background:"darker"}],e.exports=t.default},208:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=n(1),s=o(c),l=n(77),f=o(l),p=n(362),d=o(p),h=n(207),g=o(h),m=n(210),y=o(m),v=n(209),b=o(v),_="history::exiting",k=function(e,t){var n=new CustomEvent(_,{detail:{pathname:e}});window.dispatchEvent(n),t(!0)},R=(0,f.default)({getUserConfirmation:k});R.block(function(e,t){return e.pathname}),t.replaceHistory=function(){return R};var w=500,x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{"--color":"lighter"===e.background?e.darker:e.lighter,"--background-color":"lighter"===e.background?e.lighter:e.darker,"--darker-color":e.darker,"--lighter-color":e.lighter}},j=function(e){function t(n){r(this,t);var o=a(this,e.call(this,n));o.state={prevPageResources:{}};var u=o._theme?g.default.filter(function(e){return e!==o._theme}):g.default;return o._theme=u[Math.floor(Math.random()*u.length)],o}return u(t,e),t.prototype.componentWillReceiveProps=function(e){var t=this;this.props.location.key!==e.location.key&&(this._prevTheme=this._theme,this._theme=g.default[Math.floor(Math.random()*g.default.length)],this.setState({prevPageResources:this.props.pageResources}),setTimeout(function(){t.setState({prevPageResources:null})},w))},t.prototype.render=function(){var e=this.props.pageResources.component,t=this.state.prevPageResources&&this.state.prevPageResources.component;return s.default.createElement("div",null,t&&s.default.createElement(d.default,{properties:x(this._prevTheme)},s.default.createElement("div",{className:"page",key:this.state.prevPageResources.page.path},"/"!==this.state.prevPageResources.page.path&&s.default.createElement(y.default,{path:this.state.prevPageResources.page.path}),s.default.createElement("main",null,s.default.createElement(t,i({},this.props,this.state.prevPageResources.json,{animatingOut:!0,cssVars:x(this._theme)}))))),s.default.createElement(d.default,{properties:x(this._theme)},s.default.createElement("div",{className:"page "+(t?"page--slide-in-top":""),key:this.props.pageResources.page.path},"/"!==this.props.pageResources.page.path&&s.default.createElement(y.default,{path:this.props.pageResources.page.path}),s.default.createElement("main",null,s.default.createElement(e,i({},this.props,this.props.pageResources.json,{cssVars:x(this._theme),animatingIn:t})))),s.default.createElement(b.default,null)))},t}(s.default.Component);t.replaceComponentRenderer=function(e){var t=e.props,n=e.loader;if(!t.layout)return(0,c.createElement)(j,i({},t,{loader:n}))}},299:function(e,t,n){!function(t,n){e.exports=n()}("domready",function(){var e,t=[],n=document,o=n.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return a||n.addEventListener(r,e=function(){for(n.removeEventListener(r,e),a=1;e=t.shift();)e()}),function(e){a?setTimeout(e,0):t.push(e)}})},7:function(e,t,n){"use strict";function o(){function e(e){var t=o.lastChild;return"SCRIPT"!==t.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",t)):void(t.onload=t.onerror=function(){t.onload=t.onerror=null,setTimeout(e,0)})}var t,o=document.querySelector("head"),r=n.e,a=n.s;n.e=function(o,u){var i=!1,c=!0,s=function(e){u&&(u(n,e),u=null)};return!a&&t&&t[o]?void s(!0):(r(o,function(){i||(i=!0,c?setTimeout(function(){s()}):s())}),void(i||(c=!1,e(function(){i||(i=!0,a?a[o]=void 0:(t||(t={}),t[o]=!0),s(!0))}))))}}o()},333:function(e,t,n){"use strict";t.onRouteUpdate=function(e){var t=e.location;"function"==typeof ga&&(window.ga("set","page",(t||{}).pathname),window.ga("send","pageview"))}},351:function(e,t){function n(e){return e=e||Object.create(null),{on:function(t,n){(e[t]||(e[t]=[])).push(n)},off:function(t,n){e[t]&&e[t].splice(e[t].indexOf(n)>>>0,1)},emit:function(t,n){(e[t]||[]).slice().map(function(e){e(n)}),(e["*"]||[]).slice().map(function(e){e(t,n)})}}}e.exports=n},107:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function u(){g&&d&&(g=!1,d.length?h=d.concat(h):m=-1,h.length&&i())}function i(){if(!g){var e=r(u);g=!0;for(var t=h.length;t;){for(d=h,h=[];++m<t;)d&&d[m].run();m=-1,t=h.length}d=null,g=!1,a(e)}}function c(e,t){this.fun=e,this.array=t}function s(){}var l,f,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var d,h=[],g=!1,m=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new c(e,t)),1!==h.length||g||r(i)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=s,p.addListener=s,p.once=s,p.off=s,p.removeListener=s,p.removeAllListeners=s,p.emit=s,p.prependListener=s,p.prependOnceListener=s,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},356:function(e,t,n){var o,r,a;!function(u,i){r=[t,n(1),n(2),n(169)],o=i,a="function"==typeof o?o.apply(t,r):o,!(void 0!==a&&(e.exports=a))}(this,function(e,t,n,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var c=r(t),s=r(n),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=function(e){function t(e){a(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.container=null,n.containerRef=n.containerRef.bind(n),n.getContainer=n.getContainer.bind(n),n.handleNewProperties=n.handleNewProperties.bind(n),n}return i(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.properties,n=Object.keys(t);n.forEach(function(n){(0,o.setStyleProperty)(e.getContainer(),n,t[n])})}},{key:"componentWillReceiveProps",value:function(e){var t=this.props.properties;e.properties!==t&&this.handleNewProperties(e.properties,t)}},{key:"componentWillUnmount",value:function(){var e=this,t=this.props,n=t.global,r=t.properties;if(n){var a=Object.keys(r);a.forEach(function(t){(0,o.removeStyleProperty)(e.getContainer(),t)})}}},{key:"containerRef",value:function(e){this.container=e}},{key:"getContainer",value:function(){var e=this.props.global;return e?(0,o.getRoot)():this.container}},{key:"handleNewProperties",value:function(e,t){var n=this,r=Object.keys(e),a=Object.keys(t),u=a.filter(function(t){return"undefined"==typeof e[t]});r.filter(function(n){return e[n]!==t[n]}).forEach(function(t){(0,o.setStyleProperty)(n.getContainer(),t,e[t])}),u.forEach(function(e){(0,o.removeStyleProperty)(n.getContainer(),e)})}},{key:"render",value:function(){return this.props.global?this.props.children||null:c.default.createElement("div",{ref:this.containerRef},this.props.children)}}]),t}(t.Component);f.propTypes={global:s.default.bool,properties:s.default.objectOf(function(e,t,n){if(!(0,o.isValidProperty)(t))return new Error(("\n<"+n+' /> could not set the property "'+t+": "+e[t]+';".\nCustom Property names must be a string starting with two dashes, for example "--theme-background".\n      ').trim())})},f.defaultProps={global:!1,properties:{}},e.default=f})},357:function(e,t,n){var o,r,a;!function(u,i){r=[t,n(356)],o=i,a="function"==typeof o?o.apply(t,r):o,!(void 0!==a&&(e.exports=a))}(this,function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(t);e.default=o.default})},358:function(e,t,n){var o,r,a;!function(n,u){r=[t],o=u,a="function"==typeof o?o.apply(t,r):o,!(void 0!==a&&(e.exports=a))}(this,function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(){return document.documentElement};e.default=t})},169:function(e,t,n){var o,r,a;!function(u,i){r=[t,n(359),n(360),n(361),n(358)],o=i,a="function"==typeof o?o.apply(t,r):o,!(void 0!==a&&(e.exports=a))}(this,function(e,t,n,o,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.setStyleProperty=e.removeStyleProperty=e.isValidProperty=e.getRoot=void 0;var u=a(t),i=a(n),c=a(o),s=a(r);e.getRoot=s.default,e.isValidProperty=u.default,e.removeStyleProperty=i.default,e.setStyleProperty=c.default})},359:function(e,t,n){var o,r,a;!function(n,u){r=[t],o=u,a="function"==typeof o?o.apply(t,r):o,!(void 0!==a&&(e.exports=a))}(this,function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=/^--\S+$/,n=function(e){return t.test(e)};e.default=n})},360:function(e,t,n){var o,r,a;!function(n,u){r=[t],o=u,a="function"==typeof o?o.apply(t,r):o,!(void 0!==a&&(e.exports=a))}(this,function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(e,t){e.style.removeProperty(t)};e.default=t})},361:function(e,t,n){var o,r,a;!function(u,i){r=[t,n(169)],o=i,a="function"==typeof o?o.apply(t,r):o,!(void 0!==a&&(e.exports=a))}(this,function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(e,n,o){(0,t.isValidProperty)(n)&&e.style.setProperty(n,o)};e.default=n})},362:function(e,t,n){e.exports=n(357)},209:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(1),c=o(i),s=n(2),l=(o(s),n(23)),f=(o(l),function(e){function t(){var n,o,u;r(this,t);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return n=o=a(this,e.call.apply(e,[this].concat(s))),o.state={open:!1
},o.openModal=function(){o.setState({open:!0})},o.closeModal=function(e){o.setState({open:!1}),e.stopPropagation()},o.renderContents=function(){return c.default.createElement("div",{className:"about-me__container"},c.default.createElement("button",{className:"about-me__close-btn",onClick:o.closeModal},c.default.createElement("span",{className:"sr-only"},"close"),c.default.createElement("svg",{width:"50",height:"50",viewBox:"0 0 1792 1792"},c.default.createElement("path",{d:"M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"}))),c.default.createElement("h1",null,"Hi, thanks for visiting!"),c.default.createElement("div",{className:"about-me__contents"},c.default.createElement("p",null,"I'm a front end developer who loves building useful, user-friendly interfaces. "),c.default.createElement("p",null,"I work at ",c.default.createElement("a",{href:"http://codecademy.com"},"Codecademy")," building tools to teach people how to code."," "),c.default.createElement("p",null,"If you'd like to learn more about my background, please check out my"," ",c.default.createElement("a",{href:"https://www.linkedin.com/in/alexholachek/"},"Linkedin"),"."),c.default.createElement("p",null,"I recently had fun redesigning this portfolio website and rebuilding it using Gatsby —"," ",c.default.createElement("a",{href:"https://github.com/aholachek/aholachek.github.io"},"here's the source."))))},u=n,a(o,u)}return u(t,e),t.prototype.render=function(){return c.default.createElement("div",{className:"about-me__trigger-button "+(this.state.open?"active":""),role:this.state.open?"":"button",tabindex:"0",onClick:this.openModal},this.state.open?this.renderContents():c.default.createElement("span",{className:"about-me__question-mark"},"?"))},t}(i.Component));t.default=f,e.exports=t.default},210:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){return s.filter(function(t){return!new RegExp(t+"/$").test(e)}).map(function(e){return u.default.createElement("div",null,u.default.createElement(c.default,{to:"/"+e},e))})}t.__esModule=!0;var a=n(1),u=o(a),i=n(56),c=o(i),s=["code","portfolio","articles"],l=function(e){var t=e.path;return u.default.createElement("nav",{className:"header"},u.default.createElement("div",null,u.default.createElement(c.default,{to:"/"},u.default.createElement("svg",{"aria-hidden":"true","data-icon":"home",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",className:"home-icon"},u.default.createElement("path",{fill:"currentColor",d:"M488 312.7V456c0 13.3-10.7 24-24 24H348c-6.6 0-12-5.4-12-12V356c0-6.6-5.4-12-12-12h-72c-6.6 0-12 5.4-12 12v112c0 6.6-5.4 12-12 12H112c-13.3 0-24-10.7-24-24V312.7c0-3.6 1.6-7 4.4-9.3l188-154.8c4.4-3.6 10.8-3.6 15.3 0l188 154.8c2.7 2.3 4.3 5.7 4.3 9.3zm83.6-60.9L488 182.9V44.4c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12V117l-89.5-73.7c-17.7-14.6-43.3-14.6-61 0L4.4 251.8c-5.1 4.2-5.8 11.8-1.6 16.9l25.5 31c4.2 5.1 11.8 5.8 16.9 1.6l235.2-193.7c4.4-3.6 10.8-3.6 15.3 0l235.2 193.7c5.1 4.2 12.7 3.5 16.9-1.6l25.5-31c4.2-5.2 3.4-12.7-1.7-16.9z"})),u.default.createElement("span",{className:"sr-only"},"Alex Holachek's website"))),u.default.createElement("div",{className:"links"},r(t)))};t.default=l,e.exports=t.default},314:function(e,t,n){n(7),e.exports=function(e){return n.e(0x9427c64ab85d,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(212)})})}},315:function(e,t,n){n(7),e.exports=function(e){return n.e(0x9ef16118cf32,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(213)})})}},316:function(e,t,n){n(7),e.exports=function(e){return n.e(0x968739c49253,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(214)})})}},317:function(e,t,n){n(7),e.exports=function(e){return n.e(35783957827783,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(215)})})}},319:function(e,t,n){n(7),e.exports=function(e){return n.e(0xe015e3200350,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(216)})})}},318:function(e,t,n){n(7),e.exports=function(e){return n.e(0xa6473e4dfba9,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(217)})})}},320:function(e,t,n){n(7),e.exports=function(e){return n.e(0x5bbcdb1e4a3f,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(218)})})}},321:function(e,t,n){n(7),e.exports=function(e){return n.e(0xb5f1f525a75a,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(219)})})}},322:function(e,t,n){n(7),e.exports=function(e){return n.e(0x945159159220,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(220)})})}}});
//# sourceMappingURL=app-5b224e432b957b40f32c.js.map