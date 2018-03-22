import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'
Vue.use(VueRouter)
import './assert/style/test.css'
import './assert/style/test.styl'
let root = document.getElementById("app")

document.body.appendChild(root)

new Vue({
  router: router(),
  render: (h) => h(App)
}).$mount(root)
