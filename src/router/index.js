import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/pages/layout/index'

export const routerMap = [
  {
    path: '/login',
    component: () => import('@/pages/login/index')
  },
  {
    path: '/404',
    component: () => import('@/pages/errorPage/404')
  },
  {
    path: '/401',
    component: () => import('@/pages/errorPage/401')
  },
  {
    path: '',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: () => import('@/pages/dashboard/index'),
        name: 'dashboard',
        meta: {
          title: 'dashboard'
        }
      }
    ]
  }
]

export default new Router({
  routes: routerMap
})
