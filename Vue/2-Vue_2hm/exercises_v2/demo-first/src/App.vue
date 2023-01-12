
<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <button @click="flag = !flag">Toggle Flag</button>
    <Test info="hello" v-if="flag"></Test>
    <hr>
    <button @click="reset">重置Test2组件中的数值</button>
    <Test2 ref="counterRef"></Test2>
    
    <hr>
    <div class="box">
      <Left></Left>
      <Right></Right>
    </div>
  </div>
  
</template>



<script>
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'
import Test from '@/components/Test.vue'
import Test2 from '@/components/Test2.vue'

export default {
  data() {
    return {
      flag: true
    }
  },
  methods: {
    reset() {
      console.log(this.$refs.counterRef)
      // this.$refs.counterRef.resetCount()
      this.$refs.counterRef.count = 0
    }
  },  
  components: {
    Left,
    Right,
    Test,
    Test2
  }
}
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
}
</style>