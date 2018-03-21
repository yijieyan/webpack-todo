import Vue from 'vue'
import App from './app.vue'

import './assert/style/test.css'
import './assert/style/test.styl'
let root = document.getElementById("app")

document.body.appendChild(root)

new Vue({
  render: (h) => h(App)
}).$mount(root)
