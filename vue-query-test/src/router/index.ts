import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListLayout from '../layouts/ListLayout.vue'
improt ProductIndex from '../views/list/product/index.vue'
improt ProductHelper from '../views/list/product/helper.vue'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/CreatePostView.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: ListLayout,
      children: [
        {
          path: 'user',
          name: 'user',
          component: () => import('../views/list/user/index.vue')
        },
        {
          path: 'product',
          name: 'product',
          component: {
            default: ProductIndex,
            helper: ProductHelper
          }
        }
      ]
    }
  ]
})

export default router
