<template>
    <div class="cta-container">
        <div class="call-to-action">

            <cta-address></cta-address>
            <cta-phone></cta-phone>
            <cta-email></cta-email>
            <cta-quote></cta-quote>
        </div>
    </div>
</template>

<script>
import address from '../dependencies/callToAction/Address'
import phone from '../dependencies/callToAction/Phone'
import email from '../dependencies/callToAction/Email'
import quote from '../dependencies/callToAction/Quote'

export default {
    name: "callToAction",
    components: {
        'cta-address': address,
        'cta-phone': phone,
        'cta-email': email,
        'cta-quote': quote
    }
}
</script>

<style lang="scss" scoped>

    .cta-container {
        background-image: linear-gradient(to right, #7ace4c 0%, #017e9d 100%);
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;


        .call-to-action {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            margin-right: auto;
            margin-left: auto;
            padding-right: 15px;
            padding-left: 15px;


            > * {
                padding: 20px;
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
    }

</style>
