import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//fontawesome /*
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faHeart, faComment, faPaperPlane, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faHeart, faComment, faPaperPlane, faCheck, faTrash);

createApp(App).use(store)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')