export const mixin = {
  methods: {
    showName() {
      alert(this.name);
    },
  },
  mounted() {
    console.log(this._uid, '你好啊！'); // 优先输出混入的，其次输出组件自身的。mixin>vc，且优先mixin，其次vc。
  },
}

export const mixin2 = {
  data() {
    return {
      x: 100, // 属性的混入优先级，小于组件的自定义属性，会被覆盖。mixin<vc
      y: 200
    }
  },
}

