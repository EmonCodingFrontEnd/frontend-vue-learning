<template>
  <div class="person">
    <h1>情况四：监视【ref】或【reactive】定义的【对象类型】的某个属性数据！</h1>
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

// 情况四：监视【ref】或【reactive】定义的【对象类型】中的某个基本类型的属性，要写成函数式。
// const stopWatch = watch(() => person.name, (newValue, oldValue) => {
//   console.log('person变化了！', newValue, oldValue);
// });

/**
 * 情况四：监视【ref】或【reactive】定义的【对象类型】中的某个对象类型的属性，建议写成函数式。
 * 备注：若直接监控对象类型的属性，仅能监控到对象类型属性中的某个属性的变化，而无法监控对象类型属性本身的变化；
 * 若写成函数式，仅能监控到对象类型属性本身的变化；此时，再开启深度监控后，都能检测到了！！！【推荐】
 */
const stopWatch = watch(() => person.car, (newValue, oldValue) => {
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