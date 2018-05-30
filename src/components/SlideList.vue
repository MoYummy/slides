<template>
  <div class="slide-list" v-if="listVisible">
    <div class="modal-mask" @click="close">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="slide"
            v-for="(slide, i) of slideList"
            :key="i"
            @click="select(slide)">{{ slide.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlideList',
  computed: {
    slideList () {
      return this.$store.state.slide.sources
    },
    listVisible () {
      return this.$store.state.view.listVisible
    }
  },
  methods: {
    close () {
      this.$store.dispatch('list-hide')
    },
    select (slide) {
      this.$store.dispatch('list-hide')
      slide && this.$store.dispatch('show-slide', { slide })
    }
  },
}
</script>

<style scoped>
.slide-list {
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
}

.modal-container {
  align-items: center;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5em;
  width: fit-content;
}

.slide {
  color: black;
}
</style>
