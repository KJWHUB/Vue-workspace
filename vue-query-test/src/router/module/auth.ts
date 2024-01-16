import AuthLayout from '@/layouts/auth/AuthLayout.vue'

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

export default authRoutes
