(()=>{"use strict";var e={499:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(81),s=n.n(o),i=n(645),a=n.n(i)()(s());a.push([e.id,"/* ===================================== */\n.icon-button {\n  border-radius: 8px;\n  background: linear-gradient(90deg, #3e3e3e, #2e2e2e);\n  box-shadow: 0px 0 0.6em #4a4a4a;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 16px;\n}\n\n.icon-button img svg {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n/* BUG not working on mobile */\n.icon-button:active {\n  scale: 0.9;\n  background-color: #fff;\n}\n\n/* ===================================== */\n/* dialog */\n/* ===================================== */\n\n.dialog {\n  margin: auto;\n  min-width: 75%;\n  padding: 20px;\n}\n.dialog-title {\n  background-color: bisque;\n  padding: 5px 0px;\n}\n\n.dialog-button {\n  padding: 10px;\n}\n\n.change-name-filed {\n  outline: white 1px solid;\n  width: 75%;\n  display: flex;\n  justify-content: space-between;\n}\n\n/* ===================================== */\n\n/* ===================================== */\n.game-over-dialog {\n  background: linear-gradient(75deg, #3e3e3e, #5e5e5e, #3e3e3e);\n  color: rgb(238, 238, 238);\n  padding: 20px;\n  border-radius: 20px;\n  width: 75%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  box-shadow: 2px 2px 1em #000000;\n}\n\n.game-over-score {\n  font-size: 3rem;\n  color: rgb(195, 195, 2);\n  animation: color-change 2s infinite;\n}\n@keyframes color-change {\n  0% {\n    color: #ffffbe;\n    scale: 1.2;\n  }\n  25% {\n    color: #ffffaa;\n    scale: 1;\n  }\n  50% {\n    color: #ffffbe;\n    scale: 1.2;\n  }\n  75% {\n    color: #ffffaa;\n    scale: 1;\n  }\n  100% {\n    color: #ffffbe;\n    scale: 1.2;\n    rotate: 360deg;\n  }\n}\n.play-again-button {\n  padding: 15px 30px;\n  border-radius: 10px;\n  border: none;\n  background: linear-gradient(90deg, #3e3e3e, #2e2e2e);\n  color: rgb(238, 238, 238);\n  outline: rgb(129, 129, 129) 1px solid;\n  margin-top: 20px;\n}\n\n/*  */\n.logo-image {\n  width: 30%;\n  margin: 0 auto;\n}\n",""]);const r=a},471:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),s=n.n(o),i=n(645),a=n.n(i),r=n(402),l=a()(s());l.i(r.Z),l.push([e.id,".instructions {\n  font-size: 2rem;\n  color: pink;\n  position: absolute;\n  top: 6rem;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n.traffic-light {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  position: absolute;\n  top: 3rem;\n  background-color: green;\n}\n\n.simon {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.quarter {\n  width: 140px;\n  height: 140px;\n  background-color: #fff;\n  border: var(--bg-200) 6px solid;\n}\n\n.pressed {\n  background-color: var(--simon-press);\n  height: 5000px;\n}\n\n.q1 {\n  background-color: var(--simon-yellow);\n  border-radius: var(--round-1);\n  border-top-left-radius: 100%;\n}\n\n.q2 {\n  background-color: var(--simon-green);\n  border-radius: var(--round-1);\n  border-top-right-radius: 100%;\n}\n\n.q3 {\n  background-color: var(--simon-blue);\n  border-radius: var(--round-1);\n  border-bottom-left-radius: 100%;\n}\n\n.q4 {\n  background-color: var(--simon-red);\n  border-radius: var(--round-1);\n  border-bottom-right-radius: 100%;\n}\n\n.red {\n  background-color: red;\n  min-width: 20px;\n  min-height: 20px;\n}\n",""]);const c=l},434:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(81),s=n.n(o),i=n(645),a=n.n(i)()(s());a.push([e.id,".new-game-btn {\n  background-color: gray;\n}\n",""]);const r=a},74:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(81),s=n.n(o),i=n(645),a=n.n(i)()(s());a.push([e.id,".splash-logo {\n  /* transform: translateY(-50px); */\n  position: absolute;\n  top: 10%;\n  text-align: center;\n  font-size: 3rem;\n}\n\n.splash-button {\n  background: none;\n  border: none;\n  outline: none;\n  box-shadow: none;\n  font-size: 2rem;\n  font-family: comic;\n  animation: blink 2s linear infinite;\n  position: absolute;\n  top: 70%;\n}\n\n@keyframes blink {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.loading {\n  background: linear-gradient(#2e2e2e, #434343, #2e2e2e);\n  /* border: #4d4d4d solid 3px; */\n  outline: #2e2e2e solid 4px;\n  border-radius: 20px;\n  width: 70vw;\n  max-width: 320px;\n  height: 30px;\n  position: absolute;\n  top: 60%;\n  transform: translateY(-50px);\n}\n\n.progress {\n  width: 0;\n  height: 100%;\n  border-radius: 20px;\n  background: linear-gradient(#4e4e4e, #3d3d3d, #161616, #2d2d2d);\n}\n\n.loading-text {\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  top: 40px;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 0.8rem;\n}\n",""]);const r=a},402:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(81),s=n.n(o),i=n(645),a=n.n(i),r=n(667),l=n.n(r),c=new URL(n(350),n.b),d=a()(s()),h=l()(c);d.push([e.id,`@font-face {\n  font-family: "comic";\n  src: url(${h}) format("woff2");\n  font-weight: normal;\n  font-style: normal;\n}\n:root {\n  --bg-100: #16191d;\n  --bg-200: #2a2a2a;\n  --bg-300: #555555;\n\n  --simon-yellow: #cbc100;\n  --simon-green: #00d307;\n  --simon-blue: #004adf;\n  --simon-red: #ff1e09;\n  --simon-press: #fff;\n\n  --round-1: 20px;\n  --round-2: 40px;\n  --round-3: 60px;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\nhtml {\n  /* BUG why is this not working */\n  background-color: green;\n}\n\nbody {\n  height: 100vh;\n  overflow: hidden;\n  background: linear-gradient(135deg, var(--bg-100), var(--bg-200));\n  color: whitesmoke;\n\n  font-family: "comic";\n}\n\n#root {\n  display: flex;\n  height: 100dvh;\n  width: 100vw;\n}\n\n.scene {\n  margin: auto;\n  outline: solid 1px rgb(28, 28, 28);\n  border-radius: 5px;\n  height: 95dvh;\n  width: 95vw;\n  min-width: 279px;\n  max-width: 400px;\n  min-height: 600px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  position: relative;\n}\n.bottom-bar {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-shrink: 0;\n  color: var(--colors-white, #ebebeb);\n}\n.container {\n  align-self: center;\n  max-width: 400px;\n}\n.red-square {\n  width: 100px;\n  height: 100px;\n  background-color: red;\n}\n\n.scene-name {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  font-size: 0.9rem;\n  font-family: "Courier New", Courier, monospace;\n  color: rgb(255, 0, 0);\n}\n\n.btn {\n  padding: 0.6rem 1.4rem;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border-radius: 50px;\n  font-weight: 900;\n  text-transform: uppercase;\n  font-size: 1.2rem;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  background-color: #0064b6;\n  color: white;\n  box-shadow: 2px 2px white;\n}\n\n.btn:active {\n  background-color: #00ccff;\n  box-shadow: 1px 1px white;\n}\n\n/* utility  */\n.unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.fullscreen {\n  position: absolute;\n  top: 10px;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  background-color: none;\n  font-size: 0.7rem;\n}\n\n.block {\n  width: 140px;\n  height: 140px;\n  background-color: var(--bg-300);\n}\n\n.bottom {\n  position: absolute;\n  bottom: 0;\n  width: 80%;\n  display: flex;\n  justify-content: space-between;\n}\n\ncanvas {\n  overflow-y: hidden;\n  overflow-x: hidden;\n  width: 100%;\n  margin: 0;\n  z-index: 10000;\n}`,""]);const u=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,s,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var r=0;r<this.length;r++){var l=this[r][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],r=0;r<e.length;r++){var l=e[r],c=o.base?l[0]+o.base:l[0],d=i[c]||0,h="".concat(c," ").concat(d);i[c]=d+1;var u=n(h),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var g=s(p,o);o.byIndex=r,t.splice(r,0,{identifier:h,updater:g,references:1})}a.push(h)}return a}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var i=o(e=e||[],s=s||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var r=n(i[a]);t[r].references--}for(var l=o(e,s),c=0;c<i.length;c++){var d=n(i[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=l}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,s&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},350:(e,t,n)=>{e.exports=n.p+"./assets/comicrelief-bold-webfont.woff2"}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var s=o.length-1;s>-1&&!e;)e=o[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0;var o={};(()=>{n.d(o,{ou:()=>U,tT:()=>z,qN:()=>O});var e=n(379),t=n.n(e),s=n(795),i=n.n(s),a=n(569),r=n.n(a),l=n(565),c=n.n(l),d=n(216),h=n.n(d),u=n(589),p=n.n(u),g=n(402),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=r().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=h(),t()(g.Z,m),g.Z&&g.Z.locals&&g.Z.locals;var f=n(74),b={};b.styleTagTransform=p(),b.setAttributes=c(),b.insert=r().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=h(),t()(f.Z,b),f.Z&&f.Z.locals&&f.Z.locals;var v=n(499),x={};x.styleTagTransform=p(),x.setAttributes=c(),x.insert=r().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=h(),t()(v.Z,x),v.Z&&v.Z.locals&&v.Z.locals;class y{block;constructor(e="div",t={}){return this.block=document.createElement(e),Object.assign(this.block,t),this.block}}const w=n.p+"./assets/defaulticon.svg",S=n.p+"./assets/android-chrome-512x512.png";function k(e="press",t=(()=>console.log("Default Action"))){let n=document.createElement("button");return n.classList.add("btn","unselectable"),n.appendChild(document.createTextNode(e)),n.addEventListener("click",(()=>t())),n}function E(e,t=(()=>{console.log("Default Action")})){let n=document.createElement("button");n.classList.add("icon-button");let o=document.createElement("img");return o.src=e,n.appendChild(o),n.addEventListener("click",(()=>t())),n}function C(e="Default comment",t=[]){let n=document.createElement("div");return n.appendChild(document.createTextNode(e)),n.classList.add(["unselectable",...t]),n}function L(e=[]){let t=document.createElement("div");return e.forEach((e=>t.appendChild(e))),t.classList.add("container"),t}function T(e="Game Over",t=0,n){let o=document.createElement("div");o.classList.add("game-over-dialog");let s=document.createTextNode(e);o.appendChild(s);let i=document.createElement("div");i.classList.add("game-over-score");let a=document.createTextNode(t);i.appendChild(a),o.appendChild(i);let r=document.createElement("button");return r.textContent="Play Again",r.classList.add("play-again-button"),r.addEventListener("click",n),o.appendChild(r),o}class q{root;name;instance;kids;constructor(e,t=document.getElementById("root")){console.log("scene class constructor"),this.root=t,this.name=e,this.instance=t.appendChild(this.createSceneWindow(this.name)),this.kids=[]}createSceneWindow(e){let t=document.createElement("div");t.classList.add("scene");let n=document.createElement("div");n.classList.add("scene-name","unselectable"),n.addEventListener("click",(()=>{location.reload()}));let o=document.createElement("button");return o.appendChild(document.createTextNode(O+" "+e)),n.appendChild(o),t.appendChild(n),"Game Scene"===e&&t.appendChild(this.gui()),t}gui(){let e=document.createElement("div");e.classList.add("bottom-bar");let t=document.createTextNode("Info Bar");return e.appendChild(t),e.appendChild(k("Reset",(()=>{location.reload()}))),e}add(e,t=[]){return t.forEach((t=>e.classList.add(t))),this.kids.push(e),this.instance.appendChild(e),e}delete(){this.instance.remove()}}var I=n(434),_={};_.styleTagTransform=p(),_.setAttributes=c(),_.insert=r().bind(null,"head"),_.domAPI=i(),_.insertStyleElement=h(),t()(I.Z,_),I.Z&&I.Z.locals&&I.Z.locals;const P=n.p+"./assets/home.svg";var M=n(471),N={};N.styleTagTransform=p(),N.setAttributes=c(),N.insert=r().bind(null,"head"),N.domAPI=i(),N.insertStyleElement=h(),t()(M.Z,N),M.Z&&M.Z.locals&&M.Z.locals;class A{constructor(){this.listeners=[]}add(e){this.listeners.push(e)}remove(e){this.listeners=this.listeners.filter((t=>t!==e))}emit(e){this.listeners.forEach((t=>t(e))),console.log("Signal emitted with message: ",e)}}class j{audioContext;obj;constructor(){return console.log("Widget constructor"),this.audioContext=new AudioContext,this.obj=document.createElement("div"),this.obj.classList.add("simon"),this.obj.q1=this.quarter("q1"),this.obj.append(this.obj.q1),this.obj.q2=this.quarter("q2"),this.obj.append(this.obj.q2),this.obj.q3=this.quarter("q3"),this.obj.append(this.obj.q3),this.obj.q4=this.quarter("q4"),this.obj.append(this.obj.q4),this.obj.canUserInteract=!1,this.obj.userInputSignals=new A,this.obj}quarter(e){let t=document.createElement("div");return t.classList.add("quarter",e),t.pressed=this.pressed.bind(this,t,e),t.addEventListener("click",(()=>{this.obj.canUserInteract&&(this.pressed(t,e),this.obj.userInputSignals.emit(e))})),t}pressed(e,t){z.soundPlayCount++,console.log("press count: ",z.soundPlayCount),console.log(e," pressed with class name: ",t);let n=e.style.backgroundColor,o=e.style.transform;e.style.backgroundColor="white",e.style.transform="scale(1.2)",setTimeout((()=>{e.style.backgroundColor=n,e.style.transform=o}),100),(()=>{let e=1;switch(t){case"q1":e=1;break;case"q2":e=1.2;break;case"q3":e=1.3;break;case"q4":e=1.4}const n=this.audioContext.createOscillator();n.frequency.setValueAtTime(540*e,this.audioContext.currentTime),n.connect(this.audioContext.destination),n.start(),setTimeout((()=>{n.stop()}),100)})(),navigator.vibrate&&navigator.vibrate(100)}}class F extends q{FSMEnum={freshGame:"FRESH_GAME",start:"START",watch:"WATCH",getReady:"GET_READY",replay:"REPLAY",nextLevel:"NEXT_LEVEL",gameOver:"GAME_OVER",highScore:"HIGH_SCORE"};widgetInstance;wi;trafficLight;instructions;removeOnStateChange=[];level=1;userInput;activeSequence;constructor(){super("Game Scene"),console.log("=========== Game Scene"),console.log("Elements in scene",this.kids.length,this.kids),this.widgetInstance=new j,this.wi=this.add(this.widgetInstance),this.trafficLight=this.add(function(e="white"){let t=new y;return t.classList.add("traffic-light"),t.style.backgroundColor=e,t}()),this.instructions=this.add(C("instructions"),["instructions"]),this.changeState(this.FSMEnum.freshGame),this.userInput=[],this.activeSequence=[],this.wi.userInputSignals.add(this.userInputListener.bind(this))}changeState(e,t=[]){this.loop(e),t.forEach((e=>e.remove()))}setInstructions(e=" ",t="white"){this.instructions.innerText=e,this.trafficLight.style.backgroundColor=t}loop(e){switch(e){case this.FSMEnum.freshGame:this.freshGame();break;case this.FSMEnum.start:this.start();break;case this.FSMEnum.watch:this.watch();break;case this.FSMEnum.getReady:this.getReady();break;case this.FSMEnum.replay:this.replay();break;case this.FSMEnum.nextLevel:this.nextLevel();break;case this.FSMEnum.gameOver:this.gameOver();break;case this.FSMEnum.highScore:this.highScore()}}freshGame(){console.log("freshGame state"),this.setInstructions("New Game","blue"),this.changeState(this.FSMEnum.start)}start(){console.log("start state"),this.setInstructions("Start","pink"),this.userInput=[],setTimeout((()=>{this.changeState(this.FSMEnum.watch),console.log()}),500)}watch(){console.log("watch state"),this.setInstructions("Watch","yellow"),this.activeSequence=this.generateSequence(this.level),this.playSequence(this.activeSequence).then((()=>{setTimeout((()=>{this.changeState(this.FSMEnum.getReady)}),400)}))}getReady(){console.log("getReady state"),this.setInstructions("Get Ready","red"),setTimeout((()=>{this.changeState(this.FSMEnum.replay)}),2e3)}replay(){console.log("replay state"),this.setInstructions("Replay","green"),console.dir(this.wi),this.wi.canUserInteract=!0}userInputListener(e){console.log("userInputListener received message: ",e),this.userInput.push(e),this.checkUserInput(),console.log(this.userInput," after push")}checkUserInput(){console.log("%c checkUserInput","background: red; color: #bada55; margin: 10px"),this.userInput.map(((e,t)=>{e.slice(1)===this.activeSequence[t]+""?(console.log("%c Correct","background: green",e.slice(1)," is equal to ",this.activeSequence[t]," at index: ",t),t===this.activeSequence.length-1&&this.changeState(this.FSMEnum.nextLevel)):(console.log("%c Incorrect","background: red",e.slice(1)," is not equal to ",this.activeSequence[t]," at index: ",t),this.changeState(this.FSMEnum.gameOver))}))}nextLevel(){console.log("%c nextLevel state","background: green; color: white; padding: 0px 100px"),this.setInstructions("Next Level","white"),this.wi.canUserInteract=!1,setTimeout((()=>{this.changeState(this.FSMEnum.start),this.level++}),2e3)}gameOver(){console.log("gameOver state"),this.level>z.personalBest?(function(){var e=Math.random,t=Math.cos,n=Math.sin,o=Math.PI,s=2*o,i=void 0,a=void 0,r=[],l=100,c=-.1,d=[function(){return h(200*e()|0,200*e()|0,200*e()|0)},function(){var t=200*e()|0;return h(200,t,t)},function(){var t=200*e()|0;return h(t,200,t)},function(){var t=200*e()|0;return h(t,t,200)},function(){return h(200,100,200*e()|0)},function(){return h(200*e()|0,200,200)},function(){var t=256*e()|0;return h(t,t,t)},function(){return d[e()<.5?1:2]()},function(){return d[e()<.5?3:5]()},function(){return d[e()<.5?2:4]()}];function h(e,t,n){return"rgb("+e+","+t+","+n+")"}var u=.1,p=document.createElement("div");function g(i){this.frame=0,this.outer=document.createElement("div"),this.inner=document.createElement("div"),this.outer.appendChild(this.inner);var a=this.outer.style,r=this.inner.style;a.position="absolute",a.width=3+9*e()+"px",a.height=3+9*e()+"px",r.width="100%",r.height="100%",r.backgroundColor=i(),a.perspective="50px",a.transform="rotate("+360*e()+"deg)",this.axis="rotate3D("+t(360*e())+","+t(360*e())+",0,",this.theta=360*e(),this.dTheta=.4+.29999999999999993*e(),r.transform=this.axis+this.theta+"deg)",this.x=window.innerWidth*e(),this.y=-100,this.dx=n(c+.2*e()),this.dy=.13+.18*e(),a.left=this.x+"px",a.top=this.y+"px",this.splineX=function(){for(var t=[u,.9],n=.8,o=[0,1];n;){var s,i,a,r,l,c,d,h=n*e();for(s=0,i=t.length,n=0;s<i;s+=2){if(r=t[s],h<n+(a=(l=t[s+1])-r)){o.push(h+=r-n);break}n+=a}for(c=h-u,d=h+u,s=t.length-1;s>0;s-=2)r=t[i=s-1],l=t[s],r>=c&&r<d?l>d?t[i]=d:t.splice(i,2):r<c&&l>c&&(l<=d?t[s]=c:t.splice(s,0,c,d));for(s=0,i=t.length,n=0;s<i;s+=2)n+=t[s+1]-t[s]}return o.sort()}(),this.splineY=[];for(var d=1,h=this.splineX.length-1;d<h;++d)this.splineY[d]=l*e();this.splineY[0]=this.splineY[h]=l*e(),this.update=function(e,i){this.frame+=i,this.x+=this.dx*i,this.y+=this.dy*i,this.theta+=this.dTheta*i;for(var c=this.frame%7777/7777,d=0,h=1;c>=this.splineX[h];)d=h++;var u,p,g,m=(u=this.splineY[d],p=this.splineY[h],g=(c-this.splineX[d])/(this.splineX[h]-this.splineX[d]),(1-t(o*g))/2*(p-u)+u);return c*=s,a.left=this.x+m*t(c)+"px",a.top=this.y+m*n(c)+"px",r.transform=this.axis+this.theta+"deg)",this.y>e+l}}p.id="confetti",p.style.position="fixed",p.style.top="0",p.style.left="0",p.style.width="100%",p.style.height="0",p.style.overflow="visible",p.style.zIndex="9999",function(){if(!a){document.body.appendChild(p);var t=d[0];!function n(){var o=new g(t);r.push(o),p.appendChild(o.outer),i=setTimeout(n,40*e())}();var n=void 0;requestAnimationFrame((function e(t){var o=n?t-n:0;n=t;for(var s=window.innerHeight,l=r.length-1;l>=0;--l)r[l].update(s,o)&&(p.removeChild(r[l].outer),r.splice(l,1));if(i||r.length)return a=requestAnimationFrame(e);document.body.removeChild(p),a=void 0}))}}()}(),this.add(T("New Personal Best",this.level,(()=>{U.changeScene(new F)}))),z.personalBest=this.level,z.saveToLocalStorage("personalBest",this.level),z.syncVariablesWithLocalStorage()):this.add(T("Game Over",this.level,(()=>{U.changeScene(new F)}))),this.wi.canUserInteract=!1}highScore(){console.log("highScore state"),this.instructions.innerText="High Score state"}playNote(e){let t="q"+e;this.wi[`${t}`].pressed()}playSequence(e){let t=new Promise((t=>{let o=setInterval((()=>{this.playNote(e[n++]),n===e.length&&(clearInterval(o),t())}),300)})),n=0;return t}generateSequence(){let e=this.activeSequence,t=Math.floor(4*Math.random()+1);if(e[e.length-1]===t&&e[e.length-2]===t){let n=t;t=Math.floor(4*Math.random()+1),console.log("%c Prevent triple note repetition","background: pink; color: black; padding : 10px",e[e.length-1]===t," Previous Random Note was : ",n," and the new random note is : ",t)}return e.push(t),console.log("%c Generated sequence: ","background: blue; color: white; font-weight: bold",e),e}}class B extends q{constructor(){super("Settings scene"),this.add(C("Settings Page")),this.add(function(){let e=document.createElement("div"),t=function(e="Default Paragraph Text",t){let n=document.createElement("dialog");n.classList.add("dialog");let o=document.createElement("p");o.classList.add("dialog-title"),o.innerText=e,n.appendChild(o);let s=document.createElement("form");s.setAttribute("method","dialog");let i=document.createElement("button");return i.type="submit",i.addEventListener("click",console.log("clicked")),i.textContent="Action",i.classList.add("dialog-button"),s.appendChild(function(){let e=document.createElement("input");return e.placeholder="Type Your Name Here",e.value=z.playerName,e}()),s.appendChild(i),s.addEventListener("submit",(e=>{let n=e.target[0].value;""!=n&&(console.log(typeof e.target[0].value),console.log("form submitted",e.target[0].value),t(n))})),n.appendChild(s),n}("Enter Name",(e=>{console.log("get value funciton",e),z.saveToLocalStorage("playerName",e),z.syncVariablesWithLocalStorage(),n.textContent=z.playerName}));e.classList.add("change-name-filed");let n=document.createElement("p");n.textContent=z.playerName,e.appendChild(n);let o=document.createElement("button"),s=document.createElement("img");return s.src=w,o.appendChild(s),o.addEventListener("click",(()=>{console.log("form name pressed"),t.setAttribute("open","true")})),e.appendChild(o),e.appendChild(t),e}()),this.add(L([this.add(C("Name"))])),this.add(k("Clear Local Storage",(()=>{localStorage.clear()}))),this.add(L([E(P,(()=>U.changeScene(new Z))),E(w,(()=>U.changeScene(new B)))]),["flex","bottom"])}}class Z extends q{constructor(){super("home scene"),console.log("========== Home scene"),this.add(function(){let e=document.createElement("div");e.classList.add("logo-image");let t=document.createElement("img");return t.src=S,t.style.maxWidth="100%",e.appendChild(t),e}()),this.add(C("Simon Memory Challenge")),this.add(k("New Game",(()=>U.changeScene(new F))),["new-game-btn"]),this.add(C("____________")),this.add(C("____________")),this.add(C(z.playerName)),this.add(C("Personal Best")),this.add(C(z.personalBest)),this.add(C("____________")),this.add(C("World record")),this.add(C("0")),this.add(C("World Champion")),this.add(C("user name")),this.add(L([E(P,(()=>{})),E(w,(()=>U.changeScene(new B)))]),["flex","bottom"])}}const R=[];R.push({execute:()=>{}});const G=R;class W extends q{loadingWidget;loadingProgress;loadingComplete;operations;constructor(){super("Splash scene"),console.log("========= splash scene constructor"),this.loadingComplete=!1,this.loadingProgress=0,this.operations=G,this.add(C("SIMON SAYS REPLAY"),["splash-logo"]),this.loadingWidget=this.add(function(){let e=document.createElement("div");e.classList.add("loading");let t=document.createElement("div");t.classList.add("progress"),e.progress=t;let n=document.createElement("div");return n.classList.add("loading-text"),e.loadingText=n,e.appendChild(n),e.appendChild(t),e}()),console.log("Loading Widget : ",this.loadingWidget),console.dir(this.loadingWidget),this.startLoading()}requestFullscreen(e){e.requestFullscreen&&e.requestFullscreen()}update(e,t){this.loadingWidget.progress.style.width=100*this.loadingProgress+"%";let n=(100*this.loadingProgress).toFixed(2);this.loadingWidget.loadingText.innerText=` ${n}% ${e} (${t}/${this.operations.length}) (0KiB)`,t>=this.operations.length&&(this.loadingComplete=!0),this.loadingComplete&&(this.loadingWidget.loadingText.innerText=` 100% Loaded (${t}/${this.operations.length}) (0KiB)`,this.add(k("TAP TO START",(()=>{U.changeScene(new Z)})),["splash-button"]))}async startLoading(){let e=0;this.operations.forEach((t=>{t.execute(),e++,this.loadingProgress=e/this.operations.length,this.update(t,e)}))}}console.log(navigator.serviceWorker),console.log("%c STARTING UP","background: green; padding: 5px 240px");const O="1.0.0",U=new class{constructor(){console.log("Manager running ++++++++++++++"),this.activeScene=null,null===this.activeScene&&(this.activeScene=new W)}changeScene(e){this.activeScene.delete(),this.activeScene=e}},z=new class{hasPlayedBefore;timesPlayedCount;lastTimePlayed;isSignedIn;playerName;personalBest;proofOfPersonalBest;allScoreProofs;worldRecord;WRHolder;soundPlayCount;constructor(){this.soundPlayCount=0,this.hasPlayedBefore=this.getFromLocalStorage("hasPlayedBefore"),console.log("Has Played Before? ",this.hasPlayedBefore),this.hasPlayedBefore?(console.log(this.hasPlayedBefore,"played ====="),this.syncVariablesWithLocalStorage()):this.firstTimeSetUp()}firstTimeSetUp(){console.log("%c first time setup running","background: pink; color: black; font-size: 2rem; padding: 20px 50px"),this.saveToLocalStorage("hasPlayedBefore",!0),this.initializeLocalStorageDefaultValues(),this.syncVariablesWithLocalStorage()}initializeLocalStorageDefaultValues(){this.saveToLocalStorage("playerName","Guest"),this.saveToLocalStorage("personalBest",0)}syncVariablesWithLocalStorage(){this.playerName=this.getFromLocalStorage("playerName"),this.personalBest=this.getFromLocalStorage("personalBest")}saveToLocalStorage(e,t){localStorage.setItem(e,JSON.stringify(t))}getFromLocalStorage(e){return JSON.parse(localStorage.getItem(e))}};console.log("main running ++++++++++++++")})()})();