<template>
  <h4>当前求和为：{{ sum }}</h4>
  <button @click="sum++">点我++</button>
  <hr />
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}</h2>
  <h3 v-show="person.car">座驾信息：{{ person.car }}</h3>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增长姓名</button>
  <button @click="job.j1.salary++">涨薪</button>
  <button @click="showRawPerson">输出最原始的person</button>
  <button @click="addCar">给人添加一台车</button>
  <button @click="person.car.name += '!'">换车名</button>
  <button @click="changePrice">换车价</button>
</template>

<script>
import { ref, reactive, toRefs, toRaw, markRaw } from "vue";
export default {
  name: "Demo",
  setup() {
    // 数据
    let sum = ref(0);
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    function showRawPerson() {
      const p = toRaw(person); // toRaw-转换得到非响应式数据
      console.log(p);
    }

    function addCar() {
      let car = { name: "奔驰", price: 40 };
      person.car = markRaw(car); // 标记为非响应式数据，但值还是可以被改变的；应该使用到值本身不会被外部改变时，这里可以进一步控制也不会触发响应式！！！
    }

    // 注意：价格会改变，但不会响应式解析到页面；不过，若person其他属性变化导致页面重新解析，也会反映改变后的价格到页面！！！
    function changePrice() {
      person.car.price++;
      console.log(person.car);
    }

    // 返回一个对象（常用）
    return {
      sum,
      person,
      ...toRefs(person),
      showRawPerson,
      addCar,
      changePrice,
    };
  },
};
</script>

<style scoped>
</style>