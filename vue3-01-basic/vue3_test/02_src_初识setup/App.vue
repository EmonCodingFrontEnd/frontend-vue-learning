<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>性别：{{ sex }}</h2>
  <button @click="sayHello">说话（Vue3配置的方法）</button>
  <button @click="sayWelcome" style="margin-left: 10px">
    欢迎（Vue2配置的方法）
  </button>
  <button @click="test1" style="margin-left: 10px">
    测试一下在Vue2读取Vue3的配置
  </button>
  <button @click="test2" style="margin-left: 10px">
    测试一下在Vue3读取Vue2的配置
  </button>
</template>

<script>
/**
 * setup函数的两种返回值：
 * 1、若返回一个对象，则对象中的属性、方法，在模板中均可以直接使用。（重点关注！）
 * 2、若返回一个渲染函数：则可以自定义渲染内容。（了解）
 *
 * 注意点：
 * 1、尽量不要与Vue2.x配置混用
 *    1）Vue2.x配置（data、method、computed、watch...）中可以访问到setup中的属性、方法。
 *    2）但在setup中不能访问到Vue2.x配置（data、methods、computed...）
 *    3）如果有重名，setup优先。
 * 2、setup不能是一个async函数，因为返回值不再是return的对象，而是一个promise，模板看不到return对象中的属性。
 *    注意：后期也是可以返回Promise的，但需要异步组件和Suspense的配合
 */
import { h } from "vue";
export default {
  name: "App",
  data() {
    return {
      sex: "男",
      a: 100,
    };
  },
  methods: {
    sayWelcome() {
      alert("欢迎来到尚硅谷学习！");
    },
    test1() {
      // 都可以读到
      console.log(this.name);
      console.log(this.age);
      console.log(this.sayHello);
      console.log(this.sex);
      console.log(this.a);
    },
  },
  // 此处只是测试一下setup，暂时不考虑响应式的问题。
  setup(props) {
    // 数据
    let name = "张三";
    let age = 18;
    let a = 200;

    // 方法
    function sayHello() {
      alert(`我叫${name}，我${age}岁了，你好啊！`);
    }

    function test2() {
      console.log(name);
      console.log(age);
      console.log(sayHello);
      console.log(a); // 200 优先读取到setup中的遍历值
      console.log(this.sex); // undefined 无法读到
    }

    // 返回一个对象（常用）
    return {
      name,
      age,
      sayHello,
      test2,
    };

    // 返回一个渲染函数：生成的内容，会替换掉整个组件的内容
    // return () => {
    //   return h("h1", "尚硅谷");
    // };
  },
};
</script>

<style scoped>
</style>