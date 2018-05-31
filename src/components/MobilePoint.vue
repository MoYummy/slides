<template>
  <div class="mobile-point" @click="toggleNav" :style="{ top: posY + 'px' }">
  </div>
</template>

<script>
export default {
  name: 'MobilePoint',
  computed: {
    navVisible () {
      return this.$store.state.view.navVisible
    },
    posY () {
      return window.innerHeight - 30
    }
  },
  methods: {
    toggleNav () {
      this.$store.dispatch(this.navVisible ? 'nav-hide' : 'nav-show')
    },
  }
}
</script>


<style scoped>
.mobile-point {
  display: none;
}
@media only screen and (max-width: 500px) {
  .mobile-point {
    display: block;
    background: #777;
    border-radius: 0.5em;
    height: 1em;
    left: 1em;
    position: absolute;
    width: 1em;
    z-index: 9;
  }
}
</style>
