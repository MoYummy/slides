<template>
  <div class="app">
    <nav-bar></nav-bar>
    <slide-list></slide-list>
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import SlideList from './components/SlideList'

export default {
  components: {
    NavBar,
    SlideList
  }
}
</script>

<style scoped>
.app {
  height: 100%;
  width: 100%;
}
</style>

