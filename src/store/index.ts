import Vue from 'vue';
import Vuex from 'vuex';

import ProfileStore from './profileStore';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    // process (context, payload) {
    //   context.commit('aggregate', payload);
    //   context.commit('aggregatePie', payload);
    // }
  },
  getters: {
  },
  modules: {
    profile: ProfileStore,
  }
})
