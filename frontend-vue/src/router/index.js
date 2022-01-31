import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

//permet d'utiliser le store
import createStore from '../store/index'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import('../views/Signin.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  /* 
  Est améliorable en utilisant les token. On peut verifier si le token est encore valable, s'il n'est plus valable, 
  alors on efface les données du datastore et on redirige vers l'autentification.
  */

  if ( (createStore._state.data.UserLogin) || ((to.name == 'Signup') || (to.name == 'Signin')) ) {
    next()
  } else {
    next({ name: 'Signin' })
  }
})

export default router
