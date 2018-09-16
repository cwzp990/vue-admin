import request from '@/utils/request'

// 获取贷款菜单数据
export function getLoanData() {
  return request({
    url: '/loanData',
    method: 'post'
  })
}
