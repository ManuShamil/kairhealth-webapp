<template>
    <div class="hospitals-section">
        <div class="hospitals-container ">
            <header>
                <h2 class="section-title">Browse our <span>Hospitals</span></h2>
                <p>More than <span>50+</span> Hospitals across India.</p>
            </header>
            <div class="row">
                <div class="column" v-for="(hospital,index) in randomizedHospitals.slice(0,4)" v-bind:key="index">
                    <article>
                        <figure class="overlay-effect">
                            <figure>
                                <router-link :to="`/hospitals/${hospital.hospitalUniqueName}`" :title="hospital[localization].hospitalName">
                                    <img width="585" height="500" v-bind:src="getPrimaryImage(hospital)" :style="{'background-image' : `url(${getPrimaryImage(hospital)})` }" class="attachment-doctor-grid-thumb size-doctor-grid-thumb wp-post-image" alt="">
                                </router-link>
                            </figure>
                            <router-link class="overlay" :to="`/hospitals/${hospital.hospitalUniqueName}`">
                                <i class="top"></i> 
                                <i class="bottom"></i>
                            </router-link>
                        </figure>
                        <div class="entry-content">
                            <h3 class="entry-title">
                                <router-link :to="`/hospitals/${hospital.hospitalUniqueName}`">{{hospital[localization].hospitalName}}</router-link>
                            </h3>
                            <div class="entry-info">
                                <router-link :to="`/hospitals/${hospital.hospitalUniqueName}`">{{hospital[localization].hospitalArea || "Unknown"}}</router-link>    
                            </div>
                        </div>
                    </article>
                </div>
            </div>

            <div class="button-wrapper">
                <router-link to="/hospitals" >View all Hospitals</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'hospitalsSection',
    data() {
        return {
            allHospitals : [],
            randomizedHospitals: [],
            localization: 'en'
        }
    },
    created() {
        this.loadHospitals()
    },
    methods: {
        loadHospitals: function() {
            this.$axios
                .get(`${this.$apiPath}/api/hospital/list`)
                .then(response => {
                    if (response.status == 200) {
                        this.allHospitals = response.data

                        this.randomizedHospitals = this.randomizeHospitals(this.allHospitals,4)
                    }
                })
        },
        getPrimaryImage: function(hospital) {
            var hospitalImages = hospital.hospitalImages || []


            var fullPath

            for (var i=0; i < hospitalImages.length; i++) {
                if(hospitalImages[i].isPrimary) {
                    fullPath = this.$apiPath + '/' + hospitalImages[i].path

                    return fullPath
                }
            }

            if(hospitalImages.length > 0) {
                fullPath = this.$apiPath + '/' + hospitalImages[0].path
            } else {
                fullPath = ''
            }

            return fullPath
        },
        randomizeHospitals(arr,n) {
            var result = new Array(n),
                len = arr.length,
                taken = new Array(len);
            if (n > len)
                throw new RangeError("getRandom: more elements taken than available");
            while (n--) {
                var x = Math.floor(Math.random() * len);
                result[n] = arr[x in taken ? taken[x] : x];
                taken[x] = --len in taken ? taken[len] : len;
            }
            return result;
        },
    }
}
</script>

<style lang="scss" scoped>
    .hospitals-section {
        padding-top: 7rem;
        padding-bottom: 5rem;
        color: #000;
        background-color: #fff;
    }

    .button-wrapper {
        margin-top: 2rem;
        a {
            display: inline-block;
            font-size: 0.9rem;
            text-align: center;
            background-color: #7ace4c;
            color: #fff;
            text-decoration: none;
            padding: 1rem 2.5rem;
            transition: all 0.15s ease-in-out;
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
            flex: 0 0 calc(50% - 30px);
            max-width: calc(50% - 30px);
        }

        @media (min-width: 992px) {
            flex: 0 0 calc(25% - 30px);
            max-width: calc(25% - 30px);
        }

        padding-right: 15px;
        padding-left: 15px;

        margin-bottom: 3rem;
        position: relative;
        width: 100%;
        min-height: 1px;
    }

    article {

        .overlay-effect {
            position: relative;
            overflow: hidden;

            .overlay {
                display: block;
                z-index: 999;
                position: absolute;
                background: center center no-repeat;
                height: 100%;
                width: 100%;
                bottom: 0;
                left: 0;
                opacity: 0;
                background-image: url('../assets/icons/clinic.png');
                background-color: #7ace4ccc;
                transform: rotate(45deg);
                transition: all 0.3s;
            }

            .overlay:hover {
                background-color: #7ace4c96;
                transform: rotate(0);
                opacity: 1;
            }
        }

        .entry-content {
            box-shadow: 0 4px 12px rgba(33, 44, 55, 0.06);
            text-align: left;
            padding: 1.5rem 1.5rem;

            @media (max-width: 576px) {
                text-align: center;
            }

            a {
                text-decoration: none;
            }

            .entry-title {
                margin-top: 0;

                a {
                    font-weight: 400;
                    color: #2f3d4a;
                }
            }

            .entry-info {
                font-weight: 300;
                font-size: 0.9rem;
                a {
                    color: #7d98ad;
                }
            }
        }

        figure {
            margin: 0;
        }

        img {
            width:0px;
            height:0px; 
            padding: 50% 50%;

            @media (max-width: 576px) {
                padding: 40% 40%;
            }

            background: url('http://localhost:3000/uploads/5f93517bb0e8a7a4b8e886fda7a7fb78.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }
    }

    .hospitals-container {
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
</style>