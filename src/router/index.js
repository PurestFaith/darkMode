import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/ScanView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    // {
    //   path: '/scan',
    //   name: 'Scan',
    //   component: () => import('@/components/ScanView.vue'),
    // },
  ],
})

export default router
