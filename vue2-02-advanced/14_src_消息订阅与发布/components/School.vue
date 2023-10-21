<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷atguigu",
      address: "北京",
    };
  },
  methods: {
    demo(msgName, data) {
      console.log(this); // 指向 School 组件
      console.log(
        "有人发布了hello消息，hello消息的回调执行了！",
        msgName,
        data
      );
    },
  },
  mounted() {
    // console.log("School", this.$bus);
    // this.$bus.$on("hello", (data) => {
    //   console.log("我是School组件，收到了数据", data);
    // });

    /**
     * 注意，这里的回调函数 this.demo 可以是箭头函数，此时this指向 School 组件；
     * 但如果是普通函数，this指向的是 undefined
     */
    this.pubId = pubsub.subscribe("hello", this.demo);
  },
  beforeDestroy() {
    // this.$bus.$off("hello");
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style scoped lang="css">
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>