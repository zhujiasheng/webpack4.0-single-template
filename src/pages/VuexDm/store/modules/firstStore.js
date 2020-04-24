export default {
  namespaced:true,
  state:{
    count:1
  },
  mutations:{
    add (state) {
      state.count++
    },
    desc (state) {
      state.count--
    }
  }
}
