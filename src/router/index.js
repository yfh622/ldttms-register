import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'
import Back from '@/Back'
import Download from '@/Download'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Back',
    //   component: Back
    // },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // {
    //   path: '/Home',
    //   name: 'Home',
    //   component: Home
    // },
    {
      path: '/Download',
      name: 'Download',
      component: Download
    }
  ]
})
