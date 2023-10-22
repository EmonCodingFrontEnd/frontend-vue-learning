const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      // 自定义入口
      entry: 'src/main.js',
    },
  },
  // 关闭语法检查
  lintOnSave: false,
  // 开启代理服务器（方式一）
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // },

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
})
