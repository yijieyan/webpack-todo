<template lang="html">
  <div class="">
   {{myPhone}}数量:{{count}}
  </div>
</template>

<script>

import {mapState, mapGetters} from 'vuex'
export default {
  name: 'app1',
  data() {
    return {

    }
  },
  mounted () {

  setTimeout(() => {
      let i = 0;
              this.$store.dispatch('user/updatePhoneAsync', 'iponeX')
      setInterval(() => {
        this.$store.commit('user/updateCount', ++i)
      },1000)
  },5000)
  },
  computed: {
    ...mapState({
      count: state => state.user.count
    }),
    myPhone () {
      return this.$store.getters["user/myPhone"]
    }
    // count () {
    //   return this.$store.state.user.count
    // }
  }
}
</script>

<style lang="scss" module>
</style>
