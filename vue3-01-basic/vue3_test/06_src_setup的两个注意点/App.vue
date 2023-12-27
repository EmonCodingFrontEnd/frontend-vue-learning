<template>
  <Demo msg="你好啊" school="尚硅谷" @hello="showHelloMsg">
    <template v-slot:qwe>
      <span>尚硅谷</span>
    </template>
  </Demo>
</template>

<script>
/**
 * setup的两个注意点：
 *    在beforeCreate之前执行一次，this是undefined
 * setup的参数：
 *    props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性。
 *    context包含如下属性：
 *      attrs： 值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性，相当于Vue2的this.$attrs。
 *      emit:   分发自定义事件的函数，相当于this.$emit。
 *      slots:  收到的插槽内容，相当于this.$slots。
 */
import Demo from "./components/Demo.vue";
export default {
  name: "App",
  components: { Demo },
  setup() {
    function showHelloMsg(value) {
      alert(`你好啊，你触发了hello事件，我收到的参数是：${value}`);
    }

    return {
      showHelloMsg,
    };
  },
};
</script>

<style scoped>
</style>