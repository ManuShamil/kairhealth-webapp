<template>
    <div>
        <siteHeaderMiddle/>
        <siteHeaderBottom/>
    </div>
</template>

<script>
import siteHeaderTop from './../dependencies/siteHeader/Top'
import siteHeaderMiddle from './../dependencies/siteHeader/Middle'
import siteHeaderBottom from './../dependencies/siteHeader/Bottom'

export default {
  name: 'siteHeader',
  components: {
    'siteHeaderTop': siteHeaderTop,
    'siteHeaderMiddle': siteHeaderMiddle,
    'siteHeaderBottom': siteHeaderBottom
  }
}
</script>

<style lang="scss">
  siteHeaderBottom {
    display: none;
  }
</style>