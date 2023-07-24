const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 8090,
    host: '127.0.0.1',
    https: false,
    open: true,
    before: require('./src/mock/index')
  }
});
