<template>
  <div class="slide-container">
    <div class="reveal">
      <div class="slides" v-html="sections">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    current () {
      return this.$store.state.slide.current
    },
    prez () {
      return this.$store.getters.currentPrez
    },
    sections () {
      return this.prez ? this.prez.html : ''
    }
  },
  mounted () {
    window.Reveal.initialize({
      center: false,
      controls: true,
      controlsBackArrows: 'visible',
      controlsLayout: 'bottom-right',
      keyboard: true,
      progress: true,
      slideNumber: 'c/t',
      touch: true,
      markdown: {
        smartypants: true
      },
    })
    window.Reveal.addEventListener('synced', this.slidechanged)
    window.Reveal.addEventListener('slidechanged', this.slidechanged)
    if (this.$route.query && this.$route.query.s) {
      this.$store.dispatch('show-prez', { source: this.$route.query.s }).then(() => {
        window.Reveal.sync()
        setTimeout(() => {
          window.Reveal.slide(this.$route.query.h || 0, this.$route.query.v || 0, 0)
        }, 100);
      })
    }
  },
  beforeDestroy () {
    window.Reveal.removeEventListener('synced', this.slidechanged)
    window.Reveal.removeEventListener('slidechanged', this.slidechanged)
  },
  methods: {
    slidechanged ({ previousSlide, currentSlide, indexh, indexv }) {
      this.$store.dispatch('set-slide-route', { h: indexh, v: indexv })
    }
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
