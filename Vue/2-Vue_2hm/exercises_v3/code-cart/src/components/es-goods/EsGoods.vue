<template>
  <div class="goods-container">
    <div class="left">
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          :id="id"
          :checked="checked"
          @change="onCheckBoxChange"
        />
        <!-- 将商品图片包裹于 label 之中，点击图片可以切换“复选框”的选
中状态 -->
        <label class="custom-control-label" :for="id">
          <img :src="thumb" alt="商品图片" class="thumb" />
        </label>
      </div>
      <!-- <img src="" alt="商品图片" class="thumb" /> -->
    </div>
    <div class="right">
      <div class="top">{{ title }}</div>
      <div class="bottom">
        <div class="price">￥{{ price.toFixed(2) }}</div>
        <div class="count">
          <es-counter :num="count" :min="1" @numChange="getNumber"></es-counter>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EsCounter from '../es-counter/EsCounter.vue'
export default {
  name: 'EsGoods',
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    thumb: {
      type: String,
      required: true
    },
    // 2. 商品的名称
    title: {
      type: String,
      required: true
    },
    // 3. 单价
    price: { type: Number, required: true },
    // 4. 数量
    count: {
      type: Number,
      required: true
    },
    // 5. 商品的勾选状态
    checked: {
      type: Boolean,
      required: true
    }
  },
  emits: ['stateChange', 'countChange'],
  methods: {
    onCheckBoxChange(e) {
      // console.log(e.target.checked);
      this.$emit('stateChange', { id: this.id, value: e.target.checked })
    },
    getNumber(num) {
      this.$emit('countChange', { id: this.id, value: num })
    }
  },
  components: {
    EsCounter
  }
}
</script>

<style lang="less" scoped>
.custom-control-label::before,
.custom-control-label::after {
  top: 3.4rem;
}
.goods-container {
  + .goods-container {
    border-top: 1px solid #efefef;
  }
  display: flex;
  padding: 10px;
  // 左侧图片的样式
  .left {
    margin-right: 10px;
    // 商品图片
    .thumb {
      display: block;
      width: 100px;
      height: 100px;
      background-color: #efefef;
    }
  }
  // 右侧商品名称、单价、数量的样式
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    .top {
      font-weight: bold;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}
</style>
