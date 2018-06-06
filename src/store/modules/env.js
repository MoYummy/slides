import router from '../../router'

const state = {
  packageJson: JSON.parse(unescape(process.env.PACKAGE_JSON)),
}

const getters = {
}

const actions = {
  'set-slide-route': function (context, data) {
    const query = Object.assign({}, router.app.$route.query, data)
    router.push({ query })
  }
}

const mutations = {
}

export default {
  state,
  getters,
  actions,
  mutations
}