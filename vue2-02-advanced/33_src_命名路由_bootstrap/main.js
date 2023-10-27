// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 引入路由器
import router from './router'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建vm
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
});