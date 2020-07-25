import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        phone: '',
        userName: '',
        toDoList: []
    },
    mutations: {
        addPhone(state, data) {
            state.phone = data;
        },
        addUser(state, data) {
            state.userName = data;
        },
        updateList(state, data) {
            state.toDoList = data
        }
    },
    actions: {
        savePhone({commit}, data) {
            commit('addPhone', data);
        },
        saveUser({commit}, data) {
            commit('addUser', data);
        },
        saveList({commit}, data) {
            commit("updateList", data)
        }
    }
});

export default store;
