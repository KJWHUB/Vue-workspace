import HomeView from '@/views/main/home/HomeView.vue'
import MainLayout from '@/layouts/main/MainLayout.vue'
import ListLayout from '@/layouts/ListLayout.vue'

const mainRoutes = {
  path: '/',
  name: 'root',
  redirect: { name: 'home' },
  component: MainLayout,
  children: [
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
}

export default mainRoutes
