<template>
  <div class="school">
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "我是一个尚硅谷的学生",
      name: "张三",
      sex: "男",
      age: 18,
    };
  },
};
</script>