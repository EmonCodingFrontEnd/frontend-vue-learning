import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqLogout } from '@/api';
import { setToken, getToken, removeToken } from '@/utils/token'

// state:仓库，存储数据的地方
const state = {
  code: '',
  token: getToken(),
  userInfo: {}
};
// actions:处理actioin，可以书写自己的业务逻辑，也可以处理异步
const actions = {
  // 获取验证码，该接口正常情况应该发送短信到客户手机上
  async getCode(context, phone) {
    const result = await reqGetCode(phone);
    if (result.code === 200) {
      context.commit('GET_CODE', result.data);
      return 'ok'
    } else {
      return Promise.reject(new Error(result?.message || "failure"));
    }
  },
  // 注册用户
  async userRegister(context, user) {
    const result = await reqUserRegister(user);
    if (result.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error(result?.message || "failure"));
    }
  },
  // 登录用户
  async userLogin(context, data) {
    const result = await reqUserLogin(data);
    if (result.code === 200) {
      context.commit('USER_LOGIN', result.data);
      // 持久化存储token
      setToken(result.data.token);
      return 'ok'
    } else {
      return Promise.reject(new Error(result?.message || "failure"));
    }
  },
  // 获取用户信息
  async getUserInfo(context, value) {
    const result = await reqUserInfo();
    if (result.code === 200) {
      context.commit('GET_USER_INFO', result.data);
      return 'ok'
    } else {
      return Promise.reject(new Error(result?.message || "failure"));
    }
  },
  // 退出登录
  async userLogout(context, value) {
    // 则向服务器发起一次请求，通知服务器清除token
    const result = await reqLogout();
    if (result.code === 200) {
      // action里面不能操作state，提交mutation操作state
      context.commit('CLEAR_USER_INFO');
      return 'ok'
    } else {
      return Promise.reject(new Error(result?.message || "failure"));
    }
  },
};
// mutations: 修改state的唯一手段
const mutations = {
  GET_CODE(state, value) {
    state.code = value;
  },
  USER_LOGIN(state, userInfo) {
    state.token = userInfo.token;
  },
  GET_USER_INFO(state, userInfo) {
    state.userInfo = userInfo;
  },
  // 清除本地数据
  CLEAR_USER_INFO(state) {
    // 把仓库中相关用户信息和本地存储都清空
    state.token = ''
    state.userInfo = {};
    removeToken();
  },
};
// getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {
};

export default {
  state,
  actions,
  mutations,
  getters
}