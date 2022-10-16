import user_state from "./state.js";
import user_mutation from "./mutations.js";
import user_actions from "./actions.js";

const user = {
  state: () => user_state,
  mutations: user_mutation,
  actions: user_actions
};

export default user;
