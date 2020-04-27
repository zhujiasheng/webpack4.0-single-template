<template>
  <div id="app">
    <router-link :to="{path:'/first'}">一级路由dm</router-link>
    <router-link :to="{path:'/second'}">二级路由dm</router-link>
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
