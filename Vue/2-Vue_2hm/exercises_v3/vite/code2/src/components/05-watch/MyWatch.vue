<template>
  <div>
    <h3>watch侦听器的用法</h3>
    <!-- <input type="text" v-model.trim="username" /> -->
    <input type="text" v-model.trim="info.username" />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MyWatch',
  data() {
    return {
      username: 'admin',
      info: { username: 'zz' }
    }
  },
  watch: {
    /* async username(newVal, oldVal) {
      console.log(newVal, oldVal)
      const { data: res } = await axios.get(
        `https://www.escook.cn/api/finduser/${newVal}`
      )
      console.log(res)
      
    } */
    /* username: {
      async handler(newVal, oldVal) {
        const { data: res } = await axios.get(
          `https://www.escook.cn/api/finduser/${newVal}`
        )
        console.log(res)
      },
      immediate: true
    } */

    info: {
      async handler(newVal) {
        console.log(newVal)
        const { data: res } = await axios.get(
          `https://www.escook.cn/api/finduser/${newVal.username}`
        )
        console.log(res)
      },
      deep: true
    }
  }
}
</script>

<style lang="less" scoped></style>
