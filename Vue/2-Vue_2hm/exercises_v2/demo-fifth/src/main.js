import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false
// 全局配置axios的请求根路径
axios.defaults.baseURL = 'http://www.liulongbin.top:3006'
Vue.prototype.axios = axios

new Vue({
  render: (h) => h(App)
}).$mount('#app')
