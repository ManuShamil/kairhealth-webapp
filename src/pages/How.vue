<template>
    <div>
        <BreadCrumbNavigation :navPath=[]>How it Works?</BreadCrumbNavigation>
        <How/>
        <callToAction/>
    </div>
</template>

<script>
import BreadCrumbNavigation from '../components/breadCrumpNav'
import How from '../components/How'
import callToAction from '../components/callToAction'

export default {
    name: 'WhyPage',
    metaInfo: {
      title: 'KairHealth',
      titleTemplate: '%s - How it Works?',
      htmlAttrs: {
        lang: 'en',
        amp: true
      }
    },
    components: {
        BreadCrumbNavigation,
        How,
        callToAction
    }
}
</script>

<style lang="scss" scoped>

</style>