import Vue from 'vue'
import Router from 'vue-router'
import login from '../pages/login/Login'
import home from '../pages/home/Home'
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
      component: home
    },
  ]
})
