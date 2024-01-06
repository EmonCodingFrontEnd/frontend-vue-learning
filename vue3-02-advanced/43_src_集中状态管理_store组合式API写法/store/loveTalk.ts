import { defineStore } from "pinia";
import axios from 'axios';
import { nanoid } from "nanoid";
import { reactive } from "vue";

// 配置项式
// export const useLoveTalkStore = defineStore('loveTalk', {
//   // 真正存储数据的地方
//   state() {
//     const defaultTalkList = [
//       { id: '01', title: '今天你有点怪，哪里怪？怪好看的！' },
//       { id: '02', title: '草莓、蓝莓、蔓越莓，今天想我了没？' },
//       { id: '03', title: '心里给你留了一块地，我的死心塌地！' },
//     ]
//     return {
//       talkList: JSON.parse(localStorage.getItem("talkList") as string) || defaultTalkList
//     }
//   },
//   actions: {
//     async getATalk() {
//       let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json');
//       this.talkList.unshift({ id: nanoid(), title });
//     }
//   }
// });

// 组合式【推荐】
export const useLoveTalkStore = defineStore('loveTalk', () => {
  const defaultTalkList = [
    { id: '01', title: '今天你有点怪，哪里怪？怪好看的！' },
    { id: '02', title: '草莓、蓝莓、蔓越莓，今天想我了没？' },
    { id: '03', title: '心里给你留了一块地，我的死心塌地！' },
  ]

  // talkList 相当于 state
  const talkList = reactive(JSON.parse(localStorage.getItem("talkList") as string) || defaultTalkList);

  // getATalk 相当于actions
  async function getATalk() {
    let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json');
    talkList.unshift({ id: nanoid(), title });
  }

  return { talkList, getATalk }
});