// 引入Vue|Vue-router
import Vue from 'vue'
import Router from 'vue-router'

// 使用路由差距
Vue.use(Router)

// 引入最外层骨架的一级组件
/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

// 路由的配置：为什么不同的用户登录我们的项目，菜单（路由）都是一样的？因为路由是写死的！！！
/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  // 权限数据管理相关的路由
  {
    path: '/acl',
    component: Layout,
    name: 'Acl',
    redirect: '/acl/user/list',
    meta: { title: '权限管理', icon: 'el-icon-lock' },
    children: [
      {
        path: 'user/list',
        name: 'User',
        component: () => import('@/views/acl/user/list'),
        meta: { title: '用户管理', }
      },
      {
        path: 'role/list',
        name: 'Role',
        component: () => import('@/views/acl/role/list'),
        meta: { title: '角色管理', }
      },
      {
        path: 'role/auth/:id',
        name: 'RoleAuth',
        component: () => import('@/views/acl/role/roleAuth'),
        meta: { title: '角色授权', activeMenu: '/acl/role/list' },
        hidden: true
      },
      {
        path: 'permission/list',
        name: 'Permission',
        component: () => import('@/views/acl/permission/list'),
        meta: { title: '菜单管理' },
      },
    ]
  },

  {
    path: '/product',
    component: Layout,
    name: 'Product',
    meta: { title: '商品管理', icon: 'el-icon-goods' },
    children: [
      {
        path: 'trademark',
        name: 'TradeMark',
        component: () => import('@/views/Product/TradeMark'),
        meta: { title: '品牌管理', }
      },
      {
        path: 'attr',
        name: 'Attr',
        component: () => import('@/views/Product/Attr'),
        meta: { title: '平台属性管理', }
      },
      {
        path: 'spu',
        name: 'Spu',
        component: () => import('@/views/Product/Spu'),
        meta: { title: 'Spu管理', }
      },
      {
        path: 'sku',
        name: 'Sku',
        component: () => import('@/views/Product/Sku'),
        meta: { title: 'Sku管理', }
      },
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  // 因为注册的路由是“死的”，“活的”路由是根据不同用户（角色）可以展示不同的菜单。
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
