<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Person",
  beforeCreate() {
    console.log('beforeCreate');
  },
  setup(props, ctx) {
    // console.log(this); // setup函数中this时undefined，Vue3中已经弱化this了

    // 数据，原来是写在data中的，此时的name、age、tel都不是响应式的数据
    let name = '张三';
    let age = 18;
    let tel = '13888888888';

    // 方法，注意，对非响应式数据修改，不会反馈到页面
    function changeName() { name = "zhangsan" }
    function changeAge() { age++ }
    function showTel() { alert(tel); }

    return {
      name, age,
      changeName, changeAge, showTel
    }
  },
};
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