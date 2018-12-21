import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Team from '@/page/Team'
import Setting from '@/page/Setting'
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
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      beforeEnter: (to, from, next) => {
        alert('로그아웃 되었습니다')
        next({ path: '/login' })
      }
    },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ]
})
