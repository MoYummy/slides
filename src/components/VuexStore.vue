<template>
  <div class="vuex-store"/>
</template>

<script>
export default {
  name: 'VuexStore',
  computed: {
    store () {
      return this.$store.state
    },
    processEnv () {
      return process.env
    }
  }
}
</script>


<style scoped>
.vuex-store {
  height: 0;
  position: absolute;
  visibility: hidden;
  width: 0;
}
</style>
