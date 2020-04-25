<template>
    <div class="treatments-container">
        <div class="row">
            <div class="column" v-for="(department,index) in allDepartments" v-bind:key="index">
                    <article class="treatment-item">
                        <div class="entry-content">

                            <div class="title-wrapper">
                                <div class="treatment-item-thumb-wrapper">
                                    <figure class="overlay-effect">
                                        <img width="585" height="386" v-bind:src="getDepartmentLogo(index)" class="treatment-item-image" alt="">	
                                        <a class="overlay"><i class="top"></i> <i class="bottom"></i></a>
                                    </figure>
                                </div>
                                <h3 class="entry-title">
                                    <router-link :to="`/treatments/${department.departmentId}`">{{department[localization].departmentName}}</router-link>
                                </h3>
                            </div>


                            <div class="entry-info">
                                <p>{{department[localization].departmentAbout || 'No description...'}}</p>
                            </div>
                        </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TreatmentsView',
    metaInfo: {
      title: 'KairHealth',
      titleTemplate: '%s - Departments',
      htmlAttrs: {
        lang: 'en',
        amp: true
      }
    },
    data() {
        return {
            allDepartments: [],
            allTreatments: [],
            localization: 'en'
        }
    },
    created() {
        this.loadDepartments()
        this.loadTreatments()
    },
    methods: {
        loadDepartments: function() {
           this.$axios
                .get(`${this.$apiPath}/api/department/list`)
                .then(response => {
                    if (response.status == 200) {
                        //console.log(response.data)
                        this.allDepartments = response.data
                    }
                }) 
        },
        getDepartmentLogo: function(index) {
            var departmentImages = this.allDepartments[index].departmentImages || []

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
        loadTreatments: function() {
            this.$axios
                .get(`${this.$apiPath}/api/treatment/list`)
                .then(response => {
                    if (response.status == 200) {
                        //console.log(response.data)

                        var data = response.data

                        this.allTreatments = []

                        for (var i=0; i<data.length; i++) {
                            this.allTreatments.push(data[i])
                        }
                    }
                })
        }
    }
}
</script>

<style lang="scss" scoped>

    .title-wrapper {
        display: flex;
        align-items: center;
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

        @media (min-width: 724px) {
            flex: 0 0 calc(50% - 30px);
            max-width: calc(50% - 30px);
        }

        @media (min-width: 992px) {
            flex: 0 0 calc(33% - 30px);
            max-width: calc(33% - 30px);
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
            /*
            .overlay:hover {
                background-color: #7ace4c96;
                transform: rotate(0);
                opacity: 1;
            }*/
        }

        .entry-content {
            box-shadow: 0 4px 12px rgba(33, 44, 55, 0.06);
            text-align: center;
            padding: 1.5rem 1.5rem;

            a {
                text-decoration: none;
            }

            .entry-title {
                overflow: hidden;
                margin-top: 0;
                flex: 0 0 55%;
                a {
                    font-weight: 600;
                    color: #2f3d4a;
                    transition: color 0.13s linear;
                }

                a:hover {
                    color: #7ace4c;
                    text-decoration: none;
                }
            }

            .entry-info {
                font-weight: 300;
                font-size: 1rem;
                p {
                    overflow: hidden;
                    line-height: 1.8;
                    color: #7d98ad;
                }
            }
        }

        figure {
            margin: 0;
        }

        img {
            width: 100%;
            height: auto;
        }
    }

    .treatment-item {
        .treatment-item-thumb-wrapper {
            flex: 0 0 30%;
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
                    background-image: url('../assets/icons/medical-interface-symbol.png');
                    background-color: #7ace4ccc;
                    transform: rotate(45deg);
                    transition: all 0.3s;
                }

                /*
                .overlay:hover {
                    background-color: #7ace4c96;
                    transform: rotate(0);
                    opacity: 1;
                }*/
            }

            .treatment-item-image {
                width: 50%;
                height: auto;
            }
        }
    }


    .treatments-container {
        padding-top: 9rem;
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
</style>