<template>
  <div id="nav">
    <router-link to="/" v-if="UserName" >Home |</router-link>
    <router-link to="/about" v-if="UserName">About |</router-link>
    <router-link to="/signin" v-if="UserName">Sign In |</router-link>
    <router-link to="/profile" v-if="UserName">Profile |</router-link>
    <router-link to="/admin" v-if="UserAdmin">Admin |</router-link>
    <router-link to="/admin" v-if="UserName" @click.prevent="pageDeco" >Deconexion</router-link>
  </div>
  <router-view/>
</template>

<script>
import { RouterView, RouterLink } from "vue-router";
import { mapState } from "vuex"
//import createStore from './store/index'

export default {
  name: "App",
  components: {
    RouterView,
    RouterLink
  },
  computed: {
		...mapState({
			UserName: "UserName",
      UserAdmin: "UserAdmin",     //creer variable identifiacation Admin
    })
  },
  methods: {
    pageDeco (){
      location.reload();
    }
  },
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
