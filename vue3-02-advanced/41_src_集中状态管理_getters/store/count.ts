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
  },
  getters: {
    // 若不用this，可以用箭头函数
    bigSum: state => state.sum * 10
    ,
    // 若使用this，需要如下处理
    upperSchool(): string {
      return this.school.toUpperCase();
    },
    // 若接收state参数，无需指定返回值类型
    newAddress(state) {
      return `北京市，${this.address}`;
    }
  }
});