(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{172:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(181),o=a(182),s=a.n(o),l=a(184),c=a.n(l),p=a(206),u=a.n(p),d=a(207),m=a.n(d),f=a(185),g=a.n(f),h=[{text:"Creating a Scorecard for Massachussetts Legislators",to:"/portfolio/progressiveMass",img:u.a,description:"I helped a grassroots political organization present their data in a more user-friendly way."},{text:"Redesigning the Astrophysics Data System",to:"/portfolio/redesigningADS",description:"I worked on building a new version of the UI for the NASA/Astrophysics Data System.",img:c.a},{text:"Going (briefly) viral with a reaction gif generator",to:"/portfolio/reactionGifGenerator",description:"I made a fun side project that got mild traction on the internet for a few days.",img:g.a},{text:"Rethinking the ADS author network visualizations",to:"/portfolio/adsAuthorNetworks",description:"I redesigned and rebuilt network visualizations in D3.",img:m.a}];t.default=function(e){var t=e.animatingOut;return i.a.createElement(n.Fragment,null,i.a.createElement(s.a,{title:"Alex Holachek | Portfolio"}),i.a.createElement(r.a,{title:"Portfolio",links:h,animatingOut:t}))}},181:function(e,t,a){"use strict";a(44),a(45);var n=a(5),i=a.n(n),r=a(0),o=a.n(r),s=a(1),l=a.n(s),c=a(179),p=a.n(c),u=a(8),d=a.n(u),m=function(e){e.skills;var t=e.text,a=e.img,n=e.external,i=e.to,r=e.description,s=e.simple,l=e.tag,c=o.a.createElement("div",null,o.a.createElement("div",{className:"card__padding"},l&&o.a.createElement("div",{className:"card__tag"},l),o.a.createElement("div",{className:"card__header"},o.a.createElement("h2",null,t),!!r&&function(e){return o.a.createElement("p",{className:"card__description",dangerouslySetInnerHTML:{__html:e}})}(r)),!!a&&o.a.createElement("img",{className:"card__img",src:a})));return o.a.createElement("li",{style:{opacity:0},key:i,className:"card "+(s?"card--simple":"")},n?o.a.createElement("a",{href:i},c):o.a.createElement(d.a,{to:i},c))};m.defaultProps={},m.propTypes={};var f=m,g=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={},t}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){if(!this.props.animatingOut){var e=this.el.querySelector(".page--list__content");p()({targets:e.querySelectorAll(".card"),opacity:{value:1,duration:300,easing:"easeInSine"},translateY:[50,0],delay:function(e,t){return 100*t+300},duration:1e3,elasticity:500})}},a.render=function(){var e=this,t=this.props,a=t.links,n=t.title,i=t.simple;return o.a.createElement("div",{className:"page--list",ref:function(t){return e.el=t}},o.a.createElement("div",null,o.a.createElement("div",{className:"page--list__header"},o.a.createElement("h1",null,n)),o.a.createElement("div",{className:"page--list__content"},o.a.createElement("div",null,o.a.createElement("ul",{className:"card-grid "+(i?"card-grid--simple":""),ref:function(t){e.list=t}},a.map(function(e){return o.a.createElement(f,Object.assign({},e,{simple:i}))}))))))},t}(r.Component);g.propTypes={title:l.a.string,links:l.a.array,animatingOut:l.a.bool};t.a=g},184:function(e,t,a){e.exports=a.p+"static/bbb_full_page-19e26410d8cf36e26514f1a8523b3843.png"},185:function(e,t,a){e.exports=a.p+"static/reaction-gif-thumbnail-00ec6db9f5bfe80e60d7b75cc13e4e64.gif"},206:function(e,t,a){e.exports=a.p+"static/prog-mass-thumbnail-41f40b1e500bc5a1e0b86880e5f09e54.png"},207:function(e,t,a){e.exports=a.p+"static/network-thumbnail-a74a362e4eef9fe6f70fd2b92077b0cf.png"}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-7c5e00e71cc09e42447a.js.map