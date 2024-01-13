import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/main/home/HomeView.vue'
import ListLayout from '@/layouts/ListLayout.vue'
import AuthLayout from '@/layouts/auth/AuthLayout.vue'
import MainLayout from '@/layouts/main/MainLayout.vue'

const basicRoutes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/error/404/NotFound.vue')
  }
]
const mainRoutes = [
  {
    path: 'home',
    name: 'home',
    component: HomeView
  },
  {
    path: 'about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/main/about/AboutView.vue')
  },
  {
    path: 'post',
    name: 'postCreate',
    component: () => import('@/views/main/post/PostView.vue')
  },
  {
    path: 'list',
    name: 'list',
    component: ListLayout,
    children: [
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/main/list/user/UserView.vue')
      },
      {
        path: 'product',
        name: 'product',
        component: () => import('@/views/main/list/product/ProductView.vue')
      }
    ]
  }
]
const authRoutes = {
  path: '/auth',
  name: 'auth',
  component: AuthLayout,
  children: [
    {
      path: 'login',
      name: 'login',
      component: () => import('@/views/auth/login/LoginView.vue')
    }
  ]
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: { name: 'home' },
      component: MainLayout,
      children: mainRoutes
    },
    authRoutes,
    ...basicRoutes
  ]
})

export default router
