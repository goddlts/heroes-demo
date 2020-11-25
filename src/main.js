// 导入一个模块
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// 引入 node_modules 中的内容，不写 ./
import 'bootstrap/dist/css/bootstrap.css'
// 引入当前项目中的内容要写 ./
import './assets/css/index.css'
// 如果 import 的路径中不写 ./ 默认回去 node_moduels 中加载内容

// 创建一个 axios 的新的实例
const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 10000,  // 请求超时 毫秒
})
Vue.prototype.axios = instance

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')