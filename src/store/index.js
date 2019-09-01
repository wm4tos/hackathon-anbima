import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

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

  plugins: [
    createPersistedState({
      key: '6744166e-caf8-407d-8ecb-4440b694053b-4e588e5d-f728-45ee-8299-54fe8d11c0ed',
    }),
  ],

  strict: process.env.DEV,
});
