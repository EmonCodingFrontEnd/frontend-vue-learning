const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭语法检查
  lintOnSave: false,
  // 配置代理跨域
  devServer: {
    proxy: {
      "/api": {
        target: 'http://gmall-h5-api.atguigu.cn',
        // pathRewrite: { '^/api': '' }
      }
    }
  },
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false
})
