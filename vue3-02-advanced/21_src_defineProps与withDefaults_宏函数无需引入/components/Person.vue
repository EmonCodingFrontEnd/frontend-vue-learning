<template>
  <div class="person">
    <ul>
      <li v-for="(person, index) in list" :key="person.id">
        {{ person.name }}--{{ person.age }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="Person">
import { defineProps, withDefaults } from "vue";
import { type Persons } from "@/types";

// 接收list
// defineProps(['list'])

// 接收list+限制类型
defineProps<{ list: Persons }>()

// 接收list+限制类型+限制必要性+指定默认值
// withDefaults(defineProps<{ list?: Persons }>(), {
//   list: () => [{ id: '00', name: '默认值·康师傅·王麻子·特仑苏', age: 0 }]
// });

// 接收list+保存
// const x = defineProps(['list']);
// console.log(x);


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