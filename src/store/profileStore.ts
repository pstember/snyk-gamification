import { Issue, License } from '../utils/types';

export default {
  state: {
    trophies: 0,
  },
  mutations: {
    trophies(state, payload) {
      state.trophies = payload;
    },
  },
  getters: {
    trophies: state => state.trophies,
  },
  modules: {
  }
};
