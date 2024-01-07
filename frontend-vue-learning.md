# frontend-vue-learning

[TOC]

【Vue2+Vue3】

https://www.bilibili.com/video/BV1Zy4y1K7SH/?p=168&spm_id_from=pageDriver&vd_source=b850b3a29a70c8eb888ce7dff776a5d1【完结】

【Vue3】

https://www.bilibili.com/video/BV1Za4y1r7KE/?p=66&spm_id_from=pageDriver&vd_source=b850b3a29a70c8eb888ce7dff776a5d1

【Vue Cli】https://cli.vuejs.org/zh/

【Vue Router】https://router.vuejs.org/zh/

【Vuex】https://vuex.vuejs.org/zh/

# 创建Vue2工程

## 1、安装Vue Cli 5.x

- 前提：

Node.js ^12.0.0 || >= 14.0.0

- 安装：

```shell
$ npm i -g @vue/cli
```

- 升级

如需升级全局的Vue Cli包，请原型。

```shell
$ npm update -g @vue/cli
```

- 创建项目

```shell
$ vue create vue_test
```

- 启动项目

```shell
$ cd vue_test
$ npm run serve
```

- 查看配置

```shell
$ vue inspect > output.js
```

## 2、一个Vue2的一个实战项目

【尚品汇】https://www.bilibili.com/video/BV1Vf4y1T7bw/?p=200&spm_id_from=pageDriver&vd_source=b850b3a29a70c8eb888ce7dff776a5d1 【完结】

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
      - Element Plus https://element-plus.org/zh-CN/#/zh-CN
      - MorJS https://mor.eleme.cn/guides/introduction/getting-started/
    - Mobile端
      - Ant Design Vue https://www.antdv.com/docs/vue/introduce-cn/
      - Vant

## 3、小贴士

- 地址栏中，经常出现#，是什么作用，能不能去掉#？
- hash模式：地址栏包含#符号，#以后的不被后台获取
- history模式：具有对url历史记录进行修改的功能
- 在微信支付、分享url作为参数传递时，#不能满足需求
- history需要后台配置，处理404的问题。



【谷粒商城】

https://www.bilibili.com/video/BV1zB4y1K7by?p=37&vd_source=b850b3a29a70c8eb888ce7dff776a5d1

【ECharts官网】https://echarts.apache.org/zh/index.html

【MDN官网】https://developer.mozilla.org/zh-CN/

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
- ref：父组件获取子组件VC，获取子组件的响应式数据以及方法。
- 插槽-slot
  - 适用场景：父子组件通信......（一般是结构）
  - 默认插槽
  - 具名插槽
  - 作用域插槽
- $refs、$children、$parent
- $attrs、$listeners





# Vue3

<img src="https://user-images.githubusercontent.com/499550/93624428-53932780-f9ae-11ea-8d16-af949e16a09f.png" style="width:200px" />

【Vue3中文官网】https://cn.vuejs.org/guide/introduction.html

Vue2迁移到Vue3的非兼容性改变：https://v3-migration.vuejs.org/zh/breaking-changes/

## 1.Vue3简介

- 2020年9月18日，`Vue.js`发布版`3.0`版本，代号：`One Piece`（n
- 经历了：[4800+次提交](https://github.com/vuejs/core/commits/main)、[40+个RFC](https://github.com/vuejs/rfcs/tree/master/active-rfcs)、[600+次PR](https://github.com/vuejs/vue-next/pulls?q=is%3Apr+is%3Amerged+-author%3Aapp%2Fdependabot-preview+)、[300+贡献者](https://github.com/vuejs/core/graphs/contributors)
- 官方发版地址：[Release v3.0.0 One Piece · vuejs/core](https://github.com/vuejs/core/releases/tag/v3.0.0)
- 截止2023年10月，最新的公开版本为：`3.3.4`

```bash
$ npm view vue versions
```

<img src="images/image-20231229132023702.png" style="zoom:30%;" alt="image-20231229132023702"/>



## 2.Vue3带来了什么

### 1.性能的提升

- 打包大小减少41%

- 初次渲染快55%, 更新渲染快133%

- 内存减少54%

  ......

### 2.源码的升级

- 使用Proxy代替defineProperty实现响应式

- 重写虚拟DOM的实现和Tree-Shaking

  ......

### 3.拥抱TypeScript

- Vue3可以更好的支持TypeScript

### 4.新的特性

1. Composition API（组合API）

   - setup配置
   - ref与reactive
   - watch与watchEffect
   - provide与inject
   - ......
2. 新的内置组件
   - Fragment 
   - Teleport
   - Suspense
3. 其他改变

   - 新的生命周期钩子
   - data 选项应始终被声明为一个函数
   - 移除keyCode支持作为 v-on 的修饰符
   - ......

## 3、创建Vue3工程

### 3.1、使用Vue Cli创建

官方文档：https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create

> 备注：目前`vue-cli`已处于维护模式，官方推荐基于 `Vite` 创建项目。

```bash
## 查看@vue/cli版本，确保@vue/cli版本在4.5.0以上
vue --version # 或者vue -V
## 安装或者升级你的@vue/cli
npm i -g @vue/cli
## 创建
vue create vue3_test

##  随后选择3.x
##  Choose a version of Vue.js that you want to start the project with (Use arrow keys)
##  > 3.x
##    2.x

## 启动
cd vue3_test
npm run serve
```

### 3.2、使用Vite创建（推荐）

官方文档：https://vitejs.cn/

- 什么是vite？—— 新一代前端构建工具。
- 优势如下：
  - 开发环境中，无需打包操作，可快速的冷启动。
  - 轻量快速的热重载（HMR），能实现极速的服务启动。
  - 对 `TypeScript`、`JSX`、`CSS` 等支持开箱即用
  - 真正的按需编译，不再等待整个应用编译完成。
  
- 传统构建（Webpack）与Vite构建对比图

![image-20231224210028428](images/image-20231224210028428.png)

![image-20231224210039538](images/image-20231224210039538.png)

- 具体操作如下（点击查看[官方文档](https://cn.vuejs.org/guide/quick-start.html#creating-a-vue-application)）

> 前提条件
>
> - 熟悉命令行
> - 已安装 18.0 或更高版本的 [Node.js](https://nodejs.org/)

- 简单快速版

```bash
## 创建工程
npm init vite-app vue3_test_vite
## 进入工程目录
cd vue3_test_vite
## 安装依赖
npm install
## 运行
npm run dev
```

- 很多选项版【推荐】

```bash
$ npm create vue@latest

Vue.js - The Progressive JavaScript Framework

√ 请输入项目名称： ... vue3_test_vite
√ 是否使用 TypeScript 语法？ ... 否 / 是
√ 是否启用 JSX 支持？ ... 否 / 是
√ 是否引入 Vue Router 进行单页面应用开发？ ... 否 / 是
√ 是否引入 Pinia 用于状态管理？ ... 否 / 是
√ 是否引入 Vitest 用于单元测试？ ... 否 / 是
√ 是否要引入一款端到端（End to End）测试工具？ » 不需要
√ 是否引入 ESLint 用于代码质量检测？ ... 否 / 是

正在构建项目 C:\Job\JobResource\WebProjects\frontend-vue-learning\vue3-02-advanced\vue3_test_vite...

项目构建完成，可执行以下命令：

  cd vue3_test_vite
  npm install
  npm run dev
```

## 4、Vue2 VS Vue3生命周期

【Vue2生命周期图示】https://v2.cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA

【Vue3生命周期图示】https://cn.vuejs.org/guide/essentials/lifecycle.html



<div style="width:450px;height:740px;overflow-y: scroll;float:left;">
	<img src="images/lifecycle.png" style="width:600px;float:left" alt="Vue2实例生命周期"/>
</div>
<div style="width:450px;height:720px;overflow:hidden;float:right;margin-top:20px;">
	<img src="images/lifecycle.DLmSwRQE.png" style="width:600px;float:right" alt="Vue3实例生命周期"/>
</div>







































## 5、Composition API的优势

### 5.1、Options API存在的问题

传统的Options API中，新增或者修改一个需求，就需要分别在data、methods、computed、watch里修改。

<div style="width:600px;height:370px;overflow:hidden;float:left">
    <!--<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f84e4e2c02424d9a99862ade0a2e4114~tplv-k3u1fbpfcp-watermark.image" style="width:600px;float:left" />-->
    <img src="images/OptionsAPI.image" style="width:600px;float:left" title="OptionsAPI"/>
</div>
<div style="width:300px;height:370px;overflow:hidden;float:left">
    <!--<img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5ac7e20d1784887a826f6360768a368~tplv-k3u1fbpfcp-watermark.image" style="zoom:50%;width:560px;left" />-->
    <img src="images/OptionsAPI2.image" style="zoom:50%;width:560px;left" title="OptionsAPI2"/>
</div>



















### 5.2、Composition API 的优势

我们可以更加优雅的组织我们的代码，函数。让相关功能的代码更加有序的组织在一起。

<div style="width:500px;height:340px;overflow:hidden;float:left">
    <!--<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bc0be8211fc54b6c941c036791ba4efe~tplv-k3u1fbpfcp-watermark.image"style="height:360px"/>-->
    <img src="images/CompositionAPI.image" style="height:360px" title="CompositionAPI"/>
</div>
<div style="width:430px;height:340px;overflow:hidden;float:left">
    <!--<img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6cc55165c0e34069a75fe36f8712eb80~tplv-k3u1fbpfcp-watermark.image"style="height:360px"/>-->
    <img src="images/CompositionAPI2.image"style="height:360px" title="CompositionAPI2"/>
</div>


















## 6、新的组件

### 6.1、Fragment

- Vue2中：组件必须有一个根标签。
- 在Vue3中组件可以没有根标签，内部会将多个标签包含在一个Fragment虚拟元素中。
- 好处：减少标签层级，减小内存占用。

### 6.2、其他的改变

- data选项应始终被声明为一个函数。

- 过度类名的更改：

  - Vue2.x写法

    ```css
    .v-enter,
    .v-leave-to {
      opacity: 0;
    }
    .v-leave,
    .v-enter-to {
      opacity: 1;
    }
    ```

  - Vue3.x写法

    ```css
    .v-enter-from,
    .v-leave-to {
      opacity: 0;
    }
    
    .v-leave-from,
    .v-enter-to {
      opacity: 1;
    }
    ```

- <strong style="color:#DD5145">移除</strong>keyCode作为 v-on 的修饰符，同时也不再支持```config.keyCodes```

- <strong style="color:#DD5145">移除</strong>```v-on.native```修饰符

  - 父组件中绑定事件

    ```vue
    <my-component
      v-on:close="handleComponentEvent"
      v-on:click="handleNativeClickEvent"
    />
    ```

  - 子组件中声明自定义事件

    ```vue
    <script>
      export default {
        emits: ['close']
      }
    </script>
    ```

- <strong style="color:#DD5145">移除</strong>过滤器（filter）

  > 过滤器虽然这看起来很方便，但它需要一个自定义语法，打破大括号内表达式是 “只是 JavaScript” 的假设，这不仅有学习成本，而且有实现成本！建议用方法调用或计算属性去替换过滤器。

- <span style="color:red;font-weight:bold;">v-model</span>指令在组件上的使用已经被重新设计，替换掉了<span style="color:red;font-weight:bold;">v-bind.sync</span>。

- <span style="color:red;font-weight:bold;">v-if和v-for</span>在同一个元素身上使用时的优先级发生了变化。Vue2是v-for优先，Vue3总是v-if优先。

- 移除了<span style="color:red;font-weight:bold;">$on、$off和$once实例方法</span>。

- 移除了过滤器<span style="color:red;font-weight:bold;">filter</span>。

- 移除了<span style="color:red;font-weight:bold;">$children</span>实例<span style="color:red;font-weight:bold;">propert</span>

- ...更多参考：Vue2迁移到Vue3的非兼容性改变：https://v3-migration.vuejs.org/zh/breaking-changes/

## 7、一个Vue3的实战项目

【aswsomejs】https://awesomejs.dev/

## 8、Pinia（Vuex替代品）

<span style="color:red;font-weight:bold;">集中式状态管理库：</span>

https://pinia.web3doc.top/

## 9、基于Vite打造Vue3+TS前端开发模板项目

## 9.0、技术选型

- Vue3+组合式API
- Vite构建工具
- TypeScript
- vue-router
- Pinia
- element-plus
- Axios
- ECharts

### 9.1、创建项目

```bash
$ pnpm create vite
.../Local/pnpm/store/v3/tmp/dlx-11468    |   +1 +
.../Local/pnpm/store/v3/tmp/dlx-11468    | Progress: resolved 1, reused 0, downloaded 1, added 1, done
√ Project name: ... vite-project
√ Select a framework: » Vue
√ Select a variant: » TypeScript

Scaffolding project in C:\Job\JobResource\WebProjects\frontend-vue-learning\vue3-03-inaction\vue3_admin_template\vite-project...

Done. Now run:

  cd vite-project
  pnpm install
  pnpm run dev
```

- 配置启动自动打开浏览器

给package.json配置调整：

```json
"scripts": {
	"dev": "vite --open",
},
```

### 9.2、配置ESLint

- 安装ESLint

```bash
$ pnpm i eslint -D
```

- 生成ESLint配置文件

```bash
$ npx eslint --init
You can also run this command directly using 'npm init @eslint/config'.
Need to install the following packages:
@eslint/create-config@0.4.6
Ok to proceed? (y) y
√ How would you like to use ESLint? · problems
√ What type of modules does your project use? · esm
√ Which framework does your project use? · vue
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ What format do you want your config file to be in? · JavaScript
The config that you've selected requires the following dependencies:

@typescript-eslint/eslint-plugin@latest eslint-plugin-vue@latest @typescript-eslint/parser@latest
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · pnpm
Installing @typescript-eslint/eslint-plugin@latest, eslint-plugin-vue@latest, @typescript-eslint/parser@latest
Packages: +34
++++++++++++++++++++++++++++++++++
Progress: resolved 216, reused 147, downloaded 34, added 34, done

devDependencies:
+ @typescript-eslint/eslint-plugin 6.17.0
+ @typescript-eslint/parser 6.17.0
+ eslint-plugin-vue 9.19.2

Done in 15.7s
```

- `.eslint.cjs配置文件`

```js
module.exports = {
    // 运行环境
    "env": {
        "browser": true, // 浏览器端
        "es2021": true // es2021
    },
    // 规则继承
    "extends": [
        // 全部规则默认是关闭的，这个配置项开启推荐规则，推荐规则参照文档，比如：函数不能重名、对象不能出现重复key
        "eslint:recommended",
        // Vue3语法规则
        "plugin:vue/vue3-essential",
        // TS语法规则
        "plugin:@typescript-eslint/recommended",
    ],
    // 要为特定类型的文件指定处理器
    "overrides": [
        // {
        //     "env": {
        //         "node": true
        //     },
        //     "files": [
        //         ".eslintrc.{js,cjs}"
        //     ],
        //     "parserOptions": {
        //         "sourceType": "script"
        //     }
        // }
    ],
    // 指定解析器选项
    "parserOptions": {
        "ecmaVersion": "latest", // 校验ECMA最新版本
        /**
         * 指定解析器
         * Esprima-默认解析器
         * Babel-ESLint-babel// babel解析器 
         * @typescript-eslint/parse // ts解析器
         */
        "parser": "@typescript-eslint/parser",
        "sourceType": "module" // 设置为“script”（默认），或者“module”代码在ECMAScript模块中
    },
    // ESLint支持使用第三方插件。在使用插件之前，您必须使用npm安装它。
    // 该eslint-plugin-插件可以从插件名被忽略
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    // ESLint规则
    "rules": {
    }
}
```

- Vue3环境代码校验插件

  - 插件说明：

  ```bash
  # 让所有与prettier规则存在冲突的ESLint rules失效，并使用prettier进行代码检查
  "eslint-config-prettier": "^9.1.0",
  "eslint-plugin-import": "^2.29.1",
  "eslint-plugin-node": "^11.1.0",
  # 运行更漂亮的ESLint，使prettier规则优先级更高，ESLint优先级低
  "eslint-plugin-prettier": "^5.1.2",
  # vue.js的ESLint插件（查找Vue语法错误，发现错误指令，查找违规风格指南）
  "eslint-plugin-vue": "^9.19.2",
  # 该解析器允许使用ESLint校验所有babel code
  "@babel/eslint-parser": "^7.23.3",
  ```

  - 安装命令

  ```bash
  $ pnpm i -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier eslint-config-prettier @babel/eslint-parser
  ```

- `修改.eslintrc.cjs配置文件`

  ```js
  // @see https://eslint.bootcss.com/docs/rules/
  // @see https://eslint.nodejs.cn/docs/latest/rules/
  module.exports = {
      env: {
          browser: true,
          es2021: true,
          node: true,
          jest: true,
      },
      /* 指定如何解析语法 */
      parser: 'vue-eslint-parser',
      /** 优先级低于 parse 的语法解析配置 */
      parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
          parser: '@typescript-eslint/parser',
          jsxPragma: 'React',
          ecmaFeatures: {
              jsx: true,
          },
      },
      /* 继承已有的规则 */
      extends: [
          'eslint:recommended',
          'plugin:vue/vue3-essential',
          'plugin:@typescript-eslint/recommended',
          'plugin:prettier/recommended',
      ],
      plugins: ['vue', '@typescript-eslint'],
      /*
       * "off" 或 0    ==>  关闭规则
       * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
       * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
       */
      rules: {
          // eslint（https://eslint.bootcss.com/docs/rules/）
          'no-var': 'error', // 要求使用 let 或 const 而不是 var
          'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允许多个空行
          'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
          'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
          'no-unexpected-multiline': 'error', // 禁止空余的多行
          'no-useless-escape': 'off', // 禁止不必要的转义字符
  
          // typeScript (https://typescript-eslint.io/rules)
          '@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量
          '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
          '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
          '@typescript-eslint/no-non-null-assertion': 'off',
          '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。
          '@typescript-eslint/semi': 'off',
  
          // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
          'vue/multi-word-component-names': 'off', // 要求组件名称始终为 “-” 链接的单词
          'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用
          'vue/no-mutating-props': 'off', // 不允许组件 prop的改变
          'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
      },
  }
  ```

- `.eslintignore忽略文件`

```tex
dist
node_modules
```

- 运行脚本

package.json新增两个运行脚本：

```bash
"scripts": {
	"lint": "eslint src",
	"fix": "eslint src --fix",
}
```

### 9.3、配置prettier

有了ESLint，为什么还要有Prettier？

ESLint针对的是JavaScript，他是一个检测工具，包含JS语法以及少部分格式问题，在ESLint看来，语法对了就能保证代码正常运行，格式问题属于其次；

而Prettier属于格式化工具，它看不惯格式不统一，所以它就把ESLint没干好的事情接着干，另外，Prettier支持包含JS在内的多种语言。

总结起来，<span style="color:red;font-weight:bold;">eslint和prettier这俩兄弟一个保证js代码质量，一个保证代码美观。</span>

- 安装依赖包

```bash
$ pnpm i -D eslint-plugin-prettier prettier eslint-config-prettier
```

- `.prettierrc.json`添加规则

```bash
{
  "singleQuote": true,
  "semi": false,
  "bracketSpacing": true,
  "htmlWhitespaceSensitivity": "ignore",
  "endOfLine": "auto",
  "trailingComma": "all",
  "tabWidth": 2
}
```

- `.prettierignore`忽略文件

```tex
/dist/*
/html/*
.local
/node_modules/**
**/*.svg
**/*.sh
/public/*
```

<span style="color:red;font-weight:bold;">通过pnpm run lint 去检测语法，如果不出现不规范格式，通过pnpm run fix修改。</span>

### 9.4、配置stylelint

[stylelint](https://stylelint.io/)为css的lint工具。可格式化css代码，检查css语法错误与不合理的写法，指定css书写顺序等。

我们的项目中使用scss作为预处理器，安装以下依赖：

```bash
$ pnpm i -D sass sass-loader stylelint postcss postcss-scss postcss-html stylelint-config-prettier stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-config-standard-vue stylelint-scss stylelint-order stylelint-config-standard-scss
```

- `.stylelintrc.cjs`配置文件

**官网:https://stylelint.bootcss.com/**

```js
// @see https://stylelint.bootcss.com/
// @see https://stylelint.nodejs.cn/
module.exports = {
  extends: [
    'stylelint-config-standard', // 配置stylelint拓展插件
    'stylelint-config-html/vue', // 配置 vue 中 template 样式格式化
    'stylelint-config-standard-scss', // 配置stylelint scss插件
    'stylelint-config-recommended-vue/scss', // 配置 vue 中 scss 样式格式化
    'stylelint-config-recess-order', // 配置stylelint css属性书写顺序插件,
    'stylelint-config-prettier', // 配置stylelint和prettier兼容
  ],
  overrides: [
    {
      files: ['**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
    '**/*.yaml',
  ],
  /**
   * null  => 关闭该规则
   * always => 必须
   */
  rules: {
    'value-keyword-case': null, // 在 css 中使用 v-bind，不报错
    'no-descending-specificity': null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
    'function-url-quotes': 'always', // 要求或禁止 URL 的引号 "always(必须加上引号)"|"never(没有引号)"
    'no-empty-source': null, // 关闭禁止空源码
    'selector-class-pattern': null, // 关闭强制选择器类名的格式
    'property-no-unknown': null, // 禁止未知的属性(true 为不允许)
    'block-opening-brace-space-before': 'always', //大括号之前必须有一个空格或不能有空白符
    'value-no-vendor-prefix': null, // 关闭 属性值前缀 --webkit-box
    'property-no-vendor-prefix': null, // 关闭 属性前缀 -webkit-mask
    'selector-pseudo-class-no-unknown': [
      // 不允许未知的选择器
      true,
      {
        ignorePseudoClasses: ['global', 'v-deep', 'deep'], // 忽略属性，修改element默认样式的时候能使用到
      },
    ],
  },
}
```

- `.stylelintignore`忽略文件

```tex
/node_modules/*
/dist/*
/html/*
/public/*
```

- 运行脚本

配置统一的prettier来格式化我们的js和css、html代码。

```json
"scripts": {
    "format": "prettier --write \"./**/*.{html,vue,ts,js,json,md}\"",
    "lint:eslint": "eslint src/**/*.{ts,vue} --cache --fix",
    "lint:style": "stylelint src/**/*.{css,scss,vue} --cache --fix"
}
```

<span style="color:red;font-weight:bold;">当我们运行pnpm run format的时候，会把代码直接格式化。</span>

## 9.5、配置husky

在上面我们已经集成好了我们代码校验工具，但是需要每次手动的去执行命令才会格式化我们的代码。如果有人没有格式化就提交了远程仓库中，那这个规范就没什么用。所以我们需要强制让开发人员按照代码规范来提交。

要做到这件事情，就需要利用husky在代码提交之前触发git hook(git在客户端的钩子)，然后执行`pnpm run format`来自动的格式化我们的代码。

安装`husky`：

```bash
$ pnpm i -D husky
```

执行：

```bash
$ npx husky-init
```

会在根目录下生成个一个.husky目录，在这个目录下面会有一个pre-commit文件，这个文件里面的命令在我们执行commit的时候就会执行

在`.husky/pre-commit`文件添加如下命令：

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm run format
```

当我们对代码进行commit操作的时候，就会执行命令，对代码进行格式化，然后再提交。

## 9.6、配置commitlint

对于我们的commit信息，也是有统一规范的，不能随便写,要让每个人都按照统一的标准来执行，我们可以利用**commitlint**来实现。

安装包：

```bash
$ pnpm i -D @commitlint/config-conventional @commitlint/cli
```

添加配置文件，新建`commitlint.config.cjs`(注意是cjs)，然后添加下面的代码：

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  // 校验规则
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'build',
      ],
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72],
  },
}
```

在`package.json`中配置scripts命令

> 在scrips中添加下面的代码

```json
"scripts": {
    "commitlint": "commitlint --config commitlint.config.cjs -e -V"
},
```

配置结束，现在当我们填写`commit`信息的时候，前面就需要带着下面的`subject`

```tex
'feat',//新特性、新功能
'fix',//修改bug
'docs',//文档修改
'style',//代码格式修改, 注意不是 css 修改
'refactor',//代码重构
'perf',//优化相关，比如提升性能、体验
'test',//测试用例修改
'chore',//其他修改, 比如改变构建流程、或者增加依赖库、工具等
'revert',//回滚到上一个版本
'build',//编译相关的修改，例如发布版本、对项目构建或者依赖的改动
```

配置husky：

```bash
$ npx husky add .husky/commit-msg
```

在生成的commit-msg文件中添加下面的命令：

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm commitlint
```

当我们 commit 提交信息时，就不能再随意写了，必须是 git commit -m 'fix: xxx' 符合类型的才可以，<span style="color:red;font-weight:bold;">需要注意的是类型的后面需要用英文的 :，并且冒号后面是需要空一格的，这个是不能省略的</span>

## 9.7、强制使用pnpm包管理工具

团队开发项目的时候，需要统一包管理器工具,因为不同包管理器工具下载同一个依赖,可能版本不一样,

导致项目出现bug问题,因此包管理器工具需要统一管理！！！

在根目录创建`scritps/preinstall.js`文件，添加下面的内容：

```js
if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(
    `\u001b[33mThis repository must using pnpm as the package manager ` +
    ` for scripts to work properly.\u001b[39m\n`,
  )
  process.exit(1)
}
```

配置命令：

```json
"scripts": {
	"preinstall": "node ./scripts/preinstall.js"
}
```

<span style="color:red;font-weight:bold;">当我们使用npm或者yarn来安装包的时候，就会报错了。原理就是在install的时候会触发preinstall（npm提供的生命周期钩子）这个文件里面的代码。</span>
