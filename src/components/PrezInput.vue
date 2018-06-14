<template>
  <div class="prez-input" v-if="inputVisible">
    <div class="modal-mask" @click.self="close">
      <div class="modal-wrapper">
        <div class="modal-container">
          <form class="form" @submit.prevent="select(prez)">
            <input class="input" type="text" v-model="prez"/>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrezInput',
  data () {
    return {
      prez: ''
    }
  },
  computed: {
    inputVisible () {
      return this.$store.state.view.inputVisible
    },
  },
  methods: {
    close () {
      this.$store.dispatch('input-hide')
    },
    select (source) {
      this.$store.dispatch('input-hide')
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
.prez-input {
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

.form,
.input {
  display: flex;
  justify-content: center;
  width: 100%;
}

</style>
