<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我提示学校名称</button>
  </div>
</template>

<script>
// 组件交互相关的代码（数据、方法等等）
// export const school = Vue.extend({ // 第一种暴露方式：分别暴露
export default Vue.extend({
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      address: "北京仓平",
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
});
// export { school }; // 第二种暴露方式：统一暴露
// export default { school }; // 第三种暴露方式：默认暴露【推荐】
</script>

<style lang="css">
/* 组件的样式 */
.demo {
  background-color: orange;
}
</style>