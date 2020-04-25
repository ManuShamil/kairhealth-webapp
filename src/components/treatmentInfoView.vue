<template>
    <div>
        <BreadCrumbNavigation 
            :navPath="[{path: 'Treatments', to: '/treatments/'},{path: myDepartment[localization].departmentName, to: '/treatments/' + myDepartment.departmentId}]">
            {{treatment[localization].treatmentName}}
        </BreadCrumbNavigation>
        <div class="treatment-info-container">
            <div class="row">
                <div class="col-1">
                    <div class="treatment-info">
                        <figure>
                            <a class="swipebox" v-bind:title="treatment[localization].treatmentName">
                                <img width="0" height="0"  v-bind:src="getDepartmentLogo(myDepartment)" :style="{'background-image' : `url(${getDepartmentLogo(myDepartment)})` }" class="attachment-doctor-grid-thumb size-doctor-grid-thumb wp-post-image" alt="">                
                            </a>
                        </figure>
                        <h3 class="treatment-title">{{treatment[localization].treatmentName}}</h3>
                    </div>
                </div>
                <div class="col-2">
                    <div class="single-side-content">
                        <h2 class="entry-title">{{ treatment[localization].treatmentName}}</h2>
                        <div class="entry-content">
                            <h4>{{ myDepartment[localization].departmentName }}</h4>

                            <div class="toggle-main">
                                <div class="toggle" v-bind:class="{'current': (toggledIndeces.indexOf(index) != -1)}" v-for="(treatment,index) in treatment[localization].treatmentDetails" v-bind:key="index">
                                    <div class="toggle-title" v-on:click="toggleIndeces(index)">
                                        <h3>{{treatment.title || 'About'}}
                                            <i class="fa" v-bind:class="{'fa-minus': (toggledIndeces.indexOf(index) != -1), 'fa-plus': (toggledIndeces.indexOf(index) == -1)}"></i>
                                        </h3>
                                    </div>
                                    <div v-bind:class="{'toggled': (toggledIndeces.indexOf(index) != -1)}" class="toggle-content" :style="getStyle(index)">
                                        <p>{{treatment.description}}</p>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="related-treatments-container">
            <header class="home-section-header">
                <h2 class="home-section-title">Related <span>Treatments</span></h2>
                <p class="home-section-description">Treatments under <strong>{{myDepartment[localization].departmentName}}</strong></p>                        
            </header>
            <div class="row">
                <div class="col" v-for="(related,index) in relatedTreatments" v-bind:key="index">
                    <article>
                        <figure class="overlay-effect">
                            <figure>
                                <router-link :to="`/treatments/${myDepartment.departmentId}/${related.treatmentId}`" v-bind:title="related[localization].treatmentName">
                                    <img width="585" height="500" v-bind:src="getDepartmentLogo(myDepartment)" :style="{'background-image' : `url(${getDepartmentLogo(myDepartment)})` }" class="attachment-doctor-grid-thumb size-doctor-grid-thumb wp-post-image" alt="">
                                </router-link>
                            </figure>
                            <router-link class="overlay" :to="`/treatments/${myDepartment.departmentId}/${related.treatmentId}`">
                                <i class="top"></i> 
                                <i class="bottom"></i>
                            </router-link>
                        </figure>
                        <div class="entry-content">
                            <h3 class="entry-title">
                                <router-link :to="`/treatments/${myDepartment.departmentId}/${related.treatmentId}`">{{related[localization].treatmentName}}</router-link>
                            </h3>
                            <div class="entry-info">
                                <a rel="tag">{{related[localization].treatmentDetails[0].description.substring(0,150) + '...' || 'No Description...'}}</a>
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
    name: 'treatmentInfoView',
    components: {
        BreadCrumbNavigation
    },
    data() {
        return {
            localization: 'en',
            allDepartments: [],
            relatedTreatments: [],
            toggledIndeces: [0],
            myDepartment: {
                departmentId: '',
                departmentImages: [],
                en: {
                    departmentName: '',
                    departmentAbout: ''
                },
                ar: {
                    departmentName : '',
                    departmentAbout: ''
                },
            },
            treatment: {
                treatmentId: '',
                departmentId: '',
                en: {
                    treatmentName: '',
                    treatmentDetails: []
                },
                ar: {
                    treatmentName: '',
                    treatmentDetails: []
                },
            },
        }
    },
    created() {
        this.treatment.treatmentId = this.$route.params.treatmentId

        this.getTreatmentInfo()
    },
    methods: {
        loadDepartments: function() {
            this.$axios
                .get(`${this.$apiPath}/api/department/list`)
                .then(response => {
                    if (response.status == 200) {
                        this.allDepartments = response.data

                        

                        this.allDepartments.forEach(dept => {
                            if (dept.departmentId == this.treatment.departmentId)
                                this.myDepartment = dept
                        })

                        this.loadTreatmentsList(this.myDepartment.departmentId)
                    }
                }) 
        },
        loadTreatmentsList: function(departmentId) {

            this.$axios
                .get(`${this.$apiPath}/api/treatment/list`)
                .then(response => {
                    if (response.status == 200) {
                        

                        var data = response.data

                        for (var i=0; i<data.length; i++) {
                            if(data[i].departmentId == departmentId) {
                                this.relatedTreatments.push(data[i])
                            }
                        }

                        console.log(this.relatedTreatments)


                    }
                })
        },
        getTreatmentInfo : function() {
            this.$axios
            .get(`${this.$apiPath}/api/treatment/${this.treatment.treatmentId}`)
            .then(response => {
                if (response.status == 200) {

                    this.treatment = response.data

                    document.title = `KairHealth - ${this.treatment.en.treatmentName}`

                    this.loadDepartments()

                }
            })
        },
        getDepartmentLogo: function(myDepartment) {
            var departmentImages = myDepartment.departmentImages || []

            var fullPath

            for (var i=0; i < departmentImages.length; i++) {
                if(departmentImages[i].isLogo) {
                    fullPath = this.$apiPath + '/' + departmentImages[i].path

                    return fullPath
                }
            }

            if(departmentImages.length > 0) {
                fullPath = this.$apiPath + '/' + departmentImages[0].path
            } else {
                fullPath = ''
            }

        },
        toggleIndeces: function(index) {
            var loc = this.toggledIndeces.indexOf(index)


            if(loc != -1)
                this.toggledIndeces.splice(loc,1)
            else
                this.toggledIndeces.push(index)
        },
        getStyle: function(index) {
            var loc = this.toggledIndeces.indexOf(index)

            if(loc != -1)
                return {
                    'max-height': '500px',
                    'transition': 'max-height 0.5s ease-in'
                }
            else
                return {
                    'overflow': 'hidden',
                    'max-height': '0',
                    'transition': 'max-height 0.5s ease-out'
                }

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
                background-image: url('../assets/icons/doctor-interface-symbol.png');
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
                line-height: 1.8;
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
            width: 50%;
            height: auto;


            background: url('http://localhost:3000/uploads/5f93517bb0e8a7a4b8e886fda7a7fb78.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }
    }

    .toggle-main {
        .toggle {
            margin-bottom: 0.2rem;
            transition: all 0.5s;

            .toggle-title {
                cursor: pointer;
                transition: inherit;

                h3 {
                    color: #fff;
                    font-weight: 500;
                    padding: 1rem 3rem 1rem 2rem;
                    margin: 0;
                    font-size: 16px;
                    line-height: 24px;
                    position: relative;

                    .fa {
                        margin-right: 0;
                        font-size: 18px;
                        position: absolute;
                        top: 19px;
                        right: 19px;
                    }
                }
            }

            .toggle-content {
                display: block;
                overflow: hidden;
                height: 100%;
                padding: 1rem 15px 1px;
                transition: visibility 0s, opacity 0.5s linear;

                p {
                    margin-top: 0;
                }


            }

        }
    }


    .toggle-main .toggle-title {
        background-color: #007d9e;
    }

    .toggle-main .toggle-title:hover{
        background-color: #00718f;
    }

    .toggle-main .toggle.current .toggle-title {
        background-color: #7ace4c;
    }

    .toggle-main .toggle.current .toggle-title:hover {
        background-color: #65bd34;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }


    .col-1 {
        flex: 0 0 calc(25% - 30px);
        max-width: calc(25% - 30px);

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

        .treatment-info {
            figure {
                margin: 0;
                .swipebox {
                    display: block;

                    @media (max-width: 576px) {
                        display: flex;
                        justify-content: center;
                    }

                    img {
                        margin-bottom: 2rem;
                        float: left;
                        width:0px;
                        height:0px; 
                        padding: 50% 50%;

                        @media (max-width: 576px) {
                            padding: 20%;
                        }

                        background: url('http://localhost:3000/uploads/5f93517bb0e8a7a4b8e886fda7a7fb78.jpg');
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-position: center;
                    }
                }
            }

            .treatment-title {
                color: #2f3d4a;
                text-align: center;
                font-size: 1.3rem;
                margin-bottom: .8rem;
                font-weight: 500;
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

    .related-treatments-container {

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


    .treatment-info-container {
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