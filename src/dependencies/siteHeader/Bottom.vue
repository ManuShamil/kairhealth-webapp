<template>
    <div class="nav-container">
        <nav v-if="navType=='desktop'" class="desktop-menu">
            <ul>
                <li v-for="(item,index) in listItems" v-bind:key="index">
                    <router-link :to="item.path" v-bind:class="{'active': (item.path == currentRoute)}">{{item.text}}</router-link>

                    <ul class="sub-menu" v-if="'subList' in item">
                        <li>
                            <router-link v-for="(subitem,subindex) in item.subList" v-bind:key="subindex" :to="subitem.path">{{subitem.text}}</router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>

        <div v-if="navType=='mobile'" class="menu-bar">
            <a class="menu-reveal" v-on:click="openMobileMenu">
                <span></span>
                <span></span>
                <span></span>
            </a>
            <nav v-if="navType=='mobile'" class="mobile-menu" :style="myStyle">
                <ul>
                    <li v-for="(item,index) in listItems" v-bind:key="index">

                        <router-link :to="item.path" :style="checkForExtraStyle(item)" v-bind:class="{'active': (item.path == currentRoute)}">{{item.text}}</router-link>

                        <a v-if="'subList' in item" class="menu-expand" v-on:click="toggleIndeces(index)">{{checkForToggle(index)}}</a>

                        <ul class="sub-menu" v-if="'subList' in item" :style="getStyle(index)">
                            
                            <li v-for="(subitem,subindex) in item.subList" v-bind:key="subindex">
                                <router-link :to="subitem.path">{{subitem.text}}</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="search-form">
            <input type="text" placeholder="Search..">
            <div class="button-wrapper">
                <a :style="{'background-image': 'url(' + searchIcon + ')'}">S</a>
            </div>
        </div>
        <!--<router-link id="free_quote" to="/contact">
            <svg class="icon-calendar" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26px" height="26px" viewBox="0 0 24 24"><path d="M19.334,22.5H4.666C3.194,22.5,2,21.325,2,19.876V4.124C2,2.675,3.194,1.5,4.666,1.5h14.668C20.806,1.5,22,2.675,22,4.124v15.752C22,21.325,20.806,22.5,19.334,22.5L19.334,22.5zM20.666,4.124c0-0.724-0.596-1.312-1.332-1.312H4.666c-0.735,0-1.332,0.588-1.332,1.312v1.313h17.332V4.124L20.666,4.124zM20.666,6.749H3.334v13.127c0,0.724,0.597,1.312,1.332,1.312h14.668c0.736,0,1.332-0.588,1.332-1.312V6.749L20.666,6.749zM17.333,18.562c-1.104,0-2-0.881-2-1.967c0-1.089,0.896-1.971,2-1.971c1.105,0,2.001,0.882,2.001,1.971C19.334,17.681,18.438,18.562,17.333,18.562L17.333,18.562z M18,15.937h-1.334v1.313H18V15.937L18,15.937z M17.333,13.312c-1.104,0-2-0.88-2-1.969c0-1.087,0.896-1.967,2-1.967c1.105,0,2.001,0.88,2.001,1.967C19.334,12.432,18.438,13.312,17.333,13.312L17.333,13.312z M18,10.687h-1.334v1.313H18V10.687L18,10.687z M12,18.562c-1.104,0-1.999-0.881-1.999-1.967c0-1.089,0.896-1.971,1.999-1.971s1.999,0.882,1.999,1.971C13.999,17.681,13.104,18.562,12,18.562L12,18.562z M12.667,15.937h-1.334v1.313h1.334V15.937L12.667,15.937z M12,13.312c-1.104,0-1.999-0.88-1.999-1.969c0-1.087,0.896-1.967,1.999-1.967s1.999,0.88,1.999,1.967C13.999,12.432,13.104,13.312,12,13.312L12,13.312z M12.667,10.687h-1.334v1.313h1.334V10.687L12.667,10.687z M6.667,18.562c-1.105,0-2.001-0.881-2.001-1.967c0-1.089,0.896-1.971,2.001-1.971c1.104,0,2,0.882,2,1.971C8.667,17.681,7.771,18.562,6.667,18.562L6.667,18.562z M7.333,15.937H6v1.313h1.333V15.937L7.333,15.937z M6.667,13.312c-1.105,0-2.001-0.88-2.001-1.969c0-1.087,0.896-1.967,2.001-1.967c1.104,0,2,0.88,2,1.967C8.667,12.432,7.771,13.312,6.667,13.312L6.667,13.312z M7.333,10.687H6v1.313h1.333V10.687L7.333,10.687z"></path></svg>
            Get a Free Quote
        </router-link >-->
    </div>
</template>

<script>
export default {
    name: "siteHeaderBottom",
    data() {
        return {
            searchIcon: require('../../assets/icons/search.svg'),
            allDepartments: [],
            allHospitals: [],
            localization: 'en',
            currentRoute: '',
            navType: 'desktop',
            mobileMenuOpen: false,
            toggledIndeces: [],
            myStyle: {
                'overflow': 'hidden',
                'max-height': '0',
                'transition': 'max-height 0.5s ease-out'
            },
            listItems: [
                {
                    text: 'Home',
                    path: '/'
                },
                {
                    text: 'Why KairHealth',
                    path: '/Why'
                },
                {
                    text: 'How it Works',
                    path: '/how'
                },
                {
                    text: 'Treatments',
                    path: '/treatments',
                    subList: [

                    ]
                },
                {
                    text: 'Hospitals',
                    path: '/hospitals',
                    subList: [
 
                    ]
                },
                {
                    text: 'Contact',
                    path: '/contact'
                }
            ]
        }
    },
    created() {
        this.loadDepartments()
        this.loadHospitals()

        this.currentRoute = this.$route.fullPath

        window.addEventListener('resize', this.handleRezise)

        if (window.innerWidth < 992) 
            this.navType = 'mobile'
        else
            this.navType = 'desktop'

    },
    mounted() {
        //Add Click Handler
        var elem = document.querySelector('.menu-bar');

        document.body.addEventListener('click', (event) => {
            if (!elem.contains(event.target)) {
                this.mobileMenuOpen = true;
                this.openMobileMenu();
            }
        });
    },
    methods: {
        loadDepartments: function() {
           this.$axios
                .get(`${this.$apiPath}/api/department/list`)
                .then(response => {
                    if (response.status == 200) {
                        this.allDepartments = response.data

                        this.allDepartments.slice(0,5).forEach(department => {
                            this.listItems[1].subList.push(
                                {
                                    text: department[this.localization].departmentName,
                                    path: '/treatments/' + department.departmentId
                                }
                            )
                        })

                        this.listItems[1].subList.push({ text: 'More...', path: '/treatments'})
                    }
                }) 
        },
        loadHospitals: function() {
            this.$axios
                .get(`${this.$apiPath}/api/hospital/list`)
                .then(response => {
                    if (response.status == 200) {
                        this.allHospitals = response.data

                        this.allHospitals.slice(0,5).forEach(hospital => {
                            this.listItems[2].subList.push(
                                {
                                    text: hospital[this.localization].hospitalName,
                                    path: '/hospitals/' + hospital.hospitalUniqueName
                                }
                            )
                        })

                        this.listItems[2].subList.push({ text: 'More...', path: '/hospitals'})
                    }
                })
        },
        openMobileMenu() {
            if (this.mobileMenuOpen) {
                this.mobileMenuOpen = false

                this.myStyle = {
                    'overflow': 'hidden',
                    'max-height': '0',
                    'transition': 'max-height 0.5s ease-out'
                }
            } else {
                this.mobileMenuOpen = true

                this.myStyle = {
                    'overflow': 'hidden',
                    'max-height': `${500 + (this.toggledIndeces.length * 500)}px`,
                    'transition': 'max-height 0.5s ease-out'
                }

            }

        },

        openSubMobileMenu(index) {
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
                    'overflow': 'hidden',
                    'max-height': `500px`,
                    'transition': 'max-height 0.5s ease-in'
                }
            else
                return {
                    'overflow': 'hidden',
                    'max-height': '0',
                    'transition': 'max-height 0.5s ease-out'
                }

        },
        toggleIndeces: function(index) {
            var loc = this.toggledIndeces.indexOf(index)


            if(loc != -1)
                this.toggledIndeces.splice(loc,1)
            else {
                this.toggledIndeces.push(index)

                this.myStyle = {
                    'overflow': 'hidden',
                    'max-height': `${500 + (this.toggledIndeces.length * 500)}px`,
                    'transition': 'max-height 0.5s ease-out'
                }

            }
        },
        handleRezise() {
            var width = window.innerWidth

            if (width < 992) 
                this.navType = 'mobile'
            else
                this.navType = 'desktop'

        },
        checkForExtraStyle(item) {
            if (!('subList' in item))
                return { 
                    'flex': '0 0 calc(100% - (2*1.2rem + 2px))',
                    'max-width': 'calc(100% - (2*1.2rem + 2px))'
                }
        },
        checkForToggle(index) {
            var loc = this.toggledIndeces.indexOf(index)

            if(loc != -1)
                return '-'
            else
                return '+'
        }
    },
    watch:{
        '$route': function(){
            this.currentRoute = this.$route.fullPath

            this.mobileMenuOpen = true
            this.openMobileMenu()
        }
    } 
}
</script>

<style lang="scss" scoped>

    .search-form {
        display: flex;

        input {
            box-sizing: border-box;
            outline: none;
            box-shadow: #a9a7a74a 1px 1px 20px;
            padding: 1rem 1.7rem;
            overflow: visible;
            border: 1px solid transparent;
            border-color: #ecf1f2;
            background-color: #fff;
            width: 100%;
            height: auto;
            color: #7d98ad;

            font-family: inherit;
            font-size: 0.9rem;
            font-weight: 400;
            transition: all 0.15s ease-in-out;

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
                color: #7ace4c;
                text-decoration: none;
                padding: 1rem 2.5rem;
                transition: all 0.15s ease-in-out;
                cursor: pointer;

                background-repeat: no-repeat;
                background-position: center;
            }

            a:hover {
                background-color: #60b532;
                color: #60b532;
            }
        }
    }

    .menu-bar {
        float: none;
        padding: 0;
        min-height: 46px;
        z-index: 999;
        border-bottom: none !important;
        position: relative;

        .menu-reveal {
            width: 22px;
            height: 22px;
            padding: 13px 13px 11px 13px;
            position: absolute;
            cursor: pointer;
            text-decoration: none;
            font-size: 16px;
            text-indent: -9999em;
            line-height: 22px;
            font-size: 1px;
            display: block;
            color: #fff;
            background: #7ace4c;

            span {
                display: block;
                width: 22px;
                height: 3px;
                margin-top: 3px;
                background: #fff;
            }
        }

        .menu-reveal:hover {
            span {
                opacity: 0.9;
            }
        }

        .mobile-menu {
            float: none;
            position: absolute;
            width: 290px;
            margin-top: 0;
            overflow-x: hidden;
            font-size: 1.4rem;
            top: 100%;
            background: #7ace4c;

            ul {
                display: block;
                margin: 0;
                padding: 0;
                > li {
                    display: flex;
                    flex-wrap: wrap;
                    position: relative;
                    list-style-type: none;
                    color: #fff;
                    text-align: left;
                    font-size: 0.9rem;
                    font-weight: normal;
                    text-transform: uppercase;
                    background: #7ace4c;

                    a {          
                        flex: 0 0 calc(80% - (2*1.2rem + 2px));
                        max-width: calc(80% - (2*1.2rem + 2px));          
                        border-top: 1px solid rgba(255, 255, 255, 0.1);
                        color: #fff;
                        display: block;
                        padding: 1rem 1.2rem;
                        cursor: pointer;
                        text-decoration: none;
                        height: 1.5rem;
                        float: left;
                    }

                    a:hover {
                        background: rgba(255, 255, 255, 0.21);
                    }


                    .menu-expand {
                        flex: 0 0 calc(20% - (2*1.2rem + 2px));
                        max-width: calc(20% - (2*1.2rem + 2px));
                        float: right;
                        font-size: 20px;
                        font-weight: 700;
                        text-align: center;
                        border: 1px solid rgba(255, 255, 255, 0.1);
                    }
                }

                .sub-menu {
                    flex: 0 0 100%;
                    max-width: 100%;
                    display: block;
                    padding: 0;
                    margin: 0;
                    width: 100%;
                    list-style-type: none;
                    box-sizing: content-box;
                    float: none;
                    top: 100%;
                    left: 0;
                    width: 290px;
                    margin-top: 0;
                    overflow-x: hidden;
                    font-size: 1.4rem;

                    li {
                        display: flex;
                        position: relative;
                        float: left;
                        width: 100%;

                        a {
                            width: 100%;
                            padding: 1rem 3rem;
                        }
                    }
                }
            }
        }
    }

    .nav-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        margin-right: auto;
        margin-left: auto;
        padding-right: 15px;
        padding-left: 15px;

        max-width: 1170px;

        @media only screen and (max-width: 992px) {
            background:#7ace4c;
        }


        .desktop-menu {
            flex: 0 0 calc(70% - 30px);
            max-width: calc(70% - 30px);

            overflow: hidden;

            @media only screen and (max-width: 992px) {
                display: none;
            }

            @media only screen and (max-width: 768px) {
                background:#7ace4c;
                color: #fff;

                flex: 0 0 calc(100% - 30px);
                max-width: calc(100% - 30px);
            }

            ul {
                display: flex;
                flex-wrap: wrap;
                margin: 0;
                padding: 0;
                li {
                    transition: color 0s linear, background 0.2s ease-in-out;
                    list-style-type: none;


                    a {
                        display: block;
                        padding: 1rem;

                        cursor: pointer;

                        font-weight: normal;
                        font-size: 1.2rem;
                        color: #7d98ad;

                        @media only screen and (max-width: 992px) {
                            color: #fff;
                        }
                        text-decoration: none;
                        
                    }


                    .active {
                        color: #2f3d4a;
                    }


                    /* Sub Menu */
                    .sub-menu {
                        min-width: 22rem;
                        padding: 0;
                        display: block;
                        position: absolute;
                        transform: translateY(-1rem);
                        transition: all 0.3s ease-in-out, z-index 0.2s ease-in-out 0.1s;
                        opacity: 0;
                        visibility: hidden;
                        z-index: 1000;

                        li {
                            background: #7ace4c;

                            a {
                                color: #fff;
                                text-align: left;
                                transition: all 0.3s ease-in-out;
                            }

                            a:hover {
                                background: #60b532;

                            }

                        }


                    }


                }

                > li:hover {
                    background-color: #7ace4c;
                    color: #fff;
                    font-weight: 100;

                    a {
                        color: #fff;
                    }

                    /* Sub Menu */

                    .sub-menu {
                        transform: translateY(0);
                        opacity: 100;
                        visibility: visible;
                    }
                }
            }
        }


        #free_quote {
            flex: 0 0 calc(30% - (30px + 7rem));
            max-width: calc(30% - (30px + 7rem));

            @media only screen and (max-width: 992px){
                flex: none;
                max-width: none;
            }

            position: relative;
            color: #fff;
            display: inline-block;
            background:#7ace4c;

            text-decoration: none;
            
            padding: 1rem 2rem 1rem 5rem;

            transition: all 0.13s linear;

            cursor: pointer;

            svg {
                fill: #fff;
                position: absolute;
                top: 12.35px;
                left: 16px;
            }
        }

        #free_quote:hover {
            background: #60b532;
        }
    }
</style>