<template>
  <div id="app">
    <div class="com-first">{{message}}</div>
    <ComFirst/>
  </div>
</template>

<script>
import ComFirst from './ComFirst';
export default {
  name: 'App',
  data () {
    return {
      message:'hello2'
    }
  },
  components:{
    ComFirst
  }
}
</script>

<style lang="less" scoped>
  #app{
    background: #ab0;
    .box{
      border:1px solid #00f;
    }
  }
</style>
