export default {
  DESTROYDATA(state, payload) {
    state.destroyData = payload.destroyData;
    console.log(state.destroyData);
  },
};
