<template>
  <Demo> </Demo>
</template>

<script>
/**
 * watchEffect函数：
 *    watch的套路是：既要指明监视的属性，也要指明监视的回调。
 *    watchEffect的套路是：不用指明监视哪一个属性，监视的回调函数中用到哪一个属性，就监视哪一个属性。
 *    watchEffect有点像comupted：
 *      但computed注重的计算出来的值（回调函数的返回值），所以必须要写返回值。
 *      而watchEffect更注重的是过程（回调函数的函数体），所以不用写返回值。
 */
import Demo from "./components/Demo.vue";
export default {
  name: "App",
  components: { Demo },
  setup() {},
};
</script>

<style scoped>
</style>