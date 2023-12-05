import { reqCategoryList, reqBannerList, reqFloorList } from '@/api';

// state:仓库，存储数据的地方
const state = {
  categoryList: [],
  bannerList: [],
  floorList: [],
};
// actions:处理actioin，可以书写自己的业务逻辑，也可以处理异步
const actions = {
  // 通过API里面的接口函数调用，向服务器发送请求，获取服务器的数据
  async getCategoryList(context, value) {
    const result = await reqCategoryList();
    if (result.code === 200) {
      context.commit('GET_CATEGORY_LIST', result.data);
    }
  },
  // 获取首页轮播图的数据
  async getBannerList(context, value) {
    const result = await reqBannerList();
    if (result.code === 200) {
      context.commit('GET_BANNER_LIST', result.data);
    }
  },
  // 获取首页楼层的数据
  async getFloorList(context, value) {
    const result = await reqFloorList();
    if (result.code === 200) {
      context.commit('GET_FLOOR_LIST', result.data);
    }
  }
};
// mutations: 修改state的唯一手段
const mutations = {
  GET_CATEGORY_LIST(state, value) {
    state.categoryList = value;
  },
  GET_BANNER_LIST(state, value) {
    state.bannerList = value;
  },
  GET_FLOOR_LIST(state, value) {
    state.floorList = value;
  },
};
// getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {};

export default {
  state,
  actions,
  mutations,
  getters
}