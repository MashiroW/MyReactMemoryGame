(this.webpackJsonpmyreactmemorygame=this.webpackJsonpmyreactmemorygame||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var r=a(0),i=a(2),c=a(4),s=a.n(c),n=a(1),o=a(5),u=a(6),l=a(8),m=a(7),d=(a(14),0),b=0,j="",g=1,w=function(t){var e={};return t.visible&&(e={pointerEvents:"none",backgroundImage:t.backgroundImage}),Object(r.jsx)("div",{onClick:t.click,style:e,className:"card"})},f=function(t){var e=t.cartes.map((function(e){return Object(r.jsx)(w,{backgroundImage:e.backgroundImage,visible:e.EtatCarte,click:function(){return t.Cliquables(e.id)}},e.id)}));return Object(r.jsx)("div",{className:"cards-block",children:e})},h=function(t){return Object(r.jsx)("button",{onClick:t.startNouvellePartie,className:"reset",children:"Start a New Game"})},p=function(t){return Object(r.jsx)("button",{onClick:t.Difficile,className:"hard",children:Object(r.jsx)("b",{children:"HARD MOD"})})},k=function(t){return Object(r.jsx)("button",{onClick:t.Facile,className:"easy",children:Object(r.jsx)("b",{children:"EASY MOD "})})},O=function(t){Object(l.a)(a,t);var e=Object(m.a)(a);function a(t){var r;Object(o.a)(this,a),(r=e.call(this,t)).shuffle=function(t){return t.sort((function(){return.5-Math.random()}))},r.startNouvellePartie=function(){return window.location.reload()},r.Difficile=function(){return g=5},r.Facile=function(){return g=1},r.Cliquables=function(t){var e=r.state.cartes.map((function(e){return e.id===t?Object(n.a)(Object(n.a)({},e),{},{EtatCarte:1}):e})),a=r.state.Selection2,i=e.filter((function(t){return 1===t.EtatCarte})).map((function(t){return t.id})),c=e.filter((function(t){return t.id===i[0]}))[0].backgroundImage;if(a){var s=e.filter((function(t){return t.id===i[1]}))[0].backgroundImage;if(c===s){var o=e.map((function(t){return i.includes(t.id)?Object(n.a)(Object(n.a)({},t),{},{EtatCarte:2}):t}));return d+=3,8===(b+=1)&&(j="You won ! Congratulations ! Mario is proud of ur moustache !"),void r.setState({cartes:o,Selection2:!1})}if(c!==s){var u=e.map((function(t){return i.includes(t.id)?Object(n.a)(Object(n.a)({},t),{},{EtatCarte:0}):t}));return r.setState({cartes:e},(function(){return setTimeout((function(){return r.setState({cartes:u,Selection2:!1})}),300)})),void(d-=g)}}r.setState({cartes:e,Selection2:!0})};var i=0,c=[{id:0,EtatCarte:i,backgroundImage:'url("https://www.mariowiki.com/images/9/9e/SMW_Fire_Flower.jpg")'},{id:1,EtatCarte:i,backgroundImage:'url("https://www.mariowiki.com/images/9/9e/SMW_Fire_Flower.jpg")'},{id:2,EtatCarte:i,backgroundImage:'url("https://www.mariowiki.com/images/a/ac/SMW_Egg.jpg")'},{id:3,EtatCarte:i,backgroundImage:'url("https://www.mariowiki.com/images/a/ac/SMW_Egg.jpg")'},{id:4,EtatCarte:i,backgroundImage:'url("https://www.mariowiki.com/images/e/e0/3-Up_Moon_SMW_artwork.jpg")'},{id:5,EtatCarte:i,backgroundImage:'url("https://www.mariowiki.com/images/e/e0/3-Up_Moon_SMW_artwork.jpg")'},{id:6,EtatCarte:i,backgroundImage:'url("https://www.mariowiki.com/images/5/5e/SMW_Star.jpg")'},{id:7,EtatCarte:i,backgroundImage:'url("https://www.mariowiki.com/images/5/5e/SMW_Star.jpg")'},{id:8,EtatCarte:i,backgroundImage:'url("https://www.mariowiki.com/images/2/24/SMW_Super_Mushroom.jpg")'},{id:9,EtatCarte:i,backgroundImage:'url("https://www.mariowiki.com/images/2/24/SMW_Super_Mushroom.jpg")'},{id:10,EtatCarte:i,backgroundImage:'url("https://www.mariowiki.com/images/e/ec/SMW_1-Up_Mushroom.jpg")'},{id:11,EtatCarte:i,backgroundImage:'url("https://www.mariowiki.com/images/e/ec/SMW_1-Up_Mushroom.jpg")'},{id:12,EtatCarte:i,backgroundImage:'url("https://www.mariowiki.com/images/f/fb/SMW_Cape_Feather.jpg")'},{id:13,EtatCarte:i,backgroundImage:'url("https://www.mariowiki.com/images/f/fb/SMW_Cape_Feather.jpg")'},{id:14,EtatCarte:i,backgroundImage:'url("https://www.mariowiki.com/images/c/ca/SMW_Prize_Block.jpg")'},{id:15,EtatCarte:i,backgroundImage:'url("https://www.mariowiki.com/images/c/ca/SMW_Prize_Block.jpg")'}];return c=r.shuffle(c),r.state={cartes:c,Selection2:!1},r}return Object(u.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("div",{className:"texts",children:Object(r.jsx)("b",{children:"SUPER MARIO MEMORY GAME"})}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("div",{className:"box_difficulty_reset",children:Object(r.jsx)(h,{startNouvellePartie:this.startNouvellePartie})}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"box_difficulty",children:[Object(r.jsx)("div",{children:Object(r.jsx)(p,{Difficile:this.Difficile,Points_faux:this.state.Points_faux})}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{children:Object(r.jsx)(k,{Facile:this.Facile,Points_faux:this.state.Points_faux})}),Object(r.jsxs)("p",{className:"p",children:["Easy = -1/mistake (default)",Object(r.jsx)("br",{}),"Hard = -5/mistake"]})]})]}),Object(r.jsx)(f,{Cliquables:this.Cliquables,cartes:this.state.cartes}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"texts",children:[Object(r.jsx)("b",{children:"Your current score is: "}),Object(r.jsx)("div",{className:"texts_result",children:d}),Object(r.jsx)("br",{}),Object(r.jsx)("b",{children:j})]})]})}}]),a}(i.Component);s.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.14199bbe.chunk.js.map