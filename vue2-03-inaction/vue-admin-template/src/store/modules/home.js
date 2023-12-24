import request from '@/utils/request_mock'

// state:仓库，存储数据的地方
const state = {
  list: {}
};
// 处理actioin，可以书写自己的业务逻辑，也可以处理异步
const actions = {
  // 发送请求获取首页的mock数据
  async getData(context, value) {
    const result = await request({ url: "/home/list", method: "get" });
    if (result.code === 200) {
      context.commit("GET_DATA", result.data);
    }
  }
};
// mutations: 修改state的唯一手段
const mutations = {
  GET_DATA(state, value) {
    state.list = value;
  }
};
// getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}