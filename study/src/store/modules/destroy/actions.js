export default {
    actions: {
        destroyAA ({state, commit, rootState}) {
            if(state === rootState) {
                commit('DESTROYDATA')
            }
        }
    }
}