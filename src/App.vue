<template>
  <div class="app">
    <nav-bar></nav-bar>
    <prez-list></prez-list>
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import PrezList from './components/PrezList'

export default {
  components: {
    NavBar,
    PrezList
  }
}
</script>

<style scoped>
.app {
  height: 100%;
  width: 100%;
}
</style>

