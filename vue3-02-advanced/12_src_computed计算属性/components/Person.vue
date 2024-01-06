<template>
  <div class="person">
    姓：<input type="text" v-model="firstName"><br>
    名：<input type="text" v-model="lastName"><br>
    全名：<input type="text" v-model="fullName">
    <!-- <button @click="changeName">修改名字</button> -->
    <!-- <button @click="changeAge">修改年龄</button> -->
  </div>
</template>

<script setup lang="ts" name="Person">
import { ref, computed } from "vue";

let firstName = ref('张');
let lastName = ref('三');

// 这么定义的计算属性是只读的
// let fullName = computed(() => {
//   return firstName.value + '-' + lastName.value;
// })

// 这么定义的计算属性是可读写的
let fullName = computed({
  get() {
    return firstName.value + '-' + lastName.value;
  },
  set(value) {
    const [fn, ln] = value.split("-");
    firstName.value = fn;
    lastName.value = ln;
  }
})
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