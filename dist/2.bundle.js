(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{49:function(t,n,e){var i=e(53);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals),(0,e(3).default)("7a4bb4d8",i,!1,{})},53:function(t,n,e){(t.exports=e(4)(!1)).push([t.i,"\n.prez-list[data-v-31063125] {\n  width: 0;\n}\n.modal-mask[data-v-31063125] {\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 9998;\n}\n.modal-wrapper[data-v-31063125] {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  min-height: 20%;\n  min-width: 30%;\n  width: fit-content;\n}\n.modal-container[data-v-31063125] {\n  align-items: center;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-width: 100%;\n  padding: 0.5em;\n  width: fit-content;\n}\n.prez[data-v-31063125] {\n  align-items: center;\n  color: black;\n  display: flex;\n  height: 2em;\n  justify-content: center;\n  overflow: hidden;\n  padding: 0 0.5em;\n  white-space: nowrap;\n}\n.prez[data-v-31063125]:hover {\n  background: rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n}\n",""])},54:function(t,n,e){"use strict";var i=e(49);e.n(i).a},59:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.listVisible?e("div",{staticClass:"prez-list"},[e("div",{staticClass:"modal-mask",on:{click:t.close}},[e("div",{staticClass:"modal-wrapper"},[e("div",{staticClass:"modal-container"},t._l(t.prezList,function(n,i){return e("div",{key:i,staticClass:"prez",on:{click:function(n){t.select(i)}}},[t._v(t._s(n.title))])}))])])]):t._e()};i._withStripped=!0;var s=e(52),a=e.n(s),o={name:"PrezList",computed:{prezList(){return this.$store.state.slide.sources},listVisible(){return this.$store.state.view.listVisible}},methods:{close(){this.$store.dispatch("list-hide")},select(t){this.$store.dispatch("list-hide"),t&&this.$store.dispatch("show-prez",{source:t}).then(()=>{a.a.sync(),setTimeout(()=>{a.a.slide(0,0,0)},100)})}}},r=(e(54),e(5)),c=Object(r.a)(o,i,[],!1,null,"31063125",null);c.options.__file="src/components/PrezList.vue",n.default=c.exports}}]);