<template>
  <!-- html -->
  <div class="app">
    <h1>你好啊</h1>
  </div>
</template>

<!-- 
  总结：
  - Vite项目中，index.html是项目的入口文件，在项目最外层。
  - 加载index.html后，Vite解析<script type="module" src="/src/main.ts"></script>指向的JavaScript
  - Vue3中是通过createApp函数创建一个应用实例。
 -->
<script lang="ts">
// JS或TS
export default {
  name: "App",
  // 组件名
};
</script>

<style scoped>
/* 样式 */
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>