<template>
  <button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>
  <Demo v-if="isShowDemo"></Demo>
</template>

<script>
/**
 * readonly：让一个响应式数据变为只读的（深只读）。
 * shallowReadonly：让一个响应式数据变为只读的（浅只读）。
 * 应用场景：不希望数据被修改时。
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