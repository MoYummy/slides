import router from '../../router'
import * as utils from '../../utils/utils'

const state = {
  current: undefined,
  sources: {},
  defaultTheme: 'https://unpkg.com/reveal.js@3.6.0/css/theme/sky.css',
  useCache: false,
}

const getters = {
  currentPrez: function (state) {
    return state.sources[state.current]
  }
}

const actions = {
  'fetch-prez-list': function ({ commit }) {
    return utils.fetchPrezList().then(prezList => {
      commit('update-prez-list', { prezList })
    })
  },
  'show-prez': function ({ commit, getters, dispatch }, { source }) {
    const oldTheme = utils.getRevealTheme()
    return new Promise((resolve, reject) => {
      if (state.useCache) {
        if (state.sources[source]) {
          if (state.sources[source].markdown) {
            commit('show-prez', { source })
            let query = router.app.$route.query
            if (query.s !== source) {
              query = Object.assign({}, query, { h: 0, v: 0 })
            }
            dispatch('set-slide-route', query)
            resolve()
            return
          }
        }
      }

      utils.$fetch(source, { useCache: state.useCache }).then(markdown => {
        commit('show-prez', { source, markdown })
        let query = router.app.$route.query
        if (query.s !== source) {
          query = Object.assign({}, query, { s: source, h: 0, v: 0 })
        }
        dispatch('set-slide-route', query)
        resolve()
      }).catch(err => {
        console.error(err)
        resolve()
      })
    })
      .then(() => {
        const newTheme = (getters.currentPrez.theme || state.defaultTheme).replace(/^theme:/, '')
        oldTheme !== newTheme && (utils.setRevealTheme(newTheme))
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
      const { html, comments } = utils.md2reveal(markdown)
      const theme = comments.find(x => x.startsWith('theme:'))
      state.sources[source] = Object.assign({}, state.sources[source], { markdown, html, theme })
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