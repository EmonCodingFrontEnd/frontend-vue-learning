<template>
  <button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>
  <Demo v-if="isShowDemo"></Demo>
</template>

<script>
/**
 * Vue2生命周期函数   VS  Vue3生命周期函数   VS    Vue3之Composition API形式的生命周期函数
 * beforeCreate()    VS  beforeCreate()          setup()
 * created()         VS  created()               setup()
 * beforeMount()     VS  beforeMount()           onBeforeMount()
 * mounted()         VS  mounted()               onMounted()
 * beforeUpdate()    VS  beforeUpdate()          onBeforeUpdate()
 * updated()         VS  updated()               onUpdated()
 * beforeDestroy()   VS  beforeUnMount()         onBeforeUnMount()
 * destroyed()       VS  unmaunted()             onUnmounted()
 */
import { ref } from "vue";
import Demo from "./components/Demo.vue";
export default {
  name: "App",
  components: { Demo },
  setup() {
    let isShowDemo = ref(true);
    return { isShowDemo };
  },
};
</script>

<style scoped>
</style>