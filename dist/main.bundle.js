!function(e){function t(t){for(var n,s,c=t[0],a=t[1],u=t[2],p=0,d=[];p<c.length;p++)s=c[p],o[s]&&d.push(o[s][0]),o[s]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(l&&l(t);d.length;)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,c=1;c<r.length;c++){var a=r[c];0!==o[a]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={5:0},i=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=n);var i=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=function(e){return s.p+""+({}[e]||e)+".bundle.js"}(e);var a=setTimeout(function(){u({type:"timeout",target:c})},12e4);function u(t){c.onerror=c.onload=null,clearTimeout(a);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+n+": "+i+")");s.type=n,s.request=i,r[1](s)}o[e]=void 0}}c.onerror=c.onload=u,i.appendChild(c)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=a;i.push([20,4]),r()}({2:function(e,t,r){"use strict";r.d(t,"a",function(){return l}),r.d(t,"b",function(){return d}),r.d(t,"c",function(){return f}),r.d(t,"d",function(){return w});var n=r(50),o=r.n(n),i=r(11),s=r.n(i),c=r(19),a=r.n(c);const u=/github\.io$/.test(window.location.origin)?"/"+window.location.pathname.split("/")[1]:"";function l(e,t=!1){return new Promise((r,n)=>{a.a.get(t?e:u+e).then(e=>{r(e.data)}).catch(e=>{n(e)})})}const p=(e,t)=>"https://"+o.a.join("api.github.com/repos",e,t,"git/trees/master");function d(){if(/github\.io$/.test(window.location.origin)){const e=/([^\.\/]+)\.github\.io/.exec(window.location.origin)[1],t=/\/([^\/]+)/.exec(window.location.pathname)[1],r="res";return new Promise((n,o)=>{l(p(e,t),!0).then(e=>{try{const t=e.tree.find(e=>e.path===r).url;n(t)}catch(e){o(e)}}).catch(e=>{console.error(e),n()})}).then(e=>e?l(e,!0).then(e=>{try{const t=Array.from(e.tree).map(e=>o.a.join("/",r,e.path));return Promise.resolve(t)}catch(e){return console.error(e),Promise.resolve([])}}):Promise.resolve([]))}if(/localhost/.test(window.location.origin)){const e="/res/";return l(e).then(t=>{const r=document.createElement("div");return r.innerHTML=t,Array.from(r.querySelectorAll("pre a")).map(t=>e+t.getAttribute("href")).filter(e=>/\.md$/.test(e))})}return Promise.resolve([])}const h="[//]: <> (horizontal)",m="[//]: <> (vertical)";function f(e){return e.split(h).map(e=>{const t=e.split(m);return v(t.length<2?s()(e):t.map(e=>v(s()(e),"section")).join(""),"section")}).join("")}function v(e,t="div"){return"<"+(t=t.replace(/<>/g,""))+">"+e+"</"+t+">"}function w(e){let t=[];return{title:(e=(e=unescape(e).replace(/^.+\//,"").replace(/\.md$/,"")).replace(/\([^\(\)]+\)$/,e=>(t=e.replace(/^\s*\(/,"").replace(/\)\s*$/,"").split(","),""))).replace(/-(\w)/g,(e,t)=>t?" "+t.toUpperCase():"").replace(/^(\w)/g,(e,t)=>t?t.toUpperCase():""),tags:t}}},20:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r(12),i={state:{packageJson:JSON.parse(unescape("%7B%22name%22%3A%22slides%22%2C%22version%22%3A%220.0.1%22%2C%22description%22%3A%22slides%22%2C%22scripts%22%3A%7B%22test%22%3A%22echo%20%5C%22Error%3A%20no%20test%20specified%5C%22%20%26%26%20exit%201%22%2C%22start%22%3A%22webpack-dev-server%22%2C%22build%22%3A%22webpack%22%7D%2C%22repository%22%3A%7B%22type%22%3A%22git%22%2C%22url%22%3A%22git+https%3A//github.com/MoYummy/slides.git%22%7D%2C%22author%22%3A%22MoYummy%22%2C%22license%22%3A%22CC-BY-4.0%22%2C%22bugs%22%3A%7B%22url%22%3A%22https%3A//github.com/MoYummy/slides/issues%22%7D%2C%22dependencies%22%3A%7B%22axios%22%3A%22%5E0.18.0%22%2C%22marked%22%3A%22%5E0.4.0%22%2C%22reveal.js%22%3A%22%5E3.6.0%22%2C%22vue%22%3A%22%5E2.5.16%22%2C%22vue-router%22%3A%22%5E3.0.1%22%2C%22vuex%22%3A%22%5E3.0.1%22%7D%2C%22devDependencies%22%3A%7B%22css-loader%22%3A%22%5E0.28.11%22%2C%22html-webpack-plugin%22%3A%22%5E3.2.0%22%2C%22mini-css-extract-plugin%22%3A%22%5E0.4.0%22%2C%22prettier%22%3A%22%5E1.12.0%22%2C%22style-loader%22%3A%22%5E0.21.0%22%2C%22uglifyjs-webpack-plugin%22%3A%22%5E1.2.5%22%2C%22vue-loader%22%3A%22%5E15.2.1%22%2C%22vue-template-compiler%22%3A%22%5E2.5.16%22%2C%22webpack%22%3A%22%5E4.9.1%22%2C%22webpack-cli%22%3A%22%5E2.1.4%22%2C%22webpack-dev-server%22%3A%22%5E3.1.4%22%7D%7D"))},getters:{},actions:{},mutations:{}},s=r(2);const c={current:void 0,sources:{}};var a={state:c,getters:{currentPrez:function(e){return e.sources[e.current]}},actions:{"fetch-prez-list":function({commit:e,dispatch:t}){return s.b().then(t=>{e("update-prez-list",{prezList:t})})},"show-prez":function({commit:e,dispatch:t},{source:r}){return new Promise((t,n)=>{if(c.sources[r]&&c.sources[r].markdown)return e("show-prez",{source:r}),void t();s.a(r).then(n=>{e("show-prez",{source:r,markdown:n}),t()}).catch(e=>{console.error(e),t()})})}},mutations:{"update-prez-list":function(e,t){const{prezList:r}=t;e.sources={},r.forEach(t=>{e.sources[t]=s.d(t)})},"show-prez":function(e,t){const{source:r,markdown:n}=t;n&&(e.sources[r].markdown=n,e.sources[r].html=s.c(n)),e.current=r}}};n.a.use(o.a);var u=new o.a.Store({modules:{env:i,slide:a,view:{state:{navVisible:!1,listVisible:!1},getters:{},actions:{"nav-show":function({commit:e,dispatch:t}){e("nav-set",{navVisible:!0})},"nav-hide":function({commit:e,dispatch:t}){e("nav-set",{navVisible:!1})},"list-show":function({commit:e,dispatch:t}){e("list-set",{listVisible:!0})},"list-hide":function({commit:e,dispatch:t}){e("list-set",{listVisible:!1})}},mutations:{"nav-set":function(e,t){e.navVisible=t.navVisible},"list-set":function(e,t){e.listVisible=t.listVisible}}}},strict:!0}),l=r(10);n.a.use(l.a);var p=new l.a({routes:[{path:"/",component:()=>Promise.all([r.e(0),r.e(1)]).then(r.bind(null,61))},{path:"*",redirect:"/"}]});r(24),r(22);const d=()=>r.e(7).then(r.bind(null,63));n.a.config.productionTip=!1,n.a.config.devtools=!0,t.default=new n.a({el:"#app",router:p,store:u,render:e=>e(d)})}});