// const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const themePath = path.join(__dirname, './src/theme.less')
/* module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false // 检查命名规范
}) */
module.exports = {
  /* defineConfig: {
    transpileDependencies: true,
    lintOnSave: false // 检查命名规范
  }, */
  publicPath: './',
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            // 'text-color': '#111',
            // 'border-color': '#eee',
            // 'nav-bar-background-color': '#007bff'
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "${themePath}";`
          }
        }
      }
    }
  }
}
