<template>
  <Demo> </Demo>
</template>

<script>
/**
 * 与Vue2.x中的watch配置功能一致
 * 两个小“坑”：
 *    1、监视reactive定义的响应式数据时：oldValue无法正确获取、强制开启了深度监视（deep配置失效）。
 *    2、监视reactive定义的响应式数据中某个对象属性时：deep配置有效。
 */
import Demo from "./components/Demo.vue";
export default {
  name: "App",
  components: { Demo },
  setup() {},
};
</script>

<style scoped>
</style>