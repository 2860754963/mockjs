import Vue from 'vue';
import App from './App.vue';
import './mock/index.js';
import request from '@/request/index';
Vue.config.productionTip = false;
Vue.prototype.$request = request;
new Vue({
  render: h => h(App),
}).$mount('#app');
