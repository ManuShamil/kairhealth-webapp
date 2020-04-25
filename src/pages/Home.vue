<template>
    <div>
        <Intro/>
        <Departments/>
        <Hospitals/>
        <Why/>
        <Testimonials/>
        <callToAction/>
    </div>
</template>

<script>
import Intro from '../components/Intro'
import callToAction from '../components/callToAction'
import Departments from '../components/Departments'
import Hospitals from '../components/Hospitals'
import Why from '../components/Why'
import Testimonials from '../components/Testimonials'
export default {
    name: "HomePage",
    metaInfo: {
      title: 'KairHealth',
      titleTemplate: '%s - Treatment in India Made Easy!',
      htmlAttrs: {
        lang: 'en',
        amp: true
      }
    },
    components: {
        callToAction,
        Departments,
        Why,
        Hospitals,
        Testimonials,
        Intro
    }
}
</script>

<style lang="scss" scoped>

</style>