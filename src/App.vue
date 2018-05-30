<template>
  <div class="app">
    <nav-bar></nav-bar>
    <prez-list></prez-list>
    <router-view />
    <vuex-store></vuex-store>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import PrezList from './components/PrezList'
import VuexStore from './components/VuexStore'

export default {
  components: {
    NavBar,
    PrezList,
    VuexStore
  }
}
</script>

<style scoped>
.app {
  height: 100%;
  width: 100%;
}
</style>
