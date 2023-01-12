<template>
  <div>
    <p>count的值是：{{ number }}</p>
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  props: ['number'],
  name: 'MyCounter',
  emits: ['update: number'],
  methods: {
    add() {
      this.$emit('update:number', this.number + 1)
    }
  }
}
</script>

<style></style>
