import { defineStore } from "pinia";

export const useLoveTalkStore = defineStore('loveTalk', {
  // 真正存储数据的地方
  state() {
    return {
      talkList: [
        { id: '01', title: '今天你有点怪，哪里怪？怪好看的！' },
        { id: '02', title: '草莓、蓝莓、蔓越莓，今天想我了没？' },
        { id: '03', title: '心里给你留了一块地，我的死心塌地！' },
      ]
    }
  }
});