import { reqSearchList } from '@/api'

const state = {
  searchResult: {}
};
const actions = {
  // 获取search模块数据
  async getSearchList(context, value = {}) {
    const result = await reqSearchList(value);
    if (result.code === 200) {
      context.commit('GET_SEARCH_LIST', result.data);
    }
  }
};
const mutations = {
  GET_SEARCH_LIST(state, value) {
    state.searchResult = value;
  }
};
const getters = {
  goodsList(state) {
    return state.searchResult.goodsList || [];
  },
  trademarkList(state) {
    return state.searchResult.trademarkList;
  },
  attrsList(state) {
    return state.searchResult.attrsList;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
}