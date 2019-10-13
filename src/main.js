import Vue from 'vue'
// import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/global.css"
Vue.config.productionTip = false
const vuetifyOptions = { }
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify, {
  iconfont: 'mdi',
})

new Vue({
  router,
  store,
  vuetify: new Vuetify(vuetifyOptions),
  render: h => h(App)
}).$mount('#app')
