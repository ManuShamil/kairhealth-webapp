<template>
    <div class="middle-container">
        <site-logo/>
        <site-caption/>
        <contact/>
    </div>
</template>

<script>
import siteLogo from './site-logo'
import contact from './contact'
import caption from './caption'

export default {
    name: 'siteHeaderMiddle',
    components: {
        'site-logo': siteLogo,
        'contact': contact,
        'site-caption': caption
    }
}
</script>

<style lang="scss" scoped>
    .middle-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: auto;
        padding: 1.4rem 0;
        

        @media only screen and (max-width: 924px) {
        justify-content: space-around;
        }

        @media only screen and (max-width: 768px) {
            justify-content: center;
        }

        
        @media (min-width: 576px) {
            max-width: 540px;   
        }

        @media (min-width: 768px) {
            max-width: 720px;
        }

        @media (min-width: 992px) {
            max-width: 960px;
        }

        @media (min-width: 1200px) {
            max-width: 1170px;
        }

    }

</style>
