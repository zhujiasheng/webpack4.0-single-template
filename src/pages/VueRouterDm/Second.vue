<template>
  <div class="com-first">
    <div>
      <router-link :to="{path:'/second/a'}">second-a</router-link>
      <router-link :to="{path:'/second/b'}">second-b</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mess:'second'
    }
  }
}
</script>
