(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{169:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a.n(n),i=a(0),l=a.n(i),s=(a(1),a(185)),o=a(179),c=a(214),d=a.n(c),u=a(181),h=a.n(u),p=a(215),m=a.n(p),f=a(216),g=a.n(f),y=a(217),b=a.n(y),w=a(218),E=a.n(w),v=a(219),_=a.n(v),x=a(220),I=a.n(x),k=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement(o.a,{title:"Redesigning the Astrophysics Data System"},l.a.createElement("p",{className:"lead"},"When I was working on redesigning parts of the"," ",l.a.createElement("a",{href:"http://www.adsabs.harvard.edu/"},"NASA/Astrophysics Data System (ADS)"),", I looked for opportunities to streamline the experience for the scientists, students and other researchers who use the site."),l.a.createElement("p",null,"It was very helpful talking to scientists and science librarians about the aspects of the interface they used most heavily. To supplement user interviews, I used Google Analytics custom events to explore which features in the existing interface were heavily trafficked and which were generally ignored. This information combined to inform my decision of which elements to highlight, which to de-emphasize, and which to remove altogether."),l.a.createElement("p",null,"Below I provide some screen comparisons of a few of the pages I redesigned and re-implemented in JS, HTML and CSS."),l.a.createElement(s.d,null,l.a.createElement(s.b,null,l.a.createElement(s.a,null,"Old search results"),l.a.createElement(s.a,null,"New search results")),l.a.createElement(s.c,null,l.a.createElement("img",{src:d.a,alt:"the original search results view"})),l.a.createElement(s.c,null,l.a.createElement("img",{src:h.a,alt:"redesigned search results page"}))),l.a.createElement("p",null,"For the redesign of the search results page, I emphasized scannability, situating the search result titles as the main focal point. Since Google Analytics showed that sort operations were the most common operation on a set of search results, I raised the visual profile of the sort selector. Across the board, I increased font sizes."),l.a.createElement(s.d,null,l.a.createElement(s.b,null,l.a.createElement(s.a,null,"Old abstract"),l.a.createElement(s.a,null,"New abstract")),l.a.createElement(s.c,null,l.a.createElement("img",{src:g.a,alt:"the original abstract view"})),l.a.createElement(s.c,null,l.a.createElement("img",{src:m.a,alt:"redesigned abstract view"}))),l.a.createElement("p",null,"This one is cheating a bit, since the predecessor system I'm generally showing in the \"older version\" tabs was retired before I thought to get a screen shot of its abstract page. Instead, I show the original system's abstract page (the original system is still heavily in use as it is the one that astrophysics researchers are most familiar with, so thousands of people still see this page each week!) I focused on hierarchy and contrast and added a left navigation panel to bring order and scannability to the page."),l.a.createElement(s.d,null,l.a.createElement(s.b,null,l.a.createElement(s.a,null,"Old saved items"),l.a.createElement(s.a,null,"New saved items")),l.a.createElement(s.c,null,l.a.createElement("img",{src:E.a,alt:"the original library list view"})),l.a.createElement(s.c,null,l.a.createElement("img",{src:b.a,alt:"redesigned library list"}))),l.a.createElement("p",null,"ADS libraries are a place where users can store their personal collections of papers. They have many purposes and could serve as a quick reading list, a convenient way to generate metrics, or a list intended for public consumption. In the original implementation, there was lots of explanatory text and the main functions of the library—to explore your library collection or possibly add a library— were not as obvious. My redesign simplifies things considerably, with some of the least-used functionality being removed entirely, or moved elsewhere."),l.a.createElement(s.d,null,l.a.createElement(s.b,null,l.a.createElement(s.a,null,"Old item detail"),l.a.createElement(s.a,null,"New item detail")),l.a.createElement(s.c,null,l.a.createElement("img",{src:I.a,alt:"the original library item detail view"})),l.a.createElement(s.c,null,l.a.createElement("img",{src:_.a,alt:"redesigned library item detail view"}))),l.a.createElement("p",null,"With this page I focused on using hierarchy and alignment to allow a user to, at a glance, understand the significant metadata attached to their library and the actions they can undertake on their library (manage permissions, export, visualize...)."))},t}(i.Component);t.default=k},172:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(177),l=a.n(i);a(178),a(173);t.a=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(l.a,{title:"Alex Holachek",meta:[{name:"description",content:"Alex Holachek's website"},{name:"keywords",content:"front end development, ux"}]}),t)}},173:function(e,t,a){},179:function(e,t,a){"use strict";var n=a(5),r=a.n(n),i=a(0),l=a.n(i),s=a(1),o=a.n(s),c=a(176),d=a.n(c),u=a(172),h=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){if(!this.props.animatingOut){var e=this.el.querySelector(".page--post__content");d.a.timeline().add({delay:500,begin:function(){e.style.display="block"},targets:e,translateY:["50vh",0],elasticity:50,duration:1200}).add({targets:e.querySelectorAll("li"),opacity:[0,1],delay:function(e,t){return 200*t},duration:250,easing:"easeInSine",offset:"-=100"})}},a.render=function(){var e=this,t=this.props,a=t.title,n=t.children;return l.a.createElement(u.a,null,l.a.createElement("div",{className:"page--post",ref:function(t){return e.el=t}},l.a.createElement("div",null,l.a.createElement("div",{className:"page--post__header"},l.a.createElement("h1",null,a)),l.a.createElement("div",{className:"page--post__content",style:{display:"none"}},l.a.createElement("div",null,n)))))},t}(i.Component);h.propTypes={children:o.a.node,title:o.a.string},t.a=h},181:function(e,t,a){e.exports=a.p+"static/bbb_full_page-19e26410d8cf36e26514f1a8523b3843.png"},214:function(e,t,a){e.exports=a.p+"static/2.0_full_page-97aa29e5de800a0753009fa23bf0caa0.png"},215:function(e,t,a){e.exports=a.p+"static/new_abstract_page-21c3bbd6cc60c6c10cf3af768a9ec719.png"},216:function(e,t,a){e.exports=a.p+"static/old_abstract_page-90da0964ab5d1584e826669efd330a9c.png"},217:function(e,t,a){e.exports=a.p+"static/new_library_list-24e909f1447349ee44350fdb66d8094f.png"},218:function(e,t,a){e.exports=a.p+"static/old_library_list-d355826ff1ec76415fc87c7369fe3fad.png"},219:function(e,t,a){e.exports=a.p+"static/new_library_page-7e40671250634c3d66b651338c9f5142.png"},220:function(e,t,a){e.exports=a.p+"static/old_library_page-2a9a835db3f58af2d0a447430d0a1422.png"}}]);
//# sourceMappingURL=component---src-pages-portfolio-redesigning-ads-index-js-9479867057dda1e44fdb.js.map