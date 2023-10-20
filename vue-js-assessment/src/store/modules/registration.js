const mutations = {
  SET_USER_DATA(state, userData) {
    state.userRegistrationData = userData;
  },
  CHANGE_STATUS(state, status) {
    state.registrationStatus = status;
  },
  SET_ERROR_MSG(state, errorMessage) {
    state.errorMessage += errorMessage;
  },
  RESET_ERROR_MSG(state) {
    state.errorMessage = '';
  },
};

const actions = {
  createUser({ commit }, userData) {
    commit('CHANGE_STATUS', 'Submited');
    commit('SET_USER_DATA', userData);
    commit('RESET_ERROR_MSG');
  },
  createError({ commit }, error) {
    commit('RESET_ERROR_MSG');
    commit('CHANGE_STATUS', 'Error');
    commit('SET_ERROR_MSG', `Error: ${error}`);
  },
};

const state = {
  registrationStatus: 'Not Submitted',
  userRegistrationData: {
    name: '',
    email: '',
    phoneNumber: '',
  },
  errorMessage: '',
};

export default {
  state,
  mutations,
  actions,
};
