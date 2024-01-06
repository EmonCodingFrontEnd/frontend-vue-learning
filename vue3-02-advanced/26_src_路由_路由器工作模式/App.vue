<template>
  <div class="app">
    <Header />
    <h2 class="title">Vue路由测试</h2>
    <!-- 导航区 -->
    <div class="navigate">
      <RouterLink to="/home" active-class="active">首页</RouterLink>
      <RouterLink to="/news" active-class="active">新闻</RouterLink>
      <RouterLink to="/about" active-class="active">关于</RouterLink>
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<!-- 
  路由的两种模式：
  1、history模式
      优点：URL更加美观，不带有#，更接近传统的网站URL。
      缺点：后期项目上线，需要服务端配合处理路径问题，否则刷新会有404错误！
  2、hash模式
      优点：兼容性更好，因为不需要服务器端处理路径。
      缺点：URL带有#不太美观，且在SEO优化方面相对较差。
 -->
<script lang="ts" setup  name="App">
import { RouterView, RouterLink } from "vue-router";
import Header from '@/components/Header.vue'
</script>

<style scoped>
/* App */
.navigate {
  display: flex;
  justify-content: space-around;
  margin: 0 100px;
}

.navigate a {
  display: block;
  text-align: center;
  width: 90px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  background-color: gray;
  text-decoration: none;
  color: white;
  font-size: 18px;
  letter-spacing: 5px;
}

.navigate a.active {
  background-color: #64967E;
  color: #ffc268;
  font-weight: 900;
  text-shadow: 0 0 1px black;
  font-family: 微软雅黑;
}

.main-content {
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
  width: 90%;
  height: 400px;
  border: 1px solid;
}
</style>