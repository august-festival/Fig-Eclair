import Vue from 'vue'
import Router from 'vue-router'
import {Login, Signup }from '@/page/Login/index'
import Error from '@/page/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,      
    },    
    {
      path: '/signup',
      name: 'signup',
      component: Signup,      
    },    

    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ]
})
