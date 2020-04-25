<template>
    <div>
        <BreadCrumbNavigation :navPath=[]>Why KairHealth?</BreadCrumbNavigation>
        <Why/>
        <callToAction/>
    </div>
</template>

<script>
import BreadCrumbNavigation from '../components/breadCrumpNav'
import Why from '../components/Why'
import callToAction from '../components/callToAction'

export default {
    name: 'WhyPage',
    metaInfo: {
      title: 'KairHealth',
      titleTemplate: '%s - Why KairHealth?',
      htmlAttrs: {
        lang: 'en',
        amp: true
      }
    },
    components: {
        BreadCrumbNavigation,
        Why,
        callToAction
    }
}
</script>

<style lang="scss" scoped>

</style>