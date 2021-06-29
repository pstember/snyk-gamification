
export default {
  state: {
    profile:{
      org: {
        slug: 'dummy',
        url: 'https://google.com',
      },
      level: 'Noob',
      score: 0,
      minScore: 0,
      maxScore: 5,
      nextLevel:5,
    },
    trophies: {
      platform: false,
      fixer: false,
      notification: false,
      secure: false,
      friendly: false,
    },
  },
  mutations: {
    trophy(state, payload) {
      state.trophies[payload.key] = payload.value;
    },
    profile(state, payload) {
      state.profile.org.slug = payload.org.slug;
      state.profile.org.url = payload.org.url;
    },
    addScore(state, payload) {
      state.profile.score += payload;
      
      if(state.profile.score < 5) {
        state.profile.level = 'Beginner';

      } else if(state.profile.score < 10) {
        state.profile.level = 'Intermediate';
      } else if(state.profile.score < 20) {
        state.profile.level = 'Pro';
      } else if(state.profile.score < 40) {
        state.profile.level = 'Expert';
      } else {
        state.profile.level = 'Snyker';
      }

    }
  },
  getters: {
    trophies: state => state.trophies,
    profile: state => state.profile,
  },
  modules: {
  }
};
