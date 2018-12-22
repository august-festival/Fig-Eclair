// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTimes)
library.add(faPlus)
Vue.component('font-awesome-icon', FontAwesomeIcon)
// 기본 HTTP 설정
Vue.prototype.$http = axios
// 로그인 token 정보 미리 셋팅
store.commit({
  type: 'login',
  token: '6e1a2aa8-8893-4791-91ad-565fe39e548d'
})

Vue.config.productionTip = false

// 전역 이벤트 버스
export const eventBus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
