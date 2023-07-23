import request from '@/request/index';
export function getuserinfo(data) {
  return request({
    url: 'api/user/info',
    method: 'get',
    data,
  });
}
export function getuserinfolist(data) {
  return request({
    url: 'api/user/info/list',
    method: 'get',
    data,
  });
}
