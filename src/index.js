import Vue from 'vue'
import store from './store'
import router from './router'
import App from './App'
import 'reveal.js/css/reveal.css'
import 'reveal.js/css/theme/sky.css'

Vue.config.productionTip = false
Vue.config.devtools = true

export default new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})