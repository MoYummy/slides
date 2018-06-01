<template>
  <div class="prez-list" v-if="listVisible">
    <div class="modal-mask" @click="close">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="prez"
            v-for="(prez, source) of prezList"
            :key="source"
            @click="select(source)">{{ prez.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Reveal from 'reveal.js/js/reveal'

export default {
  name: 'PrezList',
  computed: {
    prezList () {
      return this.$store.state.slide.sources
    },
    listVisible () {
      return this.$store.state.view.listVisible
    },
    prez () {
      return this.$store.getters.currentPrez
    },
    defaultTheme () {
      return this.$store.state.slide.defaultTheme
    }
  },
  methods: {
    close () {
      this.$store.dispatch('list-hide')
    },
    select (source) {
      this.$store.dispatch('list-hide')
      source && this.$store.dispatch('show-prez', { source }).then(() => {
        this.setTheme((this.prez.theme || this.defaultTheme).replace(/^theme:/, ''))
        Reveal.sync()
        setTimeout(() => {
          Reveal.slide(0, 0, 0)
        }, 100);
      })
    },
    setTheme (theme) {
      document.getElementById('reveal-theme').setAttribute('href', theme)
    }
  },
}
</script>

<style scoped>
.prez-list {
  width: 0;
}

.modal-mask {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9998;
}

.modal-wrapper {
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 20%;
  min-width: 30%;
  width: fit-content;
}

.modal-container {
  align-items: center;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 100%;
  padding: 0.5em;
  width: fit-content;
}

.prez {
  align-items: center;
  color: black;
  display: flex;
  height: 2em;
  justify-content: center;
  overflow: hidden;
  padding: 0 0.5em;
  white-space: nowrap;
}

.prez:hover {
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
</style>
