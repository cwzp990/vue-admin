import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'post',
    params: {token}
  })
}
