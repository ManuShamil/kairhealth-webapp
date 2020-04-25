<template>
    <div>
        <BreadCrumbNavigation :navPath="[]">Hospitals</BreadCrumbNavigation>
        <HospitalsView/>
    </div>
</template>

<script>
import BreadCrumbNavigation from '../components/breadCrumpNav'
import HospitalsView from '../components/hospitalsView'
export default {
    name: 'TreatmentsPage',
    components: {
        BreadCrumbNavigation,
        HospitalsView
    }
}
</script>

<style lang="scss" scoped>

</style>