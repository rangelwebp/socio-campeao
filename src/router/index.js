import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import FilterView from '../views/FilterView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/socios',
    name: 'socios',
    component: HomeView,
  },
  {
    path: '/socios/ouro',
    name: 'ouro',
    component: FilterView,
  },
  {
    path: '/socios/prata',
    name: 'prata',
    component: FilterView,
  },
  {
    path: '/socios/bronze',
    name: 'bronze',
    component: FilterView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
