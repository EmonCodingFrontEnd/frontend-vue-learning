<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Suspense>
      <!-- 默认加载的内容 -->
      <template v-slot:default>
        <Child> </Child>
      </template>
      <!-- 网速过慢或者异步组件数据加载过慢时展示的内容 -->
      <template v-slot:fallback>
        <h3>请稍等，加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
/**
 * Suspense：
 *  等待异步组件时渲染一些额外内容，让应用有更好的用户体验。
 */
// import Child from "@/components/Child"; // 静态引入
const Child = defineAsyncComponent(() => import("@/components/Child")); // 异步动态引入
import { defineAsyncComponent } from "vue";

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