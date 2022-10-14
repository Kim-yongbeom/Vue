import user_state from "./state.js";
import user_mutation from "./mutations.js";

const user = {
  state: () => user_state,
  mutations: user_mutation,
};

export default user;
