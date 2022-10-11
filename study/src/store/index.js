import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

// import SecureLS from "secure-ls";

// let ls = new SecureLS();

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  // data
  state: {
    user: [],
    name: "",
  },
  // data를 바꿀때 사용
  mutations: {
    USER_EMAIL(state, payload) {
      state.name = payload.email;
    },
    USER_LIST(state, payload) {
      state.user = payload.list;
    },
  },
  // method
  actions: {},
  // computed
  getters: {},
});
