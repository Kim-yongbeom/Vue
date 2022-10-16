import destroy_state from "./state.js";
import destroy_mutation from "./mutations.js";
import destroy_actions from "./actions.js";

const destroy = {
  state: () => destroy_state,
  mutations: destroy_mutation,
  actions: destroy_actions
};

export default destroy;
