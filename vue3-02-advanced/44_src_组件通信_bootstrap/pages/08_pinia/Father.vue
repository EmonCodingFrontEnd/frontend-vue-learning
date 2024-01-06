<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="container">
      <Child1 />
      <Child2 />
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
/**
 * vuex：集中式状态管理，可以实现任意组件之间通信！！！
 * 核心概念：state、mutations、actions、getters、modules
 * 
 * pinia：集中式状态管理，可以实现任意组件之间通信！！！
 * 核心概念：state、actions、getters
 * 
 * pinia写法：选择器API、组合式API
 */
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';
</script>

<style scoped>
.father {
  background-color: rgb(165, 165, 165);
  padding: 20px;
  border-radius: 10px;
}

.container {
  display: flex;
}
</style>
