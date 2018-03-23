<template lang="html">
  <div>
      <router-link to="/login">login</router-link>
      <router-link to="/app/123">app</router-link>
      <transition name="fade">
          <router-view></router-view>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {

    }
  }
}
</script>

<style lang="css">
</style>
