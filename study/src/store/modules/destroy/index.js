import destroy_state from "./state.js";
import destroy_mutation from "./mutations.js";

const destroy = {
  state: () => destroy_state,
  mutations: destroy_mutation,
};

export default destroy;
