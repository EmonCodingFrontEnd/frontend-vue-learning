<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h3>工作种类：{{ job.type }}</h3>
  <h3>工作薪水：{{ job.salary }}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
/**
 * ref函数
 * 作用：定义一个响应式数据
 * 语法：const xxx = ref(initValue);
 *    1、创建一个包含响应式数据的引用对象（reference对象，简称ref对象）。
 *    2、JS中操作数据：xxx.value
 *    3、模板中读取数据：不需要.value，直接：<div>{{xxx}}</div>
 * 备注：
 *    1、接收的数据可以是：基本类型、也可以是对象类型。
 *    2、基本类型的数据：响应式依然是靠Object.defineProperty()的get与set完成的。
 *    3、对象类型的数据：内部“求助”了Vue3.0中的一个新函数——reactive函数。
 */
import { ref } from "vue";
export default {
  name: "App",
  setup(props) {
    // 数据
    let name = ref("张三");
    let age = ref(18);
    let job = ref({
      type: "前端工程师",
      salary: "30k",
    });

    // 方法
    function changeInfo() {
      name.value = "李四";
      age.value = 48;
      job.value.type = "UI设计师";
      job.value.salary = "60k";
    }

    // 返回一个对象（常用）
    return {
      name,
      age,
      job,
      changeInfo,
    };
  },
};
</script>

<style scoped>
</style>