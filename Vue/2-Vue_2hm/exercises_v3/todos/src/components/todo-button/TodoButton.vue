<template>
  <div class="button-container mt-3">
    <div class="btn-group" role="group" aria-label="Basic example">
      <button
        type="button"
        class="btn"
        :class="active === 0 ? 'btn-primary' : 'btn-secondary'"
        @click="onBtnClick(0)"
      >
        全部
      </button>
      <button
        type="button"
        class="btn"
        :class="active === 1 ? 'btn-primary' : 'btn-secondary'"
        @click="onBtnClick(1)"
      >
        已完成
      </button>
      <button
        type="button"
        class="btn"
        :class="active === 2 ? 'btn-primary' : 'btn-secondary'"
        @click="onBtnClick(2)"
      >
        未完成
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyBtn',
  emits: ['update:active'],
  props: {
    active: {
      type: Number,
      required: true,
      default: 0 //(全部：0，已完成：1，未完成：2)
    }
  },
  methods: {
    onBtnClick(index) {
      if (index === this.active) return
      this.$emit('update:active', index)
    }
  }
}
</script>

<style lang="less" scoped>
.button-container {
  width: 400px;
  text-align: center;
}
</style>
