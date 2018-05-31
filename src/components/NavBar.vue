<template>
  <div class="nav-bar" :style="{ visibility: navVisible ? 'visible' : 'hidden' }">
    <div class="left">
      <div class="open-git" @click="openGit"></div>
    </div>
    <div class="center">
      <div class="select-prez" @click="showList">{{ currentSlideTitle }}</div>
    </div>
    <div class="right">{{ appInfo }}</div>
  </div>
</template>

<script>

export default {
  name: 'NavBar',
  data () {
    return {
    }
  },
  computed: {
    currentSlideTitle () {
      const cp = this.$store.getters.currentPrez
      return cp ? cp.title : 'Select ...'
    },
    appInfo () {
      const packageJson = this.$store.state.env.packageJson
      return packageJson.name + ' ' + packageJson.version
    },
    navVisible () {
      return this.$store.state.view.navVisible
    }
  },
  mounted () {
    document.body.addEventListener('mousemove', this.showNav)
  },
  beforeDestroy () {
    document.body.removeEventListener('mousemove', this.showNav)
  },
  methods: {
    showNav (event) {
      this.$store.dispatch(event.clientY < 50 ? 'nav-show' : 'nav-hide')
    },
    showList () {
      this.$store.dispatch('list-show')
    },
    openGit () {
      const url = this.$store.state.env.packageJson.repository.url
      window.open(url.replace(/^.*:\/\//, 'https://'))
    }
  }
}
</script>

<style scoped>
.nav-bar {
  align-items: center;
  background: skyblue;
  color: white;
  display: flex;
  flex-direction: row;
  height: 3em;
  justify-content: space-between;
}

.nav-bar > div,
.nav-bar > div > div {
  align-items: center;
  display: flex;
  height: 100%;
  padding: 0em 0.3em;
  user-select: none;
}

.nav-bar .select-prez {
  background: transparent;
  border: 0.1em;
  color: white;
  cursor: pointer;
  height: 100%;
}

.nav-bar .select-prez:hover {
  background: rgba(0, 0, 0, 0.3);
}

.nav-bar .open-git {
  background-image: url("https://github.com/fluidicon.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
  cursor: pointer;
  height: 2em;
  width: 2em;
}
.nav-bar .open-git:hover {
  box-shadow: 0 0 0 5px rgba(#fff,.4) , 0 0 0 10px  #555;
}

@media only screen and (max-width: 500px) {
  .nav-bar {
    align-items: center;
    flex-direction: column;
    height: auto;
    justify-content: flex-start;
  }

  .nav-bar > div {
    display: flex;
    flex-direction: row;
    height: 2em;
    justify-content: center;
    width: 100%;
  }
}
</style>
