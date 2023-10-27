// 该文件专门用于创建整个应用的路由器

// 引入Vue
import Vue from 'vue'
// 引入VueRouter
import VueRouter from "vue-router";
// 使用插件
Vue.use(VueRouter)

// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

// 创建一个路由器
export default new VueRouter({
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [ // 通过children配置子级路由
        {
          path: 'news', // 此处一定不要写 /news
          component: News
        },
        {
          path: 'message', // 此处一定不要写 /message
          component: Message,
          children: [
            {
              path: 'detail',
              component: Detail
            },
          ]
        }
      ]
    }
  ]
})