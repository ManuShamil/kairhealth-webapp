<template>
    <div class="footer-bottom">
        <div class="bottom-container">
            <div class="row">
                <div class="bottom-left">
                    <!--<nav id="footer-navigation">
                        <ul>
                            <li><router-link to="/">Home</router-link></li>
                            <li><router-link to="/treatments">Treatments</router-link></li>
                            <li><a>Hospitals</a></li>
                            <li><router-link to="/contact">Contact</router-link></li>
                            <li><a>Why KairHealth?</a></li>
                            <li><a>How it Works?</a></li>
                        </ul>
                    </nav>-->

                    <div class="site-info">
                        <p>© Copyright 2020. All Rights Reserved by KairHealth</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'siteFooterBottom'
}
</script>

<style lang="scss" scoped>
    .footer-bottom {    
        background-color: #262d33;
        color: #798693;

        padding-top: 2.5rem;
        padding-bottom: 2.5rem;

            .bottom-container {
                margin: auto;

                .row {
                    display: flex;
                    justify-content: center;
                    .bottom-left {
                        overflow: hidden;
                        nav {

                            ul {
                                display: flex;
                                flex-wrap: wrap;
                                margin: 0;
                                padding: 0;

                                li {
                                    list-style-type: none;
                                    margin-right: 20px;
                                    margin-bottom: 20px;
                                    a {
                                        text-decoration: none;
                                        color: inherit;
                                        font-size: 0.95rem;
                                        cursor: pointer;
                                        transition: all ease-in-out 0.5s;
                                    }

                                    a:hover {
                                        color: #fff;
                                    }
                                }
                            }
                        }

                        .site-info {
                            font-size: 0.82rem;
                            text-align: left;
                        }
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