<template>
  <div>
    <button @click="add">+</button>
    <span>{{this.$store.state.firstStore.count}}</span>
    <button @click="desc">-</button> 
  </div>
</template>

<script>
export default {
  name:'App',
  methods:{
    add () {
      this.$store.commit('firstStore/add');
    },
    desc () {
      this.$store.commit('firstStore/desc');
    }
  }
}
</script>
