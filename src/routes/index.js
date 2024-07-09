import { createWebHistory, createRouter } from 'vue-router'

import homePage from '@/views/homePage.vue'

const routes = [
  { path: '/', component: homePage },
  { 
    path: '/:pathMatch(.*)*', 
    component: ()=> import('@/views/notFound.vue') 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;