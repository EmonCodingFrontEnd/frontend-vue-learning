// 该文件用于创建Vuex中最为核心的store

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 使用插件
Vue.use(Vuex)

// 准备actions——用于响应组件中的动作
const actions = {
  /* jia: function (context, value) {
    console.log('actions->jia被调用了');
    context.commit('JIA', value);
  },
  jian: function (context, value) {
    console.log('actions->jian被调用了');
    context.commit('JIAN', value);
  }, */
  jiaOdd: function (context, value) {
    console.log('actions->jiaOdd被调用了');
    if (context.state.sum % 2) {
      context.commit('JIA', value);
    }
  },
  jiaWait: function (context, value) {
    console.log('actions->jiaOdd被调用了');
    setTimeout(() => {
      context.commit('JIA', value);
    }, 500);
  },
}
// 准备mutations——用于操作数据(state)
const mutations = {
  JIA: function (mutations, value) {
    console.log('actions->JIA被调用了');
    state.sum += value;
  },
  JIAN: function (mutations, value) {
    console.log('actions->JIAN被调用了');
    state.sum -= value;
  },
}
// 准备state——用于存储数据
const state = {
  sum: 0, // 当前的和
}

// 创建并暴露store
export default new Vuex.Store({
  actions: actions,
  mutations,
  state,
});