import axios from "axios";
import { nanoid } from "nanoid";

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
    addPersonServer(context) {
      axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(res => {
        const value = { id: nanoid(), name: res.data };
        context.commit('ADD_PERSON', value);
      }, err => {
        alert(err.message);
      })
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

export default personOptions;