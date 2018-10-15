import router from '../router'
import store from '../store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'

NProgress.configure({ showSpinner: false })

// 判断是否含有admin权限 判断是否含有指定permissionRoles权限
function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/login', '/auth-redirect']

/*
  这里梳理一下逻辑：
  当用户输入账号密码后向服务端提交，验证是否正确，如果正确，服务端会返回一个token
  拿到token，前端将它存储到cookie里，前端会根据token请求userInfo接口，拿到用户的详细信息，里面包括权限、用户姓名等
  拿到用户权限我们就可以根据权限生成路由了，通过vue 提供的 addRoutes将其对应权限路由添加进路由表即可
*/

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      if (store.getters.roles.length === 0) {
        store
          .dispatch('getUserInfo')
          .then(res => {
            const roles = res.data.roles
            store.dispatch('GenerateRoutes', { roles }).then(() => {
              router.addRoutes(store.getters.addRouters)
              next({ ...to, replace: true })
            })
          })
          .catch(err => {
            store.dispatch('FedLogOut').then(() => {
              Message.error(err || '登录失败，请重新登录')
              next({ path: '/' })
            })
          })
      } else {
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          next()
        } else {
          next({ path: '/401', replace: true, query: { noGoBack: true } })
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
