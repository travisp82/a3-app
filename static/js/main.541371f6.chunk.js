(this["webpackJsonpa3-app"]=this["webpackJsonpa3-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=t(1),a=t.n(o),s=t(3),c=t.n(s),r=(t(12),t(4)),i=t(5),d=t(7),u=t(6),l=(t(13),t(0)),h=function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("h2",{children:Object(l.jsx)("u",{children:e.foodbanks.name})}),Object(l.jsx)("img",{alt:"foodbanks",src:"https://robohash.org/".concat(e.foodbanks.name,"?set=set5&$size=180x180")}),Object(l.jsxs)("p",{children:[" ",e.foodbanks.address,", ",e.foodbanks.country," ",Object(l.jsxs)("p",{children:["e: ",e.foodbanks.email]}),Object(l.jsxs)("p",{children:["p: ",e.foodbanks.phone]})," "]})]})},b=(t(15),function(e){return Object(l.jsx)("div",{className:"card-list",children:e.foodbanks.map((function(e){return Object(l.jsx)(h,{foodbanks:e},e.name)}))})}),f=(t(16),function(e){var n=e.placeholder,t=e.handleChange;return Object(l.jsx)("input",{className:"search",placeholder:n,onChange:t})}),j=(t(17),function(e){Object(d.a)(t,e);var n=Object(u.a)(t);function t(){var e;return Object(r.a)(this,t),(e=n.call(this)).handleChange=function(n){e.setState({searchField:n.target.value})},e.state={foodbanks:[],searchField:""},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.givefood.org.uk/api/2/foodbanks/").then((function(e){return e.json()})).then((function(n){return e.setState({foodbanks:n})}))}},{key:"render",value:function(){var e=this,n=this.state,t=n.foodbanks,o=n.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())||e.country.toLowerCase().includes(o.toLowerCase())||e.email.toLowerCase().includes(o.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(f,{placeholder:"Locate Foodbank by name, country or email...",handleChange:function(n){return e.setState({searchField:n.target.value})}}),Object(l.jsx)(b,{foodbanks:a})]})}}]),t}(o.Component)),p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(n){var t=n.getCLS,o=n.getFID,a=n.getFCP,s=n.getLCP,c=n.getTTFB;t(e),o(e),a(e),s(e),c(e)}))};c.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.541371f6.chunk.js.map