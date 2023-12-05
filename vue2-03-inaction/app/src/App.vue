<template>
  <div>
    <!-- 头部 -->
    <Header />
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在Home、Search显示，在登录、注册时隐藏 -->
    <!-- 底部 -->
    <Footer v-show="showFooter" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  computed: {
    showFooter() {
      return this.$route.meta.showFooter;
    },
  },
  components: {
    Header,
    Footer,
  },
  mounted() {
    // 派发一个action，获取尚品分类的三级列表数据
    this.$store.dispatch("getCategoryList");
  },
};
</script>

<style >
</style>
