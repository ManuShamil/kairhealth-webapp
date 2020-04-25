<template>
    <HospitalInfoView/>
</template>

<script>
import HospitalInfoView from '../components/hospitalInfoView'

export default {
    name:'HospitalInfoPage',
    metaInfo: {
      title: 'KairHealth',
      titleTemplate: '%s - About Hospital',
      htmlAttrs: {
        lang: 'en',
        amp: true
      }
    },
    components: {
        HospitalInfoView
    }
}
</script>

