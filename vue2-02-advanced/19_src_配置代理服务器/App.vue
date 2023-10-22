<template>
  <div>
    <button @click="getStudents">获取学生信息</button><br />
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  methods: {
    getStudents() {
      axios.get("http://localhost:8080/api/students").then(
        (res) => {
          console.log("请求成功了！", res.data);
        },
        (err) => {
          console.log("发生错误了！", err.message);
        }
      );
    },
    getCars() {
      axios.get("http://localhost:8080/demo/cars").then(
        (res) => {
          console.log("请求成功了！", res.data);
        },
        (err) => {
          console.log("发生错误了！", err.message);
        }
      );
    },
  },
};
</script>

<style>
</style>