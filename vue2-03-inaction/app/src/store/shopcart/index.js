import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from '@/api';

// state:仓库，存储数据的地方
const state = {
  cartInfoList: []
};
// actions:处理actioin，可以书写自己的业务逻辑，也可以处理异步
const actions = {
  // 获取购物车列表数据
  async getCartList(context) {
    const result = await reqCartList();
    if (result.code === 200) {
      context.commit('GET_CART_LIST', result.data);
    }
  },
  // 获取购物车列表数据
  async deleteCartListBySkuId(context, skuId) {
    const result = await reqDeleteCartById(skuId);
    if (result.code === 200) {
      return "ok";
    }
    return Promise.reject(new Error(result?.message || "failure"));
  },
  // 修改购物车某个产品的选中状态
  async updateCheckedBySkuId(context, { skuId, isChecked }) {
    const result = await reqUpdateCheckedById(skuId, isChecked);
    if (result.code === 200) {
      return "ok";
    }
    return Promise.reject(new Error(result?.message || "failure"));
  },
  // 删除全部勾选的产品
  deleteAllCheckedCart(context) {
    let promiseAll = [];
    state.cartInfoList.forEach(item => {
      if (item.isChecked === 1) {
        let promise = context.dispatch("deleteCartListBySkuId", item.skuId);
        promiseAll.push(promise);
      }
    })
    return Promise.all(promiseAll);
  },
  // 修改全部产品的状态
  updateAllCartIsChecked(context, isChecked) {
    let promiseAll = [];
    state.cartInfoList.forEach(item => {
      let promise = context.dispatch("updateCheckedBySkuId", { skuId: item.skuId, isChecked });
      promiseAll.push(promise);
    })
    return Promise.all(promiseAll);
  }
};
// mutations: 修改state的唯一手段
const mutations = {
  GET_CART_LIST(state, value) {
    if (value[0]) {
      state.cartInfoList = value[0].cartInfoList;
    } else {
      state.cartInfoList = []; // 保证删除后，反查不到购物车数据时，触发购物车数据变化，进而触发页面变化
    }
  },
};
// getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}