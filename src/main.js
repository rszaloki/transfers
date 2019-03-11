import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import modules from './store/index.js'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuex)
Vue.use(Vuetify)
Vue.config.productionTip = false

const store = new Vuex.Store({ modules })

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
