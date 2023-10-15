const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      // 自定义入口
      entry: 'src/main.js'
    }
  },
  lintOnSave: false
})
