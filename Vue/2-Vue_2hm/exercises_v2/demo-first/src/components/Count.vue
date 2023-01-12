<template>
  <div>
    <h5>Count组件</h5>
    <p>count的值是 {{ count }}</p>
    <button @click="count += 1">+1</button>
  </div>
</template>

<script>
export default {
    // props: ['init'], //组件的封装者
    props: {
        init: {
            default: 0,
            type: Number,
            required: true
        }
    },
    data() {
        return {
            count: this.init
        }
    },
    /* methods: {
        add() {
            this.count += 1;
        }
    } */

}
</script>

<style lang="less">

</style>