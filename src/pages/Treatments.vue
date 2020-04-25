<template>
    <div>
        <BreadCrumbNavigation :navPath="[]">Treatments</BreadCrumbNavigation>
        <TreatmentsView/>
    </div>
</template>

<script>
import BreadCrumbNavigation from '../components/breadCrumpNav'
import TreatmentsView from '../components/treatmentsView'
export default {
    name: 'TreatmentsPage',
    metaInfo: {
      title: 'KairHealth',
      titleTemplate: '%s - Browse Treatments',
      htmlAttrs: {
        lang: 'en',
        amp: true
      }
    },
    components: {
        BreadCrumbNavigation,
        TreatmentsView
    }
}
</script>

<style lang="scss" scoped>

</style>