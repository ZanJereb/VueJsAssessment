const mutations = {
  setUserData(state, userData) {
    state.userData = userData;
  },
};

const actions = {
  createUser({ commit }, userData) {
    commit('setUserData', userData);
  },
};

const state = {
  userData: {
    username: '',
    password: '',
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
  },
};

export default {
  state,
  mutations,
  actions,
};
