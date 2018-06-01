import Vue from 'vue'
import store from './store'
import router from './router'
import { baseurl } from './utils/utils'
const App = () => import('./App')

baseurl()

Vue.config.productionTip = false
Vue.config.devtools = true

export default new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
