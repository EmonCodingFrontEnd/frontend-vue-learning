<template>
  <Person a="哈哈" :list="personList"></Person>
</template>

<script lang="ts" setup  name="App">
import Person from './components/Person.vue';

import { reactive } from "vue";
import { type Persons } from "@/types";

// 方式一
// let personList: Persons = reactive([
//   { id: '01', name: '张三', age: 60 },
//   { id: '02', name: '李四', age: 18 },
//   { id: '03', name: '王五', age: 5 },
// ]);

// 方式二：推荐
let personList = reactive<Persons>([
  { id: '01', name: '张三', age: 60 },
  { id: '02', name: '李四', age: 18 },
  { id: '03', name: '王五', age: 5 },
]);
</script>

<style scoped></style>