import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'
Vue.use(VueRouter)

new Vue({
  router: router(),
  render: (h) => h(App)
}).$mount(app)
