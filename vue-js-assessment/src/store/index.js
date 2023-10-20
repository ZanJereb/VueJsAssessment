import { createStore } from 'vuex';

export default createStore({
  state: {
    userData: {
      username: '',
      password: '',
      name: '',
      surname: '',
      email: '',
      phoneNumber: '',
    },
  },
  getters: {
  },
  mutations: {
    createUser(state, userData) {
      state.userData = userData;
    },
  },
  actions: {
    createUser({ commit }, userData) {
      commit('createUser', userData);
    },
  },
});
