import VueRouter from "vue-router"
import routes from "./router"

export default() => {
  const router = new VueRouter({
    routes,
    // mode: 'history',
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return {x: 0, y: 0}
      }
    },
    fallback: true
  })

  router.beforeEach((to, from, next) => {
    // console.log(to, from )
    if (to.fullPath === '/') {
      next('/login')
    } else {
      next()
    }

  })

  return router
}
