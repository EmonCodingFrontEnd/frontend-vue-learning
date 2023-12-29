<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Child> </Child>
  </div>
</template>

<script>
/**
 * 什么是Teleport？——Teleport是一种能够将我们组件html结构移动到指定位置的技术。
 */
import Child from "@/components/Child";

export default {
  name: "App",
  components: { Child },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 10px;
}
</style>