import Vue from 'vue'
import Router from 'vue-router'
import Slide from './components/Slide'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Slide },
    { path: '*', redirect: '/' }
  ]
})
