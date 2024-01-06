<template>
  <div class="person">
    <h2>需求：当水温达到60度，或者水位达到80cm时，给服务器发请求</h2>
    <h2>当前水温：{{ temp }}℃</h2>
    <h2>当前水位：{{ height }}cm</h2>
    <button @click="changeTemp">水温+10</button>
    <button @click="changeHeight">水位+10</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import { ref, watch, watchEffect } from "vue";


// 数据
let temp = ref(10);
let height = ref(0);

// 方法
function changeTemp() {
  temp.value += 10
}
function changeHeight() {
  height.value += 10
}

// watch([temp, height], (newValue, oldValue) => {
//   let [newTemp, newHeight] = newValue;
//   if (newTemp >= 60 || newHeight >= 80) {
//     console.log("给服务器发送请求！");
//   }
// });

/**
 * 立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行该函数。
 * watch对比watchEffect：
 * 1、都能监听响应式数据的变化，不同的是监听数据变化的方式不同；
 * 2、watch：要明确指出监视的数据；
 * 3、watchEffect：不用明确指出监视的数据（函数中用到哪些属性，就监视哪些属性）；
 */
watchEffect(() => {
  if (temp.value >= 60 || height.value >= 80) {
    console.log("给服务器发送请求！");
  }
});
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0px 5px;
}
</style>