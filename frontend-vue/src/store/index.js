import { createStore } from 'vuex'

export default createStore({
  state: {
    UserName : "",
    UserLogin : "",
    UserId : "",
    UserToken : "",
    UserEmail : "",
    userPicture : "",
    UserPublications : 35,
    UserFriends : 8,
  },
  mutations: {
    userAuthentification (state, payload) {
      state.UserLogin = payload.userLogin;
      state.UserEmail = payload.userEmail;
      state.UserId = payload.userId;
      state.userPicture = payload.userPicture;
      state.UserName = payload.userName;

      if (payload.token) {
        state.UserToken = payload.token;
        console.log("new user authentificated : state has changed");
      } else {
        console.log("user modified : state has changed");
      }
    }
  },
  actions: {
  },
  modules: {
  }
})