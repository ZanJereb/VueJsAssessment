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
};

const actions = {
  createUser({ commit }, userData) {
    commit('CHANGE_STATUS', 'Submited');
    commit('SET_USER_DATA', userData);
  },
  createError({ commit }, error) {
    commit('CHANGE_STATUS', 'Error');
    commit('SET_ERROR_MSG', error);
  },
};

const state = {
  registrationStatus: 'Not Submitted',
  userRegistrationData: {
    name: '',
    email: '',
    phoneNumber: '',
  },
  errorMessage: 'Error: ',
};

export default {
  state,
  mutations,
  actions,
};
