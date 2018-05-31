import * as utils from '../../utils/utils'

const state = {
  current: undefined,
  sources: {}
}

const getters = {
  currentPrez: function (state) {
    return state.sources[state.current]
  }
}

const actions = {
  'fetch-prez-list': function ({ commit, dispatch }) {
    return utils.fetchPrezList().then(prezList => {
      commit('update-prez-list', { prezList })
    })
  },
  'show-prez': function ({ commit, dispatch }, { source }) {
    return new Promise((resolve, reject) => {
      if (state.sources[source]) {
        if (state.sources[source].markdown) {
          commit('show-prez', { source })
          resolve()
          return
        }
      }

      utils.$fetch(source).then(markdown => {
        commit('show-prez', { source, markdown })
        resolve()
      }).catch(err => {
        console.error(err)
        resolve()
      })
    })
  }
}

const mutations = {
  'update-prez-list': function (state, payload) {
    const { prezList } = payload
    state.sources = {}
    prezList.forEach(path => {
      state.sources[path] = utils.metadata(path)
    })
  },
  'show-prez': function (state, payload) {
    const { source, markdown } = payload
    if (markdown) {
      state.sources[source].markdown = markdown
      state.sources[source].html = utils.md2reveal(markdown)
    }
    state.current = source
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}