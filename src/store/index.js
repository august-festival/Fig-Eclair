import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 전역 스토리지
export default new Vuex.Store({
    state: {
        // 로그인 토큰
        token: ''
    },
    mutations: {
        // 로그인 토큰 셋팅
        login(state, data) {
            state.token = data.token
            setHttp(data.token)
        },
        // 로그인 토큰 초기화
        logout(state) {
            state.token = ''
            setHttp('')
        }
    }
})

function setHttp(token) {
    Vue.prototype.$http.defaults.headers.token = token
}