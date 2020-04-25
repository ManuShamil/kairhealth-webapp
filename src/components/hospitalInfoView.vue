<template>
    <div>
        <BreadCrumbNavigation :navPath="[{path: 'Hospitals', to: '/hospitals'}]">{{hospital[localization].hospitalName}}</BreadCrumbNavigation>
        <div class="hospital-info-container">
            <div class="row">
                <div class="col-1">
                    <div class="hospital-info">
                        <figure>
                            <a class="swipebox"  :title="hospital[localization].hospitalName">
                                <img width="0" height="0"  v-bind:src="getPrimaryImage(hospital)" :style="{'background-image' : `url(${getPrimaryImage(hospital)})` }" class="attachment-doctor-grid-thumb size-doctor-grid-thumb wp-post-image" alt="">                
                            </a>
                        </figure>
                        <h3 class="hospital-title">{{hospital[localization].hospitalName}}</h3>
                        <div class="hospital-departments">
                            <div class="department" v-for="(department,index) in hospitalDepartments" :key="index">
                                <router-link :to="`/treatments/${department.departmentId}`">{{department[localization].departmentName}}</router-link>
                            </div>
                        </div>
                        <div class="hospital-specialities">
                            <p>
                                <strong>Beds</strong>
                                <span>{{ hospital.hospitalBeds}}</span>
                            </p>

                            <p>
                                <strong>Accreditations</strong>
                                <span class="accreditaion" v-for="(accr,accrIndex) in hospital.en.hospitalAccreditation" v-bind:key="accrIndex" :style="{'background-image' : `url(${getAccreditationLogo(accr)})`}">{{accr}}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <div class="single-side-content">
                        <h2 class="entry-title">{{ hospital[localization].hospitalName}}</h2>
                        <div class="entry-content">
                            <h4>{{ hospital[localization].hospitalArea }}</h4>
                            <h5>{{ hospital[localization].hospitalLandmarks}}</h5>
                            <p v-for="(infra,index) in hospital[localization].hospitalInfrastructure" v-bind:key="index"> {{ infra }}</p>

                            <h4>About {{ hospital[localization].hospitalName}}</h4>
                            <p v-for="(about,index) in hospital[localization].hospitalAbout" v-bind:key="index"> {{about}}</p>

                            <h4>Achievements and Specialities </h4>
                            <ul>
                                <li v-for="(achievement,index) in hospital[localization].hospitalTeam" v-bind:key="index"> {{achievement}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="related-hospitals-container" v-if="relatedHospitals.length > 0">
            <header class="home-section-header">
                <h2 class="home-section-title">Related <span>Hospitals</span></h2>
                <p class="home-section-description">Looking for similar hospitals in or around <strong>{{hospital[localization].hospitalArea}}</strong> region?</p>                        
            </header>
            <div class="row">
                <div class="col" v-for="(related,index) in relatedHospitals" v-bind:key="index">
                    <article>
                        <figure class="overlay-effect">
                            <figure>
                                <router-link :to="`/hospitals/${related.hospitalUniqueName}`" :title="related[localization].hospitalName">
                                    <img width="585" height="500" v-bind:src="getPrimaryImage(related)" :style="{'background-image' : `url(${getPrimaryImage(related)})` }" class="attachment-doctor-grid-thumb size-doctor-grid-thumb wp-post-image" alt="">
                                </router-link>
                            </figure>
                            <router-link class="overlay" :to="`/hospitals/${related.hospitalUniqueName}`">
                                <i class="top"></i> 
                                <i class="bottom"></i>
                            </router-link>
                        </figure>
                        <div class="entry-content">
                            <h3 class="entry-title">
                                <router-link :to="`/hospitals/${related.hospitalUniqueName}`">{{related[localization].hospitalName}}</router-link>
                            </h3>
                            <div class="entry-info">
                                <a rel="tag">{{related[localization].hospitalArea}}</a>
                            </div>

                        </div>
                        
                    </article>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BreadCrumbNavigation from '../components/breadCrumpNav'

export default {
    name: 'hospitalInfoView',
    metaInfo() {
        return {
            title: 'KairHealth',
            titleTemplate: '%s - About Hospital',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    },
    components: {
        BreadCrumbNavigation
    },
    data() {
        return {
            localization: 'en',
            hospitalDepartments: [],
            allDepartments: [],
            relatedHospitals: [],
            hospital: {
                hospitalUniqueName: "",
                hospitalBeds: 0,
                hospitalImages: [],
                en : {
                    hospitalName: "",
                    hospitalArea: "",
                    hospitalAddress: "",
                    hospitalAchievements: "",
                    hospitalAccreditation: [],
                    hospitalSpecialities: [],
                    hospitalAbout: [],
                    hospitalTeam: [],
                    hospitalLandmarks: "",
                    hospitalInfrastructure: [],
                },
                ar: {
                    hospitalName: "",
                    hospitalArea: "",
                    hospitalAddress: "",
                    hospitalAchievements: "",
                    hospitalAccreditation: [],
                    hospitalSpecialities: [],
                    hospitalAbout: [],
                    hospitalTeam: [],
                    hospitalLandmarks: "",
                    hospitalInfrastructure: []
                }
            }
        }
    },
    created() {
        this.hospital.hospitalUniqueName = this.$route.params.hospitalUniqueName

        this.getHospitalInfo()
    },
    methods: {
        getHospitalInfo: function() {
            this.$axios
            .get(`${this.$apiPath}/api/hospital/${this.hospital.hospitalUniqueName}`)
            .then(response => {
                if (response.status == 200) {
                    this.hospital = response.data

                    //Update Meta
                    document.title = `KairHealth - About ${this.hospital.en.hospitalName}`

                    //get all departments list
                    this.$axios
                        .get(`${this.$apiPath}/api/department/list`)
                        .then(response => {
                            if (response.status == 200) {
                                this.allDepartments = response.data

                                var myDepartments = []

                                this.hospital.hospitalTreatments.forEach(treatment => {
                                    myDepartments.push(treatment.departmentId)
                                })

                                myDepartments = this.getUnique(myDepartments)

                                myDepartments.forEach(dept => {
                                    for (var i=0; i<this.allDepartments.length; i++) {
                                        if (this.allDepartments[i].departmentId == dept) {
                                            this.hospitalDepartments.push(this.allDepartments[i])
                                        }
                                    }

                                })

                                this.findRelatedHospitals()

                            }
                        }) 

                }
            })
        },
        findRelatedHospitals() {
            this.$axios
                .get(`${this.$apiPath}/api/hospital/list`)
                .then(response => {
                    if (response.status == 200) {
                        this.allHospitals = response.data

                        response.data.forEach(hospital => {
                            if (hospital.en.hospitalArea.toLowerCase() == this.hospital.en.hospitalArea.toLowerCase()) {
                                if (this.hospital.hospitalUniqueName != hospital.hospitalUniqueName)
                                    this.relatedHospitals.push(hospital)
                            }
                        })

                        if(this.relatedHospitals.length > 4) {
                            this.relatedHospitals = this.randomizeRelatedHospitals(this.relatedHospitals,4);
                        }

                    }
                })
        },
        randomizeRelatedHospitals(arr,n) {
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
        getAccreditationLogo(accr) {

            var fullPath
            var ext

            if( accr == 'tuv') 
                ext = '.jpg' 
            else 
                ext = '.png'

            fullPath = this.$apiPath + '/uploads/icons/accreditation/' + accr.toLowerCase() + ext

            return fullPath;
        },
        getUnique: function(array){
            var uniqueArray = [];
            
            // Loop through array values
            for(var value of array){
                if(uniqueArray.indexOf(value) === -1){
                    uniqueArray.push(value);
                }
            }
            return uniqueArray;
        },
        getPrimaryImage: function(hospital) {
            var hospitalImages = hospital.hospitalImages || []


            var fullPath

            for (var i=0; i < hospitalImages.length; i++) {
                if(hospitalImages[i].isPrimary) {
                    fullPath = this.$apiPath + '/' + hospitalImages[i].path
                    
                    //return "http://localhost:3000/uploads/5f93517bb0e8a7a4b8e886fda7a7fb78.jpg"

                    return fullPath
                }
            }

            if(hospitalImages.length > 0) {
                fullPath = this.$apiPath + '/' + hospitalImages[0].path
            } else {
                fullPath = ''
            }

            return fullPath
        }
    }
}
</script>

<style lang="scss" scoped>

    .row {
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }

    .col {
        @media (min-width: 576px) {
            flex: 0 0 calc(100% - 30px);
            max-width: calc(100% - 30px);
        }

        @media (min-width: 724px) {
            flex: 0 0 calc(50% - 30px);
            max-width: calc(50% - 30px);
        }

        @media (min-width: 992px) {
            flex: 0 0 calc(33% - 30px);
            max-width: calc(33% - 30px);
        }

        @media (min-width: 1200px) {
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

            a {
                text-decoration: none;
            }

            .entry-title {
                margin-top: 0;
                font-size: 1rem;

                a {
                    font-weight: 400;
                    color: #2f3d4a;
                }
            }

            .entry-info {
                font-weight: 300;
                font-size: 0.85rem;
                a {
                    color: #7d98ad;
                }
            }
        }

        .entry-summary {
            font-size:0.85rem;
            font-weight: 300;
            margin-bottom: 2rem;
            font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            line-height: 1.8;
            color: #7d98ad;
        }

        hr {
            margin: 10px 0;
            border: 0;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
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

    .col-1 {
        flex: 0 0 calc(33% - 30px);
        max-width: calc(33% - 30px);

        padding-right: 15px;
        padding-left: 15px;

        margin-bottom: 3rem;
        position: relative;
        width: 100%;
        min-height: 1px;

        
        @media (max-width: 576px) {
            flex: 0 0 calc(100% - 30px);
            max-width: calc(100% - 30px);
        }

        .hospital-info {
            figure {
                margin: 0;
                .swipebox {
                    display: block;


                    @media (max-width: 576px) {
                        display: flex;
                        justify-content: center;
                    }

                    img {
                        @media (max-width: 576px) {
                            padding: 40% 40%;
                        }

                        margin-bottom: 2rem;
                        float: left;
                        width:0px;
                        height:0px; 
                        padding: 50% 50%;
                        background: url('http://localhost:3000/uploads/5f93517bb0e8a7a4b8e886fda7a7fb78.jpg');
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-position: center;
                    }
                }
            }

            .hospital-title {
                color: #2f3d4a;
                text-align: center;
                font-size: 1.3rem;
                margin-bottom: .8rem;
                font-weight: 500;
            }
            
            .hospital-departments {
                margin-bottom: 1.8rem;
                font-size: 0.9rem;
                text-align: center;

                .department {
                    display: inline-block;
                    margin: 0;
                    margin-left: 0.2rem;
                    margin-bottom: 0.5rem;
                    width: fit-content;
                }

                .department:not(:last-child)::after {
                    content: ","
                }


                a {
                    text-decoration: none;
                    color: #007d9e;
                    transition: color 0.13s linear;
                }


                a:hover {
                    color: #7ace4c;
                }
            }

            .hospital-specialities {
                background-color: #f8fbfc;
                padding: 3rem 2.5rem;
                border: 1px solid #eff2f3;

                p {
                    text-align: left;
                    strong {
                        color: #2f3d4a;
                        margin-right: 5%;
                        min-width: 25%;
                    }

                    span {
                        overflow: hidden;
                        width: 70%;
                        font-size: 0.9rem;
                    }

                    .accreditaion {
                        padding-left: 70px;
                        padding-bottom: 30px;
                        padding-top: 30px;
                        margin-top: 1rem;
                        text-align: left;
                        display: block;
                        width: 100%; 
                        background-size: 60px;
                        background-repeat: no-repeat;
                        background-position: 3px 12px;
                    }
                }
            }


        }
    }

    .col-2 {
        flex: 0 0 calc(66% - 30px);
        max-width: calc(66% - 30px);

        @media (max-width: 576px) {
            flex: 0 0 calc(100% - 30px);
            max-width: calc(100% - 30px);
        }


        padding-right: 15px;
        padding-left: 15px;

        margin-bottom: 3rem;
        position: relative;
        width: 100%;
        min-height: 1px;

        .single-side-content {
            text-align: left;

            .entry-title {
                color: #2f3d4a;
                margin-bottom: 1rem;
                padding-bottom: 1rem;
                font-size: 1.5rem;
                font-weight: 500;
                border-bottom: 2px solid #ecf1f2;
            }

            .entry-content {
                h4 {
                    margin-bottom: 1rem;
                    font-family: inherit;
                    font-weight: 500;
                    line-height: 1.2;
                    color: #2f3d4a;
                    font-size: 1.2rem;
                }

                h5 {
                    margin-bottom: 2rem;
                    font-family: inherit;
                    font-weight: 500;
                    line-height: 1.2;
                    color: #2f3d4a;  
                    font-size: 0.95rem;
                }

                p {
                    margin-bottom: 3rem;
                    font-weight: 300;
                    line-height: 1.8;
                    color: #7d98ad;
                    font-size: 0.9rem;
                }

                ul {
                    list-style: none;
                    padding-left: 0;
                    margin-bottom: 2.5rem;
                    li {
                        background-image: url("../assets/icons/arrow-list-one-bg.png");
                        background-repeat: no-repeat;
                        background-position: 4px 6px;
                        padding-left: 25px;
                        margin-bottom: 10px;
                        line-height: 1.8;
                        color: #7d98ad;
                        font-size: 0.9rem;
                    }
                }
            }
        }
    }

    .related-hospitals-container {

        .home-section-header {
            padding-right: 15%;
            padding-left: 15%;

            .home-section-title {
                font-size: 1.6rem;
                font-weight: 300;
                margin-bottom: 0;
                color: #2f3d4a;

                span {
                    font-weight: 600;
                    line-height: 1.2;
                    color: #2f3d4a;
                    font-family: inherit;
                }
            }

            .home-section-description {
                line-height: 1.8;
                font-size: 0.9rem;

                strong {
                    color: #2f3d4a;
                }
            }
        }


        padding-bottom: 6rem;
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
    }

    .hospital-info-container {
        padding-top: 6rem;
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
    }
</style>