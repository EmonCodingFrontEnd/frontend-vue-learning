<template>
  <div class="child">
    <h3>我是Child组件（子）</h3>
    <Son></Son>
  </div>
</template>

<script>
import Son from "@/components/Son";
import { inject } from "vue";

export default {
  name: "Child",
  components: { Son },
  setup() {
    console.log(inject("car"));
  },
};
</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>