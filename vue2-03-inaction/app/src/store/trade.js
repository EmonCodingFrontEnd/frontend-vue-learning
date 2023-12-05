import { reqUserAddressInfo, reqOrderInfo } from '@/api';

// state:仓库，存储数据的地方
const state = {
  address: [], orderInfo: {}
};
// actions:处理actioin，可以书写自己的业务逻辑，也可以处理异步
const actions = {
  // 获取用户地址信息
  async getUserAddress(context) {
    const result = await reqUserAddressInfo();
    if (result.code === 200) {
      // action里面不能操作state，提交mutation操作state
      context.commit("GET_USER_ADDRESS", result.data);
      return 'ok'
    } else {
      return Promise.reject(new Error(result?.message || "failure"));
    }
  },
  // 获取商品清单
  async getOrderInfo(context) {
    const result = await reqOrderInfo();
    if (result.code === 200) {
      // action里面不能操作state，提交mutation操作state
      context.commit("GET_ORDER_INFO", result.data);
      return 'ok'
    } else {
      return Promise.reject(new Error(result?.message || "failure"));
    }
  },
};
// mutations: 修改state的唯一手段
const mutations = {
  GET_USER_ADDRESS(state, address) {
    state.address = address;
  },
  GET_ORDER_INFO(state, orderInfo) {
    state.orderInfo = orderInfo;
  }
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