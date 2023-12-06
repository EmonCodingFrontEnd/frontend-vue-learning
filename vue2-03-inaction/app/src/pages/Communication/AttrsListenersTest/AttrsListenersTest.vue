<template>
  <div>
    <h1>Element插件:提供的全局组件</h1>
    <el-button type="primary" icon="el-icon-plus" size="mini" @click="handler"
      >主要按钮</el-button
    >
    <el-button type="info" icon="el-icon-goods" size="mini">信息按钮</el-button>
    <el-button type="success" icon="el-icon-delete" size="mini"
      >成功按钮</el-button
    >
    <el-button type="danger" icon="el-icon-remove" size="mini"
      >危险按钮</el-button
    >
    <el-button type="warning" icon="el-icon-phone" size="mini"
      >警告按钮</el-button
    >

    <!-- 当用户在使用我们封装的按钮的时候，需要向HintButton组件传递相应的参数 -->
    <h1>对于el-button进行二次封装</h1>
    <!-- @click，底下这里代表的是自定义事件 -->
    <HintButton
      type="success"
      icon="el-icon-delete"
      size="mini"
      tip="豪哥提示信息"
      @click="handler"
    ></HintButton>
  </div>
</template>

<script type="text/ecmascript-6">
import HintButton from "./HintButton";

export default {
  name: "AttrsListenersTest",
  components: { HintButton },
  methods: {
    handler() {
      alert(123);
    },
  },
};
</script>
