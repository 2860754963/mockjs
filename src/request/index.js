import axios from 'axios';
function getToken() {
  return '12312112315454';
}
let token = false;
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});
service.interceptors.request.use(
  config => {
    if (token) {
      config.headers['token'] = getToken();
    }
    return config;
  },
  error => {
    console.log(error);
    return new Promise.reject(error);
  }
);
service.interceptors.response.use(
  response => {
    let { data } = response;
    if (data.status !== 200) {
      return new Promise.reject('接口返回错误');
    } else {
      return data;
    }
  },
  error => {
    console.log(error, '相应拦截器error');
    return new Promise.reject(error);
  }
);
export default service;
