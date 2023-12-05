# app

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

<span style="color:red;font-weight:bold;">建议通过VSCode直接打开“vue2-03-inaction/app“文件夹。</span>

最新接口地址: http://gmall-h5-api.atguigu.cn

后台文档swagger地址:
http://39.98.123.211:8510/swagger-ui.html#/



# 项目的其他配置

## 项目运行起来的时候，让浏览器自动打开

- 打开文件package.json

```json
"scripts": {
    "serve": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
}
```

## eslint校验功能关闭

- 文件vue.config.js

```js
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭语法检查
  lintOnSave: false,
})
```

## src文件夹简写方法，配置别名

- jsconfig.json配置别名@提示

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
  },
  "exclude": [
    "node_modules",
    "dist"
  ]
}
```

















