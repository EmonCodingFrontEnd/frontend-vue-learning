<template>
  <h3>我是App组件（祖）,{{ name }}--{{ price }}</h3>
</template>

<script>
/**
 * isRef:检查一个值是否为一个ref对象
 * isReactive:检查一个对象是否是由reactive创建的响应式代理
 * isReadonly:检查一个对象是否是由readonly创建的只读代理
 * isProxy:检查一个对象是否是由reactive或者readonly方法创建的代理
 */
import {
  ref,
  reactive,
  readonly,
  toRefs,
  isRef,
  isReactive,
  isReadonly,
  isProxy,
} from "vue";

export default {
  name: "App",
  setup() {
    let sum = ref(0);
    let car = reactive({ name: "奔驰", price: "40W" });
    let car2 = readonly(car);

    console.log(isRef(sum));
    console.log(isReactive(car));
    console.log(isReadonly(car2));
    console.log(isProxy(car));
    console.log(isProxy(car2));

    return { ...toRefs(car) };
  },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 10px;
}
</style>