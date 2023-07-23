import mockjs from 'mockjs';

let { userinfo } = mockjs.mock({
  userinfo: {
    id: '@increment',
    name: '@cname',
  },
});
let { userinfolist } = mockjs.mock({
  'userinfolist|75': [
    {
      idCard: '@id()',
      id: '@increment',
      title: '@ctitle',
      content: '@cparagraph',
      image: '@image()',
      address: '@city(true)',
    },
  ],
});
mockjs.mock('api/user/info', 'get', () => {
  return {
    // 后端返回的数据格式
    status: 200,
    msg: '获取用户信息成功',
    userinfo,
  };
});
mockjs.mock('api/user/info/list', 'get', () => {
  return {
    status: 200,
    msg: '获取用户列表成功！',
    userinfolist,
  };
});
