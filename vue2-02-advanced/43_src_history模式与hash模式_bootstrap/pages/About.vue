<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  mounted() {
    console.log("About组件挂载完毕了");
  },
  beforeDestroy() {
    console.log("About组件即将被销毁");
  },
  // 通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log("About-beforeRouteEnter");
    if (to.meta.isAuth) {
      if (localStorage.getItem("school") === "atguigu") {
        next();
      } else {
        alert("学校名不对，无权限访问！");
      }
    }
  },
  // 通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log("About-beforeRouteLeave");
    next();
  },
};
</script>

<style>
</style>