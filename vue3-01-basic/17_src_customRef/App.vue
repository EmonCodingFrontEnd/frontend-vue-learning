<template>
  <input type="text" v-model="keyword" />
  <h3>{{ keyword }}</h3>
</template>

<script>
/**
 * 作用：创建一个自定义的ref，并对其依赖项跟踪和更新触发进行显示控制。
 */
import { ref, customRef } from "vue";
export default {
  name: "App",
  setup() {
    // let keyword = ref("hello"); // 使用Vue提供的ref

    // 自定义ref，名为：myRef
    function myRef(value, delay) {
      return customRef((track, trigger) => {
        let timer;
        return {
          get() {
            console.log(`有人从myRef这个容器中读取数据了，我吧${value}给他了`);
            track(); // 通知Vue追踪value的变化（提前和get商量一下，让他认为这个value是有用的）
            return value;
          },
          set(newValue) {
            console.log(`有人把myRef这个容器中的数据改为了：${newValue}`);
            if (timer) {
              clearTimeout(timer);
            }
            timer = setTimeout(() => {
              value = newValue;
              trigger(); // 通知Vue去重新解析模板
            }, delay);
          },
        };
      });
    }
    let keyword = myRef("hello", 500); // 使用自定义的ref
    return { keyword };
  },
};
</script>

<style scoped>
</style>