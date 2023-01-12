<template>
  <button
    type="button"
    class="btn btn-light btn-sm"
    @click="this.$router.go(-1)"
  >
    后退
  </button>
  <h4 class="text-center">用户详情 -- {{ id }}</h4>
</template>

<script>
export default {
  name: 'MyUserDetail',
  props: ['id']
}
</script>

<style lang="less" scoped></style>
