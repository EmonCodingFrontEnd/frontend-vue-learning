<template>
  <button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>
  <Demo v-if="isShowDemo"></Demo>
</template>

<script>
/**
 * shallowRef 与 shallowReactive
 * shallowRef：只处理基本数据类型的响应式，不进行对象的响应式处理。
 * shallowReactive：只处理对象最外层属性的响应式（浅响应式）。
 * 什么时候使用？
 *    如果有一个对象数据，结构比较深，但变化时只是最外层属性变化===>shallowReactive
 *    如果有一个对象数据，后续功能不会修改该对象中的属性，而是生成新的对象来替换===>shallowRef。
 */
import { ref } from "vue";
import Demo from "./components/Demo.vue";
export default {
  name: "App",
  components: { Demo },
  setup() {
    let isShowDemo = ref(true);
    return { isShowDemo };
  },
};
</script>

<style scoped>
</style>