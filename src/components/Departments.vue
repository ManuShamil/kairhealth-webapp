<template>
    <div class="department-section">
        <div class="department-container">
            <div class="row">


                <div class="column" v-for="(department,index) in allDepartments.slice(0,3)" v-bind:key="index">
                    <article>
                        <div class="thumb-wrapper">
                            <router-link :to="`/treatments/${department.departmentId}`">
                                <img v-bind:src="getDepartmentLogo(index)" alt="Dental Implants">
                            </router-link>
                        </div>
                        <div class="content-wrapper">
                            <h3 class="item-title"><router-link :to="`/treatments/${department.departmentId}`">{{department[localization].departmentName}}</router-link></h3>
                            <div class="item-content">
                                <p>{{department[localization].departmentAbout || 'No description...'}}</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>

        <div class="button-wrapper">
            <router-link to="/treatments"></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'departmentSection',
    data() {
        return {
            allDepartments: [],
            localization: 'en'
        }
    },
    created() {
        this.loadTreatments()
    },
    methods: {
        loadTreatments: function() {
            this.$axios
                .get(`${this.$apiPath}/api/department/list`)
                .then(response => {
                    if (response.status == 200) {

                        this.allDepartments = response.data

                        console.log(this.allDepartments)
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
        min-height: 1px;
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

    .department-section {
        padding-top: 5rem;
        padding-bottom: 5rem;
        background-color: #edf2f5;

        .department-container {
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