<template>
    <router-link to="/" class="site-logo">
    </router-link>
</template>
<script>
export default {
  name: 'siteLogo'
}
</script>

<style lang="scss" scoped>

.site-logo {
    display: flex;
    background: url('../../assets/logo.png') no-repeat;
    background-size: 225px;
    background-position: center;
    width: 225px;
    height: 80px;
    margin-top: auto;
    margin-bottom: auto;

    @media only screen and (max-width: 768px) {
        justify-content: center;
    }
}

</style>
