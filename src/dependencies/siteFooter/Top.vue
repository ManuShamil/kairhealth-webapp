<template>
    <div class="top-container">
        <div class="row">
            <div class="section">
                <section>
                    <h3 class="title">About KairHealth</h3>
                    <div class="text-widget">
                        <p>Treatment in India Made Easy</p>
                        
                    </div>
                </section>  
            </div>

            <div class="section">
                <section>
                    <h3 class="title">Menu</h3>
                    <nav id="footer-navigation">
                        <ul>
                            <li><router-link to="/">Home</router-link></li>
                            <li><router-link to="/treatments">Treatments</router-link></li>
                            <li><a>Hospitals</a></li>
                            <li><router-link to="/contact">Contact</router-link></li>
                            <li><a>Why KairHealth?</a></li>
                            <li><a>How it Works?</a></li>
                        </ul>
                    </nav>
                </section>
            </div>
            <!--
            <div class="section">
                <section>
                    <h3 class="title">Categories</h3>
                    <div class="text-widget">
                        <p>Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diamno nummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                        
                        <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                    </div>
                </section>  
            </div>
            <div class="section">
                <section>
                    <h3 class="title">Newsletter Sign Up</h3>

                    <div class="text-widget">
                        <p>Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diamno nummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                        
                        <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                    </div>
                </section>  

            </div>-->
        </div>

    </div>
</template>

<script>
export default {
    name: 'siteFooterTop'
}
</script>

<style lang="scss" scoped>
    nav {

        ul {
            display: block;
            flex-wrap: wrap;
            margin: 0;
            padding: 0;

            li {
                text-align: left;
                list-style-type: none;
                margin-right: 20px;
                margin-top: 10px;
                margin-bottom: 5px;
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

    .top-container {
        background: #2b3239;
        width: 100%;
        color: #97a4b0;
        padding-top: 5rem;
        padding-bottom: 2.5rem;

        .row {
            display: flex;
            justify-content: space-around;
            margin: auto;

            @media (max-width: 992px) {
                flex-wrap: wrap;
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

            .section {
                @media (min-width: 576px) {
                    max-width: 100%;
                }

                @media (min-width: 768px) {
                    max-width: 50%;
                }

                @media (min-width: 992px) {
                    max-width: 25%;
                }

                @media (min-width: 1200px) {
                    max-width: 25%;
                }
                padding-right: 15px;
                padding-left: 15px;
                padding-bottom: 20px;
            }
        }

        section {
            text-align: left;
            .title {
                margin: 0;
                font-family: inherit;
                color: #fff;
                font-weight: 500;
                line-height: 1.2;
                font-size: 1rem;
            }

            .text-widget {
                p {
                    word-spacing: 2px;
                    font-size: 0.9rem;
                }
            }
        }
    }
</style>