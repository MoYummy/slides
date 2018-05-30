<template>
  <div class="slide-container">
    <div class="reveal">
      <div class="slides" v-html="sections">
        <!--<section
          v-for="(sect, i) of sections"
          :key="i"
          v-html="sect" >
        </section>-->
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
    document.body.addEventListener('mousemove', this.showNav)
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
  beforeDestroy () {
    document.body.removeEventListener('mousemove', this.showNav)
  },
  methods: {
    showNav (event) {
      this.$store.dispatch(event.clientY < 30 ? 'nav-show' : 'nav-hide')
    },
  }
}
</script>

<style scoped>
.slide-container {
  color: white;
  height: 90%;
  overflow: auto;
}
</style>
