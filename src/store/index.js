import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    phone: ''
  },
  mutations: {
    addPhone (state, data) {
      state.phone = data;
    }
  },
  actions: {
    savePhone ({ commit }, data) {
      commit('addPhone', data);
    }
  }
});

export default store;
