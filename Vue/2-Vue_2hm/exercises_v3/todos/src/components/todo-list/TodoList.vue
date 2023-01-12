<template>
  <ul class="list-group">
    <li
      class="list-group-item d-flex justify-content-between align-items-center"
      v-for="item in list"
      :key="item.id"
    >
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          :id="'item' + item.id"
          v-model="item.done"
        /><!-- 注意：App 父组件通过 props 传递过来的 list 是“引用类型”的数据，-->
        <label
          class="custom-control-label"
          :for="'item' + item.id"
          :class="item.done ? 'delete' : ''"
          >{{ item.task }}</label
        >
      </div>

      <span class="badge badge-success badge-pill" v-if="item.done">完成</span>
      <span class="badge badge-warning badge-pill" v-else>未完成</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    list: {
      type: Array,
      required: true,
      default: []
    }
  }
}
</script>

<style lang="less" scoped>
.list-group {
  width: 400px;
}
.delete {
  text-decoration: line-through;
  color: gray;
  font-style: italic;
}
</style>
