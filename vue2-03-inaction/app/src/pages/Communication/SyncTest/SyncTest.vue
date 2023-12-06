<template>
  <div>
    小明的爸爸现在有{{ money }}元
    <h2>不使用sync修改符</h2>
    <!-- 给子组件绑定一个自定义事件:update:money -->
    <!-- 
      :money 父组件给子组件传递props
      @update:money 给子组件绑定的自定义事件只不过名字叫做 update:money
      目前现在这种操作，其实和v-model很相似，可以实现父子组件数据同步
     -->
    <Child :money="money" @update:money="handler"></Child>
    <h2>使用sync修改符</h2>
    <!-- 
      :money.sync
      第一：父组件给子组件传递props money
      第二：给当前子组件绑定了一个自定义事件，事件名称是： update:money
      属性修饰符 sync 也是组件通信方式的一种，可以实现父子组件数据同步。
     -->
    <Child2 :money.sync="money"></Child2>
    <hr />
  </div>
</template>

<script type="text/ecmascript-6">
import Child from "./Child.vue";
import Child2 from "./Child2.vue";
export default {
  name: "SyncTest",
  components: {
    Child,
    Child2,
  },
  data() {
    return {
      money: 10000,
    };
  },
  methods: {
    handler(money) {
      this.money = money;
    },
  },
};
</script>
