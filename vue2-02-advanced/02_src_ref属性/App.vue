<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom" ref="btn">点我输出上方的DOM元素</button>
    <School ref="sch"></School>
  </div>
</template>

<script>
import School from "./components/School.vue";

export default {
  name: "App",
  data() {
    return {
      msg: "欢迎学习Vue！",
    };
  },
  methods: {
    showDom() {
      console.log("@@", this.$refs.title); // 真是DOM元素
      console.log("@@", this.$refs.btn); // 真是DOM元素
      console.log("@@", this.$refs.sch); // School组件的实例对象（vc）
    },
  },
  components: { School },
};
</script>

<style>
</style>