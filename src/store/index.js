import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('user-token') || '',
    status: '',
    drawer: null,
    text: null,
    color: null,
    alert: false,


  },
  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
  },
  mutations: {
    SET_DRAWER(state, payload) {
      state.drawer = payload
    },
    auth_success(state, token) {
      state.token = token
    },
    auth_destroy(state) {
      state.token = null
    },
    show_alert(state, alert) {
      state.text = alert.text
      state.color = alert.color
      state.alert = true
    },
    set_alert(state, val) {
      state.alert = val
    }

  },
  actions: {
    logout(context) {
      if (context.getters.loggedIn) {
        return new Promise((resolve) => {
          localStorage.removeItem('dumm-ms')
          context.commit('auth_destroy')
          // delete this._vm.$axios.defaults.headers.common['Authorization']
          resolve({ color: 'success', text: 'Sesion terminada' })
        })
      }
    },
    login({ commit }, credentials) {
      // console.log("Hay header?")
      // console.log(credentials.token)

      console.log(credentials)
      return new Promise((resolve, reject) => {
        if (credentials.password == '123') {
          const token = 'some randomtoken'
          localStorage.setItem('dumm-ms', token)
          // this._vm.$axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', token)
          resolve({ color: 'success', text: 'Sesión iniciada exitosamente' })
        }

        // console.log(response);
        else {
          reject({ color: 'error', text: 'Existió un error' })
        }
      })




    },


  },
  modules: {
  }
})