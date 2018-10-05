// 根据router获得的路由进行判断
import { routerMap, asyncRouterMap } from '../../router'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 */

function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    // some()是对数组中每一项运行指定函数，如果该函数对任一项返回true，则返回true
    return roles.some(role => route.meta.roles.indexOf(role) >= 0)
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合权限的路由表
 */

function filterAsyncRouterMap(asyncRouterMap, roles) {
  const routers = asyncRouterMap.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouterMap(route.children, roles)
      }
      return true
    }
    return false
  })
  return routers
}

const permission = {
  state: {
    routers: routerMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = routerMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const { roles } = data
        let accessedRouters
        if (roles.indexOf('admin') >= 0) {
          accessedRouters = asyncRouterMap
        } else {
          accessedRouters = filterAsyncRouterMap(asyncRouterMap, roles)
        }
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
