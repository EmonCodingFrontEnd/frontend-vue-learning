<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="(talk, index) in loveTalkStore.talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
import { useLoveTalkStore } from "@/store/loveTalk";

// 数据
let loveTalkStore = useLoveTalkStore();

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
