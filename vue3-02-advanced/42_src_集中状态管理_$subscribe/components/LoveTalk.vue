<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="(talk, index) in talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
import { useLoveTalkStore } from "@/store/loveTalk";
import { storeToRefs } from "pinia";

// 数据
let loveTalkStore = useLoveTalkStore();
const { talkList } = storeToRefs(loveTalkStore);

loveTalkStore.$subscribe((mutate, state) => {
  console.log("loveTalkStore里面保存的数据发生了变化！", mutate, state);
  localStorage.setItem("talkList", JSON.stringify(state.talkList));
})

// 方法
function getLoveTalk() {
  loveTalkStore.getATalk();
}
</script>

<style lang="css" scoped>
.talk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>
