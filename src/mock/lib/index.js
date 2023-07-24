export default {
  list: (list) => {
    return {
      status: 200,
      msg: '请求成功！',
      list
    }
  },
  details: (obj) => {
    return {
      status: 200,
      msg: '请求成功!',
      obj
    }
  }
}