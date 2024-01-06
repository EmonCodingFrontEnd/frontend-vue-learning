<template>
  <div class="person">
    <h1>情况五：监视签名4种的多个数据！</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeCar1">修改第一台车</button>
    <button @click="changeCar2">修改第二台车</button>
    <button @click="changeCar">修改整个车</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import { reactive, watch } from "vue";

// 数据
let person = reactive({ name: '张三', age: 18, car: { c1: '奔驰', c2: '宝马' } });

// 方法
function changeName() {
  person.name += '~';
}
function changeAge() {
  person.age++;
}
function changeCar1() {
  person.car.c1 = '奥迪';
}
function changeCar2() {
  person.car.c2 = '大众';
}
function changeCar() {
  person.car = { c1: '雅迪', c2: '爱玛' };
}

// 情况五：监视签名4种的多个数据！如下示例，仅能监控到name、car1、car2的变化
const stopWatch = watch([() => person.name, person.car], (newValue, oldValue) => {
  console.log('person变化了！', newValue, oldValue);
}, { deep: true });
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