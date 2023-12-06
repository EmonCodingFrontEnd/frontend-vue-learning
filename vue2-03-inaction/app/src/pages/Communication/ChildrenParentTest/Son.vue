<template>
  <div style="background: #ccc; height: 50px">
    <h3>儿子小明: 有存款: {{ money }}</h3>
    <button @click="giveMoney">给BABA钱: 50</button>
  </div>
</template>

<script>
export default {
  name: "Son",
  data() {
    return {
      money: 30000,
    };
  },

  methods: {
    giveMoney() {
      this.money -= 50;
      // VC:$parent属性,可以获取到父组件，让父组件的数据加上50
      // 可以通过$parent属性获取到某一个组件的父组件，可以操作父组件的数据与方法。
      this.$parent.money += 50;
    },
  },
};
</script>
