<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <p>msg 的值是：{{ msg }}</p>
    <p>user 的值是：{{ user }}</p>
    <hr/>
    <!-- 不建议！！ -->
    <!-- <button @click="msg = 'hi'">修改msg</button>
    <button @click="user.name = 'aa'">修改user</button> -->
    <button @click="sendMsg">发送字符给Right</button>
    <p>{{ str }}</p>
  </div>
</template>

<script>
// 1. 导入 eventBus.js 模块
import bus from './eventBus.js'

export default {
  props: ['msg', 'user'],
  data() {
    return {
      str: 'aaa',
    }
  },
  methods: {
    sendMsg() {
      bus.$emit('share', this.str)
    }
  }
}
</script>

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
