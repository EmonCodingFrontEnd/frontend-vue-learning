import { defineStore } from "pinia";

export const useCountStore = defineStore('count', {
  // 真正存储数据的地方
  state() {
    return { sum: 1, school: 'atguigu', address: '宏福科技园' }
  },
  // actions里面放置的是一个一个的方法，用于响应组件中的“动作”
  actions: {
    increment(value: number) {
      // 修改数据（this是当前的store）
      if (this.sum < 10) {
        this.sum += value;
      }
    }
  }
});