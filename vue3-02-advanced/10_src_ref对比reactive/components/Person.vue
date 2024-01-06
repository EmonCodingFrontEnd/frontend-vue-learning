<template>
  <div class="person">
    <h2>一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
    <button @click="changeBrand">修改汽车的品牌</button>
    <button @click="changePrice">修改汽车的价格</button>
    <button @click="changeCar">修改汽车</button>
    <hr>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import { ref, reactive } from 'vue';

// 数据
let car = reactive({ brand: '奔驰', price: 100 });
let sum = ref(0);

// 方法
function changeBrand() {
  car.brand = '奥拓';
}
function changePrice() {
  car.price += 1;
}
function changeCar() {
  /**
   * 若reactive定义car如下配置符合预期；
   * 若ref定义car，直接赋值给car也是生效的(car.value={})，因为是修改value属性的值；
   * 无论reactive还是ref，直接修改掉对象的地址，都会导致响应式失效！！！
   */
  // car = { brand: '奥拓', price: 1 }; // 会导致car无法响应式了
  // car = reactive({ brand: '奥拓', price: 1 }); // 会导致car无法响应式了
  Object.assign(car, { brand: '奥拓', price: 1 }); // 正确的写法
}
function changeSum() {
  sum.value++;
}
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