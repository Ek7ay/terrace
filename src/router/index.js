import Vue from 'vue'
import Router from 'vue-router'
import login from '../pages/login/Login'
import home from '../pages/home/Home'
import talented from "../pages/talented"
import shoppingCart from "../pages/shoppingCart"
import talented2 from "../pages/talented2"
import scExercise from '../pages/shopping-cart-exercise'
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
          component: shoppingCart
        },
        {
          path: "talented",
          component: talented
        },
        {
          path: "talented2",
          component: talented2
        },
        {
          path: "scExercise",
          component: scExercise
        }
      ]
    }
  ]
})
