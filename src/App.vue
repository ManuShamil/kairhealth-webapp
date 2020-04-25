<template>
  <div id="app">
    <siteHeader/>
    <router-view/>
    <siteFooter/>
  </div>
</template>

<script>
import siteHeader from './components/siteHeader'
import siteFooter from './components/siteFooter'

export default {
  name: 'App',
  components: {
    'siteHeader': siteHeader,
    siteFooter
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Open Sans Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #7d98ad;
}

::selection {
    background-color: #7ace4c;
    color: #fff;
}

body, html {
  margin: 0;
}

</style>
