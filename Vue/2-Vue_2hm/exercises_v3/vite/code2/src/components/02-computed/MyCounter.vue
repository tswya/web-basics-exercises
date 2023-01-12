<template>
  <div>
    <input type="text" v-model.number="count" />
    <p>{{ count }} * 2 = {{ plus }}</p>
    <p>{{ count }} * 2 = {{ plus }}</p>
    <p>{{ count }} * 2 = {{ plus }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1
    }
  },
  computed: {
    plus() {
      console.log('computed')
      return this.count * 2
    }
  },
  methods: {
    plus() {
      console.log('methods')
      return this.count * 2
    }
  }
}
</script>

<style></style>
