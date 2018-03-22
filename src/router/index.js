import VueRouter from 'vue-router'
import routes from './router'

export default() => {
  return new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return {x: 0, y: 0}
      }
    },
    fallback: true
  })
}
