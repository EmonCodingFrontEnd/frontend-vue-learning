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

