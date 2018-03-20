import Vue from 'vue'
import App from './index.js'

import './assert/style/test.css'
import './assert/style/test.styl'
let root = document.createElement('div')

document.body.appendChild('root')

new Vue({
  render: (h) => h(App)
}).$mount(root)
