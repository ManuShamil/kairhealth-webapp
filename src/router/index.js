import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Contact from '@/pages/Contact'
import Treatments from '@/pages/Treatments'
import TreatmentList from '@/pages/TreatmentList'
import TreatmentInfo from '@/pages/TreatmentInfo'
import Hospitals from '@/pages/Hospitals'
import HospitalInfo from '@/pages/HospitalInfo'
import Why from '@/pages/Why'
import How from '@/pages/How'

Vue.use(Router)

export default new Router({
  scrollBehavior () {
    document.getElementById('app').scrollIntoView();
  },
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/why',
      name: 'Why',
      component: Why
    },
    {
      path: '/how',
      name: 'How',
      component: How
    },
    {
      path: '/treatments',
      name: 'Treatments',
      component: Treatments,
    },
    {
      name: 'TreatmentList',
      path: '/treatments/:departmentId',
      component: TreatmentList
    },
    {
      name: 'TreatmentInfo',
      path: '/treatments/:departmentId/:treatmentId',
      component: TreatmentInfo
    },
    {
      path: '/hospitals',
      name: 'Hospitals',
      component: Hospitals
    },
    {
      path: '/hospitals/:hospitalUniqueName',
      name: 'HospitalInfo',
      component: HospitalInfo
    },
    
  ]
})
