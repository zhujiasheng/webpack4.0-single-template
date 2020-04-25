<template>
  <ul>
    <li v-for="it in value" :key="it.id">
      id:{{it.id}}---name:{{it.name}}
    </li>
  </ul>
</template>

<script>
export default {
  name:'List',
  props:{
    value:{
      type:Array,
      default () {
        return []
      }
    }
  }
}
</script>
