import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter);

const routes = [
  {
    path:'/first',
    component: () =>  import('../First.vue')
  },
  {
    path:'/second',
    component: () =>  import('../Second.vue'),
  },
  {
    path:'*',
    redirect:'second'
  }
]

export default new VueRouter({
  routes
})
