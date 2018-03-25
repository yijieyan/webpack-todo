export default {
  namespaced: true,
  state: {
    count: 1,
    phone: 'xiaomi6'
  },
  mutations: {
    updateCount(state, count) {
      state.count = count
    },
    updatePhone(state, phone) {
      state.phone = phone
    }
  },
  actions: {
    updatePhoneAsync (ctx, phone) {
      ctx.commit('updatePhone', phone)
    }
  },
  getters: {
    myPhone (state) {
      return `my phone is : ${state.phone}`
    }
  }
}
