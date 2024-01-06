<template>
  <div class="child">
    <h1>{{ todoStore.todos.length }}--{{ total }}</h1>
    <div @click="updateTodo" title="点我啊" style="cursor: pointer;background-color: black;color: white;">
      {{ todoStore.todos }}
    </div>
  </div>
</template>
  
<script setup lang='ts' name="Child2">
import useTodoStore from '@/pages/08_pinia/store/modules/todo'
import { storeToRefs } from 'pinia';

// 引入组合式API函数仓库
let todoStore = useTodoStore();

const updateTodo = () => { todoStore.updateTodo() }

const { total } = storeToRefs(todoStore);
</script>
  
<style lang="css" scoped>
.child {
  width: 200px;
  height: 200px;
  background-color: hotpink;
}
</style>