// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import axios from 'axios';
//import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
import '../static/css/theme-green/index.css';       // 浅绿色主题

import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
//import "babel-polyfill";

Vue.use(ElementUI);
Vue.use(Vant);
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
