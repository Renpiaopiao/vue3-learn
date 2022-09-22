import { createApp } from 'vue'
// import App from './App.vue'
import App from './02-advanced/04-watch.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
