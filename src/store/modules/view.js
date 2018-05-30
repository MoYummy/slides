const state = {
  navVisible: false,
  listVisible: false,
}

const getters = {

}

const actions = {
  'nav-show': function ({ commit, dispatch }) {
    commit('nav-set', { navVisible: true })
  },
  'nav-hide': function ({ commit, dispatch }) {
    commit('nav-set', { navVisible: false })
  },
  'list-show': function ({ commit, dispatch }) {
    commit('list-set', { listVisible: true })
  },
  'list-hide': function ({ commit, dispatch }) {
    commit('list-set', { listVisible: false })
  },
}

const mutations = {
  'nav-set': function (state, payload) {
    state.navVisible = payload.navVisible
  },
  'list-set': function (state, payload) {
    state.listVisible = payload.listVisible
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}