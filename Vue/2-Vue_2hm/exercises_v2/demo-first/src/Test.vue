<template>
    <div>
        <div class="test-box">
            <h3>自定义Test.vue -- {{ username }}</h3>
            <button @click="changeName">修改用户名</button>
        </div>
        <div>123</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: 'admin'
        }
    },
    methods: {
        changeName() {
            console.log(this);
            this.username = 'aaa'
        }
    },
    watch: {

    },
    computed: {

    },
    filters: {

    }
}
</script>

<!-- <style>
.test-box {
    background-color: lightblue;
}
</style> -->
<style lang="less">
.test-box {
    background-color: lightblue;
    h3 {
        color: red;
    }
}
</style>