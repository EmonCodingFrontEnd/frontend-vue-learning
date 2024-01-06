<template>
  <div class="child">
    <h1>{{ infoStore.count }}--{{ total }}</h1>
    <button @click="updateCount(10)">点击我修改仓库数据</button>
  </div>
</template>
  
<script setup lang='ts' name="Child1">
import useInfoStore from '@/pages/08_pinia/store/modules/info'
import { storeToRefs } from 'pinia';

// 获取小仓库对象
let infoStore = useInfoStore();

function updateCount(increStep: number) {
  infoStore.updateNum(increStep);
}

const { total } = storeToRefs(infoStore);
</script>
  
<style lang="css" scoped>
.child {
  width: 200px;
  height: 200px;
  background-color: yellowgreen;
}
</style>