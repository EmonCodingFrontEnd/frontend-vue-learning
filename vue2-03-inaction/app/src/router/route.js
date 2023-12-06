// 引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'

// 引入二级路由组件
import MyOrder from '@/pages/Center/MyOrder'
import GroupOrder from '@/pages/Center/GroupOrder'

/**
 * 当打包构建应用时，JavaScript包会变得非常大，影响页面加载。
 * 如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应的组件，这样就更加高效了。
 */
// 路由配置信息
export default [
  {
    path: '/home',
    component: () => import("@/pages/Home"),
    meta: {
      showFooter: true
    }
  },
  {
    name: 'search',
    path: '/search/:keyword?',
    component: () => import("@/pages/Search"),
    meta: {
      showFooter: true
    },
    // 路由组件如何传递props数据？
    // 方式一：布尔值
    // props: true // 仅支持params参数
    // 方式二：对象写法，额外给路由组件传递一些恶属性
    // props: { a: 1, b: 2 },
    // 方式三：函数写法，可以params参数、query参数，通过props传递给路由组件
    props: ($route) => {
      return { keyword: $route.params.keyword, k: $route.query.k }
    }
  },
  {
    path: '/detail/:skuId',
    component: Detail,
    meta: {
      showFooter: true
    }
  },
  {
    name: "addcartsuccess",
    path: '/addcartsuccess',
    component: AddCartSuccess,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/shopcart',
    component: ShopCart,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/trade',
    component: Trade,
    meta: {
      showFooter: true
    },
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
      // console.log("--------------------------------beforeEnter");
      // 只有从购物车去交易页面，才放行
      if (from.path === "/shopcart") {
        next();
      } else {
        next(false);
      }
    }
  },
  {
    path: '/pay',
    component: Pay,
    meta: {
      showFooter: true
    },
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
      // console.log("--------------------------------beforeEnter");
      if (from.path === "/trade") {
        next();
      } else {
        next(false);
      }
    }
  },
  {
    path: '/paysuccess',
    component: PaySuccess,
    meta: {
      showFooter: true
    },
    // 路由独享守卫
    // beforeEnter: (to, from, next) => {
    //   console.log("--------------------------------beforeEnter");
    //   if (from.path === "/pay") {
    //     next();
    //   } else {
    //     next(false);
    //   }
    // }
  },
  {
    path: '/center',
    component: Center,
    meta: {
      showFooter: true
    },
    // 二级路由组件
    children: [
      {
        path: 'myorder',
        component: MyOrder
      },
      {
        path: 'grouporder',
        component: GroupOrder
      },
      {
        path: '/center',
        redirect: '/center/myorder'
      },
    ]
  },
  {
    path: '/communication',
    component: () => import('@/pages/Communication/Communication'),
    children: [
      {
        path: 'event',
        component: () => import('@/pages/Communication/EventTest/EventTest'),
        meta: {
          show: false
        },
      },
      {
        path: 'model',
        component: () => import('@/pages/Communication/ModelTest/ModelTest'),
        meta: {
          show: false
        },
      },
      {
        path: 'sync',
        component: () => import('@/pages/Communication/SyncTest/SyncTest'),
        meta: {
          show: false
        },
      },
      {
        path: 'attrs-listeners',
        component: () => import('@/pages/Communication/AttrsListenersTest/AttrsListenersTest'),
        meta: {
          show: false
        },
      },
      {
        path: 'children-parent',
        component: () => import('@/pages/Communication/ChildrenParentTest/ChildrenParentTest'),
        meta: {
          show: false
        },
      },
      {
        path: 'scope-slot',
        component: () => import('@/pages/Communication/ScopeSlotTest/ScopeSlotTest'),
        meta: {
          show: false
        },
      }
    ],
  },
  {
    path: '/login',
    component: Login,
    meta: {
      showFooter: false
    }
  },
  {
    path: '/register',
    component: Register,
    meta: {
      showFooter: false
    }
  },
  // 重定向，在项目跑起来的时候，访问/，立马让他定向到首页
  {
    path: '*',
    redirect: "/home"
  }
]