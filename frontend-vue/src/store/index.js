import { createStore } from 'vuex'

export default createStore({
  state: {
    UserName : "Matthias Aznar-Schwarz",
    UserLogin : "Maznar",
    UserId : "d4d2c7d4-e710-4842-9622-915ed21bdd71",
    UserToken : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkNGQyYzdkNC1lNzEwLTQ4NDItOTYyMi05MTVlZDIxYmRkNzEiLCJpYXQiOjE2MzQ5MjI0NTUsImV4cCI6MTYzNTAwODg1NX0.WtrVH_ax1hK8njgadEDBAQFtPhyWScR73AddTIRuzHY",
    UserEmail : "m.aznar.schwarz@gmail.com",
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
      state.UserToken = payload.token;

      console.log("new user authentificated : state has changed");
    }
  },
  actions: {
  },
  modules: {
  }
})
