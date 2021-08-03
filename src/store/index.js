import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInformation: null,
    loggingIn: false,
  },
  mutations: {
    login(state, payload) {
      state.userInformation = payload;
    },
    attemptLogin(state) {
      state.loggingIn = true;
    },
    finishAttemptLogin(state) {
      state.loggingIn = false;
    },
    session(state) {
      state.session = true;
    },
    logOut(state) {
      state.session = false;
      state.userInformation = null;
    },
  },
});
