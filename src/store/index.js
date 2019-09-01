import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default () => new Vuex.Store({
  state: {
    objective: '',
  },
  getters: {
    getObjective: ({ objective }) => objective,
  },
  mutations: {
    SAVE_OBJECTIVE(state, value) {
      Vue.set(state, 'objective', value);
    },
  },
  actions: {
    SET_OBJECTIVE({ commit }, value) {
      commit('SAVE_OBJECTIVE', value);
    },
  },

  strict: process.env.DEV,
});
