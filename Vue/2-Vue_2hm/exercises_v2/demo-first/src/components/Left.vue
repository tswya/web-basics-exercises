<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <hr/>
    <!-- <van-button type="primary">主要按钮</van-button> -->
    <hr/>
    <MyCount :init="6"></MyCount>  <!-- 组件的使用者 -->
    <!-- <MyCount :init="9"></MyCount> -->
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
h3 {
  color: red;
}
/* h3[data-v-001] {
  color: red;
} */

// h5[data-v-3c83f0b7]
// [data-v-3c83f0b7] h5

// 当使用第三方组件库的时候，如果有修改第三方组件默认样式的需求，需要用到 /deep/
/deep/ h5 {
  color: pink;
}

/deep/ button {
  color: pink;
  background-color: lightblue;
}
</style>
