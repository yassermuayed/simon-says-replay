(()=>{"use strict";var e={499:(e,n,t)=>{t.d(n,{Z:()=>s});var i=t(81),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([e.id,"/* ===================================== */\n.icon-button {\n  border-radius: 100%;\n  background: linear-gradient(90deg, #3e3e3e, #2e2e2e);\n  box-shadow: 0px 0 0.6em #4a4a4a;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 16px;\n}\n\n.icon-button img svg {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n/* BUG not working on mobile */\n.icon-button:active {\n  scale: 0.9;\n  background-color: #fff;\n}\n\n/* ===================================== */\n/* dialog */\n/* ===================================== */\n\n.dialog {\n  margin: auto;\n  min-width: 75%;\n  padding: 20px;\n}\n.dialog-title {\n  background-color: bisque;\n  padding: 5px 0px;\n}\n\n.dialog-button {\n  padding: 10px;\n}\n\n.change-name-filed {\n  outline: white 1px solid;\n  width: 75%;\n  display: flex;\n  justify-content: space-between;\n}\n\n/* ===================================== */\n\n/* ===================================== */\n.game-over-dialog {\n  background: linear-gradient(75deg, #3e3e3e, #5e5e5e, #3e3e3e);\n  color: rgb(238, 238, 238);\n  padding: 20px;\n  border-radius: 20px;\n  width: 75%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  box-shadow: 2px 2px 1em #000000;\n  z-index: 1000;\n}\n\n.game-over-score {\n  font-size: 3rem;\n  color: rgb(195, 195, 2);\n  animation: color-change 2s infinite;\n}\n@keyframes color-change {\n  0% {\n    color: #ffffbe;\n    scale: 1.01;\n  }\n  25% {\n    color: #ffffaa;\n    scale: 1;\n  }\n  50% {\n    color: #ffffbe;\n    scale: 1.05;\n  }\n  75% {\n    color: #ffffaa;\n    scale: 1;\n  }\n  100% {\n    color: #ffffbe;\n    scale: 1.1;\n  }\n}\n.play-again-button {\n  padding: 15px 25px;\n  border-radius: 10px;\n  border: none;\n  background: linear-gradient(90deg, #3e3e3e, #2e2e2e);\n  color: rgb(238, 238, 238);\n  outline: rgb(129, 129, 129) 1px solid;\n  margin: 5px;\n}\n\n.play-again-button:active {\n  background-color: #00ccff;\n  box-shadow: 1px 1px white;\n  scale: 0.9;\n}\n\n/*  */\n.logo-image {\n width: 20px;\n}\n",""]);const s=a},471:(e,n,t)=>{t.d(n,{Z:()=>c});var i=t(81),o=t.n(i),r=t(645),a=t.n(r),s=t(402),l=a()(o());l.i(s.Z),l.push([e.id,".close-button{\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%);\n  padding: 5px 10px;\n  border-radius: 3px;\n  color: #000000;\n  font-family: cursive;\n  font-weight: 900;\n}\n\n.instructions {\n  font-size: 2rem;\n  color: var(--bg-300);\n  position: absolute;\n  top: 4rem;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n.traffic-light {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  z-index: 10;\n  box-shadow: 0 0 30px #f90000;\n}\n\n.simon {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  z-index: 3;\n  scale: 0.95;\n}\n\n/* Classes to style simon widget */\n.bg1 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  width: 330px;\n  height: 330px;\n  border-top-right-radius: 46%;\n  border-top-left-radius: 46%;\n  border-bottom-right-radius: 46%;\n  border-bottom-left-radius: 46%;\n\n  background-color: var(--bg-200);\n\n  border: var(--bg-100) 6px solid;\n  border-style: double;\n  box-shadow: 1px 1px 1em #000000;\n}\n\n.fg1 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  width: 96px;\n  height: 96px;\n  border-radius: 100%;\n  background-color: rgb(31, 31, 31);\n  /* border: var(--bg-200) 6px solid; */\n  z-index: 8;\n}\n\n.score {\n  position: absolute;\n  font-family: monospace;\n  font-weight: bolder;\n  font-size: 1.5rem;\n  text-shadow: #707070 0px 0px 5px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 24;\n}\n\n.quarter {\n  width: 140px;\n  height: 140px;\n  background-color: #fff;\n  border: var(--bg-200) 8px solid;\n  z-index: 4;\n}\n\n.q1 {\n  background: linear-gradient(\n    75deg,\n    var(--simon-yellow),\n    #f6ff00,\n    var(--simon-yellow)\n  );\n  border-radius: var(--round-1);\n  border-top-left-radius: 100%;\n}\n\n.q2 {\n  background: linear-gradient(\n    140deg,\n    var(--simon-green),\n    #7bdf09,\n    var(--simon-green)\n  );\n  border-radius: var(--round-1);\n  border-top-right-radius: 100%;\n}\n\n.q3 {\n  background: linear-gradient(\n    140deg,\n    var(--simon-blue),\n    #0077ff,\n    var(--simon-blue)\n  );\n  border-radius: var(--round-1);\n  border-bottom-left-radius: 100%;\n}\n\n.q4 {\n  background: linear-gradient(\n    75deg,\n    var(--simon-red),\n    #ff5858,\n    var(--simon-red)\n  );\n  border-radius: var(--round-1);\n  border-bottom-right-radius: 100%;\n}\n\n.red {\n  background-color: red;\n  min-width: 20px;\n  min-height: 20px;\n}\n",""]);const c=l},434:(e,n,t)=>{t.d(n,{Z:()=>s});var i=t(81),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([e.id,".home-logo {\n  width: 80%;\n}\n\n.new-game-btn {\n  margin-top: 80px;\n  margin-bottom: 60px;\n  padding: 25px 40px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: 900;\n  font-size: 1.2rem;\n  color: #cbc100;\n  text-transform: uppercase;\n  box-shadow: 10px 4px 1em #000000;\n  animation: btn-flash 2s infinite;\n}\n@keyframes btn-flash {\n  0% {\n    outline: #cbc10047 2px solid;\n    scale: 1;\n  }\n  50% {\n    outline: #cbc10053 2px solid;\n    scale: 1.1;\n  }\n  100% {\n    outline: #cbc10047 2px solid;\n    scale: 1;\n  }\n}\n\n.high-score {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  /* outline: #ffffff36 5px solid; */\n  border-radius: 5px;\n}\n\n.high-score div:last-child{\n  font-size: 2.2rem;\n  font-weight: 900;\n  margin: 5px 0;\n  color: #cbc100;\n  margin-bottom: 50px;\n}\n\n.high-score div:first-child {\n  font-weight: 100;\n  /* background-color: #cbc100; */\n  border-top: #ffffff36 5px solid;\n  padding: 10px 20px;\n  border-radius: 30px 30px 0 0;\n  color: #ffffff8b;\n}\n",""]);const s=a},197:(e,n,t)=>{t.d(n,{Z:()=>s});var i=t(81),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([e.id,".uolgPV5ZH8XlPVVMRt6o {\n  max-width: 75%;\n  text-align: center;\n}\n",""]),a.locals={license:"uolgPV5ZH8XlPVVMRt6o"};const s=a},74:(e,n,t)=>{t.d(n,{Z:()=>s});var i=t(81),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([e.id,".build-number {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  font-size: 0.5rem;\n  font-family: monospace;\n  color: #828282;\n}\n.splash-logo {\n  position: absolute;\n  top: 10%;\n  text-align: center;\n  font-size: 3rem;\n  width: 300px;\n  max-width: 80vw;\n}\n\n.splash-button {\n  background: none;\n  border: none;\n  outline: none;\n  box-shadow: none;\n  font-size: 2rem;\n  font-family: comic;\n  animation: blink 2s linear infinite;\n  position: absolute;\n  top: 75%;\n}\n\n@keyframes blink {\n  0% {\n    opacity: 1;\n    scale: 1;\n  }\n  50% {\n    opacity: 0.5;\n    scale: 0.9;\n  }\n  100% {\n    opacity: 1;\n    scale: 1;\n  }\n}\n\n.loading {\n  background: linear-gradient(#2e2e2e, #434343, #2e2e2e);\n  /* border: #4d4d4d solid 3px; */\n  outline: #2e2e2e solid 4px;\n  border-radius: 20px;\n  width: 70vw;\n  max-width: 320px;\n  height: 30px;\n  position: absolute;\n  top: 65%;\n  transform: translateY(-50px);\n  border: rgba(255, 255, 0, 0.102) 4px solid;\n}\n\n.progress {\n  width: 0;\n  height: 100%;\n  border-radius: 20px;\n  background: linear-gradient(#4e4e4e, #3d3d3d, #161616, #2d2d2d);\n}\n\n.loading-text {\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  top: 40px;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 0.8rem;\n}\n",""]);const s=a},402:(e,n,t)=>{t.d(n,{Z:()=>u});var i=t(81),o=t.n(i),r=t(645),a=t.n(r),s=t(667),l=t.n(s),c=new URL(t(412),t.b),d=a()(o()),h=l()(c);d.push([e.id,`@font-face {\n  font-family: "comic";\n  src: url(${h}) format("woff2");\n  font-weight: normal;\n  font-style: normal;\n}\n:root {\n  --bg-100: #16191d;\n  --bg-200: #2a2a2a;\n  --bg-300: #555555;\n\n  --simon-yellow: #cbc100;\n  --simon-green: #00d307;\n  --simon-blue: #004adf;\n  --simon-red: #ff1e09;\n  --simon-press: #fff;\n\n  --round-1: 20px;\n  --round-2: 40px;\n  --round-3: 60px;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\nhtml {\n  background: linear-gradient(\n    135deg,\n    var(--bg-100),\n    var(--bg-200),\n    var(--bg-100)\n  );\n  color: whitesmoke;\n  font-family: "comic";\n}\n\nbody {\n  height: 100dvh;\n  overflow: hidden;\n}\n\n\n\n.scene {\n  margin: auto;\n  outline: solid 1px rgb(28, 28, 28);\n  border-radius: 5px;\n  height: 95dvh;\n  min-height:95dvh;\n  width: 95vw;\n  min-width: 280px;\n  max-width: 400px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  position: relative;\n}\n.bottom-bar {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-shrink: 0;\n  color: var(--colors-white, #ebebeb);\n}\n.container {\n  align-self: center;\n  max-width: 400px;\n}\n.red-square {\n  width: 100px;\n  height: 100px;\n  background-color: red;\n}\n\n.scene-name {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  font-size: 0.9rem;\n  font-family: "Courier New", Courier, monospace;\n  color: rgb(255, 0, 0);\n}\n\n.btn {\n  padding: 15px 30px;\n  border-radius: 10px;\n  border: none;\n  background: linear-gradient(90deg, #3e3e3e, #2e2e2e);\n  color: rgb(238, 238, 238);\n  outline: rgb(63, 63, 63) 1px solid;\n  margin-top: 20px;\n  font-family: comic;\n}\n\n.btn:active {\n  background-color: #00ccff;\n  box-shadow: 1px 1px white;\n  scale: 0.9;\n}\n\n/* utility  */\n.unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.fullscreen {\n  position: absolute;\n  top: 10px;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  background-color: none;\n  font-size: 0.7rem;\n}\n\n.block {\n  width: 140px;\n  height: 140px;\n  background-color: var(--bg-300);\n}\n\n.bottom {\n  position: absolute;\n  bottom: 60px;\n  width: 80%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.hidden {\n  opacity: 0;\n}\n\n`,""]);const u=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",i=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),i&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),i&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,i,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);i&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var r={},a=[],s=0;s<e.length;s++){var l=e[s],c=i.base?l[0]+i.base:l[0],d=r[c]||0,h="".concat(c," ").concat(d);r[c]=d+1;var u=t(h),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var g=o(p,i);i.byIndex=s,n.splice(s,0,{identifier:h,updater:g,references:1})}a.push(h)}return a}function o(e,n){var t=n.domAPI(n);t.update(e);return function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=i(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var s=t(r[a]);n[s].references--}for(var l=i(e,o),c=0;c<r.length;c++){var d=t(r[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}r=l}}},569:e=>{var n={};e.exports=function(e,t){var i=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(i,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},412:(e,n,t)=>{e.exports=t.p+"6c662fa0b7a26049a65a.woff2"}},n={};function t(i){var o=n[i];if(void 0!==o)return o.exports;var r=n[i]={id:i,exports:{}};return e[i](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&!e;)e=i[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var i={};(()=>{t.d(i,{ou:()=>H,tT:()=>Y,c$:()=>F,qN:()=>W});var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),s=t.n(a),l=t(565),c=t.n(l),d=t(216),h=t.n(d),u=t(589),p=t.n(u),g=t(402),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=s().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=h();n()(g.Z,f);g.Z&&g.Z.locals&&g.Z.locals;var m=t(74),b={};b.styleTagTransform=p(),b.setAttributes=c(),b.insert=s().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=h();n()(m.Z,b);m.Z&&m.Z.locals&&m.Z.locals;var v=t(434),x={};x.styleTagTransform=p(),x.setAttributes=c(),x.insert=s().bind(null,"head"),x.domAPI=r(),x.insertStyleElement=h();n()(v.Z,x);v.Z&&v.Z.locals&&v.Z.locals;var y=t(471),w={};w.styleTagTransform=p(),w.setAttributes=c(),w.insert=s().bind(null,"head"),w.domAPI=r(),w.insertStyleElement=h();n()(y.Z,w);y.Z&&y.Z.locals&&y.Z.locals;class S{root;name;instance;kids;constructor(e,n=document.getElementById("root")){this.root=n,this.name=e,this.instance=n.appendChild(this.createSceneWindow())}createSceneWindow(){let e=document.createElement("div");return e.classList.add("scene"),e}gui(){return document.createElement("div")}add(e,n=[]){return n.forEach((n=>e.classList.add(n))),this.instance.appendChild(e),e}delete(){this.instance.remove()}}var E=t(499),k={};k.styleTagTransform=p(),k.setAttributes=c(),k.insert=s().bind(null,"head"),k.domAPI=r(),k.insertStyleElement=h();n()(E.Z,k);E.Z&&E.Z.locals&&E.Z.locals;class T{block;constructor(e="div",n={}){return this.block=document.createElement(e),Object.assign(this.block,n),this.block}}function C(e,n=[]){let t=document.createElement(e);return t.classList.add(...n),t}function L(e="press",n=(()=>{})){let t=document.createElement("button");return t.classList.add("btn","unselectable"),t.appendChild(document.createTextNode(e)),t.addEventListener("click",(()=>n())),t}function I(e="Default comment",n=[]){let t=document.createElement("div");return t.appendChild(document.createTextNode(e)),t.classList.add(["unselectable",...n]),t}function q(e=[]){let n=document.createElement("div");return e.forEach((e=>n.appendChild(e))),n.classList.add("container"),n}function M(e="Game Over",n=0,t,i=(()=>{})){let o=C("div",["game-over-dialog"]),r=document.createTextNode(e);o.appendChild(r);let a=C("div",["game-over-score"]),s=document.createTextNode(n);a.appendChild(s),o.appendChild(a);let l=C("button",["play-again-button"]);l.textContent="Main Menu",l.addEventListener("click",i),o.appendChild(l);let c=C("button",["play-again-button"]);return c.textContent="Play Again",c.addEventListener("click",t),o.appendChild(c),o}class N{constructor(){this.listeners=[]}add(e){this.listeners.push(e)}remove(e){this.listeners=this.listeners.filter((n=>n!==e))}emit(e){this.listeners.forEach((n=>n(e)))}}class A{audioContext;obj;constructor(){this.audioContext=new AudioContext,this.obj=document.createElement("div"),this.obj.classList.add("simon"),this.obj.q1=this.quarter("q1"),this.obj.append(this.obj.q1),this.obj.q2=this.quarter("q2"),this.obj.append(this.obj.q2),this.obj.q3=this.quarter("q3"),this.obj.append(this.obj.q3),this.obj.q4=this.quarter("q4"),this.obj.append(this.obj.q4),this.obj.canUserInteract=!1,this.obj.userInputSignals=new N;let e=document.createElement("div");e.classList.add("bg1"),this.obj.appendChild(e);let n=document.createElement("div");return n.classList.add("fg1"),this.obj.appendChild(n),this.obj}quarter(e){let n=document.createElement("div");return n.classList.add("quarter",e),n.pressed=this.pressed.bind(this,n,e),n.addEventListener("click",(()=>{this.obj.canUserInteract&&(this.pressed(n,e),this.obj.userInputSignals.emit(e))})),n}pressed(e,n){Y.soundPlayCount++;let t=e.style.backgroundColor,i=e.style.boxShadow,o=e.style.transform;e.style.backgroundColor="white",e.style.transform="scale(1.1)",e.style.boxShadow="0 0 20px white",setTimeout((()=>{e.style.backgroundColor=t,e.style.transform=o,e.style.boxShadow=i}),100);var r;(()=>{let e=1;switch(n){case"q1":e=1.2;break;case"q2":e=1.4;break;case"q3":e=1.6;break;case"q4":e=1.8}const t=this.audioContext.createOscillator();t.frequency.setValueAtTime(260*e,this.audioContext.currentTime),t.connect(this.audioContext.destination),t.start(),setTimeout((()=>{t.stop()}),140)})(),r=100,navigator.vibrate&&navigator.vibrate(r)}}function j(){var e=Math.random,n=Math.cos,t=Math.sin,i=Math.PI,o=2*i,r=void 0,a=void 0,s=[],l=3,c=12-l,d=100,h=-.1,u=-h-h,p=.13,g=.18,f=.4,m=.7-f,b=[function(){return v(200*e()|0,200*e()|0,200*e()|0)},function(){var n=200*e()|0;return v(200,n,n)},function(){var n=200*e()|0;return v(n,200,n)},function(){var n=200*e()|0;return v(n,n,200)},function(){return v(200,100,200*e()|0)},function(){return v(200*e()|0,200,200)},function(){var n=256*e()|0;return v(n,n,n)},function(){return b[e()<.5?1:2]()},function(){return b[e()<.5?3:5]()},function(){return b[e()<.5?2:4]()}];function v(e,n,t){return"rgb("+e+","+n+","+t+")"}var x=.1,y=x+x;var w=document.createElement("div");function S(r){this.frame=0,this.outer=document.createElement("div"),this.inner=document.createElement("div"),this.outer.appendChild(this.inner);var a=this.outer.style,s=this.inner.style;a.position="absolute",a.width=l+c*e()+"px",a.height=l+c*e()+"px",s.width="100%",s.height="100%",s.backgroundColor=r(),a.perspective="50px",a.transform="rotate("+360*e()+"deg)",this.axis="rotate3D("+n(360*e())+","+n(360*e())+",0,",this.theta=360*e(),this.dTheta=f+m*e(),s.transform=this.axis+this.theta+"deg)",this.x=window.innerWidth*e(),this.y=-d,this.dx=t(h+u*e()),this.dy=p+g*e(),a.left=this.x+"px",a.top=this.y+"px",this.splineX=function(){for(var n=[x,1-x],t=1-y,i=[0,1];t;){var o,r,a,s,l,c,d,h=t*e();for(o=0,r=n.length,t=0;o<r;o+=2){if(s=n[o],h<t+(a=(l=n[o+1])-s)){i.push(h+=s-t);break}t+=a}for(c=h-x,d=h+x,o=n.length-1;o>0;o-=2)s=n[r=o-1],l=n[o],s>=c&&s<d?l>d?n[r]=d:n.splice(r,2):s<c&&l>c&&(l<=d?n[o]=c:n.splice(o,0,c,d));for(o=0,r=n.length,t=0;o<r;o+=2)t+=n[o+1]-n[o]}return i.sort()}(),this.splineY=[];for(var b=1,v=this.splineX.length-1;b<v;++b)this.splineY[b]=d*e();this.splineY[0]=this.splineY[v]=d*e(),this.update=function(e,r){this.frame+=r,this.x+=this.dx*r,this.y+=this.dy*r,this.theta+=this.dTheta*r;for(var l=this.frame%7777/7777,c=0,h=1;l>=this.splineX[h];)c=h++;var u,p,g,f=(u=this.splineY[c],p=this.splineY[h],g=(l-this.splineX[c])/(this.splineX[h]-this.splineX[c]),(1-n(i*g))/2*(p-u)+u);return l*=o,a.left=this.x+f*n(l)+"px",a.top=this.y+f*t(l)+"px",s.transform=this.axis+this.theta+"deg)",this.y>e+d}}w.id="confetti",w.style.position="fixed",w.style.top="0",w.style.left="0",w.style.width="100%",w.style.height="0",w.style.overflow="visible",w.style.zIndex="9999",function(){let n=!1,t=document.createElement("button");if(t.classList.add("close-button"),t.textContent="End Party",t.addEventListener("click",(()=>{n=!0,t.remove()})),document.body.appendChild(t),!a){document.body.appendChild(w);var i=b[0];!function n(){var t=new S(i);s.push(t),w.appendChild(t.outer),r=setTimeout(n,40*e())}();var o=void 0;requestAnimationFrame((function e(t){var i=o?t-o:0;o=t;for(var l=window.innerHeight,c=s.length-1;c>=0;--c)s[c].update(l,i)&&(w.removeChild(s[c].outer),s.splice(c,1));if(r||s.length){if(!n)return a=requestAnimationFrame(e);cancelAnimationFrame(a)}document.body.removeChild(w),a=void 0}))}}()}class P extends S{ENUM={freshGame:"FRESH_GAME",start:"START",watch:"WATCH",getReady:"GET_READY",replay:"REPLAY",nextLevel:"NEXT_LEVEL",gameOver:"GAME_OVER",highScore:"HIGH_SCORE",pause:"PAUSE"};widgetInstance;wi;trafficLight;instructions;removeOnStateChange=[];level=1;userInput;activeSequence;constructor(){super("Game Scene"),this.widgetInstance=new A,this.wi=this.add(this.widgetInstance),this.trafficLight=this.add(function(e="white"){let n=new T;return n.classList.add("traffic-light"),n.style.backgroundColor=e,n}()),this.score=document.createElement("div"),this.score.innerText=this.level,this.score.classList.add("score"),this.trafficLight.appendChild(this.score),this.instructions=this.add(I("instructions"),["instructions"]),this.changeState(this.ENUM.freshGame),this.userInput=[],this.activeSequence=[],this.wi.userInputSignals.add(this.userInputListener.bind(this));let e=C("button",["hidden"]);this.add(q([e]),["flex","bottom"])}changeState(e,n=[]){this.score.innerText=this.level,this.loop(e),n.forEach((e=>e.remove()))}setInstructions(e=" ",n="white"){this.instructions.innerText=e,this.trafficLight.style.backgroundColor=n,this.trafficLight.style.boxShadow=`0 0 20px ${n}`}loop(e){switch(e){case this.ENUM.freshGame:this.freshGame();break;case this.ENUM.start:this.start();break;case this.ENUM.watch:this.watch();break;case this.ENUM.getReady:this.getReady();break;case this.ENUM.replay:this.replay();break;case this.ENUM.nextLevel:this.nextLevel();break;case this.ENUM.gameOver:this.gameOver();break;case this.ENUM.highScore:this.highScore();break;case this.ENUM.pause:this.pause()}}freshGame(){this.setInstructions("New Game","blue"),this.changeState(this.ENUM.start)}start(){this.setInstructions("Watch","pink"),this.userInput=[],setTimeout((()=>{this.changeState(this.ENUM.watch)}),100)}watch(){this.setInstructions("Watch","yellow"),this.activeSequence=this.generateSequence(this.level),this.playSequence(this.activeSequence).then((()=>{setTimeout((()=>{this.changeState(this.ENUM.getReady)}),400)}))}getReady(){this.setInstructions("Get Ready","red"),setTimeout((()=>{this.changeState(this.ENUM.replay)}))}replay(){this.setInstructions("Replay","green"),this.wi.canUserInteract=!0}userInputListener(e){this.userInput.push(e),this.checkUserInput()}checkUserInput(){this.userInput.map(((e,n)=>{e.slice(1)===this.activeSequence[n]+""?n===this.activeSequence.length-1&&this.changeState(this.ENUM.nextLevel):this.changeState(this.ENUM.gameOver)}))}nextLevel(){this.setInstructions("Good Job","white"),this.wi.canUserInteract=!1,setTimeout((()=>{this.changeState(this.ENUM.start),this.level++}),400)}pause(){this.add(M("Pause",this.level,(()=>{H.changeScene(new P)})))}gameOver(){if(this.level-1>Y.personalBest)this.playWinSound(),j(),this.add(M("New High Score",this.level-1,(()=>{H.changeScene(new P)}),(()=>{H.changeScene(new O)}))),Y.personalBest=this.level-1,Y.saveToLocalStorage("personalBest",this.level-1),Y.syncVariablesWithLocalStorage();else{let e=["Nailed It!","You Rocked It!","Awesome Job!","Top-Notch Play!","Epic Finish!","You're a Pro!","Well Done, Champ!","Game Over, You Rule!","High-Five Moment!","Smashin' Success!"],n=e[Math.floor(Math.random()*e.length)];this.playWinSound(),this.add(M(n,this.level-1,(()=>{H.changeScene(new P)}),(()=>{H.changeScene(new O)})))}this.wi.canUserInteract=!1}playWinSound(){let e=new AudioContext;const n=e.createOscillator();n.frequency.setValueAtTime(100,e.currentTime),n.connect(e.destination),n.start(),setTimeout((()=>{n.stop()}),300)}highScore(){this.instructions.innerText="High Score state"}playNote(e){let n="q"+e;this.wi[`${n}`].pressed()}playSequence(e){let n=new Promise((n=>{let i=setInterval((()=>{this.playNote(e[t++]),t===e.length&&(clearInterval(i),n())}),300)})),t=0;return n}generateSequence(){let e=this.activeSequence,n=Math.floor(4*Math.random()+1);if(e[e.length-1]===n&&e[e.length-2]===n){n=Math.floor(4*Math.random()+1)}return e.push(n),e}}var U=t(197),Z={};Z.styleTagTransform=p(),Z.setAttributes=c(),Z.insert=s().bind(null,"head"),Z.domAPI=r(),Z.insertStyleElement=h();n()(U.Z,Z);const R=U.Z&&U.Z.locals?U.Z.locals:void 0;class z extends S{constructor(){super("Settings scene"),this.add(I("Simon Memory Challenge")),this.add(I(`Version ${W}`)),this.add(I("2023")),this.add(C("br")),this.add(I("This is an open source project under the MIT license"),[R.license]);let e=document.createElement("a");e.href="https://github.com/yassermuayed/simon-says-replay",e.setAttribute("target","_blank"),e.appendChild(document.createTextNode("Github")),this.add(e),this.add(C("a")),this.add(C("br"));let n=C("a");this.add(I("Created by Yasser Muayed")),this.add(I("Send feedback or")),n.href="https://www.instagram.com/yassermuayed/",n.setAttribute("target","_blank"),n.appendChild(document.createTextNode("Follow me on IG")),this.add(n),this.add(C("br")),this.add(L("Reset Game ",(async()=>{await localStorage.clear(),location.reload()}))),this.add(q([L("Back",(()=>{H.changeScene(new O)}))]),["flex","bottom"])}}const G=t.p+"8ba966504fa5769ddd4d.webp";class O extends S{constructor(){super("home scene");let e=document.createElement("img");e.src=G,e.className="home-logo",this.add(e),this.add(L("New Game",(()=>H.changeScene(new P))),["new-game-btn"]),this.add(q([this.add(I("☆ High Score ☆")),this.add(I(Y.personalBest))]),["high-score"]);let n={title:"Simon Memory Challenge",text:"Get Simon Memory Challenge on Google Play Now!",url:"https://play.google.com/store/apps/details?id=com.yassermuayed.ssr"},t=document.createElement("button");t.textContent="Share",t.classList.add("btn"),t.addEventListener("click",(async()=>{try{await navigator.share(n)}catch(e){}})),this.add(q([t,L("About",(()=>H.changeScene(new z)))]),["flex","bottom"])}}const B=t.p+"d35f904b1764abd38a0c.webp";class V extends S{constructor(){super("Splash scene"),this.add(I(`V ${W} b${F}`),["build-number"]);let e=C("img",["splash-logo"]);e.src=B,this.add(e),this.loadingWidget=this.add(function(){let e=document.createElement("div");e.classList.add("loading");let n=document.createElement("div");n.classList.add("progress"),e.progress=n;let t=document.createElement("div");return t.classList.add("loading-text"),e.loadingText=t,e.appendChild(t),e.appendChild(n),e}()),setTimeout((()=>{this.loadingWidget.loadingText.innerText="Loading Complete",this.add(L("TAP TO START",(()=>{navigator.vibrate(100),this.requestFullscreen(document.documentElement),H.changeScene(new O)})),["splash-button"])}),300)}requestFullscreen(e){}}const W="2.0.1",F="6",H=new class{startingScene;constructor(e){this.startingScene=e,this.activeScene=null,null===this.activeScene&&(this.activeScene=new V)}changeScene(e){this.activeScene.delete(),this.activeScene=e}},Y=new class{hasPlayedBefore;timesPlayedCount;lastTimePlayed;isSignedIn;playerName;personalBest;proofOfPersonalBest;allScoreProofs;worldRecord;WRHolder;soundPlayCount;constructor(){this.soundPlayCount=0,this.hasPlayedBefore=this.getFromLocalStorage("hasPlayedBefore"),this.hasPlayedBefore?this.syncVariablesWithLocalStorage():this.firstTimeSetUp()}firstTimeSetUp(){this.saveToLocalStorage("hasPlayedBefore",!0),this.initializeLocalStorageDefaultValues(),this.syncVariablesWithLocalStorage()}initializeLocalStorageDefaultValues(){this.saveToLocalStorage("playerName","Guest"),this.saveToLocalStorage("personalBest",0)}syncVariablesWithLocalStorage(){this.playerName=this.getFromLocalStorage("playerName"),this.personalBest=this.getFromLocalStorage("personalBest")}saveToLocalStorage(e,n){localStorage.setItem(e,JSON.stringify(n))}getFromLocalStorage(e){return JSON.parse(localStorage.getItem(e))}}})()})();