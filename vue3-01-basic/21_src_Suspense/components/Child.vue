<template>
  <div class="child">
    <h3>我是Child组件</h3>
    {{ sum }}
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Child",
  async setup(props) {
    let sum = ref(0);
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ sum });
      }, 3000);
    });
  },
};
</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>