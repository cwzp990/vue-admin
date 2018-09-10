import { loginByUsername } from '@/api/login'
import { getToken, setToken } from '@/utils/auth'

const user = {
  state: {
    user: '',
    status: '',
    token: getToken(),
    name: '',
    avatar: '',
    roles: ''
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
            const data = res.data
            commit('SET_TOKEN', data.token)
            setToken(data.token)
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}

export default user
