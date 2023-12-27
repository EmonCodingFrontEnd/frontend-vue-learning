<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
</template>

<script>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
export default {
  name: "Demo",
  setup() {
    // 数据
    let sum = ref(0);

    console.log("--setup--");
    // 通过组合式API的形式去使用生命周期钩子
    onBeforeMount(() => {
      console.log("--onBeforeMount--");
    });
    onMounted(() => {
      console.log("--onMounted--");
    });
    onBeforeUpdate(() => {
      console.log("--onBeforeUpdate--");
    });
    onUpdated(() => {
      console.log("--onUpdated--");
    });
    onBeforeUnmount(() => {
      console.log("--onBeforeUnmount--");
    });
    onUnmounted(() => {
      console.log("--onUnmounted--");
    });

    // 返回一个对象（常用）
    return {
      sum,
    };
  },
  // 通过配置项的形式使用生命周期钩子
  //#region
  beforeCreate() {
    console.log("--config--beforeCreate--");
  },
  created() {
    console.log("--config--created--");
  },
  beforeMount() {
    console.log("--config--beforeMount--");
  },
  mounted() {
    console.log("--config--mounted--");
  },
  beforeUpdate() {
    console.log("--config--beforeUpdate--");
  },
  updated() {
    console.log("--config--updated--");
  },
  beforeUnmount() {
    console.log("--config--beforeUnmount--");
  },
  unmounted() {
    console.log("--config--unmounted--");
  },
  //#endregion
};
</script>

<style scoped>
</style>