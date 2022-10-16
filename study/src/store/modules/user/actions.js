export default {
    actions: {
        userAA ({state, commit, rootState}) {
            if(state === rootState) {
                commit('USER_EMAIL')
            }
        }
    }
}