import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const ADD_HISTORY = 'addHistory';
const state = {
  history: []
};
const mutations = {
  [ADD_HISTORY](state, operation) {
    state.history.push(operation)
  }
};
const actions = {
  addOperationAction({ commit }, operation) {
    commit(ADD_HISTORY, operation)
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
})
