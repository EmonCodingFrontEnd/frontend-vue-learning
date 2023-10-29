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
const router = new VueRouter({
  routes: [
    {
      name: 'guanyu',
      path: '/about',
      component: About,
      meta: {
        isAuth: false, title: '关于'
      }
    },
    {
      name: 'zhuye',
      path: '/home',
      component: Home,
      meta: {
        isAuth: false, title: '主页'
      },
      children: [ // 通过children配置子级路由
        {
          name: 'xinwen',
          path: 'news', // 此处一定不要写 /news
          component: News,
          meta: {
            isAuth: true, title: '新闻'
          },
          // 独享路由守卫
          beforeEnter(to, from, next) {
            console.log("独享路由守卫");
            if (to.meta.isAuth) {
              if (localStorage.getItem('school') === 'atguigu') {
                next();
              }
              else {
                alert('学校名不对，无权限访问！');
              }
            }
          }
        },
        {
          name: 'xiaoxi',
          path: 'message', // 此处一定不要写 /message
          component: Message,
          meta: {
            isAuth: true, title: '消息'
          },
          children: [
            {
              name: 'xiangqing',
              path: 'detail/:id/:title',
              component: Detail,
              meta: {
                isAuth: true, title: '详情'
              },
              // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传递给Detail组件
              // props: { a: 1, b: 'hello' }
              // props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传递给Detail组件
              props: true,
              // 第三种写法，props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
              props($route) {
                return {
                  id: $route.params.id,
                  title: $route.params.title
                }
              }
            },
          ]
        }
      ]
    }
  ]
})

// 全局前置路由守卫——初始化的时候被调用、每次路由切换之前被调用
/* router.beforeEach((to, from, next) => {
  console.log('前置路由守卫');
  // 判断是否需要鉴权
  if (to.meta.isAuth) {
    if (localStorage.getItem('school') === 'atguigu') {
      next();
    }
    else {
      alert('学校名不对，无权限访问！');
    }
  } else {
    next();
  }
}); */

// 全局后置路由守卫——初始化的时候被调用、每次路由切换之后被调用
/* router.afterEach((to, from) => {
  console.log('后置路由守卫');
  document.title = to.meta.title || '尚硅谷系统';
}); */
export default router;