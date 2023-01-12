<template>
    <div>
      <h5>Test2组件</h5>
      <p>count的值是 {{ count }}</p>
      <button @click="count += 1">+1</button>
      <button @click="resetCount">重置</button>
    </div>
  </template>
  
  <script>
  export default {
      
      data() {
          return {
              count: 0
          }
      },
      methods: {
        resetCount() {
            this.count = 0
        }
      }
  }
  </script>
  
  <style lang="less">
  
  </style>