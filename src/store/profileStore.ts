import { Issue, License } from '../utils/types';

export default {
  state: {
    profile:{
      org: {
        slug: 'dummy',
        url: 'https://google.com',
      }
    },
    trophies: 0,
  },
  mutations: {
    trophies(state, payload) {
      state.trophies = payload;
    },
    profile(state, payload) {
      state.profile.org.slug = payload.org.slug;
      state.profile.org.url = payload.org.url;
    }
  },
  getters: {
    trophies: state => state.trophies,
    profile: state => state.profile,
  },
  modules: {
  }
};
