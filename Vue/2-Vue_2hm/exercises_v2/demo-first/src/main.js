// 导入vue包 得到Vue构造函数
import Vue from 'vue'
import App from './App.vue'
// import Test from './Test.vue'
import Count from '@/components/Count.vue'

Vue.component('MyCount', Count)

Vue.config.productionTip = false


new Vue({
  // el: '#app', //render指定的内容替换了app位置内容
  //把 render函数指定的组件，渲染到HTML页面中
  render: h => h(App),
}).$mount('#app');

