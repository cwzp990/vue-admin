import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/pages/layout/index'

// 所有权限的通用路由表，如首页、登录页这种，以及一些不需要权限的可以公用的页面
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
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/pages/dashboard/index'),
        name: 'dashboard',
        meta: {
          title: 'dashboard'
        }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

// 实例化时，只挂载通用的路由表
export default new Router({
  routes: routerMap
})

export const asyncRouterMap = [
  // 权限测试页
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    alwaysShow: true,
    meta: {
      title: 'permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // 设置权限，通用页面
    },
    children: [
      {
        path: 'page',
        component: () => import('@/pages/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'pagePermission',
          roles: ['admin'] // 设置权限，只有admin才能进入此页面
        }
      },
      {
        path: 'directive',
        component: () => import('@/pages/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'directivePermission'
          // 这里没设置roles选项，说明此页面不需要权限
        }
      }
    ]
  }
]
