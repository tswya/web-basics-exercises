<template>
  <div class="footer-container">
    <!-- 全选按钮 -->
    <div class="custom-control custom-checkbox">
      <input
        type="checkbox"
        class="custom-control-input"
        id="fullCheck"
        :checked="isfull"
        @change="onCheckboxChange"
      />
      <label class="custom-control-label" for="fullCheck">全选 </label>
    </div>
    <!-- 合计 -->
    <div>
      <span>合计：</span>
      <span class="amount">￥{{ amount.toFixed(2) }}</span>
    </div>
    <!-- 结算按钮 -->
    <button type="button" class="btn btn-primary" :disabled="total === 0">
      结算({{ total }})
    </button>
  </div>
</template>

<script>
export default {
  name: 'EsFooter',
  props: {
    amount: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    },
    isfull: {
      type: Boolean,
      default: false
    }
  },
  emits: ['fullChange'],
  methods: {
    onCheckboxChange(e) {
      // console.log(e.target.checked);
      this.$emit('fullChange', e.target.checked)
    }
  }
}
</script>

<style lang="less" scoped>
.footer-container {
  height: 50px;
  width: 100%;
  background-color: white;
  border-top: 1px solid #efefef;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 10px;
}
.amount {
  color: red;
  font-weight: bold;
}
.btn-primary {
  // 设置固定高度
  height: 38px;
  // 设置圆角效果
  border-radius: 19px;
  // 设置最小宽度
  min-width: 90px;
}
</style>
