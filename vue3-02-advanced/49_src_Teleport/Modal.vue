<template>
  <button @click="isShow = true">展示弹窗</button>
  <Teleport to="body">
    <div class="modal" v-show="isShow">
      <h2>我是弹窗的标题</h2>
      <p>我是弹窗的内容</p>
      <button @click="isShow = false">关闭弹窗</button>
    </div>
  </Teleport>
</template>
  
<script setup lang='ts' name="Modal">
import { ref } from "vue";

let isShow = ref(false);
</script>
  
<style lang="css" scoped>
.modal {
  width: 200px;
  height: 150px;
  background-color: skyblue;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 0 0 5px;
  text-align: center;
  position: fixed;
  /* 参考定位元素 */
  left: 50%;
  top: 35%;
  /* 参考自身 */
  transform: translate(-50%, -50%);
}
</style>