import VueRouter from 'vue-router';
import Vue from 'vue';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'
Vue.use(VueRouter);
NProgress.configure({ showSpinner: false }) // NProgress Configuration

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

const Router = new VueRouter({
  routes
})

Router.beforeEach((to,from,next) => {
  NProgress.start();
  next();
})

Router.afterEach(() => {
  NProgress.done();
})

export default Router;
