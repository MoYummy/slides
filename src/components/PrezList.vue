<template>
  <div class="prez-list" v-if="listVisible">
    <div class="modal-mask" @click.self="close">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="prez"
            v-for="(prez, source) of sourceList"
            :key="source"
            @click.prevent="select(source)">{{ prez.title }}</div>
          <hr v-if="Object.keys(externalList).length > 0"/>
          <div class="prez"
            v-for="(prez, source) of externalList"
            :key="source"
            @click.prevent="select(source)">{{ prez.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrezList',
  computed: {
    sourceList () {
      return this.$store.state.slide.sources
    },
    externalList () {
      return this.$store.state.slide.externals
    },
    listVisible () {
      return this.$store.state.view.listVisible
    },
    prez () {
      return this.$store.getters.currentPrez
    },
  },
  methods: {
    close () {
      this.$store.dispatch('list-hide')
    },
    select (source) {
      this.$store.dispatch('list-hide')
      source && this.$store.dispatch('show-prez', { source }).then(() => {
        window.Reveal.sync()
        setTimeout(() => {
          window.Reveal.slide(0, 0, 0)
        }, 100);
      })
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

hr {
  width: 100%;
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
