import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

// import SecureLS from "secure-ls";

// let ls = new SecureLS();

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
    // {
    //   storage: {
    //     getItem: (key) => ls.get(key),
    //     setItem: (key, value) => ls.set(key, value),
    //     removeItem: (key) => ls.remove(key),
    //   },
    // }
  ],
  // data
  state: {
    user: [],
    name: "",
    destroyData: "",
  },
  // data를 바꿀때 사용
  mutations: {
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
    DESTROYDATA(state, payload) {
      state.destroyData = payload.destroyData;
      console.log(state.destroyData);
    },
  },
  // method
  actions: {},
  // computed
  getters: {},
});
