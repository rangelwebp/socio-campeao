import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import LoginView from '../views/LoginView.vue'
import FilterView from '../views/FilterView.vue'
import AddView from '../views/AddView.vue'
import SocioDetails from "@/views/SocioDetails.vue";

const routes = [
  {
    path: '/socios',
    name: 'Socios',
    component: HomeView
  },
  {
    path: '/socios/ouro',
    name: 'Ouro',
    component: FilterView,
    props: { filterType: 'ouro' }
  },
  {
    path: '/socios/prata',
    name: 'Prata',
    component: FilterView,
    props: { filterType: 'prata' }
  },
  {
    path: '/socios/bronze',
    name: 'Bronze',
    component: FilterView,
    props: { filterType: 'bronze' }
  },
  {
    path: '/socios/adicionar',
    name: 'Adicionar',
    component: AddView
  },
  {
    path: '/socio/:id',
    name: 'SocioDetails',
    component: SocioDetails,
    props: true
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
