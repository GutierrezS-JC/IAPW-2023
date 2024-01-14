import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from '@auth0/auth0-vue'

import HomeView from '../views/HomeView.vue'
import InicioView from '../views/InicioView.vue'
import JobsView from '../views/JobsView.vue'
import SnapshotsView from '../views/SnapshotsView.vue'
import SearchView from '../views/SearchView.vue'

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
    },
    {
      path:'/jobs/:id',
      name:'jobs',
      beforeEnter: authGuard,
      component: JobsView
    },
    {
      path:'/snapshots/:id',
      name:'snapshots',
      beforeEnter: authGuard,
      component: SnapshotsView
    },
    {
      path:'/search',
      name:'search',
      beforeEnter: authGuard,
      component: SearchView
    }
  ]
})

export default router
