(this["webpackJsonprpg-react"]=this["webpackJsonprpg-react"]||[]).push([[0],{17:function(n,t,e){},21:function(n,t,e){"use strict";e.r(t);var o,i,r,c=e(0),u=e.n(c),a=e(9),s=e.n(a),f=(e(17),e(2)),d=e(3),p=d.a.div(o||(o=Object(f.a)(["\n  background: #24282f;\n  min-height: 100vh;\n  color: #fff;\n"]))),x=d.a.div(i||(i=Object(f.a)(["\n  width: 480px;\n  height: 480px;\n  background-image: url('https://raw.githubusercontent.com/DiogoMalfatti/rpg-react/main/public/assets/map.png');\n  background-position: left top;\n  background-size: 100%;\n"]))),g=e(1),b=d.a.div(r||(r=Object(f.a)(["\n  width: ","px;\n  height: ","px;\n  position: absolute;\n  left: ","px;\n  top: ","px;\n  background-image: url('https://raw.githubusercontent.com/DiogoMalfatti/rpg-react/main/public/assets/char.png');\n  background-position: 0px ","px;\n"])),(function(n){return n.size}),(function(n){return n.size}),(function(n){return n.left}),(function(n){return n.top}),(function(n){return n.sidePos})),h=function(n){var t,e=n.x,o=n.y,i=n.side;return Object(g.jsx)(b,{size:30,left:30*e,top:30*o,sidePos:null!==(t={down:0,left:-30,right:-60,up:-90}[i])&&void 0!==t?t:0})},y=e(7),l=[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0],[0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0],[0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],v=function(){var n=function(){var n=Object(c.useState)({x:3,y:5}),t=Object(y.a)(n,2),e=t[0],o=t[1],i=Object(c.useState)("down"),r=Object(y.a)(i,2),u=r[0],a=r[1],s=function(n,t){return void 0!==l[t]&&void 0!==l[t][n]&&1===l[t][n]};return{x:e.x,y:e.y,moveLeft:function(){o((function(n){return{x:s(n.x-1,n.y)?n.x-1:n.x,y:n.y}})),a("left")},moveRight:function(){o((function(n){return{x:s(n.x+1,n.y)?n.x+1:n.x,y:n.y}})),a("right")},moveDown:function(){o((function(n){return{x:n.x,y:s(n.x,n.y+1)?n.y+1:n.y}})),a("down")},moveUp:function(){o((function(n){return{x:n.x,y:s(n.x,n.y-1)?n.y-1:n.y}})),a("up")},side:u}}();Object(c.useEffect)((function(){window.addEventListener("keydown",t)}),[]);var t=function(t){switch(t.code){case"KeyA":case"ArrowLeft":n.moveLeft();break;case"KeyW":case"ArrowUp":n.moveUp();break;case"KeyD":case"ArrowRight":n.moveRight();break;case"KeyS":case"ArrowDown":n.moveDown()}};return Object(g.jsx)(p,{children:Object(g.jsx)(x,{children:Object(g.jsx)(h,{x:n.x,y:n.y,side:n.side})})})},j=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,22)).then((function(t){var e=t.getCLS,o=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;e(n),o(n),i(n),r(n),c(n)}))};s.a.render(Object(g.jsx)(u.a.StrictMode,{children:Object(g.jsx)(v,{})}),document.getElementById("root")),j()}},[[21,1,2]]]);
//# sourceMappingURL=main.c91287e0.chunk.js.map