(this.webpackJsonpreact_quotes=this.webpackJsonpreact_quotes||[]).push([[0],{10:function(t,e,c){},12:function(t,e,c){"use strict";c.r(e);var n=c(1),i=c.n(n),s=c(4),r=c.n(s),o=(c(9),c(10),c(3)),a=c.p+"static/media/twitter.ca88c85b.svg",j=c.p+"static/media/tumblr.e04bb935.svg",u=c(0),d=function(){var t=Object(n.useState)("title"),e=Object(o.a)(t,2),c=e[0],i=e[1],s=Object(n.useState)(""),r=Object(o.a)(s,2),d=r[0],b=r[1];Object(n.useEffect)((function(){h()}),[]);var h=function(){fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(t){return t.json()})).then((function(t){var e=t.quotes,c=e[Math.floor(Math.random()*e.length)];i(c.quote),b(c.author)}))};return Object(u.jsxs)("div",{id:"quote-box",children:[Object(u.jsx)("div",{id:"text",children:c}),Object(u.jsx)("div",{id:"author",children:Object(u.jsx)("p",{children:d})}),Object(u.jsxs)("div",{id:"buttons",children:[Object(u.jsxs)("div",{className:"social-media",children:[Object(u.jsx)("a",{href:"#",id:"twet-quote",children:Object(u.jsx)("span",{children:Object(u.jsx)("img",{src:a,alt:""})})}),Object(u.jsx)("a",{href:"#",id:"tumlr-quote",children:Object(u.jsx)("span",{children:Object(u.jsx)("img",{src:j,alt:""})})})]}),Object(u.jsx)("button",{onClick:function(){h()},id:"new-quote",children:"New Quote"})]})]})};var b=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(d,{})})},h=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(e){var c=e.getCLS,n=e.getFID,i=e.getFCP,s=e.getLCP,r=e.getTTFB;c(t),n(t),i(t),s(t),r(t)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),h()},9:function(t,e,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.2495836d.chunk.js.map