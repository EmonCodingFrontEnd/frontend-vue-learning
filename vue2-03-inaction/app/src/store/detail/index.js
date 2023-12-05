import { reqGoodsInfo, reqAddOrUpdateShopCart } from '@/api';
import { getUUID } from '@/utils/uuid_token'

// state:仓库，存储数据的地方
const state = {
  goodsInfo: {},
  // 有课临时身份
  uuid_token: getUUID()
};
// actions:处理actioin，可以书写自己的业务逻辑，也可以处理异步
const actions = {
  // 通过API里面的接口函数调用，向服务器发送请求，获取服务器的数据
  async getGoodsInfo(context, skuId) {
    const result = await reqGoodsInfo(skuId);
    if (result.code === 200) {
      context.commit('GET_GOODS_INFO', result.data);
    }
  },
  // 将产品添加到购物车中
  async addOrUpdateShopCart(context, { skuId, skuNum }) {
    const result = await reqAddOrUpdateShopCart(skuId, skuNum);
    if (result.code === 200) {
      return "ok";
    }
    return Promise.reject(new Error(result?.message || "failure"));
  },
};
// mutations: 修改state的唯一手段
const mutations = {
  GET_GOODS_INFO(state, value) {
    state.goodsInfo = value;
  },
};
// getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {
  // 路径导航简化的数据
  categoryView(state) {
    return state.goodsInfo.categoryView || {};
  },
  // 简化产品信息的数据
  skuInfo(state) {
    return state.goodsInfo.skuInfo || {};
  },
  // 产品售卖属性的简化
  spuSaleAttrList(state) {
    return state.goodsInfo.spuSaleAttrList || [];
  },
};

export default {
  state,
  actions,
  mutations,
  getters
}