<template>
    <div class="banner-image">
        <div class="banner-overlay">
            <div class="bread-crumb-container">
                <h1 class="page-title">
                    <slot></slot>
                </h1>
                <nav class="bread-crumb-nav">
                    <ul class="breadcrumb">
                        <li>
                            <router-link to="/">KairHealth</router-link>
                            <span class="divider"></span>
                        </li>
                        <li v-for="(path,index) in navPath" v-bind:key="index">
                            <router-link :to="path.to || '/'">{{path.path}}</router-link>
                            <span class="divider"></span>
                        </li>
                        <li class="active"><slot></slot></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BreadCrumbNavigation',
    props: {
        navPath: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .banner-image {
        background-image: url('../assets/banner.jpg');
        background-repeat: no-repeat;
        background-position: center top;
        background-size: cover;

        .banner-overlay {
            position: block;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            opacity: .88;
            background-color: #007d9e;

            padding-top: 3.5rem;
            padding-bottom: 3rem;
        }

        .bread-crumb-container {
            margin-right: auto;
            margin-left: auto;
            padding-right: 15px;
            padding-left: 15px;

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

            .page-title {
                text-align: left;
                margin: 0;
                color: #fff;
                font-weight: 600;
                font-size: 1.4rem;    
            }

            .bread-crumb-nav {
                ul {
                    padding: 0;
                    margin: 0;
                    margin-top: 1.2rem;

                    li {
                        list-style-type: none;
                        float: left;
                        margin-right: .7rem;
                        margin-bottom: 0;

                        a {
                            color: #d5e4ea;
                            cursor: pointer;
                            font-size: 0.9rem;
                            font-weight: 300;
                            text-decoration: none;
                            transition: color 0.5s ease-in-out;
                        }

                        a:hover {
                            color: #fff;
                        }

                        .divider {
                            color: #d5e4ea; 
                            margin-left: .5rem;
                        }

                        .divider:before {
                            content: "\f105";
                            display: inline-block;
                            font-family: 'Font Awesome 5 Free';
                            font-weight: 900;
                            font-size: inherit;
                            -moz-osx-font-smoothing: grayscale;
                            -webkit-font-smoothing: antialiased;
                            font-style: normal;
                            font-variant: normal;
                            text-rendering: auto;
                            line-height: 1;
                        }
                    }

                    li.active {
                        float: left;
                        color: #fff;
                        font-size: 0.9rem;
                    }
                }
            }
        }
    }
</style>