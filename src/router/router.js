import Login from '../components/login/login.vue'
import App from '../components/app/app.vue'


let routes = [
  {
    component:Login,
    name: 'login',
    path: '/login'
  },
  {
    component: App,
    name: 'app',
    path: '/app'
  }
]


export default routes
