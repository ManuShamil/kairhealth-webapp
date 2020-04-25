<template>
    <div>
        <div class="result" v-if="submitted">
            <div v-bind:class="result.status">
                <img src="../assets/icons/tick.png">
                <h2>{{result[result.status]}}</h2>
                <div class="button-wrapper">
                    <router-link v-on:click="submitted = false" to="/">Go to Home</router-link>
                </div>
            </div>
        </div>
        <div class="contact-form" v-if="!submitted">
            <div class="contact-form-container">
                <div class="page-content-wrapper">
                    <div class="entry-content">
                        <h2>Get in Touch</h2>
                        <p>
                            Would you like to know more about Us?
                            <br>
                            Use this form to send us a message, We will reply within 24 hours.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-1">
                        <form action="" id="contact_form">
                            <input type="text" name="name" id="name" placeholder="Full Name" v-bind:class="{'error': (status.fullName == 'error')}" v-model="User.fullName">
                            <input type="text" name="email" id="email" placeholder="Email Address" v-bind:class="{'error': (status.Email == 'error')}"  v-model="User.Email">
                            <input type="text" name="number" id="number" placeholder="Phone Number" v-bind:class="{'error': (status.Phone == 'error')}"  v-model="User.Phone">
                            <textarea cols="30" rows="5" type="text" name="message" id="message" v-bind:class="{'error': (status.Message == 'error')}"  placeholder="Message" v-model="User.Message"></textarea>
                        </form>

                        <div class="error-container">
                        <label class="error" for="name" v-if="status.fullName == 'error'">* Please provide your name</label> 
                        <label class="error" for="email"  v-if="status.Email == 'error'">* Please provide a valid email address</label> 
                        <label class="error" for="number"  v-if="status.Phone == 'error'">* Please provide your phone number </label> 
                        <label class="error" for="message"  v-if="status.Message == 'error'">* Please fill in your message</label> 
                        </div>
                        
                        <div class="button-wrapper">
                            <a v-on:click="sendDetails">Submit</a>
                        </div>

                    </div>
                    <div class="col-2">
                        <div class="contact-sidebar">
                            <h2><span>KairHealth</span></h2>
                            <address>1<sup>st</sup> floor Machingal Tower, Kolappuram Kerala 676305</address>
                            <a href="tel:+914942468004"><strong>Phone:</strong> +91-494-246-8004</a>
                            <a href="mailto:contact@kairhealth.in"><strong>Email:</strong> contact@kairhealth.in</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactForm',
    data() {
        return {
            User: {
                fullName: "",
                Email: "",
                Phone: "",
                Message: ""
            },
            status: {
                fullName: "",
                Email: "",
                Phone: "",
                Message: ""
            },
            submitEnable: true,
            submitted: false,
            result: {
                status: 'fail',
                success: "Your Message has been sent succesfully.",
                fail: "Couldn't send your message."
            }

        }
    },
    methods: {
        sendDetails: function() {
            

            var send = true;

            for (var x in this.User) {
                if (this.User[x] == ""){
                    this.status[x] = 'error'
                    send = false;
                } else {
                    this.status[x] = 'good'
                }
            }

            if (send) {

                if (this.submitEnable) 
                    this.submitEnable = false
                else 
                    return

                this.$axios
                    .post(`${this.$apiPath}/api/contact`, { User: this.User})
                    .then(response => {
                        this.submitEnable = true;
                        if (response.status == 200) {
                            this.result.status = 'success'
                        } else {
                            this.result.status = 'fail'
                        }
                        
                        this.submitted = true
                    })
            }
        }
    }
}
</script>

<style lang="scss" scoped>

    .result {
        margin-top: 5rem;
        margin-bottom: 5rem;

        img {
            width: 0px;
            height: 0px;
            padding: 50px;
        }

        .success img {
            background: url('../assets/icons/tick.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }

        .fail img {
            background: url('../assets/icons/cross.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }

        h2 {
            font-weight: 300;
        }
    }

    .error-container {
        text-align: left;
        margin-top: 1rem;

        label {
            display: block;
            margin-bottom: 0.5rem;
        }

        .error {

            border-color: #DF1E2D;
            color: #DF1E2D;
        }
    }

    .contact-form {
        padding: 4rem 0;

        .contact-form-container {
            margin: auto;
            padding-right: 15px;
            padding-left: 15px;

            .page-content-wrapper {
                margin-bottom: 4rem;

                .entry-content {
                    h2 {
                        font-size: 1.8rem;
                        text-align: left;
                        margin-bottom: 2rem;
                        font-weight: 500;
                    }

                    p {
                        text-align: left;
                        font-size: 0.95rem;
                        color: #7d98ad;
                        word-spacing: 1px;
                        line-height: 1.8;
                    }
                }
            }

            .row {
                display: flex;
                @media (max-width: 768px) {
                    flex-wrap: wrap;
                }
                

                .col-1 {
                    padding-right: 15px;
                    padding-left: 15px;

                    flex: 0 0 50%;
                    max-width: 50%;

                    @media (max-width: 768px) {
                        flex: 0 0 100%;
                        max-width: 100%;
                    }

                    form {
                        .error {
                            border-color: #DF1E2D;
                            color: #DF1E2D;
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

                        textarea {
                            resize: vertical;

                            box-sizing: border-box;
                            outline: none;
                            margin-bottom: 2rem;
                            padding: 1.3rem 1.7rem;
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

                        textarea:focus {
                            color: #7d98ad;
                            border-color: #e0e0e0;
                        }
                    }
                }

                .col-2 {
                    padding-right: 15px;
                    padding-left: 15px;

                    flex: 0 0 50%;
                    max-width: 50%;

                    @media (max-width: 768px) {
                        flex: 0 0 100%;
                        max-width: 100%;
                    }

                    .contact-sidebar {
                        text-align: left;
                        h2 {
                            margin-top: 0;
                            margin-bottom: 2rem;
                            font-weight: 500;
                            font-size: 1.5rem;
                        } 

                        address {
                            color: #7d98ad;
                            font-style: inherit;
                            font-size: 0.85rem;
                            margin-bottom: 1.8rem;
                        }

                        p,a { 
                            font-weight: 400;
                            line-height: 1.8;
                            color: #7d98ad;
                            font-size: 0.85rem;
                            text-decoration: none;
                            display: block;

                            strong {
                                font-weight: 600;
                                color: #2f3d4a;
                                font-size: 0.85rem;
                            }
                        }
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
            cursor: pointer;
        }

        a:hover {
            background-color: #60b532;
        }
    }
</style>