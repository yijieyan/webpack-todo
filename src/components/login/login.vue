<template lang="html">
  <div :class="$style.container">
    this is a login page
  </div>
</template>

<script>
export default {
  name: 'login',
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件实例
    })
    // console.log('enter')
  },
  beforeRouteUpdate(to, from, next) {
    // console.log(update)
  },
  beforeRouteLeave(to, from, next) {
    // console.log('leave')
    next()
    // const answer = window.confirm('你要离开登录页面!')
    // if (answer) {
    //   next()
    // } else {
    //   next(false)
    // }
  },
  mounted() {
    // console.log('mounted')
  }
}
</script>

<style lang="scss" module>
  .container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
</style>
