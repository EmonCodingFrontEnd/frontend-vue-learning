<template>
  <div>
    <pre>具名插槽</pre>
    <!-- 默认插槽:只能有一个-->
    <slot></slot>
    <!--具名插槽:可以有N个 -->
    <slot name="fbb"></slot>
    <slot name="fcc"></slot>
    <slot name="fdd"></slot>
  </div>
</template>

<script>
export default {
  name: "Test1",
};
</script>

<style scoped>
</style>
