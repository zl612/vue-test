import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);


const state = {
  count: 1,
};
const mutations = {
  add(state, n) {
    state.count+=n;
  },
  reduce(state) {
    state.count--;
  }
};
const actions = {
  addAction(context) {
    context.commit('add', 10);
  },
  reduceAction({ commit }) {
    setTimeout(()=> {commit('reduce')}, 3000);
    console.log('我比reduce提前执行');
  }
}
// 拦截器
const getters = {
  count: function(state){
    return state.count += 10.5;
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
})