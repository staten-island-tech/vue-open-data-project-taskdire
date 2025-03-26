import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/Borough',
      name: 'Borough',
      component: () => import('../views/BoroughChart.vue'),
    },
    {
      path: '/Mofi',
      name: 'Mofi',
      component: () => import('../views/MofiChart.vue'),
    },
  ],
})

export default router
