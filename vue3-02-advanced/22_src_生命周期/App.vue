<template>
  <Person v-if="isShow"></Person>
  <button @click="isShow = !isShow">卸载</button>
</template>

<script lang="ts" setup  name="App">
import Person from './components/Person.vue';

import { ref, onMounted } from "vue";

let isShow = ref(true);

onMounted(() => {
  console.log("App=>onMounted");
});
</script>

<style scoped></style>