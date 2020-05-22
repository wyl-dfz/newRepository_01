import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuIdx: 1,
    token: 'sa'
  },
  mutations: {
    changeMenuIdx(state, menu) {
      state.menuIdx = menu.id;
    }
  }
})
