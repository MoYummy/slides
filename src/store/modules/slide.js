const state = {
  current: {
    source: '',
    title: '',
    markdown: '',
    html: ''
  },
  history: [],
  sources: [{
    source: '/temp-source',
    title: 'TempSource',
    markdown: 'TempMarkdown',
    html: 'TempHtml'
  }]
}

const getters = {

}

const actions = {
  'show-slide': function ({ commit, dispatch }, { slide }) {
    return new Promise((resolve, reject) => {
      commit('show-slide', { slide })
      resolve()
    })
  }
}

const mutations = {
  'show-slide': function (state, payload) {
    state.current = payload.slide
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}