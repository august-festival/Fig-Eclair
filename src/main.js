// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import jquery from 'jquery'
import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.prototype.$http = axios
Vue.prototype.$ = jquery
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

/**
 * 전역 로그
 * @param obj toString할 객체
 * @param option 옵션 'toString' -> 내부 출력
 */
window.JSLog = function (obj, option) {
  if (option === 'toString') {
    let log = ''
    let objs = []
    let i = 0
    for (let prop in obj) {
      if (i !== 0) {
        log += 'JSLog: '
      }
      i++
      log += prop + ' : ' + obj[prop] + '\n'
      if (typeof (obj[prop]) === 'object') {
        objs.push({
          name: prop,
          o: obj[prop]
        })
      }
    }
    JSLog(log)
    objs.forEach(function (v) {
      JSLog('-> ' + v.name)
      JSLog('to', v.o)
    })
  } else {
    let args = Array.prototype.slice.call(arguments)
    if (window.console) console.log('JSLog: ' + args.join(' | '))
  }
}
