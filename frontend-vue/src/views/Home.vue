<template>
  <div class="home">
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

  &__component{

  }
}
</style>
