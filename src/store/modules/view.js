const state = {
  navVisible: false,
  listVisible: false,
  inputVisible: false,
}

const getters = {

}

const actions = {
  'nav-show': function ({ commit }) {
    commit('nav-set', { navVisible: true })
  },
  'nav-hide': function ({ commit }) {
    commit('nav-set', { navVisible: false })
  },
  'list-show': function ({ commit, state }) {
    commit('list-set', { listVisible: true })
    state.inputVisible && commit('input-set', { inputVisible: false })
  },
  'list-hide': function ({ commit }) {
    commit('list-set', { listVisible: false })
  },
  'input-show': function ({ commit, state }) {
    commit('input-set', { inputVisible: true })
    state.listVisible && commit('list-set', { listVisible: false })
  },
  'input-hide': function ({ commit }) {
    commit('input-set', { inputVisible: false })
  },
}

const mutations = {
  'nav-set': function (state, payload) {
    state.navVisible = payload.navVisible
  },
  'list-set': function (state, payload) {
    state.listVisible = payload.listVisible
  },
  'input-set': function (state, payload) {
    state.inputVisible = payload.inputVisible
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}