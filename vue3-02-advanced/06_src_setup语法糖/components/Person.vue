<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>地址：{{ address }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<!-- <script lang="ts">
export default {
  name: "Person",
  setup(props, ctx) {
    // 数据，原来是写在data中的，此时的name、age、tel都不是响应式的数据
    let name = '张三';
    let age = 18;
    let tel = '13888888888';
    let address = '北京昌平区宏福苑·宏福科技园';

    // 方法，注意，对非响应式数据修改，不会反馈到页面
    function changeName() { name = "zhangsan" }
    function changeAge() { age++ }
    function showTel() { alert(tel); }

    return {
      name, age,
      changeName, changeAge, showTel
    };
  },
};
</script> -->

<!-- 
  <script lang="ts"></script> 用来定义组件，比如组件名称！
  <script setup lang="ts"></script> 专门用来定义setup
  启用插件“vite-plugin-vue-setup-extend”后（1-安装，2-配置vite.config.ts），
    可以省略<script lang="ts"></script>的定义
    仅保留<script setup lang="ts"></script>，需要修改组件名时，添加name属性即可！
 -->
<script setup lang="ts" name="Person1234">
// 数据，原来是写在data中的，此时的name、age、tel都不是响应式的数据
let name = '张三';
let age = 18;
let tel = '13888888888';
let address = '北京昌平区宏福苑·宏福科技园';

// 方法，注意，对非响应式数据修改，不会反馈到页面
function changeName() { name = "zhangsan" }
function changeAge() { age++ }
function showTel() { alert(tel); }
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0px 5px;
}
</style>