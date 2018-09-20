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
