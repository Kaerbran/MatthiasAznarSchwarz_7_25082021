<template>
  <div class="home">
      <div v-for="(post, index) in posts" :key="index">
        <ImageArticleAdmin 
          :articledata="post"
          class="home__component"/>
      </div>
  </div>
</template>

<script>
import ImageArticleAdmin from "../components/imageArticleAdmin"
import { mapState } from "vuex"

export default {
  name: 'Home',
  components: {
    ImageArticleAdmin,
  },
  data() {
    return {
      posts : [],
    }
  },
	computed: {
		...mapState({
			UserName: "UserName",
            UserLogin: "UserLogin",
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
    getAllPosts () {

      // a faire / a faire / a faire / a faire / a faire / a faire / a faire
      // MODIFICATION -> faire en sorte que seul les posts NON validés soit affichés
      // a faire / a faire / a faire / a faire / a faire / a faire / a faire

      var requestOptions = {
      method: 'GET',
      redirect: 'follow'
      };

      fetch("http://localhost:3000/api/post/", requestOptions)
      .then(response => response.text())
      .then((result) => {
        this.posts = JSON.parse(result);
        console.log(this.posts);
      })
      .catch(error => console.log('error', error));
    },
    clickShowModal(){  
      this.modalBttPostCreation = !this.modalBttPostCreation;
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
