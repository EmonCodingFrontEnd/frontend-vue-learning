<template>
  <!-- 组件的结构 -->
  <div>
    <h2>学生名称：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等等）
export default Vue.extend({
  name: "Student",
  data() {
    return {
      name: "张三",
      aage: 18,
    };
  },
});
</script>