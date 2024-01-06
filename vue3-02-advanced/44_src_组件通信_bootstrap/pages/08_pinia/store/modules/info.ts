// 定义info小仓库
import { defineStore } from "pinia";

const useInfoStore = defineStore('info', {
  // 真正存储数据的地方
  state() {
    return {
      count: 99,
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  actions: {
    // 注意：函数没有context上下文对象；没有commit，也没有mutations去修改数据
    updateNum(increStep: number) {
      this.count += increStep;
    }
  },
  getters: {
    total: state => state.arr.reduce((pre, cur) => pre + cur, 0), // 方式一
    total2(): number { return this.arr.reduce((pre, cur) => pre + cur, 0); },// 方式二
    total3(state) { return this.arr.reduce((pre, cur) => pre + cur, 0); }// 方式三
  }
});

export default useInfoStore;