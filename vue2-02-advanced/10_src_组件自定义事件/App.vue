<template>
  <div class="app">
    <h1>{{ msg }}，学生姓名是：{{ studentName }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName"></School>
    <!-- 第一种方式（使用@或v-on）通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 -->
    <!-- <Student @atguigu="getStudentName" @demo="m1"></Student> -->
    <!-- <Student v-on:atguigu.once="getStudentName"></Student> -->
    <!-- 第二种方式（使用ref）通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 -->
    <!-- 通过native修饰符，为组件添加原生事件 -->
    <Student ref="student" @click.native="show"></Student>
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: { School, Student },
  data() {
    return {
      msg: "你好啊！",
      studentName: "",
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("App收到了学校名" + name);
    },
    getStudentName(name, ...args) {
      console.log("getStudentName被调用了！" + name, args);
      this.studentName = name;
    },
    m1() {
      console.log("demo被调用了！");
    },
    show() {
      console.log("show被调用了！");
    },
  },
  mounted() {
    // 绑定自定义事件
    setTimeout(() => {
      /**
       * 注意，这里的回调函数 this.getStudentName 可以是箭头函数；
       * 但如果是普通函数，this指向的是Student，而不是App。
       */
      this.$refs.student.$on("atguigu", this.getStudentName);
      // this.$refs.student.$once("atguigu", this.getStudentName);
    }, 3000);
  },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>