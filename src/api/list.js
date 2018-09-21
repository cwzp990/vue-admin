import request from '@/utils/request'

export function getList(line, opened) {
  const data = {
    line,
    opened
  }
  return request({
    url: '/list/details',
    method: 'post',
    data
  })
}

export function getListOptions(name) {
  const data = {
    name
  }
  return request({
    url: '/list/options',
    method: 'post',
    data
  })
}
