import Vue from 'vue'
import store from './store'
import router from './router'
import { baseurl } from './utils/utils'
import Reveal from 'reveal.js/js/reveal'
const App = () => import('./App')

baseurl()

Vue.config.productionTip = false
Vue.config.devtools = true
window.Reveal = Reveal

export default new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
