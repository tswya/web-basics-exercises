<template>
  <div id="app-container">
    <h1>App 根组件</h1>
    
    <p>{{ countFromRight }}</p>
    
    <p>{{ userinfo }}</p>
    <hr/>
    <div class="box">
      <Left :msg="message" :user="userinfo"></Left>
      <Right @numchange="getNewCount"></Right>
    </div>
  </div>
</template>

<script>
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";

export default {
  data() {
    return {
      message: 'hello',
      userinfo: {
        name: 'zz',
        age: 20
      },
      countFromRight: 0,
    }
  },
  methods: {
    getNewCount(val) {
      this.countFromRight = val
    }
  },
  components: {
    Left,
    Right,
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box {
  display: flex;
}
</style>
