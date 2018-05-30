import Vue from 'vue'
import Vuex from 'vuex'
import env from './modules/env'
import view from './modules/view'
import slide from './modules/slide'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    env,
    slide,
    view,
  },
  strict: process.env.NODE_ENV !== 'production'
})
