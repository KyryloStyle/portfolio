import { createRouter, createWebHistory } from 'vue-router'
import Hero from '../components/HeroSection.vue'

const routes = [
  { path: '/', name: 'Home', component: Hero },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
