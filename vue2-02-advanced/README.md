# vue_test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



# 笔记

<span style="color:red;font-weight:bold;">建议通过VSCode直接打开“vue2-02-advanced“文件夹。</span>

## 脚手架文件结构

```shell
|-- README.md			应用描述文件
|-- .gitignore			git版本管制忽略的配置
|-- babel.config.js		babael的配置文件
|-- jsconfig.json		
|-- node_modules		包安装目录
|-- package-lock.json	包版本控制文件
|-- package.json		应用宝配置文件
|-- public
|   |-- favicon.ico		页签图标
|   `-- index.html		主页面
|-- src
|   |-- App.vue			汇总所有组件
|   |-- assets			存放静态资源
|   |-- components		存放组件
|   `-- main.js			入口文件
`-- vue.config.js
```



## 关于不同版本的Vue：

- vue.js与vue.runtime.xxx.js的区别：
  - vue.js是完整版的Vue，包含：核心功能+模板解析器。
  - vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。
- 因为vueruntime.xxx.js没有模板解析器，所以不能使用template这个配置项，需要使用render函数接收到的 createElement 函数去指定具体内容。



## vue.config.js配置文件

1. 使用 vue inspect > output.js 可以查看到Vue脚手架的默认配置。
2. 使用vue.config.js可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh/config/#lintonsave

## ref属性

1. 被用来给元素或者子组件注册引用信息（id的替代者）

2. 应用在html标签上获取的是真实DOM元素，应用在组件标签上时组件实例对象（vc）

3. 使用方式：

   打标识：`<h1 ref="xxx">......</h1>` 或 `<School ref="xxx"></School>`

   获取：this.$refs.xxx

## 配置项props

- 功能：让组件接收外部传过来的数据

  - 传递数据：

    ```vue
    <Demo name="xxx"/>
    ```

  - 接收数据：

    - 第一种方式（只接收）：

    ```vue
    props: ['name']
    ```

    - 第二种方式（限制类型）：

    ```vue
    props: {
    	name: String
    }
    ```

    - 第三种方式（限制类型、限制必要性、指定默认值）：

    ```shell
    props: {
    	name: {
    		type: String, // 类型
    		required: true, // 必要性
    		default: '老王' // 默认值
    	}
    }
    ```

- 备注：props是只读的，Vue底层会检测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。

## mixin（混入）

- 功能：可以把多个组件共用的配置提取成一个混入对象。

- 使用方式：

  - 第一步：定义混入，例如：

    ```vue
    {
    	data(){......},
    	methods:{......},
    	......
    }
    ```

  - 第二步：使用混入，例如：

    - 全局混入：Vue.mixin(xxx)
    - 局部混入：mixins: ['xxx']



## 插件

- 功能：用于增强Vue

- 本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。

- 定义插件：

  ```vue
  对象.install = function(Vue, options) {
  	// 1.添加全局过滤器
  	Vue.filter(......)
  	// 2.添加全局指令
  	Vue.directive(......)
  	// 3.配合全局混入（合）
  	Vue.mixin(......)
  	// 4.添加实例方法
  	Vue.prototype.$myMethod = function(){......}
  	Vue.prototype.$myProperty = xxx
  }
  ```

- 使用插件：Vue.use(xxx);



## scoped样式

- 作用：让样式在局部生效，防止冲突。

- 写法：

  <style scoped>

## 总结TodoList案例

- 组件化编码流程：
  - 拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。
  - 实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：
    - 一个组件在用：放在组件自身即可。
    - 一些组件在用：放在他们共同的父组件上（<span style="color:red">状态提升</span>）
  - 实现交互：从绑定事件开始。
- props适用于：
  - 父组件==>子组件通信。
  - 子组件==>父组件通信（要求父先给子一个函数）
- 使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的！
- props穿过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。



## webStorage

- 存储内容大小一般支持5MB左右（不同浏览器可能还不一样）
- 浏览器端通过window.sessionStorage和window.localStorage属性来实现本地存储机制。
- 相关API：
  - xxxStorage.setItem('key', 'value');
    - 该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。
  - xxxStorage.getItem('person');
    - 该方法接受一个键名作为参数，返回键名对应的值。
  - xxxStorage.removeItem('key')
    - 该方法接受一个键名作为参数，并把该键名从存储中删除。
  - xxxStorage.clear()
    - 该方法会清空存储中的所有数据。
- 备注：
  - sessionStorage存储的内容会随着浏览器窗口关闭而消失。
  - localStorage存储的内容，需要手动清除才会消失。
  - xxxStorage.getItem(xxx)，如果xxx对应的value获取不到，那么getItem的返回值是null。
  - JSON.parse(null)的结果依然是null.



## 组件的自定义事件

- 一种组件间通信的方式，适用于<span style="color:red;font-weight:bold;">子组件==>父组件</span>

- 使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（<span style="color:red;font-weight:bold;">事件的回调在A中</span>）。

- 绑定自定义事件：

  - 第一种方式，在父组件中：

    ```vue
    <Demo @atguigu="test"/> 
    // 或者
    <Demo v-on:atguigu="test"/>
    ```

  - 第二种方式，在父组件中：

    ```vue
    <Demo ref="demo"/>
    ......
    mounted() {
    	this.$refs.xxx.$on('atguigu', this.test);
    }
    ```

  - 若想让自定义事件只能触发一次，可以使用`once`修饰符，或`$once`方法。

- 触发自定义事件：`this.$emit('atguigu',数据)`。

- 解绑自定义事件：`this.$off('atguigu')`。

- 组件上也可以绑定原生DOM事件，需要使用`native`修饰符。

- 注意：通过`this.$refs.xxx.$on('atguigu',回调)`绑定自定义事件时，回调<span style="color:red;font-weight:bold;">要么配置在methods中，要么用箭头函数</span>，否则this指向会出问题！！！



## 全局事件总线（GlobalEventBus）

- 一种组件间通信的方式，适用于<span style="color:red;font-weight:bold;">任意组件间通信</span>。

- 安装全局事件总线：

  ```js
  new Vue({
  	......
      beforeCreate() {
  		Vue.prototype.$bus = this; // 安装全局事件总线，￥bus就是当前应用的vm
  	},
      ......
  })
  ```

- 使用全局事件总线：

  - 接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件<span style="color:red;font-weight:bold;">回调留在A组件自身</span>。

    ```js
    methods(){
        demo(data){......}
    }
    ......
    mounted(){
        this.$bus.$on('xxx', this.dmeo);
    }
    ```

  - 提供数据：`this.$but.$emit('xxx', 数据)`

- 最好在beforeDestroy钩子中，用$off去解绑<span style="color:red;font-weight:bold;">当前组件所用到的</span>事件。



## 消息订阅与发布

- 一种组件间通信的方式，适用于<span style="color:red;font-weight:bold;">任意组件间通信</span>。

- 使用步骤：

  - 安装pubsub：`npm i pubsub-js`

  - 引入：`import pubsub from 'pubsub-js'`

  - 接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的<span style="color:red;font-weight:bold;">回调留在A组件自身</span>。

    ```js
    methods(){
        demo(data){......}
    }
    ......
    mounted(){
        this.pid = pubsub.subscribe('xxx', this.demo); // 订阅消息
    }
    ```

  - 提供数据：`pubsub.subscribe('xxx', 数据);`

  - 最好在beforeDestroy钩子中，用`pubsub.unsubscribe(this.pid)`去<span style="color:red;font-weight:bold;">取消订阅</span>。

## nextTick

- 语法：`this.$nextTick(回调函数)`
- 作用：在下一次DOM更新结束后执行其指定的回调。
- 什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。



## Vue封装的过度与动画

- 作用：在插入、更新或移除DOM元素时，在合适的时候给元素添加样式类名。
- 图示：

![image-20231022110154447](images/image-20231022110154447.png)

- 写法：

  - 准备好样式：

    - 元素进入的样式：
      1. v-enter：进入的起点
      2. v-enter-active：进入过程中
      3. v-enter-to：进入的终点
    - 元素离开的样式：
      1. v-leave：离开的起点
      2. v-leave-active：离开过程中
      3. v-leave-to：离开的重点

  - 使用`<transition>`包裹要过度的元素，并配置name属性：

    ```vue
    <transition name="hello">
    	<h1 v-show="isShow">
            你好啊！
        </h1>
    </transition>
    ```

  - 备注：若有多个元素需要过度，则需要使用：`<transition-group>`，且每个元素都要指定`key`值。

- 利用三方动画库

  - https://animate.style/

  - 安装

    ```shell
    npm i animate.css
    ```

  - 引入

    ```js
    import "animate.css";
    ```

  - 示例

    ```vue
    <transition-group
      name="animate__animated animate__bounce"
      appear
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"
    >
      <h1 v-show="isShow" key="1">你好啊！</h1>
      <h1 v-show="!isShow" key="2">尚硅谷！</h1>
    </transition-group>
    ```


## Vue脚手架配置代理

本示例用到的后端服务是`test_proxy_server`，执行`node server1`和`node server2`即可。

- 方法一

  - 在vue.config.js中添加如下配置：

  ```js
  // 开启代理服务器（方式一）
  devServer: {
      proxy: 'http://localhost:5000'
  },
  ```

  - 说明：
    - 优点：配置简单，请求资源时直接发给前端（8080）即可。
    - 缺点：不能配置多个代理，不能灵活的控制请求是否走代理。
    - 工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器（优先匹配前端资源）。

- 方法二

  - 编写vue.config.js配置具体代理规则

    ```js
    // 开启代理服务器（方式二）
    devServer: {
        proxy: {
          '/api': {
            target: 'http://localhost:5000', // 代理目标的基础路径
            pathRewrite: { '^/api': '' }
            // ws: true, // 用于支持websocket
            // changeOrigin: true // 用于控制请求头中的host值
          },
          '/demo': {
            target: 'http://localhost:5001', // 代理目标的基础路径
            pathRewrite: { '^/demo': '' }
            // ws: true, // 用于支持websocket
            // changeOrigin: true // 用于控制请求头中的host值
          },
        }
    }
    ```

  - 说明：

    - 优点：可以配置多个代理，且可以灵活的控制请求是否走代理。
    - 缺点：配置略微繁琐，请求资源时必须加前缀。



​	



