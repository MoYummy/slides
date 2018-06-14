<template>
  <div class="app">
    <mobile-point></mobile-point>
    <nav-bar>Loading</nav-bar>
    <prez-list>Loading</prez-list>
    <prez-input>Loading</prez-input>
    <router-view />
    <!--<vuex-store></vuex-store>-->
  </div>
</template>

<script>
const MobilePoint = () => import('./components/MobilePoint')
const NavBar = () => import('./components/NavBar')
const PrezList = () => import('./components/PrezList')
const PrezInput = () => import('./components/PrezInput')
// const VuexStore = () => import('./components/VuexStore')

export default {
  components: {
    MobilePoint,
    NavBar,
    PrezList,
    PrezInput,
    // VuexStore,
  },
  beforeMount () {
    this.$store.dispatch('fetch-prez-list')
  }
}
</script>

<style scoped>
.app {
  height: 100%;
  width: 100%;
}
</style>
