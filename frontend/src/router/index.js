import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from '@auth0/auth0-vue'

import HomeView from '../views/HomeView.vue'
import InicioView from '../views/InicioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/inicio',
      name:'inicio',
      beforeEnter: authGuard,
      component: InicioView
    }
  ]
})

export default router
