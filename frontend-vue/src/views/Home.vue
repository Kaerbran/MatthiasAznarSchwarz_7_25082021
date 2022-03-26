<template>
  <div class="home" :key="refreshKey">
      <div @click="clickShowModal" class="home__bttCreationPost">
        Creer un nouveau poste
      </div>
      <div v-show="modalBttPostCreation" class="home__formBackground"></div>
      <div v-show="modalBttPostCreation" class="home__formCreationPost">
        <h2>Créer une nouvelle publication</h2>
        <div>
          <label for="files">Sélectionnez une photo</label>
          <input ref="get_file" @change="onFileSelect" id="files" style="visibility:hidden" type="file">
        </div>
        <input ref="get_location" type="text" placeholder="Indiquez le lieu">
        <textarea ref="get_commentaire" name="" id="" cols="30" rows="10"></textarea>
        <button @click="createNewPost" > Finaliser la création du nouveau post. </button>
      </div>

      <div v-for="(post, index) in posts" :key="index">
        <ImageArticle 
          :articledata="post"
          class="home__component"/>
      </div>
  </div>
</template>

<script>
import ImageArticle from "../components/imageArticle"
import { mapState } from "vuex"

export default {
  name: 'Home',
  components: {
    ImageArticle,
  },
  data() {
    return {
      file:"",
      message:"",
      posts : [],
      modalBttPostCreation : false,
      refreshKey: 0,
    }
  },
	computed: {
		...mapState({
			UserName: "UserName",
      UserLogin: "UserLogin",
      UserToken: "UserToken",
      UserId: "UserId",
			UserEmail: "UserEmail",
			UserPublications: "UserPublications",
			UserFriends: "UserFriends"
    })
  },
  async created() {
    await this.getAllPosts()
  },
  methods:{
    onFileSelect () {
      //cette méthode s'activera des qu'un nouveau fichier est chargé
      const file = this.$refs.get_file.files[0];
      this.file = file;
    },
    getAllPosts () {

      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + this.UserToken);

      var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
      };

      fetch("http://localhost:3000/api/post/approved", requestOptions)
      .then(response => response.text())
      .then((result) => {
        this.posts = JSON.parse(result);
        console.log(this.posts);

        //refreshing a key on a components, triggers a re-render of it
        this.refreshKey += 1;

        Promise.resolve("Maj des posts réussie");
      })
      .catch((error) => {
        console.log('error', error)
        Promise.reject("Maj des posts n'a pas réussie");
      });
    },
    clickShowModal(){  
      this.modalBttPostCreation = !this.modalBttPostCreation;
    },
    createNewPost () {
      var comment = this.$refs.get_commentaire.value;
      var location = this.$refs.get_location.value;

      if ((comment !== "") && (location !== "") && (this.file !== "")) {
        
        let formData = new FormData();
        formData.append('comment', comment);
        formData.append('location', location);
        formData.append('image', this.file);
        formData.append('user_id', this.UserId);
        formData.append('user', this.UserLogin);
        
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + this.UserToken);

        var requestOptions = {
          method: 'POST',
          body: formData,
          headers: myHeaders,
          redirect: 'follow'
        };

        fetch("http://localhost:3000/api/post/", requestOptions)
        .then(response => response.text())
        .then((result) => {
          this.message = result;

          //emptying the this.file
          this.file ="";

          //Lancer la méthode pour télécharger tous les postes
          //OPTIMISATION - OPTIMISATION - OPTIMISATION - OPTIMISATION - OPTIMISATION - OPTIMISATION - OPTIMISATION
          // --->  faire en sorte que seul le nouveau poste soit chargé <---
          //OPTIMISATION - OPTIMISATION - OPTIMISATION - OPTIMISATION - OPTIMISATION - OPTIMISATION - OPTIMISATION
          this.getAllPosts();
        })
        .catch(error => console.log('error', error));

      } else {
        console.log("3");
        this.message = "Either the location, or the comment or the picture are missing... Retry please.";
      }
    }
  }
} 
</script>

<style scoped lang="scss">
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0px 0px 0px 0px ; // top right bottom left
}

.home{
  position: relative;
  background-color: whitesmoke;
  display: flex;  //display direction column by default
  flex-direction: column;


  &__component{

  }
  &__bttCreationPost{
    margin: 0px auto 15px auto ; // top right bottom left
    background-color: white;

    width: 350px; height: 30px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    border: lightgray;
    border-style: solid;
    border-width: 1px;

    font-weight: bold;
    cursor: pointer;
  }
  &__formCreationPost{
    display: flex;
    flex-direction: column;

    background-color: whitesmoke;
    padding: 0 15% 15% 15% ; // top right bottom left
    margin: 15%;

    top: 0px; right: 0px;
    position: absolute;
  }
  &____formBackground{
    top: 0px; right: 0px;
    position: absolute;
    
    background-color: grey;
    opacity: 15%;
    width: 100%; height: 100%;
  }
}
</style>
