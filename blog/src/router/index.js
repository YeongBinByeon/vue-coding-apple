import Detail from '@/components/Detail.vue'
import Home from '@/components/Home.vue'
import List from '@/components/List.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/list',
    component: List,
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '/detail',
    component: Detail,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
