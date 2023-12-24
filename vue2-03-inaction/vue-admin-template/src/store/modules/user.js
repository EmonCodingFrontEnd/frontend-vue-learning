// 引入登录|退出登录|获取用户信息的接口函数
import { login, logout, getInfo } from '@/api/user'
// 获取token|设置token|删除token
import { getToken, setToken, removeToken } from '@/utils/auth'
// 路由模块当中重置路由的方法
import { constantRoutes, asyncRoutes, anyRoutes, resetRouter } from '@/router'
import router from '@/router';

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '', // 用户名
    avatar: '', // 用户头像
    buttons: [], // 用户按钮权限
    roles: [], // 用户角色信息权限
    routes: [], // 用户菜单权限
    // 对比之后【项目中已有的异步路由，与服务器返回的标记信息进行对比最终需要展示的路由】
    resultAsyncRoutes: [],
    // 用户最终看到的路由
    resultAllRoutes: [],
  }
}

const state = getDefaultState()

// 规范上、稳定性保证上：唯一能修改state的地方
const mutations = {
  // 重置state
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  // 存储token
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  // 存储用户信息
  SET_USERINFO: (state, userInfo) => {
    const { name, avatar, buttons, roles, routes } = userInfo

    state.name = name;
    state.avatar = avatar;
    state.buttons = buttons || [];
    state.roles = roles || [];
    state.routes = routes || [];
  },
  // 最终计算出来的一部路由
  SET_RESULTASYNCROUTES: (state, asyncRoutes) => {
    // 计算出当前用户需要展示的异步路由
    state.resultAsyncRoutes = asyncRoutes;
    // 计算出当前用户需要展示的所有路由
    state.resultAllRoutes = constantRoutes.concat(asyncRoutes, anyRoutes);
    // 给路由器添加新的路由
    router.addRoutes(state.resultAllRoutes);
  }
}

// 定义一个菜单对比函数
const computedAsyncRoutes = (asyncRoutes, routes) => {
  // 过滤出当前用户【超级管理员|普通员工】需要展示的异步路由
  return asyncRoutes.filter(item => {
    if (routes.indexOf(item.name) !== -1) {
      // 别忘记二级、三级、四级等子路由
      if (item.children && item.children.length > 0) {
        item.children = computedAsyncRoutes(item.children, routes);
      }
      return true;
    }
    return false;
  });
}

const actions = {
  // user login 这里是在处理登录业务
  async login({ commit }, userInfo) {
    const { username, password } = userInfo
    /* return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    }) */
    const result = await login({ username: username.trim(), password: password });
    // 注意：当前登录请求现在使用mock数据，mock数据code是20000
    if (result.code === 20000) {
      commit('SET_TOKEN', result.data.token)
      setToken(result.data.token);
      return "ok";
    } else {
      return Promise.reject(new Error("fail"));
    }
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        // 获取用户信息：返回数据包含=>用户名name、用户头像avatar、routes【返回的标志：不同的用户应该展示哪些标记】
        const { data } = response
        if (!data) {
          return reject('Verification failed, please Login again.')
        }
        // vuex存储用户全部的信息
        commit('SET_USERINFO', data)
        commit('SET_RESULTASYNCROUTES', computedAsyncRoutes(asyncRoutes, data.routes));
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

