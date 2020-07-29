import Vue from 'vue'
import Router from 'vue-router'
import login from '../pages/login/Login'
import home from '../pages/home/Home'
import talented from "../pages/talented"
import shoppingCart from "../pages/shoppingCart"
import talented2 from "../pages/talented2"
import scExercise from '../pages/shopping-cart-exercise'
import toDoList from '../pages/to-do-list'
import toDoVuex from '../pages/to-do-list-vuex'
import dataForm from '../pages/data-form'
import dataTable from '../pages/data-table'
import routing1 from '../pages/routing-parameters'
import routing2 from "../pages/routing-parameters/routing2";

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
                },
                {
                    path: "toDoList",
                    component: toDoList
                },
                {
                    path: "toDoVuex",
                    component: toDoVuex
                },
                {
                    path: "dataForm",
                    component: dataForm
                },
                {
                    path: "dataTable",
                    component: dataTable
                },
                {
                    path: "routing1",
                    name: "routing1",
                    component: routing1
                },
                {
                    path: "routing2",
                    component: routing2
                }
            ]
        }
    ]
})
