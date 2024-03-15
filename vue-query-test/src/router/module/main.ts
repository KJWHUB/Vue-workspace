import 'vue-router'
export {}

export interface SiedbarType {
  index: string
  icon?: ElementPlusIconsVueStringLiteralType
  title: string
  to: { name: string }
}

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean
    roles?: AuthorityType[]
    sidebar?: SiedbarType
  }
}

import type { RouteRecordRaw } from 'vue-router'

import HomeView from '@/views/main/home/HomeView.vue'
import MainLayout from '@/layouts/main/MainLayout.vue'
import ListLayout from '@/layouts/ListLayout.vue'
import type { ElementPlusIconsVueStringLiteralType } from '@/lib/elementPlus'
import type { AuthorityType } from '@/types/authority'

const mainRoutes: RouteRecordRaw = {
  path: '/',
  name: 'root',
  redirect: { name: 'home' },
  component: MainLayout,
  meta: { requiresAuth: true },
  children: [
    {
      path: 'home',
      name: 'home',
      component: HomeView,
      meta: {
        sidebar: {
          index: 'M100',
          icon: 'House',
          title: '홈',
          to: { name: 'home' }
        }
      }
    },
    {
      path: 'about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/main/about/AboutView.vue'),
      meta: {
        roles: ['ALL', 'READ', 'EDIT'],
        sidebar: {
          index: 'M200',
          title: '어바웃',
          to: { name: 'home' }
        }
      }
    },
    {
      path: 'post',
      name: 'postCreate',
      component: () => import('@/views/main/post/PostView.vue'),
      meta: {
        sidebar: {
          index: 'M300',
          title: '포스트크리에이트',
          to: { name: 'home' }
        }
      }
    },
    {
      path: 'list',
      name: 'list',
      component: ListLayout,
      meta: {
        sidebar: {
          index: 'M400',
          title: '리스트',
          to: { name: 'home' }
        }
      },
      children: [
        {
          path: 'user',
          name: 'user',
          component: () => import('@/views/main/list/user/UserView.vue'),
          meta: {
            sidebar: {
              index: 'M500',
              title: '유저',
              to: { name: 'home' }
            }
          }
        },
        {
          path: 'product',
          name: 'product',
          component: () => import('@/views/main/list/product/ProductView.vue'),
          meta: {
            sidebar: {
              index: 'M600',
              title: '상품',
              to: { name: 'home' }
            }
          }
        }
      ]
    },
    {
      path: 'default-route-test',
      name: 'defaultRouteTest',
      meta: {
        sidebar: {
          index: 'M700',
          title: '디폴트 라우트 테스트',
          to: { name: 'defaultRouteTest' }
        }
      },
      children: [
        {
          path: '',
          component: () => import('@/views/main/drt/DefaultRouteTest.vue')
        }
      ]
    },
    {
      path: 'object-vfor',
      name: 'object-vfor',
      meta: {
        sidebar: {
          index: 'M800',
          title: '오브젝트 v-for 테스트',
          to: { name: 'object-vfor' }
        }
      },
      component: () => import('@/views/main/ovf/ObjectVFor.vue')
    },
    {
      path: 'component-attrs',
      name: 'component-attrs',
      meta: {
        sidebar: {
          index: 'M900',
          title: '컴포넌트 속성 테스트',
          to: { name: 'component-attrs' }
        }
      },
      component: () => import('@/views/main/ca/ComponentAttrTestView.vue')
    },
    {
      path: 'test',
      name: 'allTest',
      meta: {
        sidebar: {
          index: 'M1000',
          title: 'ALL 테스트',
          to: { name: 'allTest' }
        }
      },
      component: () => import('@/views/main/comtest/AttrComponentTestView.vue')
    }
  ]
}

export default mainRoutes
