<template>
  <!-- 组件的结构 -->
  <div>
    <h2>学生名称：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>
import Vue from "vue";

// 组件交互相关的代码（数据、方法等等）
export default Vue.extend({
  name: "MyStudent",
  data() {
    return {
      name: "张三",
      age: 18,
    };
  },
});
</script>