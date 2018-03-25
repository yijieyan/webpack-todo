import Vuex from 'vuex'
import user from './modules/user'

export default () => {
  return new Vuex.Store({
    modules: {
      user
    }
  })
}
