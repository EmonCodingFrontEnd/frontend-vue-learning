export default {
  // 对外暴露的对象，可以放置组件重复的js业务逻辑
  methods: {
    giveMoney(money) {
      this.money -= money;
      // VC:$parent属性,可以获取到父组件，让父组件的数据加上50
      // 可以通过$parent属性获取到某一个组件的父组件，可以操作父组件的数据与方法。
      this.$parent.money += money;
    },
  },
}