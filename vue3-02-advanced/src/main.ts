import { createApp } from 'vue'
import App from './App.vue'
import Hello from './Hello.vue'

// 创建应用
const app = createApp(App);

// 全局注册组件
app.component('Hello', Hello);

// 全局属性
app.config.globalProperties.x = 999;
// 定义全局属性的类型声明，避免属性在组件中引用时飘红报错！
declare module 'vue' {
  interface ComponentCustomProperties {
    x: number
  }
}

// 自定义指令
app.directive('beauty', (element, binding) => {
  element.innerText += binding.value;
  element.style.color = 'green';
  element.style.backgroundColor = 'skyblue';
})

// 挂载应用
app.mount('#app')

setTimeout(() => {
  app.unmount();
}, 2000);