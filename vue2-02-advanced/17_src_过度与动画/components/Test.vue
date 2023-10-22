<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- <transition name="v" :appear="true"> -->
    <!-- :appear="true" 简化为 appear -->
    <transition name="hello" appear>
      <h1 v-show="isShow">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}

/* ==========利用动画实现 beg========== */
/* 默认 .v-enter-active */
.hello-enter-active {
  animation: atguigu 0.5s;
}

/* 默认 .v-leave-active */
.hello-leave-active {
  animation: atguigu 0.5s reverse;
}

@keyframes atguigu {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
/* ==========利用动画实现 end========== */
</style>