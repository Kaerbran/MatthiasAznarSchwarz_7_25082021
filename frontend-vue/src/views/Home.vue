<template>
  <div class="home">
      <ImageArticle class="home__component"/>
  </div>
</template>

<script>
import ImageArticle from "../components/imageArticle"

export default {
  name: 'Home',
  components: {
    ImageArticle,
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
