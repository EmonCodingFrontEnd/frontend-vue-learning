<template>
  <div class="school">
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
// 引入一个混入
import { mixin, mixin2 } from "../mixin";

export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
      x: 666,
    };
  },
  mixins: [mixin, mixin2],
  mounted() {
    console.log("你好啊！来自于组件自身！");
  },
};
</script>