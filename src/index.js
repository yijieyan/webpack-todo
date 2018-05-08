import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import router from './router/index.js'
import store from './store'
import './assert/style/test.css'
import './assert/style/test.scss'
import './assert/images/bg.jpg'
Vue.use(VueRouter)
Vue.use(Vuex)

new Vue({
  router: router(),
  store: store(),
  render: (h) => h(App)
}).$mount(app)
