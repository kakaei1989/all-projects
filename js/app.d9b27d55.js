(function(e){function t(t){for(var r,a,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);m&&m(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-0014b2bb":"8bcb686c","chunk-2c70483e":"469c27e9","chunk-1b390ed3":"d664b163","chunk-d5e135e0":"ce415d30","chunk-4d0ef45b":"2a48d439"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-0014b2bb":1,"chunk-2c70483e":1,"chunk-1b390ed3":1,"chunk-d5e135e0":1,"chunk-4d0ef45b":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0014b2bb":"95549bc3","chunk-2c70483e":"b59b1c38","chunk-1b390ed3":"95549bc3","chunk-d5e135e0":"509272a8","chunk-4d0ef45b":"66737875"}[e]+".css",o=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],m.parentNode.removeChild(m),n(c)},m.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var m=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{staticStyle:{background:"aqua"}},[r("v-main",[r("v-container",[r("v-row",{staticClass:"hidden-sm-and-up mx-1"},[e._v(" My Name is Ahmad Kakaei. Welcome to my website. ")]),r("v-row",{staticClass:"mt-5 px-3 py-3 ",staticStyle:{background:"indianred"}},[r("a",{attrs:{href:"http://telegram.me/kakaei1989"}},[r("v-avatar",{attrs:{size:"70px"}},[r("v-img",{attrs:{src:n("ab5d")},on:{click:function(t){return e.$refs.profile.click()}}})],1)],1),r("v-spacer"),r("h3",{staticClass:"hidden-xs-only mt-5",staticStyle:{color:"white"}},[e._v(" My Name is Ahmad Kakaei. Welcome to my website.")]),r("v-spacer"),r("a",{staticClass:"Header-link mt-5\n",attrs:{href:"https://github.com/kakaei1989/all-projects","data-hotkey":"g d","aria-label":"Homepage ","data-ga-click":"Header, go to dashboard, icon:logo"}},[r("svg",{staticClass:"octicon octicon-mark-github v-align-middle",attrs:{height:"32",viewBox:"0 0 16 16",version:"1.1",width:"32","aria-hidden":"true"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"}})])])],1),r("v-row",{staticClass:"hidden-md-and-up"},[r("v-toolbar",{staticClass:"d-flex flex-row justify-space-around pb-2 pt-2 warning",attrs:{height:"100px"}},e._l(e.items,(function(t,n){return r("div",{key:n,staticClass:"d-flex flex-column mr-1",class:e.mycomponent===t.component?"red":"warning text--white",on:{click:function(n){e.mycomponent=t.component}}},[r("v-btn",{class:e.mycomponent===t.component?"red":"warning text--white"},[r("v-icon",[e._v(e._s(t.icon))])],1),r("v-spacer")],1)})),0)],1),r("v-row",[r("v-list",{staticClass:"text-center hidden-sm-and-down",staticStyle:{background:"orange"},attrs:{shaped:"",dark:""}},[r("v-subheader",[e._v("List of Applications")]),r("v-list-item-group",{attrs:{color:"primary"},model:{value:e.selectedItem,callback:function(t){e.selectedItem=t},expression:"selectedItem"}},e._l(e.items,(function(t,n){return r("v-list-item",{key:n,on:{click:function(n){e.mycomponent=t.component}}},[r("v-list-item-icon",[r("v-icon",{domProps:{textContent:e._s(t.icon)}})],1),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:e._s(t.text)}})],1)],1)})),1)],1),r("v-col",{staticStyle:{background:"goldenrod"}},[r("keep-alive",[r(e.mycomponent,{tag:"component"})],1)],1)],1)],1)],1)],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticStyle:{width:"400px"}},[n("v-row",{staticClass:"d-flex flex-row"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentNumber,expression:"currentNumber"}],attrs:{type:"text"},domProps:{value:e.currentNumber},on:{input:function(t){t.target.composing||(e.currentNumber=t.target.value)}}}),n("div",{staticClass:"keys"},[n("button",{staticClass:"op__key",on:{click:e.clear}},[e._v("C")]),n("button",{staticClass:"op__key",on:{click:e.plusMinusNumber}},[e._v("+/-")]),n("button",{staticClass:"op__key",on:{click:function(t){return e.handleOperation("%")}}},[e._v("%")]),n("button",{staticClass:"op__key",on:{click:function(t){return e.handleOperation("/")}}},[e._v("/")]),n("button",{staticClass:"num__key",on:{click:function(t){return e.addNumber("7")}}},[e._v("7")]),n("button",{staticClass:"num__key",on:{click:function(t){return e.addNumber("8")}}},[e._v("8")]),n("button",{staticClass:"num__key",on:{click:function(t){return e.addNumber("9")}}},[e._v("9")]),n("button",{staticClass:"op__key",on:{click:function(t){return e.handleOperation("*")}}},[e._v("x")]),n("button",{staticClass:"num__key",on:{click:function(t){return e.addNumber("4")}}},[e._v("4")]),n("button",{staticClass:"num__key",on:{click:function(t){return e.addNumber("5")}}},[e._v("5")]),n("button",{staticClass:"num__key",on:{click:function(t){return e.addNumber("6")}}},[e._v("6")]),n("button",{staticClass:"op__key",on:{click:function(t){return e.handleOperation("-")}}},[e._v("-")]),n("button",{staticClass:"num__key",on:{click:function(t){return e.addNumber("1")}}},[e._v("1")]),n("button",{staticClass:"num__key",on:{click:function(t){return e.addNumber("2")}}},[e._v("2")]),n("button",{staticClass:"num__key",on:{click:function(t){return e.addNumber("3")}}},[e._v("3")]),n("button",{staticClass:"op__key",on:{click:function(t){return e.handleOperation("+")}}},[e._v("+")]),n("span"),n("button",{staticClass:"num__key",on:{click:function(t){return e.addNumber("0")}}},[e._v("0")]),n("button",{staticClass:"num__key",on:{click:e.addDot}},[e._v(".")]),n("button",{staticClass:"eq__key",on:{click:e.equal}},[e._v("=")])])])],1)},i=[],s={name:"BaseCalc",data(){return{currentNumber:"",prevNumber:"",operation:""}},methods:{addNumber(e){0===this.currentNumber&&0===e||(this.currentNumber+=e,console.log(this.currentNumber))},addDot(){this.currentNumber.includes(".")||(this.currentNumber+=".")},clear(){this.currentNumber=""},plusMinusNumber(){parseFloat(this.currentNumber)>0?this.currentNumber="-"+this.currentNumber:this.currentNumber=this.currentNumber.substring(1)},handleOperation(e){this.prevNumber=this.currentNumber,this.currentNumber="",this.operation=e},equal(){switch(this.operation){case"+":this.currentNumber=parseFloat(this.prevNumber)+parseFloat(this.currentNumber);break;case"-":this.currentNumber=parseFloat(this.prevNumber)-parseFloat(this.currentNumber);break;case"*":this.currentNumber=parseFloat(this.prevNumber)*parseFloat(this.currentNumber);break;case"/":this.currentNumber=parseFloat(this.prevNumber)/parseFloat(this.currentNumber);break;case"%":this.currentNumber=parseFloat(this.prevNumber)%parseFloat(this.currentNumber);break}this.currentNumber=this.currentNumber.toString()}}},u=s,l=(n("d5da"),n("2877")),d=n("6544"),m=n.n(d),p=n("0fd9"),b=Object(l["a"])(u,c,i,!1,null,"dda6df56",null),h=b.exports;m()(b,{VRow:p["a"]});const f=()=>Promise.all([n.e("chunk-2c70483e"),n.e("chunk-d5e135e0")]).then(n.bind(null,"a6d1")),v=()=>Promise.all([n.e("chunk-2c70483e"),n.e("chunk-1b390ed3")]).then(n.bind(null,"1f4e")),k=()=>n.e("chunk-0014b2bb").then(n.bind(null,"cc70")),_=()=>n.e("chunk-4d0ef45b").then(n.bind(null,"8eda"));var y={name:"App",components:{BaseCalc:h,BaseWeather:v,BaseDataTable:k,BaseTodo:f,BaseMusic:_},data:()=>({mycomponent:"BaseCalc",selectedItem:0,items:[{text:"Calculator",icon:"mdi-calculator",component:"BaseCalc"},{text:"Weather Forcast",icon:"mdi-weather-pouring",component:"BaseWeather"},{text:"To-do list",icon:"mdi-format-list-checks",component:"BaseTodo"},{text:"Data-Table",icon:"mdi-table-large",component:"BaseDataTable"},{text:"Music Player",icon:"mdi-music",component:"BaseMusic"}]})},g=y,N=n("7496"),C=n("8212"),w=n("8336"),x=n("62ad"),O=n("a523"),V=n("132d"),S=n("adda"),B=n("8860"),j=n("da13"),P=n("5d23"),T=n("1baa"),A=n("34c3"),F=n("f6c4"),I=n("2fa4"),M=n("e0c7"),L=n("71d9"),E=Object(l["a"])(g,a,o,!1,null,null,null),D=E.exports;m()(E,{VApp:N["a"],VAvatar:C["a"],VBtn:w["a"],VCol:x["a"],VContainer:O["a"],VIcon:V["a"],VImg:S["a"],VList:B["a"],VListItem:j["a"],VListItemContent:P["a"],VListItemGroup:T["a"],VListItemIcon:A["a"],VListItemTitle:P["b"],VMain:F["a"],VRow:p["a"],VSpacer:I["a"],VSubheader:M["a"],VToolbar:L["a"]});var q=n("f309");r["a"].use(q["a"]);var W=new q["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:W,render:function(e){return e(D)}}).$mount("#app")},"73e5":function(e,t,n){},ab5d:function(e,t,n){e.exports=n.p+"img/kakaei.9e9cb370.jpg"},d5da:function(e,t,n){"use strict";n("73e5")}});
//# sourceMappingURL=app.d9b27d55.js.map