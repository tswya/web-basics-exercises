<template>
  <div class="app-container">
    <h1>App根组件</h1>
    <hr />
    <my-header title="咕咕" bgcolor="#000" color="#fff"></my-header>
  </div>
</template>

<script>
import MyHeader from './04-MyHeader/MyHeader.vue'
export default {
  name: 'MyApp',
  components: {
    MyHeader
  }
}
</script>

<style lang="less" scoped>
.app-container {
  margin-top: 45px;
}
</style>
