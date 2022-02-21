import { createStore } from 'vuex'

export default createStore({
  state: {
    UserName : "",
    UserAdmin : false,    //by default we want it to be false.
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
      state.UserAdmin = payload.userAdmin;
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