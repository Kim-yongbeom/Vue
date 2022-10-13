export default {
  USER_EMAIL(state, payload) {
    state.name = payload.email;
  },
  USER_LIST(state, payload) {
    state.user = payload.list;
  },
  LOGOUT(state, payload) {
    state.name = payload.name;
    state.user = payload.user;
  },
};
