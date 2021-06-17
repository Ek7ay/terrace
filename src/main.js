// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import './plugins/element'
import store from "./store";

import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts;

import axios from 'axios'
Vue.prototype.$axios = axios

import './assets/reset.css'
import './assets/border.css'

fastClick.attach(document.body);
Vue.config.productionTip = false;

const bus = new Vue()
Vue.prototype.$EventBus = bus;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
