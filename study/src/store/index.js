import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let info = [];

for(let i=0; i<localStorage.length; i++){
    if(localStorage.key(i)=='token'){
        continue
    }
    info.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
}

export default new Vuex.Store({
    // data
    state: {
        user: info,
        name: ''
    },
    // data를 바꿀때 사용
    mutations: {
        USER_EMAIL(state, payload){
            state.name = payload.email
        }
    },
    // method
    actions: {

    },
    // computed
    getters: {

    }
})