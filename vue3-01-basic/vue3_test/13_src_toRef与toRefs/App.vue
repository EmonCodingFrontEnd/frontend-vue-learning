<template>
  <button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>
  <Demo v-if="isShowDemo"></Demo>
</template>

<script>
/**
 * toRef
 * 作用：创建一个ref对象，其value值指向另一个对象中的某个属性。
 * 语法：const name = toRef(person, 'name);
 * 应用：要将响应式对象中的某个属性单独提供给外部使用时。
 * 扩展：toRefs与toRef功能一致，但可以批量创建多个ref对象，语法：toRefs(person)
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