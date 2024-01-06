<template>
  <div>
    <!-- 可以巧妙利用a标签实现按钮带有提示的功能 -->
    <a :title="tip">
      <!-- 
        下面的v-bind这种写法，不能简写为 : 必须使用 v-bind
        同样的v-on也无法简写为@
      -->
      <el-button v-bind="$attrs" v-on="$listeners">哈哈</el-button>
    </a>
  </div>
</template>

<script>
export default {
  name: "HintButton",
  props: ["tip"],
  mounted() {
    /**
     * $attrs属于组件的一个属性，可以获取到父组件传递过来的props数据
     * 对于子组件而言，父组件给的数据可以利用props接收，
     * 但是需要注意：若子组件通过props接收了某个属性，则在$attrs属性当中是获取不到的。
     */
    console.log(this.$attrs);
    /**
     * $listeners，它也是组件示例自身的一个属性，它可以获取到父组件给子组件传递自定义事件
     */
    console.log(this.$listeners);
  },
};
</script>

<style scoped>
a {
  overflow-y: scroll;
}
</style>