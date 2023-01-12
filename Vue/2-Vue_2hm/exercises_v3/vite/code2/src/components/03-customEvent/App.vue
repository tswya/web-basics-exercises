<template>
  <div>
    <h1>App根组件</h1>
    <hr />
    <my-counter @countChange="getCount"></my-counter>
  </div>
</template>

<script>
import MyCounter from './Counter.vue'
export default {
  name: 'MyApp',
  components: {
    MyCounter
  },
  methods: {
    getCount(val) {
      console.log('countChange被触发', val)
    }
  }
}
</script>

<style></style>
