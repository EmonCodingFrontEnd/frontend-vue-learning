<template>
  <div>
    <h1>EventTest组件</h1>
    <!-- 原生DOM绑定原生事件 -->
    <button @click="domSystemEvent">原生DOM绑定原生事件</button>
    <!-- 
      Event1组件：Event1非原生DOM节点，绑定的click事件也并非原生DOM事件，而是自定义事件。
      @click.native可以把自定义事件变成原生DOM事件。
      当前原生DOM的click事件，其实是给子组件的根节点绑定了单击事件--利用到了事件的委托。
     -->
    <Event1 @click.native="compSystemEvent"></Event1>
    <hr />

    <!-- 
      下面的写法是给原生DOM绑定自定义事件
      给原生DOM绑定自定义事件没有任何意义，因为没有办法触发$emit函数
    -->
    <button @memeda="domCustomEvent">原生DOM绑定自定义事件</button>
    <!-- 
      组件标签
     -->
    <Event2 @click="compCustomEvent" @xxx="compCustomEvent2"></Event2>
    <hr />

    <!-- 自定义事件 -->
    <el-button @click="ceshi" type="success">我是按钮</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
import Event1 from "./Event1.vue";
import Event2 from "./Event2.vue";

export default {
  name: "EventTest",
  components: {
    Event1,
    Event2,
  },
  methods: {
    //点击事件的回调
    domSystemEvent(e) {
      console.log("我是原生DOM单击事件", e);
    },
    compSystemEvent() {
      console.log("我是Event1事件回调");
    },
    domCustomEvent() {
      console.log("我是原生DOM的自定义事件，是不会被触发的！");
    },
    compCustomEvent(params) {
      console.log("event2自定义事件回调：" + params);
    },
    compCustomEvent2(params) {
      console.log(params);
    },
    ceshi(e) {
      console.log("我是el-button按钮！", e);
    },
  },
};
</script>
