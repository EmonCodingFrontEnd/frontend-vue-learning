# frontend-vue-learning

[TOC]

【Vue2+Vue3】

https://www.bilibili.com/video/BV1Zy4y1K7SH/?p=136&spm_id_from=pageDriver&vd_source=b850b3a29a70c8eb888ce7dff776a5d1

【尚品汇】

https://www.bilibili.com/video/BV1Vf4y1T7bw/?p=120&spm_id_from=pageDriver&vd_source=b850b3a29a70c8eb888ce7dff776a5d1

- 订单支付页面需要用有收货地址的账号（13700000000/111111）
- 前端UI框架
  - React系列
    - PC端
      - Ant Design https://ant.design/index-cn
    - Mobile端
      - Ant Design Mobile https://mobile.ant.design/zh
  - Vue系列
    - PC端
      - ElementUI https://element.eleme.cn/#/zh-CN/
    - Mobile端
      - Ant Design Vue https://www.antdv.com/docs/vue/introduce-cn/
      - Vant

【谷粒商城】

https://www.bilibili.com/video/BV1zB4y1K7by?p=37&vd_source=b850b3a29a70c8eb888ce7dff776a5d1



【Vue2中文官网】https://v2.cn.vuejs.org/v2/guide/

【Vue2脚手架】https://cli.vuejs.org/zh/

组件通信方式：

- props
  - 适用于的场景：父子组件通信
  - 注意事项：
    - 如果父组件给子组件传递函数：本质其实是子组件给父组件传递数据。
    - 如果父组件给子组件传递数据：本质就是父组件给子组件传递数据。
  - 书写方式：
    - ["todo"]
    - {type:Array}
    - {type:Array,default:[]}
  - 小提示：路由的props，书写形式：布尔值、对象、函数形式
- 自定义事件
  - 适用场景：子组件给父组件传递数据
  - $on与$emit
- 全局事件总线$bus
  - 适用场景：万能的
  - Vue.prototype.$bus = this;
- pubsub-js，在React框架中使用较多（发布与订阅）
  - 适用场景：万能的
- Vuex
  - 适用场景：万能的
- 插槽-slot
  - 适用场景：父子组件通信......（一般是结构）
  - 默认插槽
  - 具名插槽
  - 作用域插槽

【Vue3中文官网】https://cn.vuejs.org/guide/introduction.html



【aswsomejs】https://awesomejs.dev/

