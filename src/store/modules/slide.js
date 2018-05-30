import * as utils from '../../utils/utils'

const state = {
  current: undefined,
  sources: {
    '/res/welcome.md': {
      title: 'Welcome',
      markdown: '',
      html: []
    },
    '/res/welcome2.md': {
      title: 'Welcome2',
      markdown: '',
      html: []
    }
  }
}

const getters = {
  currentPrez: function (state) {
    return state.sources[state.current]
  }
}

const actions = {
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