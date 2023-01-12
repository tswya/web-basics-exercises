const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    port: 3000,
    open: true,
    host: 'localhost',
    proxy: 'https://www.escook.cn'
  }
}
