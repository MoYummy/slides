import Vue from 'vue'
import Router from 'vue-router'
const Slide = () => import('./components/Slide')

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/slide', component: Slide },
    { path: '*', redirect: '/slide' }
  ]
})
