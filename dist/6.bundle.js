(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{27:function(n,e,t){(n.exports=t(4)(!1)).push([n.i,'\n.nav-bar[data-v-4295d220] {\n  align-items: center;\n  background: skyblue;\n  color: white;\n  display: flex;\n  flex-direction: row;\n  height: 3em;\n  justify-content: space-between;\n}\n.nav-bar > div[data-v-4295d220],\n.nav-bar > div > div[data-v-4295d220] {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  padding: 0em 0.3em;\n  user-select: none;\n}\n.nav-bar .select-prez[data-v-4295d220] {\n  background: transparent;\n  border: 0.1em;\n  color: white;\n  cursor: pointer;\n  height: 100%;\n}\n.nav-bar .select-prez[data-v-4295d220]:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n.nav-bar .open-git[data-v-4295d220] {\n  background-image: url("https://github.com/fluidicon.png");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  border-radius: 50%;\n  cursor: pointer;\n  height: 2em;\n  width: 2em;\n}\n.nav-bar .open-git[data-v-4295d220]:hover {\n  box-shadow: 0 0 0 5px rgba(#fff,.4) , 0 0 0 10px  #555;\n}\n@media only screen and (max-width: 500px) {\n.nav-bar[data-v-4295d220] {\n    align-items: center;\n    flex-direction: column;\n    height: auto;\n    justify-content: flex-start;\n}\n.nav-bar > div[data-v-4295d220] {\n    display: flex;\n    flex-direction: row;\n    height: 2em;\n    justify-content: center;\n    width: 100%;\n}\n}\n',""])},28:function(n,e,t){"use strict";var a=t(8);t.n(a).a},62:function(n,e,t){"use strict";t.r(e);var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"nav-bar",style:{visibility:n.navVisible?"visible":"hidden"}},[t("div",{staticClass:"left"},[t("div",{staticClass:"open-git",on:{click:n.openGit}})]),n._v(" "),t("div",{staticClass:"center"},[t("div",{staticClass:"select-prez",on:{click:n.showList}},[n._v(n._s(n.currentSlideTitle))])]),n._v(" "),t("div",{staticClass:"right"},[n._v(n._s(n.appInfo))])])};a._withStripped=!0;var i={name:"NavBar",data:()=>({}),computed:{currentSlideTitle(){const n=this.$store.getters.currentPrez;return n?n.title:"Select ..."},appInfo(){const n=this.$store.state.env.packageJson;return n.name+" "+n.version},navVisible(){return this.$store.state.view.navVisible}},mounted(){document.body.addEventListener("mousemove",this.showNav)},beforeDestroy(){document.body.removeEventListener("mousemove",this.showNav)},methods:{showNav(n){this.$store.dispatch(n.clientY<50?"nav-show":"nav-hide")},showList(){this.$store.dispatch("list-show")},openGit(){const n=this.$store.state.env.packageJson.repository.url;window.open(n.replace(/^.*:\/\//,"https://"))}}},s=(t(28),t(5)),r=Object(s.a)(i,a,[],!1,null,"4295d220",null);r.options.__file="src/components/NavBar.vue",e.default=r.exports},8:function(n,e,t){var a=t(27);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals),(0,t(3).default)("9eff7f6e",a,!1,{})}}]);