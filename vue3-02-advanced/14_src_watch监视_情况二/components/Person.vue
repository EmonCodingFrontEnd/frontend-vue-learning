<template>
  <div class="person">
    <h1>情况二：监视【ref】定义的【对象类型】数据，监视的是对象的地址值；</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改人</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import { ref, watch } from "vue";

// 数据
let person = ref({ name: '张三', age: 18 });

// 方法
function changeName() {
  person.value.name += '~';
}
function changeAge() {
  person.value.age++;
}
function changePerson() {
  person.value = { name: '李四', age: 90 };
}

/**
 * 情况二：监视【ref】定义的【对象类型】数据，监视的是对象的地址值；
 * 若想监视对象内部属性的变化，需要手动开启深度监视
 * 
 * 注意：
 * 若修改的是ref定义的对象中的属性，newValue和oldValue都是新值，因为它们是同一个对象。
 * 若修改整个ref定义的对象，newValue是新值，oldValue是旧值，因为不是同一个对象了。
 */
const stopWatch = watch(person, (newValue, oldValue) => {
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