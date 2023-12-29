<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h3>工作种类：{{ person.job.type }}</h3>
  <h3>工作薪水：{{ person.job.salary }}</h3>
  <h3>爱好：{{ person.hobby }}</h3>
  <h3>测试的数据c：{{ person.job.a.b.c }}</h3>
  <button @click="changeInfo">修改人的信息</button>
  <button @click="addSex">添加一个sex属性</button>
  <button @click="deleteName">删除一个name属性</button>
</template>

<script>
/**
 * reactive函数：
 * 作用：定义一个对象类型的响应式数据（基本类型不要用它，要用ref函数）
 * 语法：const 代理对象 = reactive(源对象)接收一个对象（或数组），返回一个代理对象（proxy对象）
 * reactive定义的响应式数据时“深层次的”。
 * 内部基于ES6的Proxy实现，通过代理对象操作源对象内部数据进行操作。
 */
import { reactive } from "vue";
export default {
  name: "App",
  setup(props) {
    // 数据
    /* let name = ref("张三");
    let age = ref(18);
    let job = reactive({
      type: "前端工程师",
      salary: "30k",
      a: { b: { c: 666 } },
    });
    let hobby = reactive(["抽烟", "喝酒", "烫头"]); */

    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        type: "前端工程师",
        salary: "30k",
        a: { b: { c: 666 } },
      },
      hobby: ["抽烟", "喝酒", "烫头"],
    });

    // 方法
    function changeInfo() {
      /* name.value = "李四";
      age.value = 48;
      job.type = "UI设计师";
      job.salary = "60k";
      job.a.b.c = 888;
      hobby[0] = "学习"; */
      person.name = "李四";
      person.age = 48;
      person.job.type = "UI设计师d";
      person.job.salary = "60k";
      person.job.a.b.c = 888;
      person.hobby[0] = "学习";
    }
    function addSex() {
      person.sex = "男";
    }
    function deleteName() {
      delete person.name;
    }

    // 返回一个对象（常用）
    return {
      /* name,
      age,
      hobby,
      job, */
      person,
      changeInfo,
      addSex,
      deleteName,
    };
  },
};
</script>

<style scoped>
</style>