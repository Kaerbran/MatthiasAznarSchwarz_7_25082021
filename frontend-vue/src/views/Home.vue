<template>
  <div class="home">
      <div class="home__bttCreationPost">
        Creer un nouveau poste
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
      posts : [],
    }
  },
	computed: {
		...mapState({
			UserName: "UserName",
			UserLogin: "UserLogin",
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
}
</style>
