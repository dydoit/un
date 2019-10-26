<template>
  <div>
    <Nav></Nav>
    <Bread></Bread>
    <router-view></router-view>
  </div>
</template>

<script>
  import Nav from '@/components/layout/nav.vue'
  import Bread from '@/components/layout/breadcrumb.vue'
  export default {
    data() {
      return {

      }
    },
    components: {
      Nav,
      Bread
    }
  }
</script>

<style lang="stylus" scoped>

</style>
