import router from '../../router'
import * as utils from '../../utils/utils'

const state = {
  current: undefined,
  sources: {},
  externals: {},
  defaultTheme: 'https://unpkg.com/reveal.js@3.6.0/css/theme/sky.css',
  useCache: false,
}

const getters = {
  currentPrez: function (state) {
    return state.sources[state.current] || state.externals[state.current]
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
    const absolute = /^http/.test(source)
    return new Promise((resolve, reject) => {
      if (state.useCache) {
        if ((state.sources[source] && state.sources[source].markdown)
          || (state.externals[source])) {
          commit('show-prez', { source, absolute })
          let query = router.app.$route.query
          if (query.s !== source) {
            query = Object.assign({}, query, { h: 0, v: 0 })
          }
          dispatch('set-slide-route', query)
          resolve()
          return
        }
      }

      utils.$fetch(source, { useCache: state.useCache, absolute }).then(markdown => {
        commit('show-prez', { source, markdown, absolute })
        let query = router.app.$route.query
        if (query.s !== source) {
          query = Object.assign({}, query, { s: (absolute ? '' : source), h: 0, v: 0 })
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
    const { source, markdown, absolute } = payload
    if (markdown) {
      const { html, comments } = utils.md2reveal(markdown)
      const theme = comments.find(x => x.startsWith('theme:'))
      const sourceRoot = absolute ? 'externals' : 'sources'
      state[sourceRoot][source] = Object.assign({}, state[sourceRoot][source], { markdown, html, theme })
      if (absolute) {
        state[sourceRoot][source].title = utils.metadata(source).title
      }
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