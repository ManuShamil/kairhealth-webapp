<template>
    <div>
        <BreadCrumbNavigation :navPath=[]>Contact</BreadCrumbNavigation>
        <ContactForm/>
        <callToAction/>
    </div>
</template>

<script>
import BreadCrumbNavigation from '../components/breadCrumpNav'
import ContactForm from '../components/contactForm'
import callToAction from '../components/callToAction'

export default {
    name: 'ContactPage',
    metaInfo: {
      title: 'KairHealth',
      titleTemplate: '%s - Contact Us',
      htmlAttrs: {
        lang: 'en',
        amp: true
      }
    },
    components: {
        BreadCrumbNavigation,
        ContactForm,
        callToAction
    }
}
</script>

<style lang="scss" scoped>

</style>