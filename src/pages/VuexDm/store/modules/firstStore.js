export default {
  namespaced:true,
  state:{
    count:1,
    list:[]
  },
  mutations:{
    add (state) {
      state.count++;
    },
    desc (state) {
      state.count--;
    },
    getList (state,list) {
      state.list = list['list'];
    }
  },
  actions:{
    getList ({commit}) {
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          let list = [];
          for(let i = 0; i < 10; i++){
            list.push({
              name:'app-'+Math.random(),
              id:i
            })
          }
          commit({
            type:'getList',
            list
          })
          resolve()
        })
      })
    },
  }
}
