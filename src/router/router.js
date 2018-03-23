// import Login from '../components/login/login.vue'
// import App from '../components/app/app.vue'

const Login = () => import('../components/login/login.vue')

const App = () => import('../components/app/app.vue')


// const Login = (resolve) => {
//   require(['../components/login/login.vue'], resolve)
// }
//
// const App = (resolve) => {
//   require(['../components/app/app.vue'], resolve)
// }


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
