<template>
  <div id="app">
    <router-link :to="{path:'/first'}">first</router-link>
    <router-link :to="{path:'/second'}">second</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
  #app{
    background: #ab0;
  }
</style>
