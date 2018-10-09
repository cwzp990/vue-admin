import { loginByUsername, getUserInfo } from '@/api/login'
import { getToken, setToken } from '@/utils/auth'

const user = {
  state: {
    user: '',
    status: '',
    token: getToken(),
    name: '',
    avatar: '',
    roles: []
  },
  mutations: {
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    loginByUser({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password)
          .then(res => {
            commit('SET_TOKEN', res.data.token)
            setToken(res.data.token)
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token)
          .then(res => {
            if (res.status !== 200) {
              reject('error')
            }
            const data = res.data
            if (data.roles && data.roles.length > 0) {
              commit('SET_ROLES', data.roles)
            } else {
              reject('roles必须是一个非空数组！')
            }
            commit('SET_NAME', data.name)
            commit('SET_AVATAR', data.avatar)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}

export default user
