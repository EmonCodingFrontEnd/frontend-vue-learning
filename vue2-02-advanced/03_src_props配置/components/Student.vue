<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge + 1 }}</h2>
    <h2>学生身高：{{ height }}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "我是一个尚硅谷的学生",
      myAge: this.age,
    };
  },
  methods: {
    updateAge() {
      // this.age = 22; // 尽量不要直接修改props属性
      this.myAge++;
    },
  },
  // 简单声明接收
  // props: ["name", "sex", "age", "phone"],

  // 接收的同时对数据进行类型限制
  // props: {
  //   name: String,
  //   age: Number,
  //   sex: String,
  // },

  // 接收的同时对数据进行类型限制+默认值的指定+必要性的限制
  props: {
    name: {
      type: String, // name的类型
      required: true, // name是必要的
    },
    age: {
      type: Number,
      default: 99, // 默认值
    },
    sex: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      default() {
        return 1.75;
      },
    },
  },
};
</script>