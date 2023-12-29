<template>
  <button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>
  <Demo v-if="isShowDemo"></Demo>
  <hr />
  <Test></Test>
</template>

<script>
/**
 * 什么是hook？——本质是一个函数，把setup函数中使用的Composition API进行了封装。
 * 类似于Vue2.x中的mixin。
 * 自定义hook的优势：复用代码，让setup中的逻辑更清楚易懂！！！
 */
import { ref } from "vue";
import Demo from "./components/Demo.vue";
import Test from "./components/Test.vue";
export default {
  name: "App",
  components: { Demo, Test },
  setup() {
    let isShowDemo = ref(true);
    return { isShowDemo };
  },
};
</script>

<style scoped>
</style>