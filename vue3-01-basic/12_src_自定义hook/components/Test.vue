<template>
  <h2>我是Test组件</h2>
  <h2>当前点击时鼠标的坐标为：x={{ point.x }} y={{ point.y }}</h2>
</template>

<script>
import usePoint from "@/hooks/usePoint";
export default {
  name: "Test",
  setup() {
    // 数据
    let point = usePoint();

    // 返回一个对象（常用）
    return {
      point,
    };
  },
};
</script>

<style scoped>
</style>