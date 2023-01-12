<template>
  <div>
    <p>数量{{ count }}</p>
    <p>状态{{ state }}</p>
  </div>
</template>

<script>
export default {
  name: 'MyCount',
  // props: ['count', 'state']
  props: {
    count: Number,
    state: Boolean,
    type: {
      validator(value) {
        // 函数的返回值为true表示验证通过
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style></style>
