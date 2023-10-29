<template>
  <ul>
    <h2 :style="{ opacity }">欢迎学习Vue</h2>
    <li>news001 <input type="text" /></li>
    <li>news002 <input type="text" /></li>
    <li>news003 <input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  mounted() {
    console.log("News组件挂载完毕了");
  },
  beforeDestroy() {
    console.log("News组件即将被销毁");
  },
  activated() {
    console.log("News组件被激活了");
    this.timer = setInterval(() => {
      console.log("dd");
      this.opacity -= 0.01;
      if (this.opacity <= 0) {
        this.opacity = 1;
      }
    }, 16);
  },
  deactivated() {
    console.log("News组件失活了");
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>