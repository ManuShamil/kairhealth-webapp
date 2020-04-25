<template>
    <div class="intro-section" :style="{ 'background-image' : 'url('+background+')'}">
        <div class="intro-container">
            <header>
                <h2 class="section-title">Welcome to <span>KairHealth</span></h2>
                <p></p>
            </header>
            <header style=" margin-bottom: 0;">
                <h2 class="section-title" style="font-size:2rem; font-weight: bold;">Get Price Estimate</h2>
                <p></p>
            </header>
            <div class='price-estimate'>
                <input style="flex:40%" type="text" placeholder="Search Disease...">
                <input style="flex:40%" type="text" placeholder="Choose your country...">
                <div style="flex:20%" class="button-wrapper">
                    <a>Submit</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'intoSection',
    data() {
        return {
            background: require('../assets/arfan-a-oxW5Kh_MyGQ-unsplash.jpg')
        }
    }
}
</script>

<style lang="scss" scoped>
    .price-estimate {
        display: flex;
        justify-content: center;

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

        @media (max-width: 768px) {
            display: block;
        }

        input {
            box-sizing: border-box;
            outline: none;
            margin-bottom: 2rem;
            padding: 1.3rem 1.7rem;
            overflow: visible;
            border: 1px solid transparent;
            border-color: #ecf1f2;
            background-color: #fff;
            height: auto;
            color: #7d98ad;

            font-family: inherit;
            font-size: 0.9rem;
            font-weight: 400;
            transition: all 0.15s ease-in-out;
            margin-left: 1rem;

            @media (max-width: 768px) {
                width: 90%;
            }

        }

        input::placeholder {
            color: #7d98ad;
        }

        input:focus {
            color: #7d98ad;
            border-color: #e0e0e0;
        }

        .button-wrapper {
            padding: 0.3rem 1.7rem;
            a {
                display: inline-block;
                font-size: 0.9rem;
                text-align: center;
                background-color: #7ace4c;
                color: #fff;
                text-decoration: none;
                padding: 1rem 2.5rem;
                transition: all 0.15s ease-in-out;
                cursor: pointer;
            }

            a:hover {
                background-color: #60b532;
            }
        }
    }


    .intro-section {
        padding-top: 5rem;
        padding-bottom: 5rem;
        background-color: #edf2f5;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        .intro-container {
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

                .section-title {
                    color: #7ace4c;
                    margin: auto;
                    font-weight: 300;
                    line-height: 1.2;
                    text-shadow: #fff -1px 3px 20px;

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