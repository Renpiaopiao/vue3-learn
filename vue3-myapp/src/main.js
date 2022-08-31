import { createApp } from 'vue'
// import App from './App.vue'
import App from './01-base/03-todo-ref.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
