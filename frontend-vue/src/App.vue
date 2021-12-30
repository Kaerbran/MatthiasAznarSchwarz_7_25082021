<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/signin">Sign In</router-link> |
    <router-link to="/profile">Profile</router-link> |
    <router-link to="/admin">Admin</router-link>
  </div>
  <router-view/>
</template>

<script>
import { RouterView, RouterLink } from "vue-router";

export default {
  name: "App",
  components: {
    RouterView,
    RouterLink
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: whitesmoke;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
