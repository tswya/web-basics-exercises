<template>
  <h1>App.vue 根组件</h1>
  <my-swiper></my-swiper>
  <my-test></my-test>
  <my-search></my-search>
</template>

<script>
import Search from './components/02-privateReg/Search.vue'

export default {
  name: 'MyApp',
  components: {
    'my-search': Search
  }
}
</script>

<style lang="less" scoped>
h1 {
  border: 1px solid red;
}
/deep/ .title {
  color: blue;
}
:deep(.title) {
  border: 1px solid red;
}
</style>
