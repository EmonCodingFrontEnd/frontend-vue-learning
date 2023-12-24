<template>
  <div>
    <h3>我是父组件（APP）</h3>
    <h3>style的scoped属性会给组件的标签新增一个自定义属性</h3>
    <Child></Child>
    <Child2></Child2>
  </div>
</template>

<script>
import Child from "./Child";
import Child2 from "./Child2";

export default {
  name: "DeepSelector深度选择器",
  components: { Child, Child2 },
};
</script>

<style scoped>
/* 
  深度选择器，在父组件scoped情况下，可以横跨子组件传递样式
  >>>       原生CSS深度选择器
  /deep/    less
  ::v-deep  scss
*/
* >>> h3 {
  color: red;
}
</style>