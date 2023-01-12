import request from '@/utils/request'
export const getUserInfoAPI = function () {
  return request.get('/user')
}
