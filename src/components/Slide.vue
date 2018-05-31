<template>
  <div class="slide-container">
    <div class="reveal">
      <div class="slides" v-html="sections">
      </div>
    </div>
  </div>
</template>

<script>
import * as utils from '../utils/utils'
import Reveal from 'reveal.js/js/reveal'

export default {
  data () {
    return {
    }
  },
  computed: {
    prez () {
      return this.$store.getters.currentPrez
    },
    sections () {
      return this.prez ? this.prez.html : ''
    }
  },
  mounted () {
    Reveal.initialize({
      center: true,
      controls: true,
      controlsBackArrows: 'visible',
      controlsLayout: 'bottom-right',
      keyboard: true,
      progress: true,
      slideNumber: 'c/t',
      touch: true,
      markdown: {
        smartypants: true
      }
    })
  },
}
</script>

<style scoped>
.slide-container {
  color: white;
  height: 90%;
  overflow: auto;
}
</style>
