// 该文件专门用于创建整个应用的路由器

// 引入Vue
import Vue from 'vue'
// 引入VueRouter
import VueRouter from "vue-router";
// 使用插件
Vue.use(VueRouter)

// 引入组件
import About from '../components/About.vue'
import Home from '../components/Home.vue'

// 创建一个路由器
export default new VueRouter({
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home
    }
  ]
})