/**
 * axios统一封装
 * 请求拦截、响应拦截、错误统一处理
 */

import axios from 'axios'
import qs from 'qs'
import store from '../store'
import { getToken } from '@/utils/auth'
import { Message } from 'element-ui'

/**
 * 提示函数
 * 禁止点击蒙层、显示一秒后关闭
 */

const tips = msg => {
  Message({
    message: msg,
    type: 'warning',
    duration: 1500
  })
}

const service = axios.create({
  baseURL: 'https://easy-mock.com/mock/5b962b5ee0d1a17c279c8873/api',
  timeout: 10000,
  responseType: 'json',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})

/**
 * 登录流程控制中，根据本地是否存在token判断用户登录情况，
 * 但是即视token存在，也有可能过期，需要在每次请求头部携带token，
 * 这时，后台可以根据携带的token来判断用户的登录情况，并给我们返回相应的状态码，
 * 之后，我们可以在响应拦截器中，根据状态码进行相应的操作
 */
service.interceptors.request.use(
  config => {
    // 若是公司的提交能接受json格式，就不需要序列化了
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    if (store.getters.token) {
      config.headers['Token'] = getToken()
    }
    return config
  },
  error => {
    console.log(error) // for debugger
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.status !== 200) {
      tips(res.msg)
      return Promise.reject(res.msg)
    } else {
      return res
    }
  },
  error => {
    console.log('error:', error) // for debugger
    tips(error.msg)
    return Promise.reject(error)
  }
)

export default service
