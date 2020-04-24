import Vue from 'vue';
import Vuex from 'vuex';
import firstStore from './modules/firstStore';
Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    firstStore
  }
})

export default store;
