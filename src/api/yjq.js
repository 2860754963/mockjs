import request from '@/request/index';
export function getuserid(data) {
  return request({
    url: '/api/user/userid',
    method: 'get',
    data,
  });
}
