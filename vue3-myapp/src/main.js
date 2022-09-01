import { createApp } from 'vue'
// import App from './App.vue'
import App from './01-base/07-子传父.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
