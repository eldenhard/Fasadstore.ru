import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import ObjectView from '@/pages/ObjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/AboutView.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('@/pages/ContactView.vue')
    },
    {
      path: '/objects',
      name: 'objects',
      component: ObjectView
    },
    {
      path: '/windows',
      name: 'windows',
      component: () => import('@/pages/WindowView.vue'),
      children: [
        {
          path: 'classic',
          name: 'windows-classic',
          component: () => import('@/components/TypeWindow/ClassicWindow.vue')
        },
        {
          path: 'panorama',
          name: 'windows-panorama',
          component: () => import('@/components/TypeWindow/PanoramaWindow.vue')
        },
        {
          path: 'hidden',
          name: 'windows-hidden',
          component: () => import('@/components/TypeWindow/HiddenWindow.vue')
        }
      ]
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
