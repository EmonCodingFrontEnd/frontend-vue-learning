// 求和相关的配置
const countOptions = {
  namespaced: true,
  actions: {
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
  },
  mutations: {
    JIA: function (state, value) {
      console.log('mutations->JIA被调用了');
      state.sum += value;
    },
    JIAN: function (state, value) {
      console.log('mutations->JIAN被调用了');
      state.sum -= value;
    },
  },
  state: {
    sum: 0, // 当前的和
    school: '尚硅谷',
    subject: '前端',
  },
  getters: {
    bigSum(state) {
      return state.sum * 10;
    }
  }
}

export default countOptions;