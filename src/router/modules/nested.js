import Layout from '@/pages/layout/index'
const nestedRouter = {
  path: '/nested',
  component: Layout,
  redirect: '/nested/menu1/menu1-1',
  name: 'Nested',
  meta: {
    title: '嵌套页面'
  },
  children: [
    {
      path: 'menu1',
      component: () => import('@/pages/nested/menu1/index'), // parent
      name: 'Menu1',
      meta: {
        title: 'menu1'
      },
      redirect: '/nested/menu1/menu1-1',
      children: [
        {
          path: 'menu1-1',
          component: () => import('@/pages/nested/menu1/menu1-1'),
          name: 'Menu1-1',
          meta: {
            title: 'menu1-1'
          }
        },
        {
          path: 'menu1-2',
          component: () => import('@/pages/nested/menu1/menu1-2'),
          name: 'Menu1-2',
          meta: {
            title: 'menu1-2'
          },
          children: [
            {
              path: 'menu1-2-1',
              component: () => import('@/pages/nested/menu1/menu1-2/menu1-2-1'),
              name: 'Menu1-2-1',
              meta: { title: 'menu1-2-1' }
            },
            {
              path: 'menu1-2-2',
              component: () => import('@/pages/nested/menu1/menu1-2/menu1-2-2'),
              name: 'Menu1-2-2',
              meta: { title: 'menu1-2-2' }
            }
          ]
        },
        {
          path: 'menu1-3',
          component: () => import('@/pages/nested/menu1/menu1-3'),
          name: 'Menu1-3',
          meta: { title: 'menu1-3' }
        }
      ]
    },
    {
      path: 'menu2',
      name: 'Menu2',
      component: () => import('@/pages/nested/menu2/index'),
      meta: { title: 'menu2' }
    }
  ]
}

export default nestedRouter
