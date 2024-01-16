import { createRouter, createWebHistory } from 'vue-router'

// module
import mainRoutes from './module/main'
import authRoutes from './module/auth'
import { useTokenStore } from '@/stores/auth/token'

const basicRoutes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/error/404/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [mainRoutes, authRoutes, ...basicRoutes]
})

const loginName = 'login'

router.beforeEach(async (to, from) => {
  const { isAuthenticated } = useTokenStore()
  const isLogin = await isAuthenticated()

  console.group('router.beforeEach')
  console.log('유효성 여부 :::>', isLogin)
  console.log('to', to)
  console.log('from', from)
  console.groupEnd()

  if (isLogin) {
    if (to.name === loginName) {
      return { name: 'home' }
    }
  } else {
    if (to.name !== loginName) {
      return { name: loginName }
    }
  }
})

export default router
