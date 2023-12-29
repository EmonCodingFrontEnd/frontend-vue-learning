<template>
  <button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>
  <Demo v-if="isShowDemo"></Demo>
</template>

<script>
/**
 * toRaw 与 markRaw
 * toRaw:
 *    作用：将一个由reactive生成的响应式对象，转换为普通对象。
 *    使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。
 * markRaw：
 *  作用：标记一个对象，使其永远不会再称为响应式对象。
 *  应用场景：
 *    1、有些值不应该被设置为响应式的，例如复杂的第三方类库等。
 *    2、当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。
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