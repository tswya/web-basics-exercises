<template>
  <div>
    App根组件
    <hr />
    <my-table :data="goodslist">
      <template v-slot:header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #body="{ row, index }">
        <td>{{ index + 1 }}</td>
        <td>{{ row.goods_name }}</td>
        <td>{{ row.goods_price }}</td>
        <!-- <td>{{ row.tags }}</td> -->
        <td>
          <input
            type="text"
            class="form-control form-control-sm ipt-tag form-ipt"
            v-if="row.inputVisible"
            v-focus
            v-model.trim="row.inputValue"
            @blur="onInputConfirm(row)"
            @keyup.enter="onInputConfirm(row)"
            @keyup.esc="row.inputValue = ''"
          />
          <button
            type="button"
            class="btn btn-primary btn-sm"
            v-else
            @click="row.inputVisible = true"
          >
            + Tag
          </button>
          <span
            class="badge badge-warning ml-2"
            v-for="item in row.tags"
            :key="item"
            >{{ item }}</span
          >
        </td>
        <td>
          <button
            type="button"
            class="btn btn-danger btn-sm"
            @click="onRemove(row.id)"
          >
            删除
          </button>
        </td>
      </template>
    </my-table>
  </div>
</template>

<script>
import MyTable from './components/MyTable.vue'

export default {
  name: 'MyApp',
  data() {
    return {
      goodslist: []
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    async getGoodsList() {
      const { data: res } = await this.$http.get('/api/goods')
      if (res.status !== 0) return console.log('获取列表失败！')
      this.goodslist = res.data
    },
    onRemove(id) {
      this.goodslist = this.goodslist.filter((x) => x.id !== id)
    },
    onInputConfirm(row) {
      const val = row.inputValue
      row.inputValue = ''
      row.inputVisible = false
      if (!val || row.tags.indexOf(val) !== -1) return
      row.tags.push(val)
    }
  },
  components: {
    MyTable
  },
  directives: {
    focus(el) {
      el.focus()
    }
  }
}
</script>

<style lang="less" scoped>
.form-ipt {
  width: 80px;
  display: inline;
}
</style>
