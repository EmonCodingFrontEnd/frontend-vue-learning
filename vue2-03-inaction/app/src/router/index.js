// 配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用插件
Vue.use(VueRouter)

import routes from '@/router/route';
import store from '@/store'

// 先把VueRouter原型对象的push备份一份
const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;
// 重写push|replace
VueRouter.prototype.push = function (to, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, to, resolve, reject);
  } else {
    originPush.call(this, to, () => { }, () => { });
  }
}
VueRouter.prototype.replace = function (to, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, to, resolve, reject);
  } else {
    originReplace.call(this, to, () => { }, () => { });
  }
}

// 配置路由
const router = new VueRouter({
  routes,
  // 滚动行为
  scrollBehavior(to, from, savedPosition) {
    // 返回的这个y=0表示垂直方向在最上方
    return { y: 0 }
  }
})

// 全局路由守卫：前置守卫（在路由跳转之前执行）
router.beforeEach(async (to, from, next) => {
  // console.log("--------------------------------beforeEach");
  /**
   * to:从哪一个路由
   * from:到哪一个路由
   * next: 放行函数， next()-放行 next(path)-放行到指定路由 next(false)-中断当前的导航
   */
  // 用户是否已经登录了
  const token = store.state.user.token;
  // 用户信息
  const name = store.state.user.userInfo.name;
  // 已经登录了
  if (token) {
    // 不允许去登录和注册
    if (to.path === '/login' || to.path === '/register') {
      next("/home")
    } else {
      // 拥有用户信息，则放行
      if (name) {
        next();
      }
      // 没有用户信息，则获取
      else {
        try {
          await store.dispatch("getUserInfo");
          next();
        } catch (error) {
          console.error("token已过期，获取用户信息失败:", error.message);
          const result = confirm("token已过期，重新获取！");
          if (result) {
            console.log("用户点击了确认重新获取token！");
            try {
              await store.dispatch("userLogout");
              next('/login')
            } catch (error) {
              console.error("退出登录失败:", error.message);
            }
          }
        }
      }
    }
  } else {
    // 用户未登录
    if (to.path === '/trade' || to.path.indexOf("pay") !== -1 || to.path.indexOf("/center") !== -1) {
      try {
        // 未登录时想去而无法去的地方，存储于地址栏中【路由】
        next('/login?redirect=' + to.path)
      } catch (error) {
        console.error("退出登录失败:", error.message);
      }
    } else {
      next();
    }
  }
})

// 全局后置路由守卫——初始化的时候被调用、每次路由切换之后被调用
// router.afterEach((to, from) => {
//   console.log('后置路由守卫');
//   document.title = to.meta.title || '尚硅谷系统';
// });

export default router;
