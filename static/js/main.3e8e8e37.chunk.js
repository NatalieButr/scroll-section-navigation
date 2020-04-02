(this["webpackJsonpsection-navigation"]=this["webpackJsonpsection-navigation"]||[]).push([[0],{22:function(e,t,a){e.exports=a(59)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(4),o=a.n(r),i=(a(27),a(28),a(21));a(29);var l=function(){var e=Object(c.useState)(["Me\u043d\u044e","O \u043d\u0430\u0441","\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"]);return Object(i.a)(e,1)[0],n.a.createElement("header",null,n.a.createElement("div",{className:"header_logo"},n.a.createElement("p",{className:"text header_logo__text"},"Harry Potter Section Navigation")))},s=a(2),u=(a(36),a(37),function(e){var t=e.handleClick,a=Object(s.c)((function(e){return e.characters.characters})),c=Object(s.c)((function(e){return e.characters.activeCharacter}));return n.a.createElement("div",{className:"characters-navigation"},n.a.createElement("ul",{className:"characters-navigation__wrapper"},a.map((function(e,a){return n.a.createElement("li",{key:a,onClick:function(){return t(e.name)},className:"text characters-navigation_link ".concat(c===e.name?"link--active":"")},e.name,"     ")}))))}),m=(a(38),a(39),function(e){var t=window.innerHeight,a=Math.floor(t/2),r=e.name,o=e.refs,i=e.activeCharacter,l=e.onVisible,s=i===r?"characters-content--active":"";return Object(c.useEffect)((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){100*e.intersectionRatio>0&&l(r)}))}),{root:null,rootMargin:"-".concat(t%2===0?a-1:a,"px 0px -").concat(a,"px 0px"),threshold:0});return e.observe(o[r].current),function(){return e.disconnect()}}),[a,t,r,o,i,l]),n.a.createElement("div",{className:"characters-content_section ".concat(s),ref:o[r]},e.children)}),h=(a(40),function(e){var t=e.character,a=e.refs,c=Object(s.c)((function(e){return e.characters.activeCharacter})),r=Object(s.c)((function(e){return e.characters.click})),o=Object(s.b)();return n.a.createElement(m,{onVisible:function(e){r&&c===e?o({type:"SET_ACTIVE_CHARACTER",payload:{name:e,click:!1}}):r||o({type:"SET_ACTIVE_CHARACTER",payload:{name:e,click:!1}})},activeCharacter:c,name:t.name,refs:a},n.a.createElement("div",{className:"characters-content__character"},n.a.createElement("div",{className:"character_column photo_block"},n.a.createElement("div",{className:"image photo_block"},n.a.createElement("img",{src:"".concat(t.image),alt:"".concat(t.name)})),n.a.createElement("h2",{className:"text photo_block"},t.name)),n.a.createElement("div",{className:"character_column information_block"},n.a.createElement("p",{className:"text information_block__text"},"House: ",t.house),n.a.createElement("p",{className:"text information_block__text"},"Ancestry: ",t.ancestr),n.a.createElement("p",{className:"text information_block__text"},"Date of Birth: ",t.dateOfBirth," "),n.a.createElement("p",{className:"text information_block__text"},"Gender: ",t.gender),n.a.createElement("p",{className:"text information_block__text"},"Eyes: ",t.eyeColour),n.a.createElement("p",{className:"text information_block__text"},"Hair: ",t.hairColour))))}),f=function(e){var t=e.characters,a=e.refs;return n.a.createElement("div",{className:"characters-content"},t.map((function(e,t){return n.a.createElement(h,{key:t,character:e,refs:a})})))},E=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.characters.characters})),a=t.reduce((function(e,t){return e[t.name]=Object(c.createRef)(),e}),{});return n.a.createElement("main",null,n.a.createElement(u,{handleClick:function(t){e({type:"SET_ACTIVE_CHARACTER",payload:{name:t,click:!0}}),a[t].current.scrollIntoView({behavior:"smooth",block:"center"})},characters:t}),n.a.createElement(f,{refs:a,characters:t}))},_=(a(41),function(){return n.a.createElement("footer",null,n.a.createElement("div",{className:"footer_contacts"},n.a.createElement("a",{className:"text footer_contacts__text",href:"https://github.com/NatalieButr"},"by  Natalie Butrim")))});var p=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(l,null),n.a.createElement(E,null),n.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=a(3),v=a(19),b=a(8),C={characters:[],activeCharacter:"",click:!1};var k=Object(d.c)({characters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CHARACTERS_SUCCESS":return Object(b.a)({},e,{characters:t.payload});case"GET_CHARACTERS_ERROR":return e;case"SET_ACTIVE_CHARACTER":return Object(b.a)({},e,{activeCharacter:t.payload.name,click:t.payload.click});default:return e}}}),g=a(20),x=a.n(g),N=function(e){return{type:"GET_CHARACTERS_SUCCESS",payload:e}},R=function(e){return{type:"GET_CHARACTERS_ERROR",payload:e}},y=localStorage.getItem("reduxState")?JSON.parse(localStorage.getItem("reduxState")):{},A=Object(d.d)(k,y,Object(d.a)(v.a));A.dispatch((function(e){x()("http://hp-api.herokuapp.com/api/characters/students").then((function(t){var a=t.data;return e(N(a))})).catch((function(t){return e(R(t))}))})),o.a.render(n.a.createElement(s.a,{store:A},n.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.3e8e8e37.chunk.js.map