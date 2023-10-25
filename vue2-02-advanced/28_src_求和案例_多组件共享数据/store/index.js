// 该文件用于创建Vuex中最为核心的store

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 使用插件
Vue.use(Vuex)

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

// 人员管理相关的配置
const personOptions = {
  namespaced: true,
  actions: {
    addPersonWang(context, value) {
      console.log('actions->addPersonWang被调用了');
      if (value.name.indexOf('王') === 0) {
        context.commit('ADD_PERSON', value);
      } else {
        alert('添加的人必须姓王！');
      }
    },
  },
  mutations: {
    ADD_PERSON: function (state, value) {
      console.log('mutations->ADD_PERSON被调用了');
      state.personList.unshift(value);
    },
  },
  state: {
    personList: [
      { id: '001', name: '张三' }
    ]
  },
  getters: {
    firstPersonName(state) {
      return state.personList[0].name;
    }
  }
}

// 创建并暴露store
export default new Vuex.Store({
  modules: {
    countAbout: countOptions,
    personAbout: personOptions
  }
});