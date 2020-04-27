<template>
  <div>
    <!-- ex:1 -->
    <h2>vuex ex:1</h2>
    <button @click="add">+</button>
    <span>{{this.$store.state.firstStore.count}}</span>
    <button @click="desc">-</button> 
    <!-- ex:2 -->
    <hr>
    <h2>vuex ex:2</h2>
    <button @click="getRandom">!!刷新一下 获取新的数据~~</button>
    <list-item v-model="value"/>
  </div>
</template>

<script>
import listItem from './ListItem';

export default {
  name:'App',
  data () {
    return {
      value:[]
    }
  },
  components:{
    listItem
  },
  methods:{
    async getRandom () {
      await this.$store.dispatch('firstStore/getList');
      await (this.value = this.$store.state.firstStore.list);
    },
    add () {
      this.$store.commit('firstStore/add');
    },
    desc () {
      this.$store.commit('firstStore/desc');
    }
  },
  mounted () {
    this.value = this.$store.state.firstStore.list;
  }
}
</script>
