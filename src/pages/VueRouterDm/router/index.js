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
    redirect: '/second/a',
    component: () => import("../Second.vue"),
    children:[{
      path:'a',
      component: () => import("../SecondE1.vue")
    },
    {
      path:'b',
      component: () => import("../SecondE2.vue")
    }]
  },
  {
    path:'*',
    redirect:'second'
  }
]

export default new VueRouter({
  routes
})
