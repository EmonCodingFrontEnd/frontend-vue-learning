<template>
  <div class="app">
    <h3>我是App组件（祖）,{{ name }}--{{ price }}</h3>
    <Child> </Child>
  </div>
</template>

<script>
/**
 * provide与inject
 * 作用：实现祖孙（后代）组件间通信
 * 套路：父组件有一个provide选项来提供数据，子（后代）组件有一个inject选项来开始使用这些数据
 */
import Child from "@/components/Child";
import { reactive, toRefs, provide } from "vue";

export default {
  name: "App",
  components: { Child },
  setup() {
    let car = reactive({ name: "奔驰", price: "40W" });
    provide("car", car); // 给自己的后代组件传递数据
    return { ...toRefs(car) };
  },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 10px;
}
</style>