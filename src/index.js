import Vue from 'vue'
import store from './store'
import router from './router'
const App = () => import('./App')

Vue.config.productionTip = false
Vue.config.devtools = true

export default new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})