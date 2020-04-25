// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import JwtDecode from 'vue-jwt-decode'
import VueMeta from 'vue-meta'
 
var localhost = "http://localhost:3000"
var remote = "https://api.kairhealth.in"

Vue.prototype.$axios = Axios
Vue.prototype.$jwtDec = JwtDecode
Vue.prototype.$apiPath = remote

Vue.config.productionTip = false

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
