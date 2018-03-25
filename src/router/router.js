// import Login from '../components/login/login.vue'
// import App from '../components/app/app.vue'

const Login = () => import('../components/login/login.vue')

const App = () => import('../components/app/app.vue')

let routes = [
  {
    component: Login,
    name: 'login',
    path: '/login'
  },
  {
    component: App,
    name: 'app',
    path: '/app/:id',
    meta: {
      title: 'app'
    }
  }
]


export default routes
