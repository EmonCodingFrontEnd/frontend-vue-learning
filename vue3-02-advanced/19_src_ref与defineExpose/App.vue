<template>
  <h2 ref="title2">你好</h2>
  <button @click="showLog">点我输出h2这个元素</button>
  <Person ref="ren"></Person>
</template>

<script lang="ts" setup  name="App">
import Person from './components/Person.vue';

import { ref } from "vue";

// 创建一个title2用于存储ref标记的内容
let title2 = ref()
let ren = ref()

function showLog() {
  // console.log(title2.value);
  console.log(ren.value);
}
</script>

<style scoped></style>