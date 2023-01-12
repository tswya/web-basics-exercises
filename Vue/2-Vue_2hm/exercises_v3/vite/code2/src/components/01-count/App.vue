<template>
  <div>
    <h1>App根组件</h1>
    <hr />
    <my-count :count="1" :state="true" type="success"></my-count>
  </div>
</template>

<script>
import MyCount from './Count.vue'
export default {
  name: 'MyApp',
  components: {
    MyCount
  }
}
</script>

<style></style>
