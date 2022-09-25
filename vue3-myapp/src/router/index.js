import { createRouter, createWebHistory } from 'vue-router'
import film from '../views/Film.vue'
import cinema from '../views/Cinema.vue'
import center from '../views/Center.vue'


const routes = [
  {
    path:'/film',
    component:film
  },
  {
    path:'/cinema',
    component:cinema
  },
  {
    path:'/center',
    component:center
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),  //mode:history 默认
  routes
})

router.beforeEach((to,from,next)=> {
  if(to.fullPath == '/center'){
    console.log('lan jie');
  }else{
    next()
  }
})

export default router
