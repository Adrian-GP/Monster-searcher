import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import _ from 'lodash'
import Pokemon from './api/pokemon.js'
import Digimon from './api/digimon.js'

Vue.prototype.$API = {
  pokemon: Pokemon(Vue),
  digimon: Digimon(Vue)
}
Vue.prototype.$http = axios
Vue.prototype.$_ = _
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
