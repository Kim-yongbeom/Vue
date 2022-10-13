import user_state from "./user/state.js";
import user_mutations from "./user/mutations.js";
import destroy_state from "./destroy/state.js";
import destroy_mutations from "./destroy/mutations.js";

export default {
  state: { ...user_state, ...destroy_state },
  mutations: { ...user_mutations, ...destroy_mutations },
};
