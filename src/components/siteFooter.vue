<template>
    <div>
        <Top/>
        <Bottom/>
    </div>
</template>

<script>
import Top from '../dependencies/siteFooter/Top'
import Bottom from '../dependencies/siteFooter/Bottom'

export default {
    name: 'siteFooter',
    components: {
        Top,
        Bottom
    }
}
</script>

<style lang="scss" scoped>

</style>