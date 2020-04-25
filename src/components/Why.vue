<template>
    <div class="why-section">
        <div class="why-container">
            <header>
                <h2 class="section-title">Why <span>KairHealth</span>?</h2>
                <p><span>KairHealth</span> helps you arrange the best health care solutions in India. </p>
            </header>
            <div class="row">

                <div class="column">
                    <article>
                        <div class="thumb-wrapper"><a><img src="../assets/icons/smile.png" alt=""></a></div>
                        <div class="content-wrapper">
                            <h3 class="item-title">Free service</h3>
                            <div class="item-content">
                                <p>You do not pay for KairHealth services. We are financed by the hospitals.</p>
                            </div>
                        </div>
                    </article>
                </div>

                <div class="column">
                    <article>
                        <div class="thumb-wrapper"><a><img src="../assets/icons/assistance.png" alt=""></a></div>
                        <div class="content-wrapper">
                            <h3 class="item-title">24/7 assistance</h3>
                            <div class="item-content">
                                <p>Our doctors and staff stay in touch 24/7 to resolve any unforeseen issues during the whole treatment duration..</p>
                            </div>
                        </div>
                    </article>
                </div>

                <div class="column">
                    <article>
                        <div class="thumb-wrapper"><a><img src="../assets/icons/heart.png" alt=""></a></div>
                        <div class="content-wrapper">
                            <h3 class="item-title">Freedom to choose</h3>
                            <div class="item-content">
                                <p>You get to choose 50+ alternative healthcare providers based on accreditation, ambiance and method of treatment.</p>
                            </div>
                        </div>
                    </article>
                </div>

                <div class="column" v-if="currentRoute != '/'">
                    <article>
                        <div class="thumb-wrapper"><a><img src="../assets/icons/add.png" alt=""></a></div>
                        <div class="content-wrapper">
                            <h3 class="item-title">Pre & post treatment assistance</h3>
                            <div class="item-content">
                                <p>You get pre and post treatment consultations with a KairHealth doctor and, if required, a second opinion too.</p>
                            </div>
                        </div>
                    </article>
                </div>

                <div class="column" v-if="currentRoute != '/'">
                    <article>
                        <div class="thumb-wrapper"><a><img src="../assets/icons/snowflake.png" alt=""></a></div>
                        <div class="content-wrapper">
                            <h3 class="item-title">Transparency</h3>
                            <div class="item-content">
                                <p>KairHealth shares all required information and makes sure that you clearly know how much and what you are paying for, before the travel.</p>
                            </div>
                        </div>
                    </article>
                </div>

                <div class="column" v-if="currentRoute != '/'">
                    <article>
                        <div class="thumb-wrapper"><a><img src="../assets/icons/check.png" alt=""></a></div>
                        <div class="content-wrapper">
                            <h3 class="item-title">Medical Visa assistance</h3>
                            <div class="item-content">
                                <p>We provide you with the invitation letter from the hospital and help you with your medical visa application.</p>
                            </div>
                        </div>
                    </article>
                </div>

                <div class="column" v-if="currentRoute != '/'">
                    <article>
                        <div class="thumb-wrapper"><a><img src="../assets/icons/global.png" alt=""></a></div>
                        <div class="content-wrapper">
                            <h3 class="item-title">Help with leisure tours</h3>
                            <div class="item-content">
                                <p>Besides your treatment, we also help you in arranging leisure trips in order to make your visit to India a holistic experience.</p>
                            </div>
                        </div>
                    </article>
                </div>

                <div class="column" v-if="currentRoute != '/'">
                    <article>
                        <div class="thumb-wrapper"><a><img src="../assets/icons/cutlery.png" alt=""></a></div>
                        <div class="content-wrapper">
                            <h3 class="item-title">Halal and organic</h3>
                            <div class="item-content">
                                <p>KairHealth makes sure that the treatment is 100% herbal based, with use of organic products only. We make sure that the food and services provided are Halal.</p>
                            </div>
                        </div>
                    </article>
                </div>

                <div class="column" v-if="currentRoute != '/'">
                    <article>
                        <div class="thumb-wrapper"><a><img src="../assets/icons/handshake.png" alt=""></a></div>
                        <div class="content-wrapper">
                            <h3 class="item-title">Services on demand</h3>
                            <div class="item-content">
                                <p>We help you to arrange services of interpreters, bystanders and chefs. We also assist you with ticketing, foreign exchange, accommodation, SIM card and inner city transportation.</p>
                            </div>
                        </div>
                    </article>
                </div>
                
            </div>
        </div>

        <div class="button-wrapper" v-if="currentRoute == '/'">
            <router-link to="/why"></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'whySection',
        data() {
            return {
                localization: 'en',
                currentRoute: ''
            }
        },
        created() {
            this.currentRoute = this.$route.fullPath
        },
        watch:{
            '$route': function(){
                this.currentRoute = this.$route.fullPath
            }
        } 
    }
</script>

<style lang="scss" scoped>

    .button-wrapper {
        position: relative;
        z-index: 500;
        margin-top: -5rem;

        a {
            display: inline-block;
            font-weight: normal;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            user-select: none;
            border: 1px solid transparent;
            padding: 1.7rem 2.1rem;
            font-size: 1.5rem;
            line-height: 1.25;
            transition: all 0.15s ease-in-out;

            background-color: #7ace4c;
            color: #fff;

            background-repeat: no-repeat;
            background-position: center center;
            background-size: 18px auto;
            background-image: url('../assets/icons/icon-right-arrow.png');
        }

        a:hover {
            background-color: #60b532;
        }
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }

    .column {

        @media (min-width: 576px) {
            flex: 0 0 calc(100% - 30px);
            max-width: calc(100% - 30px);
        }

        @media (min-width: 992px) {
            flex: 0 0 calc(33.33333% - 30px);
            max-width: calc(33.33333% - 30px);
        }

        @media (min-width: 1200px) {
            flex: 0 0 calc(33.33333% - 30px);
            max-width: calc(33.33333% - 30px);
        }


        padding-right: 15px;
        padding-left: 15px;

        margin-bottom: 3rem;
        position: relative;
        width: 100%;

    }

    article {
        padding-top: 3rem;
        background-color: #fff;
        box-shadow: 0 4px 12px 5px rgba(33, 44, 55, 0.06);

        .thumb-wrapper {
            a {
                img {
                    max-width: 64px;
                }
            }
        }

        .content-wrapper {
            padding: 3rem 3rem 5rem;

            .item-title {
                font-weight: 600;
                margin-top: 0;

                a {
                    transition: color 0.13s linear;
                    text-decoration: none;
                    color: #2f3d4a;
                }

                a:hover {
                    color: #7ace4c;
                    text-decoration: none
                }
            }

            .item-content {     
                margin: 0;
                margin-bottom: 2rem;
                font-size: 1rem;
                font-weight: 300;
                line-height: 1.8;     
                color: #7d98ad;
            }
        }
    }

    .why-section {
        padding-top: 5rem;
        padding-bottom: 5rem;
        background-color: #edf2f5;

        .why-container {
            padding-right: 15px;
            padding-left: 15px;
            margin: auto;

            header {
                opacity: 1;
                padding-right: 15%;
                padding-left: 15%;
                margin-bottom: 4.5rem;

                animation-name: fadeInUp;
                animation-duration: 4s;

                @keyframes fadeInUp {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }

                    70% {
                        opacity: 25;
                        transform: translateY(0);
                    }

                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .section-title {
                    color: #2f3d4a;
                    margin: auto;
                    font-weight: 300;
                    line-height: 1.2;

                    span {
                        font-weight: 600;
                    }

                }


                p {
                    font-size: 0.9rem;
                    font-weight: 300;
                    word-spacing: 2px;
                    color: #7d98ad;
                    line-height: 2;
                }
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