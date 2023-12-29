<template>
  <h4>当前的x值是：{{ x.y }}</h4>
  <button @click="x = { y: 1 }">点我替换x对象</button>
  <hr />
  <h4>{{ person }}</h4>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长姓名</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { ref, reactive, toRefs, shallowRef, shallowReactive } from "vue";
export default {
  name: "Demo",
  setup() {
    // 数据
    let x = shallowRef({ y: 0 }); // 只考虑基本类型，对于对象类型的并不会触发响应式

    // let person = shallowReactive({ // 只考虑第一层数据的响应式
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // 返回一个对象（常用）
    return {
      x,
      person,
      ...toRefs(person),
    };
  },
};
</script>

<style scoped>
</style>