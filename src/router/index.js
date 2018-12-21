import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Login from '@/page/Login'
import Error from '@/page/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ]
})
