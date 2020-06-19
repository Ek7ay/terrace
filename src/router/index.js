import Vue from 'vue'
import Router from 'vue-router'
import login from '../pages/login/Login'
import home from '../pages/home/Home'
import demo1 from "../pages/demo1/demo1"
import demo2 from "../pages/demo2/demo2"
import demo3 from "../pages/demo3/demo3"
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: "/",
          component: demo1
        },
        {
          path: "demo2",
          component: demo2
        },
        {
          path: "demo3",
          component: demo3
        }
      ]
    },
  ]
})
