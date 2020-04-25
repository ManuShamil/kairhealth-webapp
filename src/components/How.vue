<template>
    <div class="how-section">
        <div class="how-container">
            <header>
                <h2 class="section-title">How it Works?</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </header>
            <div class="row">

                <div class="column">
                    <article>
                        <div class="thumb-wrapper"><a><img src="../assets/icons/check.png" alt=""></a></div>
                        <div class="content-wrapper">
                            <div class="item-content">
                                <p>You submit a request on our website</p>
                            </div>
                        </div>
                    </article>
                </div>

                <div class="column">
                    <article>
                        <div class="thumb-wrapper"><a><img src="../assets/icons/profile.png" alt=""></a></div>
                        <div class="content-wrapper">
                            <div class="item-content">
                                <p>We contact you to find out your preferences</p>
                            </div>
                        </div>
                    </article>
                </div>

                <div class="column">
                    <article>
                        <div class="thumb-wrapper"><a><img src="../assets/icons/document.png" alt=""></a></div>
                        <div class="content-wrapper">
                            <div class="item-content">
                                <p>You receive the personalized treatment plan</p>
                            </div>
                        </div>
                    </article>
                </div>

                <div class="column">
                    <article>
                        <div class="thumb-wrapper"><a><img src="../assets/icons/team.png" alt=""></a></div>
                        <div class="content-wrapper">
                            <div class="item-content">
                                <p>A KairHealth medical team gets in touch with you</p>
                            </div>
                        </div>
                    </article>
                </div>

                <div class="column">
                    <article>
                        <div class="thumb-wrapper"><a><img src="../assets/icons/home.png" alt=""></a></div>
                        <div class="content-wrapper">
                            <div class="item-content">
                                <p>You undergo treatment and return home</p>
                            </div>
                        </div>
                    </article>
                </div>

                <div class="column">
                    <article>
                        <div class="thumb-wrapper"><a><img src="../assets/icons/phone.png" alt=""></a></div>
                        <div class="content-wrapper">
                            <div class="item-content">
                                <p>KairHealth stays in touch with you</p>
                            </div>
                        </div>
                    </article>
                </div>

                
            </div>
        </div>

        <div class="button-wrapper" v-if="currentRoute == '/'">
            <router-link to="/how"></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'howSection',
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

    .how-section {
        padding-top: 5rem;
        padding-bottom: 5rem;
        background-color: #edf2f5;

        .how-container {
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