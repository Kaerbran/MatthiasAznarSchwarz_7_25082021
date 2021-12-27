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
    Posts : [{
      Post_ID : '00001',
      Person_ID : 'Kaerbran',
      Post_location : 'Paris, 14ème arrondissement',
      Post_picture : 'black-fox-silhouette.jpg',
      Post_comment : 'ipsum dolor sit amet consectetur adipisicing elit. Ipsam atque recusandae amet eligendi! Suscipit tempora laudantium quidem, laborum totam dolores, cumque ex blanditiis fuga voluptates eaque sapiente necessitatibus, quod repellendus.',
      Post_Date_Published : 'Apr 12 2018'
    }, {
      Post_ID : '00002',
      Person_ID : 'Kaerbran',
      Post_location : 'Paris, 15ème arrondissement',
      Post_picture : 'black-fox-silhouette.jpg',
      Post_comment : 'ipsum dolor sit amet consectetur adipisicing elit. Ipsam atque recusandae amet eligendi! Suscipit tempora laudantium quidem, laborum totam dolores, cumque ex blanditiis fuga voluptates eaque sapiente necessitatibus, quod repellendus.',
      Post_Date_Published : 'Apr 15 2018'
    }]
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
