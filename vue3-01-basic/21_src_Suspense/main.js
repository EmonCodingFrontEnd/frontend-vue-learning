// 引入的不再是Vue构造函数了，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')
// 创建应用实例对象——app（类似于之前Vue2的vm，但app比vm更“轻量级”）
const app = createApp(App);
// 挂载
app.mount('#app');

// setTimeout(() => {
//   app.unmount('#app')
// }, 2000);

/* 
Vue2的写法，不再支持！！！
import Vue from 'vue'
import App from './App.vue'
new Vue({
  el: '#app',
  render: h => h(App),
}) 
*/