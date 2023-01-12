<template>
  <div>
    <h1>App根组件</h1>
    <hr />
    <my-count></my-count>
  </div>
</template>

<script>
import MyCount from './MyCounter.vue'
export default {
  name: 'MyApp',
  components: {
    MyCount
  }
}
</script>

<style></style>
